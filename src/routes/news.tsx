import { createFileRoute } from '@tanstack/react-router'
import { Calendar, ArrowRight } from 'lucide-react'

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
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-4 block">
            Insights & News
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Stay <span className="text-emerald-600">informed</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            The latest news, insights, and updates from CFi and the agricultural financing industry.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-8 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-8 sm:p-12 text-white">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                Featured
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
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

      {/* Articles Grid */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300 cursor-pointer"
              >
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium mb-4">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-500 mb-4 leading-relaxed">
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

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-500 mb-8">
            Get the latest insights and news delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
