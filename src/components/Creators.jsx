export default function Creators() {
  return (
    <section id="creators" className="py-20" aria-labelledby="creators-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 id="creators-title" className="text-3xl sm:text-4xl font-extrabold text-gray-900">For Creators</h2>
            <p className="mt-4 text-lg text-gray-700">Turn views into dinners. Safran connects your posts to structured recipes, grocery lists, and real results—so your audience actually cooks what you share.</p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Import directly from social posts</li>
              <li>• Keep attribution and links</li>
              <li>• Help fans plan and track effortlessly</li>
            </ul>
          </div>
          <div className="aspect-[4/3] rounded-2xl border border-orange-100 bg-white shadow flex items-center justify-center text-gray-500">
            <span className="text-sm">Creator tools preview</span>
          </div>
        </div>
      </div>
    </section>
  )
}
