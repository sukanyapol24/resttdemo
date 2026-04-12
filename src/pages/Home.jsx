import { useState, useEffect } from "react";
import { DISHES, USPS, TESTIMONIALS } from "../data/constants.js";
import { GoldDivider, SectionLabel, Mandala } from "../utils/helpers.jsx";

/* ─── HOME PAGE ──────────────────────────────────────────── */
export function Home({ setActivePage }) {
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
            alt="Reserve" className="absolute inset-0 w-full h-full object-cover" />
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