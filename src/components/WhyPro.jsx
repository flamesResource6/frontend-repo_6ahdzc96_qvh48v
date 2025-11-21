const items = [
  { emoji: '⚡', title: '3+ Hours Back Every Week', text: 'Stop context-switching. Plan once, cook more, and reclaim your evenings.' },
  { emoji: '💰', title: '$160+ Saved Monthly', text: 'Waste less food and shop smarter with lists that match your plan.' },
  { emoji: '🎯', title: 'Consistent Progress Without Restriction', text: 'Awareness over obsession—see the big picture without manual logging.' },
]

export default function WhyPro() {
  return (
    <section className="py-20" aria-labelledby="why-pro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="why-pro" className="text-3xl sm:text-4xl font-extrabold text-gray-900">Why People Upgrade</h2>
          <p className="mt-3 text-lg text-gray-700">Real outcomes from real users.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-orange-100 bg-gradient-to-br from-white to-orange-50 p-6 shadow-sm">
              <div className="text-5xl">{it.emoji}</div>
              <h3 className="mt-3 text-xl font-bold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
