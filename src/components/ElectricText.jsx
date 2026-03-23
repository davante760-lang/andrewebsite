import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ElectricText({ text, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const id = 'electric-' + text.replace(/\s/g, '-').toLowerCase()
  const vw = 720
  const vh = 90

  return (
    <div ref={ref} className={className}>
      <svg
        viewBox={`0 0 ${vw} ${vh}`}
        className="w-full max-w-[720px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={`${id}-glow`}>
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0.4 0 0 0 0.3  0 0.3 0 0 0.4  0 0 1 0 0.9  0 0 0 1 0"
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <clipPath id={`${id}-clip`}>
            <motion.rect
              x="0"
              y="0"
              width={vw}
              height={vh}
              initial={{ x: -vw }}
              animate={isInView ? { x: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </clipPath>
        </defs>

        {/* Outer glow layer */}
        <text
          x={vw / 2}
          y="62"
          textAnchor="middle"
          style={{
            fontFamily: "'Geist', 'Inter', system-ui, sans-serif",
            fontSize: '58px',
            fontWeight: 600,
            letterSpacing: '-0.04em',
            fill: '#7c6aef',
            filter: `url(#${id}-glow)`,
            clipPath: `url(#${id}-clip)`,
            opacity: 0.6,
          }}
        >
          {text}
        </text>

        {/* Hot white core */}
        <text
          x={vw / 2}
          y="62"
          textAnchor="middle"
          style={{
            fontFamily: "'Geist', 'Inter', system-ui, sans-serif",
            fontSize: '58px',
            fontWeight: 600,
            letterSpacing: '-0.04em',
            fill: '#F7F8FB',
            clipPath: `url(#${id}-clip)`,
          }}
        >
          {text}
        </text>

        {/* Sweeping edge line */}
        <motion.line
          x1="0"
          y1="10"
          x2="0"
          y2={vh - 10}
          stroke="#7c6aef"
          strokeWidth="2"
          initial={{ x1: 0, x2: 0, opacity: 0 }}
          animate={
            isInView
              ? {
                  x1: [0, vw],
                  x2: [0, vw],
                  opacity: [0, 1, 1, 0],
                }
              : {}
          }
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            filter: 'drop-shadow(0 0 6px rgba(124, 106, 239, 0.8))',
          }}
        />
      </svg>
    </div>
  )
}
