import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Globe, Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react'
import { useAuth } from '../lib/AuthContext'
import { useLanguage } from '../lib/LanguageContext'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedLevel, setSelectedLevel] = useState(null)
  const navigate = useNavigate()
  const { signUp, signInWithGoogle } = useAuth()
  const { currentLanguage } = useLanguage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (step === 1) {
      setStep(2)
      return
    }

    setLoading(true)

    const { error: authError } = await signUp({
      email,
      password,
      displayName: name,
      proficiencyLevel: selectedLevel,
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    navigate('/dashboard')
  }

  const handleGoogleSignUp = async () => {
    setError(null)
    const { error: authError } = await signInWithGoogle()
    if (authError) setError(authError.message)
  }

  const languageName = currentLanguage?.name || 'your language'

  const proficiencyLevels = [
    { id: 'none', label: "I'm brand new", description: `Never spoken a word of ${languageName}` },
    { id: 'beginner', label: 'I know a few words', description: 'Basic greetings, some food names, counting to 5' },
    { id: 'intermediate', label: 'I can hold a simple conversation', description: 'Greetings, introductions, basic questions and answers' },
    { id: 'heritage', label: 'I grew up hearing it', description: 'I understand some but struggle to speak back' },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gray-50 dark:bg-slate-950">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 no-underline">
            <Globe className="w-8 h-8 text-green-700 dark:text-green-400" strokeWidth={2.5} />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Vernacular</span>
          </Link>
          <p className="text-sm text-gray-500 dark:text-slate-400 mt-2">
            {step === 1 ? 'Start your language journey today.' : `How familiar are you with ${languageName}?`}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm">
              {error}
            </div>
          )}

          {step === 1 ? (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Full name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-slate-500" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-slate-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-slate-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-slate-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-slate-500" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      className="w-full pl-10 pr-10 py-2.5 border border-gray-200 dark:border-slate-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500"
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-green-700 dark:bg-green-600 text-white font-semibold rounded-xl hover:bg-green-800 dark:hover:bg-green-700 transition-colors text-sm flex items-center justify-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-gray-200 dark:bg-slate-600" />
                <span className="text-xs text-gray-400 dark:text-slate-500">or continue with</span>
                <div className="flex-1 h-px bg-gray-200 dark:bg-slate-600" />
              </div>

              {/* Google auth */}
              <button
                onClick={handleGoogleSignUp}
                className="w-full py-2.5 border border-gray-200 dark:border-slate-600 rounded-xl text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {proficiencyLevels.map((level) => (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => setSelectedLevel(level.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selectedLevel === level.id
                      ? 'border-green-600 dark:border-green-500 bg-green-50 dark:bg-green-900/20 ring-1 ring-green-600 dark:ring-green-500'
                      : 'border-gray-200 dark:border-slate-600 hover:border-green-300 dark:hover:border-green-700'
                  }`}
                >
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">{level.label}</p>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">{level.description}</p>
                </button>
              ))}

              <button
                type="submit"
                disabled={!selectedLevel || loading}
                className="w-full py-2.5 mt-2 bg-green-700 dark:bg-green-600 text-white font-semibold rounded-xl hover:bg-green-800 dark:hover:bg-green-700 transition-colors text-sm disabled:opacity-50"
              >
                {loading ? 'Creating account...' : 'Start Learning'}
              </button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full py-2 text-sm text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300"
              >
                Back
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-slate-400 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-green-700 dark:text-green-400 font-semibold hover:text-green-800 dark:hover:text-green-300 no-underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
