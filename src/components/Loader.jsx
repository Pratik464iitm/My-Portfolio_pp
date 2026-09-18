import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = ["CODE", "SYSTEMS", "PROJECTS", "SHIP"];

export default function Loader({ onDone, skip }) {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (skip) {
      setVisible(false);
      onDone?.();
      return;
    }
    if (step < STEPS.length - 1) {
      const t = setTimeout(() => setStep((s) => s + 1), 150);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisible(false), 260);
    return () => clearTimeout(t);
  }, [step, skip]);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
          aria-hidden="true"
        >
          <div className="loader-inner">
            <span className="loader-label mono">SYSTEM INITIALIZING</span>
            <div className="loader-steps mono">
              {STEPS.map((s, i) => (
                <span key={s} className={i <= step ? "on" : ""}>
                  {String(i + 1).padStart(2, "0")} / {s}
                </span>
              ))}
            </div>
            <div className="loader-bar">
              <motion.div
                className="loader-bar-fill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: (step + 1) / STEPS.length }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <style>{`
            .loader {
              position: fixed;
              inset: 0;
              z-index: 200;
              background: #08090b;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .loader-inner { width: min(320px, 80vw); }
            .loader-label {
              display: block;
              font-size: 11px;
              letter-spacing: 0.18em;
              color: #5c6167;
              margin-bottom: 18px;
            }
            .loader-steps {
              display: flex;
              flex-direction: column;
              gap: 6px;
              font-size: 13px;
              color: #2c2f34;
              margin-bottom: 20px;
            }
            .loader-steps span { transition: color 0.3s ease; }
            .loader-steps span.on { color: #edeee9; }
            .loader-bar {
              height: 1px;
              background: rgba(237,238,233,0.12);
              width: 100%;
            }
            .loader-bar-fill {
              height: 100%;
              background: #5eead4;
              transform-origin: left;
              width: 100%;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
