#!/bin/bash
# Quick install script for local development
# Builds dev flavor and installs to connected Android device via ADB

set -e

echo "🔨 Building Embit dev debug APK..."
./gradlew :androidApp:installDevDebug

echo ""
echo "🚀 Launching app on device..."
adb shell am start -n eco.emergi.embit/.MainActivity

echo ""
echo "✅ Embit dev build installed and launched!"
echo ""
echo "Useful commands:"
echo "  adb logcat | grep Embit     # View app logs"
echo "  adb shell am force-stop eco.emergi.embit  # Kill app"
echo "  ./install-dev.sh            # Rebuild and reinstall"
