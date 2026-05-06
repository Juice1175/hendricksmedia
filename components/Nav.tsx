'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/results', label: 'Results' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''}`}
    >
      <Link href="/" className="font-display font-extrabold text-xl uppercase tracking-widest text-[#EDE8DF] hover:text-[#E8632A] transition-colors">
        HendricksMedia
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-1 border border-[#EDE8DF]/20 px-4 py-2">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`font-mono text-xs tracking-widest uppercase px-3 py-1 transition-colors ${
              pathname === l.href ? 'text-[#E8632A]' : 'text-[#EDE8DF]/60 hover:text-[#E8632A]'
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden font-mono text-xs tracking-widest uppercase text-[#EDE8DF]/60 hover:text-[#E8632A] transition-colors"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? 'Close' : 'Menu'}
      </button>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[#0D0B09] z-40 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display font-extrabold text-5xl uppercase text-[#EDE8DF] hover:text-[#E8632A] transition-colors"
            style={{
              transform: open ? 'translateY(0)' : 'translateY(20px)',
              opacity: open ? 1 : 0,
              transition: `transform 0.35s ease ${i * 0.07}s, opacity 0.35s ease ${i * 0.07}s`,
            }}
          >
            {l.label}
          </Link>
        ))}

        {/* Social links in mobile menu */}
        <div className="flex gap-6 mt-4" style={{
          opacity: open ? 1 : 0,
          transition: 'opacity 0.35s ease 0.32s',
        }}>
          <a
            href="https://www.facebook.com/HendricksMediaOK"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-[#EDE8DF]/30 hover:text-[#E8632A] transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/hendricksmedia.ok"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-[#EDE8DF]/30 hover:text-[#E8632A] transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </header>
  )
}
