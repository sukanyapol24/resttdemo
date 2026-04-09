import { useState, useEffect } from "react";

/* ─── FONTS ─────────────────────────────────────────────── */
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=DM+Serif+Display:ital@0;1&family=Jost:wght@300;400;500;600;700&display=swap";
document.head.appendChild(fontLink);

/* ─── GLOBAL STYLES ─────────────────────────────────────── */
const styleEl = document.createElement("style");
styleEl.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmerGold {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes divaFall {
    0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
    10% { opacity: 0.6; }
    90% { opacity: 0.3; }
    100% { transform: translateY(100vh) rotate(540deg) translateX(60px); opacity: 0; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-8px); }
  }

  * { box-sizing: border-box; }

  .font-display { font-family: 'DM Serif Display', 'Cormorant Garamond', serif; }
  .font-serif   { font-family: 'Cormorant Garamond', serif; }
  .font-body    { font-family: 'Jost', sans-serif; }

  .shimmer-gold {
    background: linear-gradient(90deg, #7a5c00, #c8960a, #b8860b, #c8960a, #7a5c00);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmerGold 4s linear infinite;
  }

  .diya-particle {
    position: fixed; pointer-events: none; z-index: 9999;
    width: 6px; height: 6px;
    background: radial-gradient(ellipse, #FFD700 0%, #FF8C00 50%, #FF4500 80%, transparent 100%);
    border-radius: 50% 50% 0 50%;
    animation: divaFall linear infinite;
    box-shadow: 0 0 6px rgba(255,165,0,0.5);
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #faf7f0; }
  ::-webkit-scrollbar-thumb { background: #B8860B; border-radius: 2px; }

  .hover-lift { transition: transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.4s; }
  .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,0,0,0.10); }

  .section-light { background: #faf7f0; }
  .section-cream { background: #f4efe3; }
  .section-white { background: #ffffff; }

  .gold-rule {
    width: 60px; height: 2px;
    background: linear-gradient(90deg, transparent, #B8860B, transparent);
    margin: 0 auto;
  }
  .gold-border { border: 1px solid rgba(184,134,11,0.3); }
  .gold-border-strong { border: 1px solid rgba(184,134,11,0.6); }

  /* Cream card */
  .card-cream {
    background: #fff;
    border: 1px solid rgba(184,134,11,0.18);
    box-shadow: 0 4px 24px rgba(0,0,0,0.04);
  }
  .card-cream:hover {
    border-color: rgba(184,134,11,0.45);
    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  }

  /* Input style */
  .input-luxury {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1.5px solid rgba(0,0,0,0.18);
    outline: none;
    padding: 10px 0;
    font-family: 'Jost', sans-serif;
    font-size: 0.95rem;
    color: #1a1a1a;
    transition: border-color 0.3s;
  }
  .input-luxury::placeholder { color: rgba(0,0,0,0.3); }
  .input-luxury:focus { border-bottom-color: #B8860B; }

  /* Tagline ornament */
  .ornament-line {
    display: flex; align-items: center; gap: 16px; justify-content: center;
  }
  .ornament-line::before, .ornament-line::after {
    content: ''; flex: 1; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(184,134,11,0.5));
  }
  .ornament-line::after {
    background: linear-gradient(90deg, rgba(184,134,11,0.5), transparent);
  }

  /* FAQ hover accordion */
  .faq-item {
    border-bottom: 1px solid rgba(184,134,11,0.18);
    transition: background 0.3s ease;
    cursor: default;
    overflow: hidden;
  }
  .faq-item:first-child { border-top: 1px solid rgba(184,134,11,0.18); }
  .faq-item:hover { background: rgba(184,134,11,0.04); }
  .faq-answer {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease, padding 0.35s ease;
    padding: 0 28px;
  }
  .faq-item:hover .faq-answer {
    max-height: 300px;
    opacity: 1;
    padding: 0 28px 22px 28px;
  }
  .faq-question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 28px;
    transition: color 0.3s;
  }
  .faq-item:hover .faq-question { color: #B8860B; }
  .faq-indicator {
    width: 22px; height: 22px; flex-shrink: 0;
    border: 1.5px solid rgba(184,134,11,0.4);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px;
    transition: transform 0.4s ease, background 0.3s, border-color 0.3s;
    color: #B8860B;
  }
  .faq-item:hover .faq-indicator {
    background: #B8860B;
    color: white;
    border-color: #B8860B;
    transform: rotate(45deg);
  }

  /* Texture overlay */
  .paper-texture {
    background-image:
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
  }
`;
document.head.appendChild(styleEl);

/* ─── DIYA PARTICLES ────────────────────────────────────── */
function DiyaParticles() {
  return (
    <div aria-hidden="true">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="diya-particle" style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${12 + Math.random() * 14}s`,
          animationDelay: `${Math.random() * 12}s`,
          opacity: 0.4 + Math.random() * 0.3,
          transform: `scale(${0.5 + Math.random() * 1})`,
        }} />
      ))}
    </div>
  );
}

/* ─── DATA ───────────────────────────────────────────────── */
const NAV_LINKS = ["Home", "About", "Menu", "Gallery", "Help", "Contact"];

const DISHES = [
  { name: "Raan-e-Dhaba", desc: "Slow-roasted whole leg of lamb, midnight masala, saffron jus, charcoal-smoked achaar", tag: "Chef's Crown", img: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Shahi Paneer Kofta", desc: "Handcrafted cottage cheese dumplings, makhani gravy, silver varq, house-ground spices", tag: "Most Loved", img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Tandoori Jhinga", desc: "Royal Bengal prawns marinated 12 hours, ajwain butter, micro-green chutney, smoked lemon", tag: "Premium", img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Dal Makhani Noir", desc: "Black lentils simmered 48 hours over slow fire, cultured butter, cream, truffle dust", tag: "Signature", img: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Dum Biryani Nawabi", desc: "Aged basmati, slow-cooked under dough seal, saffron kewra, caramelised onions, raita", tag: "Heritage", img: "https://images.pexels.com/photos/7426/food-restaurant-bar-dinner.jpg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Butter Chicken Royale", desc: "Free-range chicken tikka, velvety tomato-cashew gravy, fresh cream, fenugreek finish", tag: "Classic", img: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Sarson da Saag", desc: "Punjab's finest mustard greens slow-cooked overnight, makke di roti, white butter", tag: "Seasonal", img: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Gulab Jamun Soufflé", desc: "Warm khoya dumplings, rose-cardamom syrup, saffron vanilla ice cream, pista crumble", tag: "Dessert", img: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const USPS = [
  { icon: "🌶️", title: "Farm-Fresh Spices Daily", desc: "We source whole spices directly from Guntur, Coorg, and Kerala — ground fresh every morning for peak aroma and heat." },
  { icon: "👨‍🍳", title: "Master Chefs from Lucknow", desc: "Our culinary team trained under Nawabi ustads in Lucknow and the royal kitchens of Rajasthan." },
  { icon: "🪔", title: "Authentic Dhaba Ambience", desc: "Warm brass diyas, hand-painted kalamkari walls, and sandalwood incense — every corner breathes India." },
  { icon: "🍹", title: "Signature Mocktails & Lassi", desc: "House-crafted masala chai martinis, nimbu pani, and our legendary rose-saffron lassi — pure indulgence." },
];

const TESTIMONIALS = [
  { name: "Priya Menon", role: "Food Critic, Gourmet India Magazine", quote: "Desi Dhaba doesn't just serve food — it serves memory, warmth, and the soul of our land. Every dish is a letter home.", stars: 5 },
  { name: "Rahul Ahuja", role: "MD, Ahuja Capital Group", quote: "Every board dinner, every celebration — always Desi Dhaba. The Raan-e-Dhaba alone is worth the trip across the city.", stars: 5 },
  { name: "Fatima Al-Rashid", role: "International Travel Writer", quote: "I've eaten across South Asia, and Desi Dhaba stands equal to any palace restaurant in Udaipur or Jaipur. Extraordinary.", stars: 5 },
];

const SERVICES = [
  { icon: "🍽️", title: "Royal Thali Experience", desc: "Surrender to a 12-course grand thali — a royal procession of curries, breads, chutneys, and mithai, renewed with the seasons." },
  { icon: "🏮", title: "Private Baithak Rooms", desc: "Exclusive private dining for up to 25 guests. Weddings, anniversaries, corporate dinners — draped in luxury and scented with mogra." },
  { icon: "🚐", title: "Premium Catering", desc: "Bring Desi Dhaba's warmth to your venue. Our dastarkhwan team delivers the same royal standard across Shivamogga and beyond." },
  { icon: "📅", title: "Table Reservations", desc: "Reserve your seat instantly. Share dietary preferences, occasion details — we craft every visit to be truly unforgettable." },
];

const GALLERY_ITEMS = [
  { category: "Food", img: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Raan-e-Dhaba" },
  { category: "Interior", img: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600", title: "The Baithak Lounge" },
  { category: "Food", img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Shahi Kofta" },
  { category: "Events", img: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Royal Celebration Evening" },
  { category: "Interior", img: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Diya-Lit Courtyard" },
  { category: "Food", img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Tandoori Jhinga" },
  { category: "Events", img: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Corporate Dastarkhwan" },
  { category: "Food", img: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Dal Makhani Noir" },
];

const TIMELINE = [
  { year: "1998", title: "The Humble Beginning", desc: "Chef Ustad Imtiaz Khan starts a roadside dhaba outside Lucknow with one chulha, two pots, and a lifetime of ancestral recipes." },
  { year: "2006", title: "First Accolades", desc: "Desi Dhaba receives the Karnataka Culinary Heritage Award. Word spreads — queues stretch around the block." },
  { year: "2014", title: "The Grand Shivamogga Opening", desc: "Desi Dhaba arrives in Shivamogga — a 70-seat royal dining hall fusing North Indian grandeur with Karnataka warmth." },
  { year: "2023", title: "National Recognition", desc: "Desi Dhaba is named India's Best Premium Dhaba Experience by Food & Hospitality India, joining an elite circle of culinary institutions." },
];

/* ─── HELPERS ────────────────────────────────────────────── */
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-5">
      <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#B8860B]" />
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <polygon points="10,0 12,7 20,7 14,12 16,20 10,15 4,20 6,12 0,7 8,7" fill="#B8860B" opacity="0.9" />
      </svg>
      <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#B8860B]" />
    </div>
  );
}

function SectionLabel({ label, sub }) {
  return (
    <div className="text-center mb-3">
      {sub && (
        <p className="font-serif text-[#B8860B] text-2xl mb-1 tracking-widest italic">{sub}</p>
      )}
      <p className="text-[#B8860B] text-[0.62rem] tracking-[0.45em] uppercase font-body font-semibold">
        {label}
      </p>
    </div>
  );
}

function Mandala({ size = 40, opacity = 0.15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={{ opacity }}>
      <circle cx="20" cy="20" r="18" stroke="#B8860B" strokeWidth="0.8" />
      <circle cx="20" cy="20" r="12" stroke="#B8860B" strokeWidth="0.5" />
      <circle cx="20" cy="20" r="6" stroke="#B8860B" strokeWidth="0.4" />
      <path d="M20 2 L20 38 M2 20 L38 20 M5.86 5.86 L34.14 34.14 M34.14 5.86 L5.86 34.14"
        stroke="#B8860B" strokeWidth="0.35" />
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <circle key={i}
          cx={20 + 12 * Math.cos(angle * Math.PI / 180)}
          cy={20 + 12 * Math.sin(angle * Math.PI / 180)}
          r="1.5" fill="#B8860B" opacity="0.6" />
      ))}
      <circle cx="20" cy="20" r="3" fill="#B8860B" opacity="0.5" />
    </svg>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────────── */
function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-700 ${
      scrolled
        ? "py-3 bg-white/95 backdrop-blur-xl border-b border-[#B8860B]/20 shadow-sm"
        : "py-5 bg-transparent"
    }`}>
      <button onClick={() => setActivePage("Home")} className="flex items-center gap-3">
        <Mandala size={32} opacity={0.8} />
        <div>
          <p className="font-display text-[#1a1a1a] text-base tracking-[0.2em] leading-none">Desi Dhaba</p>
          <p className="font-body text-[#B8860B] text-[0.45rem] tracking-[0.35em] uppercase">Authentic · Royal · Flavourful</p>
        </div>
      </button>

      <ul className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map(p => (
          <li key={p}>
            <button onClick={() => setActivePage(p)}
              className={`font-body text-[0.62rem] tracking-[0.25em] uppercase transition-all duration-300 relative ${
                activePage === p ? "text-[#B8860B]" : "text-[#1a1a1a] hover:text-[#B8860B]"
              }`}>
              {p}
              {activePage === p && <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#B8860B]" />}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => setActivePage("Contact")}
        className="hidden md:flex items-center gap-2 font-body text-[0.62rem] tracking-[0.2em] uppercase border border-[#B8860B] text-[#B8860B] px-6 py-2.5 hover:bg-[#B8860B] hover:text-white transition-all duration-300 font-semibold rounded-sm">
        Book a Table
      </button>

      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#1a1a1a] text-xl font-display">
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-[#B8860B]/15 py-8 flex flex-col items-center gap-6 shadow-lg">
          <Mandala size={28} opacity={0.4} />
          {NAV_LINKS.map(p => (
            <button key={p} onClick={() => { setActivePage(p); setMenuOpen(false); }}
              className={`font-body text-[0.65rem] tracking-[0.3em] uppercase transition-colors ${
                activePage === p ? "text-[#B8860B]" : "text-[#1a1a1a]"
              }`}>
              {p}
            </button>
          ))}
          <button onClick={() => { setActivePage("Contact"); setMenuOpen(false); }}
            className="mt-2 font-body text-[0.62rem] tracking-[0.2em] uppercase border border-[#B8860B] text-[#B8860B] px-8 py-2.5 hover:bg-[#B8860B] hover:text-white transition-all duration-300 rounded-sm">
            Book a Table
          </button>
        </div>
      )}
    </nav>
  );
}

/* ─── HOME PAGE ──────────────────────────────────────────── */
function Home({ setActivePage }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="section-light">

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: "#faf7f0" }}>
        {/* Subtle warm background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Desi Dhaba"
            className="w-full h-full object-cover"
            style={{ opacity: 0.08 }}
            loading="lazy"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #faf7f0 0%, rgba(250,247,240,0.85) 50%, #faf7f0 100%)" }} />
        </div>

        {/* Large decorative Hindi text */}
        <div className="absolute left-4 top-1/3 font-display text-[#B8860B] select-none pointer-events-none leading-none" style={{ fontSize: 160, opacity: 0.04 }}>
          देसी
        </div>
        <div className="absolute right-4 bottom-1/4 font-display text-[#B8860B] select-none pointer-events-none leading-none" style={{ fontSize: 120, opacity: 0.03 }}>
          ढाबा
        </div>

        <div className="relative text-center px-6 max-w-5xl mx-auto" style={{ animation: "fadeInUp 1.2s ease both" }}>
          <div className="flex items-center justify-center gap-4 mb-7">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B8860B]/60" />
            <Mandala size={36} opacity={0.7} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B8860B]/60" />
          </div>

          <p className="font-serif text-[#B8860B] text-2xl mb-2 tracking-[0.4em] italic">Shivamogga's Finest</p>
          <p className="text-[#B8860B] text-[0.62rem] tracking-[0.4em] uppercase font-body font-semibold mb-4">
            Established 1998 · Authentic North Indian Cuisine
          </p>

          <h1 className="font-display text-[#111111] leading-[1.1] mb-5" style={{ fontSize: "clamp(3rem,8vw,5.5rem)" }}>
            Where Every Dish<br />
            <em className="shimmer-gold font-normal" style={{ fontFamily: "inherit" }}>Tells a Story</em>
          </h1>

          <p className="font-body text-[#3a3a3a] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed tracking-wide" style={{ lineHeight: 1.8 }}>
            A royal journey through India's most celebrated flavours — slow-cooked, hand-spiced, served with the warmth of a thousand hearths.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setActivePage("Contact")}
              className="px-8 py-4 bg-[#B8860B] text-white font-body text-[0.68rem] tracking-[0.3em] uppercase font-bold hover:bg-[#9a700a] transition-all duration-300 shadow-lg shadow-[#B8860B]/20 rounded-sm">
              Reserve a Table
            </button>
            <button onClick={() => setActivePage("Menu")}
              className="px-8 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] font-body text-[0.68rem] tracking-[0.3em] uppercase font-bold hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 rounded-sm">
              View Our Menu
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-[#B8860B] to-transparent animate-pulse" />
          <p className="font-body text-[#B8860B] text-[0.55rem] tracking-[0.4em] uppercase">Scroll Down</p>
        </div>
      </section>

      {/* ── SIGNATURE DISHES ── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel label="Our Signature Selection" sub="Shaahi Dishes" />
          <h2 className="font-display text-[#111111] mb-2 mt-2" style={{ fontSize: "clamp(2rem,5vw,3.2rem)" }}>Chef's Masterpieces</h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {DISHES.slice(0, 4).map((dish, i) => (
            <div key={i} className="group relative overflow-hidden cursor-pointer hover-lift card-cream rounded-sm transition-all duration-400">
              <div className="overflow-hidden h-64">
                <img src={dish.img} alt={dish.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-108"
                  style={{ filter: "brightness(0.92)" }}
                  loading="lazy" />
              </div>
              <div className="absolute top-4 left-4">
                <span className="font-body text-[0.5rem] tracking-[0.2em] uppercase bg-[#B8860B] text-white px-3 py-1 font-bold rounded-sm">{dish.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-[#111111] text-xl mb-2">{dish.name}</h3>
                <p className="font-body text-[#555555] text-sm leading-relaxed" style={{ lineHeight: 1.7 }}>{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 section-cream border-y border-[#B8860B]/10 paper-texture">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel label="The Desi Dhaba Promise" sub="Humara Vaada" />
            <h2 className="font-display text-[#111111] mb-2 mt-2" style={{ fontSize: "clamp(2rem,5vw,3rem)" }}>Why Choose Us</h2>
            <GoldDivider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {USPS.map((u, i) => (
              <div key={i} className="group text-center p-7 card-cream hover-lift rounded-sm transition-all duration-400">
                <div className="text-4xl mb-5">{u.icon}</div>
                <h3 className="font-display text-[#1a1a1a] text-xl mb-3">{u.title}</h3>
                <p className="font-body text-[#555555] text-base leading-relaxed" style={{ lineHeight: 1.75 }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHEF HIGHLIGHT ── */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Ustad Imtiaz Khan" className="w-full h-[580px] object-cover rounded-sm" loading="lazy"
              style={{ filter: "brightness(0.95)" }} />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border border-[#B8860B]/30" />
            <div className="absolute -top-4 -left-4 w-28 h-28 border border-[#B8860B]/15" />
            <div className="absolute -bottom-4 -right-4 bg-[#B8860B] p-4 w-20 h-20 flex items-center justify-center rounded-sm shadow-lg">
              <Mandala size={38} opacity={0.9} />
            </div>
          </div>
          <div>
            <SectionLabel label="The Master" sub="Ustad Ji" />
            <h2 className="font-display text-[#111111] leading-tight mb-2 mt-3" style={{ fontSize: "clamp(2rem,4.5vw,3rem)" }}>
              Ustad Imtiaz<br /><em className="text-[#B8860B]">Khan</em>
            </h2>
            <GoldDivider />
            <p className="font-body text-[#444444] leading-relaxed mb-5 text-lg mt-4" style={{ lineHeight: 1.9 }}>
              With over 25 years of mastery spanning the Nawabi kitchens of Lucknow, the royal dastarkhan of Rajasthan, and the spice-laden coasts of Kerala, Ustad Imtiaz brings an uncompromising devotion to tradition. His philosophy: a great dish should taste like it was cooked by someone's dadi.
            </p>
            <p className="font-serif text-[#333333] leading-relaxed mb-8 text-xl italic border-l-2 border-[#B8860B]/60 pl-5 bg-[#faf7f0] py-3 pr-3 rounded-r-sm" style={{ lineHeight: 1.85 }}>
              "Khana sirf pet nahi, rooh ko bhi bharna chahiye — food must nourish not just the stomach, but the soul."
            </p>
            <div className="flex gap-10">
              {[["25+", "Years of Mastery"], ["3", "National Awards"], ["200+", "Recipes Mastered"]].map(([num, label]) => (
                <div key={label}>
                  <p className="font-display text-[#B8860B]" style={{ fontSize: "2rem" }}>{num}</p>
                  <p className="font-body text-[#666666] text-[0.62rem] tracking-widest uppercase mt-1 font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 section-cream border-y border-[#B8860B]/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel label="What Our Guests Say" sub="Mehmaano ki Baat" />
          <h2 className="font-display text-[#111111] mb-6 mt-2" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>Voices of Love</h2>
          <GoldDivider />
          <div className="mt-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i}
                className="transition-all duration-700"
                style={{ display: i === activeTestimonial ? "block" : "none", animation: "fadeInUp 0.8s ease" }}>
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(t.stars)].map((_, s) => (
                    <span key={s} className="text-[#B8860B] text-xl">★</span>
                  ))}
                </div>
                <p className="font-serif text-[#222222] text-2xl md:text-3xl leading-relaxed italic mb-8" style={{ lineHeight: 1.7 }}>
                  "{t.quote}"
                </p>
                <p className="font-body text-[#B8860B] text-[0.7rem] tracking-[0.3em] uppercase font-semibold">{t.name}</p>
                <p className="font-body text-[#888888] text-sm mt-1">{t.role}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? "bg-[#B8860B] scale-125" : "bg-[#B8860B]/30"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden" style={{ background: "#111111" }}>
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Reserve" className="w-full h-full object-cover" />
        </div>
        <div className="relative text-center px-6">
          <p className="font-serif text-[#B8860B] text-3xl md:text-4xl mb-2 tracking-[0.5em] italic">आओ, बैठो, खाओ</p>
          <p className="font-display text-white text-3xl md:text-4xl mb-10 italic" style={{ fontSize: "clamp(1.5rem,3.5vw,2.5rem)" }}>Come, sit, and be nourished.</p>
          <button onClick={() => setActivePage("Contact")}
            className="px-10 py-4 bg-[#B8860B] text-white font-body text-[0.7rem] tracking-[0.3em] uppercase font-bold hover:bg-[#9a700a] transition-all duration-300 shadow-xl shadow-[#B8860B]/20 rounded-sm">
            Reserve Your Table Tonight
          </button>
        </div>
      </section>
    </div>
  );
}

/* ─── ABOUT PAGE ─────────────────────────────────────────── */
function About() {
  return (
    <div className="section-light pt-20">
      <section className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel label="Our Story" sub="Hamari Kahani" />
          <h2 className="font-display text-[#111111] leading-tight mb-4 mt-3" style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)" }}>
            Born from<br /><em className="text-[#B8860B]">Fire & Spice.</em><br />
            <span className="text-[#111111]">Refined by Love.</span>
          </h2>
          <GoldDivider />
          <div className="space-y-5 mt-8">
            <p className="font-body text-[#444444] leading-relaxed text-lg" style={{ lineHeight: 1.95 }}>
              Desi Dhaba was never meant to be just a restaurant. When Ustad Imtiaz Khan arrived in Shivamogga in 2014, he carried with him a lifetime of ancestral recipes, a clay pot from Lucknow, and an unshakeable belief — that the best food in the world is food made with izzat, pride, and love.
            </p>
            <p className="font-body text-[#444444] leading-relaxed text-lg" style={{ lineHeight: 1.95 }}>
              What began as a humble establishment with hand-painted walls and mismatched chairs has grown into Shivamogga's most celebrated dining destination — where every table tells a story, and every dish is a homecoming.
            </p>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Desi Dhaba Interior" className="w-full h-[500px] object-cover rounded-sm" loading="lazy" />
          <div className="absolute -bottom-5 -left-5 bg-[#B8860B] p-6 rounded-sm shadow-xl">
            <p className="font-display text-white font-bold" style={{ fontSize: "2.5rem" }}>1998</p>
            <p className="font-body text-white/80 text-[0.55rem] tracking-widest uppercase mt-1">Est. Lucknow</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-cream border-y border-[#B8860B]/10 py-16 px-6 paper-texture">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel label="Our Journey" sub="Safar" />
            <h2 className="font-display text-[#111111] mt-2" style={{ fontSize: "clamp(2rem,4vw,2.8rem)" }}>Milestones</h2>
            <GoldDivider />
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#B8860B]/25" />
            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <div key={i} className={`flex gap-6 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-16 md:pl-0`}>
                    <span className="font-display text-[#B8860B] block mb-2" style={{ fontSize: "1.6rem" }}>{item.year}</span>
                    <h3 className="font-display text-[#1a1a1a] text-xl mb-2">{item.title}</h3>
                    <p className="font-body text-[#555555] text-base leading-relaxed" style={{ lineHeight: 1.85 }}>{item.desc}</p>
                  </div>
                  <div className="relative flex-shrink-0 hidden md:block">
                    <Mandala size={20} opacity={0.6} />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel label="Recognition" sub="Sammaan" />
          <h2 className="font-display text-[#111111] mt-2" style={{ fontSize: "clamp(2rem,4vw,2.8rem)" }}>Awards & Acclaim</h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["🏆", "Best Premium Dhaba", "Food & Hospitality India, 2023"],
            ["🥇", "Heritage Cuisine Award", "Karnataka Culinary Board, 2022"],
            ["🌶️", "Spice Master's Honour", "Indian Food Congress, 2021"],
            ["🪔", "Luxury Dining Excellence", "South India Travel Awards, 2024"],
          ].map(([icon, award, org]) => (
            <div key={award} className="text-center p-6 card-cream hover-lift rounded-sm transition-all duration-300">
              <div className="text-3xl mb-4">{icon}</div>
              <p className="font-display text-[#1a1a1a] text-base mb-1">{award}</p>
              <p className="font-body text-[#888888] text-xs tracking-wide font-semibold mt-2">{org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ambience Gallery */}
      <section className="pb-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-3 h-[400px] md:h-[500px] rounded-sm overflow-hidden">
          <img src="https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="Dhaba ambience" className="col-span-2 w-full h-full object-cover" loading="lazy" />
          <div className="flex flex-col gap-3">
            <img src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Interior" className="w-full h-1/2 object-cover" loading="lazy" />
            <img src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Food" className="w-full h-1/2 object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── MENU PAGE ───────────────────────────────────────────── */
function Menu({ setActivePage }) {
  return (
    <div className="section-light pt-20">
      <section className="max-w-3xl mx-auto px-6 py-12 text-center">
        <SectionLabel label="What We Offer" sub="Humara Menu" />
        <h2 className="font-display text-[#111111] leading-tight mb-2 mt-3" style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)" }}>
          Our <em className="text-[#B8860B]">Services</em>
        </h2>
        <GoldDivider />
        <p className="font-body text-[#444444] mt-6 leading-relaxed text-lg" style={{ lineHeight: 1.9 }}>
          Every offering at Desi Dhaba is crafted with the same devotion — atithi devo bhava, our guest is our god, elevated to its finest expression.
        </p>
      </section>

      {/* All Dishes */}
      <section className="max-w-7xl mx-auto px-6 pb-6">
        <div className="text-center mb-10">
          <SectionLabel label="From Our Kitchen" sub="Pakwaan" />
          <h2 className="font-display text-[#111111] mt-2" style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)" }}>Signature Dishes</h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {DISHES.map((dish, i) => (
            <div key={i} className="group relative overflow-hidden cursor-pointer hover-lift card-cream rounded-sm transition-all duration-400">
              <div className="overflow-hidden h-56">
                <img src={dish.img} alt={dish.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy" />
              </div>
              <div className="absolute top-4 left-4">
                <span className="font-body text-[0.5rem] tracking-[0.2em] uppercase bg-[#B8860B] text-white px-3 py-1 font-bold rounded-sm">{dish.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-[#111111] text-lg mb-2">{dish.name}</h3>
                <p className="font-body text-[#555555] text-sm leading-relaxed" style={{ lineHeight: 1.7 }}>{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {SERVICES.map((s, i) => (
          <div key={i} className="group relative p-8 card-cream hover-lift rounded-sm overflow-hidden transition-all duration-400">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-5xl mb-6">{s.icon}</div>
            <h3 className="font-display text-[#1a1a1a] text-2xl mb-3">{s.title}</h3>
            <p className="font-body text-[#555555] leading-relaxed text-base" style={{ lineHeight: 1.85 }}>{s.desc}</p>
            <button onClick={() => setActivePage("Contact")}
              className="mt-7 font-body text-[0.62rem] tracking-[0.25em] uppercase text-[#B8860B] border-b border-[#B8860B]/40 pb-0.5 hover:border-[#B8860B] transition-all duration-300">
              Enquire Now →
            </button>
          </div>
        ))}
      </section>

      {/* Special occasion CTA */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden" style={{ background: "#111111" }}>
        <img src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Private dining" className="absolute inset-0 w-full h-full object-cover opacity-10" loading="lazy" />
        <div className="relative text-center px-6">
          <p className="font-serif text-[#B8860B] text-3xl tracking-[0.5em] mb-2 italic">Kuch Khaas?</p>
          <p className="font-display text-white italic mb-8" style={{ fontSize: "clamp(1.5rem,3.5vw,2.5rem)" }}>Planning something extraordinary?</p>
          <button onClick={() => setActivePage("Contact")}
            className="px-8 py-4 bg-[#B8860B] text-white font-body text-[0.7rem] tracking-[0.3em] uppercase font-bold hover:bg-[#9a700a] transition-all duration-300 shadow-xl rounded-sm">
            Talk to Our Events Team
          </button>
        </div>
      </section>
    </div>
  );
}

/* ─── GALLERY PAGE ───────────────────────────────────────── */
function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const FILTERS = ["All", "Food", "Interior", "Events"];
  const filtered = filter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.category === filter);

  return (
    <div className="section-light pt-20">
      <section className="max-w-3xl mx-auto px-6 py-12 text-center">
        <SectionLabel label="Visual Story" sub="Tasveerein" />
        <h2 className="font-display text-[#111111] mb-2 mt-3" style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)" }}>
          Our <em className="text-[#B8860B]">Gallery</em>
        </h2>
        <GoldDivider />
      </section>

      <div className="flex justify-center gap-8 mb-8 px-6 flex-wrap">
        {FILTERS.map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`font-body text-[0.65rem] tracking-[0.3em] uppercase pb-1 border-b transition-all duration-300 ${
              filter === f ? "border-[#B8860B] text-[#B8860B]" : "border-transparent text-[#555555] hover:text-[#1a1a1a]"
            }`}>
            {f}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <div key={`${filter}-${i}`} onClick={() => setLightbox(item)}
              className="group relative break-inside-avoid overflow-hidden cursor-zoom-in rounded-sm">
              <img src={item.img} alt={item.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-4 gap-1">
                <span className="font-body text-[0.55rem] tracking-[0.25em] uppercase text-[#FFD700]">{item.category}</span>
                <p className="font-display text-white text-base">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-8 text-[#B8860B] text-2xl hover:text-white transition-colors font-display">✕</button>
          <div className="max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} className="w-full max-h-[80vh] object-contain rounded-sm" />
            <div className="mt-5 text-center">
              <span className="font-body text-[0.55rem] tracking-[0.25em] uppercase text-[#B8860B]">{lightbox.category}</span>
              <p className="font-display text-white text-xl mt-1">{lightbox.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── CONTACT PAGE ───────────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", email: "", phone: "", date: "", message: "" });
  };

  return (
    <div className="section-light pt-20">
      <section className="max-w-3xl mx-auto px-6 py-12 text-center">
        <SectionLabel label="Get In Touch" sub="Sampark Karein" />
        <h2 className="font-display text-[#111111] mb-2 mt-3" style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)" }}>
          Book Your <em className="text-[#B8860B]">Table</em>
        </h2>
        <GoldDivider />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form */}
        <div className="card-cream p-10 rounded-sm shadow-lg">
          <h3 className="font-display text-[#1a1a1a] text-2xl mb-1">Reserve Your Seat</h3>
          <p className="font-serif text-[#B8860B] text-sm tracking-widest mb-8 italic">Awaaz do, hum taiyaar hain</p>
          {sent && (
            <div className="mb-6 p-4 border border-[#B8860B]/40 bg-[#fdf8ee] text-[#7a5c00] text-sm font-body tracking-wide rounded-sm">
              ✓ Your reservation request has been received. We'll confirm within 24 hours. Shukriya!
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div>
                <label className="font-body text-[0.58rem] tracking-[0.28em] uppercase text-[#B8860B] font-semibold block mb-2">Full Name</label>
                <input type="text" required placeholder="Rahul Kumar" className="input-luxury"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="font-body text-[0.58rem] tracking-[0.28em] uppercase text-[#B8860B] font-semibold block mb-2">Email</label>
                <input type="email" required placeholder="hello@example.com" className="input-luxury"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div>
                <label className="font-body text-[0.58rem] tracking-[0.28em] uppercase text-[#B8860B] font-semibold block mb-2">Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" className="input-luxury"
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div>
                <label className="font-body text-[0.58rem] tracking-[0.28em] uppercase text-[#B8860B] font-semibold block mb-2">Preferred Date</label>
                <input type="date" className="input-luxury"
                  value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
              </div>
            </div>
            <div>
              <label className="font-body text-[0.58rem] tracking-[0.28em] uppercase text-[#B8860B] font-semibold block mb-2">Special Requests</label>
              <textarea rows={4} placeholder="Dietary requirements, occasion, seating preferences, number of guests..." className="input-luxury resize-none"
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            </div>
            <button type="submit"
              className="w-full py-4 bg-[#B8860B] text-white font-body text-[0.68rem] tracking-[0.3em] uppercase font-bold hover:bg-[#9a700a] transition-all duration-300 shadow-lg rounded-sm">
              Confirm Reservation
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="space-y-8">
          {/* Map placeholder */}
          <div className="relative overflow-hidden h-64 section-cream border border-[#B8860B]/20 flex items-center justify-center rounded-sm">
            <div className="text-center">
              <p className="text-[#B8860B] text-3xl mb-3">🪔</p>
              <p className="font-display text-[#1a1a1a] text-xl">Desi Dhaba</p>
              <p className="font-body text-[#666666] text-sm mt-1">#12, MG Road, Shivamogga</p>
              <p className="font-body text-[#666666] text-sm">Karnataka – 577 201, India</p>
              <a href="https://maps.google.com/?q=Shivamogga+Karnataka" target="_blank" rel="noreferrer"
                className="inline-block mt-4 font-body text-[0.58rem] tracking-[0.25em] uppercase text-[#B8860B] border-b border-[#B8860B]/30 hover:border-[#B8860B] transition-all duration-300 pb-0.5">
                Open in Maps →
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="p-7 card-cream rounded-sm">
            <h3 className="font-display text-[#1a1a1a] text-2xl mb-1">Opening Hours</h3>
            <p className="font-serif text-[#B8860B] text-sm tracking-widest mb-5 italic">Khule hain aapke liye</p>
            {[["Mon – Fri", "11:30 AM – 11:00 PM"], ["Saturday", "10:00 AM – 11:30 PM"], ["Sunday", "10:00 AM – 10:30 PM"]].map(([day, time]) => (
              <div key={day} className="flex justify-between py-3 border-b border-[#B8860B]/10 last:border-0">
                <span className="font-body text-[#444444] text-base">{day}</span>
                <span className="font-body text-[#B8860B] text-base font-semibold">{time}</span>
              </div>
            ))}
          </div>

          {/* Contact details */}
          <div className="space-y-5">
            {[
              ["📞", "Reservations", "+91 98765 43210"],
              ["✉️", "Email", "hello@desidhaba.in"],
              ["📸", "Instagram", "@desidhaba.shivamogga"],
            ].map(([icon, label, val]) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-11 h-11 border border-[#B8860B]/25 bg-[#faf7f0] flex items-center justify-center text-sm flex-shrink-0 rounded-sm">{icon}</div>
                <div>
                  <p className="font-body text-[0.58rem] tracking-[0.25em] uppercase text-[#B8860B]">{label}</p>
                  <p className="font-body text-[#1a1a1a] text-base mt-0.5 font-medium">{val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────── */
function Footer({ setActivePage }) {
  return (
    <footer style={{ background: "#111111" }} className="border-t border-[#B8860B]/15 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Mandala size={32} opacity={0.7} />
              <div>
                <p className="font-display text-white text-xl tracking-[0.2em]">Desi Dhaba</p>
                <p className="font-body text-[#B8860B]/60 text-[0.45rem] tracking-[0.3em] uppercase">Authentic · Royal · Flavourful</p>
              </div>
            </div>
            <p className="font-body text-[#aaaaaa] text-base leading-relaxed max-w-xs" style={{ lineHeight: 1.9 }}>
              Authentic North Indian cuisine, served with pride and warmth in the heart of Shivamogga since 1998.
            </p>
          </div>
          <div>
            <p className="font-body text-[0.58rem] tracking-[0.3em] uppercase text-[#B8860B] mb-5">Navigation</p>
            <ul className="space-y-3">
              {NAV_LINKS.map(p => (
                <li key={p}>
                  <button onClick={() => setActivePage(p)} className="font-body text-[#aaaaaa] text-base hover:text-[#FFD700] transition-colors">{p}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-body text-[0.58rem] tracking-[0.3em] uppercase text-[#B8860B] mb-5">Contact Us</p>
            <div className="space-y-2 font-body text-[#aaaaaa] text-base">
              <p>#12, MG Road, Shivamogga</p>
              <p>Karnataka – 577 201, India</p>
              <p className="mt-4">+91 98765 43210</p>
              <p>hello@desidhaba.in</p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#B8860B]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[#777777] text-xs tracking-widest">© 2025 Desi Dhaba. All rights reserved.</p>
          <p className="font-body text-[#777777] text-xs tracking-widest">अतिथि देवो भव · Crafted with love in Shivamogga</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── HELP PAGE ──────────────────────────────────────────── */
const FAQS = [
  {
    q: "Do you accept walk-in guests, or is a reservation required?",
    a: "We warmly welcome walk-in guests, though we strongly recommend reservations — especially on weekends and festive evenings. Our Private Baithak rooms are reservation-only. Book via the Contact page or call us at +91 98765 43210.",
  },
  {
    q: "Can you accommodate dietary restrictions and allergies?",
    a: "Absolutely. Our kitchen is happy to customise dishes for vegetarian, vegan, Jain, and gluten-sensitive guests. Please inform us of any allergies when booking or upon arrival so our Ustad Ji can prepare accordingly with care.",
  },
  {
    q: "What is included in the Royal Thali Experience?",
    a: "The Royal Thali is a 12-course grand procession featuring seasonal curries, freshly made breads (tandoori, rumali, makke di roti), house-churned butter, chutneys, pickles, dal, rice, and a dessert selection. It is renewed monthly to honour seasonal ingredients.",
  },
  {
    q: "Do you offer home delivery or takeaway?",
    a: "We currently offer takeaway for select signature dishes. Home delivery is available within a 10 km radius of Shivamogga through our premium catering service. Please call us 24 hours in advance for catering orders to ensure freshness and quality.",
  },
  {
    q: "How far in advance should I book for a private event or corporate dinner?",
    a: "We recommend booking our Private Baithak rooms at least 7–14 days in advance for intimate gatherings, and 3–4 weeks ahead for large corporate events or weddings. Our events team will personally coordinate every detail — décor, menu, and ambience.",
  },
  {
    q: "Is Desi Dhaba child-friendly?",
    a: "Yes, families are the heart of our dhaba spirit. We offer a dedicated children's menu featuring milder flavours and smaller portions. Our dining hall is spacious and welcoming for families of all sizes. High chairs are available upon request.",
  },
  {
    q: "What are your parking facilities?",
    a: "We have dedicated valet parking available on all evenings from 6 PM onwards. Complimentary self-parking is also available in the adjacent lot on MG Road. Our team is happy to assist with directions — just call ahead.",
  },
  {
    q: "Are your spices and ingredients authentically sourced?",
    a: "Without compromise. We source whole spices directly from Guntur for chillies, Coorg for pepper, and Kerala for cardamom and turmeric — all ground fresh each morning in our kitchen. Our dairy comes from local farms, and our meats are hand-selected daily.",
  },
  {
    q: "Do you host live music or cultural evenings?",
    a: "Yes! Every Friday and Saturday evening we host live classical Indian music — ghazal singers, tabla players, and sitar artists — creating an immersive cultural experience. Special performances during Diwali, Eid, Holi, and other festivals are announced on our Instagram @desidhaba.shivamogga.",
  },
  {
    q: "How can I provide feedback about my dining experience?",
    a: "Your feedback is our greatest treasure. You may share your experience through our Contact page, speak directly with our floor manager, or write to us at hello@desidhaba.in. We personally read every message and use your thoughts to make each visit more extraordinary than the last.",
  },
];

function Help() {
  return (
    <div className="section-light min-h-screen">

      {/* ── HERO BANNER ── */}
      <section className="relative flex items-center justify-center py-36 px-6 overflow-hidden" style={{ background: "#faf7f0" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(184,134,11,0.06) 0%, transparent 70%)"
          }} />
        </div>
        <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none select-none font-display text-[#B8860B] leading-none"
          style={{ fontSize: 160, opacity: 0.03 }}>?</div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none select-none font-display text-[#B8860B] leading-none"
          style={{ fontSize: 120, opacity: 0.025 }}>सहायता</div>

        <div className="relative text-center max-w-3xl mx-auto" style={{ animation: "fadeInUp 1s ease both" }}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#B8860B]/60" />
            <Mandala size={32} opacity={0.7} />
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#B8860B]/60" />
          </div>
          <p className="font-serif text-[#B8860B] text-2xl tracking-[0.4em] italic mb-2">Kuch Sawaal?</p>
          <p className="text-[#B8860B] text-[0.62rem] tracking-[0.4em] uppercase font-body font-semibold mb-4">
            Help Centre · Frequently Asked Questions
          </p>
          <h1 className="font-display text-[#111111] leading-tight mb-5"
            style={{ fontSize: "clamp(2.4rem,6vw,4rem)" }}>
            We're Here to<br />
            <em className="shimmer-gold font-normal" style={{ fontFamily: "inherit" }}>Help You</em>
          </h1>
          <p className="font-body text-[#555555] text-lg leading-relaxed max-w-xl mx-auto"
            style={{ lineHeight: 1.85 }}>
            Everything you need to know about dining, reservations, and the Desi Dhaba experience — hover over any question below to reveal its answer.
          </p>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel label="Common Questions" sub="Jawab Haazir Hai" />
          <h2 className="font-display text-[#111111] mb-2 mt-2"
            style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>
            Hover to Discover
          </h2>
          <GoldDivider />
          <p className="font-body text-[#888888] text-sm mt-5 tracking-widest uppercase"
            style={{ letterSpacing: "0.2em" }}>
            — Place your cursor on a question to read the answer —
          </p>
        </div>

        <div className="card-cream rounded-sm overflow-hidden">
          {FAQS.map((faq, i) => (
            <div key={i} className="faq-item">
              <div className="faq-question">
                <span className="font-display text-[#1a1a1a] text-lg md:text-xl pr-6" style={{ lineHeight: 1.4 }}>
                  <span className="font-serif text-[#B8860B] mr-3 opacity-60" style={{ fontSize: "0.85rem" }}>
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {faq.q}
                </span>
                <div className="faq-indicator">+</div>
              </div>
              <div className="faq-answer">
                <div className="flex gap-4">
                  <div className="w-px bg-gradient-to-b from-[#B8860B] to-transparent flex-shrink-0 mt-1" style={{ minHeight: 40 }} />
                  <p className="font-body text-[#555555] text-base leading-relaxed" style={{ lineHeight: 1.85 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still need help CTA */}
        <div className="mt-16 text-center py-14 px-8 section-cream border border-[#B8860B]/15 rounded-sm paper-texture relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-10"><Mandala size={60} opacity={1} /></div>
          <div className="absolute bottom-4 left-4 opacity-10"><Mandala size={40} opacity={1} /></div>
          <p className="font-serif text-[#B8860B] text-2xl italic tracking-widest mb-2">Still have questions?</p>
          <h3 className="font-display text-[#111111] text-3xl mb-4">Reach Out to Us</h3>
          <GoldDivider />
          <p className="font-body text-[#666666] text-base mt-5 mb-8 max-w-md mx-auto" style={{ lineHeight: 1.85 }}>
            Our team is delighted to assist you. Write to us, call us, or simply walk through our doors — a warm welcome always awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@desidhaba.in"
              className="px-8 py-3.5 bg-[#B8860B] text-white font-body text-[0.65rem] tracking-[0.3em] uppercase font-bold hover:bg-[#9a700a] transition-all duration-300 shadow-md rounded-sm inline-block">
              Email Us
            </a>
            <a href="tel:+919876543210"
              className="px-8 py-3.5 border border-[#1a1a1a] text-[#1a1a1a] font-body text-[0.65rem] tracking-[0.3em] uppercase font-bold hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 rounded-sm inline-block">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── APP ROOT ───────────────────────────────────────────── */
export default function App() {
  const [activePage, setActivePage] = useState("Home");

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const PAGE = { Home, About, Menu, Gallery, Help, Contact };
  const PageComponent = PAGE[activePage];

  return (
    <div className="min-h-screen" style={{ background: "#faf7f0" }}>
      <DiyaParticles />
      <Navbar activePage={activePage} setActivePage={navigate} />
      <main>
        <PageComponent setActivePage={navigate} />
      </main>
      <Footer setActivePage={navigate} />
    </div>
  );
}
