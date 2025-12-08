# Git Hooks

This directory contains git hooks to help validate code before committing and pushing.

## Installation

Run the installation script once after cloning the repository:

```bash
./.githooks/install-hooks.sh
```

This configures git to use the hooks in this directory.

## Available Hooks

### pre-commit

Runs before each commit to validate:
- Kotlin compilation (shared module)
- No merge conflict markers
- Optional: println() statements in production code (warning only)

**Skip with:** `git commit --no-verify`

### pre-push

Runs before pushing to remote to validate:
- Full Kotlin compilation
- Unit tests (full suite for main/master, shared module only for other branches)
- Warns about untracked files

**Skip with:** `git push --no-verify`

## Customization

You can modify the hooks to fit your workflow:
- Edit `.githooks/pre-commit` or `.githooks/pre-push`
- The hooks are bash scripts that exit with non-zero status to prevent the operation

## Uninstalling

To disable the hooks:

```bash
git config --unset core.hooksPath
```

## Benefits

- **Catch errors early:** Find compilation and test errors before CI/CD
- **Faster feedback:** No need to wait for GitHub Actions to fail
- **Save CI/CD resources:** Reduce failed builds in CI/CD pipeline
- **Enforce code quality:** Maintain consistency across the team

## Troubleshooting

If hooks are causing issues:

1. **Temporarily bypass:** Use `--no-verify` flag
2. **Check hook output:** Hooks print detailed error messages
3. **Update hooks:** Pull latest changes and run install script again
4. **Disable permanently:** Run `git config --unset core.hooksPath`
