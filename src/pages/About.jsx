import { TIMELINE } from "../data/constants.js";
import { GoldDivider, SectionLabel, Mandala } from "../utils/helpers.jsx";

/* ─── ABOUT PAGE ─────────────────────────────────────────── */
export function About() {
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