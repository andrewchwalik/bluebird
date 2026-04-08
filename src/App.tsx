import { useEffect, useRef, useState } from 'react'
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
    title: 'Paninis',
    lines: ['Paninis'],
    imageClass: 'menu-category-image-one',
  },
  {
    title: 'Salads',
    lines: ['Salads'],
    imageClass: 'menu-category-image-two',
  },
  {
    title: 'Subs',
    lines: ['Subs'],
    imageClass: 'menu-category-image-three',
  },
  {
    title: 'Smoothies',
    lines: ['Smoothies'],
    imageClass: 'menu-category-image-four',
  },
  {
    title: 'Kids',
    lines: ['Kids'],
    imageClass: 'menu-category-image-five',
  },
  {
    title: 'Snacks',
    lines: ['Snacks'],
    imageClass: 'menu-category-image-six',
  },
]

const testimonials = [
  {
    rating: '4.9',
    quote:
      'We grabbed lunch after a walk by the lake and every sandwich felt fresh, filling, and made with real care. The smoothies were a hit too, and the whole place had such an easy, breezy feel.',
    name: 'Katharina W',
    date: '21.02.2025',
    initials: 'KW',
  },
  {
    rating: '5.0',
    quote:
      'Bluebird has become one of our regular stops in Lakeside. The paninis come out hot, the salads are crisp, and ordering direct is always quick and easy when we are headed to the water.',
    name: 'Patricia',
    date: '21.02.2025',
    initials: 'P',
  },
  {
    rating: '4.9',
    quote:
      'Everything we tried tasted thoughtful and house-made, and the staff made the whole visit feel warm from the moment we walked in. We will absolutely be back for another lunch run.',
    name: 'Steven 123',
    date: '21.02.2025',
    initials: 'S',
  },
  {
    rating: '5.0',
    quote:
      'The view, the sandwiches, and the quick service made this one of our favorite lunch stops in Lakeside. It feels relaxed, cheerful, and easy in the best way.',
    name: 'Jamie L',
    date: '25.02.2025',
    initials: 'JL',
  },
  {
    rating: '4.8',
    quote:
      'We ordered online before heading over and everything was ready right on time. The paninis were crisp and the salads felt way fresher than typical grab-and-go spots.',
    name: 'Morgan T',
    date: '26.02.2025',
    initials: 'MT',
  },
  {
    rating: '4.9',
    quote:
      'Bluebird has such a fun energy. Our kids loved the smoothies, and the grown-ups were already talking about which sandwiches to come back for next weekend.',
    name: 'Ella R',
    date: '28.02.2025',
    initials: 'ER',
  },
  {
    rating: '5.0',
    quote:
      'The whole place feels thoughtfully put together, from the menu to the music to the service. It is exactly the kind of lunch spot you hope to find near the lake.',
    name: 'Noah P',
    date: '02.03.2025',
    initials: 'NP',
  },
  {
    rating: '4.9',
    quote:
      'Our group tried subs, snacks, and smoothies, and every order came out looking great. It is one of those places that feels both easygoing and genuinely polished.',
    name: 'Claire D',
    date: '04.03.2025',
    initials: 'CD',
  },
  {
    rating: '4.8',
    quote:
      'I love that ordering direct is simple and fast. The food is consistently good, the portions are generous, and the staff always make the experience feel welcoming.',
    name: 'Ben S',
    date: '07.03.2025',
    initials: 'BS',
  },
]

const instagramPosts = [
  { title: 'Golden panini', imageClass: 'instagram-image-one' },
  { title: 'Smoothie lineup', imageClass: 'instagram-image-two' },
  { title: 'Lunch by the lake', imageClass: 'instagram-image-three' },
  { title: 'Fresh salads', imageClass: 'instagram-image-four' },
]

const footerNavItems = ['Home', 'Menu', 'About', 'Contact']
const footerContactItems = [
  { icon: '📍', text: '100 Maple Ave, Lakeside Marblehead, OH 43440' },
  { icon: '📞', text: '419.967.6747' },
  { icon: '📧', text: 'hello@bluebird.ooo' },
]
const orderLink = 'https://cash.app/order/$bluebirdlakeside'

function App() {
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const testimonialsPageCount = Math.ceil(testimonials.length / 3)
  const [activeTestimonialsPage, setActiveTestimonialsPage] = useState(0)

  useEffect(() => {
    const node = testimonialsRef.current

    if (!node) {
      return
    }

    const interval = window.setInterval(() => {
      setActiveTestimonialsPage((currentPage) => {
        const nextPage = (currentPage + 1) % testimonialsPageCount
        node.scrollTo({
          left: node.clientWidth * nextPage,
          behavior: 'smooth',
        })

        return nextPage
      })
    }, 5000)

    return () => window.clearInterval(interval)
  }, [testimonialsPageCount])

  const handleTestimonialsScroll = () => {
    const node = testimonialsRef.current

    if (!node) {
      return
    }

    const nextPage = Math.round(node.scrollLeft / node.clientWidth)
    setActiveTestimonialsPage(Math.min(testimonialsPageCount - 1, Math.max(0, nextPage)))
  }

  const jumpToTestimonialsPage = (pageIndex: number) => {
    const node = testimonialsRef.current

    if (!node) {
      return
    }

    node.scrollTo({
      left: node.clientWidth * pageIndex,
      behavior: 'smooth',
    })
    setActiveTestimonialsPage(pageIndex)
  }

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

          <a className="button button-primary hero-button" href={orderLink}>
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
              <a className="button button-primary hero-button" href={orderLink}>
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
            </div>
            <a className="popular-link" href={orderLink}>
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
            <a className="menu-promo-link" href={orderLink}>
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
          <div className="testimonials-header">
            <h2>
              <span>What Our</span>
              <span>Customers Say</span>
            </h2>
            <a className="testimonials-link" href="#visit">
              See All
            </a>
          </div>

          <div
            className="testimonials-grid"
            ref={testimonialsRef}
            onScroll={handleTestimonialsScroll}
          >
            {testimonials.map((item) => (
              <article className="testimonial-card" key={`${item.name}-${item.date}`}>
                <p className="testimonial-rating">★ {item.rating}</p>
                <p className="testimonial-quote">{item.quote}</p>
                <div className="testimonial-meta">
                  <div className="testimonial-avatar" aria-hidden="true">
                    {item.initials}
                  </div>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="testimonials-pager" aria-hidden="true">
            {Array.from({ length: testimonialsPageCount }).map((_, index) => (
              <button
                key={index}
                className={index === activeTestimonialsPage ? 'is-active' : undefined}
                type="button"
                onClick={() => jumpToTestimonialsPage(index)}
                aria-label={`Show testimonial set ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="section ordering-section">
          <div className="about-visual" aria-hidden="true">
            <div className="about-orb">
              <img src={paniniImage} alt="" />
            </div>
          </div>

          <div className="about-copy">
            <h2>About Us</h2>
            <p>
              Bluebird brings together lake-day energy, fresh ingredients, and the kind
              of menu you actually want to come back for. We keep things easygoing and
              thoughtful, with handcrafted paninis, crisp salads, made-to-order subs,
              smoothies, and snacks built for afternoons by the water.
            </p>
            <p>
              Our space is meant to feel bright, welcoming, and a little special without
              trying too hard. Whether you are grabbing lunch on the go or settling in
              after a walk through Lakeside, Bluebird is here for good food, great
              company, and a view worth lingering over.
            </p>
            <a className="about-link" href="#visit">
              Read More
            </a>
          </div>
        </section>

        <section className="section contact-section" id="visit">
          <div className="instagram-header">
            <h2>
              <span>Follow Us</span>
              <span>On Instagram</span>
            </h2>
            <a className="instagram-handle" href="#visit">
              @bluebird.ooo
            </a>
          </div>

          <div className="instagram-grid">
            {instagramPosts.map((item) => (
              <article className="instagram-card" key={item.title}>
                <div className={`instagram-image ${item.imageClass}`} aria-label={item.title} />
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="hero-ticker footer-ticker" aria-label="Bluebird footer highlights">
          <div className="hero-ticker-track">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span className="hero-ticker-item" key={`footer-${item}-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h3>Navigation</h3>
          <nav className="footer-nav" aria-label="Footer">
            {footerNavItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <div className="footer-contact-list">
            {footerContactItems.map((item) => (
              <p key={item.text}>
                <span aria-hidden="true">{item.icon}</span>
                <span>{item.text}</span>
              </p>
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

export default App
