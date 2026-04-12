import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Globe, Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [step, setStep] = useState(1) // 1 = credentials, 2 = proficiency
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
      return
    }
    setLoading(true)
    // Supabase auth will go here
    setTimeout(() => setLoading(false), 1000)
  }

  const proficiencyLevels = [
    { id: 'none', label: "I'm brand new", description: "Never spoken a word of Yoruba" },
    { id: 'beginner', label: "I know a few words", description: "Basic greetings, some food names, counting to 5" },
    { id: 'intermediate', label: "I can hold a simple conversation", description: "Greetings, introductions, basic questions and answers" },
    { id: 'heritage', label: "I grew up hearing it", description: "I understand some but struggle to speak back" },
  ]

  const [selectedLevel, setSelectedLevel] = useState(null)

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gray-50">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 no-underline">
            <Globe className="w-8 h-8 text-green-700" strokeWidth={2.5} />
            <span className="text-2xl font-bold text-gray-900">Vernacular</span>
          </Link>
          <p className="text-sm text-gray-500 mt-2">
            {step === 1 ? 'Start your language journey today.' : 'How familiar are you with Yoruba?'}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors text-sm flex items-center justify-center gap-2"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {proficiencyLevels.map((level) => (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => setSelectedLevel(level.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selectedLevel === level.id
                      ? 'border-green-600 bg-green-50 ring-1 ring-green-600'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <p className="font-semibold text-sm text-gray-900">{level.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{level.description}</p>
                </button>
              ))}

              <button
                type="submit"
                disabled={!selectedLevel || loading}
                className="w-full py-2.5 mt-2 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors text-sm disabled:opacity-50"
              >
                {loading ? 'Creating account...' : 'Start Learning'}
              </button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full py-2 text-sm text-gray-500 hover:text-gray-700"
              >
                Back
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-green-700 font-semibold hover:text-green-800 no-underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
