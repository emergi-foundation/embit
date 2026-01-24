# Firebase Console SHA-1 Fingerprint Configuration

## CI/CD Debug Keystore SHA-1

**IMPORTANT**: Add this SHA-1 fingerprint to your Firebase Console for Google Sign-In to work on QA builds.

```
SHA-1: 27:38:AC:E4:70:4B:B2:3D:63:27:23:2F:96:4D:D3:5E:BE:F5:EB:49
```

## How to Add SHA-1 to Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **embit-dd383**
3. Click the gear icon (⚙️) next to "Project Overview" → **Project settings**
4. Scroll down to **Your apps** section
5. Find the Android app: **eco.emergi.embit**
6. Click **Add fingerprint**
7. Paste the SHA-1 above: `27:38:AC:E4:70:4B:B2:3D:63:27:23:2F:96:4D:D3:5E:BE:F5:EB:49`
8. Click **Save**
9. **Download the updated google-services.json** (may not be necessary if only adding SHA-1)

## Existing SHA-1 Fingerprints

Your Firebase Console should have these SHA-1 fingerprints configured:

1. **Local Debug Keystore** (for local development):
   ```
   2E:8E:3F:C9:92:99:10:FF:4A:28:B8:0D:8C:50:EB:77:D6:EC:75:95
   ```

2. **CI/CD Debug Keystore** (for QA builds from GitHub Actions):
   ```
   27:38:AC:E4:70:4B:B2:3D:63:27:23:2F:96:4D:D3:5E:BE:F5:EB:49
   ```

3. **Release Keystore** (for production builds):
   ```
   86:A8:89:82:A9:6B:E5:C9:12:C4:67:1E:0B:B8:53:E4:26:2E:00:EC
   ```

## Web Client ID

The Web Client ID configured in the app for Google Sign-In:
```
618653827795-i288964ckfm9j7dlqs9coh2l91mo0ors.apps.googleusercontent.com
```

This is the OAuth 2.0 client ID from Firebase Console with `client_type: 3`.

## Verification

After adding the SHA-1:
1. Wait a few minutes for Firebase to propagate the changes
2. Install the QA build from Firebase App Distribution
3. Try Google Sign-In
4. It should work without the "Developer Console is not set up correctly" error

## Notes

- The CI/CD debug keystore is stored as a GitHub Secret: `DEBUG_KEYSTORE_BASE64`
- This keystore is in JKS format for compatibility with Android build tools
- The keystore is decoded and used during the `Build Staging Debug APK` step in the workflow
