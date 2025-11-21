const cases = [
  { emoji: '📅', title: 'Weekly Meal Planners', text: 'Design your week once. Reuse it with a tap when life gets busy.' },
  { emoji: '🎯', title: 'Health & Fitness Goals', text: 'Protein targets, fiber goals, and balanced plates without obsession.' },
  { emoji: '🥘', title: 'Budget-Conscious Cooks', text: 'Waste less with smart leftovers and grocery lists that actually match your plan.' },
  { emoji: '✨', title: 'Recipe Explorers', text: 'Save from anywhere. Cook the stuff you actually crave.' },
]

export default function UseCases() {
  return (
    <section className="py-20" aria-labelledby="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 id="use-cases" className="text-3xl sm:text-4xl font-extrabold text-gray-900">However You Eat, Safran Adapts</h2>
          <p className="mt-3 text-lg text-gray-700">Whether you're meal prepping or tracking macros, Safran works the way you do.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="bg-white border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-5xl">{c.emoji}</div>
              <h3 className="mt-3 text-lg font-bold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-gray-600">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
