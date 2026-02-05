import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  const stats = [
    { value: '$800M+', label: 'Financing Enabled Annually' },
    { value: '100+', label: 'Ag Retail Partners' },
    { value: 'Up to $1M', label: 'Instant Credit Approvals' },
    { value: '<10Min.', label: 'Paperless Application Time' },
    { value: 'Same-Day', label: 'Funding Capability' },
  ]

  const [currentStat, setCurrentStat] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ============ HERO SECTION ============ */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 pt-32 pb-20">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 max-w-3xl">
            The Personalized AG
            <br />
            Financing Platform
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/90 font-light mb-10 max-w-xl leading-relaxed">
            Join 100+ retailers who offer our flexible financing to attract
            new customers, increase cart size, and boost sales.
          </p>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-base font-semibold rounded-lg transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50"
          >
            Partner With CFi
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="relative z-10 bg-white py-8 sm:py-10 border-b border-gray-100">
        <div className="w-full px-6 sm:px-12 lg:px-24">
          {/* Mobile: auto-cycling single stat */}
          <div className="sm:hidden">
            <div className="flex flex-col items-center text-center min-h-[60px]">
              <div 
                key={currentStat}
                className="animate-fade-in flex flex-col items-center"
              >
                <div className="text-3xl font-black text-emerald-700">{stats[currentStat].value}</div>
                <div className="text-sm text-gray-500 mt-1">{stats[currentStat].label}</div>
              </div>
            </div>
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {stats.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentStat(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentStat ? 'bg-emerald-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Tablet+: grid */}
          <div className="hidden sm:grid sm:grid-cols-5 sm:gap-4 max-w-6xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="text-2xl md:text-3xl font-black text-emerald-700 whitespace-nowrap">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ QUICK INTRO ============ */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
            CFi Is A Digital Financing Platform Built At The Intersection Of{' '}
            <span className="text-emerald-700 font-extrabold">Fintech And Agriculture.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            We embed instant, paperless financing directly at the point of sale, connecting 
            manufacturers, retailers, and growers to accelerate purchasing and unlock early-season 
            demand. With approvals of up to $1 million in minutes, CFi removes friction from 
            traditional ag financing.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-700">
            CFi Isn't Just Financing. It's The Future Of Ag Commerce.
          </p>
        </div>
      </section>


      {/* ============ FEATURES PREVIEW ============ */}
      <section className="py-20 md:py-32 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-4 block">
                Why CFi?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-6">
                Built for modern agricultural dealers
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We understand the unique challenges of agricultural financing. 
                Our platform is designed to help you close deals faster, serve 
                your customers better, and grow your business.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Real-time credit decisions in minutes',
                  'Zero paperwork applications',
                  'Up to $1M instant approvals',
                  'White-label dealer portal',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                Learn more about us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-8 sm:p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Driving sales velocity & farmer success
              </h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-black text-white mb-1">100+</div>
                  <div className="text-emerald-200 text-sm">Active retailers</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">$50M+</div>
                  <div className="text-emerald-200 text-sm">Financed annually</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">2 min</div>
                  <div className="text-emerald-200 text-sm">Average approval</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">30%</div>
                  <div className="text-emerald-200 text-sm">Sales increase</div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            Ag Finance. <span className="text-emerald-500">Delivered.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Join the fastest growing ag financing platform. Get started today and 
            see the difference CFi can make for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <img src="/logo-cfi.png" alt="CFi" className="h-8 w-auto" />
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                The fastest agricultural input financing platform.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'About', to: '/about' },
                  { label: 'News', to: '/news' },
                  { label: 'Contact', to: '/contact' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Solutions</h4>
              <ul className="space-y-2">
                {[
                  { label: 'For Retailers', to: '/retailers' },
                  { label: 'For Manufacturers', to: '/manufacturers' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>(844) 922-0272</li>
                <li>info@cfi.ag</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} CFi Solutions, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
