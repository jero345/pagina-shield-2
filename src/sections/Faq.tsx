import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { faq } from "../lib/content";

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <Container>
        <Reveal>
          <h2 className="text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[52px]">{faq.title}</h2>
        </Reveal>
        <dl className="mt-12 grid gap-x-16 gap-y-12 md:mt-16 md:grid-cols-2">
          {faq.items.map((item, i) => (
            <Reveal key={item.q} delay={(i % 2) * 0.08} className="border-t border-line pt-7">
              <dt className="text-[21px] font-semibold leading-snug tracking-[-0.02em] text-ink md:text-[22px]">{item.q}</dt>
              <dd className="mt-3 max-w-[56ch] text-[16px] leading-relaxed text-muted">{item.a}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
