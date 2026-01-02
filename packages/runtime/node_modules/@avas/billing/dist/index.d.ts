interface Plan {
    id: string;
    name: string;
    price: number;
    interval: 'month' | 'year';
    features: string[];
}
interface Subscription {
    id: string;
    tenantId: string;
    planId: string;
    status: 'active' | 'canceled' | 'past_due' | 'trialing';
    currentPeriodEnd: Date;
}
interface BillingConfig {
    stripeSecretKey?: string;
    defaultCurrency: string;
}
declare function createBilling(config: BillingConfig): {
    config: BillingConfig;
    createPlan: (plan: Plan) => Plan;
    getPlans: () => Plan[];
    createSubscription: (subscription: Subscription) => Subscription;
    getSubscriptions: (tenantId?: string) => Subscription[];
    cancelSubscription: (subscriptionId: string) => Subscription;
};
declare function useBilling(): {
    plans: any[];
    subscriptions: any[];
    createSubscription: () => Promise<void>;
    cancelSubscription: () => Promise<void>;
};

export { type BillingConfig, type Plan, type Subscription, createBilling, useBilling };
