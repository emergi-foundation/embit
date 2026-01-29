#!/bin/bash

################################################################################
# GitHub Actions Build Monitoring Script
#
# Monitors GitHub Actions workflow runs and waits for completion.
# Returns appropriate exit codes based on build outcome.
#
# Usage:
#   scripts/wait-for-build.sh <workflow-file> <tag-or-run-id>
#
# Examples:
#   scripts/wait-for-build.sh android-qa.yml qa-2.1.6
#   scripts/wait-for-build.sh android-qa.yml 21372921945
#   TIMEOUT=600 scripts/wait-for-build.sh android-qa.yml qa-2.1.6
#
# Exit Codes:
#   0   - Build succeeded
#   1   - Build failed
#   10  - Workflow run not found
#   11  - API rate limit exceeded
#   12  - Network error (after retries)
#   20  - Timeout (build didn't complete in time)
#   30  - Build cancelled
#   126 - gh not authenticated
#   127 - gh not installed
#   130 - Interrupted by user (Ctrl+C)
#
################################################################################

set -euo pipefail

# Configuration
REPO="${REPO:-ScheierVentures/embit}"
POLL_INTERVAL="${POLL_INTERVAL:-15}"        # seconds between status checks
TIMEOUT="${TIMEOUT:-1200}"                  # 20 minutes max wait time
STARTUP_DELAY="${STARTUP_DELAY:-10}"        # wait for GitHub to register push
MAX_FIND_ATTEMPTS="${MAX_FIND_ATTEMPTS:-6}" # attempts to find workflow run
FIND_RETRY_DELAY="${FIND_RETRY_DELAY:-5}"   # seconds between find attempts
MAX_RETRIES="${MAX_RETRIES:-3}"             # max retries for network errors
RETRY_DELAY="${RETRY_DELAY:-5}"             # seconds between retries
VERBOSE="${VERBOSE:-false}"                 # verbose output for debugging
SHOW_SPINNER="${SHOW_SPINNER:-true}"        # show spinner animation

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# Spinner characters
SPINNER_CHARS="⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏"

# Global variables
START_TIME=$(date +%s)
WORKFLOW_FILE=""
TAG_OR_RUN_ID=""
RUN_ID=""
RUN_URL=""

################################################################################
# Helper Functions
################################################################################

log_verbose() {
    if [[ "$VERBOSE" == "true" ]]; then
        echo -e "${BLUE}[VERBOSE]${NC} $1" >&2
    fi
}

log_error() {
    echo -e "${RED}❌ $1${NC}" >&2
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Calculate elapsed time
get_elapsed_time() {
    local current_time=$(date +%s)
    echo $((current_time - START_TIME))
}

# Format seconds to human readable time
format_duration() {
    local seconds=$1
    local minutes=$((seconds / 60))
    local remaining_seconds=$((seconds % 60))

    if [[ $minutes -gt 0 ]]; then
        echo "${minutes}m ${remaining_seconds}s"
    else
        echo "${seconds}s"
    fi
}

# Show spinner
show_spinner() {
    if [[ "$SHOW_SPINNER" != "true" ]]; then
        return
    fi

    local elapsed=$(get_elapsed_time)
    local spinner_index=$((elapsed % ${#SPINNER_CHARS}))
    local spinner_char="${SPINNER_CHARS:$spinner_index:1}"

    printf "\r⏳ Waiting... $(format_duration $elapsed) / $(format_duration $TIMEOUT) %s" "$spinner_char"
}

# Cleanup on exit
cleanup() {
    printf "\r\033[K" # Clear spinner line
}

trap cleanup EXIT

# Handle Ctrl+C
handle_interrupt() {
    echo ""
    echo ""
    log_warning "Monitoring interrupted by user"

    if [[ -n "$RUN_URL" ]]; then
        echo ""
        echo "Build is still running. Check status at:"
        echo "  $RUN_URL"
        echo ""
        echo "To resume monitoring:"
        echo "  scripts/wait-for-build.sh $WORKFLOW_FILE $RUN_ID"
    fi

    exit 130
}

trap handle_interrupt SIGINT SIGTERM

################################################################################
# Prerequisite Checks
################################################################################

check_prerequisites() {
    log_verbose "Checking prerequisites..."

    # Check if gh is installed
    if ! command -v gh &> /dev/null; then
        log_error "GitHub CLI (gh) is not installed"
        echo ""
        echo "Install it with:"
        echo "  brew install gh    (macOS)"
        echo "  apt install gh     (Ubuntu/Debian)"
        echo ""
        echo "Or visit: https://cli.github.com/"
        exit 127
    fi

    # Check if gh is authenticated
    if ! gh auth status &> /dev/null; then
        log_error "GitHub CLI is not authenticated"
        echo ""
        echo "Authenticate with:"
        echo "  gh auth login"
        echo ""
        exit 126
    fi

    log_verbose "Prerequisites check passed"
}

################################################################################
# API Helper Functions
################################################################################

# Execute gh command with retry logic
gh_with_retry() {
    local attempt=1
    local output
    local exit_code

    while [[ $attempt -le $MAX_RETRIES ]]; do
        log_verbose "Attempt $attempt/$MAX_RETRIES: $*"

        if output=$(gh "$@" 2>&1); then
            echo "$output"
            return 0
        else
            exit_code=$?

            # Check for rate limit
            if echo "$output" | grep -qi "rate limit"; then
                log_error "GitHub API rate limit exceeded"

                # Try to get reset time
                if reset_time=$(gh api rate_limit --jq '.resources.core.reset' 2>/dev/null); then
                    local reset_date=$(date -d "@$reset_time" 2>/dev/null || date -r "$reset_time" 2>/dev/null)
                    echo "Rate limit resets at: $reset_date"
                fi

                echo ""
                echo "Monitor manually with:"
                echo "  gh run watch --repo $REPO"
                exit 11
            fi

            # Retry on network errors
            if [[ $attempt -lt $MAX_RETRIES ]]; then
                log_warning "Command failed (attempt $attempt/$MAX_RETRIES), retrying in ${RETRY_DELAY}s..."
                sleep $RETRY_DELAY
                attempt=$((attempt + 1))
            else
                log_error "Command failed after $MAX_RETRIES attempts"
                log_verbose "Error output: $output"
                exit 12
            fi
        fi
    done
}

################################################################################
# Find Workflow Run
################################################################################

find_workflow_run() {
    local workflow="$1"
    local tag_or_id="$2"

    log_verbose "Finding workflow run for: $tag_or_id"

    # If it looks like a run ID (all digits), use it directly
    if [[ "$tag_or_id" =~ ^[0-9]+$ ]]; then
        log_verbose "Using run ID directly: $tag_or_id"
        RUN_ID="$tag_or_id"

        # Verify the run exists
        if ! gh_with_retry api "repos/$REPO/actions/runs/$RUN_ID" &> /dev/null; then
            log_error "Workflow run $RUN_ID not found"
            exit 10
        fi

        return 0
    fi

    # It's a tag/branch name - need to find the run
    echo "🔍 Searching for workflow run triggered by tag: $tag_or_id"

    # Wait for GitHub to register the push
    log_verbose "Waiting ${STARTUP_DELAY}s for GitHub to register tag push..."
    sleep $STARTUP_DELAY

    # Try multiple times to find the run
    local attempt=1
    while [[ $attempt -le $MAX_FIND_ATTEMPTS ]]; do
        log_verbose "Search attempt $attempt/$MAX_FIND_ATTEMPTS"

        # Query recent workflow runs
        local runs_json
        runs_json=$(gh_with_retry run list \
            --repo "$REPO" \
            --workflow "$workflow" \
            --limit 20 \
            --json databaseId,event,headBranch,createdAt,status,conclusion)

        log_verbose "Runs JSON: $runs_json"

        # Find run matching the tag
        local found_id
        found_id=$(echo "$runs_json" | jq -r --arg tag "$tag_or_id" \
            'map(select(.headBranch == $tag)) | .[0].databaseId // empty')

        if [[ -n "$found_id" && "$found_id" != "null" ]]; then
            RUN_ID="$found_id"
            log_success "Found workflow run: $RUN_ID"
            return 0
        fi

        if [[ $attempt -lt $MAX_FIND_ATTEMPTS ]]; then
            log_verbose "Run not found yet, retrying in ${FIND_RETRY_DELAY}s..."
            sleep $FIND_RETRY_DELAY
            attempt=$((attempt + 1))
        else
            break
        fi
    done

    # Not found after all attempts
    log_error "Could not find workflow run for tag: $tag_or_id"
    echo ""
    echo "Possible reasons:"
    echo "  • GitHub is still processing the tag push (wait a moment)"
    echo "  • Workflow doesn't trigger on this tag"
    echo "  • Workflow file has errors"
    echo ""
    echo "Check manually at:"
    echo "  https://github.com/$REPO/actions"
    echo ""
    echo "Or list recent runs:"
    echo "  gh run list --repo $REPO --workflow $workflow"

    exit 10
}

################################################################################
# Poll Run Status
################################################################################

poll_run_status() {
    local run_id="$1"

    RUN_URL="https://github.com/$REPO/actions/runs/$run_id"
    echo "🔍 Monitoring build: $RUN_URL"
    echo ""

    local last_status=""
    local last_conclusion=""
    local elapsed=0

    while [[ $elapsed -lt $TIMEOUT ]]; do
        # Get current run status
        local run_data
        run_data=$(gh_with_retry api "repos/$REPO/actions/runs/$run_id")

        local status=$(echo "$run_data" | jq -r '.status')
        local conclusion=$(echo "$run_data" | jq -r '.conclusion // "null"')

        log_verbose "Status: $status, Conclusion: $conclusion"

        # Show status change
        if [[ "$status" != "$last_status" ]]; then
            printf "\r\033[K" # Clear line

            case "$status" in
                "queued")
                    echo "⏳ Build queued..."
                    ;;
                "in_progress")
                    echo "🔨 Build in progress..."
                    ;;
                "completed")
                    echo "✅ Build completed"
                    ;;
                "waiting")
                    echo "⏸️  Build waiting for approval..."
                    ;;
                *)
                    echo "📊 Build status: $status"
                    ;;
            esac

            last_status="$status"
        fi

        # Check if completed
        if [[ "$status" == "completed" ]]; then
            return $(get_conclusion_exit_code "$conclusion")
        fi

        # Show spinner
        show_spinner

        # Wait before next poll
        sleep $POLL_INTERVAL
        elapsed=$(get_elapsed_time)
    done

    # Timeout reached
    printf "\r\033[K" # Clear line
    log_warning "Build monitoring timed out after $(format_duration $TIMEOUT)"

    return 20
}

################################################################################
# Handle Build Conclusion
################################################################################

get_conclusion_exit_code() {
    local conclusion="$1"

    case "$conclusion" in
        "success")
            return 0
            ;;
        "failure")
            return 1
            ;;
        "cancelled")
            return 30
            ;;
        "skipped")
            return 4
            ;;
        "timed_out")
            return 20
            ;;
        *)
            log_warning "Unknown conclusion: $conclusion"
            return 1
            ;;
    esac
}

################################################################################
# Display Final Result
################################################################################

display_final_result() {
    local exit_code=$1
    local build_duration=$(get_elapsed_time)

    echo ""

    case $exit_code in
        0)
            echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
            log_success "Build SUCCESSFUL"
            echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
            echo ""
            echo -e "${BOLD}⏱️  Build Time:${NC} $(format_duration $build_duration)"
            echo -e "${BOLD}🔗 Build Logs:${NC} $RUN_URL"
            ;;

        1)
            echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
            log_error "Build FAILED"
            echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
            echo ""
            echo -e "${BOLD}⏱️  Build Time:${NC} $(format_duration $build_duration)"
            echo -e "${BOLD}🔗 Build Logs:${NC} $RUN_URL"
            echo ""
            echo "The GitHub Actions build failed. Please:"
            echo "  1. Check the build logs for errors"
            echo "  2. Fix the issues"
            echo "  3. Re-run the deployment"
            ;;

        20)
            log_warning "Build monitoring timed out"
            echo ""
            echo "The build is still running. Check status manually:"
            echo "  gh run watch --repo $REPO"
            echo ""
            echo "Or view in browser:"
            echo "  $RUN_URL"
            ;;

        30)
            log_warning "Build was cancelled"
            echo ""
            echo -e "${BOLD}🔗 Build Logs:${NC} $RUN_URL"
            ;;

        *)
            log_error "Unexpected error (code: $exit_code)"
            echo ""
            echo -e "${BOLD}🔗 Build:${NC} $RUN_URL"
            ;;
    esac

    echo ""
}

################################################################################
# Main Function
################################################################################

main() {
    # Parse arguments
    if [[ $# -lt 2 ]]; then
        echo "Usage: $0 <workflow-file> <tag-or-run-id>"
        echo ""
        echo "Examples:"
        echo "  $0 android-qa.yml qa-2.1.6"
        echo "  $0 android-qa.yml 21372921945"
        echo "  TIMEOUT=600 $0 android-qa.yml qa-2.1.6"
        echo ""
        exit 1
    fi

    WORKFLOW_FILE="$1"
    TAG_OR_RUN_ID="$2"

    # Check prerequisites
    check_prerequisites

    # Find workflow run
    find_workflow_run "$WORKFLOW_FILE" "$TAG_OR_RUN_ID"

    # Poll until completion
    poll_run_status "$RUN_ID"
    local exit_code=$?

    # Display result
    display_final_result $exit_code

    return $exit_code
}

# Run main function
main "$@"
