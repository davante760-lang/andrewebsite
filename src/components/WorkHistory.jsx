import { FadeIn, SectionTitle } from './AnimatedSection'
import { motion } from 'framer-motion'

const companies = [
  {
    name: 'Netradyne',
    logo: '/logo-netradyne.png',
    invertLogo: true,
    role: 'Enterprise AE, Mid-Enterprise (Jan 2025–Present)',
    takeaway:
      "Rookie of the Year 2025. #1 Closed-Won ARR and #1 New-Logo Wins among all 2025 hires against a $920K quota. Built $5.2M qualified pipeline (3–5\u00d7 coverage), ranked Top 2 division-wide. 60% head-to-head win rate; 4 of 16 net-new deals closed without a pilot — the most non-trial wins in the org.",
  },
  {
    name: 'Samsara',
    logo: '/logo-samsara.png',
    invertLogo: true,
    role: 'Senior AE, Mid-Market (Jan 2023–Jan 2025)',
    takeaway:
      '103% of $902K quota in FY23. $490K+ net-new ACV in first 6 months. Deal of the Quarter ($118K competitive displacement). Drove 30% additional revenue via land-and-expand within first 12 months of customer acquisition.',
  },
  {
    name: 'Verizon',
    logo: '/logo-verizon.png',
    role: 'Senior Account Manager, Business Market (Jul 2017–Jan 2023)',
    takeaway:
      '#2 statewide in Business Sales (Georgia, 2022). Exceeded targets by 152% in Q3 2022 and 138% in Q1 2022. Six years of full-cycle B2B selling into mid-market across telecom, mobility, and IoT.',
  },
]

export default function WorkHistory() {
  return (
    <section id="experience" className="py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="EXPERIENCE" title="Where I've Sold" />
        </FadeIn>

        {/* Timeline connector line (desktop only) */}
        <div className="hidden md:block relative mb-8">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border" />
          <div className="flex justify-between relative z-10">
            {companies.map((c) => (
              <div key={c.name} className="w-2 h-2 rounded-full bg-accent" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {companies.map((company, i) => (
            <FadeIn key={company.name} delay={i * 0.1}>
              <motion.div
                className="bg-surface-1 border border-border rounded-xl p-5 flex flex-col h-full"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Logo / wordmark */}
                <div className="h-10 mb-4 flex items-center">
                  {company.showWordmark ? (
                    <span className="font-heading text-[18px] font-semibold text-text-primary tracking-[-0.01em]">
                      {company.name}
                    </span>
                  ) : (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-8 max-w-[140px] object-contain"
                      style={company.invertLogo ? { filter: 'brightness(0) invert(1)' } : undefined}
                    />
                  )}
                </div>

                {/* Role */}
                <h3 className="font-heading text-[15px] font-semibold text-text-primary tracking-[-0.01em] mb-4">
                  {company.role}
                </h3>

                {/* Takeaway */}
                <div className="mt-auto pt-4 border-t border-border-light">
                  <p className="text-[13px] italic text-text-tertiary leading-[1.65]">
                    "{company.takeaway}"
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
