import { useEffect, useRef } from "react";

const NODES = [
  { id: "code", label: "CODE", x: 50, y: 8 },
  { id: "systems", label: "SYSTEMS", x: 90, y: 38 },
  { id: "data", label: "DATA", x: 76, y: 86 },
  { id: "product", label: "PRODUCT", x: 24, y: 86 },
  { id: "solve", label: "PROBLEM SOLVING", x: 10, y: 38 },
];

const EDGES = [
  ["code", "systems"],
  ["systems", "data"],
  ["data", "product"],
  ["product", "solve"],
  ["solve", "code"],
  ["code", "data"],
  ["systems", "product"],
];

function findNode(id) {
  return NODES.find((n) => n.id === id);
}

export default function NodeField() {
  const wrapRef = useRef(null);
  const layerFarRef = useRef(null);
  const layerNearRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || window.matchMedia("(pointer: coarse)").matches) return;

    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };
    let raf;

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      target = { x: nx, y: ny };
    };
    const onLeave = () => {
      target = { x: 0, y: 0 };
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;
      if (layerFarRef.current) {
        layerFarRef.current.style.transform = `translate(${current.x * 10}px, ${current.y * 10}px) rotate(${current.x * 2}deg)`;
      }
      if (layerNearRef.current) {
        layerNearRef.current.style.transform = `translate(${current.x * 22}px, ${current.y * 22}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className="nodefield" data-cursor="drag">
      <svg viewBox="0 0 100 100" className="nodefield-svg" aria-hidden="true">
        <g ref={layerFarRef}>
          {EDGES.map(([a, b], i) => {
            const na = findNode(a);
            const nb = findNode(b);
            return (
              <line
                key={i}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                className="nodefield-edge"
                style={{ animationDelay: `${i * 0.35}s` }}
              />
            );
          })}
          <circle cx="50" cy="47" r="30" className="nodefield-ring" />
        </g>

        <g ref={layerNearRef}>
          {NODES.map((n, i) => (
            <g key={n.id} className="nodefield-node" style={{ animationDelay: `${i * 0.2}s` }}>
              <circle cx={n.x} cy={n.y} r={n.id === "code" ? 3.4 : 2.4} className="nodefield-dot" />
              <circle cx={n.x} cy={n.y} r={n.id === "code" ? 3.4 : 2.4} className="nodefield-dot-pulse" />
            </g>
          ))}
        </g>
      </svg>

      {NODES.map((n) => (
        <span
          key={n.id}
          className={`nodefield-label mono ${n.id === "code" ? "primary" : ""}`}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          {n.label}
        </span>
      ))}

      <style>{`
        .nodefield {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .nodefield-svg { width: 100%; height: 100%; overflow: visible; }
        .nodefield-edge {
          stroke: rgba(148,139,242,0.35);
          stroke-width: 0.25;
          stroke-dasharray: 2 2;
          animation: dash 6s linear infinite;
        }
        .nodefield-ring {
          fill: none;
          stroke: rgba(94,234,212,0.15);
          stroke-width: 0.2;
        }
        @keyframes dash {
          to { stroke-dashoffset: -40; }
        }
        .nodefield-dot { fill: #5eead4; }
        .nodefield-node:first-child .nodefield-dot { fill: #edeee9; }
        .nodefield-dot-pulse {
          fill: none;
          stroke: rgba(94,234,212,0.5);
          stroke-width: 0.3;
          animation: pulse 2.6s ease-out infinite;
          transform-origin: center;
        }
        @keyframes pulse {
          0% { r: 2.4; opacity: 0.8; }
          100% { r: 9; opacity: 0; }
        }
        .nodefield-label {
          position: absolute;
          transform: translate(-50%, -50%);
          font-size: 9.5px;
          letter-spacing: 0.1em;
          color: var(--ink-faint);
          padding-top: 14px;
          white-space: nowrap;
          pointer-events: none;
        }
        .nodefield-label.primary { color: var(--ink); font-size: 10.5px; }
        @media (prefers-reduced-motion: reduce) {
          .nodefield-edge, .nodefield-dot-pulse { animation: none; }
        }
      `}</style>
    </div>
  );
}
