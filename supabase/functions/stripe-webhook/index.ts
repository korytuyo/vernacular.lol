import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import Stripe from 'https://esm.sh/stripe@14.14.0?target=deno'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2023-10-16' })
const endpointSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')!

// Use service role key for webhook (no user auth context)
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

serve(async (req) => {
  const signature = req.headers.get('stripe-signature')!
  const body = await req.text()

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return new Response(JSON.stringify({ error: 'Invalid signature' }), { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = session.metadata?.supabase_user_id
        if (!userId) break

        const subscriptionId = session.subscription as string
        const sub = await stripe.subscriptions.retrieve(subscriptionId)
        const priceId = sub.items.data[0].price.id
        const tier = determineTier(priceId)

        // Upsert subscription record
        await supabase.from('subscriptions').upsert({
          user_id: userId,
          stripe_customer_id: session.customer as string,
          stripe_subscription_id: subscriptionId,
          tier,
          status: 'active',
          current_period_start: new Date(sub.current_period_start * 1000).toISOString(),
          current_period_end: new Date(sub.current_period_end * 1000).toISOString(),
        }, { onConflict: 'user_id' })

        // Update profile tier
        await supabase.from('profiles').update({
          subscription_tier: tier,
        }).eq('id', userId)

        break
      }

      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription
        const userId = sub.metadata?.supabase_user_id
        if (!userId) break

        const priceId = sub.items.data[0].price.id
        const tier = determineTier(priceId)
        const status = mapStripeStatus(sub.status)

        await supabase.from('subscriptions').update({
          tier,
          status,
          current_period_start: new Date(sub.current_period_start * 1000).toISOString(),
          current_period_end: new Date(sub.current_period_end * 1000).toISOString(),
        }).eq('stripe_subscription_id', sub.id)

        await supabase.from('profiles').update({
          subscription_tier: status === 'active' ? tier : 'free',
        }).eq('id', userId)

        break
      }

      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription
        const userId = sub.metadata?.supabase_user_id
        if (!userId) break

        await supabase.from('subscriptions').update({
          status: 'canceled',
          tier: 'free',
        }).eq('stripe_subscription_id', sub.id)

        await supabase.from('profiles').update({
          subscription_tier: 'free',
        }).eq('id', userId)

        break
      }
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 })
  } catch (err) {
    console.error('Webhook handler error:', err.message)
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
})

function determineTier(priceId: string): string {
  const learnerPriceId = Deno.env.get('STRIPE_LEARNER_PRICE_ID')
  const explorerPriceId = Deno.env.get('STRIPE_EXPLORER_PRICE_ID')

  if (priceId === learnerPriceId) return 'learner'
  if (priceId === explorerPriceId) return 'explorer'
  return 'free'
}

function mapStripeStatus(status: string): string {
  switch (status) {
    case 'active': return 'active'
    case 'past_due': return 'past_due'
    case 'canceled':
    case 'unpaid': return 'canceled'
    case 'trialing': return 'trialing'
    default: return 'active'
  }
}
