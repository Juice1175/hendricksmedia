import Link from 'next/link'

const metrics = [
  {
    stat: 'Cost Per Lead',
    desc: 'Every dollar has to justify itself. We track exactly what you pay for each qualified lead — not clicks, not reach.',
  },
  {
    stat: 'ROAS',
    desc: 'Return on ad spend. The only number that tells you whether advertising is actually making you money.',
  },
  {
    stat: 'Conversion Rate',
    desc: 'How many people who see your ad take action. Low conversion rate means the creative or the offer needs work — and we fix it.',
  },
  {
    stat: 'Booked Jobs',
    desc: 'Leads are worthless if they don\'t close. We track downstream to booked jobs so we know what\'s actually driving revenue.',
  },
]

const phases = [
  {
    range: 'Days 1–30',
    title: 'Setup & Launch',
    desc: 'We build your campaign architecture, write the creative, set up tracking, and get your first ads live. No wasted time — you\'re in-market within the first two weeks.',
  },
  {
    range: 'Days 31–60',
    title: 'Read & Optimize',
    desc: 'Real data starts coming in. We cut what isn\'t working, double down on what is, and refine your targeting and creative based on actual results — not guesses.',
  },
  {
    range: 'Days 61–90',
    title: 'Scale What Works',
    desc: 'Once we know your winning angles, we scale budget into them. By the end of 90 days, you have a repeatable lead system — not a one-time campaign.',
  },
]

export default function Results() {
  return (
    <>
      <section className="min-h-[50vh] flex flex-col justify-end section-pad">
        <p className="eyebrow mb-6">/// Results</p>
        <h1 className="headline text-[clamp(3rem,8vw,7rem)] max-w-4xl">
          We Don&apos;t Hide Behind Vanity Metrics.
        </h1>
      </section>

      <section className="section-pad border-t border-cream/10">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-6">/// What We Track & Why</p>
          <p className="text-cream/60 leading-relaxed text-lg">
            Impressions don&apos;t pay your crew. Likes don&apos;t book jobs. We report on the four numbers that actually tell you whether your advertising is working.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-cream/10">
          {metrics.map((m) => (
            <div key={m.stat} className="bg-charcoal p-10">
              <h3 className="headline text-3xl mb-4">{m.stat}</h3>
              <p className="text-cream/50 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad border-t border-cream/10">
        <p className="eyebrow mb-16">/// Your First 90 Days</p>
        <div className="flex flex-col gap-px bg-cream/10">
          {phases.map((p) => (
            <div key={p.range} className="bg-charcoal grid md:grid-cols-[200px_1fr] gap-8 p-10">
              <div>
                <span className="font-mono text-xs text-orange block mb-2">{p.range}</span>
                <h3 className="headline text-3xl">{p.title}</h3>
              </div>
              <p className="text-cream/50 leading-relaxed md:pt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad border-t border-cream/10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-6">/// Our Guarantee</p>
            <h2 className="headline text-5xl md:text-6xl mb-8">Month-to-Month. No Contracts. Cancel Anytime.</h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-cream/60 leading-relaxed text-lg">
              We don&apos;t lock you in because we don&apos;t need to. If we&apos;re getting you results, you&apos;ll stay. If we&apos;re not, you shouldn&apos;t.
            </p>
            <p className="text-cream/60 leading-relaxed text-lg">
              No 12-month agreements. No cancellation fees. No holding your ad account hostage. You own your data, your creative, and your results.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-cream/10">
        <div className="max-w-xl">
          <p className="eyebrow mb-6">/// Ready to Start?</p>
          <h2 className="headline text-5xl mb-8">Book a Free Strategy Call.</h2>
          <p className="text-cream/60 leading-relaxed mb-8">
            We&apos;ll look at your market, your competitors, and tell you exactly what a campaign would cost and what you can expect. No pitch, no pressure.
          </p>
          <Link href="/contact" className="btn-ghost">Book Your Call →</Link>
        </div>
      </section>
    </>
  )
}
