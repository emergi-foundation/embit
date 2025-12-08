# Development Scripts

Utility scripts for local development and testing.

## Quick Start

```bash
# Install git hooks (run once after cloning)
./.githooks/install-hooks.sh

# Run tests
./scripts/test.sh

# Verify changes before pushing
./scripts/verify.sh
```

## Available Scripts

### test.sh

Convenient test runner with multiple options.

**Usage:**
```bash
./scripts/test.sh [option]
```

**Options:**
- `unit` (default) - Run unit tests only
- `all` - Run all tests
- `shared` - Run shared module tests only
- `android` - Run Android app tests only
- `coverage` - Run tests with coverage report
- `watch` - Run tests in watch mode (re-run on changes)
- `clean` - Clean build and run tests

**Examples:**
```bash
./scripts/test.sh              # Run unit tests
./scripts/test.sh coverage     # Generate coverage report
./scripts/test.sh watch        # Watch mode
```

### verify.sh

Local verification script that mimics CI/CD checks. Run before pushing to catch issues early.

**Usage:**
```bash
./scripts/verify.sh           # Quick verification
./scripts/verify.sh --full    # Include APK build (slower)
```

**Checks performed:**
1. Kotlin compilation
2. Unit tests
3. Code quality (TODOs, println statements)
4. APK build (with --full flag)

## Git Hooks

See [.githooks/README.md](../.githooks/README.md) for information about git hooks.

## Gradle Commands

If you prefer using Gradle directly:

```bash
# Compile
./gradlew compileDebugKotlin

# Run tests
./gradlew test
./gradlew testDebugUnitTest
./gradlew :shared:testDebugUnitTest

# Build APK
./gradlew :androidApp:assembleDebug
./gradlew :androidApp:assembleStagingDebug
./gradlew :androidApp:assembleProductionRelease

# Coverage
./gradlew jacocoTestReport

# Clean
./gradlew clean
```

## Continuous Integration

The same checks run locally are executed in GitHub Actions:
- Compilation check
- Unit tests
- APK build
- Code quality checks

Running local verification helps catch issues before CI/CD, saving time and resources.
