# Contributing Guide

## Commit Rules

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification to keep history tidy and readable.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Allowed Types

- **feat**: add or extend product functionality
- **fix**: patch a bug
- **docs**: documentation updates
- **style**: formatting or lint-only changes (no production code impact)
- **refactor**: code changes that neither fix a bug nor add a feature
- **perf**: performance improvements
- **test**: add or update tests
- **build**: build system or dependency changes
- **ci**: CI configuration updates and scripts
- **chore**: maintenance work that does not touch source/tests
- **revert**: revert a previous commit

### Examples

```bash
feat(auth): add login functionality
fix(ui): resolve button alignment issue
docs: update installation guide
style: format code with prettier
refactor(api): simplify user service
```

## Code Quality Tooling

### Husky

Husky manages the Git hooks that enforce quality gates:

- **pre-commit** runs lint-staged to lint/format staged files
- **commit-msg** validates commit messages with commitlint

### lint-staged

Automatically lints and formats staged files:

- ESLint checks JavaScript/TypeScript and applies autofixes
- Prettier enforces formatting for supported file types

### Prettier

Use Prettier to keep formatting consistent:

```bash
# Format the entire codebase
pnpm format

# Check formatting without writing changes
pnpm format:check
```

### ESLint

ESLint enforces coding standards and catches common issues:

```bash
# Run the linter
pnpm lint

# Apply automatic fixes where possible
pnpm lint:fix
```

## Development Workflow

1. **Create a topic branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Build your change**
   - Implement the feature or bug fix
   - Test manually where it makes sense
   - Run `pnpm lint:fix` to address lint issues
   - Run `pnpm format` to keep formatting consistent

3. **Commit your work**
   ```bash
   git add .
   git commit -m "feat: add your feature"
   ```

   Husky will:
   - Run lint-staged (ESLint + Prettier) in the pre-commit hook
   - Validate the commit message in the commit-msg hook

4. **Push and open a pull request**
   ```bash
   git push origin feature/your-feature-name
   ```

## Best Practices

- ✅ Write descriptive commit messages and scopes
- ✅ Keep commits focused and reasonably small
- ✅ Format and lint before committing
- ✅ Run relevant tests when applicable
- ❌ Do not skip Git hooks (`--no-verify`)
- ❌ Do not commit generated files or dependencies
- ❌ Avoid mixing unrelated changes in the same commit

