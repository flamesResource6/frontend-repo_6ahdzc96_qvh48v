const steps = [
  { no: '01', title: 'Discover & Plan', text: 'Import from Instagram or TikTok. Drag recipes onto your week. Your plan builds itself.' },
  { no: '02', title: 'Shop & Cook', text: 'Auto-generate a smart grocery list. Swap ingredients, scale servings, and get cooking.' },
  { no: '03', title: 'Track & Thrive', text: 'Snap a photo to log in 30 seconds, then see how your meals align with your goals.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20" aria-labelledby="how-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 id="how-title" className="text-3xl sm:text-4xl font-extrabold text-gray-900">Three Steps. One App. Zero Friction.</h2>
          <p className="mt-3 text-lg text-gray-700">From discovery to dinner in minutes, not hours.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6 relative">
          {steps.map((s, idx) => (
            <div key={s.no} className="bg-white border border-orange-100 rounded-2xl p-6 shadow-sm">
              <div className="text-sm font-bold text-orange-600">{s.no}</div>
              <h3 className="mt-2 text-xl font-bold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
