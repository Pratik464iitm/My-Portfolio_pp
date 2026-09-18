import { useState } from "react";
import Reveal from "./Reveal.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";
import { projects } from "../data/content.js";

export default function Projects() {
  const [active, setActive] = useState(null);
  const activeIndex = projects.findIndex((p) => p.id === active?.id);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="section-number mono">03</span>
            <h2 className="section-title" style={{ marginTop: 10 }}>Projects</h2>
          </div>
          <p className="section-desc">Four systems, four different engineering problems — click any card for the full build.</p>
        </div>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <Reveal key={p.id} y={30} delay={(i % 2) * 0.08}>
              <ProjectCard project={p} index={i} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <ProjectModal project={active} index={activeIndex} onClose={() => setActive(null)} />
      )}

      <style>{`
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }
        @media (max-width: 760px) {
          .proj-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
