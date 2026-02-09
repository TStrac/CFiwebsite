import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { asset } from '@/lib/asset'

export const Route = createFileRoute('/about')({ component: AboutPage })

const allFaqCategories = [
  {
    category: 'About CFi',
    questions: [
      { q: 'What is CFi?', a: 'CFi is a digital agricultural financing platform that enables retailers and manufacturers to offer instant, paperless financing at the point of sale. We provide real-time credit approvals up to $1M with a 2-minute application process.' },
      { q: 'Who can use CFi financing?', a: 'CFi works with agricultural retailers, dealers, and manufacturers across the supply chain. Any ag retailer can offer CFi financing to their grower customers, and manufacturers can embed our financing into their dealer programs.' },
      { q: 'What types of products can be financed?', a: 'CFi supports the full spectrum of agricultural inputs including crop protection, biostimulants, adjuvants, nutritionals, and seed. If it helps crops grow, we can finance it.' },
      { q: 'How do I get started?', a: 'Simply contact our team and we\'ll walk you through the onboarding process. We provide branded retailer and grower portals out of the box, and our team helps integrate financing into your existing CRMs, ERPs, and commerce platforms.' },
    ],
  },
  {
    category: 'For Growers',
    questions: [
      { q: 'How do growers apply for financing?', a: 'Growers complete a simple digital application in about 5 minutes through your branded CFi portal. No paperwork required.' },
      { q: 'What repayment terms are available?', a: 'Flexible terms up to 18 months. First payment can start in July with subsequent installments spread evenly, matching farm cash flow and seasonal income.' },
      { q: 'How fast is the approval process?', a: 'Growers receive a fast credit decision — often in minutes — so orders can move forward without delay.' },
      { q: 'Can payments be made early?', a: 'Yes. Payments can be made at any time during the term, giving growers flexibility to manage cash flow around the season.' },
    ],
  },
  {
    category: 'For Retailers',
    questions: [
      { q: 'When do retailers get paid?', a: 'CFi provides payment to you while the grower pays over time. You receive same-day funding for financed orders.' },
      { q: 'Is there any credit risk to my business?', a: 'No. CFi carries all credit risk. You receive payment and we manage the entire financing lifecycle including collections and servicing.' },
      { q: 'Can I track performance?', a: 'Yes. Our dashboard gives you real-time visibility into applications, approvals, credit status, adoption rates, and ROI.' },
      { q: 'Is the portal branded for my business?', a: 'Absolutely. You get a white-labeled retail portal with all grower applications, approvals, and transactions in one place — branded for your business.' },
      { q: 'Is there a cost to join?', a: 'Sign-up is free with simple, transparent pricing. No hidden fees — you only pay when financing is used.' },
    ],
  },
  {
    category: 'For Manufacturers',
    questions: [
      { q: 'Why should my company partner with CFi?', a: 'As a CFi manufacturer partner, you gain access to our network of 100+ active dealers, SKU-level sales intelligence, category benchmarking, and regional demand heatmaps. You\'ll differentiate at the point of sale with financing that drives volume and loyalty.' },
      { q: 'How does the buy-down program work?', a: 'You select which products benefit from a strategic buy-down, then design tailored interest rates and repayment schedules aligned with seasonality. CFi handles the financing lifecycle while you gain visibility into adoption and performance.' },
      { q: 'What intelligence does CFi provide?', a: 'SKU-level sales tracking, category benchmarking against competitors, and regional movement heatmaps to visualize geographic demand patterns and identify emerging markets.' },
    ],
  },
  {
    category: 'Integration & Support',
    questions: [
      { q: 'How does CFi integrate with existing systems?', a: 'CFi integrates with your existing CRMs, ERPs, and commerce platforms. Our team handles the setup and most integrations are completed within days.' },
      { q: 'Do I get dedicated support?', a: 'Yes. Every partner is paired with a dedicated account manager for onboarding, tech support, and ongoing optimization.' },
      { q: 'How long does onboarding take?', a: 'Most partners are up and running within days. We provide branded portals out of the box and handle the integration work.' },
    ],
  },
]

function FaqHub() {
  const [openCategory, setOpenCategory] = useState<string>(allFaqCategories[0].category)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  return (
    <div className="grid md:grid-cols-[240px_1fr] gap-8">
      {/* Category sidebar */}
      <div className="flex md:flex-col gap-2 overflow-x-auto scrollbar-hide md:overflow-visible">
        {allFaqCategories.map((cat) => (
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
        {allFaqCategories
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

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7faf5] overflow-x-hidden">
      {/* ============ HERO ============ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={asset('soyfield-preview.mp4')} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 pt-32 pb-20">
          <span className="text-sm font-semibold text-emerald-400 tracking-widest uppercase mb-4 block">
            About CFi
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-3xl">
            Empowering Retailers
            <br />
            & Growers
          </h1>
          <p className="text-lg sm:text-xl text-white/90 font-light mb-10 max-w-xl leading-relaxed">
            A comprehensive financing platform transforming how agricultural
            dealers serve their customers.
          </p>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f7faf5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-emerald-700 tracking-widest uppercase mb-4 block">
                Our Mission
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-5">
                Revolutionizing <span className="text-emerald-700">Agricultural Financing</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                CFi Solutions is dedicated to revolutionizing agricultural financing. 
                We believe that access to fast, flexible capital should never be a 
                barrier to growth for farmers and agricultural retailers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our platform combines cutting-edge technology with deep agricultural 
                industry expertise to deliver financing solutions that work for 
                everyone in the supply chain.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Connect With Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={asset('seeder-v2.png')} alt="Agricultural equipment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#dde6d5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-emerald-700 tracking-widest uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything we do at CFi is driven by a commitment to our partners and the agricultural community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Speed',
                desc: 'Time is money in agriculture. We deliver approvals in minutes, not days.',
              },
              {
                title: 'Simplicity',
                desc: 'No paperwork, no hassle. Our 2-minute application changes everything.',
              },
              {
                title: 'Partnership',
                desc: 'We succeed when our dealers and growers succeed. Your growth is our mission.',
              },
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-md">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-emerald-700">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ HUB ============ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f7faf5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-emerald-700 tracking-widest uppercase mb-4 block">
              Support
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked <span className="text-emerald-700">Questions</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Find answers about CFi for growers, retailers, manufacturers, and more.
            </p>
          </div>
          <FaqHub />
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 bg-[#dde6d5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ag Finance. <span className="text-emerald-700">Delivered.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Join the fastest growing ag financing platform and start closing deals today.
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
