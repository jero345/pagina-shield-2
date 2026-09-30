// A4 cover sheet for the approval PDF (794 x 1123 CSS px). The previews are live renders of
// the site itself in static mode, not screenshots.

const pitched = [
  "A standalone Shield site, one of two campaign streams (the other is First Guardian). It is built for the Shield cohorts: Macquarie investors whose capital was repaid, Equity Trustees investors who have not been repaid, and MWL and InterPrac clients.",
  "It leads with the fact that AFCA is free and that investors can complain themselves, with links to AFCA and the ASIC-funded Take Your Super Back tool. That matches what ASIC and AFCA tell investors, and it is what separates us from claims agents.",
  "It then sets out the eight situations where our help is most likely to change the outcome, and the 1 July 2027 date that matters for CSLR.",
  "Fees: free assessment; no win, no fee; nothing upfront; a fixed fee of $5,000 including GST, payable only from compensation received.",
  "It carries a scam warning, a factual list of the class actions already filed, and a short intake form that feeds Formstack and Actionstep.",
];

const follows = [
  { page: "2", text: "The full page as it would appear on a desktop browser." },
  { page: "3", text: "The same page on a mobile phone." },
];

const open = [
  "Form of the conditional costs agreement and costs disclosure.",
  "Domain name, hosting, privacy collection statement and terms of use.",
  "Compliance read of all copy against r 36 of the Australian Solicitors' Conduct Rules 2015 and the Australian Consumer Law before any advertising runs.",
  "Facts on the “What has happened with Shield” panel to be refreshed on launch day.",
];

const siteUrl = (extra: string) => `${window.location.pathname}?static&frame${extra}`;

function Frame({ width, height, scale, src, title }: { width: number; height: number; scale: number; src: string; title: string }) {
  return (
    <div style={{ width: width * scale, height: height * scale }} className="overflow-hidden">
      <iframe
        title={title}
        src={src}
        width={width}
        height={height}
        scrolling="no"
        style={{ transform: `scale(${scale})`, transformOrigin: "0 0" }}
        className="block border-0 bg-canvas"
      />
    </div>
  );
}

export function Cover() {
  return (
    <div className="mx-auto flex h-[1123px] w-[794px] flex-col overflow-hidden bg-canvas px-12 pb-9 pt-11 text-body">
      <header className="flex items-center justify-between">
        <span className="font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-brand-text">Keystone (4696)</span>
        <span className="rounded-full bg-signal px-3 py-1 text-[11.5px] font-semibold text-on-signal">Mock-up for approval</span>
      </header>

      <h1 className="mt-9 max-w-[15ch] text-[46px] font-semibold leading-[1.02] tracking-[-0.045em]">Shield Master Fund Complaints website</h1>
      <p className="mt-3 text-[14.5px] text-muted">A standalone claims site operated by Banton Group. Not live. Prepared 30 September 2026.</p>

      <div className="relative mt-7 h-[350px] shrink-0 overflow-hidden rounded-[28px] bg-brand-deep">
        <div aria-hidden className="absolute -right-20 -top-24 size-[360px] rounded-full bg-[radial-gradient(closest-side,rgb(242_177_58/0.25),transparent)]" />
        <div className="absolute left-8 top-8 overflow-hidden rounded-t-[14px] bg-surface shadow-[0_30px_60px_-20px_rgb(0_0_0/0.5)] ring-1 ring-white/10">
          <div className="h-[18px] bg-surface-2" />
          <Frame title="Desktop preview" src={siteUrl("")} width={1280} height={820} scale={0.43} />
        </div>
        <div className="absolute right-8 top-10 rounded-[26px] bg-[#0b1526] p-[5px] shadow-[0_30px_60px_-16px_rgb(0_0_0/0.6)] ring-1 ring-white/15">
          <div className="overflow-hidden rounded-[21px]">
            <Frame title="Mobile preview" src={siteUrl("=mobile")} width={390} height={844} scale={0.37} />
          </div>
        </div>
      </div>

      <div className="mt-8 grid flex-1 grid-cols-[1.4fr_1fr] gap-9">
        <section>
          <h2 className="text-[15px] font-semibold tracking-[-0.01em]">How the site is pitched</h2>
          <div className="mt-2.5 space-y-2 text-[11.75px] leading-[1.55]">
            {pitched.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
        <div>
          <section>
            <h2 className="text-[15px] font-semibold tracking-[-0.01em]">What follows</h2>
            <ul className="mt-2.5 grid gap-2">
              {follows.map((f) => (
                <li key={f.page} className="flex items-start gap-3 text-[11.75px] leading-[1.5]">
                  <span className="inline-flex h-5 shrink-0 items-center whitespace-nowrap rounded-full bg-brand px-2.5 font-mono text-[10px] font-medium text-on-brand">Page {f.page}</span>
                  <span className="pt-px">{f.text}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="mt-6">
            <h2 className="text-[15px] font-semibold tracking-[-0.01em]">Open before launch</h2>
            <ul className="mt-2.5 grid gap-2">
              {open.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-[11.75px] leading-[1.5]">
                  <span aria-hidden className="mt-[3px] size-3 shrink-0 rounded-[3px] ring-[1.5px] ring-brand-text/50" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <footer className="mt-6 flex justify-between border-t border-line pt-4 text-[10.5px] text-muted">
        <span className="font-medium text-ink">Banton Group</span>
        <span>Level 12, 60 Martin Place, Sydney NSW 2000</span>
        <span>Privileged and confidential</span>
      </footer>
    </div>
  );
}
