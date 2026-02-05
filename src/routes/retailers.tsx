import { createFileRoute } from '@tanstack/react-router'
import {
  Zap,
  TrendingUp,
  Eye,
  Palette,
  Settings2,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/retailers')({ component: RetailersPage })

function RetailersPage() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Rapid Deal Closure',
      description:
        'Paperless applications under 10 minutes with $1 million approvals. Accelerate deals and cut admin overhead.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Better Grower Outcomes',
      description:
        'Fast capital boosts grower yields and profits, drives early season sales, and eases farmer cash-flow strain.',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Control & Transparency',
      description:
        'Trackable grower links, real-time credit scoring and dealer-controlled approvals keep you in charge.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Branded, Seamless Experience',
      description:
        'White-label portal showcases your brand, boosting loyalty and recognition with every interaction.',
    },
    {
      icon: <Settings2 className="w-8 h-8" />,
      title: 'Flexible Programs',
      description:
        'Offer up to 12 financing programs by crops, seasonal needs, or customer segments.',
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-4 block">
            For Retailers
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Everything you need to{' '}
            <span className="text-emerald-600">grow</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Our platform gives agricultural dealers the competitive edge to win
            more business and deliver exceptional service.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-center text-white">
              <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
              <p className="text-emerald-100 mb-6">
                Join the fastest growing ag financing platform and start closing
                deals today.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors w-fit"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Sign Up',
                desc: 'Complete our quick onboarding process and get your white-label portal.',
              },
              {
                step: '02',
                title: 'Share Links',
                desc: 'Send trackable financing links to your customers with your branding.',
              },
              {
                step: '03',
                title: 'Close Deals',
                desc: 'Watch approvals come in real-time and close more sales, faster.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-black text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
