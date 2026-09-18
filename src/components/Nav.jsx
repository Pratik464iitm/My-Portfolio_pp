import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, personal } from "../data/content.js";

export default function Nav({ active, progress }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

      <header className="topbar">
        <a href="#hero" className="brand mono" onClick={(e) => { e.preventDefault(); go("hero"); }} data-cursor="link">
          PP<span className="brand-dot">.</span>
        </a>

        <nav className="pill-nav" aria-label="Section navigation">
          {nav.map((item, i) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={active === item.id ? "active" : ""}
              data-cursor="link"
            >
              <span className="mono num">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <button className="menu-btn" onClick={() => setOpen((o) => !o)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {nav.map((item, i) => (
              <button key={item.id} onClick={() => go(item.id)} className={active === item.id ? "active" : ""}>
                <span className="mono num">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </button>
            ))}
            <a href={personal.resumeFile} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 8 }}>
              View résumé
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .scroll-progress {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 2px;
          background: linear-gradient(90deg, #5eead4, #948bf2);
          transform-origin: left;
          z-index: 210;
        }
        .topbar {
          position: fixed;
          top: 18px;
          left: 0; right: 0;
          z-index: 150;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          padding: 0 20px;
          pointer-events: none;
        }
        .brand {
          position: fixed;
          left: clamp(20px, 4vw, 40px);
          top: 22px;
          font-size: 15px;
          letter-spacing: 0.02em;
          color: var(--ink);
          pointer-events: auto;
        }
        .brand-dot { color: #5eead4; }
        .pill-nav {
          pointer-events: auto;
          display: flex;
          align-items: center;
          gap: 2px;
          background: rgba(13,15,19,0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--line-strong);
          border-radius: 100px;
          padding: 5px;
        }
        .pill-nav button {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 100px;
          font-size: 12.5px;
          color: var(--ink-dim);
          transition: color 0.3s ease, background 0.3s ease;
          white-space: nowrap;
        }
        .pill-nav .num { color: var(--ink-faint); font-size: 10px; }
        .pill-nav button:hover { color: var(--ink); }
        .pill-nav button.active { color: #08090b; background: #5eead4; }
        .pill-nav button.active .num { color: rgba(8,9,11,0.55); }
        .menu-btn {
          display: none;
          position: fixed;
          right: clamp(20px, 4vw, 40px);
          top: 18px;
          width: 40px; height: 40px;
          align-items: center;
          justify-content: center;
          border-radius: 100px;
          border: 1px solid var(--line-strong);
          background: rgba(13,15,19,0.72);
          backdrop-filter: blur(16px);
          pointer-events: auto;
          z-index: 160;
        }
        .mobile-nav {
          position: fixed;
          top: 70px;
          right: 16px; left: 16px;
          z-index: 155;
          background: rgba(13,15,19,0.96);
          border: 1px solid var(--line-strong);
          border-radius: var(--radius-m);
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .mobile-nav button {
          display: flex;
          gap: 10px;
          padding: 12px 10px;
          font-size: 14px;
          color: var(--ink-dim);
          border-radius: 8px;
        }
        .mobile-nav button.active { color: var(--bio); }
        .mobile-nav .num { color: var(--ink-faint); font-size: 11px; }

        @media (max-width: 900px) {
          .pill-nav { display: none; }
          .menu-btn { display: flex; }
        }
      `}</style>
    </>
  );
}
