#!/bin/bash
#
# Install git hooks from .githooks directory
# Run this script once after cloning the repository
#

set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

echo "🔧 Installing git hooks..."
echo "Repository: $REPO_ROOT"

# Configure git to use .githooks directory
cd "$REPO_ROOT"
git config core.hooksPath .githooks

echo "✅ Git hooks installed successfully!"
echo ""
echo "Enabled hooks:"
echo "  • pre-commit: Validates code before committing"
echo "  • pre-push: Runs tests before pushing"
echo ""
echo "To skip hooks temporarily:"
echo "  • git commit --no-verify"
echo "  • git push --no-verify"
echo ""
echo "To uninstall hooks:"
echo "  • git config --unset core.hooksPath"
