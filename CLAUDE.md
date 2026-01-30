# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

**Embit** is a modern Kotlin Multiplatform (KMP) battery monitoring application that tracks smartphone battery health and provides intelligent recommendations to optimize battery longevity. The app is built with Clean Architecture principles and uses Compose Multiplatform for UI.

**Current Status**: Version 2.0.0 - Complete KMP rewrite from legacy Android-only app

**Package**: `eco.emergi.embit`
**Platform Support**: Android (implemented), Web (planned), iOS (future)
**Languages**: Kotlin (100%)
**Min SDK**: Android 24 (Android 7.0)
**Target SDK**: Android 35

## Project Structure

```
embit/
├── shared/                          # Kotlin Multiplatform shared code
│   ├── src/commonMain/
│   │   ├── kotlin/eco/emergi/embit/
│   │   │   ├── domain/             # Business logic (models, repositories, use cases)
│   │   │   ├── data/               # Data layer (repositories, database)
│   │   │   └── presentation/       # ViewModels with StateFlow
│   │   └── sqldelight/             # SQLDelight database schema
│   └── src/androidMain/            # Android-specific implementations
│       └── kotlin/eco/emergi/embit/
│           ├── data/local/         # DatabaseDriverFactory
│           ├── domain/repositories/# AndroidBatteryMonitorService
│           └── di/                 # Koin platform module
│
├── androidApp/                      # Android application
│   └── src/main/kotlin/eco/emergi/embit/android/
│       ├── ui/screens/             # Compose screens
│       ├── ui/components/          # Reusable UI components
│       ├── ui/theme/               # Material 3 theme
│       ├── services/               # WorkManager, Notifications, Receivers
│       ├── migration/              # Room → SQLDelight migration
│       └── di/                     # Hilt modules
│
└── app/                            # Legacy Android app (deprecated)
```

## Build and Run Commands

### Building

```bash
# Build entire project
./gradlew build

# Build Android app only
./gradlew :androidApp:assembleDebug

# Build shared module only
./gradlew :shared:build

# Clean all build artifacts
./gradlew clean
```

### Running

```bash
# Install debug APK on connected device
./gradlew :androidApp:installDebug

# Build and install release version
./gradlew :androidApp:installRelease
```

### Testing

```bash
# Run all tests
./gradlew test

# Run Android instrumented tests
./gradlew :androidApp:connectedAndroidTest

# Run shared module tests
./gradlew :shared:test
```

## Architecture

### Clean Architecture with KMP

The app follows **Clean Architecture** principles with three layers:

#### 1. Domain Layer (`shared/src/commonMain/kotlin/domain/`)

**Models** (`domain/models/`):
- `BatteryReading`: Core data model with voltage, amperage, temperature, percentage, state
- `BatteryState`: Sealed class (Charging, Discharging, Full, NotCharging, Unknown)
- `BatteryStatistics`: Aggregated metrics, trends, power calculations
- `BatteryHealth`: Health metrics with degradation tracking
- `TimePeriod`: Enum for filtering (HOUR, DAY, WEEK, MONTH, ALL_TIME)

**Repositories** (`domain/repositories/`):
- `IBatteryRepository`: Interface for all data operations
- `IBatteryMonitorService`: Platform-specific battery monitoring (expect/actual)
- `BatteryMonitorServiceFactory`: Creates platform-specific monitors

**Use Cases** (`domain/usecases/`):
- `MonitorBatteryUseCase`: Real-time monitoring with Flow
- `GetBatteryHistoryUseCase`: Historical data retrieval
- `CalculateBatteryStatisticsUseCase`: Statistics and trends
- `AnalyzeBatteryHealthUseCase`: Health scoring (0-100) with multi-factor analysis
- `PredictBatteryLifeUseCase`: Time remaining predictions with confidence levels
- `GenerateChargingRecommendationsUseCase`: Personalized charging tips
- `ManageBatteryDataUseCase`: Export/import/cleanup operations

#### 2. Data Layer (`shared/src/commonMain/kotlin/data/`)

**SQLDelight Database** (`shared/src/commonMain/sqldelight/`):
- Schema: `BatteryReading.sq`
- 15+ optimized queries with compound indexes
- Reactive Flow-based queries
- Complex aggregations for statistics

**Repository Implementation** (`data/repositories/BatteryRepositoryImpl.kt`):
- Implements `IBatteryRepository`
- Bridges SQLDelight queries to domain models
- Calculates statistics, health scores, predictions

**Platform-Specific** (`shared/src/androidMain/kotlin/`):
- `DatabaseDriverFactory.android.kt`: Creates AndroidSqliteDriver
- `AndroidBatteryMonitorService.kt`: BroadcastReceiver-based monitoring
- `PlatformModule.android.kt`: Koin DI for Android platform

#### 3. Presentation Layer

**ViewModels** (`shared/src/commonMain/kotlin/presentation/`):
- `BatteryMonitorViewModel`: Real-time monitoring state
- `BatteryHistoryViewModel`: Historical data with period selection
- `BatteryHealthViewModel`: Health analysis and recommendations
- `SettingsViewModel`: App settings and data management

All ViewModels use:
- **StateFlow** for reactive state management
- **Sealed classes** for UI state (Initial, Loading, Success, Error)
- **Coroutines** for async operations

**Android UI** (`androidApp/src/main/kotlin/`):
- Material 3 Compose UI
- Bottom navigation with 4 screens
- Real-time updates via StateFlow collection
- Beautiful cards for metrics display

### Dependency Injection

**Dual DI Framework Architecture**:
The app uses **both** Hilt and Koin to separate concerns:

**Shared Module (Koin)**:
- `SharedModule`: Common dependencies (repository, use cases)
- `platformModule()`: Platform-specific implementations (expect/actual)
- All domain/data layer dependencies (multiplatform code)

**Android Module (Hilt)**:
- `@HiltAndroidApp` on EmbitApplication
- WorkManager integration via `@HiltWorker`
- Android-specific dependencies (Firebase, Android services)
- Coexists with Koin for shared dependencies

**⚠️ CRITICAL: Hilt/Koin Boundary**

**DO NOT** use `@Inject` in `EmbitApplication` for classes that depend on Koin dependencies!

Hilt **cannot** resolve Koin dependencies → **Runtime crash on app startup**

**Safe to @Inject (Android-only dependencies)**:
- `AnalyticsManager`
- `CrashlyticsManager`
- `RemoteConfigManager`
- Any class with ONLY Android/Firebase dependencies

**Must instantiate manually (have Koin dependencies)**:
- `AppStateManager` (needs `ObserveAuthStateUseCase`, `BidirectionalSyncUseCase`)
- `LocationBasedGridManager` (needs `IUserPreferencesRepository`)
- Any class with use cases or repositories from `shared` module

**How to manually instantiate**:
```kotlin
// In EmbitApplication.onCreate(), AFTER startKoin():
appStateManager = AppStateManager(
    context = this,
    observeAuthStateUseCase = GlobalContext.get().get(),
    bidirectionalSyncUseCase = GlobalContext.get().get()
)
```

**Code References**:
- EmbitApplication.kt:35-50 (documented DI architecture)
- AppStateManager.kt:27 (warning comment)
- LocationBasedGridManager.kt:32 (warning comment)

## Key Features

### 1. Real-Time Battery Monitoring

**Android Implementation**:
- `BroadcastReceiver` for battery events
- Captures: voltage, amperage, temperature, percentage, charging state
- Updates every battery event (plugged, unplugged, level change)
- Flow-based reactive streams to UI

**Code Reference**: `AndroidBatteryMonitorService.kt:36`

### 2. Background Monitoring with WorkManager

**Periodic Recording**:
- Records battery data every 15 minutes
- Uses `PeriodicWorkRequest` with constraints
- Survives app restarts and device reboots
- Shows persistent notification when monitoring

**Smart Notifications**:
- Low battery alert (≤20%)
- Full charge notification (≥95%)
- High temperature warning (>45°C)
- Organized in 3 channels (Status, Alerts, Monitoring)

**Code Reference**:
- `BatteryMonitorWorker.kt:28`
- `BatteryNotificationHelper.kt:23`
- `BatteryWorkScheduler.kt:15`

### 3. Advanced Battery Analytics

**Health Scoring (0-100)**:
- Multi-factor analysis: temperature, charging frequency, power draw, charging time
- Deducts points for unhealthy patterns
- Provides actionable recommendations

**Predictive Features**:
- Time remaining until full charge/discharge
- Confidence levels (HIGH/MEDIUM/LOW)
- Based on recent rate of change

**Charging Recommendations**:
- Priority-based (HIGH/MEDIUM/LOW)
- Context-aware (level, temperature, patterns)
- Examples:
  - "Unplug charger now" (at 95%+)
  - "Stop charging immediately" (temperature >45°C)
  - "Reduce charging frequency" (>3x/day)

**Code Reference**:
- `AnalyzeBatteryHealthUseCase.kt:38`
- `PredictBatteryLifeUseCase.kt:19`
- `GenerateChargingRecommendationsUseCase.kt:18`

### 4. Data Migration System

**Room → SQLDelight Migration**:
- Automatic detection of legacy database
- Smart data transformation with unit conversions
- Battery percentage estimation from voltage
- State derivation from amperage
- Beautiful migration UI with progress states
- One-time process with state tracking

**Code Reference**:
- `DataMigrationManager.kt:17`
- `MigrationScreen.kt:18`
- `MIGRATION.md` (comprehensive guide)

## Technology Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Kotlin | 2.0.21 | Language |
| Kotlin Multiplatform | 2.0.21 | Code sharing |
| Compose Multiplatform | 1.7.1 | Declarative UI |
| SQLDelight | 2.0.2 | Type-safe database |
| Coroutines | 1.9.0 | Async operations |
| Kotlinx Serialization | 1.7.3 | JSON serialization |
| Kotlinx DateTime | 0.6.1 | Date/time utilities |

### Android-Specific

| Technology | Version | Purpose |
|------------|---------|---------|
| Android Gradle Plugin | 8.5.2 | Build tool |
| Compose BOM | 2024.09.03 | UI framework |
| Material 3 | Latest | Design system |
| Hilt | 2.52 | Dependency injection |
| WorkManager | 2.9.1 | Background tasks |
| Room | 2.6.1 | Legacy database (migration) |
| Koin Android | 4.0.0 | DI bridge |

### Build System

| Tool | Version | Purpose |
|------|---------|---------|
| Gradle | 8.7 | Build automation |
| JDK | 21 | Java runtime |

## Database Schema

### BatteryReading Table

```sql
CREATE TABLE IF NOT EXISTS BatteryReading (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp INTEGER NOT NULL,                    -- Epoch milliseconds
    voltageMillivolts INTEGER NOT NULL,           -- mV
    amperageMicroamps INTEGER NOT NULL,           -- μA
    temperatureCelsius REAL,                      -- °C (nullable)
    batteryPercentage INTEGER NOT NULL,           -- 0-100
    batteryState TEXT NOT NULL,                   -- Charging/Discharging/etc.
    isCharging INTEGER NOT NULL DEFAULT 0         -- Boolean (0/1)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_timestamp ON BatteryReading(timestamp);
CREATE INDEX IF NOT EXISTS idx_charging_timestamp ON BatteryReading(isCharging, timestamp);
CREATE INDEX IF NOT EXISTS idx_state_timestamp ON BatteryReading(batteryState, timestamp);
```

### Key Queries

**Get by time range**: `getBatteryReadingsByTimeRange(startTime, endTime)`
**Get recent**: `getRecentBatteryReadings(limit)`
**Statistics**: `calculateAverages(startTime, endTime)`
**Peak power**: `getPeakPowerDrawReading(startTime, endTime)`
**Temperature stats**: `getTemperatureStats(startTime, endTime)`

## Development Guidelines

### Adding New Features

1. **Domain First**: Start with models, repository interface, use case
2. **Data Layer**: Implement in repository, add database queries if needed
3. **Platform**: Add platform-specific code with expect/actual
4. **Presentation**: Create ViewModel with StateFlow
5. **UI**: Build Compose screen/component
6. **DI**: Register in appropriate modules (Koin/Hilt)

### Code Style

- **Kotlin conventions**: Follow official Kotlin style guide
- **Immutability**: Prefer `val` over `var`, immutable data classes
- **Null safety**: Use nullable types explicitly, avoid `!!`
- **Coroutines**: Use structured concurrency, avoid `GlobalScope`
- **Flow**: Prefer Flow over LiveData for reactive streams

### Testing Strategy

**Unit Tests** (Domain Layer):
- Use cases logic
- Data transformations
- Statistics calculations

**Integration Tests** (Data Layer):
- Repository operations
- Database queries
- Data migrations

**UI Tests** (Android):
- Screen navigation
- User interactions
- State updates

## Common Tasks

### Add a new battery metric

1. Add field to `BatteryReading` data class
2. Update SQLDelight schema (`BatteryReading.sq`)
3. Modify `AndroidBatteryMonitorService` to capture metric
4. Update repository to handle new field
5. Add UI component to display metric

### Add platform support (iOS/Web)

1. Create platform-specific source set in `shared/build.gradle.kts`
2. Implement `DatabaseDriverFactory` for platform
3. Implement `BatteryMonitorService` for platform
4. Create `PlatformModule` for DI
5. Build platform-specific UI module

### Modify database schema

1. Update `BatteryReading.sq` schema
2. Increment database version in `DatabaseDriverFactory`
3. Write migration logic if needed
4. Update affected queries
5. Update repository implementation
6. Test migration thoroughly

## Troubleshooting

### Build Issues

**Problem**: `SDK location not found`
**Solution**: Create `local.properties` with `sdk.dir=/path/to/Android/Sdk`

**Problem**: `Could not initialize class org.codehaus.groovy.vmplugin.v7.Java7`
**Solution**: Upgrade Gradle to 8.7+ for Java 21 compatibility

**Problem**: Plugin version conflicts
**Solution**: Use version catalog (`libs.versions.toml`), ensure AGP ≥ 8.5 for Gradle 8.7

### Runtime Issues

**Problem**: Database not updating
**Solution**: Check Flow collection in UI, verify coroutine scope

**Problem**: WorkManager not running
**Solution**: Check battery optimization settings, verify constraints

**Problem**: Permissions denied (API 31+)
**Solution**: Request runtime permissions, check AndroidManifest.xml

### Migration Issues

**Problem**: Migration fails with permission error
**Solution**: Ensure old database file is readable

**Problem**: Migration runs multiple times
**Solution**: Check SharedPreferences state, reset if needed

## Performance Considerations

### Database

- Uses compound indexes for common queries
- Batch operations via transactions
- Lazy loading with Flow
- Automatic pagination for large datasets

### Background Work

- WorkManager respects device constraints
- Efficient BroadcastReceiver (no long-running operations)
- Wake locks used minimally
- Notifications batched to reduce overhead

### UI

- Compose recomposition optimized with `remember`
- Flow collection with `collectAsState()`
- Immutable state objects
- No unnecessary recompositions

## Future Roadmap

**Phase 5**: Web Application
- Compose HTML or Kotlin/JS + React
- Battery Status API integration
- PWA with offline support

**Phase 6**: Testing & Quality
- Comprehensive test coverage
- CI/CD pipeline setup
- Performance benchmarks

**Phase 7**: iOS Support
- iOS source set in shared module
- Swift UI or Compose Multiplatform
- HealthKit integration?

**Beyond**:
- Machine learning for better predictions
- Cloud sync and multi-device support
- Battery health scoring based on device model
- Comparison with other devices

## Resources

**Documentation**:
- [Kotlin Multiplatform](https://kotlinlang.org/docs/multiplatform.html)
- [Compose Multiplatform](https://www.jetbrains.com/lp/compose-multiplatform/)
- [SQLDelight](https://cashapp.github.io/sqldelight/2.0.2/)
- [Material 3](https://m3.material.io/)

**Internal Docs**:
- `MIGRATION.md` - Data migration guide
- `README.md` - Project overview

**Code References**:
- Architecture: `shared/src/commonMain/kotlin/`
- Android UI: `androidApp/src/main/kotlin/eco/emergi/embit/android/ui/`
- Database: `shared/src/commonMain/sqldelight/`

## Contact & Support

**Repository**: https://github.com/your-org/embit
**Issues**: Report bugs via GitHub Issues
**License**: [Specify license]

---

Last updated: 2025-10-22 - Version 2.0.0 KMP Rewrite
