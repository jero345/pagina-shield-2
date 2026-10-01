import { IS_STATIC } from "./lib/env";
import { ClassActions } from "./sections/ClassActions";
import { Faq } from "./sections/Faq";
import { Fees } from "./sections/Fees";
import { Footer } from "./sections/Footer";
import { FreeBand } from "./sections/FreeBand";
import { Nav, TopBar } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { MobileCta } from "./sections/MobileCta";
import { Register } from "./sections/Register";
import { Status } from "./sections/Status";
import { Steps } from "./sections/Steps";
import { WhenGrid } from "./sections/WhenGrid";

export function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-brand px-4 py-2 text-on-brand focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <TopBar />
      <Nav />
      <main id="main">
        <Hero />
        <FreeBand />
        <WhenGrid />
        <Status />
        <Steps />
        <Fees />
        <ClassActions />
        <Register />
        <Faq />
      </main>
      <Footer />
      {!IS_STATIC && <MobileCta />}
    </>
  );
}
