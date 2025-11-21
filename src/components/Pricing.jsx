function Check({ className = '' }) {
  return (
    <svg className={`h-4 w-4 text-green-600 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

const free = {
  title: 'Free',
  price: '$0',
  subtitle: 'Discover and organize recipes',
  features: [
    'Save from Instagram & TikTok',
    'Unlimited recipe organization',
    'Basic meal planning',
    'Import from links',
  ],
}

const pro = {
  title: 'Pro',
  price: '$9.99/mo',
  annual: '$99/year (save $21)',
  subtitle: 'Meal planning + nutrition tracking that actually works',
  groups: [
    { name: 'AI-POWERED TRACKING', items: ['Photo-based meal logging', 'Auto-estimated macros', 'Pattern insights'] },
    { name: 'NUTRITION & GOALS', items: ['Personalized targets', 'Balanced plate guidance', 'Progress trends'] },
    { name: 'MEAL PLANNING', items: ['Weekly templates', 'Smart grocery list', 'Leftover planning'] },
  ],
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-orange-50" aria-labelledby="pricing-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="pricing-title" className="text-3xl sm:text-4xl font-extrabold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="mt-3 text-lg text-gray-700">Start free. Upgrade when you're ready to transform how you eat.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
            <div className="flex items-baseline gap-3">
              <h3 className="text-2xl font-extrabold text-gray-900">{free.title}</h3>
              <span className="text-sm text-gray-500">Forever free</span>
            </div>
            <p className="mt-1 text-4xl font-extrabold text-gray-900">{free.price}</p>
            <p className="mt-2 text-gray-600">{free.subtitle}</p>
            <ul className="mt-6 space-y-2">
              {free.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50">Start Free</a>
            <p className="mt-3 text-xs text-gray-500">Perfect for organizing your inspiration.</p>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl border-2 border-orange-400 bg-white p-6 shadow-lg">
            <span className="absolute -top-3 right-4 rounded-full bg-orange-600 px-3 py-1 text-xs font-bold text-white shadow">Popular</span>
            <div className="flex items-baseline gap-3">
              <h3 className="text-2xl font-extrabold text-gray-900">{pro.title}</h3>
            </div>
            <p className="mt-1 text-4xl font-extrabold text-gray-900">{pro.price}</p>
            <p className="text-sm text-gray-600">{pro.annual}</p>
            <p className="mt-2 text-gray-600">{pro.subtitle}</p>
            <div className="mt-6 space-y-4">
              {pro.groups.map((g) => (
                <div key={g.name}>
                  <h4 className="text-xs font-bold tracking-wide text-orange-600">{g.name}</h4>
                  <ul className="mt-2 space-y-2">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">Start 7-Day Free Trial</a>
            <p className="mt-3 text-xs text-gray-500">💳 No credit card required for free plan · ⚡ Cancel anytime · 🔒 30-day money-back guarantee</p>
          </div>
        </div>
      </div>
    </section>
  )
}
