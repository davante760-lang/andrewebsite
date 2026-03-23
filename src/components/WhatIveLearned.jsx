import { FadeIn, SectionTitle } from './AnimatedSection'

export default function WhatIveLearned() {
  return (
    <section id="lessons" className="py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="REFLECTION" title="What I've Learned" />
        </FadeIn>

        <div className="space-y-5 text-[14.5px] leading-[1.75] text-text-secondary max-w-[680px]">
          <FadeIn>
            <p>
              The biggest shift in my selling over the last two years is asking the hard questions
              earlier: surfacing contract buyouts, legal blockers, budget authority, and executive
              priorities in discovery instead of month four. President's Club pressure used to make
              me roll the dice on deals I should have qualified out. I've learned that knowing a deal
              is dead in week two is worth more than carrying a maybe for twelve weeks.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p>
              I lost a $97K deal to "do nothing" because I didn't get to the economic buyer early
              enough. That loss changed how I run every deal since. The first thing I do now is
              confirm three things with the decision-maker: this is a priority, we agree on success
              criteria, and if we meet those criteria, a decision gets made by a specific date.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
