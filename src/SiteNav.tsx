import { useEffect, useState } from 'react'
import bluebirdLogo from '../img/bluebird-logo.png'
import dontForgetYourChipsImage from '../img/dont-forget-your-chips.png'

type NavItem = {
  label: string
  href: string
}

type SiteNavProps = {
  navItems: NavItem[]
  orderLink: string
}

export default function SiteNav({ navItems, orderLink }: SiteNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className={`topbar${isOpen ? ' topbar-menu-open' : ''}`} aria-label="Primary">
      <a className="brand" href="/" aria-label="Bluebird home">
        <img className="brand-logo" src={bluebirdLogo} alt="Bluebird" />
      </a>

      <button
        className={`nav-toggle${isOpen ? ' nav-toggle-open' : ''}`}
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="site-nav-links"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="nav-toggle-line" />
        <span className="nav-toggle-line" />
        <span className="nav-toggle-line" />
      </button>

      <div className={`nav-links${isOpen ? ' nav-links-open' : ''}`} id="site-nav-links">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
        <img
          className="nav-menu-accent"
          src={dontForgetYourChipsImage}
          alt=""
          aria-hidden="true"
        />
      </div>

      <a
        className="button button-primary hero-button topbar-order-button"
        href={orderLink}
        target="_blank"
        rel="noreferrer"
      >
        Order Online
      </a>
    </nav>
  )
}
