import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useMotionValueEvent } from "motion/react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { address, desks, phone } from "../content.js";
import { UiProvider } from "../state.jsx";
import { useLenis } from "../hooks/useLenis.js";

const links = [
  ["/", "Início"],
  ["/sobre", "Sobre"],
  ["/servicos", "Serviços"],
  ["/contato", "Contato"],
];

const knot = { type: "spring", bounce: 0, visualDuration: 0.35 };
const ease = [0.22, 1, 0.36, 1];

export function Shell() {
  useLenis();
  const reduce = useReducedMotion();
  const { pathname } = useLocation();
  const { scrollY, scrollYProgress } = useScroll();
  const [pinned, setPinned] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setPinned(value > 8);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <UiProvider>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header className={pinned ? "mast is-pinned" : "mast"}>
        <motion.span
          className="progress"
          style={{ scaleX: scrollYProgress, originX: 0 }}
        />
        <NavLink to="/" end className="brand">
          <img src="/marca.png" alt="Bergesen do Brasil" width="350" height="100" />
        </NavLink>
        <nav className="nav" aria-label="Menu principal">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"}>
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <motion.span layoutId="knot" className="knot" transition={knot} />
                  ) : null}
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <a className="tel" href={phone.href}>
          {phone.label}
        </a>
      </header>
      <main id="conteudo">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="colophon">
        <p className="legal">Bergesen do Brasil Participações Ltda.</p>
        <address>
          {address.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <a href={phone.href}>{phone.label}</a>
        </address>
        <ul className="footer-mails">
          {desks.map((desk) => (
            <li key={desk.id}>
              <a href={`mailto:${desk.email}`}>{desk.email}</a>
            </li>
          ))}
        </ul>
        <nav aria-label="Menu do rodapé">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"}>
              {label}
            </NavLink>
          ))}
        </nav>
        <p>Todos os direitos reservados.</p>
      </footer>
    </UiProvider>
  );
}
