const items = [
  { emoji: '🔗', title: 'Everything Connects', text: 'From a video to your plate—imports, plans, groceries, and tracking live in one place.' },
  { emoji: '👥', title: 'Real Food, Real People', text: 'Follow creators you trust and cook food you actually want to eat.' },
  { emoji: '🧠', title: 'AI That Actually Helps', text: 'Snap a photo to estimate macros, auto-log ingredients, and spot patterns over time.' },
  { emoji: '🎨', title: 'Your Kitchen, Your Rules', text: 'Keep your favorites, swap ingredients, set your goals—no one-size-fits-all.' },
  { emoji: '💪', title: 'Built for Results', text: 'Save time, waste less, and make steady progress without restriction.' },
]

export default function Differentiators() {
  return (
    <section className="py-20 bg-orange-50" aria-labelledby="why">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 id="why" className="text-3xl sm:text-4xl font-extrabold text-gray-900">The Missing Link Between Inspiration and Action</h2>
          <p className="mt-3 text-lg text-gray-700">We're not another recipe app. We're not another tracking app. We're the missing link between the two.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="bg-white/70 backdrop-blur border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-4xl">{it.emoji}</div>
              <h3 className="mt-3 text-xl font-bold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
