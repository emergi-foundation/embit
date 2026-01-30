# Firebase Analytics, Crashlytics, Remote Config & Feedback - Verification Guide

## Prerequisites

### 1. Start an Emulator or Connect a Device

**Option A: Start Android Emulator**
```bash
# List available emulators
emulator -list-avds

# Start an emulator (replace <avd_name> with your emulator name)
emulator -avd <avd_name> &

# Verify connection
adb devices
```

**Option B: Connect Physical Device**
```bash
# Enable USB debugging on your device
# Settings → About Phone → Tap "Build Number" 7 times
# Settings → Developer Options → Enable USB Debugging

# Connect device via USB and verify
adb devices
```

### 2. Install the App

```bash
# Build and install debug APK
./gradlew :androidApp:installDevDebug

# Launch the app
adb shell am start -n eco.emergi.embit/eco.emergi.embit.android.MainActivity
```

---

## Verification Checklist

### ✅ Phase 1: Firebase Analytics

#### Test 1: Screen View Events
- [ ] Launch the app
- [ ] Navigate to each screen (Monitor, History, Health, Settings)
- [ ] Check Firebase Console → Analytics → Events → screen_view

**Expected Results:**
- Events appear within 1-2 minutes in Debug View
- Screen names: "MonitorScreen", "HistoryScreen", "HealthScreen", "SettingsScreen"

#### Test 2: Authentication Events
- [ ] Sign in with Google from Settings
- [ ] Check for `login` event in Firebase Console

**Expected Results:**
- Event: `login` with parameter `method: "google"`
- User ID set in Firebase Analytics

#### Test 3: Battery Monitoring Events
- [ ] Enable background monitoring in Settings
- [ ] Wait 15 minutes for worker to run OR trigger manually
- [ ] Check for `monitoring_started` and `battery_reading` events

**Expected Results:**
- Event: `monitoring_started`
- Event: `battery_reading` with parameters (percentage, temperature, is_charging)

#### Test 4: Sync Events
- [ ] Sign in with Google
- [ ] Enable auto-sync in Settings
- [ ] Trigger manual sync or wait for background sync
- [ ] Check for `sync_started` and `sync_completed` events

**Expected Results:**
- Event: `sync_started` with parameter `trigger_source`
- Event: `sync_completed` with parameters (record_count, duration_ms)

#### Verify in Firebase Console:
```
Firebase Console → Analytics → Events → Real-time (DebugView)
- Enable debug mode: adb shell setprop debug.firebase.analytics.app eco.emergi.embit
- View events in real-time
```

---

### ✅ Phase 2: Firebase Crashlytics

#### Test 1: Enable Crashlytics and Force Test Crash
- [ ] Add a test crash button temporarily in Settings

**Add to SettingsScreen.kt temporarily:**
```kotlin
// Add in Settings Card
OutlinedButton(
    onClick = {
        // Force test crash
        throw RuntimeException("Test crash from SettingsScreen")
    },
    modifier = Modifier.fillMaxWidth()
) {
    Icon(Icons.Default.BugReport, null)
    Spacer(Modifier.width(8.dp))
    Text("Force Test Crash (DEBUG ONLY)")
}
```

- [ ] Rebuild and install app
- [ ] Tap "Force Test Crash" button
- [ ] App should crash
- [ ] Relaunch the app (crash report sent on next launch)
- [ ] Wait 2-5 minutes
- [ ] Check Firebase Console → Crashlytics

**Expected Results:**
- Crash report appears with stack trace
- Exception: "Test crash from SettingsScreen"
- Custom keys visible: battery_percentage, is_charging, auth_state, app_version

#### Test 2: Non-Fatal Exceptions
- [ ] Check logcat for non-fatal exceptions logged by Workers
```bash
adb logcat | grep "Crashlytics"
```

**Expected Results:**
- Non-fatal exceptions logged to Crashlytics
- Visible in Firebase Console → Crashlytics → Non-fatals

#### Verify in Firebase Console:
```
Firebase Console → Crashlytics → Dashboard
- View crash-free users %
- View crashes by version
- Click on crash to see stack trace and custom keys
```

---

### ✅ Phase 3: Remote Config

#### Test 1: Fetch Default Values
- [ ] Launch app (first launch)
- [ ] Check logcat for Remote Config fetch
```bash
adb logcat | grep "RemoteConfig"
```

**Expected Results:**
- Default values used initially
- Fetch initiated on app start
- Log: "Remote Config fetched successfully"

#### Test 2: Update Values in Firebase Console
- [ ] Go to Firebase Console → Remote Config
- [ ] Create/update parameters:

**Parameter 1:**
```
Parameter key: grid_monitoring_enabled
Default value: true
Description: Enable/disable grid monitoring feature
```

**Parameter 2:**
```
Parameter key: low_battery_threshold
Default value: 20
Description: Battery percentage threshold for low battery notification
```

**Parameter 3:**
```
Parameter key: health_score_good
Default value: 80
Description: Minimum health score considered "good"
```

- [ ] Publish changes in Firebase Console
- [ ] Force app to fetch new config:

**Add temporary button to Settings:**
```kotlin
OutlinedButton(
    onClick = {
        scope.launch {
            val remoteConfigManager: RemoteConfigManager = /* inject */
            val fetched = remoteConfigManager.fetchAndActivate()
            // Show toast/snackbar with result
        }
    },
    modifier = Modifier.fillMaxWidth()
) {
    Text("Fetch Remote Config")
}
```

- [ ] Tap button to fetch config
- [ ] Restart app to see new values applied

**Expected Results:**
- New values fetched and activated
- App behavior changes based on remote values

#### Verify in Firebase Console:
```
Firebase Console → Remote Config → Dashboard
- View parameter values
- View fetch statistics
- Set up A/B tests (optional)
```

---

### ✅ Phase 4: In-App Feedback System

#### Test 1: Submit Rating Feedback
- [ ] Sign in with Google (required)
- [ ] Navigate to Settings → Feedback section
- [ ] Tap "Rate Embit" button
- [ ] FeedbackDialog appears
- [ ] Select "Rating" type chip
- [ ] Set rating to 5 stars
- [ ] Enter optional comment: "Great app!"
- [ ] Tap "Submit"
- [ ] Check success message

**Expected Results:**
- Dialog appears with feedback form
- Star rating displayed
- Feedback submitted successfully
- Success message: "✓ Thank you for your feedback!"
- Analytics event: `feedback_submitted` with rating=5

#### Test 2: Submit Bug Report
- [ ] Tap "Report Bug" button in Settings
- [ ] Select "Bug" type chip
- [ ] Enter subject: "Battery reading shows incorrect temperature"
- [ ] Enter message: "Temperature shows -999°C on some devices"
- [ ] Tap "Submit"
- [ ] Check success message

**Expected Results:**
- Feedback submitted with type=BUG_REPORT
- Device info included (model, OS version, app version, battery %)
- Analytics event logged

#### Test 3: Submit Feature Request
- [ ] Tap "Suggest" button in Settings
- [ ] Select "Feature" type chip
- [ ] Enter subject: "Add dark mode"
- [ ] Enter message: "Would love to see a dark theme option"
- [ ] Tap "Submit"

**Expected Results:**
- Feedback submitted with type=FEATURE_REQUEST
- Success message displayed

#### Verify in Firestore:
```
Firebase Console → Firestore → Data
→ feedback (collection)
  → {feedbackId} (document)
    - userId: "user123..."
    - type: "RATING" | "BUG_REPORT" | "FEATURE_REQUEST"
    - rating: 5 (for RATING type)
    - subject: "..."
    - message: "..."
    - deviceInfo:
      - deviceModel: "Pixel 6"
      - osVersion: "14"
      - appVersion: "2.0.0"
      - batteryPercentage: 75
      - isCharging: false
    - timestamp: 1706025600000
    - status: "SUBMITTED"
```

---

### ✅ Phase 5: Firestore Analytics Schema

#### Test 1: Daily Metrics Aggregation
- [ ] Ensure app has collected battery readings for at least 24 hours
- [ ] Manually trigger aggregation (or wait for daily WorkManager job)

**Trigger manually via adb:**
```bash
# Option 1: Create a temporary debug endpoint in app
# Option 2: Call use case directly from a debug menu

# For testing, add to SettingsScreen temporarily:
OutlinedButton(
    onClick = {
        scope.launch {
            val aggregateUseCase: AggregateHealthMetricsUseCase = koinInject()
            val result = aggregateUseCase()
            result.onSuccess {
                // Show toast: "Metrics aggregated successfully"
            }.onFailure { error ->
                // Show toast: "Failed: ${error.message}"
            }
        }
    },
    modifier = Modifier.fillMaxWidth()
) {
    Text("Aggregate Metrics (DEBUG)")
}
```

**Expected Results:**
- Daily metrics calculated from battery readings
- Metrics saved to Firestore

#### Verify in Firestore:
```
Firebase Console → Firestore → Data

→ battery_health_metrics (collection)
  → {userId} (document)
    → metrics (subcollection)
      → 2026-01-24 (document)
        - date: 1706054400000
        - avgHealthScore: 85.5
        - minHealthScore: 80
        - maxHealthScore: 92
        - avgBatteryPercentage: 65.3
        - minBatteryPercentage: 20
        - maxBatteryPercentage: 100
        - avgTemperature: 28.5
        - peakTemperature: 35.2
        - totalReadings: 96
        - chargingCycles: 2
        - totalChargingTimeMinutes: 120
        - updatedAt: 1706140800000

→ users (collection)
  → {userId} (document)
    → analytics_consent (subcollection)
      → consent (document)
        - analyticsEnabled: true
        - crashlyticsEnabled: true
        - anonymousDataSharingEnabled: false
        - personalizedRecommendationsEnabled: true
        - consentTimestamp: 1706054400000
        - consentVersion: "1.0"
```

---

### ✅ Phase 6: Workers Analytics Integration

#### Test 1: Battery Monitor Worker
- [ ] Enable background monitoring in Settings
- [ ] Check logcat for worker execution
```bash
adb logcat | grep "BatteryMonitor"
```

**Expected Results:**
- Worker runs every 15 minutes
- Battery readings logged
- Analytics event: `battery_reading`
- Crashlytics custom keys updated (battery_percentage, is_charging, battery_temperature)

#### Test 2: Data Sync Worker
- [ ] Sign in with Google
- [ ] Enable auto-sync
- [ ] Wait for background sync or trigger manually
```bash
adb logcat | grep "DataSync"
```

**Expected Results:**
- Worker runs on sync interval
- Sync events logged: `sync_started`, `sync_completed`
- Crashlytics keys updated (is_syncing, last_sync_timestamp, pending_sync_count)
- On error: `sync_failed` event with error details

#### Force Worker Execution (for testing):
```bash
# Battery Monitor Worker
adb shell am broadcast -a androidx.work.diagnostics.REQUEST_DIAGNOSTICS \
  -p eco.emergi.embit \
  --es EXTRA_WORK_NAME battery_monitor_periodic

# Data Sync Worker
adb shell am broadcast -a androidx.work.diagnostics.REQUEST_DIAGNOSTICS \
  -p eco.emergi.embit \
  --es EXTRA_WORK_NAME data_sync_periodic
```

---

## Debug Commands

### Enable Firebase Analytics Debug View
```bash
# Enable debug mode (real-time events in Firebase Console)
adb shell setprop debug.firebase.analytics.app eco.emergi.embit

# Disable debug mode
adb shell setprop debug.firebase.analytics.app .none.
```

### View Logs
```bash
# All app logs
adb logcat -s EmbitApp:* BatteryMonitor:* DataSync:* Crashlytics:* Analytics:*

# Firebase Analytics logs
adb logcat | grep "FA"

# Crashlytics logs
adb logcat | grep "Crashlytics"

# Remote Config logs
adb logcat | grep "RemoteConfig"
```

### Clear App Data (fresh start)
```bash
adb shell pm clear eco.emergi.embit
```

---

## Firebase Console URLs

**Analytics:**
- Real-time (DebugView): https://console.firebase.google.com/project/YOUR_PROJECT/analytics/debugview
- Events: https://console.firebase.google.com/project/YOUR_PROJECT/analytics/events
- Users: https://console.firebase.google.com/project/YOUR_PROJECT/analytics/users

**Crashlytics:**
- Dashboard: https://console.firebase.google.com/project/YOUR_PROJECT/crashlytics
- Crashes: https://console.firebase.google.com/project/YOUR_PROJECT/crashlytics/app/android:eco.emergi.embit/issues

**Remote Config:**
- Dashboard: https://console.firebase.google.com/project/YOUR_PROJECT/config
- Parameters: https://console.firebase.google.com/project/YOUR_PROJECT/config/parameters

**Firestore:**
- Data: https://console.firebase.google.com/project/YOUR_PROJECT/firestore/data

---

## Troubleshooting

### Analytics events not appearing
1. Ensure debug mode is enabled: `adb shell setprop debug.firebase.analytics.app eco.emergi.embit`
2. Wait 1-2 minutes for events to appear in DebugView
3. Check internet connection
4. Check app logs for Firebase initialization errors

### Crashlytics reports not appearing
1. Crash reports are sent on NEXT app launch (not immediately)
2. Wait 2-5 minutes after relaunch
3. Check Crashlytics is enabled: Firebase Console → Crashlytics → Enable
4. Verify google-services.json is correct

### Remote Config not fetching
1. Check internet connection
2. Publish changes in Firebase Console
3. Wait for fetch interval (default: 12 hours) or force fetch
4. Check logs: `adb logcat | grep "RemoteConfig"`

### Feedback not saving to Firestore
1. Ensure user is signed in (required)
2. Check Firestore rules allow write access for authenticated users
3. Check Firestore logs in Firebase Console
4. Verify internet connection

### Workers not running
1. Check battery optimization is disabled for app
2. Check WorkManager constraints (WiFi, charging, etc.)
3. Force worker execution with adb broadcast
4. Check logs: `adb logcat | grep "Worker"`

---

## Success Criteria ✅

- [ ] Analytics events visible in Firebase Console (DebugView)
- [ ] Crashlytics crash reports appear with custom keys
- [ ] Remote Config values fetched and applied
- [ ] Feedback submitted and visible in Firestore
- [ ] Daily metrics aggregated in Firestore
- [ ] Workers logging analytics and updating Crashlytics context
- [ ] Zero performance impact on app
- [ ] All privacy controls working (consent, opt-out)

---

## Next Steps (Production)

1. **Remove Debug Code:**
   - Remove "Force Test Crash" button
   - Remove "Aggregate Metrics (DEBUG)" button
   - Remove "Fetch Remote Config" button

2. **Configure Firestore Security Rules:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Feedback - authenticated users can write their own
    match /feedback/{feedbackId} {
      allow write: if request.auth != null && request.resource.data.userId == request.auth.uid;
      allow read: if request.auth != null && resource.data.userId == request.auth.uid;
    }

    // Analytics - authenticated users can write their own
    match /battery_health_metrics/{userId}/{document=**} {
      allow write: if request.auth != null && userId == request.auth.uid;
      allow read: if request.auth != null && userId == request.auth.uid;
    }

    // Analytics consent
    match /users/{userId}/analytics_consent/{document=**} {
      allow write: if request.auth != null && userId == request.auth.uid;
      allow read: if request.auth != null && userId == request.auth.uid;
    }
  }
}
```

3. **Set up Remote Config Conditions:**
   - Create conditions for A/B testing
   - Set up percentage-based rollouts
   - Configure environment-specific values (dev/staging/production)

4. **Configure Crashlytics ProGuard Mappings:**
   - Ensure mapping files are uploaded for release builds
   - Verify stack traces are deobfuscated

5. **Schedule Daily Metrics Aggregation:**
   - Create WorkManager periodic job to run `AggregateHealthMetricsUseCase` daily
   - Schedule at low-usage time (e.g., 3 AM)

6. **Monitor Production:**
   - Set up Firebase alerts for crash rate spikes
   - Monitor analytics funnel for user drop-offs
   - Review feedback regularly for bugs and feature requests

---

## Performance Monitoring

**Firebase Performance Monitoring (Optional Enhancement):**
```kotlin
// Add to build.gradle.kts
implementation(libs.firebase.perf)

// Add plugin
plugins {
    id("com.google.firebase.firebase-perf")
}

// Track custom traces
val trace = Firebase.performance.newTrace("battery_sync")
trace.start()
// ... sync operation
trace.stop()
```

---

Last Updated: 2026-01-24
Version: 1.0
