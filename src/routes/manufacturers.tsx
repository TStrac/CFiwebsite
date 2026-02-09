import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { asset } from '@/lib/asset'

export const Route = createFileRoute('/manufacturers')({ component: ManufacturersPage })

const enablerCards = [
  { icon: '📊', title: 'SKU-Level Sales Intelligence', desc: 'Track individual product performance across your entire retailer network in real time.' },
  { icon: '📈', title: 'Category Benchmarking', desc: 'Compare performance against competitors and track adoption trends across categories.' },
  { icon: '🗺️', title: 'Regional Movement Heatmaps', desc: 'Visualize geographic demand patterns and identify emerging markets before anyone else.' },
]

const outcomeCards = [
  { title: 'Align Marketing Investment', desc: 'Connect marketing spend directly to demand with measurable ROI.', bg: 'bg-emerald-800' },
  { title: 'Optimize Sales Deployment', desc: 'Deploy sales resources to highest conversion regions based on performance data.', bg: 'bg-emerald-700' },
  { title: 'Launch With Precision', desc: 'Introduce new products with data-backed confidence and reduced risk.', bg: 'bg-emerald-600' },
]

function ManufacturersPage() {
  const [currentEnabler, setCurrentEnabler] = useState(0)
  const [currentOutcome, setCurrentOutcome] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEnabler((prev) => (prev + 1) % enablerCards.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOutcome((prev) => (prev + 1) % outcomeCards.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#f7faf5] overflow-x-hidden">
      {/* ============ HERO ============ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={asset('manufacturer-hero-video.mp4')} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 pt-32 pb-20">
          <span className="text-sm font-semibold text-emerald-400 tracking-widest uppercase mb-4 block">
            For Manufacturers
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-3xl">
            Partner with CFi.
          </h1>
          <p className="text-lg sm:text-xl text-white/90 font-light mb-10 max-w-xl leading-relaxed">
            Offer growers flexible financing and buy-down options that increase adoption, 
            accelerate sell-through, and strengthen retailer relationships.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-base font-semibold rounded-lg transition-all shadow-lg shadow-emerald-600/30"
          >
            Connect With Our Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ============ STRATEGIC IMPERATIVE ============ */}
      <section className="pt-10 md:pt-14 pb-16 md:pb-24 px-4 sm:px-6 bg-[#f7faf5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Manufacturer's <span className="text-emerald-700">Strategic Imperative</span>
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Manufacturing leaders face unprecedented pressure to differentiate at the critical retail point of sale.
            </p>
          </div>
          {/* Timeline + Image layout */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-emerald-200 hidden sm:block" />
              <div className="space-y-10">
                {[
                  { title: 'Traditional Financing Falls Short', desc: 'Purely transactional, without any strategic influence at the point of sale.' },
                  { title: 'No Access to Retail Network', desc: 'Limited to your own partner network with no broader reach.' },
                  { title: 'Visibility Gap Costs Millions', desc: 'Lacking real-time data — marketing relies on outdated signals.' },
                  { title: 'Retailers Choose Winners', desc: 'Retailers favor manufacturers who equip them to boost engagement and sales.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 sm:pl-0">
                    <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hidden md:block">
              <img src={asset('scientist-greenhouse.png')} alt="Agricultural scientist" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARKET LEADING ENABLER ============ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#dde6d5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-emerald-700 tracking-widest uppercase mb-4 block">
              The Market Leading Enabler
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Only Platform Combining <span className="text-emerald-700">Financing Power With Intelligence</span> at Scale
            </h2>
          </div>
          {/* Mobile: auto-cycling single card */}
          <div className="sm:hidden">
            <div key={currentEnabler} className="animate-fade-in bg-white rounded-xl p-6 shadow-md flex items-start gap-5 min-h-[120px]">
              <span className="text-3xl shrink-0">{enablerCards[currentEnabler].icon}</span>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{enablerCards[currentEnabler].title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{enablerCards[currentEnabler].desc}</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {enablerCards.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentEnabler(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentEnabler ? 'bg-emerald-700' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Tablet+: stacked cards */}
          <div className="hidden sm:block space-y-6">
            {enablerCards.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 sm:p-8 shadow-md flex items-start gap-5">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f7faf5]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-emerald-700 tracking-widest uppercase mb-4 block">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Simple, Flexible, <span className="text-emerald-700">Strategic</span>
            </h2>
          </div>
          {/* Timeline / steps layout */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-emerald-200 hidden sm:block" />
            <div className="space-y-10">
              {[
                {
                  step: '01',
                  title: 'Tell Us About Your Business',
                  desc: 'Provide your product categories and sales channels so we can tailor the program to your needs.',
                },
                {
                  step: '02',
                  title: 'Select Products for Financing',
                  desc: 'Identify which products will benefit from a strategic buy-down to drive adoption and volume.',
                },
                {
                  step: '03',
                  title: 'Design Interest & Repayment',
                  desc: 'Set tailored interest rates and repayment schedules that align with your seasonality.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 sm:pl-0">
                  <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                    {item.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ NO RISK JUST REWARD ============ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#dde6d5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-emerald-700 tracking-widest uppercase mb-4 block">
                Partner with CFi
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-8">
                No Risk, <span className="text-emerald-700">Just Rewards</span>
              </h2>
              <ul className="space-y-6">
                {[
                  { title: 'Align Marketing Spend to Demand', desc: 'Connect marketing investment directly to real purchasing activity with measurable ROI.' },
                  { title: 'Strengthen Retailer Relationships', desc: 'Empower retail partners with financing tools that drive adoption and loyalty.' },
                  { title: 'Optimize Sales Deployment', desc: 'Focus sales and field resources on the highest-converting regions using performance data.' },
                  { title: 'Accelerate Product Launches', desc: 'Introduce new products with data-backed confidence, reducing risk and improving uptake.' },
                  { title: 'Expand Market Reach with Precision', desc: 'Use insights from real transactions to guide expansion and future growth strategies.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1 font-bold">{i + 1}.</span>
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={asset('handshake-field.png')} alt="Partner with CFi" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ STRATEGIC OUTCOMES ============ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f7faf5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-emerald-700 tracking-widest uppercase mb-4 block">
              Strategic Partnership Outcomes
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Helping Manufacturers <span className="text-emerald-700">Dominate Their Markets</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              By empowering retail partners with financing and intelligence at the point of sale.
            </p>
          </div>
          {/* Mobile: auto-cycling single card */}
          <div className="md:hidden">
            <div key={currentOutcome} className={`animate-fade-in ${outcomeCards[currentOutcome].bg} rounded-2xl p-8 text-white min-h-[160px]`}>
              <h3 className="text-xl font-bold mb-3">{outcomeCards[currentOutcome].title}</h3>
              <p className="text-emerald-100 text-sm leading-relaxed">{outcomeCards[currentOutcome].desc}</p>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {outcomeCards.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentOutcome(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentOutcome ? 'bg-emerald-700' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Tablet+: 3-column feature blocks */}
          <div className="hidden md:grid md:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-lg">
            {outcomeCards.map((item, i) => (
              <div key={i} className={`${item.bg} p-8 sm:p-10 text-white`}>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-emerald-100 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS BANNER ============ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-[#dde6d5]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Tap into <span className="text-emerald-700">100+ active dealers</span> and growing
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Let your dealer network offer instant financing, driving incremental sales and growth for your business.
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 sm:gap-8">
          {[
            { value: '$800M+', label: 'Financing enabled annually' },
            { value: '100+', label: 'Active retail partners' },
            { value: '<10 Min.', label: 'Paperless application' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-3xl md:text-4xl font-black text-emerald-800 whitespace-nowrap">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="max-w-md mx-auto mt-12 text-center">
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600 mb-8">
            <li className="flex items-center gap-2">
              <span className="text-emerald-600">&#10003;</span> Free sign-up
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-600">&#10003;</span> Easy integration
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-600">&#10003;</span> Transparent pricing
            </li>
          </ul>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-sm sm:text-lg transition-colors"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f7faf5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked <span className="text-emerald-700">Questions</span>
            </h2>
            <p className="text-gray-600 mt-3">
              Got questions? Check out our FAQs or get in touch with us to learn more.
            </p>
          </div>
          <ManufacturerFaq />
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 bg-[#dde6d5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ag Finance. <span className="text-emerald-700">Delivered.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Ready to dominate your market? Connect with our team today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-800 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

const mfgFaqCategories = [
  {
    category: 'Getting Started',
    questions: [
      { q: 'Why should my company partner with CFi?', a: 'As a CFi manufacturer partner, you gain access to our network of 100+ active dealers, SKU-level sales intelligence, category benchmarking, and regional demand heatmaps. You\'ll differentiate at the point of sale with financing that drives volume and loyalty.' },
      { q: 'How do I get started as a manufacturer partner?', a: 'Getting started is simple — tell us about your crop input business, select products for the financing program, and we\'ll design interest and repayment terms together. Fill out our contact form and a member of our Partnerships team will reach out.' },
      { q: 'What is the cost to become a partner?', a: 'Sign-up is free. CFi offers simple, transparent pricing with no hidden fees. Contact our team to learn more about our partnership terms.' },
    ],
  },
  {
    category: 'Programs & Financing',
    questions: [
      { q: 'How does the buy-down program work?', a: 'You select which products benefit from a strategic buy-down, then design tailored interest rates and repayment schedules aligned with seasonality. CFi handles the financing lifecycle while you gain visibility into adoption and performance.' },
      { q: 'Can I customize financing terms?', a: 'Yes. You design the interest rates and repayment periods that align with your seasonality and product categories. CFi gives you full control over your program structure.' },
      { q: 'What products can be financed?', a: 'CFi supports the full spectrum of agricultural inputs — crop protection, biostimulants, adjuvants, nutritionals, and seed.' },
    ],
  },
  {
    category: 'Intelligence & Data',
    questions: [
      { q: 'What intelligence does CFi provide?', a: 'CFi is the only platform combining financing power with intelligence at scale. You get SKU-level sales tracking, category benchmarking against competitors, and regional movement heatmaps to visualize geographic demand patterns and identify emerging markets.' },
      { q: 'How does CFi help me align marketing spend to demand?', a: 'CFi connects your marketing investment directly to real purchasing activity with measurable ROI. Our platform provides real-time data on what products are moving, where, and at what velocity — so you can deploy resources with precision.' },
    ],
  },
  {
    category: 'Integration & Support',
    questions: [
      { q: 'How does CFi integrate with our existing systems?', a: 'CFi provides branded retailer and grower portals out of the box, and our team helps integrate financing into your existing CRMs, ERPs, and dealer management platforms. Most integrations are completed within days.' },
      { q: 'Do we get dedicated support?', a: 'Yes. Every manufacturer partner is paired with a dedicated partner manager who handles onboarding, tech support, and ongoing optimization.' },
      { q: 'How does CFi strengthen retailer relationships?', a: 'By equipping your retail partners with embedded financing tools, you help them boost engagement and sales. Retailers favor manufacturers who give them a competitive edge — CFi makes you that manufacturer.' },
    ],
  },
]

function ManufacturerFaq() {
  const [openCategory, setOpenCategory] = useState<string>(mfgFaqCategories[0].category)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  return (
    <div className="grid md:grid-cols-[240px_1fr] gap-8">
      {/* Category sidebar */}
      <div className="flex md:flex-col gap-2 overflow-x-auto scrollbar-hide md:overflow-visible">
        {mfgFaqCategories.map((cat) => (
          <button
            key={cat.category}
            onClick={() => { setOpenCategory(cat.category); setOpenQuestion(null) }}
            className={`text-left px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              openCategory === cat.category
                ? 'bg-emerald-700 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-700'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Questions */}
      <div className="space-y-3">
        {mfgFaqCategories
          .find((cat) => cat.category === openCategory)
          ?.questions.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenQuestion(openQuestion === faq.q ? null : faq.q)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-700 shrink-0 transition-transform duration-300 ${
                    openQuestion === faq.q ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestion === faq.q ? 'max-h-60 pb-5' : 'max-h-0'
                }`}
              >
                <p className="px-6 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
