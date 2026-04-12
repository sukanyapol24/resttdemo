import { useState } from "react";
import { GALLERY_ITEMS } from "../data/constants.js";
import { GoldDivider, SectionLabel } from "../utils/helpers.jsx";

/* ─── GALLERY PAGE ───────────────────────────────────────── */
export function Gallery() {
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