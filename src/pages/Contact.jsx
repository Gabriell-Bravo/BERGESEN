import { useEffect, useState } from "react";
import { address, desks, frames, mapEmbed, mapLink, phone } from "../content.js";
import { PageHero } from "../components/Band.jsx";
import { Reveal } from "../components/Reveal.jsx";

export function Contact() {
  useEffect(() => {
    document.title = "Contato · Bergesen do Brasil";
  }, []);

  const [deskId, setDeskId] = useState("operacoes");
  const [name, setName] = useState("");
  const [reference, setReference] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sentDesk, setSentDesk] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const desk = desks.find((item) => item.id === deskId);
    if (!desk) {
      setError("Escolha a mesa que vai receber.");
      setSentDesk("");
      return;
    }
    if (!message.trim()) {
      setError("Escreva a mensagem antes de abrir o e-mail.");
      setSentDesk("");
      return;
    }
    const body = [
      name.trim() ? `Nome: ${name.trim()}` : null,
      reference.trim() ? `Navio ou referência: ${reference.trim()}` : null,
      "",
      message.trim(),
    ]
      .filter((line) => line !== null)
      .join("\n");
    const href = `mailto:${desk.email}?subject=${encodeURIComponent(
      `Bergesen — ${desk.name}`,
    )}&body=${encodeURIComponent(body)}`;
    setError("");
    setSentDesk(desk.name);
    window.location.href = href;
  }

  return (
    <>
      <PageHero
        image={frames.contatoHero}
        lines={["Fale com", "a mesa"]}
        lede="Operações, documentação e financeiro respondem em endereços diferentes. O formulário abre o seu e-mail, já endereçado."
      />
      <div className="contact-grid">
        <Reveal>
          <form className="letter" onSubmit={onSubmit} noValidate>
            <fieldset>
              <legend>Mesa</legend>
              {desks.map((desk) => (
                <label key={desk.id} className="choice">
                  <input
                    type="radio"
                    name="mesa"
                    value={desk.id}
                    checked={deskId === desk.id}
                    onChange={() => {
                      setDeskId(desk.id);
                      setError("");
                    }}
                  />
                  <span>{desk.name}</span>
                </label>
              ))}
            </fieldset>
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              name="nome"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="referencia">Navio ou referência</label>
            <input
              id="referencia"
              name="referencia"
              value={reference}
              onChange={(event) => setReference(event.target.value)}
            />
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              required
              aria-invalid={error.includes("mensagem") || undefined}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
                setError("");
              }}
            />
            {error ? (
              <p className="form-error" role="alert">
                {error}
              </p>
            ) : null}
            {sentDesk ? (
              <p className="form-note" role="status">
                O e-mail para {sentDesk} foi preparado. Se o programa não abriu,
                use o endereço ao lado.
              </p>
            ) : null}
            <button type="submit">Abrir o e-mail</button>
          </form>
        </Reveal>
        <aside className="where">
          <h2>Onde estamos</h2>
          <address>
            {address.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <a className="tel" href={phone.href}>
            {phone.label}
          </a>
          <ul className="footer-mails">
            {desks.map((desk) => (
              <li key={desk.id}>
                {desk.name}
                <a href={`mailto:${desk.email}`}>{desk.email}</a>
              </li>
            ))}
          </ul>
          <iframe
            className="where-map"
            title="Mapa do escritório na Avenida Almirante Barroso, 97, Centro, Rio de Janeiro"
            src={mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a className="more" href={mapLink} target="_blank" rel="noreferrer">
            Abrir no mapa
          </a>
        </aside>
      </div>
    </>
  );
}
