import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './AnimatedSection'

const cards = [
  {
    title: 'Enterprise Motion',
    body: 'Complex, multi-stakeholder deals with meaningful ACV. Not velocity selling or SMB volume. I run the full cycle: prospecting, discovery, executive alignment, procurement, legal, and close.',
  },
  {
    title: 'The Legacy Replacement Motion',
    body: `Helping buyers rethink the cost of staying with a system that still technically "works" but creates operational and financial risk.`,
  },
  {
    title: 'Early-Stage with Structure',
    body: 'Environments where the playbook is still being built and leadership values commercial judgment over raw activity volume. I want to be part of shaping how the org sells, not just executing a defined script.',
  },
]

export default function WhatImBuiltFor() {
  return (
    <section id="built-for" className="bg-surface-1 border-b border-border py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="FIT" title="What I'm Built For" />
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-[14.5px] leading-[1.75] text-text-secondary max-w-[680px] mb-8">
            I thrive in organizations where the following factors intersect:
          </p>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={0.1 + i * 0.06}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-2 border border-border rounded-xl p-5"
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
