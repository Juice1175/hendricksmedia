'use client'
import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      w: number
      h: number

      constructor(w: number, h: number) {
        this.w = w
        this.h = h
        this.x = Math.random() * w
        this.y = Math.random() * h
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.size = Math.random() * 1.5 + 0.5
        this.opacity = Math.random() * 0.5 + 0.1
        this.color = Math.random() > 0.85 ? '#E8632A' : '#EDE8DF'
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0) this.x = this.w
        if (this.x > this.w) this.x = 0
        if (this.y < 0) this.y = this.h
        if (this.y > this.h) this.y = 0
      }

      draw() {
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fillStyle = this.color
        ctx!.globalAlpha = this.opacity
        ctx!.fill()
      }
    }

    const init = () => {
      resize()
      particles = Array.from({ length: 120 }, () => new Particle(canvas.width, canvas.height))
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx!.beginPath()
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            ctx!.strokeStyle = '#EDE8DF'
            ctx!.globalAlpha = (1 - dist / 120) * 0.06
            ctx!.lineWidth = 0.5
            ctx!.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Ambient glow — bottom left
      const glow = ctx.createRadialGradient(
        canvas.width * 0.15, canvas.height * 0.8, 0,
        canvas.width * 0.15, canvas.height * 0.8, canvas.width * 0.5
      )
      glow.addColorStop(0, 'rgba(232,99,42,0.06)')
      glow.addColorStop(1, 'rgba(232,99,42,0)')
      ctx.globalAlpha = 1
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawConnections()
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(animate)
    }

    init()
    animate()
    window.addEventListener('resize', () => { init() })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', () => { init() })
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.8 }}
    />
  )
}
