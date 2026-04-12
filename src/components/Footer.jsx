import { NAV_LINKS } from "../data/constants.js";
import { Mandala } from "../utils/helpers.jsx";

/* ─── FOOTER ─────────────────────────────────────────────── */
export function Footer({ setActivePage }) {
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