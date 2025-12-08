#!/bin/bash
#
# Test runner script for local development
# Makes it easy to run different test suites
#

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print colored output
print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Show usage
show_usage() {
    echo "Usage: $0 [option]"
    echo ""
    echo "Options:"
    echo "  all          Run all tests"
    echo "  unit         Run unit tests only (default)"
    echo "  shared       Run shared module tests only"
    echo "  android      Run Android app tests only"
    echo "  coverage     Run tests with coverage report"
    echo "  watch        Run tests in watch mode (re-run on changes)"
    echo "  clean        Clean build and run tests"
    echo ""
    echo "Examples:"
    echo "  $0           # Run unit tests"
    echo "  $0 all       # Run all tests"
    echo "  $0 coverage  # Run with coverage"
}

# Main test execution
TEST_TYPE="${1:-unit}"

case "$TEST_TYPE" in
    all)
        print_info "Running all tests..."
        ./gradlew test
        print_success "All tests passed!"
        ;;

    unit)
        print_info "Running unit tests..."
        ./gradlew testDebugUnitTest
        print_success "Unit tests passed!"
        ;;

    shared)
        print_info "Running shared module tests..."
        ./gradlew :shared:testDebugUnitTest
        print_success "Shared module tests passed!"
        ;;

    android)
        print_info "Running Android app tests..."
        ./gradlew :androidApp:testDebugUnitTest
        print_success "Android app tests passed!"
        ;;

    coverage)
        print_info "Running tests with coverage..."
        ./gradlew jacocoTestReport
        print_success "Tests with coverage completed!"

        # Find and display coverage report location
        REPORT_PATH="shared/build/reports/jacoco/jacocoTestReport/html/index.html"
        if [ -f "$REPORT_PATH" ]; then
            print_info "Coverage report: file://$(pwd)/$REPORT_PATH"
        fi
        ;;

    watch)
        print_info "Running tests in watch mode..."
        print_info "Press Ctrl+C to stop"
        ./gradlew test --continuous
        ;;

    clean)
        print_info "Cleaning and running tests..."
        ./gradlew clean test
        print_success "Clean test run completed!"
        ;;

    -h|--help|help)
        show_usage
        exit 0
        ;;

    *)
        print_error "Unknown option: $TEST_TYPE"
        echo ""
        show_usage
        exit 1
        ;;
esac
