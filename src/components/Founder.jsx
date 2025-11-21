export default function Founder() {
  return (
    <section className="py-20" aria-labelledby="founder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-orange-50/60 border border-orange-100 rounded-3xl p-8">
          <div>
            <h2 id="founder" className="text-3xl sm:text-4xl font-extrabold text-gray-900">Why I Built Safran</h2>
            <p className="mt-4 text-2xl font-semibold text-gray-800">“I kept losing balance.”</p>
            <p className="mt-4 text-gray-700 leading-relaxed">I loved cooking, but the gap between inspiration and real meals kept growing. Screenshots everywhere. Groceries wasted. Tracking that took longer than dinner. Safran is my answer: a warm, honest tool that connects the dots and makes better choices feel easy.</p>
            <p className="mt-6 font-semibold text-gray-900">— Assia, Founder</p>
          </div>
          <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-orange-100 bg-white shadow">
            <img src="/placeholder-founder.webp" alt="Founder of Safran in the kitchen" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
