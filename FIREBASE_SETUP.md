# Firebase App Distribution Setup Guide

This guide walks you through setting up Firebase App Distribution for automated QA and staging releases.

## Prerequisites

- Google account with access to Firebase Console
- Admin access to the Embit GitHub repository

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **Add project**
3. Enter project name: **Embit**
4. Disable Google Analytics (optional for app distribution)
5. Click **Create project**

## Step 2: Add Android App to Firebase

1. In your Firebase project, click the Android icon (⚙️ Settings → Project settings)
2. Click **Add app** → **Android**
3. Fill in the details:
   - **Package name:** `eco.emergi.embit`
   - **App nickname:** Embit
   - **Debug signing certificate SHA-1:** (optional, can add later)
4. Click **Register app**
5. **Download `google-services.json`**
   - Save it to: `androidApp/google-services.json`
   - This file is already in `.gitignore` (contains API keys)

## Step 3: Add Firebase SDK to Project

Add the Google Services plugin to `androidApp/build.gradle.kts`:

```kotlin
plugins {
    // ... existing plugins
    id("com.google.gms.google-services") version "4.4.0"
}
```

Add to project-level `build.gradle.kts`:

```kotlin
buildscript {
    dependencies {
        classpath("com.google.gms:google-services:4.4.0")
    }
}
```

## Step 4: Enable App Distribution

1. In Firebase Console, go to **Release & Monitor** → **App Distribution**
2. Click **Get Started**
3. Accept the terms of service

## Step 5: Create Tester Groups

Create three tester groups:

### QA Team Group
1. Click **Testers & Groups** tab
2. Click **Add group**
3. Group name: **qa-team**
4. Add QA team members' email addresses
5. Click **Create group**

### Staging Testers Group
1. Repeat for: **staging-testers**
2. Add internal testers who will test before production
3. Click **Create group**

### Internal Dev Group (optional)
1. Repeat for: **internal-dev**
2. Add developers who want dev builds
3. Click **Create group**

## Step 6: Create Service Account for GitHub Actions

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your Firebase project
3. Go to **IAM & Admin** → **Service Accounts**
4. Click **Create Service Account**
   - Name: **GitHub Actions Firebase Deploy**
   - Description: **Service account for deploying to Firebase from GitHub Actions**
5. Click **Create and Continue**
6. Grant these roles:
   - **Firebase App Distribution Admin**
   - Click **Continue** → **Done**
7. Click on the service account you just created
8. Go to **Keys** tab
9. Click **Add Key** → **Create new key**
10. Choose **JSON** format
11. Download the JSON file

## Step 7: Add Secrets to GitHub Repository

1. Go to your GitHub repository: `ScheierVentures/embit`
2. Go to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**

Add these secrets:

### FIREBASE_APP_ID
- **Name:** `FIREBASE_APP_ID`
- **Value:** Get from Firebase Console → Project Settings → Your apps → App ID
  - Format: `1:123456789:android:abc123def456`

### FIREBASE_SERVICE_CREDENTIALS
- **Name:** `FIREBASE_SERVICE_CREDENTIALS`
- **Value:** Paste the entire contents of the JSON file you downloaded in Step 6

## Step 8: Enable Firebase Distribution in Workflows

Uncomment the Firebase deployment sections in:
- `.github/workflows/android-qa.yml` (lines with Firebase Distribution)
- `.github/workflows/android-release.yml` (lines with Firebase Distribution)

## Step 9: Test the Setup

### Test QA Release:
```bash
git tag qa-2.1.0
git push dev qa-2.1.0
```

- Watch the GitHub Action run
- Check Firebase Console → App Distribution
- QA team should receive email with download link

### Test Production Release:
```bash
git tag v-2.1.0
git push dev v-2.1.0
```

- Watch the GitHub Action run
- Check Firebase Console → App Distribution
- Staging testers should receive email

## Tester Experience

When a new build is released, testers will:

1. Receive an email: "New Embit build available"
2. Click the link in the email
3. Download and install the APK
4. First time: Android will prompt to allow "Install from unknown sources"
5. App updates: Will prompt to replace the existing app

## Troubleshooting

### Build fails with "google-services.json not found"
- Make sure `google-services.json` is in `androidApp/` directory
- Don't commit this file (it's in .gitignore)
- For CI, add it as a GitHub secret and decode it in the workflow

### Testers not receiving emails
- Check that testers are added to the correct group in Firebase Console
- Verify group name matches the workflow configuration
- Check spam folders

### "Insufficient permissions" error in GitHub Actions
- Verify the service account has **Firebase App Distribution Admin** role
- Regenerate the service account key if needed
- Update the `FIREBASE_SERVICE_CREDENTIALS` secret

## Next Steps

After Firebase is set up:

1. **For Development:** Use `./install-dev.sh` for rapid local testing
2. **For QA Testing:** Push tag `qa-X.Y.Z` to distribute to QA team
3. **For Production Testing:** Push tag `v-X.Y.Z` to distribute to staging testers
4. **For Production Release:** After staging approval, upload to Google Play Store

## Useful Commands

```bash
# List all releases in Firebase
firebase appdistribution:distribute list --app=<APP_ID>

# Distribute APK manually (if needed)
firebase appdistribution:distribute androidApp/build/outputs/apk/staging/release/*.apk \
  --app <APP_ID> \
  --groups "qa-team" \
  --release-notes "Manual QA release"
```

## References

- [Firebase App Distribution Docs](https://firebase.google.com/docs/app-distribution)
- [Firebase Distribution GitHub Action](https://github.com/wzieba/Firebase-Distribution-Github-Action)
- [Google Services Plugin](https://developers.google.com/android/guides/google-services-plugin)
