import { useEffect } from "react";
import Lenis from "lenis";

/** Rolagem suave. Fica desligada para quem prefere menos movimento. */
export function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const lenis = new Lenis({
      lerp: 0.11,
      smoothWheel: true,
      anchors: true,
      syncTouch: false,
    });
    let frame = 0;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
}
