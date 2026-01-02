export interface Plan {
  id: string
  name: string
  price: number
  interval: 'month' | 'year'
  features: string[]
}

export interface Subscription {
  id: string
  tenantId: string
  planId: string
  status: 'active' | 'canceled' | 'past_due' | 'trialing'
  currentPeriodEnd: Date
}

export interface BillingConfig {
  stripeSecretKey?: string
  defaultCurrency: string
}

export function createBilling(config: BillingConfig) {
  const plans: Plan[] = []
  const subscriptions: Subscription[] = []

  return {
    config,
    createPlan: (plan: Plan) => {
      plans.push(plan)
      return plan
    },
    getPlans: () => plans,
    createSubscription: (subscription: Subscription) => {
      subscriptions.push(subscription)
      return subscription
    },
    getSubscriptions: (tenantId?: string) => {
      return tenantId
        ? subscriptions.filter(s => s.tenantId === tenantId)
        : subscriptions
    },
    cancelSubscription: (subscriptionId: string) => {
      const subscription = subscriptions.find(s => s.id === subscriptionId)
      if (subscription) {
        subscription.status = 'canceled'
        return subscription
      }
      return null
    }
  }
}

export function useBilling() {
  return {
    plans: [],
    subscriptions: [],
    createSubscription: async () => {},
    cancelSubscription: async () => {}
  }
}
