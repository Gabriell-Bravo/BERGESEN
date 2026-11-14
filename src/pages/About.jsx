import { useEffect } from "react";
import { Link } from "react-router-dom";
import { frames } from "../content.js";
import { PageHero } from "../components/Band.jsx";
import { Reveal } from "../components/Reveal.jsx";

export function About() {
  useEffect(() => {
    document.title = "Sobre · Bergesen do Brasil";
  }, []);

  return (
    <>
      <PageHero
        image={frames.sobreHero}
        lines={["A Bergesen", "do Brasil"]}
      />
      <article className="prose">
        <Reveal>
          <p>
            BERGESEN DO BRASIL PARTICIPAÇÕES LTDA. é uma agência marítima
            estabelecida em agosto de 2007, no Rio de Janeiro. É dirigida e
            administrada por seus sócios-diretores.
          </p>
        </Reveal>
        <Reveal>
          <p>
            A equipe faz o agenciamento nos portos, terminais e aeroportos do
            estado. Nos portos argentinos, a empresa aponta a irmã Capricorn
            Argentina S/A.
          </p>
        </Reveal>
        <Reveal>
          <p>
            O trabalho publicado pela própria Bergesen cobre navios PCC,
            químicos, graneleiros, porta-contêineres e petroleiros, além de
            abastecimento, chamadas de socorro e assistência a tripulantes e
            passageiros.
          </p>
        </Reveal>
        <Reveal>
          <p>
            A empresa afirma que seus padrões de qualidade foram aprovados pela
            FONASBA, e que consolidou uma das maiores atuações nos portos do
            Rio de Janeiro.
          </p>
        </Reveal>
        <div className="prose-photo">
          <img src={frames.sobreFoto.src} alt={frames.sobreFoto.alt} />
        </div>
        <Reveal>
          <p>
            <Link className="more" to="/servicos">
              Ver portos e terminais
            </Link>
          </p>
        </Reveal>
      </article>
    </>
  );
}
