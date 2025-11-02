#!/bin/bash

# Embit v2.0 Setup Script
# This script helps set up the development environment

set -e  # Exit on error

echo "╔════════════════════════════════════════════════════════╗"
echo "║          Embit v2.0 - Setup Script                    ║"
echo "║      Battery Monitoring with Advanced Analytics       ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Step 1: Check prerequisites
echo "Step 1: Checking prerequisites..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check Java
if command_exists java; then
    JAVA_VERSION=$(java -version 2>&1 | awk -F '"' '/version/ {print $2}')
    print_success "Java found: $JAVA_VERSION"

    # Check if Java 21+
    JAVA_MAJOR=$(echo "$JAVA_VERSION" | cut -d. -f1)
    if [ "$JAVA_MAJOR" -ge 21 ]; then
        print_success "Java version is 21 or higher"
    else
        print_warning "Java version is below 21. Recommended: JDK 21+"
    fi
else
    print_error "Java not found. Please install JDK 21+"
    exit 1
fi

# Check if JAVA_HOME is set
if [ -z "$JAVA_HOME" ]; then
    print_warning "JAVA_HOME not set. May cause issues."
else
    print_success "JAVA_HOME: $JAVA_HOME"
fi

# Check for Android SDK
if [ -n "$ANDROID_HOME" ]; then
    print_success "ANDROID_HOME: $ANDROID_HOME"
    ANDROID_SDK="$ANDROID_HOME"
elif [ -n "$ANDROID_SDK_ROOT" ]; then
    print_success "ANDROID_SDK_ROOT: $ANDROID_SDK_ROOT"
    ANDROID_SDK="$ANDROID_SDK_ROOT"
else
    print_warning "ANDROID_HOME not set"

    # Try to find Android SDK
    if [ -d "$HOME/Android/Sdk" ]; then
        ANDROID_SDK="$HOME/Android/Sdk"
        print_info "Found Android SDK at: $ANDROID_SDK"
    elif [ -d "/usr/lib/android-sdk" ]; then
        ANDROID_SDK="/usr/lib/android-sdk"
        print_info "Found Android SDK at: $ANDROID_SDK"
    else
        print_error "Android SDK not found. Please install Android SDK or set ANDROID_HOME."
        echo ""
        echo "Download from: https://developer.android.com/studio"
        ANDROID_SDK=""
    fi
fi

echo ""

# Step 2: Create local.properties
echo "Step 2: Configuring local.properties..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "local.properties" ]; then
    print_warning "local.properties already exists"
    echo ""
    read -p "Overwrite? (y/n): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_info "Skipping local.properties creation"
    else
        if [ -n "$ANDROID_SDK" ]; then
            echo "sdk.dir=$ANDROID_SDK" > local.properties
            print_success "Created local.properties with sdk.dir=$ANDROID_SDK"
        else
            print_error "Cannot create local.properties without Android SDK path"
        fi
    fi
else
    if [ -n "$ANDROID_SDK" ]; then
        echo "sdk.dir=$ANDROID_SDK" > local.properties
        print_success "Created local.properties with sdk.dir=$ANDROID_SDK"
    else
        print_warning "Skipping local.properties creation (Android SDK not found)"
        print_info "You'll need to create it manually with:"
        echo "  sdk.dir=/path/to/your/Android/Sdk"
    fi
fi

echo ""

# Step 3: Make gradlew executable
echo "Step 3: Setting up Gradle..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "gradlew" ]; then
    chmod +x gradlew
    print_success "Made gradlew executable"
else
    print_error "gradlew not found!"
    exit 1
fi

echo ""

# Step 4: Check Gradle version
echo "Step 4: Checking Gradle version..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "gradle/wrapper/gradle-wrapper.properties" ]; then
    GRADLE_VERSION=$(grep "distributionUrl" gradle/wrapper/gradle-wrapper.properties | sed 's/.*gradle-\(.*\)-all.zip/\1/')
    print_info "Gradle version: $GRADLE_VERSION"

    if [ "$GRADLE_VERSION" == "8.7" ]; then
        print_success "Using Gradle 8.7 (correct version)"
    else
        print_warning "Expected Gradle 8.7, found $GRADLE_VERSION"
    fi
else
    print_error "gradle-wrapper.properties not found"
fi

echo ""

# Step 5: Run initial build check
echo "Step 5: Testing build configuration..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

print_info "Running: ./gradlew tasks --dry-run"
echo ""

if ./gradlew tasks --dry-run > /dev/null 2>&1; then
    print_success "Build configuration is valid!"
else
    print_warning "Build configuration test failed. This may be normal if Android SDK is not configured."
fi

echo ""

# Step 6: Summary and next steps
echo "╔════════════════════════════════════════════════════════╗"
echo "║                 Setup Complete!                        ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

print_success "Setup completed successfully!"
echo ""

echo "Next Steps:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Open project in Android Studio:"
echo "   ${BLUE}File → Open → Select embit directory${NC}"
echo ""
echo "2. Wait for Gradle sync to complete"
echo ""
echo "3. Build the project:"
echo "   ${BLUE}./gradlew build${NC}"
echo ""
echo "4. Run tests:"
echo "   ${BLUE}./gradlew test${NC}"
echo ""
echo "5. Install on device:"
echo "   ${BLUE}./gradlew :androidApp:installDebug${NC}"
echo ""

echo "Useful Commands:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "  ${BLUE}./gradlew build${NC}                 Build entire project"
echo "  ${BLUE}./gradlew test${NC}                  Run all tests"
echo "  ${BLUE}./gradlew clean${NC}                 Clean build artifacts"
echo "  ${BLUE}./gradlew :shared:test${NC}          Run shared module tests"
echo "  ${BLUE}./gradlew :androidApp:assembleDebug${NC}  Build Android APK"
echo ""

echo "Documentation:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "  ${BLUE}README.md${NC}          User guide and features"
echo "  ${BLUE}CLAUDE.md${NC}          Developer guide (architecture, API)"
echo "  ${BLUE}TESTING.md${NC}         Testing guide and best practices"
echo "  ${BLUE}MIGRATION.md${NC}       Data migration guide"
echo "  ${BLUE}PROJECT_SUMMARY.md${NC} Complete project overview"
echo "  ${BLUE}CHANGELOG.md${NC}       Version history and changes"
echo ""

echo "Support:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "  GitHub Issues:     Report bugs and request features"
echo "  GitHub Discussions: Ask questions and share ideas"
echo ""

if [ -z "$ANDROID_SDK" ]; then
    echo ""
    print_warning "Don't forget to configure Android SDK!"
    echo ""
    echo "Create or update ${BLUE}local.properties${NC} with:"
    echo "  sdk.dir=/path/to/your/Android/Sdk"
    echo ""
fi

echo "Happy coding! 🚀"
echo ""
