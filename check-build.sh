#!/bin/bash
# Simple script to check the latest GitHub Actions build status
# Requires: gh CLI installed and authenticated

echo "Checking latest GitHub Actions builds for ScheierVentures/embit..."
echo ""

if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "Install it with: sudo apt install gh"
    echo "Then authenticate with: gh auth login"
    echo ""
    echo "Or check manually at:"
    echo "https://github.com/ScheierVentures/embit/actions"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub CLI"
    echo "Run: gh auth login"
    exit 1
fi

# Show latest runs
echo "📋 Recent workflow runs:"
gh run list --repo ScheierVentures/embit --limit 5

echo ""
echo "🔍 Latest run details:"
gh run view --repo ScheierVentures/embit

echo ""
echo "To watch the latest run in real-time:"
echo "  gh run watch --repo ScheierVentures/embit"
echo ""
echo "To download the latest successful APK:"
echo "  gh run download --repo ScheierVentures/embit --name embit-debug-apk"
