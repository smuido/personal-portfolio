import './footer.css'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-terminal">
        <div className="footer-left" role="status" aria-live="polite">
          <span className="footer-copy">&copy; {currentYear} Smaya Guido</span>
        </div>

        <div className="footer-right" aria-label="External links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer noopener" className="footer-link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
