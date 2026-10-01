import { ArrowUpRight } from "@phosphor-icons/react";
import { Container } from "../components/Container";
import { PHONE, PHONE_HREF, footer } from "../lib/content";

export function Footer() {
  return (
    <footer className="bg-brand-deep pb-28 pt-16 text-[14px] text-white/70 md:pb-12 md:pt-24">
      <Container>
        <p className="max-w-[16ch] text-[40px] font-semibold leading-[1] tracking-[-0.05em] text-white md:text-[76px]">Shield Master Fund Complaints</p>
        <p className="mt-4 text-[16px] text-white/60">Help with AFCA and CSLR claims, from Banton Group</p>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <h2 className="text-[16px] font-semibold text-white">Banton Group</h2>
            <p className="mt-3 leading-relaxed">
              {footer.address[0]}
              <br />
              {footer.address[1]}
            </p>
            <a href={PHONE_HREF} className="mt-3 inline-block text-white transition-colors hover:text-signal">
              {PHONE}
            </a>
          </div>
          <div>
            <h2 className="text-[16px] font-semibold text-white">Free help</h2>
            <ul className="mt-3 grid gap-3">
              {footer.help.map((h) => (
                <li key={h.href}>
                  <a href={h.href} target="_blank" rel="noreferrer" className="group inline-flex flex-col transition-colors hover:text-white">
                    <span>{h.label}</span>
                    <span className="inline-flex items-center gap-1 font-mono text-[13px] text-white/50 group-hover:text-signal">
                      {h.site}
                      <ArrowUpRight size={12} weight="bold" aria-hidden />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[16px] font-semibold text-white">This site</h2>
            <ul className="mt-3 grid gap-2">
              {footer.site.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-[12.5px] leading-relaxed text-white/50">{footer.legal}</p>
      </Container>
    </footer>
  );
}
