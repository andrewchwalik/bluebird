import bluebirdLogo from '../img/bluebird-logo.png'
import paniniImage from '../img/panini.png'
import './App.css'

type StoryBeat = {
  year: string
  title: string
  body: string
}

type FooterContactItem = {
  icon: string
  text: string
  href: string
  external?: boolean
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Our Story' },
  { label: 'Menu', href: '/menu/' },
  { label: 'Visit' },
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

const storyBeats: StoryBeat[] = [
  {
    year: '2017',
    title: 'Where It Started',
    body:
      'Bluebird began with a simple idea: create the kind of lunch spot we always wished Lakeside had. Something bright, welcoming, and full of food people genuinely looked forward to eating.',
  },
  {
    year: 'Family',
    title: 'Built Together',
    body:
      'What makes Bluebird feel personal is that it really is. It has always been a family-run place, shaped by the people behind the counter and the Lakeside rhythms that make summer here so special.',
  },
  {
    year: 'Today',
    title: 'What We Care About',
    body:
      'The goal is still the same: serve food that feels fresh, thoughtful, and easy to love, while giving people a place that fits the energy of a day by the water.',
  },
]

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
]

export default function OurStoryPage() {
  return (
    <div className="page-shell story-page-shell">
      <header className="hero-card story-page-hero">
        <nav className="topbar" aria-label="Primary">
          <a className="brand" href="/" aria-label="Bluebird home">
            <img className="brand-logo" src={bluebirdLogo} alt="Bluebird" />
          </a>

          <div className="nav-links">
            {navItems.map((item) =>
              item.href ? (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ) : (
                <span key={item.label}>{item.label}</span>
              ),
            )}
          </div>

          <a className="button button-primary hero-button" href={orderLink}>
            Order Online
          </a>
        </nav>

        <section className="hero-grid story-page-intro">
          <div className="hero-copy story-page-copy">
            <h1>
              <span className="hero-line hero-line-one">Our Sandwich</span>
              <span className="hero-line hero-line-two">
                <span className="hero-line-accent">Story</span>
              </span>
            </h1>
            <p className="hero-text">
              Bluebird is owned and operated by a Lakeside family of more than 15
              years, dreamed up as a little sandwich shop with simple, fresh food
              and an easy breezy lakeside spirit. It is our way of sharing the kind
              of place we always hoped would exist here: thoughtful, welcoming, and
              full of good things between two slices of bread.
            </p>

            <div className="hero-actions">
              <a className="button button-primary hero-button" href={orderLink}>
                Order Online
              </a>
            </div>
          </div>

          <div className="hero-visual story-page-visual" aria-hidden="true">
            <div className="story-page-orb">
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
        <section className="section story-feature-section">
          <div className="story-feature-copy">
            <h2>The Bluebird Beginning</h2>
            <p>
              Bluebird brings together lake-day energy, fresh ingredients, and the
              kind of menu people want to keep coming back for. From the start, the
              vision was never just to serve lunch. It was to create a place that
              feels like part of a perfect Lakeside day.
            </p>
            <p>
              The shop was founded in 2017 and has stayed family-owned from the
              beginning. Andrew, Rachel, and Murphy are still part of the everyday
              rhythm behind the counter, and that hands-on spirit shapes everything
              from the menu to the atmosphere.
            </p>
          </div>

          <div className="story-feature-card">
            <h3>What We Wanted Bluebird To Feel Like</h3>
            <p>
              Fresh food, bright afternoons, familiar faces, and the kind of
              spot that works just as well for a quick pickup as it does for a
              slow lunch with friends after a walk by the lake.
            </p>
          </div>
        </section>

        <section className="section story-timeline-section">
          <div className="menu-category-header story-section-header">
            <h2>How It Unfolded</h2>
            <p>
              A simple timeline gives us a place to tell the story in chapters now,
              and later we can replace this placeholder copy with the real milestones.
            </p>
          </div>

          <div className="story-timeline-grid">
            {storyBeats.map((beat) => (
              <article className="popular-card story-beat-card" key={beat.title}>
                <p className="story-beat-year">{beat.year}</p>
                <h3>{beat.title}</h3>
                <p className="story-beat-body">{beat.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section story-values-section">
          <div className="story-values-copy">
            <h2>Why Bluebird Matters</h2>
            <p>
              The best version of this page should feel personal. It should explain
              why Bluebird exists, what your family loves about Lakeside, and why
              you care so much about making food that feels fresh, fun, and worth
              the stop.
            </p>
            <p>
              For now, this section gives you a strong branded structure we can
              swap real story details into as you write them out.
            </p>
          </div>

          <div className="story-quote-card">
            <p>
              “Bluebird was built to feel like a natural part of a Lakeside day:
              easy, cheerful, and full of food people are excited to come back for.”
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
            <span>Contact</span>
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
