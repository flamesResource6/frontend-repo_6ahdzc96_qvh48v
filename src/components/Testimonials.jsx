const items = [
  { quote: 'I finally cooked my saved recipes. 487 and counting.', name: 'Maya L.', role: 'Home Cook' },
  { quote: 'Photo tracking is the only way I stick with it.', name: 'James K.', role: 'Fitness Coach' },
  { quote: 'Groceries cost less because I actually use what I buy.', name: 'Alex M.', role: 'Parent of 3' },
  { quote: 'My audience can actually cook my posts now.', name: 'Priya S.', role: 'Food Creator · 127K' },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-orange-50" aria-labelledby="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="testimonials" className="text-3xl sm:text-4xl font-extrabold text-gray-900">What People Are Saying</h2>
          <p className="mt-3 text-lg text-gray-700">From our early access community.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
              <blockquote className="text-gray-800 italic">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">— {t.name}, {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
