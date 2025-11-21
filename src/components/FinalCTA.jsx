export default function FinalCTA() {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700" />
      <div className="absolute inset-0 -z-10 opacity-20" style={{backgroundImage:'radial-gradient(circle at 20% 20%, white 0, transparent 30%), radial-gradient(circle at 80% 30%, white 0, transparent 25%), radial-gradient(circle at 40% 80%, white 0, transparent 25%)'}} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl sm:text-5xl font-extrabold">Ready to Actually Cook What You Save?</h2>
        <p className="mt-4 text-lg sm:text-xl text-orange-50">Join thousands of people who stopped juggling apps and started making real progress.</p>
        <a href="#top" className="mt-8 inline-flex items-center justify-center rounded-full bg-white text-orange-700 px-8 py-4 text-base sm:text-lg font-extrabold shadow hover:bg-orange-50">Start Free — No Credit Card Required</a>
        <p className="mt-3 text-sm text-orange-100">Free forever. Upgrade to Pro anytime. 7-day trial. 30-day guarantee.</p>
      </div>
    </section>
  )
}
