# Next.js 16 Boilerplate — App Router

A scalable Next.js 16 boilerplate built with best practices for modern React development.
Includes atomic design architecture, data fetching abstraction, global state management, styling system, and testing setup.

---

## ✨ Features

### ⚡ Next.js 16 App Router
- Built using Next.js App Router
- Optimized for SSR, CSR, and hydration
- Clean folder structure for scalability

---

### 🧩 Atomic Design Component Structure

Components are structured using the Atomic Design Pattern:

```
components/
 ├── atom/           # Smallest reusable units (Button, Input, Badge)
 ├── molecules/      # Combinations of atoms
 ├── organizations/  # Complex UI sections
 ├── template/       # Page layout templates
 └── example/        # Example components (cn, SCSS demo)
```

---

### 🌐 Data Fetching with React Query

Data fetching is powered by React Query with custom hooks abstraction.

Features:
- Custom `useQuery` hook
- Custom `useMutation` hook
- Built-in SSR hydration support
- Centralized fetcher

```typescript
// useQuery hook
const { data, isLoading } = useHookQuery<{ success: boolean; data: User }>({
  queryKey: ["/api/user", { email }],
  auth: false,
});

// useMutation hook
const testMutate = useMutation({
  ...useHooksMutation({ mutationKey: ["/api/login", "", ""], method: "POST" }),
});
```

---

### 🔄 Dynamic Fetcher

A reusable fetcher utility compatible with React Query and SSR.

Features:
- Dynamic endpoint
- Query params support
- Error handling
- ISR compatible

```typescript
const data: PokemonListItem = await Fetcher({
  queryKey: [`/api/pokemon`, { limit }, "pokemon"],
  method: "GET",
  auth: false,
});
```

---

### 🧠 Global State with Zustand

Simple and scalable global state management using Zustand.

```typescript
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

---

### 🎨 Styling

This boilerplate uses a **layered styling system**:

#### Tailwind CSS v4 (utility-first)

Configuration is done directly in `app/globals.css` via `@theme` — no `tailwind.config.js` needed in v4.

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-brand-500: #3b82f6;   /* → bg-brand-500, text-brand-500 */
  --color-danger:    #ef4444;   /* → bg-danger, text-danger        */
  --radius-lg:       0.5rem;    /* → rounded-lg                    */
  --breakpoint-xs:   480px;     /* → xs:...                        */
}
```

#### SCSS Modules (component-scoped)

SCSS is available for complex styling logic: mixins, functions, BEM, responsive helpers.

```
styles/
 ├── abstracts/
 │   ├── _variables.scss   # SCSS vars (breakpoints, spacing, z-index)
 │   ├── _mixins.scss      # respond-to, flex, truncate, focus-ring, sr-only
 │   ├── _functions.scss   # spacing(), rem(), z()
 │   └── _index.scss       # @forward entry point
 └── base/
     └── _reset.scss       # Supplemental resets
```

Usage in a component:

```scss
// components/MyComponent.module.scss
@use "@/styles/abstracts" as *;

.card {
  padding: spacing(4);        // → 1rem
  border-radius: $radius-lg;
  transition: box-shadow $transition-normal;

  @include respond-to("md") { // → @media (min-width: 768px)
    display: flex;
  }
}
```

#### `cn` — Utility for merging classes

`utils/cn.ts` combines `clsx` (conditionals) and `tailwind-merge` (conflict resolution). Use it to safely merge Tailwind utilities, SCSS module classes, and dynamic conditions.

```typescript
import { cn } from "@/utils/cn";
import styles from "./MyComponent.module.scss";

// Gabungkan SCSS module class + Tailwind + kondisi
<div className={cn(styles.card, "mt-4", isActive && "ring-2 ring-brand-500")} />

// twMerge resolve konflik — hanya p-2 yang menang
<div className={cn("p-6", override && "p-2")} />
```

> **Panduan:** Gunakan Tailwind untuk layout & spacing umum, SCSS Module untuk komponen dengan logika styling kompleks (animasi, BEM, nesting dalam), dan `cn` untuk menggabungkan keduanya.

---

### 🧪 Testing

Testing environment configured using Jest + React Testing Library.

```
tests/
 ├── unit/         # Unit tests
 └── integration/  # Integration tests
```

---

### 🔁 SSR Hydration Support

Server-side fetching hydrated into the client using React Query. See `app/ex-hydrate/`.

---

### 🧩 Additional Hooks

```typescript
// useDebounce — untuk search input / API throttling
const debounceValue = useDebounce(value, 500);
```

---

### 🌐 Dynamic Local API Proxy

```
app/api/[...keys]/route.ts
```

Routes dynamically like `/api/users`, `/api/products`.

---

### 📦 Tech Stack

| Library               | Purpose                                        |
| --------------------- | ---------------------------------------------- |
| Next.js 16            | Framework (App Router, SSR, ISR)               |
| React 19              | UI library                                     |
| TypeScript            | Static typing                                  |
| Tailwind CSS v4       | Utility-first styling                          |
| Sass (SCSS)           | Component-scoped styles, mixins, BEM           |
| clsx + tailwind-merge | `cn` utility — conditional & conflict-free CSS |
| React Query v5        | Server state management                        |
| Zustand               | Global client state                            |
| Jest                  | Unit & integration testing                     |
| React Testing Library | Component testing                              |
| js-cookie             | Cookie management                              |

---

### 📂 Project Structure

```
.
├── app/
│   ├── api/
│   │   └── [...keys]/
│   │       └── route.ts          # Dynamic local API proxy
│   ├── ex-hydrate/               # SSR hydration with React Query
│   │   ├── page.tsx
│   │   └── user-client.tsx
│   ├── ex-interceptor/           # Route interceptor example
│   ├── ex-modal/                 # Modal example
│   ├── ex-slot/                  # Parallel slot example
│   ├── globals.css               # Tailwind v4 @theme config + base styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Root page
│
├── components/
│   ├── atom/                     # Smallest reusable units
│   ├── molecules/                # Combinations of atoms
│   ├── organizations/            # Complex UI sections
│   ├── template/                 # Page layout templates
│   └── example/
│       ├── CnExample.tsx         # Demo: cn utility (conditional, merge)
│       ├── ScssExample.tsx       # Demo: SCSS Module + cn
│       └── ScssExample.module.scss
│
├── styles/                       # Shared SCSS abstracts
│   ├── abstracts/
│   │   ├── _variables.scss       # Breakpoints, spacing, z-index, radius
│   │   ├── _mixins.scss          # respond-to, flex, truncate, focus-ring
│   │   ├── _functions.scss       # spacing(), rem(), z()
│   │   └── _index.scss           # @forward entry point
│   └── base/
│       └── _reset.scss           # Supplemental resets
│
├── hook/
│   └── useDebounce.ts
│
├── lib/
│   └── fetcher.ts                # Dynamic fetcher (React Query compatible)
│
├── store/
│   ├── index.ts
│   └── useExample.ts
│
├── tests/
│   ├── integration/
│   └── unit/
│       └── components/
│           ├── Button.test.tsx
│           └── Input.test.tsx
│
├── types/
│   ├── Fetcher.type.d.ts
│   └── QueryParam.d.ts
│
├── utils/
│   ├── cn.ts                     # clsx + tailwind-merge utility
│   └── header.ts
│
├── public/
├── .env
├── eslint.config.mjs
├── jest.config.ts
├── jest.unit.config.ts
├── jest.integration.config.ts
├── jest.setup.ts
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── package-lock.json
```

---

## 🚀 Getting Started

### Install dependencies

```shell
npm install
```

### Run development server

```shell
npm run server:dev
```

---

## 🧪 Testing

```shell
# Run all tests
npm run test:all

# Unit tests only
npm run test:unit

# Integration tests only
npm run test:integration
```

---

## 🎯 Goals

This boilerplate aims to provide:

- Scalable architecture (Atomic Design)
- Standardized data fetching (React Query + custom hooks)
- Layered styling system (Tailwind v4 + SCSS + `cn`)
- Reusable components
- Built-in testing setup

Suitable for production-ready projects and frontend architecture references.

---

### 📄 License

MIT License
