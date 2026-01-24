# Firebase Implementation - Quick Verification Checklist

## Setup (5 min)

```bash
# 1. Start emulator or connect device
adb devices

# 2. Install app
./gradlew :androidApp:installDevDebug

# 3. Enable Firebase Analytics debug mode
adb shell setprop debug.firebase.analytics.app eco.emergi.embit

# 4. Launch app
adb shell am start -n eco.emergi.embit/eco.emergi.embit.android.MainActivity
```

---

## ✅ Verification Tests (30 min)

### 1. Analytics (10 min)
- [ ] Navigate to all screens → Check `screen_view` events in Firebase Console DebugView
- [ ] Sign in with Google → Check `login` event
- [ ] Enable monitoring → Check `monitoring_started` event
- [ ] Wait for battery reading → Check `battery_reading` event with parameters
- [ ] Trigger sync → Check `sync_completed` event

**Firebase Console:** Analytics → Events → Real-time (DebugView)

### 2. Crashlytics (5 min)
- [ ] Add test crash button to Settings (see guide)
- [ ] Force crash → Relaunch app
- [ ] Wait 2-5 minutes
- [ ] Check crash report in Firebase Console with custom keys

**Firebase Console:** Crashlytics → Dashboard → View crashes

### 3. Remote Config (5 min)
- [ ] Check app logs for "Remote Config fetched successfully"
- [ ] Create parameter `test_param` in Firebase Console
- [ ] Publish changes
- [ ] Restart app
- [ ] Verify parameter value fetched

**Firebase Console:** Remote Config → Parameters

### 4. Feedback (5 min)
- [ ] Sign in with Google
- [ ] Tap "Rate Embit" in Settings
- [ ] Submit 5-star rating with comment
- [ ] Check success message
- [ ] Verify `feedback_submitted` analytics event
- [ ] Check Firestore for feedback document

**Firebase Console:** Firestore → Data → feedback collection

### 5. Analytics Schema (5 min)
- [ ] Add "Aggregate Metrics" debug button (see guide)
- [ ] Tap button to aggregate daily metrics
- [ ] Check Firestore for daily metrics document
- [ ] Verify structure matches schema

**Firebase Console:** Firestore → Data → battery_health_metrics

### 6. Workers (5 min)
- [ ] Check logcat for worker execution
  ```bash
  adb logcat | grep "BatteryMonitor\|DataSync"
  ```
- [ ] Verify analytics events from workers
- [ ] Verify Crashlytics custom keys updated

---

## Quick Status Check

### All Working? ✅
- [ ] Analytics events appearing in Firebase Console
- [ ] Crashlytics catching and reporting crashes
- [ ] Remote Config fetching values
- [ ] Feedback saving to Firestore
- [ ] Daily metrics aggregating
- [ ] Workers logging analytics
- [ ] No performance degradation

### Issues? 🔧
See `FIREBASE_VERIFICATION_GUIDE.md` for detailed troubleshooting.

---

## Firebase Console Quick Links

**Replace `YOUR_PROJECT` with your Firebase project ID**

- Analytics DebugView: `https://console.firebase.google.com/project/YOUR_PROJECT/analytics/debugview`
- Crashlytics: `https://console.firebase.google.com/project/YOUR_PROJECT/crashlytics`
- Remote Config: `https://console.firebase.google.com/project/YOUR_PROJECT/config`
- Firestore: `https://console.firebase.google.com/project/YOUR_PROJECT/firestore/data`

---

## Clean Up (After Testing)

```bash
# 1. Disable debug mode
adb shell setprop debug.firebase.analytics.app .none.

# 2. Remove debug buttons from SettingsScreen.kt:
#    - Force Test Crash button
#    - Aggregate Metrics button
#    - Fetch Remote Config button

# 3. Rebuild for production
./gradlew :androidApp:assembleProductionRelease
```

---

**Estimated Time:** 45 minutes total
**Completion:** ___/6 phases verified
**Status:** [ ] Pass [ ] Fail - Notes: _______________
