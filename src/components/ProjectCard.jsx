import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index, onOpen }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-4px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateY(0)";
  };

  return (
    <button
      ref={ref}
      className="proj-card"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => onOpen(project)}
      data-cursor="project"
      aria-label={`Open case study: ${project.name}`}
    >
      <div className="proj-card-top">
        <span className="mono proj-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="proj-arrow"><ArrowUpRight size={16} /></span>
      </div>

      <div className="proj-flow-mini mono" aria-hidden="true">
        {project.flow.slice(0, 4).map((s, i) => (
          <span key={i} className="proj-flow-node" style={{ animationDelay: `${i * 0.15}s` }}>{s}</span>
        ))}
      </div>

      <div className="proj-card-bottom">
        <h3 className="proj-name">{project.name}</h3>
        <p className="proj-tag">{project.tag}</p>
        <p className="proj-oneliner">{project.oneLiner}</p>
        <div className="proj-stackline mono">{project.stackLine}</div>
      </div>

      <style>{`
        .proj-card {
          position: relative;
          text-align: left;
          background: linear-gradient(180deg, var(--bg-1), var(--bg-2));
          border: 1px solid var(--line);
          border-radius: var(--radius-m);
          padding: 26px 26px 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-height: 320px;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.4s ease;
          will-change: transform;
        }
        .proj-card:hover { border-color: var(--line-strong); }
        .proj-card-top { display: flex; justify-content: space-between; align-items: center; }
        .proj-index { font-size: 12px; color: var(--ink-faint); }
        .proj-arrow {
          width: 30px; height: 30px;
          border-radius: 50%;
          border: 1px solid var(--line-strong);
          display: flex; align-items: center; justify-content: center;
          color: var(--ink-dim);
          transition: background 0.35s ease, color 0.35s ease, transform 0.35s ease;
        }
        .proj-card:hover .proj-arrow { background: var(--bio); color: #08090b; transform: rotate(45deg); }
        .proj-flow-mini {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          font-size: 9.5px;
          color: var(--ink-faint);
        }
        .proj-flow-node {
          padding: 4px 8px;
          border: 1px solid var(--line);
          border-radius: 3px;
          background: rgba(148,139,242,0.05);
        }
        .proj-card-bottom { margin-top: auto; }
        .proj-name { font-size: 21px; font-weight: 600; letter-spacing: -0.01em; }
        .proj-tag { font-size: 12.5px; color: var(--bio); margin-top: 4px; }
        .proj-oneliner { font-size: 13.5px; color: var(--ink-dim); line-height: 1.6; margin-top: 12px; max-width: 42ch; }
        .proj-stackline { font-size: 11px; color: var(--ink-faint); margin-top: 16px; }
      `}</style>
    </button>
  );
}
