# Embit Testing Scripts

This directory contains scripts for running tests and setting up git hooks.

## Quick Start

### First Time Setup

```bash
# Install git hooks (one-time)
./scripts/setup-git-hooks.sh
```

This will automatically run tests before commits and pushes.

### Running Tests Manually

```bash
# Fast unit tests (~30-40 seconds)
./scripts/run-unit-tests.sh

# Comprehensive test suite (~1-2 minutes)
./scripts/run-all-tests.sh
```

## Scripts Overview

### `run-unit-tests.sh`
- **Purpose:** Run fast unit tests for pre-commit validation
- **Runs:** Android app tests + Shared module tests
- **Time:** ~30-40 seconds
- **Used by:** `pre-commit` hook

### `run-all-tests.sh`
- **Purpose:** Run comprehensive test suite before pushing
- **Runs:** All tests across all modules
- **Time:** ~1-2 minutes
- **Used by:** `pre-push` hook

### `setup-git-hooks.sh`
- **Purpose:** Install/reinstall git hooks
- **Creates:** `.git/hooks/pre-commit` and `.git/hooks/pre-push`
- **When to run:**
  - First time setup
  - After updating hook logic
  - If hooks are accidentally deleted

## Git Hooks

Once installed, git hooks run automatically:

### Pre-Commit Hook
- **Triggers:** Every `git commit`
- **Runs:** `run-unit-tests.sh`
- **Prevents:** Committing code that breaks tests
- **Bypass:** `git commit --no-verify` (not recommended)

### Pre-Push Hook
- **Triggers:** Every `git push`
- **Runs:** `run-all-tests.sh`
- **Prevents:** Pushing code that breaks tests
- **Bypass:** `git push --no-verify` (not recommended)

## What Gets Tested

### Android App Tests (18 tests)
✓ `LocationBasedGridManagerTest` - 12 tests
  - Grid region mapping (California → CAISO_NORTH)
  - WattTime code validation
  - Display name formatting

✓ `AppStateManagerTest` - 6 tests
  - Automatic sync on authentication
  - Single execution per session
  - Error handling

### Shared Module Tests (8+ tests)
✓ `UserPreferencesTest` - 8 tests
  - VPP participation defaults to ON
  - Firestore serialization/deserialization

✓ Other use case tests (may have compilation errors - known issue)

## Troubleshooting

### "Tests failed" on commit/push
1. Run tests manually to see details:
   ```bash
   ./scripts/run-unit-tests.sh
   ```
2. Fix failing tests
3. Commit/push again

### Hooks not running
```bash
# Reinstall hooks
./scripts/setup-git-hooks.sh

# Verify hooks exist
ls -la .git/hooks/pre-commit .git/hooks/pre-push
```

### Bypass hooks (emergency only)
```bash
git commit --no-verify
git push --no-verify
```

## Test Reports

After running tests, view detailed reports:
- **Android:** `androidApp/build/reports/tests/testDevDebugUnitTest/index.html`
- **Shared:** `shared/build/reports/tests/testDebugUnitTest/index.html`

## For More Information

See [TESTING.md](../TESTING.md) in the project root for comprehensive testing documentation.
