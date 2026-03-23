import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './AnimatedSection'

const cards = [
  {
    title: 'Self-sourced pipeline',
    body: `60%+ of my pipeline comes from my own outbound. I don't wait for inbound to build the quarter. I go find it. At an early-stage company, that's not a nice-to-have.`,
  },
  {
    title: 'Insurance distribution fluency',
    body: `I know how brokers, MGAs, wholesalers, and carriers evaluate technology. I've sold into this chain for three years. I don't need to learn the vocabulary; I need to learn your product.`,
  },
  {
    title: 'Multi-threaded deals',
    body: `I map the buying committee early and build relationships at multiple levels. One champion isn't a deal; it's a single point of failure.`,
  },
  {
    title: 'Early qualification',
    body: `I ask the uncomfortable questions in discovery: budget authority, competing priorities, contract timelines. I'd rather know a deal is dead in week two than carry it for twelve.`,
  },
  {
    title: 'Clean forecasting',
    body: `My commit is my commit. I don't sandbag and I don't over-forecast. My manager knows where every deal stands because I keep my CRM honest.`,
  },
]

export default function WhatYoullGet() {
  return (
    <section id="working-with-me" className="py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="WORKING WITH ME" title="What You'll Get" />
        </FadeIn>

        <div className="flex flex-col gap-4">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-1 border border-border rounded-xl p-5"
              >
                <h3 className="font-heading font-medium text-text-primary mb-2">{card.title}</h3>
                <p className="text-[14.5px] leading-[1.75] text-text-secondary">{card.body}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
