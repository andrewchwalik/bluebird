import { type FormEvent, useState } from 'react'
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
const applicationEndpoint = 'https://bluebird-jobs-api.chwalik.workers.dev'
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
    icon: '🕒',
    text: 'Hours: Mon, Fri-Sun 11:30am-7pm; Wed-Thu 11:30am-2pm; Tue Closed',
    href: '/visit/',
  },
  {
    icon: '📷',
    text: '@bluebird.ooo',
    href: 'https://www.instagram.com/bluebird.ooo/',
    external: true,
  },
]

export default function JobsPage() {
  const [applicationStatus, setApplicationStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleApplicationSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setApplicationStatus('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const application = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [key, String(value)]),
    )

    try {
      const response = await fetch(applicationEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(application),
      })

      if (!response.ok) {
        throw new Error('Application submission failed')
      }

      form.reset()
      setApplicationStatus(
        'Thanks for applying! Your application was sent to the Bluebird team.',
      )
    } catch {
      setApplicationStatus(
        'Sorry, something went wrong while submitting your application. Please try again or email hello@bluebird.ooo.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <a className="button button-primary hero-button" href="#apply">
                Apply Today
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
        <section className="section story-opening-section job-wide-section">
          <div className="story-feature-copy job-wide-copy">
            <h2>Join the Flock</h2>
            <p>
              Working at Bluebird is pretty sweet, literally - you get a free
              smoothie or food item every shift. We recommend the Honey Bee. You&apos;ll
              also be working with a fun team of sandwich slingers, including the
              resturant owners - Andrew & Rachel.
            </p>
            <p>
              You&apos;ll go through a training program to ensure you&apos;re ready to craft
              all our handmade food and drinks. It involves some team bonding activites
              so you can get to know your fellow Peeps - that&apos;s what we call our team
              members. The day in a life of a Peep invloves taking order at our POS
              station, building sandwiches & salads, grilling and wrapping said
              sandwiches, whipping up smoothies, and general cleaning of dishes and
              space.
            </p>
            <p>
              Working with us also includes some other benefits you can take advantage
              of, like resume design and development by Andrew, a college professor. We
              host a team book club; Lakeside is the perfect place to get some summer
              reading in. If you&apos;re interested in becoming one of the Peeps, submit
              your information below.
            </p>
          </div>
        </section>

        <section className="section job-application-section" id="apply">
          <div className="story-feature-copy job-application-copy job-wide-copy">
            <h2>Apply to be a Peep</h2>
            <p>
              Thanks for your interest in joining our Bluebird team! Fill out the
              application below and one of our owners will reach out to schedule an
              interview.
            </p>
          </div>

          <form className="job-application-form" onSubmit={handleApplicationSubmit}>
            <label>
              <span>Full Name</span>
              <input name="fullName" type="text" required />
            </label>

            <div className="job-form-grid">
              <label>
                <span>Phone Number</span>
                <input name="phone" type="tel" required />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" required />
              </label>
            </div>

            <label>
              <span>Address</span>
              <input name="address" type="text" required />
            </label>

            <div className="job-form-grid">
              <label>
                <span>Date of Birth</span>
                <input name="dateOfBirth" type="date" required />
              </label>
              <label>
                <span>Summer Availability</span>
                <input name="availability" type="text" placeholder="Example: June through August" required />
              </label>
            </div>

            <label>
              <span>Why do you want to work at Bluebird?</span>
              <textarea name="whyBluebird" rows={4} required />
            </label>

            <label>
              <span>
                Please share any relevant experience that would make you a good fit to
                work at our little sandwich shop.
              </span>
              <textarea name="experience" rows={4} required />
            </label>

            <label>
              <span>
                On a scale 1 to 10, how well do you handle fast paced food service
                environments?
              </span>
              <select name="paceRating" required>
                <option value="">Choose a number</option>
                {Array.from({ length: 10 }, (_, index) => index + 1).map((rating) => (
                  <option value={rating} key={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </label>

            <button className="button button-primary hero-button job-submit-button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>

            {applicationStatus ? <p className="job-form-status">{applicationStatus}</p> : null}
          </form>
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
