# Git Workflow & Commit Guide

## 🚀 Quick Start

### 1. Create a feature branch

```bash
git checkout -b feature/your-feature-name
```

Recommended prefixes:
- `feature/` – new functionality
- `fix/` – bug fixes
- `refactor/` – code cleanup or restructuring
- `docs/` – documentation updates
- `chore/` – maintenance tasks

### 2. Implement your changes

Once the work is ready, stage the files:

```bash
git add .
```

### 3. Commit using Conventional Commits

```bash
git commit -m "type(scope): subject"
```

## 📋 Commit Message Format

### Structure

```
<type>(<scope>): <subject>

<body> (optional)

<footer> (optional)
```

### Types

| Type      | Description                     | Example                                   |
|-----------|---------------------------------|-------------------------------------------|
| `feat`    | New feature                     | `feat(auth): add Google OAuth login`      |
| `fix`     | Bug fix                         | `fix(ui): resolve navbar alignment issue` |
| `docs`    | Documentation change            | `docs: update installation guide`         |
| `style`   | Formatting only (no logic)      | `style: format with prettier`             |
| `refactor`| Refactor without behaviour change | `refactor(api): simplify user service`  |
| `perf`    | Performance improvement         | `perf(db): optimize query performance`    |
| `test`    | Add or update tests             | `test(auth): add login tests`             |
| `build`   | Build system or dependency updates | `build: upgrade to vite 5`             |
| `ci`      | CI/CD configuration             | `ci: add GitHub Actions workflow`         |
| `chore`   | Maintenance tasks               | `chore: update dependencies`              |
| `revert`  | Explicitly revert a commit      | `revert: revert "feat: add feature X"`   |

### Scope (optional)

Call out the area touched by the change, e.g. `auth`, `ui`, `api`, `config`. Keep scopes lowercase and specific.

### Subject line tips

- Use the imperative mood: “add” not “added” or “adds”
- Keep it under 100 characters
- No trailing period
- Do not capitalise the first letter unless required

### Body (optional)

- Explain **what** and **why**, not **how**
- Wrap lines at 72 characters for readability

### Footer (optional)

- Reference issues: `Closes #123`, `Refs #456`
- Declare breaking changes: `BREAKING CHANGE: description`

## ✅ Good Commit Examples

```bash
feat(auth): add login functionality

Add email/password login with API integration.
Includes form validation and error handling.

Closes #123
```

```bash
fix(ui): resolve button alignment issue

Fix alignment of the submit button on mobile viewports.
```

```bash
docs: update README with installation steps
```

```bash
refactor(api): simplify user service

Extract shared API helpers into a base service class.
Reduces duplicated fetch logic.
```

```bash
perf(dashboard): optimise dashboard rendering

Memoise widgets to avoid unnecessary renders.
Improves initial load time by roughly 40%.
```

## ❌ Poor Commit Examples

```bash
# Too vague
git commit -m "update"
git commit -m "fix bug"
git commit -m "changes"

# Wrong format
git commit -m "Added new feature"
git commit -m "Fix: button issue"
git commit -m "FEAT: add login"

# Way too long
git commit -m "fix(ui): fix the issue where the button was not aligned properly on mobile devices which was causing problems"
```

## 🛠️ Git Hooks

### Pre-commit hook

Runs automatically on `git commit`:
1. Executes lint-staged (ESLint + Prettier) on staged files
2. Rejects the commit if linting or formatting fails
3. Fix the issues, restage, and retry the commit

```bash
# Skip pre-commit (not recommended)
git commit -m "message" --no-verify
```

### Commit-msg hook

Validates the commit message format:
1. Ensures the message matches the Conventional Commits spec
2. Rejects the commit if the pattern is incorrect
3. Amend the message and commit again

## 🔥 Common Tasks

### Format before committing

```bash
pnpm format
```

### Fix linting errors

```bash
pnpm lint:fix
```

### Check code quality

```bash
# Lint the project
pnpm lint

# Verify formatting
pnpm format:check
```

### Amend the latest commit

```bash
# Update the commit message
git commit --amend -m "new message"

# Add forgotten files to the last commit
git add forgotten-file.ts
git commit --amend --no-edit
```

### Revert a commit

```bash
git revert <commit-hash>
```

## 📖 Full Workflow

```bash
# 1. Create a branch
git checkout -b feature/user-profile

# 2. Implement and test changes

# 3. Format the codebase
pnpm format

# 4. Fix linting issues
pnpm lint:fix

# 5. Stage the work
git add .

# 6. Commit (hooks run automatically)
git commit -m "feat(profile): add user profile page"

# 7. Push the branch
git push origin feature/user-profile

# 8. Open a pull request
```

## 🎯 Tips

1. **Commit early and often** – smaller commits are easier to review and revert
2. **Write clear messages** – help your team understand the change quickly
3. **Test before committing** – keep the main branch stable
4. **Review your diff** – run `git diff` before every commit
5. **Do not commit generated files** – skip `dist`, `build`, `node_modules`, etc.

## 🚫 Avoid

- ❌ Committing directly to `main`
- ❌ Skipping hooks with `--no-verify`
- ❌ Committing unformatted code
- ❌ Ignoring lint errors
- ❌ Adding dependencies or build artefacts
- ❌ Force-pushing shared branches without coordination
- ❌ Using ambiguous commit messages

## 🆘 Troubleshooting

### Pre-commit hook failed

```bash
# Fix lint errors
pnpm lint:fix

# Reformat files
pnpm format

# Commit again
git commit -m "your message"
```

### Commit message rejected

```bash
# Use the correct format
git commit -m "feat(scope): description"
```

### Husky hooks aren’t running

```bash
# Reinstall hook scripts
pnpm prepare
```

## 📚 Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Book – Best Practices](https://git-scm.com/book/en/v2)
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)

