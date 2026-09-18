import Reveal from "./Reveal.jsx";
import { beyondCode } from "../data/content.js";

export default function BeyondCode() {
  return (
    <section id="beyond" className="section beyond">
      <div className="beyond-glow" aria-hidden="true" />
      <div className="container">
        <div className="section-head">
          <div>
            <span className="section-number mono">07</span>
            <h2 className="section-title" style={{ marginTop: 10 }}>Beyond the Terminal</h2>
          </div>
        </div>

        <div className="beyond-grid">
          <Reveal className="beyond-copy">
            <p className="beyond-lede">{beyondCode.intro}</p>
          </Reveal>

          <Reveal delay={0.1} y={26} className="beyond-list">
            {beyondCode.items.map((item, i) => (
              <div key={i} className="beyond-row">
                <span className="mono beyond-row-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="beyond-row-text">{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      <style>{`
        .beyond { position: relative; overflow: hidden; }
        .beyond-glow {
          position: absolute;
          bottom: -30%; right: -10%;
          width: 600px; height: 600px;
          background: radial-gradient(closest-side, rgba(245,184,96,0.08), transparent 70%);
          pointer-events: none;
        }
        .beyond-grid {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: clamp(32px, 5vw, 64px);
        }
        .beyond-lede {
          font-size: clamp(20px, 2.6vw, 28px);
          line-height: 1.5;
          color: var(--ink);
          max-width: 34ch;
        }
        .beyond-list { display: flex; flex-direction: column; }
        .beyond-row {
          display: flex;
          gap: 18px;
          padding: 18px 0;
          border-top: 1px solid var(--line);
          align-items: baseline;
        }
        .beyond-row:first-child { border-top: none; }
        .beyond-row-num { font-size: 12px; color: var(--amber); flex-shrink: 0; }
        .beyond-row-text { font-size: 14.5px; color: var(--ink-dim); line-height: 1.6; }

        @media (max-width: 800px) {
          .beyond-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
