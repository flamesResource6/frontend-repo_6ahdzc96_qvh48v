export default function SocialProof() {
  const items = [
    { title: '12,847', desc: 'meals planned this week' },
    { title: '150+', desc: 'food creators sharing recipes' },
    { title: 'Replaces 5 apps', desc: 'Saves, trackers, notes, calendar, grocery lists' },
  ]
  return (
    <section className="py-14 sm:py-16 bg-orange-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-orange-200/70 rounded-2xl bg-white/60 backdrop-blur border border-orange-100">
          {items.map((it, i) => (
            <div key={i} className="p-6 text-center">
              <p className="text-2xl font-extrabold text-gray-900">{it.title}</p>
              <p className="mt-1 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
