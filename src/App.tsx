import bluebirdLogo from '../img/bluebird-logo.png'
import paniniImage from '../img/panini.png'
import './App.css'

const navItems = ['Home', 'Our Story', 'Menu', 'Gallery', 'Visit']
const tickerItems = [
  'Bluebird on the Lake',
  'Paninis',
  'Salads',
  'Made-to-Order Subs',
  'Fresh Smoothies',
]

const popularDishes = [
  { name: 'Lakefront Melt', price: '$10.99', imageClass: 'popular-image-one' },
  { name: 'Harbor Club Wrap', price: '$10.99', imageClass: 'popular-image-two' },
  { name: 'Sunrise Stack', price: '$10.99', imageClass: 'popular-image-three' },
]

const menuCategories = [
  {
    title: 'Breakfast Sandwiches',
    lines: ['Breakfast', 'Sandwiches'],
    imageClass: 'menu-category-image-one',
  },
  {
    title: 'Breakfast Burritos',
    lines: ['Breakfast', 'Burritos'],
    imageClass: 'menu-category-image-two',
  },
  {
    title: 'Sides',
    lines: ['Sides'],
    imageClass: 'menu-category-image-three',
  },
  {
    title: 'Beverages',
    lines: ['Beverages'],
    imageClass: 'menu-category-image-four',
  },
]

const visitDetails = [
  { label: 'Location', value: 'Bluebird Sandwich Shop, Main Street storefront' },
  { label: 'Hours', value: 'Mon-Sat 8:00 AM - 4:00 PM' },
  { label: 'Contact', value: '(555) 014-2747  |  hello@bluebirdsandwich.com' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="hero-card">
        <nav className="topbar" aria-label="Primary">
          <a className="brand" href="#home" aria-label="Bluebird home">
            <img className="brand-logo" src={bluebirdLogo} alt="Bluebird" />
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
                {item}
              </a>
            ))}
          </div>

          <a className="button button-primary" href="#visit">
            Order Online
          </a>
        </nav>

        <section className="hero-grid" id="home">
          <div className="hero-copy">
            <h1>
              <span className="hero-line hero-line-one">Vibes, Views</span>
              <span className="hero-line hero-line-two">
                &amp; <span className="hero-line-accent">Good Food</span>
              </span>
            </h1>
            <p className="hero-text">
              Bluebird is a small sandwich shop in the Lakeside Chautauqua community,
              located right on the shores of Lake Erie. We serve handcrafted paninis,
              crisp salads, made-to-order subs, and fresh smoothies - all served in
              the coolest restaurant on the peninsula.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#menu">
                Order Online
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-arch">
              <img className="hero-panini" src={paniniImage} alt="" />
            </div>
          </div>
        </section>

        <div className="hero-ticker" aria-label="Bluebird highlights">
          <div className="hero-ticker-track">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span className="hero-ticker-item" key={`${item}-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="section intro-section" id="our-story">
          <div className="popular-header">
            <div className="popular-title-wrap">
              <h2>Popular Dishes</h2>
              <div className="popular-badge">
                <span>Best</span>
                <span>By The</span>
                <span>Lake</span>
              </div>
            </div>
            <a className="popular-link" href="#menu">
              Start Your Order
            </a>
          </div>

          <div className="popular-grid">
            {popularDishes.map((item) => (
              <article className="popular-card" key={item.name}>
                <div className={`popular-image ${item.imageClass}`}>
                  <img src={paniniImage} alt="" />
                </div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <a className="popular-card-link" href="#visit">
                  More
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section menu-section" id="menu">
          <div className="menu-promo-visual" aria-hidden="true">
            <div className="menu-promo-orb">
              <img src={paniniImage} alt="" />
            </div>
          </div>

          <div className="menu-promo-copy">
            <h2>You Can Order Good Food Online</h2>
            <p>
              Ordering through Bluebird means better value, a smoother pickup flow,
              and no surprise third-party fees getting between you and lunch.
            </p>
            <p>
              Skip the apps, order straight from the source, and get your favorite
              sandwiches, salads, and smoothies exactly the way you want them.
            </p>
            <a className="menu-promo-link" href="#visit">
              Order Now
            </a>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="menu-showcase-header">
            <h2>Our Menu</h2>
          </div>

          <div className="menu-showcase-grid">
            {menuCategories.map((item) => (
              <article className="menu-showcase-card" key={item.title}>
                <div className={`menu-showcase-image ${item.imageClass}`}>
                  <img src={paniniImage} alt="" />
                </div>
                <div className="menu-showcase-footer">
                  <h3>
                    {item.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </h3>
                  <a className="menu-showcase-link" href="#visit" aria-label={`Browse ${item.title}`}>
                    <span aria-hidden="true">›</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section promo-section">
          <div className="promo-poster">
            <div className="poster-card">
              <p className="poster-kicker">House favorite</p>
              <h3>Bluebird Brisket Melt</h3>
              <ul>
                <li>slow roasted beef</li>
                <li>smoked cheddar</li>
                <li>crispy onions</li>
                <li>pepper jam aioli</li>
              </ul>
              <strong>$15 lunch combo</strong>
            </div>
          </div>

          <div className="section-copy">
            <p className="eyebrow">Promotions</p>
            <h2>Space for limited-time offers, combos, or seasonal campaigns.</h2>
            <p>
              This section is built to hold poster-style artwork or a bold promo card,
              which matches the strong marketing panels in your inspiration image.
            </p>
            <a className="button button-primary" href="#visit">
              Feature This Offer
            </a>
          </div>
        </section>

        <section className="section ordering-section">
          <div className="section-copy">
            <p className="eyebrow">Online ordering</p>
            <h2>A ready-made callout for delivery apps, pickup, or your own ordering flow.</h2>
            <p>
              Keep this as an informational section, or connect it later to Toast,
              Square, Clover, Shopify, or a custom ordering experience.
            </p>
            <div className="store-buttons" aria-label="Ordering platforms">
              <a className="store-pill" href="/">
                Pickup
              </a>
              <a className="store-pill" href="/">
                Delivery
              </a>
            </div>
          </div>

          <div className="device-scene" aria-hidden="true">
            <div className="laptop">
              <div className="screen-grid">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="phone">
              <div className="screen-grid compact-grid">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="visit">
          <div className="contact-details">
            <p className="eyebrow">Visit Bluebird</p>
            <h2>Contact, hours, and a map-ready area for your storefront details.</h2>

            <div className="detail-list">
              {visitDetails.map((item) => (
                <article className="detail-card" key={item.label}>
                  <p>{item.label}</p>
                  <strong>{item.value}</strong>
                </article>
              ))}
            </div>
          </div>

          <form className="contact-form">
            <h3>Start a catering inquiry</h3>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              Event details
              <textarea
                name="details"
                rows={5}
                placeholder="Tell us what you need for lunch boxes, office spreads, or private events."
              />
            </label>
            <button className="button button-primary" type="submit">
              Send Inquiry
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
