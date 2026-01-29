#!/bin/bash

# Embit QA Deployment Script
# Automates version bump and deployment to Firebase App Distribution

set -e  # Exit on error

echo "🚀 Embit QA Deployment Script"
echo "================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get current version from build.gradle.kts
CURRENT_VERSION=$(grep "versionName =" androidApp/build.gradle.kts | cut -d'"' -f2)
CURRENT_CODE=$(grep "versionCode =" androidApp/build.gradle.kts | grep -oP '\d+')

echo "📦 Current Version: $CURRENT_VERSION (code: $CURRENT_CODE)"
echo ""

# Ask for new version
read -p "Enter new version (e.g., 2.1.0): " NEW_VERSION
read -p "Enter new version code (current: $CURRENT_CODE): " NEW_CODE

if [ -z "$NEW_VERSION" ] || [ -z "$NEW_CODE" ]; then
    echo -e "${RED}❌ Version and code are required${NC}"
    exit 1
fi

echo ""
echo -e "${YELLOW}📝 Updating version to $NEW_VERSION (code: $NEW_CODE)${NC}"

# Update build.gradle.kts
sed -i "s/versionCode = $CURRENT_CODE/versionCode = $NEW_CODE/" androidApp/build.gradle.kts
sed -i "s/versionName = \"$CURRENT_VERSION\"/versionName = \"$NEW_VERSION\"/" androidApp/build.gradle.kts

echo -e "${GREEN}✅ Version updated in build.gradle.kts${NC}"
echo ""

# Show git diff
echo "📋 Changes:"
git diff androidApp/build.gradle.kts

echo ""
read -p "Commit and deploy? (y/n): " CONFIRM

if [ "$CONFIRM" != "y" ]; then
    echo -e "${RED}❌ Deployment cancelled${NC}"
    # Restore original version
    git checkout androidApp/build.gradle.kts
    exit 0
fi

# Commit version bump
git add androidApp/build.gradle.kts
git commit -m "chore: bump version to $NEW_VERSION"

echo -e "${GREEN}✅ Version committed${NC}"
echo ""

# Create and push tag
TAG="qa-$NEW_VERSION"
echo -e "${YELLOW}🏷️  Creating tag: $TAG${NC}"

git tag $TAG
git push origin HEAD
git push origin $TAG

echo ""
echo -e "${GREEN}✅ Tag pushed to GitHub${NC}"
echo ""

# Monitor the build
echo -e "${YELLOW}⏳ Monitoring build...${NC}"
echo ""

if ! scripts/wait-for-build.sh android-qa.yml "$TAG"; then
    BUILD_EXIT_CODE=$?
    echo ""
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${RED}❌ Deployment Failed${NC}"
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""

    case $BUILD_EXIT_CODE in
        1)
            echo "The build failed. Please check the logs and fix the issues."
            ;;
        20)
            echo "The build timed out. It may still be running."
            echo "Check status: gh run watch --repo ScheierVentures/embit"
            ;;
        10)
            echo "Could not find the workflow run. Check GitHub Actions manually."
            echo "Actions: https://github.com/ScheierVentures/embit/actions"
            ;;
        12)
            echo "Network error while monitoring. Build may still be running."
            echo "Check status: gh run list --repo ScheierVentures/embit"
            ;;
        30)
            echo "The build was cancelled."
            ;;
        *)
            echo "An unexpected error occurred (exit code: $BUILD_EXIT_CODE)"
            ;;
    esac

    echo ""
    echo "To rollback this deployment:"
    echo "  git tag -d $TAG"
    echo "  git push origin :refs/tags/$TAG"
    echo "  git reset --hard HEAD~1"
    echo ""

    exit $BUILD_EXIT_CODE
fi

# Build succeeded!
echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}🎉 QA Deployment Successful!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${GREEN}📦 Version:${NC} $NEW_VERSION-staging (build $NEW_CODE)"
echo -e "${GREEN}🔗 Build:${NC} GitHub Actions completed successfully"
echo ""
echo -e "${GREEN}Next Steps:${NC}"
echo "  1. ✅ APK uploaded to Firebase App Distribution"
echo "  2. 📧 QA team will receive download email"
echo "  3. 🧪 Test on staging environment"
echo "  4. 📊 Monitor Firebase Console for analytics/crashlytics"
echo ""
echo -e "${GREEN}Firebase Console Links:${NC}"
echo "  - App Distribution: https://console.firebase.google.com/project/embit-eco/appdistribution"
echo "  - Crashlytics: https://console.firebase.google.com/project/embit-eco/crashlytics"
echo "  - Analytics: https://console.firebase.google.com/project/embit-eco/analytics"
echo ""
