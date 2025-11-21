export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50 via-white to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Eat healthier with food you love.
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-700 leading-relaxed">
              Import recipes from Instagram and TikTok. Plan your week. See exactly how meals fit your health goals—all in one app.
            </p>
            <p className="mt-4 text-base text-gray-600">
              Track nutrition with a photo in 30 seconds. Spot eating patterns. Make better choices. No restriction, no juggling apps, no manual logging.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-orange-600 text-white px-6 py-3 text-base font-semibold shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                Start Free
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-full border border-gray-300 text-gray-900 px-6 py-3 text-base font-semibold hover:bg-gray-50">
                See How It Works
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-500">Free forever. No credit card required.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-orange-100/60 via-white to-transparent rounded-3xl blur-2xl -z-10" />
            <div className="aspect-[4/3] w-full rounded-3xl border border-orange-100 bg-white shadow-xl overflow-hidden flex items-center justify-center">
              <img
                src="/placeholder-hero.webp"
                alt="Safran app mockup showing meal planning and recipe import"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
