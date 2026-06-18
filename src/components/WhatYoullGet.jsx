import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './AnimatedSection'

const cards = [
  {
    title: 'Pipeline Creation',
    body: `I don't wait for inbound. I build my own territory.`,
  },
  {
    title: 'Competitive Displacement',
    body: "Eight years selling AI and modern SaaS into operationally conservative industries. Closing here means more than a demo: it's working through change-management hesitation, demonstrating ROI against the customer's own past performance, and eliminating the pilot entirely.",
  },
  {
    title: 'Executive Alignment',
    body: 'The ability to move beyond technical champions to reach the economic buyer, and keep them engaged through a 6–10 stakeholder procurement process.',
  },
  {
    title: 'Qualification Discipline',
    body: 'A clean CRM and an honest forecast based on hard-stop MEDDPICC discovery.',
  },
]

export default function WhatYoullGet() {
  return (
    <section id="what-you-get" className="bg-surface-1 border-b border-border py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="VALUE" title="What You Get" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-2 border border-border rounded-xl p-5 h-full"
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
