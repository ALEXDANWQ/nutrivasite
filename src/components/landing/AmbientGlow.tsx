import { useRef, type CSSProperties } from "react";
import { useInView, useReducedMotion } from "framer-motion";

// Keep decorative movement on the compositor and stop it outside the viewport.
export function AmbientGlow({ className, style }: { className: string; style: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reducedMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className={`ambient-glow ${className}`}
      style={{
        ...style,
        animationPlayState: inView && !reducedMotion ? "running" : "paused",
      }}
    />
  );
}
