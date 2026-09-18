import { personal } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="mono">{personal.name} — {personal.institute}</span>
        <span className="mono">© {new Date().getFullYear()} · built with intent, not a template</span>
      </div>

      <style>{`
        .footer { padding: 28px 0 40px; }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 11.5px;
          color: var(--ink-faint);
        }
      `}</style>
    </footer>
  );
}
