import { FadeIn, SectionTitle } from './AnimatedSection'

const steps = [
  {
    label: 'THE THREAD',
    body: `Started with an insurance pain point surfaced during prospecting. The prospect's fleet was running an entrenched GPS incumbent, but the real cost wasn't in the platform; it was in the operational risk they couldn't see.`,
  },
  {
    label: 'MULTI-THREADING',
    body: `My initial champion got me introduced to the CFO and COO early. I needed them in the conversation before pricing ever hit their desk, a lesson I'd learned the hard way on a previous deal.`,
  },
  {
    label: 'THE OPENING',
    body: `We found a contract loophole with the incumbent that created a window to act. But the real unlock was reframing the conversation: this wasn't a $435K technology decision; it was a $2M operational risk problem that the current vendor couldn't address.`,
  },
  {
    label: 'THE CLOSE',
    body: `I built the executive business case with my SE, my manager, and our director. The final presentation was a team effort: cost-of-switching versus cost-of-doing-nothing, framed in the CFO's language. Closed the full multi-product deal.`,
  },
]

export default function DealStory() {
  return (
    <section id="deal-story" className="bg-surface-1 border-b border-border py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle
            eyebrow="DEAL STORY"
            title="Displacing an entrenched incumbent at a leading concrete producer"
          />
          <p className="text-text-tertiary text-xs uppercase tracking-[0.15em] -mt-6 mb-10">
            $435K ACV · Competitive displacement · 6+ stakeholders · Anonymized
          </p>
        </FadeIn>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-8">
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-[2px] bg-accent/30" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <FadeIn key={step.label} delay={i * 0.1}>
                <div className="relative">
                  {/* Dot */}
                  <div className="absolute -left-6 md:-left-8 top-1.5 w-[10px] h-[10px] md:w-[14px] md:h-[14px] rounded-full bg-accent border-2 border-surface-1" />

                  <div>
                    <span className="text-[11px] uppercase tracking-[0.15em] font-medium text-accent block mb-2">
                      {step.label}
                    </span>
                    <p className="text-[14.5px] leading-[1.75] text-text-secondary max-w-[680px]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Result callout */}
        <FadeIn delay={0.4}>
          <div className="mt-10 bg-accent-dim border border-accent/20 rounded-xl p-5">
            <div className="font-heading text-accent text-xl font-semibold">$435K ACV closed</div>
            <p className="text-text-tertiary text-sm mt-1">
              Largest deal in my territory that year. Full competitive displacement across the fleet.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
