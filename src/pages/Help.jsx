import { FAQS } from "../data/constants.js";
import { GoldDivider, SectionLabel, Mandala } from "../utils/helpers.jsx";

/* ─── HELP PAGE ──────────────────────────────────────────── */
export function Help() {
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