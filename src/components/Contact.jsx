import { ArrowUpRight, Github, Linkedin, Code2 } from "lucide-react";
import Reveal from "./Reveal.jsx";
import MagneticButton from "./MagneticButton.jsx";
import { personal } from "../data/content.js";

const links = [
  { label: "LinkedIn", href: personal.links.linkedin, icon: Linkedin },
  { label: "GitHub", href: personal.links.github, icon: Github },
  { label: "Codeforces", href: personal.links.codeforces, icon: Code2 },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head">
          <span className="section-number mono">08</span>
        </div>

        <Reveal>
          <h2 className="contact-title">
            Let's build <em>something.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1} y={20}>
          <p className="contact-desc">
            Open to software engineering internships and roles — full-stack, backend, or systems.
            {personal.links.email ? (
              <> Reach me at <a href={`mailto:${personal.links.email}`} className="link-underline">{personal.links.email}</a>.</>
            ) : (
              <> Email on request — reach out on LinkedIn to start the conversation.</>
            )}
          </p>
        </Reveal>

        <Reveal delay={0.2} y={20} className="contact-links">
          {links.map(({ label, href, icon: Icon }) => (
            <MagneticButton key={label} strength={0.25}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="contact-link" data-cursor="link">
                <Icon size={16} />
                <span>{label}</span>
                <ArrowUpRight size={14} className="contact-link-arrow" />
              </a>
            </MagneticButton>
          ))}
        </Reveal>
      </div>

      <style>{`
        .contact-title {
          font-size: clamp(44px, 8vw, 96px);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.03;
        }
        .contact-title em { font-style: normal; color: var(--bio); }
        .contact-desc {
          margin-top: 24px;
          max-width: 52ch;
          font-size: 15.5px;
          color: var(--ink-dim);
          line-height: 1.7;
        }
        .contact-links { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 44px; }
        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 20px;
          border: 1px solid var(--line-strong);
          border-radius: 100px;
          font-size: 14px;
          transition: border-color 0.35s ease, color 0.35s ease, background 0.35s ease;
        }
        .contact-link:hover { border-color: var(--bio); color: var(--bio); }
        .contact-link-arrow { transition: transform 0.35s ease; }
        .contact-link:hover .contact-link-arrow { transform: translate(2px, -2px); }
      `}</style>
    </section>
  );
}
