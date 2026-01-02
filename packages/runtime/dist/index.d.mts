import * as _avas_billing from '@avas/billing';
import { BillingConfig } from '@avas/billing';
import * as _avas_tenants from '@avas/tenants';
import { AuthConfig } from '@avas/auth';

interface AvasConfig {
    appId: string;
    tenantMode: 'single-db' | 'multi-db';
    auth?: AuthConfig;
    billing?: BillingConfig;
}
declare function initAvas(config: AvasConfig): {
    config: AvasConfig;
    auth: {
        config: AuthConfig;
        login(email: string, password: string): Promise<{
            success: boolean;
            user: {
                id: string;
                email: string;
                roles: string[];
            };
        }>;
        logout(): Promise<{
            success: boolean;
        }>;
    } | null;
    tenants: {
        getCurrentTenant: () => _avas_tenants.Tenant;
        setCurrentTenant: (tenant: _avas_tenants.Tenant | null) => void;
        getTenants: () => _avas_tenants.Tenant[];
        addTenant: (tenant: _avas_tenants.Tenant) => void;
        withTenant: <T>(tenantId: string, fn: () => T) => T;
    };
    billing: {
        config: BillingConfig;
        createPlan: (plan: _avas_billing.Plan) => _avas_billing.Plan;
        getPlans: () => _avas_billing.Plan[];
        createSubscription: (subscription: _avas_billing.Subscription) => _avas_billing.Subscription;
        getSubscriptions: (tenantId?: string) => _avas_billing.Subscription[];
        cancelSubscription: (subscriptionId: string) => _avas_billing.Subscription;
    } | null;
    getContext: () => {
        appId: string;
        tenantMode: "single-db" | "multi-db";
        currentTenant: _avas_tenants.Tenant;
    };
};
type AvasInstance = ReturnType<typeof initAvas>;

export { type AvasConfig, type AvasInstance, initAvas };
