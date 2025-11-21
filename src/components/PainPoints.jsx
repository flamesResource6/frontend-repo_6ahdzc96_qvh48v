const cards = [
  {
    emoji: '🤔',
    title: 'Decision Paralysis',
    text: 'Infinite recipes, zero dinners. You scroll, save, and still end up ordering out.'
  },
  {
    emoji: '💸',
    title: 'The $40/Week Food Waste Problem',
    text: 'You buy with good intentions, then toss wilted greens by Friday. Ouch.'
  },
  {
    emoji: '📱',
    title: 'Screenshot Chaos',
    text: 'Saved on Instagram, notes in your phone, ingredients in a tab somewhere. Nothing connects.'
  },
  {
    emoji: '😓',
    title: 'Tracking Burnout',
    text: 'Manual logging is a time suck. It works for three days—then life happens.'
  }
]

export default function PainPoints() {
  return (
    <section className="py-20" aria-labelledby="painpoints">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 id="painpoints" className="text-3xl sm:text-4xl font-extrabold text-gray-900">Sound Familiar?</h2>
          <p className="mt-3 text-lg text-gray-700">You're not alone. Here's what makes cooking feel impossible:</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="group bg-white border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl leading-none">{c.emoji}</div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-gray-600">{c.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center italic text-gray-600">Healthy eating shouldn't feel like a second job.</p>
      </div>
    </section>
  )
}
