'use client'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full bg-transparent border-b border-cream/20 py-4 text-cream placeholder-cream/20 font-mono text-sm focus:outline-none focus:border-orange transition-colors'

  return (
    <>
      <section className="min-h-[50vh] flex flex-col justify-end section-pad">
        <p className="eyebrow mb-6">/// Contact</p>
        <h1 className="headline text-[clamp(3rem,8vw,7rem)] max-w-3xl">
          Let’s Talk About Your Business.
        </h1>
      </section>

      <section className="section-pad border-t border-cream/10 grid md:grid-cols-2 gap-24">
        <div>
          <p className="text-cream/60 leading-relaxed mb-12">
            Tell us about your business and what you’re trying to accomplish. We’ll get back to you within one business day.
          </p>
          <div className="flex flex-col gap-4">
            {[
              { label: 'Email', value: 'josh@hendricksads.com' },
              { label: 'Based in', value: 'Oklahoma' },
              { label: 'Response time', value: 'Within 1 business day' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="eyebrow">{item.label}</span>
                <span className="text-cream/60 font-body">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {status === 'sent' ? (
            <div className="flex flex-col gap-4">
              <p className="eyebrow text-orange">/// Message Sent</p>
              <h2 className="headline text-4xl">We’ll be in touch soon.</h2>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <input
                className={inputClass}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                className={inputClass}
                placeholder="Business name"
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                required
              />
              <input
                className={inputClass}
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <input
                className={inputClass}
                placeholder="Phone number (optional)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <textarea
                className={`${inputClass} resize-none`}
                rows={4}
                placeholder="Tell us about your business and what you’re looking to accomplish..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              {status === 'error' && (
                <p className="font-mono text-xs text-orange">Something went wrong. Try emailing us directly.</p>
              )}
              <button type="submit" disabled={status === 'sending'} className="btn-ghost self-start">
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
