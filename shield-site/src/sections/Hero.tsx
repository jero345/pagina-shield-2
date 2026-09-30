import { HandCoins, Scales, SealCheck } from "@phosphor-icons/react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { hero } from "../lib/content";
import { DeadlineCard } from "./DeadlineCard";

const tickIcons = [SealCheck, HandCoins, Scales];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-[30%] h-[520px] w-[760px] rounded-full bg-[radial-gradient(closest-side,rgb(242_177_58/0.12),transparent)]" />
      </div>

      <Container className="pb-16 pt-12 md:pb-24 md:pt-20">
        <Reveal onMount>
          <span className="inline-flex rounded-full bg-surface px-3.5 py-1.5 text-[12.5px] font-medium text-brand-text ring-1 ring-line">{hero.eyebrow}</span>
        </Reveal>

        <Reveal onMount delay={0.08}>
          <h1 className="mt-6 max-w-[21ch] pb-1 text-[42px] font-semibold leading-[1.04] tracking-[-0.045em] md:text-[68px] lg:text-[80px]">
            {hero.title.lead}
            <span className="marker">{hero.title.mark}</span>
          </h1>
        </Reveal>

        <div className="mt-10 grid items-start gap-10 md:mt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 lg:pt-3">
            <Reveal onMount delay={0.16}>
              <p className="max-w-[46ch] text-[18px] leading-relaxed text-muted md:text-[19px]">{hero.sub}</p>
            </Reveal>
            <Reveal onMount delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#register" variant="signal">
                  {hero.primary}
                </Button>
                <Button href="#free" variant="ghost">
                  {hero.secondary}
                </Button>
              </div>
            </Reveal>
            <Reveal onMount delay={0.32}>
              <ul className="mt-10 max-w-[420px] divide-y divide-line border-y border-line">
                {hero.ticks.map((tick, i) => {
                  const Icon = tickIcons[i];
                  return (
                    <li key={tick} className="flex items-center gap-4 py-3.5">
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/[0.07] text-brand-text">
                        <Icon size={20} weight="duotone" aria-hidden />
                      </span>
                      <span className="text-[16.5px] font-medium tracking-[-0.01em] text-ink">{tick}</span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
          <Reveal onMount delay={0.36} y={40} className="lg:col-span-7">
            <DeadlineCard />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
