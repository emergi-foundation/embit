# Google Sign-In Setup Guide

This document provides step-by-step instructions to complete the Google Sign-In integration for Embit.

## Current Status

✅ **Completed:**
- Domain layer use cases (SignInWithGoogleUseCase, IsNewUserUseCase)
- Platform layer (GoogleSignInManager)
- Updated AuthViewModel with Google Sign-In methods
- Created UI components (GoogleSignInButton, PreferencesSetupScreen)
- Updated LoginScreen and SignUpScreen with Google Sign-In
- Updated Navigation with auto sign-in logic and new user flow
- Added Google logo placeholder
- Firebase Console configuration (SHA-1 fingerprints, Google provider enabled)
- Updated Web Client ID in GoogleSignInManager
- Updated google-services.json with OAuth credentials

❌ **Remaining (Manual Steps):**
- Configure GitHub Secrets for automated Firebase App Distribution deployment (Step 7)

## Firebase Console Configuration

### Step 1: Generate SHA-1 Fingerprint

Run the following command in the project directory to generate your SHA-1 fingerprint:

```bash
cd /home/ess/Documents/apps/embit
./gradlew signingReport
```

Alternatively, you can use keytool directly:

```bash
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
```

Copy the **SHA-1** fingerprint from the output. It will look something like:
```
SHA1: A1:B2:C3:D4:E5:F6:G7:H8:I9:J0:K1:L2:M3:N4:O5:P6:Q7:R8:S9:T0
```

**Note:** For release builds, you'll need to generate the SHA-1 for your release keystore as well.

### Step 2: Add SHA-1 to Firebase Console

1. Open the Firebase Console: https://console.firebase.google.com/project/embit-dd383
2. Go to **Project Settings** (gear icon)
3. Scroll down to **Your apps** section
4. Find your Android app (`eco.emergi.embit.android`)
5. Click **Add fingerprint**
6. Paste your SHA-1 fingerprint
7. Click **Save**

### Step 3: Enable Google Sign-In Provider

1. In Firebase Console, go to **Authentication** → **Sign-in method**
2. Find **Google** in the list of sign-in providers
3. Click **Enable**
4. Set a project support email (your email address)
5. Click **Save**

### Step 4: Download New google-services.json

1. Go back to **Project Settings** → **Your apps**
2. Download the updated `google-services.json` file
3. Replace the existing file at:
   ```
   /home/ess/Documents/apps/embit/androidApp/google-services.json
   ```

### Step 5: Extract Web Client ID

1. Open the new `google-services.json` file
2. Find the `oauth_client` array
3. Look for the entry with `"client_type": 3` (Web client)
4. Copy the `client_id` value. It will look like:
   ```json
   {
     "client_id": "123456789-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com",
     "client_type": 3,
     "android_info": {
       "package_name": "eco.emergi.embit.android"
     }
   }
   ```

### Step 6: Update GoogleSignInManager

1. Open the file:
   ```
   /home/ess/Documents/apps/embit/shared/src/androidMain/kotlin/eco/emergi/embit/platform/auth/GoogleSignInManager.kt
   ```

2. Find this line (around line 31):
   ```kotlin
   private val webClientId = "YOUR_WEB_CLIENT_ID_HERE"
   ```

3. Replace `YOUR_WEB_CLIENT_ID_HERE` with the actual Web Client ID from Step 5:
   ```kotlin
   private val webClientId = "123456789-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com"
   ```

4. Save the file

### Step 7: Configure GitHub Secrets for Firebase App Distribution

To enable automated deployment to your testers when you push QA tags, you need to configure GitHub Secrets with Firebase service account credentials.

#### 7.1: Generate Firebase Service Account Key

1. Open the Firebase Console: https://console.firebase.google.com/project/embit-dd383
2. Go to **Project Settings** (gear icon) → **Service Accounts** tab
3. Scroll down to the **Firebase Admin SDK** section
4. Click **Generate new private key**
5. Confirm by clicking **Generate key**
6. A JSON file will be downloaded (e.g., `embit-dd383-firebase-adminsdk-xxxxx.json`)
7. Keep this file secure - it provides admin access to your Firebase project

#### 7.2: Add Secret to GitHub Repository

1. Go to your GitHub repository: https://github.com/yourusername/embit
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Set the name to: `FIREBASE_SERVICE_CREDENTIALS_FILE_CONTENT`
5. Open the downloaded JSON file and copy its entire contents
6. Paste the JSON contents into the **Secret** field
7. Click **Add secret**

**Important:** The secret name MUST be exactly `FIREBASE_SERVICE_CREDENTIALS_FILE_CONTENT` - this matches what's used in the GitHub Actions workflow.

#### 7.3: Verify Configuration

1. Push a new QA tag to trigger deployment:
   ```bash
   git tag qa-google-signin-v2.2.1
   git push origin qa-google-signin-v2.2.1
   ```

2. Go to GitHub **Actions** tab and watch the workflow run

3. The workflow should now:
   - ✅ Build the APK successfully
   - ✅ Upload to Firebase App Distribution
   - ✅ Send notifications to your testers

4. Check Firebase Console → **App Distribution** to verify the build appears

#### 7.4: Troubleshooting GitHub Secrets

**Error: "Failed to authenticate, have you run firebase login?"**
- **Cause:** Secret not configured or has wrong name
- **Solution:** Verify secret name is exactly `FIREBASE_SERVICE_CREDENTIALS_FILE_CONTENT`

**Error: "Invalid service account credentials"**
- **Cause:** JSON file content is malformed or incomplete
- **Solution:** Re-copy the entire JSON file contents, including opening `{` and closing `}`

**Build succeeds but upload fails silently**
- **Cause:** Service account doesn't have Firebase App Distribution permissions
- **Solution:** In Firebase Console → Project Settings → Service Accounts, verify the service account has "Editor" role

## Testing

### Build and Deploy

After completing the configuration:

1. **Clean and rebuild the project:**
   ```bash
   ./gradlew clean
   ./gradlew :androidApp:assembleDebug
   ```

2. **Deploy to Firebase App Distribution:**
   ```bash
   git tag qa-google-signin-v1
   git push origin qa-google-signin-v1
   ```

### Manual Testing Checklist

- [ ] **Login Screen - Auto One Tap:**
  - Open the app
  - One Tap UI should appear automatically with your Google accounts
  - Select an account → Should sign in successfully

- [ ] **Login Screen - Manual Google Button:**
  - Click "Continue with Google" button
  - Should show account picker
  - Sign in successfully

- [ ] **New User Flow:**
  - Sign in with a new Google account
  - Should navigate to Preferences Setup screen
  - Select energy product and click "Get Started"
  - Should navigate to Monitor screen

- [ ] **Returning User Flow:**
  - Sign out
  - Sign in again with the same account
  - Should skip Preferences Setup and go directly to Monitor

- [ ] **Auto Sign-In:**
  - Close and reopen the app while signed in
  - Should automatically navigate to Monitor screen (skip login)

- [ ] **Email/Password Fallback:**
  - Email/password sign-in still works
  - Both sign-in methods work for the same user

- [ ] **Sign Up Screen:**
  - Google Sign-Up button works
  - New accounts go to Preferences Setup

- [ ] **Sign Out:**
  - Sign out from Settings
  - Google session is cleared
  - Next sign-in requires account selection again

### Known Issues / Limitations

1. **Web Client ID Placeholder:**
   - Google Sign-In will NOT work until you update the Web Client ID in `GoogleSignInManager.kt`
   - You'll see errors like "Developer error" or "Sign in failed"

2. **SHA-1 Fingerprint:**
   - Must be added for BOTH debug and release builds
   - Different fingerprints for different keystores

3. **One Tap Not Available:**
   - If device has no Google accounts, One Tap won't trigger
   - User can still use manual Google Sign-In button or email/password

## Troubleshooting

### "Developer error" or "Sign in failed"

**Cause:** Web Client ID not configured or SHA-1 fingerprint not added

**Solution:**
1. Verify SHA-1 is added to Firebase Console
2. Verify Web Client ID is updated in `GoogleSignInManager.kt`
3. Ensure you downloaded the latest `google-services.json`
4. Clean and rebuild the project

### "No Google accounts found"

**Cause:** Device has no Google accounts added

**Solution:**
1. Add a Google account to the device in Settings
2. Or use email/password sign-in as fallback

### One Tap doesn't appear

**Cause:** One Tap already dismissed recently, or no Google accounts on device

**Solution:**
- Wait a few minutes and try again
- Use the manual "Continue with Google" button

## Production Deployment

Before releasing to production:

1. **Generate release SHA-1:**
   ```bash
   keytool -list -v -keystore /path/to/your/release.keystore -alias your-key-alias
   ```

2. **Add release SHA-1 to Firebase Console**

3. **Test release build with Google Sign-In**

4. **Update official Google logo:**
   - Replace placeholder in `ic_google_logo.xml`
   - Download from: https://developers.google.com/identity/branding-guidelines

## Resources

- [Firebase Auth Documentation](https://firebase.google.com/docs/auth/android/google-signin)
- [Google Identity Services](https://developers.google.com/identity/one-tap/android)
- [Google Sign-In Branding Guidelines](https://developers.google.com/identity/branding-guidelines)
- [Firebase Console](https://console.firebase.google.com/project/embit-dd383)

## Support

If you encounter issues:
1. Check the Firebase Console for configuration errors
2. Verify all steps in this guide are completed
3. Check Logcat for detailed error messages
4. Refer to the plan file: `/home/ess/.claude/plans/greedy-floating-crescent.md`
