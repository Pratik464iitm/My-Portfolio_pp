import Reveal from "./Reveal.jsx";
import { leadership } from "../data/content.js";

export default function Impact() {
  return (
    <section id="impact" className="section impact">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="section-number mono">06</span>
            <h2 className="section-title" style={{ marginTop: 10 }}>Impact</h2>
          </div>
          <p className="section-desc">Roles run alongside the engineering work.</p>
        </div>

        <div className="impact-grid">
          {leadership.map((l, i) => (
            <Reveal key={l.org} y={26} delay={i * 0.08} className="impact-card card">
              <div className="impact-top">
                <span className="mono impact-num">{String(i + 1).padStart(2, "0")}</span>
                {l.date && <span className="mono impact-date">{l.date}</span>}
              </div>
              <h3 className="impact-org">{l.org}</h3>
              <p className="impact-role">{l.role}</p>
              <ul className="impact-points">
                {l.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }
        .impact-card { padding: 26px; display: flex; flex-direction: column; }
        .impact-top { display: flex; justify-content: space-between; margin-bottom: 20px; }
        .impact-num { font-size: 12px; color: var(--ink-faint); }
        .impact-date { font-size: 11px; color: var(--ink-faint); }
        .impact-org { font-size: 18px; font-weight: 600; letter-spacing: -0.01em; }
        .impact-role { font-size: 12.5px; color: var(--systems); margin-top: 4px; }
        .impact-points { margin-top: 18px; display: flex; flex-direction: column; gap: 10px; }
        .impact-points li {
          position: relative;
          padding-left: 16px;
          font-size: 13.5px;
          color: var(--ink-dim);
          line-height: 1.6;
        }
        .impact-points li::before {
          content: "";
          position: absolute; left: 0; top: 8px;
          width: 5px; height: 1px;
          background: var(--systems);
        }
        @media (max-width: 900px) {
          .impact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
