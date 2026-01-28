# Embit Analytics Documentation

**Version**: 2.1.4
**Last Updated**: 2026-01-26
**Firebase Analytics**: Enabled
**Privacy**: GDPR Compliant

---

## Table of Contents

1. [Overview](#overview)
2. [Privacy & Consent](#privacy--consent)
3. [Screen View Events](#screen-view-events)
4. [Authentication Events](#authentication-events)
5. [Battery Monitoring Events](#battery-monitoring-events)
6. [Data Sync Events](#data-sync-events)
7. [Data Management Events](#data-management-events)
8. [Settings Events](#settings-events)
9. [Error Events](#error-events)
10. [Feedback Events](#feedback-events)
11. [Custom Events](#custom-events)
12. [User Properties](#user-properties)
13. [Remote Config Flags](#remote-config-flags)
14. [Health Metrics Aggregation](#health-metrics-aggregation)

---

## Overview

Embit uses Firebase Analytics to track user behavior, app performance, and battery health metrics. All analytics are:

- **Anonymous by default**: User IDs are Firebase-generated unless user is authenticated
- **GDPR compliant**: Users can opt-out at any time
- **Privacy-first**: No personally identifiable information (PII) is collected
- **Research-focused**: Aggregated data helps improve battery technology understanding

### Analytics Stack

- **Firebase Analytics**: Event tracking, screen views, user properties
- **Firebase Crashlytics**: Crash reporting and non-fatal errors
- **Firebase Remote Config**: Dynamic feature flags and A/B testing
- **Firestore**: Aggregated health metrics for research

---

## Privacy & Consent

### Consent Options

Users control their privacy through the Analytics Consent Screen:

| Setting | Default | Description |
|---------|---------|-------------|
| **Usage Analytics** | ✅ Enabled | Tracks app usage patterns, screen views, feature adoption |
| **Crash Reports** | ✅ Enabled | Automatically sends crash reports to help fix bugs |
| **Personalized Tips** | ✅ Enabled | Uses battery data for personalized charging recommendations |
| **Anonymous Research Data** | ❌ Disabled | Shares anonymized battery health data for energy research |

### Consent Event

**Event**: `analytics_consent_changed`

```json
{
  "analytics_enabled": true,
  "crashlytics_enabled": true,
  "anonymous_sharing_enabled": false,
  "personalized_recommendations_enabled": true
}
```

**Triggered**: When user updates consent in Analytics Consent Screen or Settings

---

## Screen View Events

All screen navigation is automatically tracked.

**Event**: `screen_view`

**Screens Tracked** (11 total):

1. **Monitor** - Real-time battery monitoring dashboard
2. **History** - Historical battery data charts
3. **Health** - Battery health analysis and recommendations
4. **VPP** - Virtual Power Plant grid monitoring
5. **Settings** - App settings and preferences
6. **Login** - User authentication
7. **SignUp** - New user registration
8. **Profile** - User profile management
9. **PreferencesSetup** - Initial preferences onboarding
10. **LocationPermission** - Location permission request
11. **AnalyticsConsent** - Privacy and analytics consent

**Parameters**:
```json
{
  "screen_name": "Monitor",
  "screen_class": "BatteryMonitorScreen"
}
```

**Tracked in**: `Navigation.kt:117-210`

---

## Authentication Events

### Login

**Event**: `login`

```json
{
  "method": "email" | "google"
}
```

**Triggered**: Successful user authentication
**Tracked in**: `LoginScreen.kt:145-168`

### Sign Up

**Event**: `sign_up`

```json
{
  "method": "email" | "google"
}
```

**Triggered**: New user account creation
**Tracked in**: `SignUpScreen.kt:121-145`

### Logout

**Event**: `logout`

**Triggered**: User signs out
**Tracked in**: `ProfileScreen.kt:75-82`

---

## Battery Monitoring Events

### Monitoring Started

**Event**: `monitoring_started`

**Triggered**: Background battery monitoring begins
**Tracked in**: `BatteryWorkScheduler.kt`

### Monitoring Stopped

**Event**: `monitoring_stopped`

```json
{
  "reason": "user_action" | "error" | "low_battery"
}
```

**Triggered**: Background monitoring stops

### Health Check

**Event**: `health_check`

```json
{
  "health_score": 85,
  "health_category": "excellent" | "good" | "fair" | "poor"
}
```

**Triggered**: Daily health score calculation
**Categories**:
- **excellent**: 80-100
- **good**: 60-79
- **fair**: 40-59
- **poor**: 0-39

### Battery Reading

**Event**: `battery_reading`

```json
{
  "percentage": 87,
  "temperature": 28.5,
  "is_charging": "true" | "false"
}
```

**Triggered**: Every 15 minutes by BatteryMonitorWorker
**Tracked in**: `BatteryMonitorWorker.kt:61-65`

---

## Data Sync Events

### Sync Started

**Event**: `sync_started`

```json
{
  "trigger_source": "automatic" | "manual" | "login"
}
```

**Triggered**: Cloud sync begins
**Tracked in**: `DataSyncWorker.kt`

### Sync Completed

**Event**: `sync_completed`

```json
{
  "record_count": 1523,
  "duration_ms": 4250,
  "trigger_source": "automatic"
}
```

**Triggered**: Successful sync completion
**Tracked in**: `DataSyncWorker.kt`

### Sync Failed

**Event**: `sync_failed`

```json
{
  "error_type": "network_error" | "auth_error" | "conflict_error",
  "error_message": "Connection timeout",
  "trigger_source": "automatic"
}
```

**Triggered**: Sync failure
**Tracked in**: `DataSyncWorker.kt`

---

## Data Management Events

### Data Exported

**Event**: `data_exported`

```json
{
  "format": "json",
  "record_count": 2150
}
```

**Triggered**: User exports battery data
**Tracked in**: `SettingsScreen.kt:145-150`

### Data Imported

**Event**: `data_imported`

```json
{
  "format": "json",
  "record_count": 875,
  "success": "true" | "false"
}
```

**Triggered**: User imports battery data
**Tracked in**: `SettingsScreen.kt:151-158`

### Data Cleanup

**Event**: `data_cleanup`

```json
{
  "deleted_count": 450,
  "time_period": "90_days" | "all"
}
```

**Triggered**: User cleans up old data or clears all data
**Tracked in**: `SettingsScreen.kt:159-165`

---

## Settings Events

### Grid Monitoring Toggled

**Event**: `grid_monitoring_toggled`

```json
{
  "enabled": "true" | "false"
}
```

**Triggered**: User enables/disables grid notifications
**Tracked in**: `SettingsScreen.kt:592-600`

### Energy Product Selected

**Event**: `energy_product_selected`

```json
{
  "product_type": "SOLAR_PV" | "HOME_BATTERY" | "ELECTRIC_VEHICLE" | "NONE",
  "provider": "Tesla" | "Enphase" | null
}
```

**Triggered**: User selects their energy product
**Tracked in**: `SettingsScreen.kt:798-807`

### Setting Changed

**Event**: `setting_changed`

```json
{
  "setting_name": "sync_interval",
  "new_value": "hourly"
}
```

**Triggered**: Generic setting modification

---

## Error Events

### Error Occurred

**Event**: `error_occurred`

```json
{
  "error_type": "login_failed" | "export_failed" | "settings_operation_failed",
  "error_message": "Invalid credentials",
  "error_context": "LoginScreen"
}
```

**Triggered**: Any application error
**Tracked in**: Multiple screens and services

### Permission Denied

**Event**: `permission_denied`

```json
{
  "permission": "BATTERY_STATS" | "LOCATION" | "NOTIFICATIONS"
}
```

**Triggered**: User denies app permission
**Tracked in**: Permission request dialogs

---

## Feedback Events

### Feedback Submitted

**Event**: `feedback_submitted`

```json
{
  "feedback_type": "RATING" | "BUG_REPORT" | "FEATURE_REQUEST" | "GENERAL",
  "rating": 5
}
```

**Triggered**: User submits app feedback
**Tracked in**: `SettingsScreen.kt:920-923`

---

## Custom Events

### Health Metrics Aggregated

**Event**: `health_metrics_aggregated`

```json
{
  "status": "success" | "failed",
  "timestamp": 1706284800000
}
```

**Triggered**: Daily at midnight (local time)
**Tracked in**: `HealthMetricsAggregationWorker.kt:40-47`

**Purpose**: Confirms daily aggregation of battery health metrics to Firestore for research

---

## User Properties

User properties are set upon authentication and persist across sessions.

| Property | Example | Description |
|----------|---------|-------------|
| `user_id` | `firebase-uid-123` | Firebase UID (set on login, cleared on logout) |
| `auth_provider` | `email`, `google` | Authentication method used |
| `device_model` | `Pixel 7 Pro` | Device model (Android Build.MODEL) |
| `os_version` | `14` | Android OS version (Build.VERSION.RELEASE) |
| `grid_region` | `CAISO_NORTH` | WattTime balancing authority code |
| `is_new_user` | `true`, `false` | First-time user flag (sign-ups only) |

**Set in**:
- `LoginScreen.kt:149-161`
- `SignUpScreen.kt:124-136`

---

## Remote Config Flags

Dynamic feature flags controlled via Firebase Remote Config.

### Feature Flags

| Flag | Default | Description |
|------|---------|-------------|
| `grid_monitoring_enabled` | `true` | Enable/disable grid monitoring features |
| `vpp_enabled` | `true` | Show/hide Virtual Power Plant tab |
| `feedback_enabled` | `true` | Show/hide feedback section in Settings |

**Usage**:
- VPP tab visibility: `Navigation.kt:82-90`
- Feedback section: `SettingsScreen.kt:689-775`

### App Configuration

| Config | Default | Description |
|--------|---------|-------------|
| `min_app_version` | `2.0.0` | Minimum required app version |
| `force_update_required` | `false` | Force users to update |
| `sync_interval_minutes` | `60` | Cloud sync frequency |
| `max_sync_batch_size` | `100` | Max records per sync batch |

### Health Score Thresholds

| Threshold | Default | Description |
|-----------|---------|-------------|
| `health_score_good` | `80` | Minimum score for "excellent" category |
| `health_score_fair` | `60` | Minimum score for "good" category |
| `health_score_poor` | `40` | Minimum score for "fair" category |

### Notification Thresholds

| Threshold | Default | Description |
|-----------|---------|-------------|
| `low_battery_threshold` | `20` | Percentage to trigger low battery alert |
| `high_temp_threshold` | `45.0` | °C to trigger high temperature warning |

### A/B Testing

| Variant | Description |
|---------|-------------|
| `experiment_variant` | `control` or `experimental` for A/B tests |

**Fetched**: Every 12 hours, cached locally
**Applied**: Immediately after fetch via `RemoteConfigManager.kt`

---

## Health Metrics Aggregation

Daily battery health metrics are aggregated and stored in Firestore for research purposes.

### Firestore Collection

**Path**: `battery_health_metrics/{userId}/metrics/{date}`

**Document Structure**:
```json
{
  "date": 1706284800000,
  "avgHealthScore": 82.5,
  "minHealthScore": 78,
  "maxHealthScore": 87,
  "avgBatteryPercentage": 65.3,
  "minBatteryPercentage": 15,
  "maxBatteryPercentage": 100,
  "avgTemperature": 27.8,
  "peakTemperature": 35.2,
  "totalReadings": 96,
  "chargingCycles": 2,
  "totalChargingTimeMinutes": 145,
  "updatedAt": 1706371200000
}
```

**Frequency**: Once per day at ~midnight (local time)
**Worker**: `HealthMetricsAggregationWorker.kt`
**Use Case**: `AggregateHealthMetricsUseCase.kt`

### Privacy

- **Anonymous by default**: If user opts into `anonymous_data_sharing_enabled`
- **User-controlled**: Can be disabled in Analytics Consent
- **Aggregated**: No individual battery readings, only daily summaries
- **Research purpose**: Helps improve battery technology understanding

---

## Testing Analytics

### Firebase Console

1. Navigate to Firebase Console → Analytics → Events
2. Events appear in real-time (~30 seconds delay)
3. Use DebugView for immediate testing:
   ```bash
   adb shell setprop debug.firebase.analytics.app eco.emergi.embit
   ```

### Viewing Events

- **screen_view**: Most frequent, tracks all navigation
- **battery_reading**: Every 15 minutes
- **health_metrics_aggregated**: Once per day
- **sync_completed**: Every hour (if enabled)

### Testing Consent

1. Fresh install → Analytics Consent Screen appears after Location Permission
2. Toggle settings → Verify analytics stop/start
3. Check Settings → Privacy Settings to update consent later

---

## Implementation Details

### Key Files

| File | Purpose |
|------|---------|
| `AnalyticsManager.kt` | Central analytics tracking |
| `CrashlyticsManager.kt` | Crash and error reporting |
| `RemoteConfigManager.kt` | Feature flags and config |
| `AnalyticsConsentScreen.kt` | GDPR consent UI |
| `HealthMetricsAggregationWorker.kt` | Daily metrics aggregation |
| `EmbitApplication.kt` | Consent observation and application |

### Dependencies

```kotlin
// build.gradle.kts (androidApp)
implementation(platform("com.google.firebase:firebase-bom:32.7.0"))
implementation("com.google.firebase:firebase-analytics-ktx")
implementation("com.google.firebase:firebase-crashlytics-ktx")
implementation("com.google.firebase:firebase-config-ktx")
implementation("com.google.firebase:firebase-firestore-ktx")
```

---

## Best Practices

### DO ✅

- Always check `isEnabled` before logging events
- Use descriptive event names (snake_case)
- Keep parameter counts reasonable (<25 per event)
- Log errors to both Analytics and Crashlytics
- Respect user consent settings
- Use predefined events when available (login, screen_view, etc.)

### DON'T ❌

- Log personally identifiable information (PII)
- Log sensitive data (passwords, tokens, credit cards)
- Create excessive custom events (use existing ones)
- Log high-frequency events (>1000/hour per user)
- Block UI thread with analytics calls (all async)
- Ignore user consent preferences

---

## Support & Contact

**Issues**: Report analytics bugs via GitHub Issues
**Privacy**: Questions about data collection → privacy@embit.eco
**Research**: Interested in aggregated data → research@embit.eco

**Privacy Policy**: https://embit.eco/privacy
**Terms of Service**: https://embit.eco/terms

---

## Changelog

### v2.1.4 (2026-01-26)
- ✅ Added Analytics Consent Screen (GDPR compliance)
- ✅ Implemented consent observation and application
- ✅ Added screen view tracking for all 11 screens
- ✅ Added authentication event tracking (login, signup, logout)
- ✅ Added settings operation tracking (export, import, cleanup)
- ✅ Added grid monitoring and energy product selection tracking
- ✅ Added daily health metrics aggregation worker
- ✅ Integrated RemoteConfigManager for dynamic feature flags
- ✅ Added comprehensive analytics documentation

### v2.0.0 (2025-10-22)
- Initial Firebase Analytics implementation
- Basic event tracking
- Crashlytics integration

---

**End of Analytics Documentation**
