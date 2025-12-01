# Embit App Testing Guide

## Version 2.0.0 - Sprint 3 Testing

This guide helps you thoroughly test the Embit app before production deployment.

## Download Test Build

**Latest Dev Build**: https://github.com/ScheierVentures/embit/actions/runs/19126986520

1. Click the link above
2. Scroll to "Artifacts" section
3. Download `embit-dev-debug-apk`
4. Extract the ZIP file
5. Install the APK on your Android device

## Pre-Installation Checklist

- [ ] Android device running Android 7.0 (API 24) or higher
- [ ] Enable "Install from Unknown Sources" in device settings
- [ ] Have test Firebase account credentials ready
- [ ] Device has internet connection (Wi-Fi recommended for testing sync)

---

## Testing Checklist

### 1. Authentication Testing

#### Sign Up Flow
- [ ] Open app for first time
- [ ] Tap "Create Account"
- [ ] **Test**: Enter invalid email (no @) → Should show error
- [ ] **Test**: Enter short password (< 6 chars) → Should show error
- [ ] **Test**: Enter valid email + password → Should create account successfully
- [ ] **Verify**: Redirected to main screen
- [ ] **Verify**: Can see profile with email displayed

#### Sign In Flow
- [ ] Sign out from profile screen
- [ ] **Test**: Enter wrong password → Should show error
- [ ] **Test**: Enter correct credentials → Should sign in successfully
- [ ] **Verify**: User data persists after app restart

#### Sign Out
- [ ] Go to Settings → Profile
- [ ] Tap "Sign Out"
- [ ] **Verify**: Confirmation dialog appears
- [ ] Confirm sign out
- [ ] **Verify**: Redirected to login screen

### 2. Battery Monitoring

#### Real-Time Monitoring
- [ ] Navigate to Home screen
- [ ] **Verify**: Current battery percentage displayed
- [ ] **Verify**: Battery voltage shown
- [ ] **Verify**: Charging/discharging state visible
- [ ] **Verify**: Battery health score visible (0-100)
- [ ] **Test**: Plug/unplug charger → Status updates
- [ ] **Verify**: Battery history chart displays

#### Battery Health Analysis
- [ ] Let app run for 10+ minutes
- [ ] Check battery health card
- [ ] **Verify**: Health score between 0-100
- [ ] **Verify**: Recommendations shown if issues detected
- [ ] **Verify**: Temperature warnings (if applicable)

#### Battery Life Prediction
- [ ] **Verify**: "Time remaining" or "Time to full charge" shown
- [ ] **Verify**: Confidence level displayed (High/Medium/Low)
- [ ] **Test**: Change charging state → Prediction updates
- [ ] **Verify**: Predictions are reasonable (not negative, not > 24 hours)

### 3. Grid Awareness & Smart Charging (Sprint 3)

#### Grid Status Display
- [ ] Navigate to Grid Status section
- [ ] **Verify**: Grid status card displays:
  - [ ] Current grid stress level (LOW/NORMAL/MODERATE/HIGH/CRITICAL)
  - [ ] Renewable energy percentage
  - [ ] Carbon intensity (g/kWh)
  - [ ] Current electricity pricing
  - [ ] Location information
- [ ] **Verify**: Status updates every few minutes

#### Charging Recommendations
- [ ] Check charging recommendation card
- [ ] **Verify**: Shows "Good Time to Charge" or "Wait to Charge"
- [ ] **Verify**: Includes reason/explanation
- [ ] **Verify**: Shows estimated savings ($ and CO₂)
- [ ] **Verify**: Recommendations change based on:
  - [ ] High renewable energy (>70%) → Recommends charging
  - [ ] High carbon intensity (>500 g/kWh) → Recommends waiting
  - [ ] Peak pricing → Recommends waiting
  - [ ] Off-peak pricing → Recommends charging

#### Smart Charging Notifications
- [ ] Enable notifications in Settings
- [ ] Background the app
- [ ] **Test**: Wait for grid conditions to change
- [ ] **Verify**: Notification appears for:
  - [ ] Good charging conditions
  - [ ] Bad charging conditions
  - [ ] Critical grid alerts

### 4. Data Synchronization

#### Cloud Sync Setup
- [ ] Go to Settings
- [ ] **Verify**: Sync settings visible
- [ ] **Verify**: Last sync timestamp shown (if synced before)
- [ ] **Verify**: Auto-sync toggle works
- [ ] **Verify**: WiFi-only sync toggle works

#### Manual Sync
- [ ] Tap "Sync Now" button
- [ ] **Verify**: Sync progress indicator appears
- [ ] **Verify**: "Last synced" timestamp updates
- [ ] **Verify**: No error messages

#### Background Sync
- [ ] Enable auto-sync
- [ ] Background the app
- [ ] Wait 15-30 minutes
- [ ] Open app
- [ ] **Verify**: Sync occurred automatically
- [ ] **Test**: Disable WiFi → Sync should wait (if WiFi-only enabled)

### 5. Settings & Configuration

#### Settings Screen
- [ ] Navigate to Settings
- [ ] **Verify**: All sections visible:
  - [ ] Account information
  - [ ] Sync settings
  - [ ] Notification settings
  - [ ] App version displayed
- [ ] **Test**: Toggle each setting → Changes persist
- [ ] **Test**: Navigate away and back → Settings retained

#### Notification Settings
- [ ] Enable/disable grid notifications
- [ ] **Verify**: Setting takes effect immediately
- [ ] **Test**: With notifications disabled → No notifications appear

### 6. Performance & Stability

#### App Startup
- [ ] Force close app
- [ ] Reopen app
- [ ] **Verify**: Opens within 3 seconds
- [ ] **Verify**: No crash on startup
- [ ] **Verify**: Data loads correctly

#### Memory & Battery
- [ ] Use app for 30+ minutes
- [ ] Check device battery usage
- [ ] **Verify**: Embit uses < 5% battery per hour
- [ ] Check device RAM usage (Settings → Apps)
- [ ] **Verify**: Reasonable memory footprint (< 100MB)

#### Background Performance
- [ ] Background app for 1+ hour
- [ ] **Verify**: Background workers don't drain battery excessively
- [ ] **Verify**: App responds quickly when reopened

### 7. UI/UX Testing

#### Navigation
- [ ] Test all navigation flows
- [ ] **Verify**: Back button works on all screens
- [ ] **Verify**: Drawer/bottom navigation works smoothly
- [ ] **Verify**: No navigation loops or dead ends

#### Responsive Design
- [ ] Rotate device (portrait ↔ landscape)
- [ ] **Verify**: UI adapts correctly
- [ ] **Verify**: No content cut off
- [ ] **Verify**: Data persists through rotation

#### Dark Mode (if implemented)
- [ ] Enable system dark mode
- [ ] **Verify**: App respects dark mode
- [ ] **Verify**: All text readable
- [ ] **Verify**: No color contrast issues

### 8. Error Handling

#### Network Errors
- [ ] Turn off internet
- [ ] Try to:
  - [ ] Sync data → Should show error message
  - [ ] Load grid status → Should show error/cached data
  - [ ] Sign in → Should show connection error
- [ ] **Verify**: Error messages are user-friendly
- [ ] **Verify**: App doesn't crash

#### Edge Cases
- [ ] **Test**: Battery level 0% → App handles gracefully
- [ ] **Test**: Battery level 100% → Predictions correct
- [ ] **Test**: Rapid charging state changes → No crashes
- [ ] **Test**: Sign out while sync in progress → Handles cleanly

### 9. Data Accuracy

#### Battery Readings
- [ ] Compare battery % with system settings
- [ ] **Verify**: Matches within ±1%
- [ ] **Verify**: Voltage readings reasonable (3000-4500 mV typically)
- [ ] **Verify**: Temperature readings accurate (if available)

#### Grid Data
- [ ] Check grid status matches known conditions
- [ ] **Verify**: Renewable % seems reasonable for location
- [ ] **Verify**: Pricing aligns with time of day
- [ ] **Verify**: Carbon intensity values realistic (50-800 g/kWh)

---

## Regression Testing

Test all previous functionality still works:

- [ ] Battery history chart displays correctly
- [ ] All existing use cases from Sprint 1-2 work
- [ ] No new crashes introduced
- [ ] App permissions still work correctly

---

## Bug Reporting

When you find issues, report with:

1. **Description**: What happened?
2. **Expected**: What should happen?
3. **Steps**: How to reproduce?
4. **Device**: Android version, device model
5. **Screenshot**: If applicable
6. **Logs**: Check logcat if possible

### Priority Levels

- **P0 - Critical**: App crashes, data loss, security issues
- **P1 - High**: Major features broken, poor UX
- **P2 - Medium**: Minor bugs, UI glitches
- **P3 - Low**: Nice-to-have improvements

---

## Test Results

### Summary

- **Date Tested**: _________
- **Tester**: _________
- **Device**: _________
- **Android Version**: _________
- **Build Version**: 2.0.0-dev

### Results

- Total Tests: _____ / _____
- Passed: _____
- Failed: _____
- Blocked: _____

### Critical Issues Found

1.
2.
3.

### Recommendations

- [ ] Ready for staging deployment
- [ ] Ready for production deployment
- [ ] Needs bug fixes before deployment
- [ ] Needs more testing

---

## Next Steps After Testing

1. **If tests pass**: Move to staging environment
2. **If issues found**: Create GitHub issues, fix bugs, retest
3. **When ready**: Configure production Firebase & signing
4. **Final step**: Deploy to Google Play Store

---

## Questions or Issues?

Contact the development team or create an issue on GitHub:
https://github.com/ScheierVentures/embit/issues
