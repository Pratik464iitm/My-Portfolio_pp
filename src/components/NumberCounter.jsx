import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function NumberCounter({ value, duration = 1.1 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState("0");
  const numeric = parseInt(String(value).replace(/[^\d]/g, ""), 10) || 0;
  const suffix = String(value).replace(/[\d,]/g, "");

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(String(numeric) + suffix);
      return;
    }
    let raf;
    const start = performance.now();
    const animate = (now) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * numeric) + suffix);
      if (t < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric, suffix, duration]);

  return <span ref={ref}>{display}</span>;
}
