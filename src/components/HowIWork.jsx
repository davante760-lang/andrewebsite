import { FadeIn, SectionTitle } from './AnimatedSection'

const items = [
  {
    title: 'Trial-Free Closing',
    body: '4 of 16 net-new deals at Netradyne closed without a pilot. The most in my org. I replace the POC with rigorous discovery that surfaces the cost of inaction early and builds the business case before procurement ever gets involved.',
  },
  {
    title: 'Multi-Threaded Alignment',
    body: 'I run simultaneous top-down (C-Suite) and bottom-up (Operational Staff) threads. One champion is a single point of failure. I build committees around a shared business case spanning COO, CFO, InfoSec, and Legal.',
  },
  {
    title: 'Hard-Stop Qualification',
    body: 'MEDDPICC from day one. I surface contract buyouts, legal blockers, and budget authority early so resources are only deployed against deals with a real path to close.',
  },
  {
    title: 'Outbound First',
    body: "I don't wait for inbound. Cold outbound is my primary pipeline channel, supplemented by insurance channel partners and trade association events in fleet-dependent verticals.",
  },
]

export default function HowIWork() {
  return (
    <section id="how-i-sell" className="py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="APPROACH" title="How I Sell" />
        </FadeIn>

        <div className="space-y-6">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="pl-4 border-l border-border-light max-w-[680px]">
                <h3 className="font-heading text-[15px] font-semibold text-text-primary tracking-[-0.01em] mb-2">
                  {item.title}
                </h3>
                <p className="text-[14.5px] leading-[1.75] text-text-secondary">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
