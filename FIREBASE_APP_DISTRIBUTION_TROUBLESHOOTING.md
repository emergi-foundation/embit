# Firebase App Distribution Troubleshooting

## Current Issue

Build succeeded but Firebase App Distribution upload fails with:
```
Error: Failed to authenticate, have you run firebase login?
```

## Steps to Fix

### 1. Verify Service Account Permissions

The service account needs **Firebase App Distribution Admin** role:

1. Go to [Google Cloud Console IAM](https://console.cloud.google.com/iam-admin/iam?project=embit-dd383)
2. Find the service account you're using for GitHub Actions
3. Click **Edit** (pencil icon)
4. Ensure it has this role: **Firebase App Distribution Admin**
5. If not, click **Add Another Role** and add it
6. Click **Save**

### 2. Verify Service Account JSON Format

The `FIREBASE_SERVICE_CREDENTIALS` secret should contain a valid JSON file that looks like this:

```json
{
  "type": "service_account",
  "project_id": "embit-dd383",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "...@embit-dd383.iam.gserviceaccount.com",
  "client_id": "...",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "..."
}
```

**Common Mistakes:**
- Missing quotes around the JSON
- Extra whitespace or newlines
- Truncated private key
- Wrong project ID

**To fix:**
1. Download a **new** service account key from Google Cloud Console
2. Open the JSON file in a text editor
3. Copy the **entire** contents (should start with `{` and end with `}`)
4. Go to GitHub: https://github.com/ScheierVentures/embit/settings/secrets/actions
5. Delete the old `FIREBASE_SERVICE_CREDENTIALS` secret
6. Create a new one with the exact JSON content

### 3. Verify Tester Group Exists

The workflow tries to distribute to the "dev" group. This group must exist in Firebase:

1. Go to [Firebase Console](https://console.firebase.google.com/project/embit-dd383/appdistribution)
2. Click **Testers & Groups** tab
3. Verify a group named **"dev"** exists
4. If not, create it:
   - Click **Add Group**
   - Name: `dev`
   - Add at least one tester email
   - Click **Create Group**

### 4. Enable Firebase App Distribution

Make sure App Distribution is enabled for your project:

1. Go to [Firebase Console](https://console.firebase.google.com/project/embit-dd383/appdistribution)
2. If you see a setup screen, complete the setup
3. Accept any terms of service
4. Link your Android app if needed

## Workaround: Download APK Directly

While troubleshooting, you can still get the APK:

1. Go to: https://github.com/ScheierVentures/embit/actions/runs/21306548939
2. Scroll to **Artifacts** section
3. Download **embit-staging-debug-apk**
4. Extract and install the APK on your device

**IMPORTANT**: Before testing Google Sign-In, add this SHA-1 to Firebase Console:
```
27:38:AC:E4:70:4B:B2:3D:63:27:23:2F:96:4D:D3:5E:BE:F5:EB:49
```

## Quick Test

After fixing the service account, trigger a new build:

```bash
git tag qa-google-signin-v2.2.11
git push dev qa-google-signin-v2.2.11
```

## Additional Resources

- [Firebase App Distribution Setup](https://firebase.google.com/docs/app-distribution/android/distribute-github-actions)
- [Service Account Roles](https://firebase.google.com/docs/projects/iam/roles-predefined-product)
- [GitHub Action Source](https://github.com/wzieba/Firebase-Distribution-Github-Action)
