import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { steps } from "../lib/content";

export function Steps() {
  const last = steps.items.length - 1;
  return (
    <section id="how" className="py-20 md:py-32">
      <Container>
        <Reveal>
          <span className="inline-flex rounded-full bg-surface px-3.5 py-1.5 text-[12.5px] font-medium text-brand-text ring-1 ring-line">{steps.eyebrow}</span>
          <h2 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[52px]">{steps.title}</h2>
        </Reveal>

        <ol className="mt-12 grid md:mt-16 lg:grid-cols-5 lg:gap-6">
          {steps.items.map((step, i) => (
            <li key={step.title} className="relative">
              <Reveal delay={i * 0.09} className="grid grid-cols-[56px_1fr] gap-x-5 pb-10 lg:block lg:pb-0">
                {i < last && (
                  // Connector: vertical under the node on mobile, horizontal to the next node on desktop.
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-[27px] top-14 w-[2px] bg-brand-text/25 lg:bottom-auto lg:left-14 lg:right-[-24px] lg:top-[27px] lg:h-[2px] lg:w-auto"
                  />
                )}
                <span
                  className={`relative grid size-14 place-items-center rounded-full font-mono text-[18px] font-medium ${
                    i === last ? "border-2 border-dashed border-brand-text/60 bg-canvas text-brand-text" : "bg-brand text-on-brand shadow-[0_10px_24px_-12px_rgb(14_32_58/0.6)]"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="pt-2 lg:mt-7 lg:pt-0">
                  <h3 className="text-[20px] font-semibold leading-snug tracking-[-0.02em]">{step.title}</h3>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-muted">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
