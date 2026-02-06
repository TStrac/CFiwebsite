import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { asset } from '@/lib/asset'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150
      if (isScrolled && !hasScrolled) {
        setHasScrolled(true)
      }
      setScrolled(isScrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled])

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Retailers', to: '/retailers' },
    { label: 'Manufacturers', to: '/manufacturers' },
    { label: 'News', to: '/news' },
  ]

  return (
    <>
      {/* Transparent header - scrolls with page */}
      <header className="absolute top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-4">
        <nav className="max-w-7xl mx-auto rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between bg-transparent">
          <Link to="/" className="shrink-0">
            <img src={asset('logo-cfi.png')} alt="CFi" className="h-10 sm:h-12 w-auto" />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium transition-colors whitespace-nowrap text-white/90 hover:text-white"
                activeProps={{
                  className: 'text-sm font-medium transition-colors whitespace-nowrap text-white',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100"
            >
              Get In Touch
            </Link>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white hover:text-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Nav Dropdown for transparent header */}
        {mobileOpen && (
          <div className="lg:hidden bg-white shadow-lg overflow-hidden border-t border-gray-100 mx-[-16px] sm:mx-[-24px] mt-3">
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-colors"
                  activeProps={{
                    className: 'px-4 py-3 text-emerald-600 bg-emerald-50 rounded-lg font-medium transition-colors',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mx-4 mt-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-sm font-semibold rounded-lg transition-all text-center"
              >
                Get In Touch
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Solid header - fixed, slides in on scroll */}
      <header 
        className={`fixed left-0 right-0 z-50 ${
          !hasScrolled ? 'invisible' : scrolled ? 'header-visible' : 'header-hidden'
        }`} 
        style={{ top: 0 }}
      >
        <nav className="w-full px-6 sm:px-10 lg:px-16 py-3 flex items-center justify-between bg-[#f7faf5] shadow-lg">
          <Link to="/" className="shrink-0">
            <img src={asset('logo-cfi.png')} alt="CFi" className="h-10 sm:h-12 w-auto" />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium transition-colors whitespace-nowrap text-gray-600 hover:text-emerald-600"
                activeProps={{
                  className: 'text-sm font-medium transition-colors whitespace-nowrap text-emerald-600',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20"
            >
              Get In Touch
            </Link>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Nav Dropdown */}
        {mobileOpen && (
          <div className="lg:hidden bg-white shadow-lg overflow-hidden border-t border-gray-100">
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-colors"
                  activeProps={{
                    className: 'px-4 py-3 text-emerald-600 bg-emerald-50 rounded-lg font-medium transition-colors',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mx-4 mt-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-sm font-semibold rounded-lg transition-all text-center"
              >
                Get In Touch
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
