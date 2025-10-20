# Setup Summary – Code Quality Tooling

## ✅ Installed

### 📦 Dependencies

The following packages are already part of the toolchain:

```json
{
  "devDependencies": {
    "@commitlint/cli": "^20.1.0",
    "@commitlint/config-conventional": "^20.0.0",
    "cross-env": "^10.1.0",
    "husky": "^9.1.7",
    "lint-staged": "^16.2.4",
    "prettier": "^3.6.2"
  }
}
```

### 📝 Scripts

`package.json` exposes the following helper scripts:

```json
{
  "scripts": {
    "lint:fix": "eslint . --fix",
    "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,md}\"",
    "format:check": "prettier --check \"src/**/*.{js,jsx,ts,tsx,json,css,md}\"",
    "prepare": "husky"
  }
}
```

### ⚙️ Configuration Files

1. **`.prettierrc`** – Prettier formatting rules (100 character width, single quotes, LF line endings, etc.)
2. **`.prettierignore`** – Paths Prettier skips (build outputs, dependencies, `*.md`, and more)
3. **`commitlint.config.js`** – Enforces the Conventional Commits specification
4. **`.lintstagedrc`** – Runs ESLint + Prettier on staged files before each commit:
   ```json
   {
     "*.{js,jsx,ts,tsx}": [
       "eslint --fix",
       "prettier --write"
     ],
     "*.{json,css,md}": [
       "prettier --write"
     ]
   }
   ```
5. **`.editorconfig`** – Harmonises basic editor settings (UTF-8, LF endings, 2-space indentation)
6. **`.nvmrc`** – Pins Node.js to version 22 (LTS)
7. **`.gitattributes`** – Normalises line endings to LF and marks binary assets
8. **`.vscode/settings.json`** – Enables format-on-save and ESLint code actions for VS Code

### 🪝 Git Hooks

#### Pre-commit (`.husky/pre-commit`)
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm exec lint-staged
```

Runs ESLint and Prettier on staged files. Commits are blocked if linters fail.

#### Commit-msg (`.husky/commit-msg`)
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm exec commitlint --edit $1
```

Rejects commit messages that do not follow the Conventional Commits format.

### 📚 Documentation

- `CONTRIBUTING.md` – Contribution guidelines
- `GIT_WORKFLOW.md` – Git workflow and commit conventions
- `SETUP_SUMMARY.md` – This overview

## 🚀 Daily Workflow

```bash
# 1. Make code changes

# 2. Format the codebase
pnpm format

# 3. Fix lint warnings/errors
pnpm lint:fix

# 4. Stage files
git add .

# 5. Commit (hooks will run automatically)
git commit -m "feat(scope): add new feature"

# 6. Push to remote
git push
```

### Handy Commands

```bash
# Run ESLint
pnpm lint

# Auto-fix lint errors
pnpm lint:fix

# Format with Prettier
pnpm format

# Check formatting only
pnpm format:check

# Build the project
pnpm build

# Start the dev server
pnpm dev
```

## ✨ Key Capabilities

### 1. Auto-formatting in VS Code
- Formats on save via Prettier
- Runs ESLint quick fixes where possible

### 2. Pre-commit Validation
- Only lint/format staged files
- Prevents committing broken code

### 3. Commit Message Enforcement
- Consistent Conventional Commit history
- Fewer ambiguous commit messages

### 4. Consistent Code Quality
- Prettier keeps style uniform
- ESLint catches bugs and enforces best practices
- EditorConfig ensures cross-editor parity

## 🎯 Benefits

### ✅ Higher Quality Code
- Automatic linting and formatting
- Shared conventions across the team

### ✅ Smooth Collaboration
- Easier reviews
- Predictable commit history

### ✅ Better Developer Experience
- Fast feedback loops
- Less manual polishing

### ✅ CI/CD Ready
- Code is validated before it reaches CI
- Fewer surprises during deploys

## 🔧 Customisation

### Adjust Prettier Rules
Edit `.prettierrc`:
```json
{
  "semi": false,
  "singleQuote": false,
  "printWidth": 120
}
```

### Tweak ESLint Rules
Modify `eslint.config.js`:
```js
export default [
  // existing config
  {
    rules: {
      // overrides go here
    }
  }
];
```

### Extend Commit Types
Update `commitlint.config.js`:
```js
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'fix', 'docs' // add more
    ]]
  }
};
```

### Change lint-staged Commands
Edit `.lintstagedrc`:
```json
{
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write",
    "your-custom-command"
  ]
}
```

## 🆘 Troubleshooting

### Git hooks are not running?
```bash
# Reinstall hooks
pnpm prepare

# Verify hook files exist
ls -la .husky
```

### Prettier conflicts with ESLint?
The shared config is designed to avoid conflicts, but if issues appear, review `eslint.config.js` for overlapping rules.

### Commit rejected by pre-commit?
```bash
# Resolve lint errors
pnpm lint:fix

# Reformat code
pnpm format

# Try committing again
git commit -m "message"
```

### Commit rejected by commit-msg?
```bash
# Follow Conventional Commit format
git commit -m "type(scope): subject"

# Examples
git commit -m "feat(auth): add login"
git commit -m "fix(ui): button alignment"
```

### Need to bypass hooks? (Not recommended)
```bash
# Skip all hooks
git commit --no-verify -m "message"

# Skip a single commit
git commit -m "message" --no-verify
```

## 📖 Further Reading

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Prettier Documentation](https://prettier.io/)
- [ESLint Documentation](https://eslint.org/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [Lint-staged Documentation](https://github.com/okonet/lint-staged)

## 🎉 Wrap-up

The quality gates are in place:

- ✅ Automatic formatting
- ✅ Linting on demand and before commits
- ✅ Git hooks for staged files
- ✅ Commit message validation
- ✅ Editor integration
- ✅ Shared best practices

**Happy coding! 🚀**

