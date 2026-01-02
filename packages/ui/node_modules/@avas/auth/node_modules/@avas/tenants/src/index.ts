export interface Tenant {
  id: string
  name: string
  domain?: string
  metadata?: Record<string, any>
}

export interface TenantContext {
  currentTenant: Tenant | null
  tenants: Tenant[]
}

export function createTenantContext(initialTenants: Tenant[] = []) {
  let currentTenant: Tenant | null = null

  return {
    getCurrentTenant: () => currentTenant,
    setCurrentTenant: (tenant: Tenant | null) => {
      currentTenant = tenant
    },
    getTenants: () => initialTenants,
    addTenant: (tenant: Tenant) => {
      initialTenants.push(tenant)
    },
    withTenant: <T>(tenantId: string, fn: () => T): T => {
      const tenant = initialTenants.find(t => t.id === tenantId)
      if (!tenant) throw new Error(`Tenant ${tenantId} not found`)
      const previousTenant = currentTenant
      currentTenant = tenant
      try {
        return fn()
      } finally {
        currentTenant = previousTenant
      }
    }
  }
}

export function TenantContext() {
  return createTenantContext()
}
