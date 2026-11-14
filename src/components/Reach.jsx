import { motion } from "motion/react";
import { useUi } from "../state.jsx";

const fade = { duration: 0.28, ease: [0.16, 1, 0.3, 1] };

export function Reach({ id, title, lede, children }) {
  const { openReaches, activeReach, selectReach } = useUi();
  const open = Boolean(openReaches[id]);
  const dimmed = activeReach !== null && activeReach !== id;

  return (
    <motion.section
      id={id}
      className="reach"
      animate={{ opacity: dimmed ? 0.5 : 1 }}
      transition={fade}
    >
      <h2>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => selectReach(id)}
        >
          <span>{title}</span>
          <span className="verb">{open ? "Aberto" : "Abrir"}</span>
        </button>
      </h2>
      <div className={open ? "reach-body is-open" : "reach-body"}>
        <div inert={open ? undefined : true}>
          <p>{lede}</p>
          {open ? children : null}
        </div>
      </div>
    </motion.section>
  );
}

export function PlaceList({ places }) {
  return (
    <ul className="lines">
      {places.map((place) => (
        <Place key={place.name} name={place.name} detail={place.detail} />
      ))}
    </ul>
  );
}

function Place({ name, detail }) {
  return (
    <li className="line">
      <details>
        <summary>{name}</summary>
        <p>{detail}</p>
      </details>
    </li>
  );
}
