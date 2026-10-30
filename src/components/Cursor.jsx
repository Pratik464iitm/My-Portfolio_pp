// import { useEffect, useRef, useState } from "react";

// export default function Cursor() {
//   const dotRef = useRef(null);
//   const ringRef = useRef(null);
//   const [enabled, setEnabled] = useState(false);
//   const [variant, setVariant] = useState("default");

//   useEffect(() => {
//     const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
//     setEnabled(fine);
//     if (!fine) return;

//     const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
//     const ring = { x: pos.x, y: pos.y };

//     const move = (e) => {
//       pos.x = e.clientX;
//       pos.y = e.clientY;
//       if (dotRef.current) {
//         dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
//       }
//       const el = e.target.closest("[data-cursor]");
//       setVariant(el ? el.getAttribute("data-cursor") : "default");
//     };

//     let raf;
//     const tick = () => {
//       ring.x += (pos.x - ring.x) * 0.18;
//       ring.y += (pos.y - ring.y) * 0.18;
//       if (ringRef.current) {
//         ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
//       }
//       raf = requestAnimationFrame(tick);
//     };
//     raf = requestAnimationFrame(tick);

//     window.addEventListener("mousemove", move);
//     return () => {
//       window.removeEventListener("mousemove", move);
//       cancelAnimationFrame(raf);
//     };
//   }, []);

//   if (!enabled) return null;

//   return (
//     <>
//       <div ref={dotRef} className={`cursor-dot cursor-${variant}`} aria-hidden="true" />
//       <div ref={ringRef} className={`cursor-ring cursor-${variant}`} aria-hidden="true" />
//       <style>{`
//         .cursor-dot, .cursor-ring {
//           position: fixed;
//           top: 0; left: 0;
//           pointer-events: none;
//           z-index: 300;
//           border-radius: 50%;
//           will-change: transform;
//         }
//         .cursor-dot {
//           width: 6px; height: 6px;
//           background: #edeee9;
//           margin-left: -3px; margin-top: -3px;
//           transition: background 0.25s ease, transform 0.25s ease;
//         }
//         .cursor-ring {
//           width: 34px; height: 34px;
//           margin-left: -17px; margin-top: -17px;
//           border: 1px solid rgba(237,238,233,0.35);
//           transition: width 0.3s ease, height 0.3s ease, margin 0.3s ease, border-color 0.3s ease, background 0.3s ease;
//         }
//         .cursor-ring.cursor-link, .cursor-ring.cursor-project {
//           width: 64px; height: 64px;
//           margin-left: -32px; margin-top: -32px;
//           border-color: #5eead4;
//           background: rgba(94,234,212,0.06);
//         }
//         .cursor-dot.cursor-link, .cursor-dot.cursor-project { background: #5eead4; }
//         .cursor-ring.cursor-drag {
//           width: 48px; height: 48px;
//           margin-left: -24px; margin-top: -24px;
//           border-color: #948bf2;
//         }
//         @media (max-width: 900px) {
//           .cursor-dot, .cursor-ring { display: none; }
//         }
//       `}</style>
//     </>
//   );
// }


//updated now as that project section was lagging so 


import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState("default");
  const variantRef = useRef("default");

  useEffect(() => {
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    setEnabled(fine);
    if (!fine) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }

      const el = e.target.closest("[data-cursor]");
      const nextVariant = el
        ? el.getAttribute("data-cursor")
        : "default";

      // Update React only when the cursor style actually changes.
      if (variantRef.current !== nextVariant) {
        variantRef.current = nextVariant;
        setVariant(nextVariant);
      }
    };

    let raf;

    const tick = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", move, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot cursor-${variant}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`cursor-ring cursor-${variant}`}
        aria-hidden="true"
      />

      <style>{`
        .cursor-dot, .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 300;
          border-radius: 50%;
          will-change: transform;
        }

        .cursor-dot {
          width: 6px;
          height: 6px;
          background: #edeee9;
          margin-left: -3px;
          margin-top: -3px;
          transition: background 0.25s ease;
        }

        .cursor-ring {
          width: 34px;
          height: 34px;
          margin-left: -17px;
          margin-top: -17px;
          border: 1px solid rgba(237,238,233,0.35);
          transition: width 0.3s ease, height 0.3s ease,
            margin 0.3s ease, border-color 0.3s ease,
            background 0.3s ease;
        }

        .cursor-ring.cursor-link,
        .cursor-ring.cursor-project {
          width: 64px;
          height: 64px;
          margin-left: -32px;
          margin-top: -32px;
          border-color: #5eead4;
          background: rgba(94,234,212,0.06);
        }

        .cursor-dot.cursor-link,
        .cursor-dot.cursor-project {
          background: #5eead4;
        }

        .cursor-ring.cursor-drag {
          width: 48px;
          height: 48px;
          margin-left: -24px;
          margin-top: -24px;
          border-color: #948bf2;
        }
          /* Hide both custom cursor elements when project details are open */
body:has(.modal-scrim) .cursor-ring,
body:has(.modal-scrim) .cursor-dot {
  display: none !important;
}

        @media (max-width: 900px) {
          .cursor-dot, .cursor-ring {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
