import { DISHES, SERVICES } from "../data/constants.js";
import { GoldDivider, SectionLabel } from "../utils/helpers.jsx";

/* ─── MENU PAGE ───────────────────────────────────────────── */
export function Menu({ setActivePage }) {
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