import { Gavel, WarningOctagon } from "@phosphor-icons/react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { PHONE, PHONE_HREF, classActions, scam } from "../lib/content";

export function ClassActions() {
  return (
    <section className="pb-20 md:pb-28">
      <Container>
        <Reveal>
          <h2 className="text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[52px]">{classActions.title}</h2>
          <p className="mt-5 max-w-[68ch] text-[18px] leading-relaxed text-muted">{classActions.lead}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {classActions.cases.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08} className="h-full">
              <article className={`flex h-full flex-col rounded-[24px] p-6 ring-1 md:p-8 ${c.active ? "bg-surface ring-line" : "bg-canvas ring-line"}`}>
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-brand/[0.07] text-brand-text">
                    <Gavel size={20} weight="duotone" aria-hidden />
                  </span>
                  <span className="font-mono text-[13px] text-muted">{c.number}</span>
                </div>
                <h3 className="mt-6 text-[24px] font-medium italic leading-[1.2] tracking-[-0.02em] md:text-[27px]">{c.name}</h3>
                <dl className="mt-6 grid gap-4 border-t border-line pt-6 text-[15px] sm:grid-cols-[120px_1fr]">
                  <dt className="text-muted">Court</dt>
                  <dd className="-mt-3 text-ink sm:mt-0">{c.court}</dd>
                  <dt className="text-muted">Law firm</dt>
                  <dd className="-mt-3 text-ink sm:mt-0">{c.firm}</dd>
                  <dt className="text-muted">Who it covers</dt>
                  <dd className={`-mt-3 leading-relaxed sm:mt-0 ${c.active ? "text-ink" : "text-muted"}`}>{c.covers}</dd>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-[14px] text-muted">{classActions.fine}</p>

        <Reveal className="mt-16 md:mt-20">
          <aside
            aria-labelledby="scam-title"
            className="grid gap-5 rounded-[24px] bg-danger-soft p-6 ring-1 ring-danger-line md:grid-cols-[auto_1fr] md:gap-7 md:p-9"
          >
            <span className="grid size-14 place-items-center rounded-2xl bg-danger text-canvas">
              <WarningOctagon size={30} weight="fill" aria-hidden />
            </span>
            <div>
              <h2 id="scam-title" className="text-[24px] font-semibold tracking-[-0.025em] text-danger md:text-[28px]">
                {scam.title}
              </h2>
              <p className="mt-3 max-w-[92ch] text-[16px] leading-relaxed text-body">
                {scam.body.replace(`${PHONE}.`, "")}
                <a href={PHONE_HREF} className="font-semibold text-ink underline decoration-danger/40 underline-offset-4 hover:decoration-danger">
                  {PHONE}
                </a>
                .
              </p>
            </div>
          </aside>
        </Reveal>
      </Container>
    </section>
  );
}
