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
              Sandwiches and salads have always been at the heart of Bluebird. Our
              little shop is family-owned; serving the Lakeside Chautauqua community
              since 2017. Read on to discover the full story of how Bluebird began
              bringing all the vibes, views, and good food.
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
        <section className="section story-opening-section">
          <div className="story-feature-copy">
            <h2>Bluebird or the Egg?</h2>
            <p>
              The Chwaliks dove into the food world when they opened up a small ice
              cream and sandwich shop in Marion, OH. Paninis, salads, and locally
              made ice cream were on the menu. That was were the beginnings of
              Bluebird began. It was also where the relationship of Andrew & Rachel
              developed into what it is today!
            </p>
            <p>
              After learning the tricks of the sandwich shop trade and developing
              their own recipes, the young couple moved up to the Lakeside area.
              When Andrew was still just the boyfriend, Rachel would bring him on
              the family trips to Lakeside. They both loved the community; and a
              serendipitous event lead them to taking over Bluebird and the Lakeside
              Laundromat.
            </p>
          </div>
        </section>

        <section className="section story-opening-section">
          <div className="story-feature-copy">
            <h2>Taking Flight</h2>
            <p>
              With a new sandwich shop just waiting to be revitalized and panini
              recipes in tow, the Chwaliks dove in head first getting Bluebird ready
              for the first season. All new branding, paint, wallpaper, vibes, and
              menu gave the space a fresh look. By May 2023, Bluebird was ready for
              the summer season.
            </p>
            <p>
              Leaning on their experience from their shop in Marion, Andrew & Rachel
              focused on simplifying the menu and building a healthy, quick eating
              option. Lettuce for salads was sourced locally from a hydroponic farm.
              Vegitables came from local farmers markets. And Lake Erie provided the
              views. The first season was a wild ride, but a good foundation to build
              around.
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
