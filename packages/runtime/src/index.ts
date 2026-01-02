import { createAuth, AuthConfig } from '@avas/auth'
import { createTenantContext } from '@avas/tenants'
import { createBilling, BillingConfig } from '@avas/billing'

export interface AvasConfig {
  appId: string
  tenantMode: 'single-db' | 'multi-db'
  auth?: AuthConfig
  billing?: BillingConfig
}

export function initAvas(config: AvasConfig) {
  const auth = config.auth ? createAuth(config.auth) : null
  const tenants = createTenantContext()
  const billing = config.billing ? createBilling(config.billing) : null

  return {
    config,
    auth,
    tenants,
    billing,
    getContext: () => ({
      appId: config.appId,
      tenantMode: config.tenantMode,
      currentTenant: tenants.getCurrentTenant()
    })
  }
}

export type AvasInstance = ReturnType<typeof initAvas>
