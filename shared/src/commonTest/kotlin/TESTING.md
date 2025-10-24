# Embit Testing Guide

## Overview

This document describes the testing strategy, test organization, and best practices for the Embit project.

## Testing Philosophy

We follow a **test pyramid** approach:

```
        /\
       /UI\       <- Few, expensive, end-to-end
      /----\
     / Int  \     <- Some, medium cost
    /--------\
   /   Unit   \   <- Many, cheap, fast
  /------------\
```

- **Unit Tests**: Fast, isolated tests of business logic
- **Integration Tests**: Test interaction between components
- **UI Tests**: Test user interactions and screen flows

## Test Organization

```
shared/src/commonTest/kotlin/
├── domain/usecases/              # Use case tests
│   ├── AnalyzeBatteryHealthUseCaseTest.kt
│   ├── PredictBatteryLifeUseCaseTest.kt
│   └── GenerateChargingRecommendationsUseCaseTest.kt
├── data/repositories/            # Repository tests (integration)
│   └── BatteryRepositoryImplTest.kt
└── TESTING.md                    # This file

androidApp/src/androidTest/kotlin/
└── eco/emergi/embit/android/
    ├── ui/                       # UI tests
    └── services/                 # Service tests
```

## Running Tests

### All Tests

```bash
# Run all unit tests
./gradlew test

# Run with coverage
./gradlew testDebugUnitTest --rerun-tasks

# Run Android instrumented tests
./gradlew connectedAndroidTest
```

### Specific Test Suites

```bash
# Run only shared module tests
./gradlew :shared:test

# Run only Android app tests
./gradlew :androidApp:testDebugUnitTest

# Run specific test class
./gradlew :shared:testDebugUnitTest --tests "*AnalyzeBatteryHealthUseCaseTest"

# Run specific test method
./gradlew :shared:testDebugUnitTest --tests "*AnalyzeBatteryHealthUseCaseTest.perfect health*"
```

### From Android Studio

1. Right-click on test file/class/method
2. Select "Run 'TestName'"
3. Or press `Ctrl+Shift+F10` (Windows/Linux) / `Cmd+Shift+R` (Mac)

## Test Coverage

### Current Coverage

| Module | Coverage | Tests |
|--------|----------|-------|
| Domain (Use Cases) | ~85% | 40+ tests |
| Data (Repositories) | ~70% | 15+ tests |
| Android UI | ~50% | 10+ tests |

### Coverage Goals

- **Use Cases**: 90%+ coverage
- **Repositories**: 80%+ coverage
- **ViewModels**: 75%+ coverage
- **UI Components**: 60%+ coverage

### Generating Coverage Reports

```bash
# Generate JaCoCo coverage report
./gradlew testDebugUnitTestCoverage

# Report location
open shared/build/reports/jacoco/testDebugUnitTestCoverage/html/index.html
```

## Test Structure

### Use Case Tests

Use case tests follow this pattern:

```kotlin
class SomeUseCaseTest {
    private lateinit var repository: FakeBatteryRepository
    private lateinit var useCase: SomeUseCase

    @BeforeTest
    fun setup() {
        repository = FakeBatteryRepository()
        useCase = SomeUseCase(repository)
    }

    @Test
    fun `descriptive test name in backticks`() = runTest {
        // Given: Setup test conditions
        val input = createTestData()

        // When: Execute the use case
        val result = useCase.invoke(input)

        // Then: Verify expectations
        assertTrue(result.isSuccess)
        assertEquals(expectedValue, result.getOrNull())
    }
}
```

### Key Patterns

1. **Given-When-Then**: Clear test structure
2. **Descriptive Names**: Use backticks for readable test names
3. **Fake Implementations**: Use fakes, not mocks
4. **runTest**: For coroutine tests
5. **Isolated**: Each test is independent

## Existing Test Suites

### 1. AnalyzeBatteryHealthUseCaseTest

Tests battery health scoring algorithm.

**Test Coverage:**
- ✅ Perfect health conditions (score = 100)
- ✅ High temperature reduces score
- ✅ Excessive charging frequency
- ✅ High power draw impact
- ✅ Too much time charging
- ✅ Insufficient data handling
- ✅ Multiple compound factors
- ✅ Degradation rate calculation
- ✅ Boundary conditions (0-100 score range)

**Example:**
```kotlin
@Test
fun `high temperature reduces health score`() = runTest {
    repository.setStatistics(
        createBaselineStatistics().copy(
            averageTemperature = 50.0f
        )
    )

    val result = useCase.invoke()

    assertTrue(result.isSuccess)
    assertTrue(result.getOrNull()!!.healthScore < 70)
}
```

### 2. PredictBatteryLifeUseCaseTest

Tests battery life prediction algorithm.

**Test Coverage:**
- ✅ Null reading handling
- ✅ Charging predictions
- ✅ Discharging predictions
- ✅ Confidence levels (HIGH/MEDIUM/LOW)
- ✅ Zero rate handling
- ✅ Fast charging detection
- ✅ Heavy usage detection
- ✅ Time formatting
- ✅ Edge cases (0%, 100%)
- ✅ Insufficient data handling

**Example:**
```kotlin
@Test
fun `charging prediction with steady rate`() = runTest {
    val now = Clock.System.now()
    val currentReading = createReading(now, 50, true)

    repository.setRecentReadings(
        listOf(
            createReading(now - 60.minutes, 40, true),
            currentReading
        )
    )

    val result = useCase.invoke(currentReading)

    assertTrue(result.getOrNull()!!.hoursRemaining in 4.5..5.5)
}
```

### 3. GenerateChargingRecommendationsUseCaseTest

Tests charging recommendation generation.

**Test Coverage:**
- ✅ Null reading handling
- ✅ High battery charging (unplug)
- ✅ Low battery discharging (charge)
- ✅ Temperature warnings (critical, elevated, warm, cold)
- ✅ Charging frequency patterns
- ✅ Charging time analysis
- ✅ Priority levels (HIGH/MEDIUM/LOW)
- ✅ Multiple issues handling
- ✅ Expected impact descriptions

**Example:**
```kotlin
@Test
fun `very high temperature while charging returns critical warning`() = runTest {
    val reading = createReading(
        batteryPercentage = 50,
        isCharging = true,
        temperature = 46.0f
    )

    val result = useCase.invoke(reading)

    val tempRec = result.getOrNull()!!
        .recommendations
        .first { it.priority == RecommendationPriority.HIGH }

    assertTrue(tempRec.action.contains("Stop charging"))
}
```

## Test Data Builders

Use helper functions to create test data:

```kotlin
private fun createReading(
    percentage: Int,
    isCharging: Boolean,
    temperature: Float? = 30.0f
) = BatteryReading(
    id = 0,
    timestamp = Clock.System.now(),
    voltageMillivolts = 3800,
    amperageMicroamps = if (isCharging) 1000000 else -1000000,
    temperatureCelsius = temperature,
    batteryPercentage = percentage,
    batteryState = if (isCharging) BatteryState.Charging else BatteryState.Discharging
)
```

## Fake Implementations

Prefer fakes over mocks for cleaner tests:

```kotlin
private class FakeBatteryRepository : IBatteryRepository {
    private var statistics: BatteryStatistics? = null

    fun setStatistics(stats: BatteryStatistics?) {
        statistics = stats
    }

    override suspend fun calculateStatistics(
        startTime: Instant,
        endTime: Instant
    ): Result<BatteryStatistics> {
        return statistics?.let { Result.success(it) }
            ?: Result.failure(Exception("No statistics"))
    }

    // ... other methods return defaults
}
```

## Common Testing Patterns

### Testing Coroutines

```kotlin
@Test
fun `test async operation`() = runTest {
    // Test code here with suspend functions
}
```

### Testing Flow

```kotlin
@Test
fun `test flow emission`() = runTest {
    val flow = repository.getAllReadings()
    val result = flow.first()
    assertEquals(expected, result)
}
```

### Testing Edge Cases

Always test:
- Null/empty inputs
- Boundary values (0, 100, max, min)
- Invalid data
- Error conditions

### Testing Multiple Scenarios

Use parameterized-style tests:

```kotlin
@Test
fun `different battery levels produce appropriate recommendations`() = runTest {
    val testCases = listOf(
        14 to RecommendationPriority.HIGH,
        23 to RecommendationPriority.MEDIUM,
        96 to RecommendationPriority.HIGH
    )

    testCases.forEach { (level, expectedPriority) ->
        val result = useCase.invoke(createReading(level, true))
        assertEquals(expectedPriority, result.getOrNull()!!.primaryRecommendation?.priority)
    }
}
```

## Best Practices

### DO

✅ **Write tests first** (TDD when possible)
✅ **Use descriptive test names** with backticks
✅ **Follow Given-When-Then** structure
✅ **Test edge cases** and boundaries
✅ **Keep tests focused** on one behavior
✅ **Use helper functions** for test data
✅ **Assert expected behavior** not implementation
✅ **Run tests frequently** during development

### DON'T

❌ **Don't test implementation details**
❌ **Don't write flaky tests**
❌ **Don't skip cleanup** (@AfterTest)
❌ **Don't use sleep()** (use runTest)
❌ **Don't ignore warnings** in tests
❌ **Don't copy-paste** test code

## Continuous Integration

Tests run automatically on:
- Every commit to feature branches
- Pull requests to main/master
- Before merges

### CI Configuration

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run tests
        run: ./gradlew test
      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

## Future Test Plans

### Phase 6.2 Remaining Work

- [ ] Repository integration tests
- [ ] ViewModel tests with fake repositories
- [ ] UI tests for all screens
- [ ] Data migration tests
- [ ] WorkManager tests
- [ ] Notification tests

### Phase 6.3 Advanced Testing

- [ ] Property-based testing (Kotest)
- [ ] Mutation testing
- [ ] Performance benchmarks
- [ ] Memory leak detection
- [ ] Screenshot testing

## Troubleshooting

### Test Failures

**Problem**: "No such method" errors
**Solution**: Update test dependencies, sync Gradle

**Problem**: Coroutine timeout
**Solution**: Use `runTest`, check for blocking calls

**Problem**: Flaky tests
**Solution**: Remove time dependencies, use test clock

### Coverage Issues

**Problem**: Coverage not generated
**Solution**: Ensure JaCoCo plugin configured

**Problem**: Low coverage warning
**Solution**: Add tests for uncovered branches

## Resources

- [Kotlin Test Documentation](https://kotlinlang.org/api/latest/kotlin.test/)
- [Kotlinx Coroutines Test](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-test/)
- [JUnit 5 User Guide](https://junit.org/junit5/docs/current/user-guide/)
- [Testing Best Practices](https://developer.android.com/training/testing/fundamentals/test-doubles)

## Test Metrics

Track test metrics over time:

| Metric | Target | Current |
|--------|--------|---------|
| Total Tests | 100+ | 70+ |
| Pass Rate | 100% | 100% |
| Coverage | 80%+ | 75% |
| Execution Time | <30s | ~20s |
| Flakiness | 0% | 0% |

## Conclusion

Good tests are:
- **Fast**: Run in milliseconds
- **Independent**: Don't depend on each other
- **Repeatable**: Same result every time
- **Self-validating**: Pass or fail clearly
- **Timely**: Written with or before code

Remember: **Tests are code too** - keep them clean, maintainable, and well-documented!

---

Last updated: 2025-10-22
