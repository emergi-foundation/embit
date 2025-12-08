#!/bin/bash
#
# Local verification script - mimics CI/CD checks
# Run this before pushing to catch issues early
#

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_header() {
    echo ""
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

FAILED_CHECKS=0

# Start verification
echo ""
echo -e "${GREEN}╔══════════════════════════════════════╗${NC}"
echo -e "${GREEN}║   🔍 Running Local Verification     ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════╝${NC}"
echo ""

# Check 1: Compilation
print_header "1️⃣  Checking Kotlin Compilation"
if ./gradlew compileDebugKotlin --no-daemon; then
    print_success "Compilation check passed"
else
    print_error "Compilation failed"
    FAILED_CHECKS=$((FAILED_CHECKS + 1))
fi

# Check 2: Unit Tests
print_header "2️⃣  Running Unit Tests"
if ./gradlew testDebugUnitTest --no-daemon; then
    print_success "Unit tests passed"
else
    print_error "Unit tests failed"
    FAILED_CHECKS=$((FAILED_CHECKS + 1))
fi

# Check 3: Code Quality (optional - will warn but not fail)
print_header "3️⃣  Code Quality Checks"
echo "Checking for common code issues..."

# Check for TODOs (informational only)
TODO_COUNT=$(git grep -n "TODO" -- "*.kt" | wc -l || echo "0")
if [ "$TODO_COUNT" -gt 0 ]; then
    print_warning "Found $TODO_COUNT TODO comments in code"
fi

# Check for println statements in production code
PRINTLN_COUNT=$(git grep -n "println(" -- "*.kt" | grep -v -E "(test|Test)" | wc -l || echo "0")
if [ "$PRINTLN_COUNT" -gt 0 ]; then
    print_warning "Found $PRINTLN_COUNT println() statements in production code"
fi

print_success "Code quality checks completed"

# Check 4: Build (optional - can be slow)
if [ "${1}" == "--full" ]; then
    print_header "4️⃣  Building APK (Full Build)"
    if ./gradlew :androidApp:assembleDebug --no-daemon; then
        print_success "APK build succeeded"
    else
        print_error "APK build failed"
        FAILED_CHECKS=$((FAILED_CHECKS + 1))
    fi
else
    print_header "4️⃣  APK Build"
    echo "Skipped (use --full to include APK build)"
fi

# Summary
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

if [ $FAILED_CHECKS -eq 0 ]; then
    echo -e "${GREEN}╔══════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║  ✅ All Checks Passed!              ║${NC}"
    echo -e "${GREEN}║  Ready to commit and push           ║${NC}"
    echo -e "${GREEN}╚══════════════════════════════════════╝${NC}"
    echo ""
    exit 0
else
    echo -e "${RED}╔══════════════════════════════════════╗${NC}"
    echo -e "${RED}║  ❌ $FAILED_CHECKS Check(s) Failed                ║${NC}"
    echo -e "${RED}║  Please fix issues before pushing   ║${NC}"
    echo -e "${RED}╚══════════════════════════════════════╝${NC}"
    echo ""
    exit 1
fi
