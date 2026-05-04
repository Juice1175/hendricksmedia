import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 px-8 md:px-16 lg:px-24 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <span className="font-display font-extrabold text-lg uppercase tracking-widest text-[#EDE8DF]/40">
          HendricksMedia
        </span>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {['/services', '/about', '/results', '/contact'].map((href) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-xs tracking-widest uppercase text-[#EDE8DF]/30 hover:text-[#E8632A] transition-colors"
            >
              {href.replace('/', '')}
            </Link>
          ))}
        </div>
        <p className="font-mono text-xs text-[#EDE8DF]/20">
          &copy; {new Date().getFullYear()} HendricksMedia
        </p>
      </div>
    </footer>
  )
}
