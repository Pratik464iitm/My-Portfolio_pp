import Reveal from "./Reveal.jsx";
import NumberCounter from "./NumberCounter.jsx";
import { competitive, contests, personal } from "../data/content.js";

export default function Competitive() {
  return (
    <section id="competitive" className="section competitive">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="section-number mono">05</span>
            <h2 className="section-title" style={{ marginTop: 10 }}>Competitive Programming</h2>
          </div>
          <p className="section-desc">Ratings and results across Codeforces, LeetCode and timed contests.</p>
        </div>

        <Reveal className="terminal card">
          <div className="terminal-bar">
            <span className="terminal-dot" /><span className="terminal-dot" /><span className="terminal-dot" />
            <span className="mono terminal-path">pratik@iitm ~ ./profile --competitive</span>
          </div>
          <div className="terminal-body">
            <div className="stat-row">
              {competitive.map((c) => (
                <div key={c.label} className="stat">
                  <span className="mono stat-value"><NumberCounter value={c.value} /></span>
                  <span className="stat-label">{c.label}</span>
                  <span className="mono stat-meta">{c.meta}</span>
                </div>
              ))}
            </div>
            <div className="handle-row mono">
              <a href={personal.links.codeforces} target="_blank" rel="noopener noreferrer" className="link-underline" data-cursor="link">
                codeforces.com/profile/pratik_cf464
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} y={26} className="contest-list">
          {contests.map((c) => (
            <div key={c.title} className="contest-row">
              <span className="contest-title">{c.title}</span>
              <span className="contest-detail">{c.detail}</span>
            </div>
          ))}
        </Reveal>
      </div>

      <style>{`
        .terminal { overflow: hidden; margin-bottom: 28px; }
        .terminal-bar {
          display: flex; align-items: center; gap: 8px;
          padding: 14px 20px;
          border-bottom: 1px solid var(--line);
          background: var(--bg-1);
        }
        .terminal-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--line-strong); }
        .terminal-path { margin-left: 10px; font-size: 12px; color: var(--ink-faint); }
        .terminal-body { padding: clamp(24px, 4vw, 40px); }
        .stat-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
          gap: 28px;
        }
        .stat { display: flex; flex-direction: column; gap: 6px; }
        .stat-value { font-size: clamp(34px, 5vw, 48px); font-weight: 600; color: var(--bio); letter-spacing: -0.02em; }
        .stat-label { font-size: 13.5px; color: var(--ink); }
        .stat-meta { font-size: 11px; color: var(--ink-faint); }
        .handle-row { margin-top: 30px; padding-top: 22px; border-top: 1px solid var(--line); font-size: 12.5px; color: var(--ink-dim); }
        .contest-list { display: flex; flex-direction: column; }
        .contest-row {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.3fr);
          gap: 16px;
          padding: 16px 0;
          border-top: 1px solid var(--line);
        }
        .contest-row:first-child { border-top: none; }
        .contest-title { font-size: 14.5px; font-weight: 500; color: var(--ink); }
        .contest-detail { font-size: 13.5px; color: var(--ink-dim); line-height: 1.55; }

        @media (max-width: 640px) {
          .contest-row { grid-template-columns: 1fr; gap: 4px; }
        }
      `}</style>
    </section>
  );
}
