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
echo "🎉 Deployment initiated!"
echo ""
echo "Next steps:"
echo "1. Monitor GitHub Actions: https://github.com/YOUR_USERNAME/embit/actions"
echo "2. Wait for build to complete (~3 minutes)"
echo "3. QA team will receive Firebase App Distribution email"
echo "4. Monitor Firebase Console for analytics/crashlytics"
echo ""
echo "Firebase Console Quick Links:"
echo "- Analytics: https://console.firebase.google.com/project/YOUR_PROJECT/analytics/debugview"
echo "- Crashlytics: https://console.firebase.google.com/project/YOUR_PROJECT/crashlytics"
echo "- App Distribution: https://console.firebase.google.com/project/YOUR_PROJECT/appdistribution"
echo ""
echo -e "${GREEN}🚀 Deployment complete!${NC}"
