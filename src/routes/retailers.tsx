import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { asset } from '@/lib/asset'

export const Route = createFileRoute('/retailers')({ component: RetailersPage })

function RetailersPage() {
  const [activeTab, setActiveTab] = useState<'growers' | 'business'>('growers')

  return (
    <div className="min-h-screen bg-[#f7faf5] overflow-x-hidden">
      {/* ============ HERO ============ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={asset('hero-bg.png')} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 pt-32 pb-20">
          <span className="text-sm font-semibold text-emerald-400 tracking-widest uppercase mb-4 block">
            For Retailers
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-3xl">
            Grow Your Business with CFi
          </h1>
          <p className="text-lg sm:text-xl text-white/90 font-light mb-10 max-w-xl leading-relaxed">
            Tap into new purchasing power from growers by offering flexible financing on crop inputs 
            through CFi. Enable growers to buy now and pay over time — driving higher adoption and 
            larger orders for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-base font-semibold rounded-lg transition-all shadow-lg shadow-emerald-600/30"
          >
            Sign Up
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ============ TABBED SECTION: CFi FOR GROWERS / CFi FOR YOUR BUSINESS ============ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f7faf5]">
        <div className="max-w-4xl mx-auto">
          {/* Tab buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-[#dde6d5] rounded-full p-1">
              <button
                onClick={() => setActiveTab('growers')}
                className={`px-6 sm:px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                  activeTab === 'growers'
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                CFi for Growers
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`px-6 sm:px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                  activeTab === 'business'
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                CFi for Your Business
              </button>
            </div>
          </div>

          {/* Tab content */}
          {activeTab === 'growers' ? (
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                CFi for <span className="text-emerald-700">Growers</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-4xl mx-auto">
                Growers can finance seeds, fertilizer, crop protection, and other essential crop inputs for their business.
              </p>
              <div className="text-left space-y-6 mb-10">
                {[
                  { title: 'Buy what you need', desc: 'Purchase from preferred suppliers with clear, transparent financing terms and flexible repayment options of up to 18 months.' },
                  { title: 'Pay on your schedule', desc: 'Payments can be made at any time during the term, giving growers flexibility to manage cash flow around the season.' },
                  { title: 'Apply in minutes', desc: 'Complete a simple digital application and receive a fast credit decision so orders can move forward without delay.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-emerald-600 mt-1 font-bold text-lg">&#10003;</span>
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
              >
                Sign Up
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ) : (
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                CFi for Your <span className="text-emerald-700">Business</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Simple, seamless integration that puts financing at the point of sale.
              </p>
              <div className="text-left space-y-6 mb-10">
                {[
                  { title: 'Grower applies quickly', desc: 'Farmers can apply through our online platform with minimal friction.' },
                  { title: 'You get financed orders', desc: 'CFi provides payment to you while the grower pays over time.' },
                  { title: 'Data & insights included', desc: 'Use our dashboard to track performance, adoption, and ROI.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-emerald-600 mt-1 font-bold text-lg">&#10003;</span>
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
              >
                Sign Up
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ============ CFi IN ACTION CAROUSEL ============ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#dde6d5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-emerald-700 tracking-widest uppercase mb-4 block">
              CFi in Action
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              How It <span className="text-emerald-700">Works</span>
            </h2>
          </div>
          <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:overflow-visible sm:snap-none">
            {[
              { step: '01', title: 'Apply in Minutes', desc: 'Growers complete a simple digital application in just 5 minutes.' },
              { step: '02', title: 'Get Fast Approval', desc: 'Quick review and approval so growers can access funds without delay.' },
              { step: '03', title: 'Choose a Payment Plan', desc: 'Flexible repayment terms up to 18 months, aligned with farm cash flow and order size.' },
              { step: '04', title: 'Purchase and Grow', desc: 'Growers place orders with you, receive their products, and pay over time with manageable, transparent installments.' },
              { step: '05', title: 'One Retail Portal', desc: 'Access all grower applications, approvals, credit status, and transactions in a single CFi dashboard — branded for your business.' },
            ].map((item, i) => (
              <div key={i} className="shrink-0 w-[75vw] sm:w-auto snap-start bg-white rounded-xl p-6 shadow-md flex flex-col">
                <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f7faf5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-emerald-700 tracking-widest uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              What Our Partners <span className="text-emerald-700">Say</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-emerald-600">
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "Reliable support and real results every time. The team at CFi is incredibly responsive 
                and deeply understands the retail landscape. We've seen increased repeat orders and happier customers."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-emerald-700 font-bold text-sm">RC</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Retail Customer</p>
                  <p className="text-gray-400 text-xs">Agricultural Retailer</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-emerald-600">
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "A growth partner, not just a service provider. Working with CFi has been transformational 
                for our business. Their insights are data-driven and always actionable. Highly recommended!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-emerald-700 font-bold text-sm">DP</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Dealer Partner</p>
                  <p className="text-gray-400 text-xs">Ag Input Dealer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#dde6d5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked <span className="text-emerald-700">Questions</span>
            </h2>
            <p className="text-gray-600 mt-3">
              Quickly find answers to your questions about getting started and selling with CFi.
            </p>
          </div>
          <RetailerFaq />
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 bg-[#f7faf5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ag Finance. <span className="text-emerald-700">Delivered.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Ready to grow your business? Get started today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

const faqCategories = [
  {
    category: 'Getting Started',
    questions: [
      { q: 'How do I get started with CFi?', a: 'Sign up through our platform and a member of our team will walk you through the onboarding process. We provide a branded retailer portal out of the box.' },
      { q: 'What information do I need to sign up?', a: 'Basic business information and your dealer details. The process takes just a few minutes and there are no upfront costs.' },
      { q: 'Is there a cost to join CFi?', a: 'Sign-up is free with simple, transparent pricing. No hidden fees — you only pay when financing is used.' },
    ],
  },
  {
    category: 'For Growers',
    questions: [
      { q: 'How do growers apply for financing?', a: 'Growers complete a simple digital application in about 5 minutes through your branded CFi portal. No paperwork required.' },
      { q: 'What can growers finance?', a: 'Seeds, fertilizer, crop protection, biostimulants, nutritionals, and other essential crop inputs.' },
      { q: 'What repayment terms are available?', a: 'Flexible terms up to 18 months. First payment can start in July with subsequent installments spread evenly, matching farm cash flow and seasonal income.' },
      { q: 'How fast is the approval process?', a: 'Growers receive a fast credit decision — often in minutes — so orders can move forward without delay.' },
    ],
  },
  {
    category: 'For Your Business',
    questions: [
      { q: 'When do I get paid?', a: 'CFi provides payment to you while the grower pays over time. You receive same-day funding for financed orders.' },
      { q: 'Is there any credit risk to my business?', a: 'No. CFi carries all credit risk. You receive payment and we manage the entire financing lifecycle.' },
      { q: 'Can I track performance?', a: 'Yes. Our dashboard gives you real-time visibility into applications, approvals, credit status, adoption rates, and ROI.' },
      { q: 'Is the portal branded for my business?', a: 'Absolutely. You get a white-labeled retail portal with all grower applications, approvals, and transactions in one place — branded for your business.' },
    ],
  },
  {
    category: 'Integration & Support',
    questions: [
      { q: 'How does CFi integrate with my systems?', a: 'CFi integrates with your existing CRMs, ERPs, and commerce platforms. Our team handles the setup and most integrations are completed within days.' },
      { q: 'Do I get dedicated support?', a: 'Yes. Every retailer partner is paired with a dedicated account manager for onboarding, tech support, and ongoing optimization.' },
    ],
  },
]

function RetailerFaq() {
  const [openCategory, setOpenCategory] = useState<string>(faqCategories[0].category)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  return (
    <div className="grid md:grid-cols-[240px_1fr] gap-8">
      {/* Category sidebar */}
      <div className="flex md:flex-col gap-2 overflow-x-auto scrollbar-hide md:overflow-visible">
        {faqCategories.map((cat) => (
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
        {faqCategories
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
