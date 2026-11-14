import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1];

export function splitTitle(title) {
  const parts = title.split(" ");
  if (parts.length < 3) return [title];
  const mid = Math.ceil(parts.length / 2);
  return [parts.slice(0, mid).join(" "), parts.slice(mid).join(" ")];
}

export function Reveal({ children, delay = 0, className }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -70px 0px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Cada linha sobe de dentro de uma máscara. */
export function Headline({ lines, as: Tag = "h2", className, delay = 0 }) {
  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        <span className="mask" key={index}>
          <span
            className="mask-inner"
            style={{ animationDelay: `${delay + index * 0.12}s` }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
