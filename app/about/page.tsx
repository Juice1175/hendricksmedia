export default function About() {
  return (
    <>
      <section className="min-h-[50vh] flex flex-col justify-end section-pad">
        <p className="eyebrow mb-6">/// About</p>
        <h1 className="headline text-[clamp(3rem,8vw,7rem)] max-w-4xl">
          Built for the Businesses That Build Things.
        </h1>
      </section>

      <section className="section-pad border-t border-cream/10 grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-cream/60 leading-relaxed text-lg mb-6">
            HendricksMedia is a digital advertising agency focused on one thing: getting local service businesses more qualified leads through Facebook and Instagram ads.
          </p>
          <p className="text-cream/60 leading-relaxed text-lg mb-6">
            We started with roofing companies in Oklahoma because that’s where we saw the biggest gap — great contractors with no digital presence competing against franchises with massive ad budgets.
          </p>
          <p className="text-cream/60 leading-relaxed text-lg">
            We don’t do billboards. We don’t do SEO. We do one thing and we do it well: paid social that delivers real leads for local businesses.
          </p>
        </div>
        <div className="flex flex-col gap-8 justify-center">
          {[
            { label: 'Focus', value: 'Facebook & Instagram Ads' },
            { label: 'Market', value: 'Local service businesses' },
            { label: 'Specialty', value: 'Roofing & home services' },
            { label: 'Based in', value: 'Oklahoma' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1 border-b border-cream/10 pb-6">
              <span className="eyebrow">{item.label}</span>
              <span className="font-display font-bold text-2xl uppercase text-cream">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad border-t border-cream/10">
        <p className="eyebrow mb-6">/// Our Approach</p>
        <div className="grid md:grid-cols-3 gap-px bg-cream/10">
          {[
            { num: '01', title: 'No Long Contracts', desc: 'We earn your business every month. No 12-month lock-ins, no cancellation fees.' },
            { num: '02', title: 'Direct Communication', desc: 'You talk to the person running your ads. No account managers, no runaround.' },
            { num: '03', title: 'Results or Nothing', desc: 'We’re not here to run ads. We’re here to get you leads. If it’s not working, we’ll tell you.' },
          ].map((item) => (
            <div key={item.num} className="bg-charcoal p-10">
              <span className="font-mono text-xs text-orange mb-6 block">{item.num}</span>
              <h3 className="headline text-3xl mb-4">{item.title}</h3>
              <p className="text-cream/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
