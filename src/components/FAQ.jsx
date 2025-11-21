import { useState } from 'react'

const faqs = [
  { q: 'How is Safran different from Pinterest or Instagram?', a: 'Safran connects inspiration to action. Import from social, plan your week, generate groceries, and track nutrition in one place.' },
  { q: 'Do I need to manually log my meals?', a: 'No. Pro includes photo-based logging with AI-estimated macros so you can track in ~30 seconds.' },
  { q: "What's included in the free plan?", a: 'Save and organize unlimited recipes, basic planning, and link imports.' },
  { q: 'What do I get with Pro?', a: 'Advanced planning, smart grocery lists, personalized goals, and AI-powered tracking with insights.' },
  { q: 'Can I import recipes from anywhere?', a: 'Yes. Add from Instagram, TikTok, and links. Creator partners provide structured recipes for best results.' },
  { q: "What if I don't like it?", a: 'Cancel anytime. 30-day money-back guarantee on annual plans.' },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-orange-100 py-4">
      <button className="w-full text-left flex items-center justify-between" onClick={() => setOpen((v) => !v)}>
        <span className="font-semibold text-gray-900">{q}</span>
        <span className="text-orange-600">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-2 text-gray-600">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-20" aria-labelledby="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="faq" className="text-3xl sm:text-4xl font-extrabold text-gray-900">Questions? Answered.</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div>
            {faqs.slice(0, 3).map((f) => <Item key={f.q} {...f} />)}
          </div>
          <div>
            {faqs.slice(3).map((f) => <Item key={f.q} {...f} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
