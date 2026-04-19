import bluebirdLogo from '../img/bluebird-logo.png'
import paniniImage from '../img/panini.png'
import andrewAndRachelImage from '../img/andrew-and-rachel-at-topped.JPG'
import rachelInBluebirdImage from '../img/rachel-in-the-bluebird.jpg'
import andrewOnGolfcartImage from '../img/andrew-on-the-bluebird-golfcart.jpeg'
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

const storyBeats: StoryBeat[] = [
  {
    year: '2026',
    title: 'Still Growing',
    body:
      'Milkshakes did not work out well for speed so those were swapped out for new grab-and-go options and a new sandwich bread. The space also got a unique new element, a giant tree to lean into the Bluebird experience.',
  },
  {
    year: '2025',
    title: 'Finding Our Groove',
    body:
      'Running a seasonal restaurant was a new experience. More simplifications were made to speed up order processing. But new menu items were added, like the Honey Bee Smoothie and milkshakes.',
  },
  {
    year: '2024',
    title: 'Growing Into It',
    body:
      'With one full season of learning in the books, processes and menu items were optimized - like sadly saying goodbye to the tempermental softserve machines. Order times got faster as a result.',
  },
  {
    year: '2023',
    title: 'Opening Season',
    body:
      'After a full refresh of the space and shop branding, the new-look Bluebird opened for the first time. There was an updated menu, but still a number of original favorties - just with a Chwalik spin.',
  },
  {
    year: '2022',
    title: 'A New Chapter',
    body:
      'The Chwaliks purchased the Bluebird Cafe and the Lakeside Laundromat, starting their Lakeside Chautaqua adventure and planting down roots on the peninsula. The dropped "Cafe" from the name, making it Bluebird.',
  },
  {
    year: '2017',
    title: 'Where It Started',
    body:
      'Bluebird Cafe was started by a young family, looking to create a healthier eating option at Lakeside. The new resturant took over the space that housed Dockside, the Dock Shop, an arcade, and other countless busiensses over the decades.',
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
  {
    icon: '📷',
    text: '@bluebird.ooo',
    href: 'https://www.instagram.com/bluebird.ooo/',
    external: true,
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
        <section className="section story-opening-section story-opening-section-split">
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

          <div className="story-media story-media-right">
            <div className="story-photo-frame story-photo-frame-top">
              <img className="story-photo story-photo-top" src={andrewAndRachelImage} alt="Andrew and Rachel together" />
            </div>
          </div>
        </section>

        <section className="section story-opening-section story-opening-section-split story-opening-section-reverse">
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

          <div className="story-media story-media-left">
            <div className="story-photo-frame story-photo-frame-left">
              <img className="story-photo story-photo-left" src={rachelInBluebirdImage} alt="Rachel inside Bluebird" />
            </div>
          </div>
        </section>

        <section className="section story-opening-section story-opening-section-split">
          <div className="story-feature-copy">
            <h2>Building a Solid Nest</h2>
            <p>
              We&apos;ve been learning each season, working to improve Bluebird -
              aiming to provide a better experience for our team and customers. Our
              motto of vibes, views, and good food leads the chrage on how we want
              to run our little sandwich shop. Creating a unique and cheery
              atmosphere for everyone who walks in the door, that&apos;s the vibes.
              The views come from Lake Erie, our shop decor, and the apetizing food.
              We always want to serve good food, that leans on the healthy side of
              life but still comes out quick.
            </p>
            <p>
              Thank you to everyone who&apos;s helped Bluebird take flight so far.
              We&apos;re looking forward to many more years to come of serving good
              food in the Lakeside Chautauqua community in our little spot on the
              shores of Lake Erie.
            </p>
          </div>

          <div className="story-media story-media-right">
            <div className="story-photo-frame story-photo-frame-right">
              <img className="story-photo story-photo-right" src={andrewOnGolfcartImage} alt="Andrew on the Bluebird golf cart" />
            </div>
          </div>
        </section>

        <section className="section story-timeline-section">
          <div className="menu-category-header story-section-header">
            <h2>How It Unfolded</h2>
            <p>
              Follow the timeline of major moments that helped shape Bluebird into
              the little lakeside shop it is today.
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
