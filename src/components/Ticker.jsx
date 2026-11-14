import { motion, useReducedMotion } from "motion/react";
import { ticker } from "../content.js";

export function Ticker() {
  const reduce = useReducedMotion();
  const items = reduce ? ticker : [...ticker, ...ticker];

  return (
    <div className="ticker" aria-label="Portos e tipos de navio">
      {reduce ? (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <motion.ul
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        >
          {items.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
