import { FadeIn, SectionTitle } from './AnimatedSection'

const paragraphs = [
  `I tier my territory into 10-15 priority accounts based on ICP fit and active triggers: leadership changes, agency acquisitions, carrier appointment shifts, renewal cycles. Those accounts get a top-down and bottom-up approach running simultaneously. I'm reaching out to the principal or VP of Operations with a business-level message while building operational context with account managers and production staff.`,
  `Prospecting is trigger-based, not spray-and-pray. I use ZoomInfo, LinkedIn Sales Nav, industry databases, and AI research tools to find accounts where something just changed, and I lead with that change, not a product pitch. In insurance, that might mean a new MGA partnership, a compliance audit, or a carrier pulling out of a line of business.`,
  `Once a deal is in motion, I run MEDDICC qualification hard. I want to know the economic buyer, the decision criteria, and whether there's a compelling event before I invest SE time in a deep technical evaluation. I build mutual action plans early, align every stakeholder to a shared timeline, and construct the business case in the buyer's language, not mine.`,
  `I aim for 3-3.5x pipeline coverage and review my book weekly. If a deal doesn't have a clear path to close, I'd rather qualify it out in week two than carry it for three months.`,
]

export default function HowIWork() {
  return (
    <section id="process" className="bg-surface-1 border-b border-border py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="PROCESS" title="How I Work" />
        </FadeIn>

        <div className="space-y-6">
          {paragraphs.map((text, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="pl-4 border-l border-border-light">
                <p className="text-[14.5px] leading-[1.75] text-text-secondary max-w-[680px]">
                  {text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
