'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/results', label: 'Results' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6">
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
        className="md:hidden font-mono text-xs tracking-widest uppercase text-[#EDE8DF]/60"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Close' : 'Menu'}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-[#0D0B09] z-40 flex flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display font-extrabold text-5xl uppercase text-[#EDE8DF] hover:text-[#E8632A] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
