import { createFileRoute, Link } from '@tanstack/react-router'
import { Calendar, ArrowRight } from 'lucide-react'
import { asset } from '@/lib/asset'

export const Route = createFileRoute('/news')({ component: NewsPage })

function NewsPage() {
  const articles = [
    {
      date: 'Feb 1, 2026',
      category: 'Company News',
      title: 'CFi Reaches $100M in Agricultural Financing',
      excerpt: 'A major milestone as we continue to grow our impact on agricultural communities across the nation.',
      featured: true,
    },
    {
      date: 'Jan 15, 2026',
      category: 'Industry Insights',
      title: 'The Future of Agricultural Financing',
      excerpt: 'How technology is transforming the way farmers access capital and grow their operations.',
      featured: false,
    },
    {
      date: 'Jan 8, 2026',
      category: 'Product Update',
      title: 'New Mobile App Launch',
      excerpt: 'Apply for financing on the go with our new mobile application, available on iOS and Android.',
      featured: false,
    },
    {
      date: 'Dec 20, 2025',
      category: 'Partnership',
      title: 'CFi Partners with Major Seed Manufacturer',
      excerpt: 'Expanding our reach to serve more dealers and growers with flexible financing options.',
      featured: false,
    },
    {
      date: 'Dec 10, 2025',
      category: 'Industry Insights',
      title: '5 Ways Financing Helps Farmers Succeed',
      excerpt: 'Understanding the impact of accessible capital on farm profitability and growth.',
      featured: false,
    },
    {
      date: 'Nov 28, 2025',
      category: 'Company News',
      title: 'CFi Expands to 15 New States',
      excerpt: 'Our platform is now available to dealers and growers in more regions than ever before.',
      featured: false,
    },
  ]

  const featuredArticle = articles.find(a => a.featured)
  const regularArticles = articles.filter(a => !a.featured)

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
            <source src={asset('news-hero-video.mp4')} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 pt-32 pb-20">
          <span className="text-sm font-semibold text-emerald-400 tracking-widest uppercase mb-4 block">
            Insights & News
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-3xl">
            Stay Informed
          </h1>
          <p className="text-lg sm:text-xl text-white/90 font-light mb-10 max-w-xl leading-relaxed">
            The latest news, insights, and updates from CFi and the agricultural financing industry.
          </p>
        </div>
      </section>

      {/* ============ FEATURED ARTICLE ============ */}
      {featuredArticle && (
        <section className="py-12 px-4 sm:px-6 bg-[#f7faf5]">
          <div className="max-w-6xl mx-auto">
            <div className="bg-emerald-800 rounded-2xl p-8 sm:p-12 text-white">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                Featured
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {featuredArticle.title}
              </h2>
              <p className="text-emerald-100 text-lg mb-6 max-w-2xl">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-emerald-200 text-sm">
                  <Calendar className="w-4 h-4" />
                  {featuredArticle.date}
                </span>
                <span className="text-emerald-200 text-sm">
                  {featuredArticle.category}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============ ARTICLES GRID ============ */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-[#f7faf5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium mb-4">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-500 mb-4 leading-relaxed text-sm">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <ArrowRight className="w-5 h-5 text-emerald-600" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER CTA ============ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#dde6d5]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest insights and news delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500 bg-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
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
