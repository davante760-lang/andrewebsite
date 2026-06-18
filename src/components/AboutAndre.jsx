import { FadeIn, SectionTitle } from './AnimatedSection'
import { motion } from 'framer-motion'

export default function AboutAndre() {
  return (
    <section id="about" className="bg-surface-1 border-b border-border py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="ABOUT" title="About Andre" />
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
          {/* Photo */}
          <FadeIn delay={0.1}>
            <motion.div
              className="w-full md:w-[280px] shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="relative rounded-xl overflow-hidden border border-border">
                <img
                  src="/family.jpg"
                  alt="Andre Stewart with his wife"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5" />
              </div>
              <p className="text-[10px] tracking-[0.12em] uppercase text-text-tertiary mt-3 text-center">
                Atlanta, GA
              </p>
            </motion.div>
          </FadeIn>

          {/* Copy */}
          <div className="space-y-5 text-[14.5px] leading-[1.75] text-text-secondary">
            <FadeIn delay={0.15}>
              <p>
                Based in Atlanta, GA. Eight years in SaaS and IoT sales — Verizon Business, Samsara,
                and now Netradyne, where I earned Rookie of the Year in 2025 and currently sit #2 in
                total ARR attainment across the mid-market org. MEDDPICC Certified. Challenger Sale
                trained.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                Outside of work: Atlanta sports, staying current on what's actually happening in AI,
                and figuring out what the next career chapter looks like at a company building
                something worth selling.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p>
                I take sales seriously because the outcome matters. My customers are making
                multi-year platform bets on a new technology. That requires trust, not a pitch.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
