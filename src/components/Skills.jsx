import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { skills, skillLinks, projects, extraNodes } from "../data/content.js";

const nodeMeta = [
  ...projects.map((p) => ({ id: p.id, label: p.name })),
  ...Object.entries(extraNodes).map(([id, label]) => ({ id, label })),
];

export default function Skills() {
  const [hovered, setHovered] = useState(null);
  const linkedIds = hovered ? skillLinks[hovered] || [] : null;

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="section-number mono">04</span>
            <h2 className="section-title" style={{ marginTop: 10 }}>Skills</h2>
          </div>
          <p className="section-desc">Hover any technology to see where it actually got used.</p>
        </div>

        <div className="skills-grid">
          <Reveal className="skills-cols">
            {skills.map((group) => (
              <div key={group.category} className="skill-group">
                <span className="mono skill-cat">{group.category}</span>
                <div className="skill-chips">
                  {group.items.map((item) => {
                    const linked = skillLinks[item] || [];
                    const isActive = hovered === item;
                    const isDimmed = hovered && !isActive;
                    return (
                      <button
                        key={item}
                        className={`skill-chip ${isActive ? "active" : ""} ${isDimmed ? "dim" : ""}`}
                        onMouseEnter={() => setHovered(item)}
                        onMouseLeave={() => setHovered(null)}
                        onFocus={() => setHovered(item)}
                        onBlur={() => setHovered(null)}
                        disabled={linked.length === 0}
                        data-cursor={linked.length ? "link" : "default"}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} y={30} className="skills-nodes">
            <span className="mono skill-cat">{hovered ? `Used in` : "Projects & work"}</span>
            <div className="node-list">
              {nodeMeta.map((n) => {
                const isLinked = linkedIds ? linkedIds.includes(n.id) : true;
                return (
                  <div key={n.id} className={`node-chip ${hovered ? (isLinked ? "lit" : "faded") : ""}`}>
                    <span className="node-dot" />
                    {n.label}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.7fr);
          gap: clamp(32px, 5vw, 64px);
          align-items: start;
        }
        .skills-cols { display: flex; flex-direction: column; gap: 32px; }
        .skill-cat { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-faint); display: block; margin-bottom: 14px; }
        .skill-chips { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill-chip {
          padding: 10px 16px;
          border-radius: 100px;
          border: 1px solid var(--line-strong);
          font-size: 13.5px;
          color: var(--ink-dim);
          transition: border-color 0.3s ease, color 0.3s ease, opacity 0.3s ease, background 0.3s ease;
        }
        .skill-chip:disabled { cursor: default; }
        .skill-chip.active { color: #08090b; background: var(--bio); border-color: var(--bio); }
        .skill-chip.dim { opacity: 0.35; }
        .skills-nodes {
          border-left: 1px solid var(--line);
          padding-left: clamp(24px, 3vw, 40px);
        }
        .node-list { display: flex; flex-direction: column; gap: 12px; }
        .node-chip {
          display: flex; align-items: center; gap: 10px;
          font-size: 14px;
          color: var(--ink-dim);
          transition: opacity 0.3s ease, color 0.3s ease;
        }
        .node-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--ink-faint); transition: background 0.3s ease, box-shadow 0.3s ease; }
        .node-chip.lit { color: var(--ink); }
        .node-chip.lit .node-dot { background: var(--systems); box-shadow: 0 0 0 3px rgba(148,139,242,0.18); }
        .node-chip.faded { opacity: 0.3; }

        @media (max-width: 800px) {
          .skills-grid { grid-template-columns: 1fr; }
          .skills-nodes { border-left: none; padding-left: 0; border-top: 1px solid var(--line); padding-top: 28px; }
        }
      `}</style>
    </section>
  );
}
