import { useState } from "react";
import { GoldDivider, SectionLabel } from "../utils/helpers.jsx";

/* ─── CONTACT PAGE ───────────────────────────────────────── */
export function Contact() {
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