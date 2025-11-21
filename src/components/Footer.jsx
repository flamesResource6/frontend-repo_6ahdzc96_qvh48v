export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-5 gap-10">
        <div>
          <div className="font-extrabold text-white text-xl">SAFRAN</div>
          <p className="mt-2 text-sm">Food that connects.</p>
          <a href="mailto:hello@safran.app" className="mt-3 inline-block text-sm text-orange-400 hover:text-orange-300">hello@safran.app</a>
        </div>
        <div>
          <div className="font-semibold text-white">Product</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#how" className="hover:text-white">How It Works</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#creators" className="hover:text-white">For Creators</a></li>
            <li><a href="#" className="hover:text-white">Import Recipe</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#founder" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Press Kit</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Legal</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Connect</div>
          <div className="mt-3 flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">IG</a>
            <a href="#" aria-label="TikTok" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">TT</a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">X</a>
            <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">YT</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm">© 2025 Safran. All rights reserved.</div>
    </footer>
  )
}
