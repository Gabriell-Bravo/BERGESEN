import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { desks, frames, reaches, reachFrame, roles } from "../content.js";
import { Band } from "../components/Band.jsx";
import { Desks } from "../components/Desk.jsx";
import { Hero } from "../components/Hero.jsx";
import { Headline, Reveal, splitTitle } from "../components/Reveal.jsx";
import { Ticker } from "../components/Ticker.jsx";

export function Home() {
  const reduce = useReducedMotion();
  const intro = useRef(null);
  const { scrollYProgress } = useScroll({
    target: intro,
    offset: ["start end", "end start"],
  });
  const yearY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  useEffect(() => {
    document.title = "Bergesen do Brasil · Agência marítima";
  }, []);

  return (
    <>
      <Hero />
      <Ticker />
      <section className="intro" ref={intro}>
        <div className="intro-copy">
          <motion.p
            className="year"
            style={reduce ? undefined : { y: yearY }}
            aria-hidden="true"
          >
            2007
          </motion.p>
          <Headline lines={["Agosto de 2007,", "no Rio de Janeiro."]} />
          <Reveal>
            <p>
              A Bergesen faz o agenciamento nos portos, terminais e aeroportos
              do estado. A empresa afirma padrões aprovados pela FONASBA e uma
              das maiores atuações nos portos do Rio.
            </p>
            <p>
              <Link className="more" to="/sobre">
                A história da agência
              </Link>
            </p>
          </Reveal>
        </div>
        <motion.div
          className="intro-photo"
          initial={reduce ? false : { clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={frames.intro.src} alt={frames.intro.alt} />
        </motion.div>
      </section>

      {reaches.map((reach, index) => (
        <Band
          key={reach.id}
          id={reach.id}
          flip={index % 2 === 1}
          title={splitTitle(reach.title)}
          lede={reach.lede}
          image={frames[reachFrame[reach.id]]}
        >
          <Reveal delay={0.1}>
            <Link className="more" to={`/servicos#${reach.id}`}>
              Ver os locais
            </Link>
          </Reveal>
        </Band>
      ))}

      <section className="mesas" id="mesas">
        <Headline lines={["Escolha a mesa", "e escreva."]} />
        <Reveal>
          <p className="mesas-lead">
            Chegada, documentos da escala e faturamento saem de endereços
            diferentes.
          </p>
        </Reveal>
        <Desks desks={desks} />
      </section>

      <section className="roles">
        <Headline lines={["Para quem", "atuamos"]} />
        <ul>
          {roles.map((role, index) => (
            <Reveal key={role} delay={index * 0.08}>
              <li>{role}</li>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <p>
            Troca de tripulação pelo Galeão e pelo Santos Dumont, e também nos
            ancoradouros da baía.
          </p>
          <Link className="more" to="/contato">
            Falar com a agência
          </Link>
        </Reveal>
      </section>
    </>
  );
}
