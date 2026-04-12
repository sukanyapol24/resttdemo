/* ─── DIYA PARTICLES ────────────────────────────────────── */
export function DiyaParticles() {
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

/* ─── HELPERS ────────────────────────────────────────────── */
export function GoldDivider() {
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

export function SectionLabel({ label, sub }) {
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

export function Mandala({ size = 40, opacity = 0.15 }) {
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