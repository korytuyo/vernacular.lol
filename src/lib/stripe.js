import { supabase } from './supabase'

export const PLANS = {
  free: {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Get a taste of language and culture.',
    features: [
      '1 language',
      '3 beginner lessons',
      'Daily proverb',
      '3 AI conversations per month',
    ],
    priceId: null,
  },
  learner: {
    name: 'Learner',
    price: '$7.99',
    period: 'per month',
    description: 'Full access to master the language.',
    features: [
      'Up to 3 languages',
      'Full curriculum access',
      'Unlimited AI conversations',
      'Complete proverb library',
      'Progress tracking',
    ],
    priceId: import.meta.env.VITE_STRIPE_LEARNER_PRICE_ID,
  },
  explorer: {
    name: 'Explorer',
    price: '$14.99',
    period: 'per month',
    description: 'Deep cultural immersion across all languages.',
    features: [
      'All 17 languages',
      'Everything in Learner',
      'Cultural history modules',
      'Advanced AI scenario library',
      'Multi-character AI dialogues',
      'Exportable study materials',
    ],
    priceId: import.meta.env.VITE_STRIPE_EXPLORER_PRICE_ID,
  },
}

export async function createCheckoutSession(priceId) {
  const { data: { session: authSession } } = await supabase.auth.getSession()

  if (!authSession) {
    throw new Error('You must be logged in to subscribe.')
  }

  const response = await supabase.functions.invoke('create-checkout-session', {
    body: { priceId },
  })

  if (response.error) {
    throw new Error(response.error.message || 'Failed to create checkout session')
  }

  const { url } = response.data
  if (url) {
    window.location.href = url
  }
}
