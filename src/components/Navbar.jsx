import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/constants.js";
import { Mandala } from "../utils/helpers.jsx";

/* ─── NAVBAR ─────────────────────────────────────────────── */
export function Navbar({ activePage, setActivePage }) {
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