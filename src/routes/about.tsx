import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/about')({ component: AboutPage })

function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-4 block">
            About CFi
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Empowering{' '}
            <span className="text-emerald-600">retailers</span> &{' '}
            <span className="text-emerald-600">growers</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            A comprehensive financing platform transforming how agricultural
            dealers serve their customers. We give you the tools to close
            deals faster, deliver better outcomes, and grow your business.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                CFi Solutions is dedicated to revolutionizing agricultural financing. 
                We believe that access to fast, flexible capital should never be a 
                barrier to growth for farmers and agricultural retailers.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our platform combines cutting-edge technology with deep agricultural 
                industry expertise to deliver financing solutions that work for 
                everyone in the supply chain.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Driving sales velocity & farmer success
              </h3>
              <ul className="space-y-4">
                {[
                  'Real-time credit decisions',
                  'No paperwork required',
                  'Up to $1M instant approvals',
                  'White-label dealer portal',
                  'Multiple financing programs',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />
                    <span className="text-emerald-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The principles that guide everything we do at CFi.
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
              <div key={i} className="bg-white rounded-2xl p-8 text-center border border-gray-100">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-emerald-600">
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

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
            Ready to partner with us?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Join the fastest growing ag financing platform and start closing deals today.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition-colors"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  )
}
