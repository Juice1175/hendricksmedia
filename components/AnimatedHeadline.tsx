'use client'
import { motion } from 'framer-motion'

interface AnimatedHeadlineProps {
  text: string
  className?: string
  delay?: number
}

export default function AnimatedHeadline({ text, className = '', delay = 0 }: AnimatedHeadlineProps) {
  const words = text.split(' ')

  return (
    <span className={`inline ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
