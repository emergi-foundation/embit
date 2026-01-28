#!/bin/bash

# Setup git hooks for Embit project
# Run this script to install pre-commit and pre-push hooks

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}Setting up git hooks for Embit...${NC}"
echo ""

# Get project root
PROJECT_ROOT="$(git rev-parse --show-toplevel)"
HOOKS_DIR="$PROJECT_ROOT/.git/hooks"

# Create hooks directory if it doesn't exist
mkdir -p "$HOOKS_DIR"

# Copy pre-commit hook
echo "📝 Installing pre-commit hook..."
cat > "$HOOKS_DIR/pre-commit" << 'EOF'
#!/bin/bash

# Git pre-commit hook for Embit
# Runs fast unit tests before allowing commit

echo "🔍 Running pre-commit checks..."
echo ""

# Get the project root directory
PROJECT_ROOT="$(git rev-parse --show-toplevel)"

# Run unit tests
if ! "$PROJECT_ROOT/scripts/run-unit-tests.sh"; then
    echo ""
    echo "❌ Pre-commit tests failed!"
    echo ""
    echo "To bypass this check (not recommended):"
    echo "  git commit --no-verify"
    echo ""
    exit 1
fi

echo ""
echo "✅ Pre-commit checks passed!"
exit 0
EOF

# Copy pre-push hook
echo "📝 Installing pre-push hook..."
cat > "$HOOKS_DIR/pre-push" << 'EOF'
#!/bin/bash

# Git pre-push hook for Embit
# Runs comprehensive test suite before allowing push

echo "🚀 Running pre-push checks..."
echo ""

# Get the project root directory
PROJECT_ROOT="$(git rev-parse --show-toplevel)"

# Run all tests
if ! "$PROJECT_ROOT/scripts/run-all-tests.sh"; then
    echo ""
    echo "❌ Pre-push tests failed!"
    echo ""
    echo "To bypass this check (not recommended):"
    echo "  git push --no-verify"
    echo ""
    exit 1
fi

echo ""
echo "✅ Pre-push checks passed! Pushing..."
exit 0
EOF

# Make hooks executable
chmod +x "$HOOKS_DIR/pre-commit"
chmod +x "$HOOKS_DIR/pre-push"

# Make test scripts executable
chmod +x "$PROJECT_ROOT/scripts/run-unit-tests.sh"
chmod +x "$PROJECT_ROOT/scripts/run-all-tests.sh"

echo ""
echo -e "${GREEN}✅ Git hooks installed successfully!${NC}"
echo ""
echo "Installed hooks:"
echo "  • pre-commit  - Runs unit tests before each commit"
echo "  • pre-push    - Runs all tests before pushing"
echo ""
echo "To bypass hooks (not recommended):"
echo "  git commit --no-verify"
echo "  git push --no-verify"
echo ""
