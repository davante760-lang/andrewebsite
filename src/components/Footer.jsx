export default function Footer() {
  return (
    <footer className="py-8 border-t border-border text-center">
      <p className="text-text-tertiary text-sm">
        <span>Atlanta, GA</span>
        {' · '}
        <a
          href="https://www.linkedin.com/in/andrecstewart23/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        {' · '}
        <a href="mailto:andre.cstewart91@gmail.com" className="hover:text-accent transition-colors">
          Email
        </a>
      </p>
    </footer>
  )
}
