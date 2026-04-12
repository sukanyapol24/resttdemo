import { useState } from "react";
import { DiyaParticles } from "./utils/helpers.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Menu } from "./pages/Menu.jsx";
import { Gallery } from "./pages/Gallery.jsx";
import { Help } from "./pages/Help.jsx";
import { Contact } from "./pages/Contact.jsx";

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
