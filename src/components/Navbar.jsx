import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'How It Works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'For Creators', href: '#creators' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [open])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'bg-white/90 backdrop-blur border-b border-orange-100 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight text-xl">
          <span className="text-orange-600">SAFRAN</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-orange-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-orange-700 transition-colors">Start Free</a>
        </div>

        <button className="md:hidden p-2 rounded-md hover:bg-orange-50" aria-label="Open menu" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6 text-gray-900" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="h-16 flex items-center justify-between px-4 border-b">
            <span className="font-extrabold text-orange-600 text-xl">SAFRAN</span>
            <button className="p-2 rounded-md hover:bg-orange-50" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-lg font-semibold text-gray-900">
                {item.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="block w-full text-center rounded-full bg-orange-600 text-white px-6 py-3 font-semibold shadow-sm hover:bg-orange-700">Start Free</a>
          </div>
        </div>
      )}
    </header>
  )
}
