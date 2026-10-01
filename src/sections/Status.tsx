import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { status } from "../lib/content";
import { IS_STATIC } from "../lib/env";

// The rail fills as the reader moves through the events, ending on "Now".
function Progress({ target }: { target: React.RefObject<HTMLOListElement | null> }) {
  const { scrollYProgress } = useScroll({ target, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  return <motion.span aria-hidden style={{ scaleY }} className="absolute bottom-3 left-[11px] top-3 w-[2px] origin-top rounded-full bg-brand-text" />;
}

export function Status() {
  const list = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const animated = !IS_STATIC && !reduce;

  return (
    <section className="border-y border-line bg-surface py-20 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-32">
            <h2 className="max-w-[14ch] text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[52px]">{status.title}</h2>
            <p className="mt-6 max-w-[40ch] text-[14px] leading-relaxed text-muted">{status.updated}</p>
          </Reveal>
        </div>

        <ol ref={list} className="relative lg:col-span-7">
          <span aria-hidden className="absolute bottom-3 left-[11px] top-3 w-[2px] rounded-full bg-line" />
          {animated ? <Progress target={list} /> : <span aria-hidden className="absolute bottom-3 left-[11px] top-3 w-[2px] rounded-full bg-brand-text" />}

          {status.items.map((item, i) => {
            const now = i === status.items.length - 1;
            return (
              <li key={item.title} className="relative pb-10 pl-12 last:pb-0 md:pl-14">
                <span aria-hidden className={`absolute left-0 grid size-6 place-items-center rounded-full bg-surface ring-2 ring-brand-text ${now ? "top-6 md:top-7" : "top-1"}`}>
                  {now ? (
                    <span className="relative grid size-2.5 place-items-center">
                      {animated && <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-70" />}
                      <span className="relative size-2.5 rounded-full bg-signal" />
                    </span>
                  ) : (
                    <span className="size-2 rounded-full bg-brand-text" />
                  )}
                </span>
                <Reveal delay={0.04}>
                  <div className={now ? "rounded-[24px] bg-surface-2 p-6 md:p-7" : ""}>
                    <p className={`font-mono text-[12.5px] font-medium uppercase tracking-[0.08em] ${now ? "text-brand-text" : "text-muted"}`}>{item.when}</p>
                    <h3 className="mt-2 text-[21px] font-semibold leading-snug tracking-[-0.02em] md:text-[23px]">{item.title}</h3>
                    <p className="mt-2 max-w-[58ch] text-[16px] leading-relaxed text-muted">{item.body}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
