import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { ArrowRight } from 'lucide-react'
import { asset } from '@/lib/asset'

export const Route = createFileRoute('/')({ component: HomePage })

function AnimatedStat({ num, prefix, suffix, label, delay, text }: { num?: number; prefix?: string; suffix?: string; label: string; delay: number; text?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center"
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-800 whitespace-nowrap">
        {text ? (
          text
        ) : isInView ? (
          <CountUp
            start={0}
            end={num || 0}
            duration={2}
            delay={delay}
            prefix={prefix || ''}
            suffix={suffix || ''}
            useEasing
          />
        ) : (
          <span>{prefix}{0}{suffix}</span>
        )}
      </div>
      <div className="text-sm sm:text-base text-gray-600 mt-2">{label}</div>
    </motion.div>
  )
}

function HomePage() {
  const [currentStat, setCurrentStat] = useState(0)
  const [currentCard, setCurrentCard] = useState(0)
  const introRef = useRef(null)
  const introInView = useInView(introRef, { once: true, margin: '-80px' })

  const mobileStats = [
    { value: '$800M+', label: 'Financing Enabled Annually' },
    { value: '100+', label: 'Ag Retail Partners' },
    { value: 'Up to $1M', label: 'Instant Credit Approvals' },
    { value: '<10Min.', label: 'Paperless Application Time' },
    { value: 'Same-Day', label: 'Funding Capability' },
  ]

  const categories = [
    { label: 'Crop Protection', img: asset('stock-photo-spraying-machine-working-on-the-green-field-232741255.jpg') },
    { label: 'Biostimulants', img: asset('biostimulants.png') },
    { label: 'Adjuvants', img: asset('stock-photo-rice-is-a-useful-grain-that-is-an-agricultural-crop-that-thai-people-grow-in-large-numbers-for-2401627057.jpg') },
    { label: 'Nutritionals', img: asset('nutritionals.png') },
    { label: 'Seed', img: asset('seed.png') },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % mobileStats.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [mobileStats.length])

  const infoCards = [
    { img: asset('carousel-corn-leaves.png'), title: 'How It', accent: 'Works.', items: [
      { bold: 'Embedded at Point of Sale', desc: 'Financing built directly into manufacturer programs.' },
      { bold: 'Instant Application', desc: 'Growers apply digitally in minutes.' },
      { bold: 'Immediate Approval & Funding', desc: 'Complete purchases without delays.' },
      { bold: 'Intelligence & Optimization', desc: 'Real-time data powers smarter decisions.' },
    ]},
    { img: asset('carousel-corn-cob.png'), title: 'The Fastest, Most Flexible', accent: 'Ag Financing Platform.', items: [
      { bold: 'Lightning Speed', desc: 'Less than 10 minutes to apply with no tax returns required.' },
      { bold: 'Instant Decisions', desc: 'Instant approvals up to $1M with same-day funding capability.' },
      { bold: 'Seamless Integration', desc: 'Embedded directly into existing retailer and manufacturer.' },
    ]},
    { img: asset('carousel-farmer.png'), title: 'Turn Financing Into Your', accent: 'Competitive Advantage.', cta: true, items: [
      { bold: 'Point of Sale Financing', desc: 'Enable ag retailers and merchants to offer or embed financing directly at checkout.' },
      { bold: 'Branded Portals', desc: 'Retailer and grower portals come out of the box, white-labeled for your business.' },
      { bold: 'CRM & ERP Integration', desc: 'Our team helps integrate financing into your CRMs, ERPs, and commerce websites.' },
    ]},
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % infoCards.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [infoCards.length])

  return (
    <div className="min-h-screen bg-[#f7faf5] overflow-x-hidden">
      {/* ============ HERO SECTION ============ */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={asset('teavalley-preview.mp4')} type="video/mp4" />
          </video>
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

      {/* ============ INTRO + STATS COMBINED ============ */}
      <section className="bg-[#dde6d5] pt-20 md:pt-28 pb-12 md:pb-16 px-4 sm:px-6" ref={introRef}>
        <div className="max-w-6xl mx-auto">
          {/* Two-column: text left, image right */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-semibold text-emerald-700 tracking-widest uppercase mb-4 block">
                Why CFi?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-5">
                A Digital Financing Platform At The Intersection Of{' '}
                <span className="text-emerald-800 font-extrabold">Fintech And Agriculture</span>
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-600 leading-relaxed mb-8"
              >
                Instant, paperless financing at the point of sale — connecting 
                manufacturers, retailers, and growers to accelerate purchasing 
                and unlock early-season demand.
              </motion.p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Connect With Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10 aspect-[4/3]">
                <img
                  src={asset('seeder-v2.png')}
                  alt="Agricultural seeder in field"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          {/* Mobile/Tablet: auto-cycling */}
          <div className="lg:hidden">
            <div className="flex flex-col items-center text-center min-h-[80px]">
              <div 
                key={currentStat}
                className="animate-fade-in flex flex-col items-center"
              >
                <div className="text-4xl font-black text-emerald-800">{mobileStats[currentStat].value}</div>
                <div className="text-sm text-gray-600 mt-2">{mobileStats[currentStat].label}</div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {mobileStats.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentStat(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentStat ? 'bg-emerald-700' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: 5-column, otherwise mobile carousel */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-8 border-t border-emerald-800/20 pt-12">
            <AnimatedStat num={800} prefix="$" suffix="M+" label="Financing Enabled Annually" delay={0} />
            <AnimatedStat num={100} suffix="+" label="Ag Retail Partners" delay={0.15} />
            <AnimatedStat num={1} prefix="Up to $" suffix="M" label="Instant Credit Approvals" delay={0.3} />
            <AnimatedStat num={10} prefix="<" suffix=" Min." label="Paperless Application Time" delay={0.45} />
            <AnimatedStat text="Same-Day" label="Funding Capability" delay={0.6} />
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={introInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-center text-lg sm:text-xl md:text-2xl font-bold text-emerald-800 mt-10"
          >
            CFi Isn't Just Financing. It's The Future Of Ag Commerce.
          </motion.p>
        </div>
      </section>


      {/* ============ INFO CAROUSEL ============ */}
      <section className="pt-10 md:pt-14 pb-14 md:pb-18 bg-[#f7faf5]">
        {/* Small screens: auto-cycling single card */}
        <div className="lg:hidden px-6 sm:px-12">
          <div className="max-w-sm mx-auto">
            <div key={currentCard} className="animate-fade-in bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-52 overflow-hidden">
                <img src={infoCards[currentCard].img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="px-7 py-7">
                <h3 className="text-xl font-bold text-gray-900 mb-5">
                  {infoCards[currentCard].title} <span className="text-emerald-700 italic">{infoCards[currentCard].accent}</span>
                </h3>
                <ul className="space-y-4">
                  {infoCards[currentCard].items.map((li, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-gray-400 text-sm mt-0.5">&#10003;</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{li.bold}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{li.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                {'cta' in infoCards[currentCard] && (
                  <Link to="/contact" className="inline-flex items-center justify-center mt-6 px-6 py-3 border-2 border-gray-900 text-gray-900 text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-gray-900 hover:text-white transition-all">
                    Connect With Our Team
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {infoCards.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentCard(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentCard ? 'bg-emerald-700' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Large screens: 3-column grid */}
        <div className="hidden lg:flex gap-6 px-6 sm:px-12 lg:px-16 pb-4 justify-center">
          {infoCards.map((card, i) => (
            <div key={i} className="w-[31%] bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src={card.img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="px-7 py-7">
                <h3 className="text-xl font-bold text-gray-900 mb-5">
                  {card.title} <span className="text-emerald-700 italic">{card.accent}</span>
                </h3>
                <ul className="space-y-4">
                  {card.items.map((li, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-gray-400 text-sm mt-0.5">&#10003;</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{li.bold}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{li.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                {'cta' in card && (
                  <Link to="/contact" className="inline-flex items-center justify-center mt-6 px-6 py-3 border-2 border-gray-900 text-gray-900 text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-gray-900 hover:text-white transition-all">
                    Connect With Our Team
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CATEGORIES HEADER ============ */}
      <section className="pt-8 md:pt-12 pb-4 px-4 sm:px-6 bg-[#f7faf5]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 text-center">
          Supporting The Full Spectrum Of <span className="text-emerald-800 font-bold italic">Agricultural Inputs.</span>
        </h2>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-[#f7faf5]">
        <div className="max-w-6xl mx-auto">
          {/* Small screens: 3 over 2 layout */}
          <div className="lg:hidden flex flex-col items-center gap-4">
            {/* Top row: 3 across */}
            <div className="flex justify-center gap-4">
              {categories.slice(0, 3).map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center w-[28vw] sm:w-[22vw]"
                >
                  <div className="w-full aspect-[5/6] rounded-2xl overflow-hidden mb-2 group cursor-pointer">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover scale-[1.02]" />
                  </div>
                  <span className="text-gray-900 font-medium text-xs sm:text-sm text-center">{item.label}</span>
                </motion.div>
              ))}
            </div>
            {/* Bottom row: 2 centered below */}
            <div className="flex justify-center gap-4">
              {categories.slice(3, 5).map((item, i) => (
                <motion.div
                  key={i + 3}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i + 3) * 0.1 }}
                  className="flex flex-col items-center w-[28vw] sm:w-[22vw]"
                >
                  <div className="w-full aspect-[5/6] rounded-2xl overflow-hidden mb-2 group cursor-pointer">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover scale-[1.02]" />
                  </div>
                  <span className="text-gray-900 font-medium text-xs sm:text-sm text-center">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Large screens: 5-column grid */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6">
            {categories.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-full aspect-[5/6] rounded-2xl overflow-hidden mb-4 group cursor-pointer">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 scale-[1.02]"
                  />
                </div>
                <span className="text-gray-900 font-medium text-sm sm:text-base text-center">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOR RETAILERS ============ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#dde6d5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={asset('retailer-hero.png')} alt="For Retailers" className="w-full h-full object-cover" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="text-sm font-semibold text-emerald-700 tracking-widest uppercase mb-3 block">
                For Retailers
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-5">
                Grow Sales With <span className="text-emerald-700">Embedded Financing</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Offer your customers instant credit at the point of sale. CFi's platform integrates 
                seamlessly into your workflow — boosting cart size, attracting new growers, and 
                locking in loyalty with zero credit risk to you.
              </p>
              <ul className="space-y-3 mb-8">
                {['Increase average order value', 'Attract credit-seeking growers', 'Same-day funding for every sale', 'White-label dealer portal'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-emerald-600">&#10003;</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/retailers"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ FOR MANUFACTURERS ============ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f7faf5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <span className="text-sm font-semibold text-emerald-700 tracking-widest uppercase mb-3 block">
                For Manufacturers
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-5">
                Accelerate Sales Through <span className="text-emerald-700">Your Dealer Network</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Embed CFi financing directly into your manufacturer programs. Drive early-season 
                purchasing, strengthen retailer relationships, and give your channel partners a 
                powerful tool to move more product.
              </p>
              <ul className="space-y-3 mb-8">
                {['Drive early-season demand', 'Strengthen dealer relationships', 'Branded financing programs', 'Real-time portfolio analytics'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-emerald-600">&#10003;</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/manufacturers"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl overflow-hidden shadow-lg order-1 md:order-2"
            >
              <img src={asset('manufacturer-hero.png')} alt="For Manufacturers" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 bg-[#dde6d5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ag Finance. <span className="text-emerald-700">Delivered.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Join the fastest growing ag financing platform. Get started today and 
            see the difference CFi can make for your business.
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
