import { ArrowUpRight } from "@phosphor-icons/react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { free } from "../lib/content";

export function FreeBand() {
  return (
    <section id="free" className="px-2 md:px-4">
      <div className="relative isolate overflow-hidden rounded-[32px] bg-surface-2 py-16 md:rounded-[40px] md:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
          <Reveal>
            <p aria-hidden className="select-none text-[150px] font-semibold leading-[0.8] tracking-[-0.07em] text-brand-text md:text-[220px]">
              $0
            </p>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="max-w-[22ch] text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] md:text-[40px]">{free.title}</h2>
              <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-body">{free.body}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {free.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-[20px] bg-surface px-5 py-4 ring-1 ring-line transition-[transform,box-shadow] duration-500 ease-spring hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgb(14_32_58/0.45)] active:scale-[0.99]"
                    >
                      <span className="min-w-0">
                        <span className="block font-mono text-[15px] font-medium text-ink">{link.label}</span>
                        <span className="mt-0.5 block text-[13.5px] text-muted">{link.note}</span>
                      </span>
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-on-brand transition-transform duration-500 ease-spring group-hover:-translate-y-px group-hover:translate-x-0.5">
                        <ArrowUpRight size={17} weight="bold" aria-hidden />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  );
}
