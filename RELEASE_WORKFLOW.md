# Embit Release Workflow Guide

Complete guide for the Embit Android app development, testing, and release process.

## Overview

Embit uses a **trunk-based development** workflow with **product flavors** and **Firebase App Distribution** for efficient testing across environments.

### Environments

| Environment | Flavor | Purpose | Distribution |
|-------------|--------|---------|--------------|
| **Development** | dev | Local development, rapid testing | Local device via ADB |
| **QA** | staging | QA team testing | Firebase App Distribution |
| **Staging** | production | Pre-production testing | Firebase App Distribution |
| **Production** | production | Public release | Google Play Store |

## 1. Local Development Workflow

### Quick Dev Testing (Recommended)

For rapid iteration during active development:

```bash
./install-dev.sh
```

**What it does:**
- Builds `devDebug` flavor
- Installs to connected Android device
- Auto-launches the app
- **Cycle time:** ~1-2 minutes

**Requirements:**
- Android device connected via USB
- USB debugging enabled
- ADB authorized

### View Logs

```bash
# Watch app logs in real-time
adb logcat | grep Embit

# Or filter by package
adb logcat | grep "eco.emergi.embit"
```

### Force Stop App

```bash
adb shell am force-stop eco.emergi.embit
```

### Manual Build (if needed)

```bash
# Build only
./gradlew :androidApp:assembleDevDebug

# Build and install
./gradlew :androidApp:installDevDebug

# Run the app
adb shell am start -n eco.emergi.embit/.MainActivity
```

## 2. QA Release Workflow

When you're ready for QA testing:

### Step 1: Ensure Changes are Committed

```bash
git status  # Make sure everything is committed
git log --oneline -5  # Review recent commits
```

### Step 2: Create QA Tag

```bash
git tag qa-2.1.0  # Use semantic versioning
git push dev qa-2.1.0
```

**What happens:**
1. GitHub Actions workflow `android-qa.yml` is triggered
2. Builds `stagingRelease` flavor
3. APK uploaded as GitHub artifact
4. (After Firebase setup) Distributed to QA team via Firebase

### Step 3: Monitor Build

```bash
./check-build.sh
# or
export PATH="$HOME/.local/bin:$PATH"
gh run watch --repo ScheierVentures/embit
```

### Step 4: QA Team Tests

- QA team receives email from Firebase
- Downloads and installs APK
- Tests on staging environment
- Reports bugs/issues

### Step 5: Fix and Iterate

If issues are found:

```bash
# Fix the issues
git add .
git commit -m "Fix: [description]"
git push dev master

# Create new QA tag
git tag qa-2.1.1
git push dev qa-2.1.1
```

## 3. Production Release Workflow

After QA approval:

### Step 1: Final Review

```bash
git log qa-2.1.0..HEAD  # Review changes since last QA release
```

### Step 2: Create Production Tag

```bash
git tag v-2.1.0  # Production version (no 'qa-' prefix)
git push dev v-2.1.0
```

**What happens:**
1. GitHub Actions workflow `android-release.yml` is triggered
2. Builds `productionRelease` flavor
3. APK uploaded as GitHub artifact (unsigned for now)
4. (After Firebase setup) Distributed to staging testers

### Step 3: Staging Testing

- Internal testers receive production build
- Final testing before public release
- Verify all production configurations

### Step 4: Promote to Play Store

Once staging testing passes:

1. Download the signed APK from GitHub Actions
2. Upload to Google Play Console
3. Submit for review
4. Release to production track

## 4. Build Variants Explained

### Dev Flavor
```kotlin
// Config in build.gradle.kts
buildConfigField("String", "ENVIRONMENT", "\"development\"")
buildConfigField("boolean", "ENABLE_LOGGING", "true")
buildConfigField("String", "API_BASE_URL", "\"https://dev-api.embit.eco\"")
```

**Use in code:**
```kotlin
if (BuildConfig.ENABLE_LOGGING) {
    Log.d("Embit", "Debug info...")
}

val apiUrl = BuildConfig.API_BASE_URL
```

**App version:** `2.0.0-dev`

### Staging Flavor
```kotlin
buildConfigField("String", "ENVIRONMENT", "\"staging\"")
buildConfigField("boolean", "ENABLE_LOGGING", "true")
buildConfigField("String", "API_BASE_URL", "\"https://staging-api.embit.eco\"")
```

**App version:** `2.0.0-staging`

### Production Flavor
```kotlin
buildConfigField("String", "ENVIRONMENT", "\"production\"")
buildConfigField("boolean", "ENABLE_LOGGING", "false")
buildConfigField("String", "API_BASE_URL", "\"https://api.embit.eco\"")
```

**App version:** `2.0.0` (no suffix)

## 5. Version Management

### Current Approach

Versions are manually set in `androidApp/build.gradle.kts`:

```kotlin
versionCode = 2
versionName = "2.0.0"
```

**Flavors add suffixes:**
- Dev: `2.0.0-dev`
- Staging: `2.0.0-staging`
- Production: `2.0.0`

### Version Bump Strategy

| Change Type | Version Bump | Example |
|-------------|--------------|---------|
| **Bug fix** | Patch | 2.0.0 → 2.0.1 |
| **New feature** | Minor | 2.0.0 → 2.1.0 |
| **Breaking change** | Major | 2.0.0 → 3.0.0 |

**When to bump:**
- Bump `versionCode` for every release (required by Play Store)
- Bump `versionName` for each QA/Production release
- Git tag should match `versionName`

## 6. Git Workflow

### Branch Strategy

```
master (main development branch)
  ├── feature/battery-health-improvement
  ├── fix/notification-crash
  └── ... (merge PRs here)
```

**Rules:**
- All development happens on `master` or feature branches
- Feature branches merge to `master` via PR
- Tags trigger releases

### Tag Naming Convention

```
qa-X.Y.Z    # QA releases (staging flavor)
v-X.Y.Z     # Production releases (production flavor)
```

**Examples:**
```bash
qa-2.1.0    # First QA release of version 2.1
qa-2.1.1    # Bug fix in QA
qa-2.1.2    # Another iteration
v-2.1.0     # Final production release
```

### Typical Development Cycle

```bash
# 1. Start new feature
git checkout -b feature/new-battery-algorithm
# ... make changes ...
git add .
git commit -m "feat: Implement new battery algorithm"

# 2. Open PR to master
git push dev feature/new-battery-algorithm
# Create PR in GitHub

# 3. After PR approval and merge
git checkout master
git pull dev master

# 4. Tag for QA
git tag qa-2.2.0
git push dev qa-2.2.0

# 5. After QA approval
git tag v-2.2.0
git push dev v-2.2.0
```

## 7. GitHub Actions Workflows

### android-dev.yml
- **Trigger:** Push to master, PRs
- **Builds:** `devDebug`
- **Output:** GitHub artifact
- **Use:** Continuous integration, automated dev builds

### android-qa.yml
- **Trigger:** Tags matching `qa-*`
- **Builds:** `stagingRelease`
- **Output:** GitHub artifact + Firebase distribution
- **Use:** QA team testing

### android-release.yml
- **Trigger:** Tags matching `v-*`
- **Builds:** `productionRelease`
- **Output:** GitHub artifact + Firebase distribution
- **Use:** Pre-production staging, Play Store preparation

## 8. Common Tasks

### Check Build Status
```bash
./check-build.sh
```

### Download Latest APK
```bash
export PATH="$HOME/.local/bin:$PATH"
gh run download --repo ScheierVentures/embit --name embit-dev-debug-apk
```

### Install APK from Downloaded File
```bash
adb install path/to/app.apk
```

### Uninstall App
```bash
adb uninstall eco.emergi.embit
```

### Clear App Data (Fresh Start)
```bash
adb shell pm clear eco.emergi.embit
```

### View Latest Release Tags
```bash
git tag -l | tail -10
```

### Delete a Tag (if needed)
```bash
git tag -d qa-2.1.0  # Delete locally
git push dev :refs/tags/qa-2.1.0  # Delete remotely
```

## 9. Troubleshooting

### "No devices found" when running install-dev.sh
```bash
# Check device connection
adb devices

# If no devices, check:
# 1. USB debugging enabled on device
# 2. USB cable connected
# 3. Authorized the computer on device
```

### "Installation failed" errors
```bash
# Uninstall existing app first
adb uninstall eco.emergi.embit

# Then try again
./install-dev.sh
```

### Build fails in GitHub Actions
```bash
# View detailed logs
export PATH="$HOME/.local/bin:$PATH"
gh run view --log-failed --repo ScheierVentures/embit
```

### Want to test staging flavor locally
```bash
# Build staging debug
./gradlew :androidApp:assembleStagingDebug

# Install it
adb install androidApp/build/outputs/apk/staging/debug/androidApp-staging-debug.apk
```

## 10. Best Practices

### Development
- Use `./install-dev.sh` for rapid iteration
- Test on multiple devices when possible
- Monitor logs for errors: `adb logcat | grep Embit`

### QA Releases
- Always tag after merging all intended changes
- Include meaningful release notes in commits
- Test locally before creating QA tag
- Increment version for each QA release if significant changes

### Production Releases
- Only tag production after QA approval
- Ensure version numbers are bumped correctly
- Test staging build thoroughly before Play Store
- Keep production tags stable (don't delete/retag)

### Version Control
- Keep `master` stable and releasable
- Use feature branches for experimental work
- Write clear commit messages
- Tag releases consistently

## 11. Future Enhancements

Consider adding:
- **Automatic version bumping** based on commits
- **Signed production builds** in CI
- **Automated Play Store uploads** via Fastlane
- **Automated changelog generation** from commits
- **Performance testing** in CI pipeline
- **Screenshot testing** for UI consistency

## Quick Reference

| Task | Command |
|------|---------|
| **Local dev build** | `./install-dev.sh` |
| **QA release** | `git tag qa-X.Y.Z && git push dev qa-X.Y.Z` |
| **Production release** | `git tag v-X.Y.Z && git push dev v-X.Y.Z` |
| **Check builds** | `./check-build.sh` |
| **View logs** | `adb logcat \| grep Embit` |
| **Force stop app** | `adb shell am force-stop eco.emergi.embit` |

---

For Firebase setup instructions, see [FIREBASE_SETUP.md](FIREBASE_SETUP.md)
