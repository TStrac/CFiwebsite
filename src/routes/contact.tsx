import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { asset } from '@/lib/asset'

export const Route = createFileRoute('/contact')({ component: ContactPage })

function ContactPage() {
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
            <source src={asset('contact-hero-video.mp4')} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 pt-32 pb-20">
          <span className="text-sm font-semibold text-emerald-400 tracking-widest uppercase mb-4 block">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-3xl">
            Let's Talk
          </h1>
          <p className="text-lg sm:text-xl text-white/90 font-light mb-10 max-w-xl leading-relaxed">
            Ready to transform your agricultural financing? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* ============ CONTACT FORM & INFO ============ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f7faf5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    I am a...
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500 transition-colors bg-white">
                    <option value="">Select an option</option>
                    <option value="retailer">Retailer / Dealer</option>
                    <option value="manufacturer">Manufacturer</option>
                    <option value="grower">Grower / Farmer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <span className="text-sm font-semibold text-emerald-700 tracking-widest uppercase mb-4 block">
                  Get In Touch
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  We'd Love to <span className="text-emerald-700">Hear From You</span>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Have questions about our financing solutions? Our team is here to help. 
                  Reach out via phone, email, or fill out the form and we'll get back to you 
                  within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:8449220272"
                  className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <div className="text-gray-500">(844) 922-0272</div>
                  </div>
                </a>

                <a
                  href="mailto:info@cfi.ag"
                  className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <div className="text-gray-500">info@cfi.ag</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Office</div>
                    <div className="text-gray-500">
                      United States — Serving dealers nationwide
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-[#dde6d5] rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-900 font-medium">8:00 AM - 6:00 PM CT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-900 font-medium">9:00 AM - 1:00 PM CT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-900 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
