import { useEffect } from "react";
import { frames, reaches, reachFrame, roles } from "../content.js";
import { Band, PageHero } from "../components/Band.jsx";
import { Reveal, splitTitle } from "../components/Reveal.jsx";

export function Services() {
  useEffect(() => {
    document.title = "Serviços · Bergesen do Brasil";
  }, []);

  return (
    <>
      <PageHero
        image={frames.servicosHero}
        lines={["Portos, terminais", "e aeroportos."]}
        lede="O agenciamento cobre o estado do Rio de Janeiro, e outros portos brasileiros por subagentes. Os nomes abaixo são locais de atuação."
      />
      {reaches.map((reach, index) => (
        <Band
          key={reach.id}
          id={reach.id}
          flip={index % 2 === 1}
          title={splitTitle(reach.title)}
          lede={reach.lede}
          image={frames[reachFrame[reach.id]]}
        >
          <ul className="places">
            {reach.places.map((place) => (
              <li key={place.name}>
                <strong>{place.name}</strong>
                <span>{place.detail}</span>
              </li>
            ))}
          </ul>
        </Band>
      ))}
      <section className="roles">
        <h2>Atuamos como agentes marítimos</h2>
        <ul>
          {roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
        <Reveal>
          <p>Troca de tripulação: embarque, desembarque e representantes.</p>
        </Reveal>
      </section>
    </>
  );
}
