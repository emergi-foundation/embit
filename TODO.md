# Embit TODO - Future Enhancements

## Priority: High

### Firefox/Safari Demo Mode
**Status:** Planned
**Description:** Implement demo mode for browsers without Battery Status API support

**Features:**
- Show app with simulated battery data
- All screens functional (Monitor, Analytics, History, Settings)
- Display clear "Demo Mode" banner/indicator
- Educate users about full functionality in compatible browsers
- Still offer Android APK download link

**Benefits:**
- Better user experience than blocking entirely
- Showcases full feature set to all visitors
- Increases engagement and app awareness
- Useful for presentations and demos

**Implementation approach:**
1. Add `demoMode` state flag
2. Create fake battery data generator
3. Mock BatteryMonitorService for demo
4. Add prominent banner: "Demo Mode - Using simulated data"
5. Keep Android APK download prominently visible

---

## Priority: Medium

### Android APK Signing for Release
- Set up keystore for production APK signing
- Configure GitHub Actions to build signed release APKs
- Document signing process for future releases

### Enhanced Charting
- Add more chart types (area, stacked)
- Implement zoom/pan on charts
- Export chart data as CSV/JSON
- Comparison views (day vs day, week vs week)

### PWA Enhancements
- Add push notifications for battery alerts
- Implement background sync
- Offline data queue for analytics
- App update notifications

---

## Priority: Low

### Additional Features
- Dark mode support
- Multiple device tracking
- Cloud backup/sync (optional)
- Battery health predictions with ML
- Energy cost calculator based on local rates

### Internationalization
- Multi-language support
- Locale-specific date/time formatting
- Region-specific energy units

### Performance
- Lazy loading for chart library
- Code splitting for smaller initial bundle
- Service worker optimization
- IndexedDB performance tuning

---

## Completed ✓
- ✅ Web application with Compose for Web
- ✅ PWA support with manifest and service worker
- ✅ Interactive charting with Chart.js
- ✅ GitHub Pages deployment
- ✅ Android APK build automation (GitHub Actions)
- ✅ Browser compatibility error with APK download link
- ✅ Installation documentation
