import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Missing() {
  useEffect(() => {
    document.title = "Página não encontrada · Bergesen do Brasil";
  }, []);

  return (
    <section className="quiet">
      <h1>Não há nada neste endereço.</h1>
      <p>
        <Link className="more" to="/">
          Voltar ao início
        </Link>
      </p>
    </section>
  );
}
