export default function Footer() {
  return (
    <footer className="py-8 border-t border-border text-center">
      <p className="text-text-tertiary text-sm">
        <a href="mailto:alexanderdave619@gmail.com" className="hover:text-accent transition-colors">
          alexanderdave619@gmail.com
        </a>
        {' · '}
        <span>(760) 207-1299</span>
        {' · '}
        <a
          href="https://linkedin.com/in/davealexander760"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  )
}
