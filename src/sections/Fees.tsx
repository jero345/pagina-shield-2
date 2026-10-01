import { CheckCircle } from "@phosphor-icons/react";
import { Bezel } from "../components/Bezel";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { fees } from "../lib/content";

export function Fees() {
  return (
    <section id="fees" className="pb-20 md:pb-32">
      <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Bezel core="relative overflow-hidden bg-brand text-on-brand">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-[340px] rounded-full bg-[radial-gradient(closest-side,rgb(96_140_205/0.3),transparent)]" />
            <div className="relative p-7 md:p-10">
              <h3 className="text-[36px] font-semibold leading-none tracking-[-0.045em] text-white md:text-[48px]">{fees.title}</h3>
              <p className="mt-4 text-[20px] font-medium tracking-[-0.02em] text-signal md:text-[22px]">{fees.big}</p>
              <ul className="mt-8">
                {fees.items.map(([before, strong, after], i) => (
                  <li key={strong} className={`flex gap-4 py-4 text-[16px] leading-relaxed text-white/80 ${i > 0 ? "border-t border-white/10" : ""}`}>
                    <CheckCircle size={22} weight="fill" className="mt-0.5 shrink-0 text-signal" aria-hidden />
                    <span>
                      {before}
                      <strong className="font-semibold text-white">{strong}</strong>
                      {after}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Bezel>
        </Reveal>

        <Reveal delay={0.1} className="lg:pt-8">
          <h2 className="text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[48px]">{fees.noteTitle}</h2>
          <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-body">
            {fees.notes.map((n) => (
              <p key={n}>{n}</p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
