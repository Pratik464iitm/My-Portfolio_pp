import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { education, scholastic } from "../data/content.js";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="section-number mono">01</span>
            <h2 className="section-title" style={{ marginTop: 10 }}>About</h2>
          </div>
        </div>

        <div className="about-grid">
          <Reveal className="about-copy">
            <p className="about-lede">
              From biological systems to software systems — I'm drawn to structures that have
              moving parts: cells, workspaces, compression trees, TCP connections.
            </p>
            <div className="about-body">
              <p>
                I'm a Dual Degree Biotechnology student at IIT Madras, but most of my hours go into
                writing software: full-stack products with the MERN stack, low-level systems work in
                C++, and problems solved against a contest clock on Codeforces and LeetCode.
              </p>
              <p>
                What connects all of it is the same instinct — take something with real structure
                (a workspace, a file, a network of clients) and build the layer that keeps it correct,
                fast and legible. That shows up in a real-time board that never desyncs, a compressor
                that rebuilds files bit-for-bit, and a chat server that never blocks.
              </p>
              <p>
                Outside of code, I hold a strategist role in IIT Madras's Alumni Relations Cell and
                play competitive cricket for my hostel and the institute.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30} className="about-side">
            <div className="card edu-card">
              <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Education</span>
              <ul className="edu-list">
                {education.map((e) => (
                  <li key={e.school}>
                    <div className="edu-top">
                      <span className="edu-school">{e.school}</span>
                      <span className="mono edu-date">{e.date}</span>
                    </div>
                    <span className="edu-detail">{e.detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card sch-card">
              <span className="tag" style={{ marginBottom: 16, display: "inline-block" }}>Scholastic</span>
              <ul className="sch-list">
                {scholastic.map((s) => (
                  <li key={s.title}>
                    <div className="edu-top">
                      <span className="edu-school">{s.title}</span>
                      <span className="mono edu-date">{s.year}</span>
                    </div>
                    <span className="edu-detail">{s.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
          gap: clamp(32px, 5vw, 72px);
          align-items: start;
        }
        .about-lede {
          font-size: clamp(20px, 2.4vw, 26px);
          line-height: 1.45;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin-bottom: 26px;
        }
        .about-body { display: flex; flex-direction: column; gap: 16px; }
        .about-body p { color: var(--ink-dim); font-size: 15px; line-height: 1.75; max-width: 56ch; }
        .about-side { display: flex; flex-direction: column; gap: 18px; }
        .edu-card, .sch-card { padding: 26px; }
        .edu-list, .sch-list { display: flex; flex-direction: column; gap: 18px; }
        .edu-list li, .sch-list li { border-top: 1px solid var(--line); padding-top: 14px; }
        .edu-list li:first-child, .sch-list li:first-child { border-top: none; padding-top: 0; }
        .edu-top { display: flex; justify-content: space-between; gap: 10px; margin-bottom: 4px; }
        .edu-school { font-size: 14px; font-weight: 500; color: var(--ink); }
        .edu-date { font-size: 11px; color: var(--ink-faint); white-space: nowrap; }
        .edu-detail { font-size: 13px; color: var(--ink-dim); line-height: 1.5; }

        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
