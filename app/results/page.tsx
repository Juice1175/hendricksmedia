export default function Results() {
  return (
    <>
      <section className="min-h-[50vh] flex flex-col justify-end section-pad">
        <p className="eyebrow mb-6">/// Results</p>
        <h1 className="headline text-[clamp(3rem,8vw,7rem)] max-w-4xl">
          The Numbers Don’t Lie.
        </h1>
      </section>

      <section className="section-pad border-t border-cream/10">
        <div className="max-w-2xl">
          <p className="text-cream/60 leading-relaxed text-lg">
            We’re currently onboarding our first clients. Case studies and campaign results will be published here as they become available — with real numbers, real campaigns, and no fluff.
          </p>
        </div>
      </section>

      {/* Placeholder case study cards */}
      <section className="border-t border-cream/10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border-b border-cream/10 section-pad flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <span className="eyebrow mb-3 block">/// Coming Soon</span>
              <h2 className="headline text-4xl md:text-5xl text-cream/20">Case Study 0{i}</h2>
            </div>
            <div className="flex gap-16">
              <div>
                <span className="headline text-4xl text-cream/20">--</span>
                <p className="eyebrow mt-1">Cost Per Lead</p>
              </div>
              <div>
                <span className="headline text-4xl text-cream/20">--</span>
                <p className="eyebrow mt-1">ROAS</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="section-pad border-t border-cream/10">
        <div className="max-w-xl">
          <p className="eyebrow mb-6">/// Want to be first?</p>
          <h2 className="headline text-5xl mb-8">Let’s Build Your Case Study.</h2>
          <a href="/contact" className="btn-ghost">Get in Touch →</a>
        </div>
      </section>
    </>
  )
}
