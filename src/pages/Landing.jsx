import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BookOpen, MessageCircle, Globe, Sparkles, ArrowRight, Check, Star, ChevronRight } from 'lucide-react'
import { languages, comingSoon } from '../data/languages'
import { getNativeText } from '../lib/languageUtils'
import { PLANS, createCheckoutSession } from '../lib/stripe'
import { useAuth } from '../lib/AuthContext'

function HeroSection() {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Now teaching 16 languages across Africa, South Asia, the Americas, East Asia, and the diaspora.
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
          Learn languages the way they were meant to be{' '}
          <span className="text-green-700 dark:text-green-400">spoken</span>
        </h1>

        <p className="text-sm font-medium text-green-700 dark:text-green-400 tracking-widest uppercase mb-6">
          Learning Out Loud
        </p>

        <p className="text-lg text-gray-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Vernacular teaches underserved languages through AI conversation, cultural immersion,
          and the proverbs that carry a people's wisdom. Choose from Yoruba, Igbo, Hausa, Swahili, and more.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-700 dark:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-800 dark:hover:bg-green-700 transition-colors no-underline text-base"
          >
            Start Learning Free
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 font-semibold px-6 py-3 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-700 hover:text-green-700 dark:hover:text-green-400 transition-colors no-underline text-base"
          >
            See How It Works
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-slate-500">
          <div className="flex items-center gap-1">
            <div className="flex -space-x-2">
              {['bg-amber-400', 'bg-green-400', 'bg-blue-400', 'bg-purple-400'].map((color, i) => (
                <div key={i} className={`w-7 h-7 rounded-full ${color} border-2 border-white dark:border-slate-950`} />
              ))}
            </div>
          </div>
          <span>Join learners reconnecting with their roots</span>
        </div>
      </div>

      {/* Proverb highlights - rotating selection */}
      <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[languages.yoruba, languages.swahili, languages.hausa, languages.amharic].map((lang) => (
          <div key={lang.id} className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-4 border border-green-100 dark:border-green-800/50">
            <p className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wider mb-2">{lang.name}</p>
            <p className="text-sm font-semibold text-gray-900 dark:text-white italic mb-1">
              "{getNativeText(lang.proverbs[0])}"
            </p>
            <p className="text-xs text-gray-600 dark:text-slate-400">{lang.proverbs[0].english}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "AI Conversation Tutors",
      description: "Practice real dialogue with AI characters in culturally accurate scenarios. Greet an elder, bargain at the market, or celebrate a naming ceremony."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Proverb-Driven Curriculum",
      description: "Every lesson anchors to Yoruba proverbs that carry centuries of wisdom. Learn the language and the philosophy embedded within it."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cultural Immersion",
      description: "Go beyond vocabulary. Understand the history of the Oyo Empire, the meaning behind names, and the customs that shape daily life."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Tonal Pronunciation",
      description: "Yoruba is a tonal language. Our AI provides real-time feedback on your three tones so you say what you actually mean."
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Language is culture. We teach both.
          </h2>
          <p className="text-gray-600 dark:text-slate-400 max-w-xl mx-auto">
            Mainstream apps teach you words. Vernacular teaches you how a people think, speak, and live.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors border border-gray-100 dark:border-slate-700 hover:border-green-200 dark:hover:border-green-800">
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LanguagesSection() {
  const available = Object.values(languages)
  return (
    <section id="languages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50 dark:from-slate-900 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            16 languages. One platform.
          </h2>
          <p className="text-gray-600 dark:text-slate-400 max-w-xl mx-auto">
            We build for the languages that represent hundreds of millions of speakers but zero attention from mainstream platforms.
          </p>
        </div>

        {/* Language grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {available.map((lang) => (
            <div key={lang.id} className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-gray-100 dark:border-slate-700 shadow-sm hover:border-green-200 dark:hover:border-green-800 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{lang.name}</h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">{lang.nativeName} - {lang.speakers}</p>
              <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-3 mb-3">
                <p className="text-xs text-gray-400 dark:text-slate-500 font-semibold mb-1">SAMPLE PROVERB</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white italic">
                  "{getNativeText(lang.proverbs[0])}"
                </p>
                <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">{lang.proverbs[0].english}</p>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400 dark:text-slate-500">{lang.lessons.length} lessons</span>
                <Link to="/signup" className="inline-flex items-center gap-1 text-green-700 dark:text-green-400 font-semibold no-underline">
                  Start
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProverbPreviewSection() {
  const allProverbs = [
    { ...languages.yoruba.proverbs[0], lang: 'Yoruba', text: getNativeText(languages.yoruba.proverbs[0]) },
    { ...languages.swahili.proverbs[0], lang: 'Swahili', text: getNativeText(languages.swahili.proverbs[0]) },
    { ...languages.igbo.proverbs[0], lang: 'Igbo', text: getNativeText(languages.igbo.proverbs[0]) },
  ]
  return (
    <section id="proverbs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Wisdom in every lesson
          </h2>
          <p className="text-gray-600 dark:text-slate-400 max-w-xl mx-auto">
            Proverbs carry the accumulated wisdom of generations. Each one opens a window into how a people see the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allProverbs.map((proverb, i) => (
            <div key={i} className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-2 py-1 rounded-md bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-semibold capitalize">
                  {proverb.category}
                </span>
                <span className="inline-block px-2 py-1 rounded-md bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 text-xs font-semibold">
                  {proverb.lang}
                </span>
              </div>
              <p className="text-base font-semibold text-gray-900 dark:text-white italic mb-3">
                "{proverb.text}"
              </p>
              <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">{proverb.english}</p>
              <p className="text-xs text-gray-400 dark:text-slate-500 leading-relaxed">{proverb.context.slice(0, 120)}...</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/proverbs"
            className="inline-flex items-center gap-2 text-green-700 dark:text-green-400 font-semibold text-sm hover:text-green-800 dark:hover:text-green-300 no-underline"
          >
            Explore the full proverb library
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [loadingTier, setLoadingTier] = useState(null)

  const planList = [
    { key: 'free', ...PLANS.free, cta: 'Start Free', featured: false },
    { key: 'learner', ...PLANS.learner, cta: 'Start Free Trial', featured: true },
    { key: 'explorer', ...PLANS.explorer, cta: 'Start Free Trial', featured: false },
  ]

  const handleSubscribe = async (plan) => {
    if (!plan.priceId) {
      navigate('/signup')
      return
    }

    if (!user) {
      navigate('/signup')
      return
    }

    setLoadingTier(plan.key)
    try {
      await createCheckoutSession(plan.priceId)
    } catch (err) {
      console.error('Checkout error:', err)
      setLoadingTier(null)
    }
  }

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Start free. Go deep when you're ready.
          </h2>
          <p className="text-gray-600 dark:text-slate-400 max-w-xl mx-auto">
            No credit card required. Try the free tier and upgrade when the language starts clicking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {planList.map((plan) => (
            <div
              key={plan.key}
              className={`rounded-2xl p-6 border ${
                plan.featured
                  ? 'border-green-600 dark:border-green-500 bg-green-50 dark:bg-green-900/20 shadow-lg shadow-green-100 dark:shadow-green-900/20 relative'
                  : 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-700 dark:bg-green-600 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                <span className="text-sm text-gray-500 dark:text-slate-400">/{plan.period}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-slate-400 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-6 list-none p-0 m-0">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleSubscribe(plan)}
                disabled={loadingTier === plan.key}
                className={`block w-full text-center py-2.5 rounded-xl font-semibold text-sm transition-colors disabled:opacity-50 ${
                  plan.featured
                    ? 'bg-green-700 dark:bg-green-600 text-white hover:bg-green-800 dark:hover:bg-green-700'
                    : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                }`}
              >
                {loadingTier === plan.key ? 'Redirecting...' : plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-slate-500 mt-8">
          Cancel anytime. No hidden fees.
        </p>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-800 dark:bg-green-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Your language. Your culture. Your journey.
        </h2>
        <p className="text-green-100 dark:text-green-200 mb-8 max-w-xl mx-auto">
          Whether you're reconnecting with roots, preparing for business, or drawn to a new culture,
          Vernacular meets you where you are.
        </p>
        <Link
          to="/signup"
          className="inline-flex items-center gap-2 bg-white text-green-800 font-semibold px-8 py-3 rounded-xl hover:bg-green-50 transition-colors no-underline text-base"
        >
          Start Learning Free
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}

export default function Landing() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <LanguagesSection />
      <ProverbPreviewSection />
      <PricingSection />
      <CTASection />
    </div>
  )
}
