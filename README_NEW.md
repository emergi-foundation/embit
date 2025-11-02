# Embit - Battery Monitoring & Energy Tracking

> **Version 2.0** - Kotlin Multiplatform Edition

Embit is a modern, cross-platform battery monitoring application that helps environmentally conscious smartphone users understand their device's energy consumption and charging patterns.

<file_attachment>/home/ess/Documents/apps/embit/IMPLEMENTATION_SUMMARY.md</file_attachment>

## 🌟 Features

### Current Features (v2.0)
- ✅ **Real-time Battery Monitoring** - Live voltage, current, power, and temperature tracking
- ✅ **Historical Analytics** - View battery usage over time (hourly, daily, weekly, monthly)
- ✅ **Battery Health Scoring** - AI-powered health assessment with personalized recommendations
- ✅ **Trend Analysis** - Identify patterns in power consumption and charging behavior
- ✅ **Data Management** - Export, import, and cleanup battery data
- ✅ **Material 3 Design** - Beautiful, modern UI with dark theme support
- ✅ **Cross-Platform Ready** - Shared business logic for Android, iOS, and Web

### Coming Soon
- ⏳ Background monitoring with WorkManager
- ⏳ Smart notifications for battery events
- ⏳ Advanced power consumption breakdown
- ⏳ Charging optimization suggestions
- ⏳ Web application
- ⏳ iOS app

## 🏗️ Architecture

Embit v2.0 is built using **Clean Architecture** principles with **Kotlin Multiplatform**:

```
┌─────────────────────────────────────┐
│      Presentation Layer             │
│  (ViewModels + UI State)            │
│  - Shared across platforms          │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│       Domain Layer                  │
│  (Business Logic)                   │
│  - Pure Kotlin                      │
│  - Platform-agnostic                │
│  - Models, Use Cases, Interfaces    │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│        Data Layer                   │
│  (Repositories + Data Sources)      │
│  - SQLDelight Database              │
│  - Platform-specific implementations│
└─────────────────────────────────────┘
```

### Technology Stack

- **Language**: Kotlin 2.0.21
- **UI**: Jetpack Compose + Material 3
- **Database**: SQLDelight 2.0.2 (multiplatform)
- **Async**: Kotlin Coroutines + Flow
- **DI**: Koin (shared) + Hilt (Android)
- **Serialization**: Kotlinx Serialization
- **Networking**: Ktor 3.0.0 (ready for future API integration)

## 🚀 Getting Started

### Prerequisites

- **Android Studio** Hedgehog (2023.1.1) or newer
- **JDK** 17 or newer
- **Android SDK** 35
- **Gradle** 8.5+ (included via wrapper)

### Build & Run

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd embit
   ```

2. **Open in Android Studio**
   - File → Open → Select `embit` directory
   - Wait for Gradle sync to complete

3. **Run the app**
   - Select `androidApp` configuration
   - Click Run (or press Shift+F10)
   - App will install on connected device/emulator

### Build Commands

```bash
# Build shared module
./gradlew :shared:build

# Build Android app
./gradlew :androidApp:assembleDebug

# Install on device
./gradlew :androidApp:installDebug

# Run tests
./gradlew test

# Clean build
./gradlew clean
```

## 📱 Usage

### Real-Time Monitoring
1. Open the app (Monitor tab is default)
2. View current battery metrics in real-time
3. Metrics update automatically when battery state changes
4. Pull to refresh for latest statistics

### Historical Analysis
1. Navigate to History tab
2. Select time period (Hour/Day/Week/Month)
3. View aggregated statistics and trends
4. Analyze power consumption patterns

### Battery Health
1. Navigate to Health tab
2. View overall health score (0-100)
3. Read personalized recommendations
4. Track health metrics over time

### Data Management
1. Navigate to Settings tab
2. Export data as JSON for backup
3. Cleanup old data (keeps last 90 days)
4. Clear all data if needed (with confirmation)

## 🛠️ Development

### Project Structure

```
embit/
├── shared/                    # Kotlin Multiplatform shared code
│   ├── domain/               # Business logic (pure Kotlin)
│   ├── data/                 # Data layer implementations
│   └── presentation/         # Shared ViewModels
├── androidApp/               # Android-specific code
│   └── ui/                   # Compose UI screens
├── gradle/                   # Build configuration
│   └── libs.versions.toml    # Dependency versions
└── [future: webApp, iosApp]
```

### Adding a New Feature

1. **Define domain model** in `shared/domain/models/`
2. **Create use case** in `shared/domain/usecases/`
3. **Add repository method** in `IBatteryRepository`
4. **Implement in repository** in `data/repositories/`
5. **Create ViewModel** in `shared/presentation/`
6. **Build UI screen** in `androidApp/ui/screens/`
7. **Add to navigation** in `Navigation.kt`

### Running Tests

```bash
# Run all tests
./gradlew test

# Run Android instrumented tests
./gradlew connectedAndroidTest

# Run specific test
./gradlew :shared:test --tests "BatteryReadingTest"
```

### Code Style

- Follow [Kotlin Coding Conventions](https://kotlinlang.org/docs/coding-conventions.html)
- Use KDoc comments for public APIs
- Keep functions small and focused
- Prefer immutable data classes
- Use sealed classes for state

## 📊 Database Schema

Embit uses SQLDelight for type-safe SQL queries:

```sql
CREATE TABLE BatteryReading (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp INTEGER NOT NULL,
    voltageMillivolts INTEGER NOT NULL,
    amperageMicroamps INTEGER NOT NULL,
    temperatureCelsius REAL,
    batteryPercentage INTEGER NOT NULL,
    batteryState TEXT NOT NULL,
    chargingType TEXT
);

CREATE INDEX idx_battery_reading_timestamp ON BatteryReading(timestamp);
CREATE INDEX idx_battery_reading_state ON BatteryReading(batteryState);
```

## 🔧 Configuration

### Gradle Properties

Edit `gradle.properties`:

```properties
# Memory allocation
org.gradle.jvmargs=-Xmx2048m

# Enable AndroidX
android.useAndroidX=true

# Kotlin code style
kotlin.code.style=official
```

### Build Variants

- **Debug**: Development build with logging enabled
- **Release**: Production build with minification and obfuscation

## 🌐 Cross-Platform Support

### Android (Current)
- ✅ Fully implemented
- ✅ Material 3 UI
- ✅ Native battery monitoring

### Web (Planned)
- ⏳ Battery Status API integration
- ⏳ Progressive Web App
- ⏳ Responsive design

### iOS (Planned)
- ⏳ UIKit/SwiftUI integration
- ⏳ iOS battery APIs
- ⏳ App Store deployment

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Add tests** for new functionality
5. **Run code formatting** (`./gradlew ktlintFormat`)
6. **Commit changes** (`git commit -m 'Add amazing feature'`)
7. **Push to branch** (`git push origin feature/amazing-feature`)
8. **Open a Pull Request**

### Development Guidelines

- Write clean, documented code
- Add unit tests for business logic
- Follow Material 3 design guidelines for UI
- Keep shared code platform-agnostic
- Update documentation for new features

## 📝 Documentation

- **[CLAUDE.md](CLAUDE.md)** - Guide for Claude Code AI assistant
- **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** - Detailed implementation status
- **[KMP_REFACTOR_PROGRESS.md](KMP_REFACTOR_PROGRESS.md)** - Migration progress from v1.0

## 🐛 Troubleshooting

### Common Issues

**Gradle sync fails**
- Ensure JDK 17 is selected in Android Studio
- Clear Gradle cache: `./gradlew clean`
- Invalidate caches: File → Invalidate Caches → Restart

**App crashes on launch**
- Check Logcat for errors
- Verify Android version (requires API 24+)
- Clear app data and reinstall

**Database errors**
- Delete app data
- Rebuild project: Build → Rebuild Project
- Check SQL schema for syntax errors

### Getting Help

- **Issues**: [GitHub Issues](https://github.com/yourusername/embit/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/embit/discussions)
- **Email**: your-email@example.com

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 👥 Authors

**Original Team** (v1.0):
- Jacob A. Smith - [GitHub](https://github.com/JacobASmith)
- Prabhath Kotha - [GitHub](https://github.com/prabhathkotha)
- Raj Gandecha - [GitHub](https://github.com/rgandecha)

**v2.0 Refactor**:
- Refactored to Kotlin Multiplatform with Clean Architecture
- Modern Compose UI with Material 3
- Cross-platform business logic

## 🙏 Acknowledgments

- **Original Mentor**: Jaime Vega
- **Project Vision**: Eric Scheier
- **Academic Supervisor**: Dr. Jeff Terrell, UNC Chapel Hill
- **Kotlin Community** for excellent KMP resources
- **JetBrains** for Compose Multiplatform
- **Cash App** for SQLDelight

## 📚 Resources

- [Kotlin Multiplatform Docs](https://kotlinlang.org/docs/multiplatform.html)
- [Jetpack Compose Docs](https://developer.android.com/jetpack/compose)
- [SQLDelight Docs](https://cashapp.github.io/sqldelight/)
- [Material 3 Guidelines](https://m3.material.io/)

---

**Made with ❤️ for environmental awareness and clean energy**

*Track your energy, reduce your impact* 🌱
