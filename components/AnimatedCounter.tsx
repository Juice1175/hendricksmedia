'use client'
import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: string
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedCounter({ value, className = '', style }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  const hasNumber = /[0-9]/.test(value)
  const prefix = hasNumber ? (value.match(/^[^0-9]*/)?.[0] || '') : ''
  const suffix = hasNumber ? (value.match(/[^0-9]*$/)?.[0] || '') : ''
  const numeric = hasNumber ? (parseFloat(value.replace(/[^0-9.]/g, '')) || 0) : 0
  const isInteger = Number.isInteger(numeric)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    // Non-numeric: just show as-is
    if (!hasNumber) {
      setDisplayed(value)
      return
    }

    const duration = 1800
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      const current = eased * numeric
      setDisplayed(isInteger ? Math.round(current).toString() : current.toFixed(1))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, numeric, isInteger, hasNumber, value])

  return (
    <span ref={ref} className={className} style={style}>
      {hasNumber ? `${prefix}${displayed}${suffix}` : displayed}
    </span>
  )
}
