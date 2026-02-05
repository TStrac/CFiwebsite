import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/manufacturers')({ component: ManufacturersPage })

function ManufacturersPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-4 block">
            For Manufacturers
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Expand your{' '}
            <span className="text-emerald-600">reach</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Help your dealer network offer financing that drives volume, builds
            loyalty, and accelerates your products into the hands of growers.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Increase Volume',
                desc: 'Dealers with financing options sell more product, faster. Empower your network with the tools they need.',
              },
              {
                title: 'Strengthen Loyalty',
                desc: 'Branded financing programs keep your dealer network engaged and committed to your products.',
              },
              {
                title: 'Simplify Programs',
                desc: 'One platform to manage all your dealer financing programs. No more spreadsheets or manual tracking.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center bg-white rounded-2xl p-8 border border-gray-100">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-black text-emerald-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                Power your dealer network
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                CFi provides manufacturers with a turnkey financing solution that 
                integrates seamlessly with your existing dealer relationships. 
                Track performance, manage programs, and grow sales—all from one platform.
              </p>
              <ul className="space-y-4">
                {[
                  'Centralized program management',
                  'Real-time performance analytics',
                  'Customizable financing terms',
                  'Dedicated account support',
                  'Co-branded marketing materials',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Partner Benefits
              </h3>
              <p className="text-emerald-100 mb-6">
                Join leading agricultural manufacturers who trust CFi to power 
                their dealer financing programs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-black text-white mb-1">30%</div>
                  <div className="text-emerald-200 text-sm">Average sales increase</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">2x</div>
                  <div className="text-emerald-200 text-sm">Dealer engagement</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">100+</div>
                  <div className="text-emerald-200 text-sm">Active dealers</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">$50M+</div>
                  <div className="text-emerald-200 text-sm">Financed annually</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
            Ready to empower your dealers?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Schedule a demo to see how CFi can help you grow your dealer network and increase sales.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition-colors"
          >
            Schedule a Demo
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  )
}
