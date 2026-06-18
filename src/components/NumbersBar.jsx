import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FadeIn, SectionTitle } from './AnimatedSection'

const numbers = [
  {
    value: '60%',
    label: 'Head-to-Head Win Rate',
    context: 'Against primary competitors, powered by trial-free selling.',
    prefix: '',
    number: 60,
    suffix: '%',
    decimals: 0,
  },
  {
    value: '$5.2M',
    label: 'Pipeline Built Year One',
    context: '3–5x quota coverage. Ranked Top 2 division-wide in pipeline generation.',
    prefix: '$',
    number: 5.2,
    suffix: 'M',
    decimals: 1,
  },
  {
    value: '#1',
    label: 'Closed-Won ARR & New Logos',
    context: 'Among all 2025 hires. Rookie of the Year, Netradyne.',
    prefix: '#',
    number: 1,
    suffix: '',
    decimals: 0,
  },
  {
    value: '8+ Years',
    label: 'Market Tenure',
    context: 'Full-cycle SaaS and IoT across mid-market and enterprise.',
    prefix: '',
    number: 8,
    suffix: '+ Years',
    decimals: 0,
  },
]

function AnimatedNumber({ prefix = '', number, suffix = '', decimals = 0, animated = true, value }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(animated ? `${prefix}0${suffix}` : value)

  useEffect(() => {
    if (!isInView || !animated) return

    const duration = 1400
    const startTime = performance.now()
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

    function tick(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)
      const current = easedProgress * number

      if (decimals > 0) {
        setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`)
      } else {
        setDisplay(`${prefix}${Math.round(current)}${suffix}`)
      }

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [isInView, animated, number, prefix, suffix, decimals])

  return (
    <span ref={ref}>{display}</span>
  )
}

export default function NumbersBar() {
  return (
    <section id="numbers" className="bg-surface-1 border-b border-border py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="STATS" title="Track Record" />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {numbers.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.08}>
              <motion.div
                className="text-center md:text-left"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="font-heading text-accent text-[32px] md:text-[40px] font-semibold tracking-[-0.03em] leading-none tabular-nums">
                  <AnimatedNumber
                    prefix={item.prefix}
                    number={item.number}
                    suffix={item.suffix}
                    decimals={item.decimals}
                    animated={item.animated !== false}
                    value={item.value}
                  />
                </div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-text-tertiary mt-3 font-medium">
                  {item.label}
                </div>
                <p className="text-[13px] leading-[1.6] text-text-secondary mt-2 max-w-[320px] mx-auto md:mx-0">
                  {item.context}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
