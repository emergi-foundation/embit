# Google Play Store Deployment Guide

This guide walks you through deploying Embit to the Google Play Store.

---

## Prerequisites

- [ ] Google Play Developer account ($25 one-time fee)
- [ ] Production Firebase project created
- [ ] All manual testing completed (see TESTING_GUIDE.md)
- [ ] App icons and screenshots prepared
- [ ] Privacy policy URL ready

---

## Part 1: GitHub Secrets Setup

Before building the production release, configure these GitHub secrets:

### 1. Navigate to GitHub Secrets
1. Go to: https://github.com/ScheierVentures/embit/settings/secrets/actions
2. Click "New repository secret"

### 2. Add Keystore Secrets

**KEYSTORE_BASE64**
```bash
# Encode the keystore to base64
base64 -w 0 embit-release.jks > keystore-base64.txt
# Copy the contents and add as secret
```

**KEYSTORE_PASSWORD**
```
Value: embit2024secure!
```

**KEY_ALIAS**
```
Value: embit-release
```

**KEY_PASSWORD**
```
Value: embit2024secure!
```

### 3. Add Firebase Production Secret

**GOOGLE_SERVICES_JSON_PROD**
- Download `google-services.json` from Firebase Console (production project)
- Copy the entire JSON content as the secret value

---

## Part 2: Firebase Production Setup

### 1. Create Production Firebase Project

1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Project name: `embit-production`
4. Enable Google Analytics (recommended)
5. Complete setup

### 2. Add Android App

1. Click "Add app" → Android icon
2. **Android package name:** `eco.emergi.embit`
3. **App nickname:** Embit Production
4. **Debug signing certificate SHA-1:** (optional for now)
5. Download `google-services.json`
6. Add the JSON content to GitHub secret `GOOGLE_SERVICES_JSON_PROD`

### 3. Enable Firebase Services

#### Authentication
1. Go to Authentication → Get started
2. Enable **Email/Password** sign-in method
3. (Optional) Enable Google Sign-In if needed

#### Cloud Firestore
1. Go to Firestore Database → Create database
2. Start in **production mode**
3. Choose location: `us-central1` (or closest to your users)
4. Set security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;

      // Battery readings subcollection
      match /battery_readings/{readingId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }

      // Device info subcollection
      match /devices/{deviceId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }

    // Grid data is public read, admin write
    match /grid_status/{statusId} {
      allow read: if true;
      allow write: if false; // Only allow via backend
    }
  }
}
```

#### Analytics (Optional)
- Already enabled if you chose it during project creation
- Go to Analytics → Dashboard to view data

---

## Part 3: Build Production Release

### 1. Verify Configuration

Ensure these files are ready:
- ✅ `embit-release.jks` (keystore)
- ✅ `androidApp/build.gradle.kts` (signing config added)
- ✅ GitHub secrets configured
- ✅ Firebase production project created

### 2. Trigger Production Build

1. Go to: https://github.com/ScheierVentures/embit/actions
2. Select "Android Production Release" workflow
3. Click "Run workflow"
4. Fill in parameters:
   - **Version name:** `2.0.0`
   - **Version code:** `2`
   - **Create GitHub release:** `true`
5. Click "Run workflow"

### 3. Monitor Build

Wait for the workflow to complete (~5-10 minutes). It will:
- ✅ Run all unit tests
- ✅ Build signed production AAB
- ✅ Generate ProGuard mapping file
- ✅ Create GitHub release draft
- ✅ Upload artifacts

### 4. Download Build Artifacts

1. Go to the completed workflow run
2. Scroll to "Artifacts" section
3. Download:
   - `embit-production-release-v2.0.0` (the AAB)
   - `embit-mapping-v2.0.0` (ProGuard mapping)

**IMPORTANT:** Save the mapping file! You'll need it for crash reporting.

---

## Part 4: Google Play Console Setup

### 1. Create App Listing

1. Go to https://play.google.com/console/
2. Click "Create app"
3. Fill in details:
   - **App name:** Embit - Smart Battery Manager
   - **Default language:** English (United States)
   - **App or game:** App
   - **Free or paid:** Free
4. Complete declarations:
   - [ ] Privacy Policy URL
   - [ ] App access (all features available)
   - [ ] Ads (no ads)
   - [ ] Content ratings
   - [ ] Target audience
   - [ ] News app (no)
   - [ ] COVID-19 contact tracing/status (no)
   - [ ] Data safety

### 2. Store Listing

Navigate to "Store presence" → "Main store listing"

#### App Details

**Short description** (80 characters max):
```
Track battery health, optimize charging with AI-powered grid awareness.
```

**Full description** (4000 characters max):
```
Embit helps you optimize your device's battery life and reduce your carbon footprint through intelligent, grid-aware charging recommendations.

🔋 BATTERY HEALTH MONITORING
• Real-time battery percentage, voltage, and temperature tracking
• Battery health score (0-100) with personalized recommendations
• Detailed battery history charts and analytics
• Charging/discharging state monitoring
• Predictive battery life estimation

⚡ SMART CHARGING WITH GRID AWARENESS
• Real-time electricity grid status monitoring
• Renewable energy percentage tracking
• Carbon intensity measurements (g/kWh)
• Dynamic electricity pricing information
• AI-powered charging recommendations based on:
  - Grid stress levels
  - Renewable energy availability
  - Carbon intensity
  - Electricity pricing tiers

💚 ENVIRONMENTAL IMPACT
• Reduce your carbon footprint by charging when renewable energy is abundant
• Save money by charging during off-peak hours
• Track your carbon savings over time
• Contribute to grid stability by avoiding peak charging

☁️ CLOUD SYNC & MULTI-DEVICE
• Secure Firebase authentication
• Cloud synchronization of battery data
• Access your data across multiple devices
• Automatic background sync

🔔 SMART NOTIFICATIONS
• Get notified when it's a good time to charge
• Avoid charging during high carbon intensity periods
• Critical grid alert notifications
• Customizable notification preferences

📊 DETAILED ANALYTICS
• Battery health trends over time
• Charging pattern analysis
• Energy consumption tracking
• Carbon impact reporting

🔒 PRIVACY & SECURITY
• Your data is encrypted and secure
• No data sharing with third parties
• Full control over your information
• Transparent privacy practices

🌍 WHY EMBIT?
Embit was built with the belief that small actions can make a big difference. By optimizing when you charge your devices, you can reduce strain on the electrical grid, lower carbon emissions, and save money—all while extending your battery's lifespan.

Perfect for environmentally-conscious users who want to make a positive impact without sacrificing convenience.

💡 FEATURES AT A GLANCE
✓ Real-time battery monitoring
✓ Grid-aware smart charging
✓ Carbon footprint tracking
✓ Cloud backup & sync
✓ Multi-device support
✓ Intelligent notifications
✓ Detailed analytics & insights
✓ Completely free, no ads

Download Embit today and start charging smarter, not harder!
```

#### Graphics

**App icon** (512x512 PNG):
- Use the existing `androidApp/src/main/res/mipmap-xxxhdpi/ic_launcher.png`
- Upscale to 512x512 if needed

**Feature graphic** (1024x500 PNG):
- Create a banner with:
  - Embit logo
  - Tagline: "Smart Battery Management for a Greener Future"
  - Background showing battery/grid visualization

**Phone screenshots** (minimum 2, recommended 8):
1. Home screen showing battery stats
2. Grid awareness dashboard
3. Charging recommendations
4. Battery history chart
5. Settings screen
6. Authentication/profile
7. Notifications example
8. Carbon savings summary

**Tablet screenshots** (optional but recommended):
- Same as phone but tablet-optimized layouts

### 3. Content Rating

1. Navigate to "Policy" → "App content" → "Content rating"
2. Complete the questionnaire:
   - App category: Utility
   - Violence: No
   - Drugs: No
   - Sexual content: No
   - User interaction: Yes (cloud saves)
3. Submit for rating

### 4. Data Safety

Navigate to "Policy" → "App content" → "Data safety"

**Data collection:**
- ✅ Account info (email address)
- ✅ Device info (battery stats, grid location)

**Data usage:**
- App functionality
- Analytics

**Data sharing:**
- No data shared with third parties

**Security practices:**
- ✅ Data encrypted in transit
- ✅ Data encrypted at rest (Firebase)
- ✅ Users can request deletion
- ✅ Committed to Google Play Families Policy

### 5. Privacy Policy

Create a privacy policy at your domain or use a generator:

Template structure:
```
1. Information We Collect
   - Email address (for authentication)
   - Battery data (health, charge levels)
   - Device information (model, OS version)
   - Location (city-level for grid data)

2. How We Use Information
   - Provide app functionality
   - Sync data across devices
   - Provide grid-aware recommendations

3. Data Security
   - Industry-standard encryption
   - Firebase security rules
   - No third-party sharing

4. Your Rights
   - Access your data
   - Delete your account
   - Data portability

5. Contact
   - Email: support@emergi.eco
```

Host at: `https://emergi.eco/embit/privacy-policy`

---

## Part 5: Upload Production Release

### 1. Create Internal Testing Track (Recommended First Step)

1. Go to "Release" → "Testing" → "Internal testing"
2. Click "Create new release"
3. Upload the AAB: `androidApp-production-release.aab`
4. Upload the mapping file: `mapping.txt`
5. Add release notes:

```
Version 2.0.0 - Initial Release

Features:
• Battery health monitoring
• Grid-aware smart charging
• Cloud sync with Firebase
• Real-time grid status tracking
• Carbon footprint analytics
• Smart charging notifications

This is the initial production release.
```

6. Add internal testers (email addresses)
7. Click "Save" → "Review release" → "Start rollout to Internal testing"

### 2. Test Internal Release

1. Internal testers will receive an email with the opt-in link
2. Complete full testing using TESTING_GUIDE.md
3. Fix any critical issues found
4. Once stable, proceed to production

### 3. Promote to Production

Once internal testing is complete:

1. Go to "Release" → "Production"
2. Click "Create new release"
3. Copy release from internal testing or upload AAB again
4. Add production release notes (same as internal)
5. Configure rollout:
   - **Staged rollout** (recommended): 20% → 50% → 100% over days
   - **Full rollout**: All users immediately
6. Click "Save" → "Review release"
7. Fix any policy violations if flagged
8. Click "Start rollout to Production"

### 4. App Review

- Google will review your app (typically 1-3 days)
- Monitor the review status in Play Console
- Address any issues flagged by Google
- Once approved, app goes live! 🎉

---

## Part 6: Post-Launch

### 1. Monitor Metrics

- **Play Console Dashboard**: Downloads, ratings, crashes
- **Firebase Analytics**: User engagement, retention
- **Firebase Crashlytics**: Crash reports (set up if needed)

### 2. Respond to Reviews

- Monitor user reviews daily
- Respond to feedback professionally
- Address common issues in updates

### 3. Plan Updates

- Use the same workflow for future releases
- Increment `versionCode` and `versionName`
- Test thoroughly before production
- Use staged rollouts for major changes

### 4. Set Up Crashlytics (Optional)

1. Add Firebase Crashlytics to the project
2. Upload ProGuard mapping files with each release
3. Monitor crashes in Firebase Console

---

## Troubleshooting

### Build fails in GitHub Actions

**Issue:** "Keystore password incorrect"
- Check that GitHub secrets match keystore.properties values

**Issue:** "google-services.json not found"
- Verify GOOGLE_SERVICES_JSON_PROD secret is set correctly

### Play Console rejects upload

**Issue:** "Version code already exists"
- Increment the version code in workflow inputs

**Issue:** "Missing required declarations"
- Complete all sections in "App content"

### App Review rejection

**Issue:** "Privacy policy not accessible"
- Ensure privacy policy URL is publicly accessible

**Issue:** "Data safety form incomplete"
- Review and complete all data safety questions

---

## Quick Reference

### Important URLs

- **Firebase Console:** https://console.firebase.google.com/
- **Play Console:** https://play.google.com/console/
- **GitHub Actions:** https://github.com/ScheierVentures/embit/actions
- **Repository Secrets:** https://github.com/ScheierVentures/embit/settings/secrets/actions

### Key Files

- Keystore: `embit-release.jks` (NEVER commit to git!)
- Keystore config: `keystore.properties` (NEVER commit to git!)
- Workflow: `.github/workflows/android-production.yml`
- Build config: `androidApp/build.gradle.kts`

### Build Commands

Local production build (if needed):
```bash
# Set environment variables
export KEYSTORE_FILE=embit-release.jks
export KEYSTORE_PASSWORD=embit2024secure!
export KEY_ALIAS=embit-release
export KEY_PASSWORD=embit2024secure!

# Build AAB
./gradlew :androidApp:bundleProductionRelease
```

Local production APK (for testing):
```bash
./gradlew :androidApp:assembleProductionRelease
```

---

## Checklist Before Production

Use this checklist before triggering the production build:

- [ ] All unit tests passing
- [ ] Manual testing completed (TESTING_GUIDE.md)
- [ ] Firebase production project created and configured
- [ ] GitHub secrets configured correctly
- [ ] Privacy policy published and accessible
- [ ] Play Console account created and verified
- [ ] App listing completed (store presence)
- [ ] Content rating obtained
- [ ] Data safety form completed
- [ ] Screenshots and graphics prepared
- [ ] Release notes written
- [ ] Version numbers decided (versionName & versionCode)

Once all items are checked, you're ready to deploy to production! 🚀

---

## Support

For issues with this deployment process, contact:
- Email: dev@emergi.eco
- GitHub Issues: https://github.com/ScheierVentures/embit/issues

For Play Store-specific issues, consult:
- **Play Console Help:** https://support.google.com/googleplay/android-developer/
- **Firebase Docs:** https://firebase.google.com/docs
