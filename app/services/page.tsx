import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Ad Strategy',
    desc: 'We start by understanding your market — your competitors, your buyers, your seasonal demand. Then we build a campaign architecture designed to get you in front of the right homeowner at the right moment.',
    includes: ['Audience research & targeting', 'Campaign structure & budget allocation', 'Offer development & positioning', 'Competitive analysis'],
  },
  {
    num: '02',
    title: 'Creative Production',
    desc: 'Most local ad creative is forgettable. Ours isn’t. We write copy and design visuals that make a homeowner stop, read, and call. Built for the platform, built for your trade.',
    includes: ['Ad copywriting', 'Static image design', 'Video concept & direction', 'A/B creative testing'],
  },
  {
    num: '03',
    title: 'Performance Tracking',
    desc: 'No black box. You see exactly what’s working, what’s not, and what we’re doing about it. Clear reporting on the numbers that actually matter for your business.',
    includes: ['Weekly performance reports', 'Cost per lead tracking', 'ROAS reporting', 'Monthly strategy reviews'],
  },
  {
    num: '04',
    title: 'Landing Page Builds',
    desc: 'A great ad needs a great landing page. We design and build conversion-focused pages that match your ad creative and turn clicks into calls.',
    includes: ['Custom landing page design', 'Mobile-first builds', 'Form & call tracking', 'CRO optimization'],
  },
]

export default function Services() {
  return (
    <>
      <section className="min-h-[50vh] flex flex-col justify-end section-pad">
        <p className="eyebrow mb-6">/// Services</p>
        <h1 className="headline text-[clamp(3rem,8vw,7rem)] max-w-3xl">
          Everything You Need. Nothing You Don’t.
        </h1>
      </section>

      <section className="border-t border-cream/10">
        {services.map((s, i) => (
          <div key={s.num} className={`grid md:grid-cols-2 gap-16 section-pad ${i !== 0 ? 'border-t border-cream/10' : ''}`}>
            <div>
              <span className="font-mono text-xs text-orange mb-4 block">{s.num}</span>
              <h2 className="headline text-5xl md:text-6xl mb-6">{s.title}</h2>
              <p className="text-cream/50 leading-relaxed">{s.desc}</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="eyebrow mb-6">Includes</p>
              <ul className="flex flex-col gap-3">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-cream/60 font-body text-sm">
                    <span className="w-1 h-1 bg-orange rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="section-pad border-t border-cream/10">
        <div className="max-w-xl">
          <p className="eyebrow mb-6">/// Next Step</p>
          <h2 className="headline text-5xl mb-8">Ready to Start?</h2>
          <Link href="/contact" className="btn-ghost">Get in Touch →</Link>
        </div>
      </section>
    </>
  )
}
