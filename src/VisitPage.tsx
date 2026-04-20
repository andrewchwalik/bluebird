import paniniImage from '../img/panini.png'
import SiteNav from './SiteNav'
import './App.css'

type FooterContactItem = {
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
const mapsApiKey = 'AIzaSyAwNDN63PVFeoR0OXNOL2Nc9tYzvZtx00k'
const bluebirdAddress = '100 Maple Ave, Lakeside Marblehead, OH 43440'
const bluebirdDirectionsLink =
  'https://www.google.com/maps/dir/?api=1&destination=100+Maple+Ave,+Lakeside+Marblehead,+OH+43440'
const bluebirdMapUrl = `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=${encodeURIComponent(
  `Bluebird, ${bluebirdAddress}`,
)}`
const repeatedHeroTickerItems = Array.from({ length: 6 }, () => heroTickerItems).flat()
const repeatedFooterTickerItems = Array.from({ length: 4 }, () => tickerItems).flat()

const hours = [
  { day: 'Monday', time: '11:30am - 7pm' },
  { day: 'Tuesday', time: 'Closed' },
  { day: 'Wednesday', time: '11:30am - 2pm' },
  { day: 'Thursday', time: '11:30am - 2pm' },
  { day: 'Friday', time: '11:30am - 7pm' },
  { day: 'Saturday', time: '11:30am - 7pm' },
  { day: 'Sunday', time: '11:30am - 7pm' },
]

const footerContactItems: FooterContactItem[] = [
  {
    text: '100 Maple Ave, Lakeside Marblehead, OH 43440',
    href: 'https://www.google.com/maps/dir/?api=1&destination=100+Maple+Ave,+Lakeside+Marblehead,+OH+43440',
    external: true,
  },
  {
    text: '419.967.6747',
    href: 'tel:+14199676747',
  },
  {
    text: 'Hours: Mon, Fri-Sun 11:30am-7pm; Wed-Thu 11:30am-2pm; Tue Closed',
    href: '/visit/',
  },
  {
    text: '@bluebird.ooo',
    href: 'https://www.instagram.com/bluebird.ooo/',
    external: true,
  },
]

export default function VisitPage() {
  return (
    <div className="page-shell visit-page-shell">
      <header className="hero-card menu-page-hero">
        <SiteNav navItems={navItems} orderLink={orderLink} />

        <section className="hero-grid menu-page-intro">
          <div className="hero-copy menu-page-copy">
            <h1>
              <span className="hero-line hero-line-one">Visit</span>
              <span className="hero-line hero-line-two">
                <span className="hero-line-accent">Bluebird</span>
              </span>
            </h1>
            <p className="hero-text">
              Come visit us in Lakeside Chautauqua. Our community is gated during
              the summer months so the following info will give you all the details
              on how to get in for free to try our delicious sandwiches, salads,
              and smoothies.
            </p>

            <div className="hero-actions">
              <a className="button button-primary hero-button" href={orderLink}>
                Order Online
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
        <section className="section story-opening-section visit-hours-section">
          <div className="story-feature-copy">
            <h2>Get In for Free!</h2>
            <p>
              Bluebird is located in the Lakeside Chautauqua community on the
              shores of Lake Erie. During the summer season, it does cost around
              $40 for a day pass. However, you can get in for free for two hours
              to enjoy the shops and restaurants, like Bluebird. At the gate, just
              let the attendant know you need the <em>free shopping and dining
              pass</em>. Unfortunately, this pass does not include parking.
            </p>
            <p>
              Parking can be a bit crazy around our community. If you do want to
              pay to get your car in, your best bet will be to find some street
              parking around the downtown area. If you do not want to pay to get
              your car in, you can park at the 5th Street Gate or the 8th Street
              Gate. Leave your car there and let the gate attendant know you want
              a golf cart shuttle to pick you up. Let the driver know you want to
              smash some Bluebird paninis and they will take you right down to our
              shop.
            </p>
          </div>

          <aside className="visit-hours-card" aria-label="Bluebird summer hours">
            <p className="visit-hours-kicker">Opening May 17</p>
            <h3>2026 Summer Hours</h3>
            <div className="visit-hours-list">
              {hours.map((item) => (
                <div className="visit-hours-row" key={item.day}>
                  <span>{item.day}</span>
                  <strong>{item.time}</strong>
                </div>
              ))}
            </div>
            <p className="visit-hours-note">
              *Hours are subject to change based on staff availability.
            </p>
          </aside>
        </section>

        <section className="section visit-map-section">
          <div className="story-feature-copy">
            <h2>Find the Shop</h2>
            <p>
              Bluebird is located on the shoreline of Lake Erie in the Lakeside
              Chautauqua community. Our physical address is 100 Maple Ave., Suite
              #2, Lakeside Marblehead, OH 43440. That will take you to the Pavillion
              complex; our sandwich shop is located in the building to the right.
            </p>
            <p>
              Need turn-by-turn guidance? Tap the button below and Google Maps will
              open directions right to Bluebird so you can start showing down.
            </p>
            <a className="menu-promo-link" href={bluebirdDirectionsLink} target="_blank" rel="noreferrer">
              Get Directions
            </a>
          </div>

          <div className="visit-map-card">
            <iframe
              title="Map showing Bluebird in Lakeside Marblehead"
              src={bluebirdMapUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
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
                {item.text}
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
