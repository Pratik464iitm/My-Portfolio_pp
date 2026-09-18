import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, Github, ArrowUpRight } from "lucide-react";

function ArchitectureDiagram({ steps }) {
  return (
    <div className="arch mono" role="img" aria-label={`Architecture flow: ${steps.join(" leading to ")}`}>
      {steps.map((s, i) => (
        <div className="arch-row" key={s}>
          <div className="arch-node">
            <span className="arch-node-dot" />
            {s}
          </div>
          {i < steps.length - 1 && <div className="arch-connector" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

export default function ProjectModal({ project, index, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <>
      <motion.div
        className="modal-scrim"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-panel"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} case study`}
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close case study" data-cursor="link">
            <X size={18} />
          </button>

          <div className="modal-scroll">
            <span className="mono modal-index">PROJECT {String(index + 1).padStart(2, "0")}</span>
            <h3 className="modal-title">{project.name}</h3>
            <p className="modal-tag">{project.tag}</p>
            <p className="modal-oneliner">{project.oneLiner}</p>

            <div className="modal-grid">
              <div className="modal-col">
                <section>
                  <h4 className="modal-h">The problem</h4>
                  <p>{project.problem}</p>
                </section>
                <section>
                  <h4 className="modal-h">The build</h4>
                  <p>{project.build}</p>
                </section>
                <section>
                  <h4 className="modal-h">Engineering details</h4>
                  <ul className="modal-list">
                    {project.engineering.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="modal-col">
                <section>
                  <h4 className="modal-h">Architecture</h4>
                  <ArchitectureDiagram steps={project.flow} />
                </section>
                <section>
                  <h4 className="modal-h">Stack</h4>
                  <div className="modal-stack">
                    {project.stack.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </section>
                <section className="modal-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" data-cursor="link">
                    <Github size={15} /> GitHub
                  </a>
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" data-cursor="link">
                      Live demo <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <span className="tag" style={{ opacity: 0.7 }}>[ Live demo not published ]</span>
                  )}
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .modal-scrim {
          position: fixed; inset: 0;
          z-index: 250;
          background: rgba(5,6,8,0.82);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .modal-panel {
          position: relative;
          width: min(920px, 100%);
          max-height: 86vh;
          background: linear-gradient(180deg, #0d0f13, #0a0b0e);
          border: 1px solid var(--line-strong);
          border-radius: var(--radius-l);
          overflow: hidden;
        }
        .modal-scroll { overflow-y: auto; max-height: 86vh; padding: clamp(28px, 5vw, 56px); }
        .modal-close {
          position: sticky;
          float: right;
          top: 20px;
          margin-right: 20px;
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid var(--line-strong);
          background: var(--bg-elevated);
          display: flex; align-items: center; justify-content: center;
          z-index: 5;
        }
        .modal-index { font-size: 11px; color: var(--bio); letter-spacing: 0.1em; }
        .modal-title { font-size: clamp(28px, 4vw, 40px); font-weight: 600; letter-spacing: -0.02em; margin-top: 10px; }
        .modal-tag { color: var(--ink-dim); font-size: 14px; margin-top: 6px; }
        .modal-oneliner { color: var(--ink); font-size: clamp(15px, 1.8vw, 18px); line-height: 1.6; margin-top: 18px; max-width: 62ch; }
        .modal-grid { display: grid; grid-template-columns: minmax(0,1.15fr) minmax(0,0.85fr); gap: clamp(28px, 4vw, 56px); margin-top: 40px; }
        .modal-col { display: flex; flex-direction: column; gap: 30px; }
        .modal-h { font-size: 11.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-faint); margin-bottom: 10px; font-family: var(--font-mono); }
        .modal-col p { color: var(--ink-dim); font-size: 14.5px; line-height: 1.7; }
        .modal-list { display: flex; flex-direction: column; gap: 10px; }
        .modal-list li { position: relative; padding-left: 16px; color: var(--ink-dim); font-size: 14px; line-height: 1.65; }
        .modal-list li::before { content: ""; position: absolute; left: 0; top: 9px; width: 5px; height: 1px; background: var(--systems); }
        .modal-stack { display: flex; flex-wrap: wrap; gap: 8px; }
        .modal-links { display: flex; flex-wrap: wrap; gap: 10px; }
        .arch { display: flex; flex-direction: column; }
        .arch-node {
          display: flex; align-items: center; gap: 10px;
          padding: 11px 14px;
          border: 1px solid var(--line-strong);
          border-radius: 6px;
          font-size: 12px;
          background: var(--bg-1);
          color: var(--ink);
        }
        .arch-node-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--bio); flex-shrink: 0; }
        .arch-connector { width: 1px; height: 18px; background: var(--line-strong); margin-left: 20px; }

        @media (max-width: 760px) {
          .modal-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
