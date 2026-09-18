import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { experience } from "../data/content.js";

function Flow({ steps }) {
  if (!steps) return null;
  return (
    <div className="flow mono" aria-hidden="true">
      {steps.map((s, i) => (
        <span key={s} className="flow-step">
          {s}
          {i < steps.length - 1 && <span className="flow-arrow">→</span>}
        </span>
      ))}
    </div>
  );
}

function ExperienceItem({ item, index, isOpen, onToggle }) {
  return (
    <li className="exp-item">
      <Reveal y={26} delay={index * 0.05}>
        <button
          className="exp-head"
          onClick={onToggle}
          aria-expanded={isOpen}
          data-cursor="link"
        >
          <div className="exp-dot-col">
            <span className="exp-dot" />
            {index < experience.length - 1 && <span className="exp-line" />}
          </div>
          <div className="exp-head-main">
            <div className="exp-top-row">
              <h3 className="exp-company">{item.company}</h3>
              <span className="mono exp-date">{item.date}</span>
            </div>
            <p className="exp-role">{item.role}</p>
            <p className="exp-summary">{item.summary}</p>
          </div>
          <motion.span
            className="exp-toggle"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Plus size={16} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className="exp-body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="exp-body-inner">
                <ul className="exp-points">
                  {item.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <div className="exp-meta">
                  <Flow steps={item.flow} />
                  <div className="exp-stack">
                    {item.stack.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Reveal>
    </li>
  );
}

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="section-number mono">02</span>
            <h2 className="section-title" style={{ marginTop: 10 }}>Experience</h2>
          </div>
          <p className="section-desc">Internship work in full-stack engineering and applied ML tooling.</p>
        </div>

        <ul className="exp-list">
          {experience.map((item, i) => (
            <ExperienceItem
              key={item.company}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </ul>
      </div>

      <style>{`
        .exp-list { display: flex; flex-direction: column; }
        .exp-item { }
        .exp-head {
          display: grid;
          grid-template-columns: 28px 1fr 28px;
          gap: 20px;
          width: 100%;
          text-align: left;
          padding: 26px 0;
          align-items: start;
        }
        .exp-dot-col { display: flex; flex-direction: column; align-items: center; height: 100%; }
        .exp-dot {
          width: 9px; height: 9px;
          border-radius: 50%;
          background: var(--bg);
          border: 1.5px solid var(--bio);
          margin-top: 6px;
          flex-shrink: 0;
        }
        .exp-line { flex: 1; width: 1px; background: var(--line); margin-top: 8px; min-height: 28px; }
        .exp-top-row { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
        .exp-company { font-size: clamp(19px, 2.4vw, 24px); font-weight: 600; letter-spacing: -0.01em; }
        .exp-date { font-size: 11.5px; color: var(--ink-faint); white-space: nowrap; }
        .exp-role { color: var(--bio); font-size: 13.5px; margin-top: 4px; }
        .exp-summary { color: var(--ink-dim); font-size: 14.5px; margin-top: 10px; max-width: 60ch; line-height: 1.6; }
        .exp-toggle {
          width: 28px; height: 28px;
          border-radius: 50%;
          border: 1px solid var(--line-strong);
          display: flex; align-items: center; justify-content: center;
          color: var(--ink-dim);
          margin-top: 2px;
        }
        .exp-body { overflow: hidden; }
        .exp-body-inner { padding: 4px 0 30px 48px; }
        .exp-points { display: flex; flex-direction: column; gap: 10px; margin-bottom: 22px; }
        .exp-points li {
          position: relative;
          padding-left: 18px;
          color: var(--ink-dim);
          font-size: 14px;
          line-height: 1.65;
          max-width: 66ch;
        }
        .exp-points li::before {
          content: "";
          position: absolute;
          left: 0; top: 9px;
          width: 5px; height: 1px;
          background: var(--bio);
        }
        .exp-meta { display: flex; flex-direction: column; gap: 16px; }
        .flow { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; font-size: 11px; color: var(--ink-faint); }
        .flow-step {
          padding: 5px 9px;
          border: 1px solid var(--line);
          border-radius: 4px;
          background: var(--bg-1);
        }
        .flow-arrow { margin-left: 8px; color: var(--systems); }
        .exp-stack { display: flex; flex-wrap: wrap; gap: 8px; }

        @media (max-width: 640px) {
          .exp-head { grid-template-columns: 20px 1fr; }
          .exp-toggle { display: none; }
          .exp-body-inner { padding-left: 32px; }
        }
      `}</style>
    </section>
  );
}
