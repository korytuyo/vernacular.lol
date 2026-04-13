import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Globe, LogOut } from 'lucide-react'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import ThemeToggle from '../ui/ThemeToggle'
import { useAuth } from '../../lib/AuthContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, profile, signOut } = useAuth()
  const isLanding = location.pathname === '/'

  const navLinks = isLanding
    ? [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Proverbs', href: '#proverbs' },
      ]
    : [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Lessons', href: '/lessons' },
        { label: 'Proverbs', href: '/proverbs' },
        { label: 'Practice', href: '/practice' },
      ]

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  // Get display initial from profile or email
  const displayName = profile?.display_name || user?.email || ''
  const initial = displayName.charAt(0).toUpperCase()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <Globe className="w-7 h-7 text-green-700 dark:text-green-400" strokeWidth={2.5} />
            <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Vernacular</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith('#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 dark:text-slate-400 hover:text-green-700 dark:hover:text-green-400 transition-colors no-underline"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-gray-600 dark:text-slate-400 hover:text-green-700 dark:hover:text-green-400 transition-colors no-underline"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            {user ? (
              <>
                <LanguageSwitcher />
                <div className="flex items-center gap-2">
                  <Link
                    to="/dashboard"
                    className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-700 dark:text-green-400 font-semibold text-sm no-underline"
                    title={displayName}
                  >
                    {initial}
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="p-2 rounded-lg text-gray-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                    title="Sign out"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-700 dark:text-slate-300 hover:text-green-700 dark:hover:text-green-400 transition-colors no-underline"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="text-sm font-semibold text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 px-4 py-2 rounded-lg transition-colors no-underline"
                >
                  Start Learning Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 px-4 pb-4">
          {navLinks.map((link) =>
            link.href.startsWith('#') ? (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-gray-600 dark:text-slate-400 no-underline"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-gray-600 dark:text-slate-400 no-underline"
              >
                {link.label}
              </Link>
            )
          )}
          {user ? (
            <button
              onClick={() => { handleSignOut(); setOpen(false) }}
              className="block mt-2 w-full text-center text-sm font-medium text-red-600 dark:text-red-400 py-2"
            >
              Sign out
            </button>
          ) : (
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="block mt-2 text-center text-sm font-semibold text-white bg-green-700 dark:bg-green-600 px-4 py-2 rounded-lg no-underline"
            >
              Start Learning Free
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
