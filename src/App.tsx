import { useEffect, useRef, useState } from 'react'
import paniniImage from '../img/panini.png'
import bluebirdVisitorsImage from '../img/bluebird-visitors.jpg'
import honeyBeeImage from '../img/products/honey-bee.png'
import SiteNav from './SiteNav'
import './App.css'

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

const popularDishes = [
  { name: 'Chicken Pesto', price: '$12.00', imageClass: 'popular-image-one', href: '/menu/#paninis' },
  { name: 'Barnyard Salad', price: '$14.00', imageClass: 'popular-image-two', href: '/menu/#salads' },
  {
    name: 'Honey Bee Smoothie',
    price: '$7.50',
    imageClass: 'popular-image-smoothie-honey-bee',
    imageSrc: honeyBeeImage,
    imageAlt: 'Honey Bee smoothie',
    href: '/menu/#smoothies',
  },
]

const menuCategories = [
  {
    title: 'Paninis',
    lines: ['Paninis'],
    imageClass: 'menu-category-image-one',
    href: '/menu/#paninis',
  },
  {
    title: 'Salads',
    lines: ['Salads'],
    imageClass: 'menu-category-image-two',
    href: '/menu/#salads',
  },
  {
    title: 'Subs',
    lines: ['Subs'],
    imageClass: 'menu-category-image-three',
    href: '/menu/#subs',
  },
  {
    title: 'Smoothies',
    lines: ['Smoothies'],
    imageClass: 'menu-category-image-four',
    href: '/menu/#smoothies',
  },
  {
    title: 'Kids',
    lines: ['Kids'],
    imageClass: 'menu-category-image-five',
    href: '/menu/#kids',
  },
  {
    title: 'Snacks',
    lines: ['Snacks'],
    imageClass: 'menu-category-image-six',
    href: '/menu/#snacks',
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

type InstagramPost = {
  title: string
  url: string
  image?: string
  imageClass?: string
}

const instagramFeedUrl = 'https://rss.app/feeds/v1.1/UdSJuStGPGwq5Bzt.json'
const getInstagramProxyImage = (url: string) =>
  `https://images.weserv.nl/?url=${encodeURIComponent(url.replace(/^https?:\/\//, ''))}&w=1200&fit=cover`
const fallbackInstagramPosts: InstagramPost[] = [
  {
    title: 'Golden panini',
    url: 'https://www.instagram.com/bluebird.ooo/',
    imageClass: 'instagram-image-one',
  },
  {
    title: 'Smoothie lineup',
    url: 'https://www.instagram.com/bluebird.ooo/',
    imageClass: 'instagram-image-two',
  },
  {
    title: 'Lunch by the lake',
    url: 'https://www.instagram.com/bluebird.ooo/',
    imageClass: 'instagram-image-three',
  },
  {
    title: 'Fresh salads',
    url: 'https://www.instagram.com/bluebird.ooo/',
    imageClass: 'instagram-image-four',
  },
]

const footerContactItems = [
  {
    text: '100 Maple Ave, Lakeside Marblehead, OH 43440',
    href: 'https://www.google.com/maps/dir/?api=1&destination=100+Maple+Ave,+Lakeside+Marblehead,+OH+43440',
    external: true,
  },
  {
    text: 'Hours: Mon, Fri-Sun 11:30am-7pm; Wed-Thu 11:30am-2pm; Tue Closed',
    href: '/visit/',
  },
  {
    text: '419.967.6747',
    href: 'tel:+14199676747',
  },
  {
    text: '@bluebird.ooo',
    href: 'https://www.instagram.com/bluebird.ooo/',
    external: true,
  },
]
const orderLink = 'https://cash.app/order/$bluebirdlakeside'
const repeatedHeroTickerItems = Array.from({ length: 6 }, () => heroTickerItems).flat()
const repeatedFooterTickerItems = Array.from({ length: 4 }, () => tickerItems).flat()

function App() {
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const testimonialsPageCount = Math.ceil(testimonials.length / 3)
  const [activeTestimonialsPage, setActiveTestimonialsPage] = useState(0)
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>(fallbackInstagramPosts)

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

  useEffect(() => {
    let isActive = true

    const loadInstagramFeed = async () => {
      try {
        const response = await fetch(instagramFeedUrl)

        if (!response.ok) {
          throw new Error(`Feed request failed with ${response.status}`)
        }

        const feed = await response.json()
        const latestPosts = Array.isArray(feed.items)
          ? [...feed.items]
              .sort((a, b) =>
                new Date(b.date_published ?? 0).getTime() -
                new Date(a.date_published ?? 0).getTime(),
              )
              .slice(0, 4)
              .map((item, index) => ({
                title: item.title ?? 'Bluebird post',
                url: item.url ?? 'https://www.instagram.com/bluebird.ooo/',
                image: item.image ? getInstagramProxyImage(item.image) : undefined,
                imageClass: fallbackInstagramPosts[index]?.imageClass,
              }))
          : fallbackInstagramPosts

        if (isActive && latestPosts.length > 0) {
          setInstagramPosts(latestPosts)
        }
      } catch (error) {
        console.error('Unable to load Instagram feed', error)
      }
    }

    void loadInstagramFeed()

    return () => {
      isActive = false
    }
  }, [])

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
        <SiteNav navItems={navItems} orderLink={orderLink} />

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

            <div className="hero-actions home-hero-actions">
              <a className="button button-primary hero-button" href={orderLink} target="_blank" rel="noreferrer">
                Order Online
              </a>
            </div>
          </div>

          <div className="hero-visual home-hero-visual" aria-hidden="true">
            <div className="hero-arch">
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

      <main>
        <section className="section intro-section" id="our-story">
          <div className="popular-header">
            <div className="popular-title-wrap">
              <h2>Popular Orders</h2>
            </div>
            <a className="popular-link" href={orderLink} target="_blank" rel="noreferrer">
              Start Your Order
            </a>
          </div>

          <div className="popular-grid">
            {popularDishes.map((item) => (
              <a className="popular-card popular-card-anchor" href={item.href} key={item.name}>
                <div className={`popular-image ${item.imageClass}`}>
                  <img src={item.imageSrc ?? paniniImage} alt={item.imageAlt ?? ''} />
                </div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </a>
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
              You can place your order for pickup right on our website! Tap the
              &quot;Order Now&quot; button and you&apos;ll be able to add all the
              delicious Bluebird goodness to your cart that your heart desires.
            </p>
            <p>
              Once you checkout, your order will be sent to our kitchen and our
              team will get working on crafting it. Once it&apos;s ready, you&apos;ll
              be able to pick it up on the glass countertop - no need to wait in
              line!
            </p>
            <a className="menu-promo-link" href={orderLink} target="_blank" rel="noreferrer">
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
                  <a className="menu-showcase-link" href={item.href} aria-label={`Browse ${item.title}`}>
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
            <a className="testimonials-link" href="https://g.page/r/CbeoEoWaFiVcEBM/review">
              Leave a Review
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
            <div className="about-photo-card">
              <img src={bluebirdVisitorsImage} alt="Guests visiting Bluebird" />
            </div>
          </div>

          <div className="about-copy">
            <h2>About Us</h2>
            <p>
              Bluebird brings together lake-day energy, fresh ingredients, and the kind
              of menu you actually want to come back for. We keep things simple and
              delicious, with handcrafted paninis, crisp salads, made-to-order subs,
              smoothies, and snacks built for afternoons by the water.
            </p>
            <p>
              We&apos;re a family-owned business, and have been since being founded in
              2017. You&apos;ll see Andrew, Rachel, and Murphy behind the counter
              slinging paninis on a regular basis. They&apos;ve been a Lakeside family
              for over 15 years now. Tap the button below to read more about the
              Bluebird story.
            </p>
            <a className="about-link" href="/our-story/">
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
            <a className="instagram-handle" href="https://www.instagram.com/bluebird.ooo/">
              @bluebird.ooo
            </a>
          </div>

          <div className="instagram-grid">
            {instagramPosts.map((item) => (
              <article className="instagram-card" key={item.title}>
                <a
                  className="instagram-card-link"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.title}
                >
                  {item.image ? (
                    <img className="instagram-photo" src={item.image} alt={item.title} />
                  ) : (
                    <div className={`instagram-image ${item.imageClass ?? ''}`} aria-hidden="true" />
                  )}
                </a>
              </article>
            ))}
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
          <a className="footer-cta-link" href={orderLink} target="_blank" rel="noreferrer">
            Order Now
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
