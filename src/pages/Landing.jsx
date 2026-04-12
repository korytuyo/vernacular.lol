import { Link } from 'react-router-dom'
import { BookOpen, MessageCircle, Globe, Sparkles, ArrowRight, Check, Star } from 'lucide-react'
import { proverbs } from '../data/proverbs'

function HeroSection() {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Now teaching Yoruba. More languages coming soon.
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
          Learn languages the way they were meant to be{' '}
          <span className="text-green-700">spoken</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Vernacular teaches underserved languages through AI conversation, cultural immersion,
          and the proverbs that carry a people's wisdom. Start with Yoruba. Carry the culture.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-800 transition-colors no-underline text-base"
          >
            Start Learning Free
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold px-6 py-3 rounded-xl border border-gray-200 hover:border-green-300 hover:text-green-700 transition-colors no-underline text-base"
          >
            See How It Works
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <div className="flex -space-x-2">
              {['bg-amber-400', 'bg-green-400', 'bg-blue-400', 'bg-purple-400'].map((color, i) => (
                <div key={i} className={`w-7 h-7 rounded-full ${color} border-2 border-white`} />
              ))}
            </div>
          </div>
          <span>Join learners reconnecting with their roots</span>
        </div>
      </div>

      {/* Proverb highlight */}
      <div className="mt-16 max-w-2xl mx-auto bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-6 border border-green-100">
        <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-2">Today's Proverb</p>
        <p className="text-lg font-semibold text-gray-900 italic mb-2">
          "{proverbs[0].yoruba}"
        </p>
        <p className="text-sm text-gray-600">
          {proverbs[0].english}
        </p>
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
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Language is culture. We teach both.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Mainstream apps teach you words. Vernacular teaches you how a people think, speak, and live.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:bg-green-50 transition-colors border border-gray-100 hover:border-green-200">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProverbPreviewSection() {
  const featured = proverbs.slice(0, 3)
  return (
    <section id="proverbs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Wisdom in every lesson
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Yoruba proverbs carry the accumulated wisdom of generations. Each one opens a window into how Yoruba people see the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((proverb) => (
            <div key={proverb.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="inline-block px-2 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-semibold mb-4 capitalize">
                {proverb.category}
              </div>
              <p className="text-base font-semibold text-gray-900 italic mb-3">
                "{proverb.yoruba}"
              </p>
              <p className="text-sm text-gray-600 mb-4">{proverb.english}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{proverb.context.slice(0, 120)}...</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/proverbs"
            className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm hover:text-green-800 no-underline"
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
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Get a taste of Yoruba language and culture.",
      features: [
        "5 beginner lessons",
        "Daily proverb",
        "Limited vocabulary drills",
        "3 AI conversations per month",
      ],
      cta: "Start Free",
      featured: false,
    },
    {
      name: "Learner",
      price: "$7.99",
      period: "per month",
      description: "Full access to master the language.",
      features: [
        "Full curriculum access",
        "Unlimited AI conversations",
        "Complete proverb library",
        "Progress tracking",
        "Pronunciation feedback",
      ],
      cta: "Start Free Trial",
      featured: true,
    },
    {
      name: "Explorer",
      price: "$14.99",
      period: "per month",
      description: "Deep cultural immersion and mastery.",
      features: [
        "Everything in Learner",
        "Cultural history modules",
        "Advanced AI scenario library",
        "Multi-character AI dialogues",
        "Exportable study materials",
        "Priority access to new languages",
      ],
      cta: "Start Free Trial",
      featured: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Start free. Go deep when you're ready.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            No credit card required. Try the free tier and upgrade when the language starts clicking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border ${
                plan.featured
                  ? 'border-green-600 bg-green-50 shadow-lg shadow-green-100 relative'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-700 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-500">/{plan.period}</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-6 list-none p-0 m-0">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/signup"
                className={`block text-center py-2.5 rounded-xl font-semibold text-sm transition-colors no-underline ${
                  plan.featured
                    ? 'bg-green-700 text-white hover:bg-green-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Save up to 37% with annual billing. Cancel anytime.
        </p>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Your language. Your culture. Your journey.
        </h2>
        <p className="text-green-100 mb-8 max-w-xl mx-auto">
          Whether you're reconnecting with roots, preparing for business, or simply drawn to the beauty of Yoruba,
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
      <ProverbPreviewSection />
      <PricingSection />
      <CTASection />
    </div>
  )
}
