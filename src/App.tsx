
import { useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Menu,
  Scissors,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import "./App.css";

const services = [
  { name: "Signature Haircut", description: "A precision cut tailored to your style.", price: "₦5,000" },
  { name: "Haircut & Beard", description: "A complete grooming experience.", price: "₦8,000" },
  { name: "Beard Sculpting", description: "Clean lines, careful shaping, refined finish.", price: "₦3,500" },
  { name: "Premium Grooming", description: "Haircut, beard care and finishing touches.", price: "₦12,000" },
];

const bookingNumber = "2348000000000";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const book = (service = "an appointment") => {
    const message = `Hello, I'd like to book ${service} at The Gentleman's Den.`;
    window.open(
      `https://wa.me/${bookingNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement">
        <span>YOUR STYLE. YOUR STANDARD.</span>
        <span className="announcement-right">Premium grooming, personal service.</span>
      </div>

      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark"><Scissors size={23} /></span>
          <span className="brand-copy">
            <strong>THE GENTLEMAN'S DEN</strong>
            <small>BARBERING & GROOMING</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>Our story</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#visit" onClick={closeMenu}>Find us</a>
          <button className="nav-cta" onClick={() => book()}>Book a visit <ArrowUpRight size={16} /></button>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" role="img" aria-label="Luxury barbershop interior">
          <div className="hero-image-overlay" />
          <div className="hero-image-caption">
            <span className="caption-line" />
            <span>THE ART OF LOOKING SHARP</span>
          </div>
        </div>

        <div className="hero-content">
          <div className="eyebrow"><span /> EST. FOR THE WELL-GROOMED</div>
          <h1>More than a<br />haircut. <em>A standard.</em></h1>
          <p className="hero-description">
            Considered cuts. Exceptional attention to detail.
            A space where looking your best comes naturally.
          </p>
          <div className="hero-actions">
            <button className="button-primary" onClick={() => book()}>
              Reserve your chair <ArrowUpRight size={17} />
            </button>
            <a className="text-link" href="#services">Explore services <span>↓</span></a>
          </div>

          <div className="hero-meta">
            <div><ShieldCheck size={18} /><span>Precision grooming</span></div>
            <div><Star size={17} /><span>Personal attention</span></div>
          </div>
        </div>

        <div className="hero-index"><span>01</span> / THE EXPERIENCE</div>
      </section>

      <section className="intro section-pad" id="about">
        <div className="section-kicker">THE GENTLEMAN'S DEN <span>—</span> OUR PHILOSOPHY</div>
        <div className="intro-grid">
          <h2>Good grooming<br />is <em>never</em> an accident.</h2>
          <div className="intro-copy">
            <p>
              The details matter. From the first consultation to the final
              finish, every visit is about finding the look that works for you.
            </p>
            <p>
              Take a seat, settle in and leave feeling like the best version of yourself.
            </p>
            <a href="#visit" className="text-link">Come see us <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="services-heading">
          <div>
            <div className="section-kicker">THE MENU <span>—</span> OUR SERVICES</div>
            <h2>Make time for <em>yourself.</em></h2>
          </div>
          <p>Thoughtful service. Transparent pricing.<br />No shortcuts, just good work.</p>
        </div>

        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-row" key={service.name}>
              <span className="service-number">0{index + 1}</span>
              <div className="service-details">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
              <span className="service-price">{service.price}</span>
              <button
                className="service-book"
                aria-label={`Book ${service.name}`}
                onClick={() => book(service.name)}
              >
                <ArrowUpRight size={20} />
              </button>
            </article>
          ))}
        </div>
        <p className="demo-note">Sample portfolio pricing. Replace with the real business's prices before launch.</p>
      </section>

      <section className="experience">
        <div className="experience-image" role="img" aria-label="Barber tools and grooming details" />
        <div className="experience-copy">
          <div className="section-kicker">THE DIFFERENCE <span>—</span> IN THE DETAILS</div>
          <h2>Your time.<br />Your chair.<br /><em>Your moment.</em></h2>
          <p>
            A good barber understands more than hair. It's about listening,
            getting the details right and making every visit worth your time.
          </p>
          <button className="button-primary" onClick={() => book()}>
            Let's get you booked <ArrowUpRight size={17} />
          </button>
        </div>
      </section>

      <section className="visit section-pad" id="visit">
        <div className="visit-copy">
          <div className="section-kicker">YOUR NEXT VISIT <span>—</span> FIND US</div>
          <h2>We'll save<br />you <em>a seat.</em></h2>
          <p>Have a question or a preferred time? Send us a message and let's arrange your visit.</p>
          <button className="button-primary" onClick={() => book()}>
            Chat on WhatsApp <ArrowUpRight size={17} />
          </button>
        </div>
        <div className="visit-details">
          <div className="detail-row">
            <MapPin />
            <div><strong>OUR LOCATION</strong><p>Your street address, city</p></div>
          </div>
          <div className="detail-row">
            <Clock3 />
            <div><strong>OPENING HOURS</strong><p>Mon – Sat · 9:00 AM – 8:00 PM</p><p>Sunday · By appointment</p></div>
          </div>
          <div className="detail-row">
            <Scissors />
            <div><strong>APPOINTMENTS</strong><p>Booking recommended</p></div>
          </div>
          <p className="demo-note">Fictional business details. Update before publishing for a real client.</p>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark"><Scissors size={20} /></span>
          <span className="brand-copy">
            <strong>THE GENTLEMAN'S DEN</strong>
            <small>BARBERING & GROOMING</small>
          </span>
        </a>
        <span className="footer-credit">A portfolio concept by <strong>Nuvora Digital Studio</strong></span>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
