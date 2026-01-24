# Deployment Guide - Firebase Features Release

**Version:** 2.1.0 (Firebase Analytics, Crashlytics, Remote Config, Feedback)
**Target:** QA/Dev Testers via Firebase App Distribution
**Date:** 2026-01-24

---

## 🎯 What's Being Deployed

### New Firebase Features (v2.1.0)
1. **Firebase Analytics** - 15+ event types tracking user behavior
2. **Firebase Crashlytics** - Crash reporting with custom context
3. **Firebase Remote Config** - Dynamic feature flags & configuration
4. **In-App Feedback System** - User ratings, bug reports, feature requests
5. **Firestore Analytics Schema** - Daily battery health metrics aggregation
6. **Worker Integration** - Analytics & crashlytics in background tasks

**Total New Code:** 1,716 lines (12 new files, 10 modified)
**Build Status:** ✅ Successful (58s)
**Breaking Changes:** None

---

## 📋 Pre-Deployment Checklist

### 1. Firebase Console Configuration (15 min)

#### A. Enable Firebase Services
- [ ] **Analytics:** Already enabled ✅
- [ ] **Crashlytics:** Go to Firebase Console → Crashlytics → Enable
- [ ] **Remote Config:** Go to Firebase Console → Remote Config → Get Started
- [ ] **Firestore:** Already enabled ✅

#### B. Configure Remote Config Parameters
Go to Firebase Console → Remote Config → Add Parameters:

```yaml
# Feature Flags
grid_monitoring_enabled: true
vpp_enabled: true
feedback_enabled: true

# App Configuration
min_app_version: "2.0.0"
force_update_required: false

# Sync Settings
sync_interval_minutes: 60
max_sync_batch_size: 100

# Health Score Thresholds
health_score_good: 80
health_score_fair: 60
health_score_poor: 40

# Notification Thresholds
low_battery_threshold: 20
high_temp_threshold: 45.0

# A/B Testing
experiment_variant: "control"
```

**After adding all parameters:**
- [ ] Click "Publish changes"
- [ ] Verify parameters appear in Remote Config dashboard

#### C. Set Up Firestore Security Rules
Go to Firebase Console → Firestore → Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Feedback - authenticated users can write their own
    match /feedback/{feedbackId} {
      allow write: if request.auth != null && request.resource.data.userId == request.auth.uid;
      allow read: if request.auth != null && resource.data.userId == request.auth.uid;
    }

    // Battery health metrics - authenticated users can write their own
    match /battery_health_metrics/{userId}/{document=**} {
      allow write: if request.auth != null && userId == request.auth.uid;
      allow read: if request.auth != null && userId == request.auth.uid;
    }

    // Device profiles
    match /device_profiles/{userId}/{document=**} {
      allow write: if request.auth != null && userId == request.auth.uid;
      allow read: if request.auth != null && userId == request.auth.uid;
    }

    // Analytics consent
    match /users/{userId}/analytics_consent/{document=**} {
      allow write: if request.auth != null && userId == request.auth.uid;
      allow read: if request.auth != null && userId == request.auth.uid;
    }

    // Global stats - read only for authenticated users
    match /global_stats/{document=**} {
      allow read: if request.auth != null;
      allow write: if false; // Only Cloud Functions can write
    }
  }
}
```

- [ ] Copy rules above
- [ ] Paste in Firestore Rules editor
- [ ] Click "Publish"

#### D. Configure Crashlytics Alerts (Optional)
- [ ] Go to Firebase Console → Crashlytics → Settings
- [ ] Set up email notifications for new crashes
- [ ] Configure velocity alerts (crash rate spikes)

### 2. GitHub Secrets Verification (5 min)

Verify these secrets exist in GitHub repository:
- [ ] `GOOGLE_SERVICES_JSON` - Contains Firebase config with Analytics, Crashlytics
- [ ] `FIREBASE_APP_ID` - For App Distribution
- [ ] `FIREBASE_SERVICE_CREDENTIALS` - For App Distribution
- [ ] `DEBUG_KEYSTORE_BASE64` - For signing

**Check:** GitHub → Settings → Secrets and variables → Actions

### 3. Version Bump (2 min)

Update version in `androidApp/build.gradle.kts`:

```kotlin
defaultConfig {
    applicationId = "eco.emergi.embit"
    minSdk = 24
    targetSdk = 35
    versionCode = 3  // Increment from 2 to 3
    versionName = "2.1.0"  // Update from 2.0.0 to 2.1.0
}
```

- [ ] Update `versionCode` to 3
- [ ] Update `versionName` to "2.1.0"
- [ ] Commit changes

---

## 🚀 Deployment Steps

### Option 1: Deploy via Git Tag (Recommended)

```bash
# 1. Ensure all changes are committed
git add .
git commit -m "Release v2.1.0: Firebase Analytics, Crashlytics, Remote Config, Feedback"

# 2. Create and push QA tag
git tag qa-2.1.0
git push origin qa-2.1.0

# 3. Monitor GitHub Actions
# Go to: https://github.com/YOUR_USERNAME/embit/actions
# Watch "Android QA Release" workflow
```

**Timeline:**
- Build starts immediately
- APK built in ~2-3 minutes
- Uploaded to Firebase App Distribution
- QA team receives email with download link

### Option 2: Manual Workflow Dispatch

```bash
# 1. Commit and push changes
git add .
git commit -m "Release v2.1.0: Firebase features"
git push origin feature/quick-wins-implementation

# 2. Go to GitHub Actions
# https://github.com/YOUR_USERNAME/embit/actions
# Click "Android QA Release"
# Click "Run workflow"
# Select branch: feature/quick-wins-implementation
# Click "Run workflow"
```

### Option 3: Local Build & Manual Upload

```bash
# 1. Build staging debug APK
./gradlew :androidApp:assembleStagingDebug

# 2. Locate APK
# Path: androidApp/build/outputs/apk/staging/debug/androidApp-staging-debug.apk

# 3. Upload to Firebase App Distribution
# Go to: https://console.firebase.google.com/project/YOUR_PROJECT/appdistribution
# Click "Distribute"
# Upload APK
# Select tester group: "dev"
# Add release notes (see below)
# Click "Distribute"
```

---

## 📝 Release Notes Template

Use this for Firebase App Distribution release notes:

```markdown
# Embit v2.1.0 - Firebase Features Release

## 🆕 New Features

### Analytics & Monitoring
- ✅ Firebase Analytics integration with 15+ event types
- ✅ Real-time user behavior tracking (screen views, button clicks, etc.)
- ✅ Battery monitoring events (readings, health checks)
- ✅ Data sync analytics (upload/download tracking)

### Crash Reporting
- ✅ Firebase Crashlytics for automatic crash detection
- ✅ Non-fatal error logging
- ✅ Custom debugging context (battery state, sync state, user ID)

### Dynamic Configuration
- ✅ Firebase Remote Config for feature flags
- ✅ Server-side configuration updates (no app update required)
- ✅ A/B testing infrastructure

### In-App Feedback
- ✅ New feedback system in Settings
- ✅ Submit ratings (1-5 stars)
- ✅ Report bugs with device info
- ✅ Request new features
- ✅ All feedback saved to Firestore for review

### Data Analytics
- ✅ Daily battery health metrics aggregation
- ✅ Long-term health trends tracking
- ✅ Anonymous usage statistics (opt-in)

## 📊 What to Test

### Priority 1: Core Functionality (Existing Features)
- [ ] Battery monitoring still works
- [ ] Data sync functioning properly
- [ ] Google sign-in working
- [ ] All screens loading correctly

### Priority 2: New Firebase Features
- [ ] Submit feedback via Settings (Rating, Bug Report, Feature Request)
- [ ] Check if app crashes are reported (intentional test crash)
- [ ] Navigate through all screens (analytics tracking)
- [ ] Check battery notifications

### Priority 3: Performance
- [ ] App startup time (should be unchanged)
- [ ] Battery usage (should be minimal)
- [ ] Data usage (minimal overhead from Firebase)

## 🐛 Known Issues
- None currently

## 📱 Testing Environment
- **Flavor:** Staging
- **Build Type:** Debug (easier debugging)
- **Min Android Version:** 7.0 (API 24)
- **Target Android Version:** 14 (API 35)

## 🔒 Privacy Note
- Analytics and Crashlytics are enabled by default
- You can opt out in Settings → Privacy (coming in next release)
- Feedback requires sign-in with Google

## 📞 Feedback
Please report any issues via:
1. In-app feedback (Settings → Feedback)
2. GitHub Issues
3. Team Slack channel

---
**Build Date:** 2026-01-24
**Build Number:** 3
**Git Commit:** [Auto-filled by CI/CD]
```

---

## 📊 Post-Deployment Monitoring

### First 24 Hours

#### 1. Firebase Analytics (Check every 2 hours)
```
Firebase Console → Analytics → Real-time
Expected:
- Active users: 3-5 (QA team)
- Events: screen_view, login, monitoring_started
- No errors in Analytics DebugView
```

**Monitor:**
- [ ] Events appearing for testers
- [ ] No unusual patterns
- [ ] Screen views tracking correctly

#### 2. Firebase Crashlytics (Check every 4 hours)
```
Firebase Console → Crashlytics → Dashboard
Expected:
- 100% crash-free users (unless test crash triggered)
- No unexpected crashes
```

**Monitor:**
- [ ] Zero unexpected crashes
- [ ] Custom keys visible in crash reports (if test crash triggered)
- [ ] User IDs associated with crashes

#### 3. Firebase Remote Config (Check once)
```
Firebase Console → Remote Config → Fetches
Expected:
- Fetches from QA devices
- Values activated successfully
```

**Monitor:**
- [ ] Config fetched by testers
- [ ] Default values applied initially
- [ ] Server values fetched within 12 hours

#### 4. Firestore (Check daily)
```
Firebase Console → Firestore → Data
Collections to monitor:
- feedback/
- battery_health_metrics/
- users/{userId}/analytics_consent/
```

**Monitor:**
- [ ] Feedback submissions appearing
- [ ] No unauthorized access (security rules working)
- [ ] Data structure correct

### QA Feedback Collection (Week 1)

Create a Google Form or use in-app feedback for:
- [ ] Overall app stability (1-5 stars)
- [ ] New features working? (Yes/No)
- [ ] Any crashes experienced? (Yes/No + details)
- [ ] Performance issues? (Yes/No + details)
- [ ] Feedback system usable? (Yes/No + suggestions)

---

## 🔍 Verification Checklist for Testers

Share this with your QA team:

### Installation
- [ ] Downloaded APK from Firebase App Distribution email
- [ ] Installed successfully (allow unknown sources if needed)
- [ ] App launches without crash

### Basic Functionality
- [ ] Sign in with Google works
- [ ] Battery monitoring starts
- [ ] All screens accessible (Monitor, History, Health, Settings)
- [ ] Data syncs to cloud

### New Features Testing

#### Feedback System
- [ ] Navigate to Settings → Feedback
- [ ] Tap "Rate Embit"
- [ ] Submit 5-star rating with comment
- [ ] See success message
- [ ] Try "Report Bug" - submit test bug
- [ ] Try "Request Feature" - submit test feature

#### Analytics (Invisible to users)
- [ ] Just use the app normally
- [ ] Navigate between screens
- [ ] Enable/disable monitoring
- [ ] Trigger a sync

#### Crashlytics (Optional Test)
- [ ] If developer provides test crash button, tap it
- [ ] App should crash
- [ ] Relaunch app
- [ ] Report if you got a crash report prompt

### Performance Check
- [ ] App feels responsive (no lag)
- [ ] No excessive battery drain
- [ ] No excessive data usage

### Issues to Report
- Any crashes or force closes
- Features not working as expected
- UI issues or visual bugs
- Performance problems
- Suggestions for improvement

---

## 🛠️ Troubleshooting

### Build Fails in CI/CD

**Error: "Firebase Crashlytics Gradle plugin failed"**
```bash
# Solution: Ensure google-services.json contains Crashlytics config
# Re-download from Firebase Console → Project Settings → google-services.json
# Update GitHub secret: GOOGLE_SERVICES_JSON
```

**Error: "Missing Firebase App ID"**
```bash
# Solution: Get App ID from Firebase Console
# Project Settings → General → Your apps → Android → App ID
# Update GitHub secret: FIREBASE_APP_ID
```

### No Analytics Events Appearing

**Problem:** Events not showing in Firebase Console
```bash
# Solutions:
1. Wait 1-2 minutes (events are batched)
2. Enable DebugView:
   adb shell setprop debug.firebase.analytics.app eco.emergi.embit
3. Check internet connection on test device
4. Verify google-services.json is correct
```

### Crashlytics Not Receiving Reports

**Problem:** Crash reports not appearing
```bash
# Solutions:
1. Crash reports sent on NEXT app launch (not immediately)
2. Relaunch app after crash
3. Wait 2-5 minutes
4. Check Crashlytics is enabled in Firebase Console
```

### Remote Config Not Fetching

**Problem:** App using default values only
```bash
# Solutions:
1. Publish parameters in Firebase Console
2. Wait 12 hours for fetch OR force fetch (requires code change)
3. Check internet connection
4. Verify google-services.json contains Remote Config
```

### Feedback Not Saving

**Problem:** Feedback submission fails
```bash
# Solutions:
1. Ensure user is signed in with Google
2. Check Firestore security rules
3. Check internet connection
4. Verify google-services.json contains Firestore config
```

---

## 🎉 Success Criteria

### Deployment Successful When:
- [ ] Build completes in CI/CD (green checkmark)
- [ ] APK uploaded to Firebase App Distribution
- [ ] QA team receives email notifications
- [ ] At least 1 tester installs and launches app
- [ ] Analytics events appear in Firebase Console
- [ ] No crashes in first 24 hours (except test crashes)
- [ ] At least 1 feedback submission received
- [ ] All existing features still work

### Ready for Production When:
- [ ] 5+ days in QA with zero critical issues
- [ ] 90%+ positive feedback from testers
- [ ] All priority 1 bugs fixed
- [ ] Analytics data looks healthy
- [ ] Crashlytics shows 98%+ crash-free rate
- [ ] Performance metrics acceptable

---

## 📞 Support & Escalation

### For Testers
- **Bug Reports:** Use in-app feedback (Settings → Feedback → Report Bug)
- **Questions:** Team Slack channel
- **Critical Issues:** Email directly to dev team

### For Developers
- **Firebase Issues:** https://firebase.google.com/support
- **Build Issues:** Check GitHub Actions logs
- **Crashlytics Help:** Firebase Console → Crashlytics → Docs

---

## 📅 Timeline

### Day 1 (Deployment)
- ✅ Pre-deployment checklist
- ✅ Deploy to Firebase App Distribution
- ✅ Monitor initial analytics
- ✅ Send testing instructions to QA

### Day 2-3 (Active Testing)
- Monitor Crashlytics
- Collect feedback submissions
- Address critical bugs immediately

### Day 4-7 (Stabilization)
- Review all feedback
- Fix any reported bugs
- Prepare production release notes

### Week 2 (Production Decision)
- Review success metrics
- Decision: Deploy to production OR iterate
- Merge feature branch to master
- Tag production release

---

## 📋 Deployment Log

**Date:** _______________
**Deployed By:** _______________
**Tag:** qa-2.1.0
**Build Number:** 3
**Firebase Distribution Link:** _______________

**Pre-Deployment:**
- [ ] Firebase Console configured
- [ ] Remote Config parameters added
- [ ] Firestore security rules updated
- [ ] Version bumped to 2.1.0

**Deployment:**
- [ ] Tag pushed to GitHub
- [ ] CI/CD build successful
- [ ] APK uploaded to Firebase
- [ ] QA team notified

**Post-Deployment (First 24h):**
- [ ] Analytics events verified
- [ ] Crashlytics monitoring active
- [ ] Feedback submissions working
- [ ] No critical issues reported

**Sign-off:**
- QA Lead: _______________ Date: _______________
- Dev Lead: _______________ Date: _______________

---

**Last Updated:** 2026-01-24
**Version:** 1.0
**Next Review:** After 5 days in QA
