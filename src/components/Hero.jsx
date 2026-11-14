import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { frames, heroSlides } from "../content.js";
import { Headline } from "./Reveal.jsx";

const ease = [0.22, 1, 0.36, 1];
const SLIDE_MS = 5200;

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return undefined;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [reduce]);

  const slide = frames[heroSlides[index]];

  return (
    <section className="hero" aria-roledescription="carrossel">
      <div className="hero-stage">
        <AnimatePresence initial={false}>
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            initial={reduce ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.15, ease },
              scale: { duration: 6.2, ease: "linear" },
            }}
          />
        </AnimatePresence>
        <div className="hero-shade" />
        <p className="hero-count" aria-hidden="true">
          {String(index + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
        </p>
      </div>
      <div className="hero-copy">
        <Headline
          as="h1"
          delay={0.15}
          lines={["Desde 2007,", "a agência marítima", "nos portos do Rio."]}
        />
        <motion.p
          className="hero-lead"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
        >
          Também nos outros portos brasileiros, por subagentes. Operações,
          documentação e financeiro, cada um na sua mesa.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease }}
        >
          <a className="btn" href="#mesas">
            Escolher a mesa
          </a>
          <Link className="btn btn-ghost" to="/servicos">
            Ver os portos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
