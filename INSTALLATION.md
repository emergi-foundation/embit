# Embit v2.1 - Installation & Deployment Guide

## Web Application (Already Deployed! ✓)

### Access the Web App
Your Embit web application is now live at:
**https://scheierventures.github.io/embit/**

### Enable GitHub Pages (If Not Already Enabled)
1. Go to your repository: https://github.com/ScheierVentures/embit
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment
6. Your app will be available at: https://scheierventures.github.io/embit/

### Install as PWA (Progressive Web App)
Once the web app is live, users can install it:

**On Android/Chrome:**
1. Visit https://scheierventures.github.io/embit/
2. Tap the three-dot menu → "Install app" or "Add to Home screen"
3. Follow the prompts

**On iOS/Safari:**
1. Visit https://scheierventures.github.io/embit/
2. Tap the Share button → "Add to Home Screen"
3. Tap "Add"

---

## Android Application

The Android app requires a complete Android SDK installation to build. You have **three options**:

### Option 1: Build with Android Studio (Recommended)
If you have Android Studio installed:

1. **Open the project:**
   ```bash
   # Open Android Studio and select "Open Project"
   # Navigate to: /home/ess/Documents/apps/embit
   ```

2. **Sync and Build:**
   - Android Studio will automatically sync Gradle
   - Click **Build → Build Bundle(s) / APK(s) → Build APK(s)**
   - APK will be at: `androidApp/build/outputs/apk/debug/androidApp-debug.apk`

3. **Install on Device:**
   - Connect your Android device via USB
   - Enable USB debugging on the device
   - Click **Run** button in Android Studio

   OR manually install:
   ```bash
   adb install androidApp/build/outputs/apk/debug/androidApp-debug.apk
   ```

### Option 2: GitHub Actions (Automated CI/CD)
Set up automatic APK building on every push:

1. **Create `.github/workflows/android-build.yml`:**
   ```yaml
   name: Android Build

   on:
     push:
       branches: [ master ]
     pull_request:
       branches: [ master ]

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - name: Set up JDK 17
           uses: actions/setup-java@v4
           with:
             java-version: '17'
             distribution: 'temurin'

         - name: Setup Android SDK
           uses: android-actions/setup-android@v3

         - name: Grant execute permission for gradlew
           run: chmod +x gradlew

         - name: Build Debug APK
           run: ./gradlew :androidApp:assembleDebug

         - name: Upload APK
           uses: actions/upload-artifact@v4
           with:
             name: embit-debug
             path: androidApp/build/outputs/apk/debug/androidApp-debug.apk
   ```

2. **Download Built APK:**
   - Go to repository → Actions tab
   - Click on latest workflow run
   - Download the APK from "Artifacts" section

### Option 3: Install Full Android SDK (Command Line)
If you want to build from the command line:

1. **Download Android Command Line Tools:**
   ```bash
   cd ~
   wget https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip
   unzip commandlinetools-linux-11076708_latest.zip
   mkdir -p ~/Android/Sdk/cmdline-tools/latest
   mv cmdline-tools/* ~/Android/Sdk/cmdline-tools/latest/
   ```

2. **Install Required SDK Components:**
   ```bash
   export ANDROID_HOME=~/Android/Sdk
   export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin

   sdkmanager --licenses
   sdkmanager "platform-tools" "platforms;android-35" "build-tools;34.0.0"
   ```

3. **Update local.properties:**
   ```bash
   echo "sdk.dir=$HOME/Android/Sdk" > local.properties
   ```

4. **Build APK:**
   ```bash
   ./gradlew :androidApp:assembleDebug
   ```

5. **Install APK:**
   ```bash
   # The APK will be at:
   # androidApp/build/outputs/apk/debug/androidApp-debug.apk

   # Install via USB:
   adb install androidApp/build/outputs/apk/debug/androidApp-debug.apk

   # Or copy to device and install manually
   ```

---

## Testing the Applications

### Web App Testing
1. **Open in browser:** https://scheierventures.github.io/embit/
2. **Check features:**
   - Monitor screen shows battery status
   - Analytics screen displays health score
   - History screen shows charts
   - Settings screen displays app info

3. **Test PWA:**
   - Install as PWA on mobile device
   - Test offline functionality
   - Verify service worker caching

4. **Browser compatibility:**
   - ✅ Chrome/Edge (best support - has Battery API)
   - ✅ Firefox (limited - no Battery API)
   - ✅ Safari (limited - no Battery API)

### Android App Testing
1. **Enable Developer Options on Android:**
   - Settings → About Phone
   - Tap "Build Number" 7 times
   - Go back → Developer Options
   - Enable "USB Debugging"

2. **Install APK:**
   - Method 1: Via USB with `adb install`
   - Method 2: Copy APK to device and install manually
   - Method 3: Deploy directly from Android Studio

3. **Grant Permissions:**
   - Battery monitoring requires no special permissions
   - App runs as a background service

4. **Test Features:**
   - Battery monitoring updates every 30 seconds
   - Data stored in local SQLite database
   - Analytics calculated from historical data
   - Alarms schedule hourly recordings

---

## Distribution Options

### Web App
- ✅ **Already live:** GitHub Pages
- **Alternative hosts:**
  - Netlify (free tier, custom domain support)
  - Vercel (edge network, serverless)
  - Firebase Hosting (Google infrastructure)
  - Cloudflare Pages (global CDN)

### Android App
- **Internal Testing:**
  - Direct APK sharing (current method)
  - Firebase App Distribution
  - TestFlight equivalent: Google Play Internal Testing

- **Public Release:**
  - Google Play Store (requires developer account: $25 one-time)
  - F-Droid (open source app store)
  - Amazon Appstore
  - Direct download from website

---

## Known Limitations

### Web App
- **Battery API:** Only available in Chromium-based browsers (Chrome, Edge, Opera)
- **Temperature data:** Not available via web Battery Status API
- **Background monitoring:** Limited compared to native app
- **Estimated values:** Voltage and current are estimated from battery percentage

### Android App
- **Build requirements:** Needs full Android SDK or Android Studio
- **API Level:** Requires Android 5.0 (API 21) or higher
- **Background restrictions:** Modern Android versions limit background services
- **Battery optimization:** Users may need to disable battery optimization for the app

---

## Troubleshooting

### Web App Issues
**"Battery Status API not supported"**
- Use Chrome, Edge, or Opera browser
- Battery API not available in Firefox or Safari

**Charts not loading**
- Check browser console for errors
- Ensure JavaScript is enabled
- Clear browser cache and reload

**PWA won't install**
- Ensure HTTPS is enabled (GitHub Pages provides this)
- Check that manifest.json is loading correctly
- Try on a different browser or device

### Android Build Issues
**"SDK location not found"**
- Create `local.properties` with correct SDK path
- Or use Android Studio which handles this automatically

**"License not accepted"**
- Run: `sdkmanager --licenses` and accept all
- Or build with Android Studio or GitHub Actions

**"Platform tools not found"**
- Install required SDK components:
  ```bash
  sdkmanager "platform-tools" "platforms;android-35" "build-tools;34.0.0"
  ```

---

## Next Steps

### For Immediate Testing
1. ✅ Web app is already live - test it now!
2. Build Android APK using one of the three methods above
3. Install on your Android devices
4. Compare web vs native experience

### For Public Release
1. Test thoroughly on multiple devices
2. Create release builds (signed APKs)
3. Update documentation
4. Set up Google Play Developer account
5. Prepare store listings and screenshots
6. Push to public repository (origin: emergi-foundation/embit)

### For Development
- Master branch: `dev` remote (ScheierVentures/embit)
- Public releases: `origin` remote (emergi-foundation/embit)
- Web app: `gh-pages` branch on `dev` remote

---

## Support & Documentation

- **Web App Live:** https://scheierventures.github.io/embit/
- **Repository:** https://github.com/ScheierVentures/embit
- **Public Repo (future):** https://github.com/emergi-foundation/embit
- **Issues:** Report bugs on GitHub Issues
- **Version:** 2.1.0 (2025-10-24)
