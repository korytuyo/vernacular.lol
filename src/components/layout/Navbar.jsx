import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, BookOpen, Globe } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <Globe className="w-7 h-7 text-green-700" strokeWidth={2.5} />
            <span className="text-xl font-bold text-gray-900 tracking-tight">Vernacular</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith('#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors no-underline"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors no-underline"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            {isLanding ? (
              <>
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors no-underline"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="text-sm font-semibold text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg transition-colors no-underline"
                >
                  Start Learning Free
                </Link>
              </>
            ) : (
              <Link
                to="/profile"
                className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold text-sm no-underline"
              >
                K
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pb-4">
          {navLinks.map((link) =>
            link.href.startsWith('#') ? (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-gray-600 no-underline"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-gray-600 no-underline"
              >
                {link.label}
              </Link>
            )
          )}
          {isLanding && (
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="block mt-2 text-center text-sm font-semibold text-white bg-green-700 px-4 py-2 rounded-lg no-underline"
            >
              Start Learning Free
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
