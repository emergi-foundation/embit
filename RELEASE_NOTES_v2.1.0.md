# Embit v2.1.0 - QA Release Notes

**Release Date:** January 24, 2026
**Build Number:** 3
**Version Code:** 3
**Flavor:** Staging (Debug)
**Distribution:** Firebase App Distribution (dev group)

---

## 🎯 Release Overview

This release introduces comprehensive Firebase integration to enhance app monitoring, user feedback collection, and dynamic configuration capabilities. No breaking changes to existing functionality.

**What's New:** 5 major Firebase features
**Lines of Code:** +1,716 new
**Files Changed:** 12 new, 10 modified
**Build Status:** ✅ Successful

---

## ✨ New Features

### 1. 📊 Firebase Analytics
**Real-time user behavior tracking**

- **What it does:** Automatically tracks user interactions, screen views, and app events
- **Benefits:** Helps us understand how you use the app and identify areas for improvement
- **Visible to users:** No (runs silently in background)
- **Privacy:** Can be disabled in Settings → Privacy (coming soon)

**Events tracked:**
- Screen navigation (which screens you visit)
- Authentication events (login, logout)
- Battery monitoring activity (when monitoring starts/stops)
- Data sync operations (upload/download status)
- Settings changes (when you modify preferences)
- Feature usage (grid monitoring, VPP, etc.)

### 2. 🐛 Firebase Crashlytics
**Automatic crash reporting & error tracking**

- **What it does:** Detects and reports app crashes with detailed debugging information
- **Benefits:** Helps us fix bugs faster and improve app stability
- **Visible to users:** No (unless app crashes, then you'll see standard Android crash dialog)
- **Privacy:** Reports are anonymous, no personal data collected

**What gets tracked:**
- Crash stack traces
- Device model and OS version
- Battery state at time of crash
- App version and build number
- User actions leading to crash

### 3. 🎛️ Firebase Remote Config
**Server-side feature flags & configuration**

- **What it does:** Allows us to enable/disable features and adjust settings without app updates
- **Benefits:** Faster feature rollouts, A/B testing, quick fixes
- **Visible to users:** No (happens automatically)

**Configurable parameters:**
- Feature availability (grid monitoring, VPP, feedback)
- Health score thresholds (what's considered "good" vs "poor")
- Notification thresholds (low battery, high temperature)
- Sync intervals and batch sizes
- Minimum app version requirements

### 4. 💬 In-App Feedback System
**Direct communication channel with dev team**

- **What it does:** Lets you submit ratings, bug reports, and feature requests directly from the app
- **Benefits:** Easier to share feedback, better bug reports with auto-included device info
- **Visible to users:** YES - New "Feedback" section in Settings

**How to use:**
1. Go to Settings → Feedback
2. Choose feedback type:
   - **Rate Embit:** Give 1-5 star rating with optional comment
   - **Report Bug:** Describe issue (device info auto-included)
   - **Request Feature:** Suggest new features or improvements
3. Fill in details
4. Tap "Submit"
5. You'll see confirmation message

**What happens to feedback:**
- Saved to our database for review
- Device info included (model, OS, battery %, app version)
- Dev team reviews all submissions
- We'll prioritize based on frequency and impact

### 5. 📈 Daily Battery Health Analytics
**Long-term battery health tracking**

- **What it does:** Aggregates your daily battery data for trend analysis
- **Benefits:** Better health predictions, personalized recommendations
- **Visible to users:** No (background data processing)
- **Privacy:** Requires sign-in, data is private to your account

**Metrics tracked daily:**
- Average battery health score
- Temperature statistics (min/max/average)
- Charging patterns (cycles, duration)
- Battery percentage trends
- Total readings collected

---

## 🧪 What to Test

### 🔴 Priority 1: Regression Testing (Existing Features)
**Goal:** Ensure nothing broke

- [ ] **Battery Monitoring**
  - Enable background monitoring in Settings
  - Check if readings appear in Monitor tab
  - Verify readings update every 15 minutes
  - Check battery notifications (low battery, full charge, high temp)

- [ ] **Data Sync**
  - Sign in with Google (if not already)
  - Enable auto-sync in Settings
  - Wait for sync to complete
  - Verify data appears in History/Health tabs

- [ ] **Google Sign-In**
  - Sign out (if signed in)
  - Sign in with Google
  - Verify profile appears in Settings
  - Check sync settings available

- [ ] **All Screens Load**
  - Monitor tab
  - History tab
  - Health tab
  - Settings tab
  - Profile screen (from Settings)

### 🟡 Priority 2: New Features Testing

#### Feedback System (5 minutes)
**Location:** Settings → Feedback section

**Test 1: Submit Rating**
1. Tap "Rate Embit" button
2. Select "Rating" type
3. Set 5 stars ⭐⭐⭐⭐⭐
4. Add comment: "Testing feedback system"
5. Tap "Submit"
6. ✅ **Expected:** Success message appears

**Test 2: Report Bug**
1. Tap "Report Bug" button
2. Select "Bug" type
3. Subject: "Test bug report"
4. Message: "This is a test - ignore"
5. Tap "Submit"
6. ✅ **Expected:** Success message appears

**Test 3: Request Feature**
1. Tap "Suggest" button
2. Select "Feature" type
3. Subject: "Test feature request"
4. Message: "Dark mode would be cool"
5. Tap "Submit"
6. ✅ **Expected:** Success message appears

**Test 4: Feedback Without Sign-In**
1. Sign out if signed in
2. Try to tap feedback buttons
3. ✅ **Expected:** Buttons disabled with message "Sign in to submit feedback"

#### Analytics (Passive - Just Use App)
**No active testing needed - just use the app normally**

- Navigate between all tabs
- Enable/disable monitoring
- Change settings
- Trigger a sync
- All your actions are being tracked for analytics

**For curious testers:** Ask dev to enable DebugView to see events in real-time

#### Crashlytics (Optional - Advanced Testers Only)
**⚠️ Only if dev provides test crash button**

If you see a "Force Test Crash" button in Settings:
1. Tap it
2. App will crash (this is expected!)
3. Relaunch app
4. Report: "Crash test completed successfully"

**DO NOT report this as a bug** - it's intentional!

### 🟢 Priority 3: Performance Check

- [ ] **App Startup**
  - Force close app
  - Launch app
  - ✅ **Expected:** Opens within 2-3 seconds (no slower than before)

- [ ] **Battery Usage**
  - Use app for 1 hour normally
  - Check Settings → Battery → App battery usage
  - ✅ **Expected:** Minimal impact (~1-3% per hour, same as before)

- [ ] **Data Usage**
  - Use app for 1 day
  - Check Settings → Data usage → Apps → Embit
  - ✅ **Expected:** Slight increase (~1-5 MB/day for analytics)

- [ ] **Responsiveness**
  - Navigate between screens quickly
  - Scroll through history
  - Switch tabs rapidly
  - ✅ **Expected:** No lag, smooth animations

---

## 🐛 Known Issues

**None currently** - This is a fresh release

If you find any, please report via:
1. In-app feedback (Settings → Feedback → Report Bug) ✅ Recommended
2. Team Slack channel
3. GitHub Issues

---

## 📱 Testing Environment

**Build Info:**
- Flavor: **Staging** (uses staging API endpoints)
- Build Type: **Debug** (easier debugging, no minification)
- Signing: Debug keystore (controlled fingerprint)
- Logs: Enabled (verbose logging for debugging)

**Supported Devices:**
- Min Android Version: 7.0 (API 24)
- Target Android Version: 14 (API 35)
- All screen sizes supported
- Tablets supported

**Network:**
- Requires internet for Firebase features
- Offline mode still works for basic monitoring
- Sync happens when network available

---

## 🔒 Privacy & Permissions

### New Permissions Required
**None** - No new Android permissions needed

### Data Collection
**What's collected:**
- Analytics events (screen views, button clicks)
- Crash reports (stack traces, device info)
- Feedback submissions (your input + device context)
- Battery health metrics (if you opt-in)

**What's NOT collected:**
- Personal information (name, email, phone)
- Location data
- Contacts or photos
- Other apps on device
- Browsing history

**Control & Privacy:**
- All features require Google Sign-In
- Data is private to your account
- Can opt-out of analytics (coming soon)
- Can delete account and data (coming soon)

---

## 📊 Testing Metrics

**Help us track QA progress:**

- **Installation Success Rate:** ___/10 testers installed
- **Crash-Free Rate:** ___% (Goal: 100%)
- **Feedback Submissions:** ___ submitted (Goal: 5+ test submissions)
- **Feature Completion:** ___% of test cases passed

---

## 💡 Tips for Effective Testing

### 1. Test Realistically
- Use the app as you normally would
- Don't just tap buttons randomly
- Try actual use cases (monitor battery, sync data)

### 2. Document Issues Clearly
When reporting bugs:
- What you were trying to do
- What happened (expected vs actual)
- Steps to reproduce
- Screenshots if possible (use device screenshot)

### 3. Test Edge Cases
- Poor network connection (toggle airplane mode)
- Low battery (let battery drain below 20%)
- After device restart
- After app update (install over previous version)

### 4. Provide Feedback
Good feedback examples:
- ✅ "Feedback dialog doesn't show on tablet in landscape mode"
- ✅ "App crashed when submitting feedback with very long message (5000+ chars)"
- ✅ "Love the new feedback feature! Super easy to use."

Bad feedback examples:
- ❌ "It doesn't work" (What doesn't work? When?)
- ❌ "Crashed" (Where? Doing what?)
- ❌ "Slow" (Which part? How slow?)

---

## 🎯 Success Criteria

**This QA release is successful when:**
- [ ] 5+ testers install and launch
- [ ] 98%+ crash-free rate (max 1 crash per 50 launches)
- [ ] All Priority 1 tests pass
- [ ] At least 5 feedback submissions received
- [ ] Analytics events appearing in Firebase Console
- [ ] No performance regressions
- [ ] Positive feedback from majority of testers

---

## 📞 Support & Questions

### Where to Report Issues
1. **In-App Feedback** (Recommended)
   - Settings → Feedback → Report Bug
   - Automatically includes device info
   - Fastest way to reach dev team

2. **Team Slack**
   - #embit-qa channel
   - Quick questions and discussions
   - Real-time help from devs

3. **GitHub Issues**
   - For detailed bug reports
   - Technical issues
   - Feature discussions

### Who to Contact
- **QA Lead:** [Your Name]
- **Dev Lead:** [Dev Name]
- **Firebase Issues:** Tag @dev-team in Slack

### Response Times
- Critical crashes: Within 1 hour
- Major bugs: Within 24 hours
- Minor issues: Within 3 days
- Feature requests: Reviewed weekly

---

## 🗓️ Testing Timeline

**Week 1 (Jan 24-31):**
- Day 1-2: Installation and basic testing
- Day 3-4: Feature testing and feedback
- Day 5-7: Bug fixes and retesting

**Week 2 (Feb 1-7):**
- Stabilization period
- Performance monitoring
- Final sign-off

**Target Production Date:** February 10, 2026 (if QA passes)

---

## 📋 QA Feedback Form

**Please submit this after testing:**

### Installation
- Installed successfully? ☐ Yes ☐ No
- Install issues? ___________________

### Features Working
- Battery monitoring? ☐ Yes ☐ No
- Data sync? ☐ Yes ☐ No
- Feedback system? ☐ Yes ☐ No
- All screens load? ☐ Yes ☐ No

### Issues Found
- Crashes? ☐ Yes ☐ No - How many? ___
- Bugs? ☐ Yes ☐ No - Describe: ___________________
- Performance issues? ☐ Yes ☐ No - Describe: ___________________

### Overall Rating
- App stability: ☐ Excellent ☐ Good ☐ Fair ☐ Poor
- New features: ☐ Excellent ☐ Good ☐ Fair ☐ Poor
- Would you recommend for production? ☐ Yes ☐ No ☐ Needs work

### Comments
_______________________________________________
_______________________________________________
_______________________________________________

**Tester Name:** _______________
**Date:** _______________
**Device:** _______________

---

## 🎉 Thank You!

Thank you for helping test Embit v2.1.0!

Your feedback is critical to ensuring a stable, high-quality release. Every bug you find and report makes the app better for all users.

**Questions? Ask in #embit-qa Slack channel**

Happy testing! 🚀

---

**Build Date:** 2026-01-24
**Git Tag:** qa-2.1.0
**Git Commit:** [Auto-filled by CI/CD]
**APK SHA256:** [Auto-filled by CI/CD]
