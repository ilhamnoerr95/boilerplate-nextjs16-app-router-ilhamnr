### Next.js 16 Boilerplate (App Router)

A scalable Next.js 16 boilerplate built with best practices for modern React development.
This project includes atomic design architecture, data fetching abstraction, global state management, and testing setup to accelerate development.

# ✨ Features

⚡ Next.js 16 App Router

- Built using Next.js App Router
- Optimized for SSR, CSR, and hydration
- Clean folder structure for scalability

### 🧩 Atomic Design Component Structure

Components are structured using Atomic Design Pattern:

```code
components/
 ├── atom
 ├── molecules
 ├── organizations
 └── template
```

This structure improves reusability, maintainability, and scalability.

### 🌐 Data Fetching with React Query

Data fetching is powered by React Query, with custom hooks abstraction.

Features:

- Custom useQuery hook
- Custom useMutation hook
- Built-in SSR hydration support
- Centralized fetcher

Example usage:

```typescript
// use hook query
const { data, isLoading } = useHookQuery<{ success: boolean; data: User }>({
  queryKey: ["/api/user", { email }],
  auth: false,
});

// usehook mutation
const testMutate = useMutation({
  ...useHooksMutation({ mutationKey: ["/api/login", "", ""], method: "POST" }),
});
```

#

###

🔄 Dynamic Fetcher

A reusable fetcher utility is provided.

Features:

- Dynamic endpoint
- Query params support
- Error handling
- Compatible with React Query

Example:

```typescript
const data: PokemonListItem = await Fetcher({
  queryKey: [`/api/pokemon`, { limit }, "pokemon"],
  method: "GET",
  auth: false,
});
```

#

### 🧠 Global State with Zustand

Simple and scalable global state management using Zustand.

Example store:

```typescript
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

#

### 🧪 Testing Setup

Testing environment already configured using:

- Jest
- React Testing Library

Two types of testing included:

```code
tests/
 ├── unit
 └── integration
```

#

### 🔁 SSR Hydration Support

Server-side fetching can be hydrated into the client using React Query Hydration. see in **ex-hydrate** pages

#

### 🧩 Additional Hooks

useDebounce Useful for search input or API throttling

Example

```typescript
const debounceValue = useDebounce(value, 500);
```

#

### 🌐 Dynamic Local API Proxy

Local API proxy is available to simulate backend endpoints.

```code
app/api/[...keys]
```

This allows dynamic routing like:

```code
/api/users
/api/products
```

#

### 🎨 Styling

Default styling includes:

- Tailwind CSS

Utility-first styling for fast UI development.

#

### 📦 Additional Libraries

This boilerplate includes several useful third-party libraries:

| Library               | Purpose                      |
| --------------------- | ---------------------------- |
| React Query           | Server state management      |
| Zustand               | Global state                 |
| Jest                  | Unit testing                 |
| React Testing Library | Component testing            |
| Tailwind CSS          | Styling                      |
| clsx                  | Conditional className helper |

Example:

```typescript
clsx("text-sm", isActive && "text-blue-500");
```

#

### 📂 Project Structure

```code
.
├── app
│   ├── api
│   │   └── [...keys]
│   │       └── route.ts        # Dynamic local API proxy handler
│   │
│   ├── user                    # Example user module
│   │
│   ├── ex-hydrate              # Example SSR hydration with React Query
│   │   ├── page.tsx
│   │   └── user-client.tsx
│   │
│   ├── ex-login                # Example login page
│   │   └── page.tsx
│   │
│   ├── favicon.ico
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout (App Router)
│   └── page.tsx                # Root page
│
├── components                  # UI components using Atomic Design
│   ├── atom                    # Smallest reusable components (Button, Input)
│   ├── molecules               # Combination of atoms
│   ├── organizations           # Complex UI sections
│   └── template                # Page layout templates
│
├── hook                        # Custom reusable hooks
│   └── useDebounce.ts          # Debounce hook
│
├── lib                         # Core libraries / utilities
│   └── fetcher.ts              # Dynamic fetcher used by React Query
│
├── store                       # Global state management using Zustand
│   ├── index.ts
│   └── useExample.ts
│
├── tests                       # Testing setup
│   ├── integration             # Integration tests
│   └── unit
│       └── components          # Unit tests for components
│           ├── Button.test.tsx
│           └── Input.test.tsx
│
├── types                       # Global TypeScript types
│   ├── Fetcher.type.d.ts
│   └── QueryParam.d.ts
│
├── utils                       # Helper utilities
│   └── header.ts
│
├── public                      # Static assets
│
├── .env                        # Environment variables
├── .gitignore
├── .prettierrc
├── eslint.config.mjs           # ESLint configuration
│
├── jest.config.ts              # Base Jest config
├── jest.integration.config.ts  # Integration test config
├── jest.unit.config.ts         # Unit test config
├── jest.setup.ts               # Jest setup
│
├── next.config.ts              # Next.js configuration
├── next-env.d.ts
│
├── package.json
└── package-lock.json

```

## 🚀 Getting Started

### Install dependencies

```shell
npm run install
```

### Run Development server

```shell
npm run server:dev
```

## 🧪 Testing

Run unit and integration tests with:

```shell
npm run test:all
```

or

Run unit tests with:

```shell
npm run test:unit
```

or

Run unit integration with:

```shell
npm run test:integration
```

## 🎯 Goals of this Boilerplate

This boilerplate aims to provide:

- scalable architecture
- standardized data fetching
- reusable components
- built-in testing setup
- maintainable project structure

Suitable for:

- production-ready projects
- frontend architecture references

#

### 📄 License

MIT License

#
