import { FadeIn, SummaryBox, SectionTitle } from './AnimatedSection'

function E({ children }) {
  return <span className="text-text-primary font-medium">{children}</span>
}

export default function WhyOutmarket() {
  return (
    <section id="why-outmarket" className="py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="WHY I'M HERE" title="Why Sixfold" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <SummaryBox>
            <div className="space-y-5 text-[14.5px] leading-[1.75] text-text-secondary max-w-[680px]">
              <p>
                I spent <E>two years at Applied Systems</E> selling AMS replacements into independent
                agencies and commercial brokers; so I know exactly what it looks like when an
                underwriting team is drowning in manual submission work and nobody has built something
                that actually solves it yet.
              </p>
              <p>
                Sixfold is <E>solving the right problem at the right moment</E>. Carriers are under
                margin pressure, underwriter capacity is finite, and the Series B tells me you're past
                proof-of-concept and into scaling the motion. That's the stage where{' '}
                <E>enterprise sales discipline</E>: multi-threading into operations and underwriting
                leadership simultaneously, building a business case around GWP per underwriter rather
                than just efficiency, starts to matter most.
              </p>
              <p>
                My <E>background in insurtech</E> gives me a shortcut most AEs selling into this space
                don't have. I already speak the language, I know the buyers, and I know how to frame AI
                adoption in an industry that has historically been skeptical of it.
              </p>
            </div>
          </SummaryBox>
        </FadeIn>
      </div>
    </section>
  )
}
