interface Tenant {
    id: string;
    name: string;
    domain?: string;
    metadata?: Record<string, any>;
}
declare function createTenantContext(initialTenants?: Tenant[]): {
    getCurrentTenant: () => Tenant;
    setCurrentTenant: (tenant: Tenant | null) => void;
    getTenants: () => Tenant[];
    addTenant: (tenant: Tenant) => void;
    withTenant: <T>(tenantId: string, fn: () => T) => T;
};
interface TenantContext {
    currentTenant: Tenant | null;
    tenants: Tenant[];
}
declare function TenantContext(): {
    getCurrentTenant: () => Tenant;
    setCurrentTenant: (tenant: Tenant | null) => void;
    getTenants: () => Tenant[];
    addTenant: (tenant: Tenant) => void;
    withTenant: <T>(tenantId: string, fn: () => T) => T;
};

export { type Tenant, TenantContext, createTenantContext };
