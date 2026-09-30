import type { PointerEvent } from "react";
import { Bank, Buildings, Gavel, HandCoins, PauseCircle, Umbrella, UsersThree, Vault, type Icon } from "@phosphor-icons/react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { when } from "../lib/content";

type Tone = "brand" | "signal" | "mist" | "plain";

// Layout per tile: lg spans build a 4-column bento (2+1+1 / 1+2+1 / 2+2); md is a 2-column fallback.
const tiles: { icon: Icon; tone: Tone; span: string }[] = [
  { icon: HandCoins, tone: "brand", span: "md:col-span-2 lg:col-span-2" },
  { icon: Bank, tone: "plain", span: "" },
  { icon: Buildings, tone: "plain", span: "" },
  { icon: PauseCircle, tone: "plain", span: "" },
  { icon: UsersThree, tone: "mist", span: "lg:col-span-2" },
  { icon: Vault, tone: "plain", span: "" },
  { icon: Umbrella, tone: "signal", span: "lg:col-span-2" },
  { icon: Gavel, tone: "plain", span: "md:col-span-2 lg:col-span-2" },
];

const toneCls: Record<Tone, { box: string; num: string; icon: string; body: string; h: string; spot: string }> = {
  brand: { box: "bg-brand text-on-brand", num: "text-white/55", icon: "bg-white/10 text-signal", body: "text-white/75", h: "text-white", spot: "rgb(242 177 58 / 0.16)" },
  signal: { box: "bg-signal text-on-signal", num: "text-on-signal/60", icon: "bg-on-signal/10 text-on-signal", body: "text-on-signal/80", h: "text-on-signal", spot: "rgb(255 255 255 / 0.35)" },
  mist: { box: "bg-surface-2", num: "text-muted", icon: "bg-surface text-brand-text", body: "text-muted", h: "text-ink", spot: "rgb(28 58 100 / 0.09)" },
  plain: { box: "bg-surface ring-1 ring-line", num: "text-muted", icon: "bg-brand/[0.07] text-brand-text", body: "text-muted", h: "text-ink", spot: "rgb(28 58 100 / 0.08)" },
};

function track(e: PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--x", `${e.clientX - r.left}px`);
  el.style.setProperty("--y", `${e.clientY - r.top}px`);
}

export function WhenGrid() {
  return (
    <section id="when" className="py-20 md:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-[18ch] text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[52px]">{when.title}</h2>
          <p className="mt-5 max-w-[60ch] text-[18px] leading-relaxed text-muted">{when.lead}</p>
        </Reveal>

        <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {when.items.map((item, i) => {
            const t = tiles[i];
            const c = toneCls[t.tone];
            const wide = t.span.includes("lg:col-span-2");
            const Icon = t.icon;
            return (
              <li key={item.title} className={t.span}>
                <Reveal delay={(i % 4) * 0.06} className="h-full">
                  <article
                    onPointerMove={track}
                    style={{ ["--spot" as string]: c.spot }}
                    className={`spotlight flex h-full min-h-[236px] flex-col justify-between gap-10 rounded-[24px] p-6 transition-transform duration-500 ease-spring hover:-translate-y-1 md:p-7 ${c.box}`}
                  >
                    <div className="flex items-start justify-between">
                      <span className={`font-mono text-[13px] font-medium ${c.num}`}>{String(i + 1).padStart(2, "0")}</span>
                      <span className={`grid size-12 place-items-center rounded-2xl ${c.icon}`}>
                        <Icon size={24} weight="duotone" aria-hidden />
                      </span>
                    </div>
                    <div>
                      <h3 className={`font-semibold leading-[1.15] tracking-[-0.025em] ${wide ? "max-w-[24ch] text-[24px] md:text-[28px]" : "text-[20px]"} ${c.h}`}>{item.title}</h3>
                      <p className={`mt-3 text-[15px] leading-relaxed ${wide ? "max-w-[52ch]" : ""} ${c.body}`}>{item.body}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
