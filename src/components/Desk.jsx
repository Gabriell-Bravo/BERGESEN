import { AnimatePresence, motion } from "motion/react";
import { deskFrame, frames } from "../content.js";
import { useUi } from "../state.jsx";

const spring = { type: "spring", bounce: 0, visualDuration: 0.45 };

export function Desks({ desks }) {
  const { openDesks, activeDesk, toggleDesk } = useUi();

  return (
    <div className={activeDesk ? "desk-row is-open" : "desk-row"}>
      {desks.map((desk) => {
        const open = Boolean(openDesks[desk.id]);
        const frame = frames[deskFrame[desk.id]];
        return (
          <motion.article
            key={desk.id}
            layout
            className={open ? "desk is-open" : "desk"}
            transition={spring}
          >
            <div className="desk-photo">
              <motion.img
                src={frame.src}
                alt={frame.alt}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="desk-copy">
              <h2>{desk.name}</h2>
              <p>{desk.note}</p>
              <button type="button" onClick={() => toggleDesk(desk.id)}>
                {open ? "Ocultar o e-mail" : "Mostrar o e-mail"}
              </button>
              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    key="mail"
                    className="desk-mail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a href={`mailto:${desk.email}`}>{desk.email}</a>
                    <a className="mail" href={`mailto:${desk.email}`}>
                      {desk.action}
                    </a>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
