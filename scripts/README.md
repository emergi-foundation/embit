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

### `wait-for-build.sh`
- **Purpose:** Monitor GitHub Actions workflow runs and wait for completion
- **Usage:** `scripts/wait-for-build.sh <workflow-file> <tag-or-run-id>`
- **Examples:**
  ```bash
  # Monitor build triggered by tag
  scripts/wait-for-build.sh android-qa.yml qa-2.1.6

  # Monitor specific run by ID
  scripts/wait-for-build.sh android-qa.yml 21372921945

  # Custom timeout (10 minutes)
  TIMEOUT=600 scripts/wait-for-build.sh android-qa.yml qa-2.1.6
  ```
- **Features:**
  - Polls GitHub Actions API for run status
  - Shows real-time progress with spinner
  - Returns proper exit codes based on build outcome
  - Handles timeouts, errors, and cancellations
  - Provides actionable error messages
- **Exit Codes:**
  - `0` - Build succeeded
  - `1` - Build failed
  - `10` - Workflow run not found
  - `11` - API rate limit exceeded
  - `12` - Network error (after retries)
  - `20` - Timeout (build didn't complete in time)
  - `30` - Build cancelled
  - `126` - gh not authenticated
  - `127` - gh not installed
  - `130` - Interrupted by user (Ctrl+C)
- **Used by:** Deployment scripts (`deploy-qa.sh`, etc.)
- **Requirements:** GitHub CLI (`gh`) installed and authenticated

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

### Build monitoring issues
```bash
# If gh is not installed
brew install gh    # macOS
apt install gh     # Ubuntu/Debian

# If gh is not authenticated
gh auth login

# If build monitoring times out
# Check build status manually
gh run watch --repo ScheierVentures/embit

# List recent workflow runs
gh run list --repo ScheierVentures/embit --workflow android-qa.yml

# View specific run by ID
gh run view 21372921945 --repo ScheierVentures/embit
```

### Automatic workflow triggering not working

If GitHub Actions workflows don't trigger automatically when pushing tags:

1. **Verify default branch is set to `master`:**
   ```bash
   gh api repos/ScheierVentures/embit --jq '.default_branch'
   # Should output: master
   ```

2. **Ensure workflow file exists on default branch:**
   - GitHub requires workflow files to be present on the default branch
   - Even if the tag points to a commit with the workflow file, it won't trigger unless the workflow is also on the default branch
   - Merge workflow changes to `master` before testing automatic triggers

3. **Check workflow syntax:**
   ```bash
   # View current workflow configuration
   gh api repos/ScheierVentures/embit/contents/.github/workflows/android-qa.yml \
     --jq '.content' | base64 -d
   ```

4. **Manually trigger workflow as workaround:**
   ```bash
   gh workflow run android-qa.yml \
     --repo ScheierVentures/embit \
     --ref feature/your-branch-name
   ```

## Test Reports

After running tests, view detailed reports:
- **Android:** `androidApp/build/reports/tests/testDevDebugUnitTest/index.html`
- **Shared:** `shared/build/reports/tests/testDebugUnitTest/index.html`

## For More Information

See [TESTING.md](../TESTING.md) in the project root for comprehensive testing documentation.
