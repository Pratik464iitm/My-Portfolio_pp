import { motion } from "framer-motion";

export default function Reveal({
  children,
  y = 24,
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.3,
  className,
  as: Component = motion.div,
}) {
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
