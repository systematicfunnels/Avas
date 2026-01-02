# ⭐ Avas

**Composable SaaS Core for Multi-Product Platforms**

Avas (आवास) is a shared foundation for identity, billing, tenancy, and infrastructure. Build once. Reuse everywhere. Ship calmly.

## 📦 Packages

| Package | Description |
|---------|-------------|
| `@avas/auth` | Authentication core with multi-provider support |
| `@avas/tenants` | Tenancy management system |
| `@avas/billing` | Billing and subscription management |
| `@avas/runtime` | Core runtime configuration |
| `@avas/ui` | UI components and layouts |

## 🚀 Getting Started

### Installation

```bash
# Install specific packages as needed
pnpm add @avas/runtime
pnpm add @avas/auth
pnpm add @avas/billing
```

### Basic Usage

```typescript
import { initAvas } from '@avas/runtime'

const avas = initAvas({
  appId: 'my-app',
  tenantMode: 'single-db',
  auth: {
    providers: ['google', 'email'],
    sessionDuration: 3600
  },
  billing: {
    defaultCurrency: 'USD'
  }
})

// Use the initialized services
const { auth, tenants, billing } = avas
```

## 🔧 Development

### Build

```bash
pnpm build
```

### Publish (Private npm)

```bash
# For each package
cd packages/auth
pnpm publish --access restricted
```

## 📁 Project Structure

```
avas/
├── packages/
│   ├── auth/
│   ├── tenants/
│   ├── billing/
│   ├── runtime/
│   └── ui/
├── tooling/
└── README.md
```

## 🎯 Philosophy

Avas is designed to be:
- **Composable**: Use only what you need
- **Reusable**: Share across multiple products
- **Maintainable**: Clear boundaries and dependencies
- **Scalable**: Built for multi-tenant SaaS platforms

## 🔒 Dependency Rules

- **Avas never imports product code**
- **Products always import Avas**
- **Granular packages for selective installation**

This ensures long-term maintainability and cross-repo reuse.
