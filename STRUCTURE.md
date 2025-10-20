# 📁 React Project Structure 2025

## Overview

This codebase follows a **feature-first architecture** that scales well for medium and large React applications. Instead of grouping files by technical type, we colocate everything by business capability and keep truly shared pieces in dedicated folders.

## Directory Breakdown

### 1. `/src/assets` — Static Assets

```
/assets
  └── react.svg
```

**Use for:** logos, illustrations, fonts, icons, or any other static files that are imported in the application.

---

### 2. `/src/components` — Reusable UI Building Blocks

```
/components
  ├── ActiveLink.tsx
  ├── Navbar.tsx
  ├── ui/
  │   └── button.tsx
  └── base/         # reserved for low-level primitives
```

**Purpose:** global UI components that can be reused across features and pages. Components in this folder stay presentation-focused and receive data via props or slots.

**Guidelines:**
- Keep them stateless or isolate state that is purely presentational.
- Avoid referencing feature-specific hooks or stores.
- Prefer composable primitives (e.g. `Button`, `ActiveLink`) over one-off feature variants.

---

### 3. `/src/features` — Feature Modules

```
/features
  ├── auth/
  │   ├── Login.tsx
  │   └── Register.tsx
  ├── dashboard/
  │   └── Dashboard.tsx
  └── profile/
      └── Profile.tsx
```

Each folder owns everything required for that capability: entry components, hooks, helpers, and types (add them as the feature grows). Features should expose a clean public API via their index file when needed.

**Benefits:**
- Easy to find related code
- Natural encapsulation of business logic
- Straightforward to extract or lazy-load modules
- Multiple teams can work independently

---

### 4. `/src/hooks` — Shared Custom Hooks

```
/hooks
  └── useAuth.ts
```

Place reusable hooks that are consumed by multiple features here. When a hook is only relevant to a specific feature, colocate it inside that feature folder instead.

---

### 5. `/src/layouts` — Layout Wrappers

```
/layouts
  ├── AuthLayout.tsx
  └── MainLayout.tsx
```

Layouts define the high-level chrome of the application (headers, navigation, footers) and render child routes via `Outlet` or `children`. Keep business logic in the underlying pages or features.

---

### 6. `/src/pages` — Route-Level Components

```
/pages
  ├── Auth/
  │   ├── SignInPage.tsx
  │   └── SignUpPage.tsx
  ├── Home.tsx
  └── NotFound.tsx
```

Pages map 1:1 with routes configured in `src/router.tsx`. They orchestrate data fetching and compose features/components, while deferring complex logic to the feature layer.

---

### 7. `/src/router.tsx` — Central Routing

Defines the React Router tree, layout nesting, and fallbacks. Update this file whenever you add or remove pages.

---

### 8. `/src/services` — API & External Integrations

```
/services
  ├── api/
  │   └── apiClient.ts
  ├── apiService.ts
  └── authService.ts
```

Use this layer to consolidate HTTP clients and third-party integrations. Keeping calls in one place simplifies mocking, caching, and error handling.

---

### 9. `/src/stores` — Global State

```
/stores
  ├── index.ts
  ├── useAuthStore.ts
  └── useUserStore.ts
```

Zustand stores that hold cross-cutting state live here. Prefer local component state by default; lift state only when multiple distant parts of the app genuinely need it.

---

### 10. `/src/styles` — Global Styles

```
/styles
  └── index.css
```

Global Tailwind or CSS resets, tokens, and base styles belong here.

---

### 11. `/src/types` — Shared TypeScript Definitions

```
/types
  ├── api.d.ts
  ├── auth.d.ts
  ├── common.ts
  └── user.d.ts
```

Keep shared interfaces and type aliases in this folder. Feature-specific types should stay close to the feature.

---

### 12. `/src/utils` — Pure Utilities

```
/utils
  ├── formatDate.ts
  └── validateEmail.ts
```

Utilities should be stateless, side-effect free, and reusable. If a helper is only used in one feature, consider colocating it there instead.

---

### 13. `/src/config` — Runtime Configuration

```
/config
  ├── env.ts
  └── index.ts
```

Centralize environment variables, runtime constants, and configuration helpers for the application.

---

## Golden Rules

1. **Think Feature-First**
   - Prefer `/features/auth/Login.tsx` over scattering logic in `/components` and `/hooks`.
2. **Colocate Related Code**
   - Keep components, hooks, services, and tests for a feature in the same folder.
3. **Differentiate Shared vs. Feature-Specific**
   - Shared UI stays in `/components`; business-specific UI stays under its feature.
4. **Use Index Files Thoughtfully**
   - Re-export public modules to keep imports tidy (`import { Login } from "@/features/auth"`).
5. **Leverage Absolute Imports**
   - Aliases like `@/components/Button` prevent brittle relative paths.

---

## Where Does Code Belong?

| Artifact Type           | Folder             | Example                           |
| ----------------------- | ------------------ | --------------------------------- |
| Reusable UI component   | `/components`      | `Navbar`, `Button`                |
| Feature component       | `/features/auth`  | `Login`, `Register`               |
| Page (route)            | `/pages`           | `Home`, `Auth/SignInPage`         |
| Shared hook             | `/hooks`           | `useAuth`                         |
| Feature-specific hook   | `/features/profile`| `useProfile` (when added)        |
| API call                | `/services`        | `authService.login()`             |
| Global type             | `/types`           | `User`, `ApiResponse`             |
| Utility function        | `/utils`           | `formatDate`, `validateEmail`     |

---

## Scaling Tips

As the application grows, consider adding:

```
/src
  ├── middleware/   # Redux or Zustand middlewares, interceptors
  ├── context/      # React Context providers
  ├── guards/       # Route guards, permission checks
  ├── validators/   # Zod/Yup schemas, form validators
  └── tests/        # Feature-aligned test suites
```

Keep everything close to where it is used, promote shared pieces only when they have multiple consumers, and the structure will remain approachable over time.
