# Pre-Deployment Checklist - Firebase Features

**Version:** 2.1.0
**Target:** QA/Dev Testers
**Estimated Time:** 20 minutes

---

## ✅ Quick Pre-Flight Check (5 minutes)

### 1. Build Test
```bash
# Ensure the app builds successfully
./gradlew :androidApp:assembleStagingDebug

# Expected: BUILD SUCCESSFUL
```
- [ ] Build completes without errors
- [ ] No new compilation errors
- [ ] ProGuard rules valid

### 2. Firebase Console Setup (10 minutes)

#### A. Enable Services
Go to Firebase Console → https://console.firebase.google.com/

- [ ] **Crashlytics:** Enabled
  - Navigate to: Crashlytics → Click "Enable Crashlytics"

- [ ] **Remote Config:** Configured
  - Navigate to: Remote Config → Click "Get Started"
  - See parameter list below

#### B. Add Remote Config Parameters (Copy-Paste Ready)

**Quick Setup - Copy this to Remote Config:**

```
Parameter: grid_monitoring_enabled
Type: Boolean
Default: true

Parameter: vpp_enabled
Type: Boolean
Default: true

Parameter: feedback_enabled
Type: Boolean
Default: true

Parameter: min_app_version
Type: String
Default: "2.0.0"

Parameter: force_update_required
Type: Boolean
Default: false

Parameter: sync_interval_minutes
Type: Number
Default: 60

Parameter: max_sync_batch_size
Type: Number
Default: 100

Parameter: health_score_good
Type: Number
Default: 80

Parameter: health_score_fair
Type: Number
Default: 60

Parameter: health_score_poor
Type: Number
Default: 40

Parameter: low_battery_threshold
Type: Number
Default: 20

Parameter: high_temp_threshold
Type: Number
Default: 45.0

Parameter: experiment_variant
Type: String
Default: "control"
```

- [ ] All 13 parameters added
- [ ] Click "Publish changes"
- [ ] Verify parameters visible in dashboard

#### C. Firestore Security Rules

```bash
# Quick copy-paste rules
```

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /feedback/{feedbackId} {
      allow write: if request.auth != null && request.resource.data.userId == request.auth.uid;
      allow read: if request.auth != null && resource.data.userId == request.auth.uid;
    }
    match /battery_health_metrics/{userId}/{document=**} {
      allow write: if request.auth != null && userId == request.auth.uid;
      allow read: if request.auth != null && userId == request.auth.uid;
    }
    match /users/{userId}/analytics_consent/{document=**} {
      allow write: if request.auth != null && userId == request.auth.uid;
      allow read: if request.auth != null && userId == request.auth.uid;
    }
  }
}
```

- [ ] Rules copied to Firestore → Rules
- [ ] Click "Publish"
- [ ] No syntax errors

### 3. GitHub Secrets Verification (2 minutes)

Go to: GitHub → Settings → Secrets and variables → Actions

Required secrets:
- [ ] `GOOGLE_SERVICES_JSON` exists
- [ ] `FIREBASE_APP_ID` exists
- [ ] `FIREBASE_SERVICE_CREDENTIALS` exists
- [ ] `DEBUG_KEYSTORE_BASE64` exists

**If any missing:** See DEPLOYMENT_GUIDE.md for setup instructions

### 4. Version Update (1 minute)

Edit `androidApp/build.gradle.kts`:

```kotlin
defaultConfig {
    versionCode = 3  // Change from 2 → 3
    versionName = "2.1.0"  // Change from "2.0.0" → "2.1.0"
}
```

- [ ] versionCode updated to 3
- [ ] versionName updated to "2.1.0"

### 5. Test Changes (2 minutes)

```bash
# Quick sanity check
./gradlew :shared:build

# Expected: BUILD SUCCESSFUL
```

- [ ] Shared module builds
- [ ] No errors in console

---

## 🚀 Deploy Now (Choose One Method)

### Method 1: Automated Script (Recommended)

```bash
# Run deployment script
./deploy-qa.sh

# It will:
# 1. Show current version
# 2. Ask for new version (enter: 2.1.0)
# 3. Ask for new code (enter: 3)
# 4. Update build.gradle.kts
# 5. Commit changes
# 6. Create and push tag: qa-2.1.0
# 7. Trigger CI/CD automatically
```

### Method 2: Manual Git Commands

```bash
# 1. Commit version bump (if not using script)
git add androidApp/build.gradle.kts
git commit -m "chore: bump version to 2.1.0 - Firebase features release"

# 2. Create and push tag
git tag qa-2.1.0
git push origin feature/quick-wins-implementation
git push origin qa-2.1.0

# 3. Monitor build
# Open: https://github.com/YOUR_USERNAME/embit/actions
```

### Method 3: GitHub Actions Manual Trigger

```bash
# 1. Commit and push changes
git add .
git commit -m "Release v2.1.0: Firebase features"
git push origin feature/quick-wins-implementation

# 2. Go to GitHub Actions
# 3. Click "Android QA Release"
# 4. Click "Run workflow"
# 5. Select branch: feature/quick-wins-implementation
# 6. Click "Run workflow"
```

---

## 📊 Post-Deployment Monitoring (First Hour)

### Immediate Checks (5 minutes after deployment)

#### 1. GitHub Actions
- [ ] Workflow started
- [ ] Build in progress
- [ ] No errors in logs

#### 2. Firebase App Distribution
Go to: https://console.firebase.google.com/project/YOUR_PROJECT/appdistribution

- [ ] New release visible
- [ ] Uploaded to "dev" group
- [ ] Release notes included

#### 3. QA Team Notification
- [ ] Team members receive email from Firebase
- [ ] Email contains download link
- [ ] At least 1 tester downloads APK

### First Device Test (10 minutes)

Once first tester installs:

#### Analytics Check
Go to: https://console.firebase.google.com/project/YOUR_PROJECT/analytics/debugview

Enable debug mode on tester device:
```bash
adb shell setprop debug.firebase.analytics.app eco.emergi.embit
```

- [ ] Events appear in DebugView
- [ ] screen_view events visible
- [ ] User properties set

#### Crashlytics Check
Go to: https://console.firebase.google.com/project/YOUR_PROJECT/crashlytics

- [ ] Dashboard shows active users
- [ ] 100% crash-free (or expected test crashes)

#### Feedback Test
- [ ] Tester signs in with Google
- [ ] Tester submits test feedback
- [ ] Feedback appears in Firestore

Go to: https://console.firebase.google.com/project/YOUR_PROJECT/firestore/data
- [ ] Collection "feedback" exists
- [ ] Test feedback document visible

---

## ✅ Deployment Complete When

- [ ] CI/CD build successful (green checkmark)
- [ ] APK on Firebase App Distribution
- [ ] QA team notified via email
- [ ] First tester installed app
- [ ] Analytics events appearing
- [ ] No crashes in first hour
- [ ] Feedback system working

---

## 🆘 Quick Troubleshooting

### Build Fails
```bash
# Check logs
cat ~/.gradle/daemon/*/daemon-*.out.log | tail -100

# Clean build
./gradlew clean
./gradlew :androidApp:assembleStagingDebug
```

### No Events in Analytics
```bash
# Enable debug mode
adb shell setprop debug.firebase.analytics.app eco.emergi.embit

# Check device connectivity
adb shell ping -c 4 firebase.google.com
```

### Crashlytics Not Working
- Crashes sent on NEXT launch (not immediately)
- Relaunch app after crash
- Wait 2-5 minutes
- Check Firebase Console → Crashlytics → Enable

### Feedback Not Saving
- Ensure user signed in
- Check Firestore rules published
- Verify internet connection
- Check Firestore logs in console

---

## 📞 Need Help?

**Quick Links:**
- Full Guide: `DEPLOYMENT_GUIDE.md`
- Verification Steps: `VERIFICATION_CHECKLIST.md`
- Implementation Details: `FIREBASE_IMPLEMENTATION_SUMMARY.md`

**Console URLs:**
- Firebase: https://console.firebase.google.com/
- GitHub Actions: https://github.com/YOUR_USERNAME/embit/actions
- App Distribution: https://appdistribution.firebase.google.com/

---

## ⏱️ Total Time Estimate

- Pre-deployment setup: 20 minutes
- Deployment: 5 minutes
- CI/CD build: 3 minutes
- Initial verification: 10 minutes

**Total: ~40 minutes**

---

**Ready to deploy? Run:**
```bash
./deploy-qa.sh
```

Or follow Method 2/3 above for manual deployment.

**Good luck! 🚀**
