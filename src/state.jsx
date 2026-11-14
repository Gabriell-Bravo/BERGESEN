import { createContext, useContext, useMemo, useRef, useState } from "react";

const UiContext = createContext(null);

export function UiProvider({ children }) {
  const [openReaches, setOpenReaches] = useState({});
  const [activeReach, setActiveReach] = useState(null);
  const [openDesks, setOpenDesks] = useState({});
  const [activeDesk, setActiveDesk] = useState(null);
  const reachesRef = useRef(openReaches);
  const desksRef = useRef(openDesks);
  reachesRef.current = openReaches;
  desksRef.current = openDesks;

  const value = useMemo(
    () => ({
      get openReaches() {
        return reachesRef.current;
      },
      get activeReach() {
        return activeReach;
      },
      get openDesks() {
        return desksRef.current;
      },
      get activeDesk() {
        return activeDesk;
      },
      selectReach(id) {
        if (!reachesRef.current[id]) {
          const next = { ...reachesRef.current, [id]: true };
          reachesRef.current = next;
          setOpenReaches(next);
        }
        setActiveReach(id);
      },
      toggleDesk(id) {
        const opening = !desksRef.current[id];
        const next = { ...desksRef.current, [id]: opening };
        desksRef.current = next;
        setOpenDesks(next);
        setActiveDesk(opening ? id : null);
      },
    }),
    [activeReach, activeDesk],
  );

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export function useUi() {
  const value = useContext(UiContext);
  if (!value) throw new Error("useUi fora do provedor");
  return value;
}
