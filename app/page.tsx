import Link from 'next/link'
import AnimatedHeadline from '@/components/AnimatedHeadline'
import AnimatedCounter from '@/components/AnimatedCounter'
import ScrollReveal from '@/components/ScrollReveal'
import HeroCanvas from '@/components/HeroCanvas'
import Marquee from '@/components/Marquee'

const services = [
  {
    label: '01',
    title: 'Ad Strategy',
    desc: 'Hyper-local targeting built around your service area, your season, and the neighborhoods most likely to need a new roof.',
    href: '/services#ad-strategy',
  },
  {
    label: '02',
    title: 'Creative Production',
    desc: 'Scroll-stopping ads built for homeowners — before/after visuals, urgency copy, and offers that drive calls, not clicks.',
    href: '/services#creative-production',
  },
  {
    label: '03',
    title: 'Performance Tracking',
    desc: 'Weekly reports on cost per lead, booked jobs, and ROAS — plain English, no agency fluff.',
    href: '/services#performance-tracking',
  },
]

const metrics = [
  { value: '100%', label: 'Oklahoma-based, locally focused' },
  { value: 'Meta', label: 'Ads Specialist' },
  { value: '$0', label: 'Lock-in. Month-to-month only.' },
]

const foundingSlots = [
  {
    num: '01',
    status: 'available' as const,
    title: 'First Founding Partner',
    offer: 'Pay ad spend only. Zero agency fee.',
    detail: 'You cover your ad budget — nothing else. In return, we build your campaign from scratch, run it for 60 days, and document everything as a public case study.',
    tags: ['$0 management fee', '60-day campaign', 'Full case study'],
  },
  {
    num: '02',
    status: 'available' as const,
    title: 'Second Founding Partner',
    offer: 'Reduced rate. Real results.',
    detail: 'A significantly discounted management fee for one roofing company in Oklahoma. Same full-service treatment — strategy, creative, tracking — at a fraction of the normal price.',
    tags: ['Discounted rate', 'Full service', 'Priority onboarding'],
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <HeroCanvas />

        <div
          className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #0D0B09 60%, transparent)' }}
        />

        <div className="relative z-10 section-pad max-w-[95vw]">
          <ScrollReveal delay={0}>
            <p className="eyebrow mb-8">/// Digital Advertising</p>
          </ScrollReveal>

          <h1 className="headline mb-10" style={{ fontSize: 'clamp(4rem,11vw,10.5rem)', lineHeight: 0.9 }}>
            <AnimatedHeadline text="We Make Local Businesses Impossible to Ignore." delay={0.1} />
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <ScrollReveal delay={0.55}>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', color: 'rgba(237,232,223,0.55)', maxWidth: '28rem', lineHeight: 1.7 }}>
                We run paid ads for roofing companies in Oklahoma — storm season is now. Let&rsquo;s get you booked out.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.7}>
              <Link href="/contact" className="btn-ghost whitespace-nowrap">
                Start a Project &rarr;
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-12 z-10">
          <ScrollReveal delay={1.2}>
            <div className="flex flex-col items-center gap-2">
              <span className="eyebrow" style={{ fontSize: '0.6rem', letterSpacing: '0.25em' }}>Scroll</span>
              <div className="w-px h-12 bg-[#E8632A]/40" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* STATEMENT STRIP — infinite marquee */}
      <section className="border-t border-b border-[#EDE8DF]/10 py-8 overflow-hidden">
        <Marquee />
      </section>

      {/* SERVICES */}
      <section className="section-pad">
        <ScrollReveal>
          <p className="eyebrow mb-16">/// What We Do</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-px bg-[#EDE8DF]/10">
          {services.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.12}>
              <Link
                href={s.href}
                className="bg-[#0D0B09] p-10 h-full flex flex-col gap-6 group hover:bg-[#1A1612] transition-colors duration-300 block"
                style={{ textDecoration: 'none' }}
              >
                <span className="eyebrow">{s.label}</span>
                <h3 className="headline text-4xl">{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', color: 'rgba(237,232,223,0.45)', fontSize: '0.9rem', lineHeight: 1.75 }}>{s.desc}</p>
                <span className="service-card-link">Learn more &rarr;</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* METRICS STRIP */}
      <section className="border-t border-[#EDE8DF]/10">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EDE8DF]/10">
          {metrics.map((m) => (
            <div key={m.label} className="px-12 py-16 flex flex-col gap-4">
              <AnimatedCounter
                value={m.value}
                className="headline text-[#E8632A]"
                style={{ fontSize: 'clamp(3rem,6vw,5rem)' }}
              />
              <span className="eyebrow">{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDING PARTNERS */}
      <section className="section-pad border-t border-[#EDE8DF]/10">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow mb-4">/// Founding Partners</p>
              <h2 className="headline" style={{ fontSize: 'clamp(2rem,5vw,4rem)', lineHeight: 0.95 }}>
                Two Spots.<br />Zero Fluff.
              </h2>
            </div>
            <p style={{ fontFamily: 'var(--font-inter), sans-serif', color: 'rgba(237,232,223,0.45)', maxWidth: '26rem', lineHeight: 1.7, fontSize: '0.9rem' }}>
              We&rsquo;re building our first case studies with two Oklahoma roofing companies who want real results — not promises. These aren&rsquo;t charity spots. They&rsquo;re a calculated trade.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {foundingSlots.map((slot, i) => (
            <ScrollReveal key={slot.num} delay={i * 0.15}>
              <div className={`founding-card founding-card-${slot.status}`}>
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs text-[#E8632A]/60">{slot.num}</span>
                  <span className="founding-badge">Available</span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="headline text-3xl mb-2">{slot.title}</h3>
                  <p className="font-mono text-sm text-[#E8632A]">{slot.offer}</p>
                </div>

                {/* Detail */}
                <p style={{ fontFamily: 'var(--font-inter), sans-serif', color: 'rgba(237,232,223,0.45)', fontSize: '0.875rem', lineHeight: 1.75 }}>
                  {slot.detail}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {slot.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.65rem] tracking-widest uppercase text-[#EDE8DF]/30 border border-[#EDE8DF]/10 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto pt-2">
                  <Link href="/contact" className="btn-ghost">
                    Apply Now &rarr;
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Fine print */}
        <ScrollReveal delay={0.3}>
          <p className="font-mono text-xs text-[#EDE8DF]/20 mt-8">
            Once both spots are filled, we move to standard pricing. Oklahoma roofing companies only.
          </p>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="relative section-pad border-t border-[#EDE8DF]/10 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,99,42,0.08) 0%, transparent 70%)' }}
        />
        <ScrollReveal>
          <div className="max-w-4xl relative z-10">
            <p className="eyebrow mb-6">/// Ready to Grow</p>
            <h2 className="headline mb-10" style={{ fontSize: 'clamp(2.5rem,7vw,7rem)', lineHeight: 0.95 }}>
              Let&rsquo;s Build Something That Works.
            </h2>
            <Link href="/contact" className="btn-ghost">
              Get in Touch &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
