import bluebirdLogo from '../img/bluebird-logo.png'
import paniniImage from '../img/panini.png'
import './App.css'

type FooterContactItem = {
  icon: string
  text: string
  href: string
  external?: boolean
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Story', href: '/our-story/' },
  { label: 'Menu', href: '/menu/' },
  { label: 'Visit', href: '/visit/' },
  { label: 'Jobs', href: '/jobs/' },
]

const heroTickerItems = ['Bluebird will Open May 17 for the 2026 Season']
const tickerItems = [
  'Bluebird on the Lake',
  'Paninis',
  'Salads',
  'Made-to-Order Subs',
  'Fresh Smoothies',
]

const orderLink = 'https://cash.app/order/$bluebirdlakeside'
const repeatedHeroTickerItems = Array.from({ length: 6 }, () => heroTickerItems).flat()
const repeatedFooterTickerItems = Array.from({ length: 4 }, () => tickerItems).flat()

const footerContactItems: FooterContactItem[] = [
  {
    icon: '📍',
    text: '100 Maple Ave, Lakeside Marblehead, OH 43440',
    href: 'https://www.google.com/maps/dir/?api=1&destination=100+Maple+Ave,+Lakeside+Marblehead,+OH+43440',
    external: true,
  },
  {
    icon: '📞',
    text: '419.967.6747',
    href: 'tel:+14199676747',
  },
  {
    icon: '📧',
    text: 'hello@bluebird.ooo',
    href: 'mailto:hello@bluebird.ooo',
  },
  {
    icon: '📷',
    text: '@bluebird.ooo',
    href: 'https://www.instagram.com/bluebird.ooo/',
    external: true,
  },
]

export default function JobsPage() {
  return (
    <div className="page-shell jobs-page-shell">
      <header className="hero-card menu-page-hero">
        <nav className="topbar" aria-label="Primary">
          <a className="brand" href="/" aria-label="Bluebird home">
            <img className="brand-logo" src={bluebirdLogo} alt="Bluebird" />
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <a className="button button-primary hero-button" href={orderLink}>
            Order Online
          </a>
        </nav>

        <section className="hero-grid menu-page-intro">
          <div className="hero-copy menu-page-copy">
            <h1>
              <span className="hero-line hero-line-one">Work At</span>
              <span className="hero-line hero-line-two">
                <span className="hero-line-accent">Bluebird</span>
              </span>
            </h1>
            <p className="hero-text">
              Want to work at the coolest sandwich shop on Lake Erie? We accept
              applications on a rolling basis for each summer season, which runs
              from the middle of May to the beginning of September. Join our team
              of peeps for the summer! Apply below.
            </p>

            <div className="hero-actions">
              <a className="button button-primary hero-button" href="mailto:hello@bluebird.ooo?subject=Bluebird%20Jobs">
                Reach Out
              </a>
            </div>
          </div>

          <div className="hero-visual menu-page-visual" aria-hidden="true">
            <div className="hero-arch menu-page-hero-image">
              <img className="hero-panini" src={paniniImage} alt="" />
            </div>
          </div>
        </section>

        <div className="hero-ticker" aria-label="Bluebird highlights">
          <div className="hero-ticker-track">
            {repeatedHeroTickerItems.map((item, index) => (
              <span className="hero-ticker-item" key={`${item}-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="story-page-main">
        <section className="section story-opening-section">
          <div className="story-feature-copy">
            <h2>Join the Team</h2>
            <p>
              We can use this section to describe what it is like to work a season at
              Bluebird, what kind of hospitality and energy you value, and why the shop
              is a fun place to spend the summer.
            </p>
            <p>
              When you are ready, we can turn this into a real hiring page with position
              descriptions, schedule expectations, pay details, and a direct way to apply.
            </p>
          </div>
        </section>

        <section className="section story-opening-section">
          <div className="story-feature-copy">
            <h2>What We Can Add</h2>
            <p>
              This page can include front-of-house roles, kitchen prep roles, seasonal
              availability notes, age requirements, and any other details you want to make
              clear before someone reaches out.
            </p>
            <p>
              We can also add a simple application form later if you want to collect job
              interest right on the site.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="hero-ticker footer-ticker" aria-label="Bluebird footer highlights">
          <div className="hero-ticker-track">
            {repeatedFooterTickerItems.map((item, index) => (
              <span className="hero-ticker-item" key={`footer-${item}-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h3>Navigation</h3>
          <nav className="footer-nav" aria-label="Footer">
            <a href="/">Home</a>
            <a href="/menu/">Menu</a>
            <a href="/our-story/">Our Story</a>
            <a href="/visit/">Visit</a>
            <a href="/jobs/">Jobs</a>
          </nav>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <div className="footer-contact-list">
            {footerContactItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
              >
                <span aria-hidden="true">{item.icon}</span>
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column footer-cta">
          <h2>
            <span>Ready To</span>
            <span>Order?</span>
          </h2>
          <a className="footer-cta-link" href={orderLink}>
            Order Now
          </a>
        </div>
      </footer>
    </div>
  )
}
