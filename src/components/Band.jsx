import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Headline, Reveal } from "./Reveal.jsx";

export function Band({ id, title, lede, image, flip = false, children }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section className={flip ? "band is-flip" : "band"} id={id} ref={ref}>
      <div className="band-media">
        <motion.img
          src={image.src}
          alt={image.alt}
          style={reduce ? undefined : { y }}
        />
      </div>
      <div className="band-copy">
        <Headline lines={title} />
        <Reveal>
          <p>{lede}</p>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function PageHero({ image, lines, lede }) {
  const reduce = useReducedMotion();
  return (
    <header className="page-hero">
      <div className="page-hero-media">
        <motion.img
          src={image.src}
          alt={image.alt}
          initial={reduce ? false : { scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="hero-shade" />
      </div>
      <div className="page-hero-copy">
        <Headline as="h1" lines={lines} />
        {lede ? (
          <Reveal>
            <p>{lede}</p>
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
