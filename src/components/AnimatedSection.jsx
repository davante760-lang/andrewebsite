import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function BlurReveal({ children, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ filter: 'blur(12px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, className = '', direction = 'up', delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const directionMap = {
    up: { y: 12, x: 0 },
    left: { y: 0, x: -12 },
    right: { y: 0, x: 12 },
    none: { y: 0, x: 0 },
  }

  const offset = directionMap[direction] || directionMap.up

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SummaryBox({ children, className = '' }) {
  return (
    <div className={`bg-surface-1 border border-border rounded-xl relative ${className}`}>
      <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-accent rounded-full" />
      <div className="p-6 md:p-8 pl-5 md:pl-7">
        {children}
      </div>
    </div>
  )
}

export function SectionTitle({ eyebrow, title }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="mb-8 md:mb-10">
      <span className="block text-[11px] uppercase tracking-[0.2em] font-medium text-accent mb-3">
        {eyebrow}
      </span>
      <h2 className="font-heading font-semibold tracking-[-0.025em] text-text-primary text-[26px] md:text-[32px] leading-tight">
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className="h-[2px] bg-accent mt-3 origin-left"
        style={{ maxWidth: 48 }}
      />
    </div>
  )
}

export function Subsection({ title, children, className = '' }) {
  return (
    <div className={className}>
      <h3 className="font-heading text-[16px] font-semibold text-text-primary tracking-[-0.02em] mb-3">
        {title}
      </h3>
      {children}
    </div>
  )
}

export function SectionDivider() {
  return <div className="h-px bg-border max-w-[860px] mx-auto" />
}
