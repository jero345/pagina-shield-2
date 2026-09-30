import { Phone } from "@phosphor-icons/react";
import { Container } from "../components/Container";
import { nav, PHONE, PHONE_HREF } from "../lib/content";

export function TopBar() {
  return (
    <div className="bg-brand-deep text-[13px] text-white/75">
      <Container className="flex flex-col gap-0.5 py-2 md:h-10 md:flex-row md:items-center md:justify-between md:gap-4 md:py-0">
        <p>
          A service of <strong className="font-semibold text-white">Banton Group</strong>, class action and litigation lawyers, Sydney
        </p>
        <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-white/75 transition-colors hover:text-white">
          <Phone size={14} weight="bold" aria-hidden />
          Call <strong className="font-semibold text-white">{PHONE}</strong>
        </a>
      </Container>
    </div>
  );
}

export function Nav() {
  return (
    <header className="sticky top-3 z-40 mt-3">
      <Container>
        <nav
          aria-label="Main"
          className="glass flex h-16 items-center justify-between gap-4 rounded-full py-2 pl-5 pr-2 shadow-[0_12px_40px_-18px_rgb(14_32_58/0.35)] ring-1 ring-line md:h-[68px] md:pl-7"
        >
          <a href="#top" className="flex min-w-0 flex-1 flex-col leading-tight">
            <span className="text-[15px] font-semibold tracking-[-0.02em] text-ink md:text-[18px]">Shield Master Fund Complaints</span>
            <span className="hidden truncate text-[12.5px] text-muted sm:block">Help with AFCA and CSLR claims, from Banton Group</span>
          </a>
          <div className="flex shrink-0 items-center gap-1">
            <ul className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-full px-3.5 py-2 text-[15px] text-body transition-colors duration-300 hover:bg-surface-2 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#register"
              className="ml-2 inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-brand px-4 py-2.5 text-[14px] font-medium text-on-brand transition-[transform,background-color] duration-300 ease-spring hover:bg-brand-deep active:scale-[0.98] md:px-5 md:text-[15px]"
            >
              Free assessment
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
