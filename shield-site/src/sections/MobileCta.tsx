import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Phone } from "@phosphor-icons/react";
import { PHONE_HREF } from "../lib/content";

// Thumb-reach CTA on phones, shown once the hero has scrolled away.
export function MobileCta() {
  const { scrollY } = useScroll();
  const [shown, setShown] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 640;
    if (next !== shown) setShown(next);
  });

  return (
    <AnimatePresence>
      {shown && (
        <motion.div
          initial={{ y: 96, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 96, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="fixed inset-x-3 bottom-3 z-40 md:hidden"
        >
          <div className="glass flex items-center gap-2 rounded-full p-1.5 shadow-[0_18px_40px_-16px_rgb(14_32_58/0.5)] ring-1 ring-line">
            <a href="#register" className="flex h-12 flex-1 items-center justify-center rounded-full bg-signal text-[15.5px] font-medium text-on-signal active:scale-[0.98]">
              Get a free assessment
            </a>
            <a href={PHONE_HREF} aria-label="Call Banton Group" className="grid size-12 place-items-center rounded-full bg-brand text-on-brand active:scale-[0.96]">
              <Phone size={20} weight="fill" aria-hidden />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
