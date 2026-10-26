import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { personal } from "../data/content.js";
import NodeField from "./NodeField.jsx";
import MagneticButton from "./MagneticButton.jsx";

const line = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: 0,
    transition: { delay: 0.25 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const ref = useRef(null);

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-grid-layout">
        <div className="hero-copy">
          <motion.div
            className="eyebrow-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.5 }}
          >
            <span className="dot-live" aria-hidden="true" />
            <span className="section-kicker" style={{ marginBottom: 0 }}>{personal.eyebrow}</span>
          </motion.div>

          <h1 className="hero-title">
            <span className="reveal-line">
              <motion.span custom={0} variants={line} initial="hidden" animate="show" className="reveal-inner">
                From algorithms to applications
              </motion.span>
            </span>
            <span className="reveal-line">
              <motion.span custom={1} variants={line} initial="hidden" animate="show" className="reveal-inner">
                
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            I'm Pratik Panwar — a Dual Degree Biotechnology student at IIT Madras who builds
            full-stack products and low-level C++ systems in equal measure, and tests that thinking
            against the clock in competitive programming.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <MagneticButton>
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                data-cursor="link"
              >
                Explore my work <ArrowUpRight size={15} />
              </button>
            </MagneticButton>
            <MagneticButton>
              <a href={personal.resumeFile} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" data-cursor="link">
                View résumé
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href={personal.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" data-cursor="link">
                GitHub
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <NodeField />
        </motion.div>
      </div>

      <motion.div
        className="scroll-cue mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <ArrowDown size={14} />
        <span>SCROLL</span>
      </motion.div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 90px;
          overflow: hidden;
        }
        .hero-bg { position: absolute; inset: 0; z-index: 0; }
        .hero-glow {
          position: absolute;
          top: -20%; left: 50%;
          width: 1100px; height: 900px;
          transform: translateX(-50%);
          background: radial-gradient(closest-side, rgba(94,234,212,0.10), rgba(148,139,242,0.06) 45%, transparent 70%);
          filter: blur(10px);
        }
        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(237,238,233,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(237,238,233,0.035) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 75%);
        }
        .hero-grid-layout {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          align-items: center;
          gap: clamp(24px, 5vw, 64px);
        }
        .dot-live {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #5eead4;
          box-shadow: 0 0 0 3px rgba(94,234,212,0.15);
        }
        .hero-title {
          margin-top: 22px;
          font-size: clamp(40px, 6.6vw, 82px);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.04;
        }
        .hero-title em {
          font-style: normal;
          color: #5eead4;
        }
        .reveal-line { display: block; overflow: hidden; }
        .reveal-inner { display: inline-block; }
        .hero-desc {
          margin-top: 26px;
          max-width: 46ch;
          font-size: clamp(15px, 1.6vw, 17px);
          line-height: 1.7;
          color: var(--ink-dim);
        }
        .hero-cta {
          margin-top: 38px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .hero-visual {
          position: relative;
          aspect-ratio: 1 / 1;
          max-height: 480px;
        }
        .scroll-cue {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          letter-spacing: 0.18em;
          color: var(--ink-faint);
          animation: bob 2.4s ease-in-out infinite;
        }
        @keyframes bob {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 6px); }
        }
        @media (max-width: 900px) {
          .hero-grid-layout { grid-template-columns: 1fr; }
          .hero-visual { max-height: 320px; order: -1; margin-bottom: 8px; opacity: 0.85; }
          .scroll-cue { display: none; }
        }
      `}</style>
    </section>
  );
}
