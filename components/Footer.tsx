import Link from 'next/link'

const navLinks = ['/services', '/about', '/results', '/contact']

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 px-8 md:px-16 lg:px-24 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <span className="font-display font-extrabold text-lg uppercase tracking-widest text-[#EDE8DF]/40">
          HendricksMedia
        </span>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {navLinks.map((href) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-xs tracking-widest uppercase text-[#EDE8DF]/30 hover:text-[#E8632A] transition-colors"
            >
              {href.replace('/', '')}
            </Link>
          ))}
        </div>

        {/* Social */}
        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/HendricksMediaOK"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-[#EDE8DF]/30 hover:text-[#E8632A] transition-colors"
          >
            Facebook ↗
          </a>
          <a
            href="https://www.instagram.com/hendricksmedia.ok"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-[#EDE8DF]/30 hover:text-[#E8632A] transition-colors"
          >
            Instagram ↗
          </a>
        </div>
      </div>

      <p className="font-mono text-xs text-[#EDE8DF]/15 mt-8">
        © {new Date().getFullYear()} HendricksMedia. Oklahoma-based. Results-focused.
      </p>
    </footer>
  )
}
