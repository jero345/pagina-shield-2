import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { IS_STATIC } from "../lib/env";

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Animate on mount instead of when scrolled into view (hero content). */
  onMount?: boolean;
};

export function Reveal({ children, className, delay = 0, y = 26, onMount = false }: Props) {
  const reduce = useReducedMotion();
  if (IS_STATIC || reduce) return <div className={className}>{children}</div>;

  const shown = { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      {...(onMount ? { animate: shown } : { whileInView: shown, viewport: { once: true, margin: "0px 0px -12% 0px" } })}
      transition={{ duration: 0.9, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
