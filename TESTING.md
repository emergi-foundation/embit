# Testing Guide for Embit

This document describes the testing setup and how to run tests locally.

## Test Structure

```
embit/
├── androidApp/src/test/           # Android unit tests (JVM with Robolectric)
│   └── kotlin/eco/emergi/embit/android/
│       └── services/
│           ├── AppStateManagerTest.kt           # 6 tests
│           └── LocationBasedGridManagerTest.kt  # 12 tests
│
├── shared/src/commonTest/         # Shared KMP tests
│   └── kotlin/eco/emergi/embit/domain/
│       ├── models/
│       │   └── UserPreferencesTest.kt           # 8 tests
│       └── usecases/
│           ├── AnalyzeBatteryHealthUseCaseTest.kt
│           ├── GenerateChargingRecommendationsUseCaseTest.kt
│           └── PredictBatteryLifeUseCaseTest.kt
│
└── scripts/                       # Test runner scripts
    ├── run-unit-tests.sh         # Fast unit tests (for pre-commit)
    ├── run-all-tests.sh          # Comprehensive test suite (for pre-push)
    └── setup-git-hooks.sh        # Install git hooks
```

## Running Tests Locally

### Quick Unit Tests (Fast)
Run the essential unit tests that cover new features:

```bash
./scripts/run-unit-tests.sh
```

**Runs:**
- ✓ Android app unit tests (18 tests)
- ✓ Shared module tests (8+ tests)

**Time:** ~30-40 seconds

### Comprehensive Test Suite
Run all tests before pushing:

```bash
./scripts/run-all-tests.sh
```

**Runs:**
- ✓ All Android app tests (all variants)
- ✓ All shared module tests
- ✓ Integration tests

**Time:** ~1-2 minutes

### Gradle Commands

**Android App Tests:**
```bash
# Run all Android app tests (dev variant)
./gradlew :androidApp:testDevDebugUnitTest

# Run specific test class
./gradlew :androidApp:testDevDebugUnitTest --tests "*LocationBasedGridManagerTest"
./gradlew :androidApp:testDevDebugUnitTest --tests "*AppStateManagerTest"

# Run tests for all variants
./gradlew :androidApp:test
```

**Shared Module Tests:**
```bash
# Run all shared tests
./gradlew :shared:testDebugUnitTest

# Run specific test
./gradlew :shared:testDebugUnitTest --tests "*UserPreferencesTest"
```

**View Test Reports:**
- Android: `androidApp/build/reports/tests/testDevDebugUnitTest/index.html`
- Shared: `shared/build/reports/tests/testDebugUnitTest/index.html`

## Git Hooks

Git hooks automatically run tests before commits and pushes to catch issues early.

### Setup

Install git hooks (one-time setup):

```bash
./scripts/setup-git-hooks.sh
```

This installs:
- **pre-commit**: Runs unit tests before each commit (~30-40s)
- **pre-push**: Runs all tests before pushing (~1-2 min)

### Pre-Commit Hook

**Triggers:** Before every `git commit`

**What it does:**
1. Runs fast unit tests
2. Blocks commit if tests fail
3. Ensures code quality before committing

**Bypass (not recommended):**
```bash
git commit --no-verify
```

### Pre-Push Hook

**Triggers:** Before every `git push`

**What it does:**
1. Runs comprehensive test suite
2. Blocks push if tests fail
3. Prevents broken code from reaching remote

**Bypass (not recommended):**
```bash
git push --no-verify
```

### Reinstalling Hooks

If hooks are missing or need to be updated:

```bash
./scripts/setup-git-hooks.sh
```

## Test Technologies

### Android Tests (Robolectric)

- **Framework:** Robolectric 4.11.1
- **Purpose:** Run Android unit tests on JVM without device
- **Speed:** Fast (~seconds per test class)
- **SDK:** Android 13 (SDK 33)

**Example:**
```kotlin
@RunWith(RobolectricTestRunner::class)
@Config(sdk = [33])
class LocationBasedGridManagerTest {
    @Test
    fun `test California maps to CAISO_NORTH`() {
        val displayName = locationBasedGridManager.getGridDisplayName("CAISO_NORTH")
        assertEquals("California (CAISO)", displayName)
    }
}
```

### Shared Module Tests (Kotlin Multiplatform)

- **Framework:** kotlin.test
- **Mocking:** MockK
- **Coroutines:** kotlinx-coroutines-test

**Example:**
```kotlin
class UserPreferencesTest {
    @Test
    fun `test VPP participation defaults to ON`() {
        val prefs = UserPreferences(userId = "test-user-123")
        assertTrue(prefs.vppParticipationEnabled)
    }
}
```

## Test Coverage

### Critical Features Tested

✅ **Location-Based Grid Detection**
- All 10 US grid regions mapped correctly
- WattTime balancing authority codes used (CAISO_NORTH, ERCOT, etc.)
- Display names formatted properly
- Unknown codes handled gracefully

✅ **VPP Participation Defaults**
- Defaults to ON everywhere
- Backwards compatible (missing field → true)
- User can toggle off
- Firestore serialization/deserialization

✅ **Automatic Data Sync**
- Triggers once on authentication
- Uses correct parameters (batch: 100, limit: 1000, KEEP_NEWER)
- Handles success/failure gracefully
- Prevents duplicate syncs
- Maintains user state through updates

✅ **Battery Health Analysis**
- Health scoring algorithm
- Charging recommendations
- Battery life predictions

## CI/CD Integration

The test scripts can be integrated into CI/CD pipelines:

```yaml
# Example GitHub Actions
- name: Run tests
  run: ./scripts/run-all-tests.sh

# Example GitLab CI
test:
  script:
    - ./scripts/run-all-tests.sh
```

## Troubleshooting

### Tests Fail Locally

1. **Clean build:**
   ```bash
   ./gradlew clean
   ```

2. **Check test reports:**
   - Open HTML reports in browser
   - Look for specific failures

3. **Run specific test:**
   ```bash
   ./gradlew :androidApp:testDevDebugUnitTest --tests "*FailingTest" --info
   ```

### Hooks Not Running

1. **Verify hooks are installed:**
   ```bash
   ls -la .git/hooks/
   ```

2. **Reinstall hooks:**
   ```bash
   ./scripts/setup-git-hooks.sh
   ```

3. **Check hook permissions:**
   ```bash
   chmod +x .git/hooks/pre-commit
   chmod +x .git/hooks/pre-push
   ```

### Robolectric Issues

If Android tests fail with framework errors:

1. **Check SDK version in test:**
   ```kotlin
   @Config(sdk = [33])  // Must match compileSdk
   ```

2. **Clear Robolectric cache:**
   ```bash
   rm -rf ~/.m2/repository/org/robolectric
   ```

## Best Practices

1. **Run tests before committing:**
   ```bash
   ./scripts/run-unit-tests.sh
   ```

2. **Write tests for new features:**
   - Add test class in appropriate module
   - Follow existing test patterns
   - Use descriptive test names

3. **Keep tests fast:**
   - Mock external dependencies
   - Avoid sleep/delays
   - Use test utilities

4. **Update hooks after changes:**
   - Test scripts are in `scripts/`
   - Hooks are in `.git/hooks/`
   - Run `setup-git-hooks.sh` after changes

## Additional Resources

- [Kotlin Testing Documentation](https://kotlinlang.org/docs/jvm-test-using-junit.html)
- [Robolectric Documentation](http://robolectric.org/)
- [MockK Documentation](https://mockk.io/)
- [Git Hooks Documentation](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
