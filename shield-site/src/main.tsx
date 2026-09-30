import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "motion/react";
import "./index.css";
import { App } from "./App";
import { Cover } from "./Cover";
import { IS_STATIC, VIEW } from "./lib/env";

const root = document.documentElement;
if (IS_STATIC) root.setAttribute("data-static", "");
// Embedded previews on the PDF cover: no scrollbars inside the frames.
if (new URLSearchParams(window.location.search).has("frame")) {
  root.style.overflow = "hidden";
  root.style.scrollbarWidth = "none";
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">{VIEW === "cover" ? <Cover /> : <App />}</MotionConfig>
  </StrictMode>,
);
