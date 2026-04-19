import bluebirdLogo from '../img/bluebird-logo.png'
import paniniImage from '../img/panini.png'
import './App.css'

type MenuItem = {
  name: string
  price: string
  ingredients: string
  imageClass: string
}

type MenuSection = {
  title: string
  description: string
  items: MenuItem[]
  isScrollable?: boolean
}

type FooterContactItem = {
  icon: string
  text: string
  href: string
  external?: boolean
}

const createMenuItemId = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

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

const menuSections: MenuSection[] = [
  {
    title: 'Paninis',
    description:
      'All paninis are handcrafted and come with your choice of classic, barbecue, sour cream & onion, or cheddar & sour cream chips.',
    isScrollable: true,
    items: [
      {
        name: 'Peacock',
        price: '$12.00',
        ingredients: 'Ham, pear, brie cheese, arugula, and fig spread',
        imageClass: 'popular-image-one',
      },
      {
        name: 'Hamilton',
        price: '$12.00',
        ingredients: 'Ham, gouda, apples, and honey mustard',
        imageClass: 'popular-image-two',
      },
      {
        name: 'Grilled Cheese Crunch',
        price: '$11.50',
        ingredients: 'Cheddar, gouda, and kettle chips',
        imageClass: 'popular-image-three',
      },
      {
        name: 'Chicken Pesto',
        price: '$12.00',
        ingredients: 'Chicken breast, sun-dried tomatoes, provolone, and pesto',
        imageClass: 'popular-image-one',
      },
      {
        name: 'Ciao Chow',
        price: '$12.00',
        ingredients: 'Ham, salami, mozzarella, spinach, sun dried tomatoes, and pesto',
        imageClass: 'popular-image-two',
      },
      {
        name: 'Happy Lakesider',
        price: '$12.00',
        ingredients: "Bacon, chicken breast, cheddar, lettuce, tomatoes, and mama's mayo",
        imageClass: 'popular-image-three',
      },
      {
        name: 'BLT',
        price: '$12.00',
        ingredients: "Bacon, lettuce, tomatoes, and mama's mayo",
        imageClass: 'popular-image-one',
      },
      {
        name: 'Veggie Delight',
        price: '$12.00',
        ingredients: "Basil, spinach, lettuce, tomatoes, provolone, and mama's mayo",
        imageClass: 'popular-image-two',
      },
    ],
  },
  {
    title: 'Salads',
    description:
      'Every salad is made fresh and comes with your choice of balsamic vinaigrette, ranch, poppyseed, italian, greek, or olive oil & balsamic vinegar dressing.',
    isScrollable: true,
    items: [
      {
        name: 'Rockin’ Robin',
        price: '$11.75',
        ingredients: 'Romaine lettuce, tomatoes, cucumbers, carrots, and cheddar',
        imageClass: 'popular-image-two',
      },
      {
        name: 'Ugly Duckling',
        price: '$13.50',
        ingredients: 'Mixed greens, strawberries, grapes, cucumbers, carrots, and almond slices',
        imageClass: 'popular-image-three',
      },
      {
        name: 'Barnyard',
        price: '$14.00',
        ingredients: 'Baby spinach, chicken breast, strawberries, almond slices, and goat cheese',
        imageClass: 'popular-image-one',
      },
      {
        name: 'Big Fat Greek',
        price: '$14.00',
        ingredients: 'Romaine, chicken breast, cucumbers, red onion, chickpeas, and feta cheese',
        imageClass: 'popular-image-two',
      },
    ],
  },
  {
    title: 'Subs',
    description:
      'All subs are handcrafted and come with your choice of classic, barbecue, sour cream & onion, or cheddar & sour cream chips.',
    items: [
      {
        name: 'Porker',
        price: '$9.00',
        ingredients: 'Ham, cheddar, lettuce, tomato, pickles, and honey mustard',
        imageClass: 'popular-image-three',
      },
      {
        name: 'Gobbler',
        price: '$9.00',
        ingredients: 'Turkey, provolone, lettuce, tomato, pickles, and mayo',
        imageClass: 'popular-image-one',
      },
      {
        name: 'Backpacker',
        price: '$9.00',
        ingredients: 'Ham, salami, mozzarella, lettuce, tomato, and italian dressing',
        imageClass: 'popular-image-two',
      },
    ],
  },
  {
    title: 'Smoothies',
    description:
      'Every smoothie is made fresh, without ice, an can be made vegan with our various milk options: 2%, coconut, almond, & lactose free.',
    isScrollable: true,
    items: [
      {
        name: 'Strawberry Cream',
        price: '$7.50',
        ingredients:
          'Strawberries, bananas, greek yogurt, whole milk, apple juice, and homemade whip cream',
        imageClass: 'popular-image-one',
      },
      {
        name: 'Peanut Butter Banana',
        price: '$7.50',
        ingredients: 'Bananas, peanut butter, whole milk, and homemade whip cream',
        imageClass: 'popular-image-two',
      },
      {
        name: 'Tropical Sun',
        price: '$7.50',
        ingredients:
          'Mangos, bananas, pineapple, apple juice, coconut milk, and homemade whip cream',
        imageClass: 'popular-image-three',
      },
      {
        name: 'Honey Bee',
        price: '$7.50',
        ingredients: 'Bananas, honey, vanilla, whole milk, homemade whip cream',
        imageClass: 'popular-image-one',
      },
    ],
  },
  {
    title: 'Kids',
    description:
      'All kids meals come with your choice of GoGo Squeeze applesauce or classic, barbecue, sour cream & onion, or cheddar & sour cream chips. Also comes with your choice of a juice box or water.',
    items: [
      {
        name: "Kid's Grilled Cheese",
        price: '$6.00',
        ingredients: 'Cheddar cheese',
        imageClass: 'popular-image-two',
      },
      {
        name: 'PB & J Sandwich',
        price: '$6.00',
        ingredients: 'Creamy peanut butter, jelly',
        imageClass: 'popular-image-one',
      },
      {
        name: 'Turkey & Cheese',
        price: '$6.00',
        ingredients: 'Turkey, cheddar cheese',
        imageClass: 'popular-image-three',
      },
    ],
  },
  {
    title: 'Snacks',
    description: '',
    items: [
      {
        name: 'Fresh Strawberry Cup',
        price: '$4.00',
        ingredients: '',
        imageClass: 'popular-image-one',
      },
      {
        name: 'Frozen Cookie',
        price: '$2.50',
        ingredients: '',
        imageClass: 'popular-image-three',
      },
      {
        name: 'Chips',
        price: '$1.00',
        ingredients: '',
        imageClass: 'popular-image-two',
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <div className="page-shell menu-page-shell">
      <header className="hero-card menu-page-hero">
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

        <section className="hero-grid menu-page-intro">
          <div className="hero-copy menu-page-copy">
            <h1>
              <span className="hero-line hero-line-one">Our Delicious</span>
              <span className="hero-line hero-line-two">
                <span className="hero-line-accent">Menu</span>
              </span>
            </h1>
            <p className="hero-text">
              Take a look at our full menu of sandwiches, salads, smoothies, and
              more. Jot down your favorites for when you come into our shop or
              place your order for pickup right on our website.
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

      <main className="menu-page-main">
        {menuSections.map((section) => (
          <section className="section menu-category-section" key={section.title}>
            <div className="menu-category-header">
              <div className="menu-category-heading-row">
                <h2>{section.title}</h2>
                <a className="popular-link menu-category-link" href={orderLink}>
                  Start Your Order
                </a>
              </div>
              {section.description ? <p>{section.description}</p> : null}
            </div>

            <div
              className={
                section.isScrollable ? 'menu-category-grid menu-category-grid-scroll' : 'menu-category-grid'
              }
            >
              {section.items.map((item) => (
                <article
                  className="popular-card menu-item-card"
                  id={createMenuItemId(item.name)}
                  key={item.name}
                >
                  <div className={`popular-image ${item.imageClass}`}>
                    <img src={paniniImage} alt="" />
                  </div>
                  <h3>{item.name}</h3>
                  <p className="menu-item-price">{item.price}</p>
                  {item.ingredients ? (
                    <p className="menu-item-ingredients">{item.ingredients}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ))}
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
