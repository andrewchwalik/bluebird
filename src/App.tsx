import paniniImage from '../img/panini.png'
import './App.css'

const navItems = ['Home', 'Our Story', 'Menu', 'Gallery', 'Visit']

const featuredSandwiches = [
  {
    name: 'The Bluebird Club',
    description:
      'Turkey, bacon, tomato jam, crisp greens, and herb mayo stacked on toasted sourdough.',
    tag: 'Best seller',
  },
  {
    name: 'Golden Hour Melt',
    description:
      'Roast beef, caramelized onions, sharp cheddar, and house mustard on a warm potato bun.',
    tag: 'Hot sandwich',
  },
  {
    name: 'Garden Flight',
    description:
      'Whipped feta, cucumber ribbons, pickled onions, and basil pesto on focaccia.',
    tag: 'Vegetarian',
  },
]

const galleryMoments = [
  'Morning pastry case',
  'Open-faced lunch boards',
  'The sandwich press in action',
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
            <span className="brand-mark">B</span>
            <span className="brand-copy">
              <strong>Bluebird</strong>
              <span>Sandwich Shop</span>
            </span>
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
              <span className="hero-line hero-line-one">Vibes,</span>
              <span className="hero-line hero-line-two">Views,</span>
              <span className="hero-line hero-line-three">&amp; Good Food</span>
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
      </header>

      <main>
        <section className="section intro-section" id="our-story">
          <div className="section-art">
            <div className="plated-dish">
              <div className="plated-dish-inner"></div>
            </div>
          </div>

          <div className="section-copy">
            <p className="eyebrow">Our story</p>
            <h2>Designed to feel handcrafted from the very first screen.</h2>
            <p>
              This starter gives you the bones of the site you mocked up: dramatic
              hero contrast, soft paper textures, rounded image blocks, menu callouts,
              and generous whitespace that keeps everything feeling premium.
            </p>
            <p>
              The copy is placeholder-friendly, the layouts collapse cleanly on mobile,
              and the palette is already tuned for a sandwich shop brand built around
              warmth, appetite, and neighborhood personality.
            </p>
            <a className="button button-secondary" href="#gallery">
              See Layout Flow
            </a>
          </div>
        </section>

        <section className="section menu-section" id="menu">
          <div className="section-heading">
            <p className="eyebrow">Featured menu</p>
            <h2>Three starter cards for your signatures.</h2>
            <p>
              Swap these with your real sandwiches, ingredients, prices, and photos
              whenever you are ready.
            </p>
          </div>

          <div className="menu-grid">
            {featuredSandwiches.map((item, index) => (
              <article className="menu-card" key={item.name}>
                <div className={`menu-image menu-image-${index + 1}`} aria-hidden="true" />
                <p className="menu-tag">{item.tag}</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="section-copy compact">
            <p className="eyebrow">Gallery</p>
            <h2>Room for food photography, interior shots, and behind-the-counter moments.</h2>
            <p>
              The image cards are placeholder panels for now, sized to mimic the lively
              stacked gallery feel from the reference.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryMoments.map((label, index) => (
              <figure className="gallery-card" key={label}>
                <div className={`gallery-image gallery-image-${index + 1}`} aria-hidden="true" />
                <figcaption>{label}</figcaption>
              </figure>
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
