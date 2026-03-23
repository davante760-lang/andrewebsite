import { FadeIn } from './AnimatedSection'
import { motion } from 'framer-motion'

export default function ResumeDownload() {
  return (
    <section className="py-24 md:py-28 px-6" id="resume">
      <div className="max-w-[860px] mx-auto text-center">
        <FadeIn>
          <motion.a
            href="/DaveAlexanderResume.pdf"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-accent text-white rounded-xl px-8 py-3.5 font-medium transition-colors hover:bg-accent/90"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2v8m0 0L5 7m3 3l3-3M3 12h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download Resume (PDF)
          </motion.a>
          <p className="text-text-tertiary text-xs mt-3">
            One-page PDF · Updated March 2026
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
