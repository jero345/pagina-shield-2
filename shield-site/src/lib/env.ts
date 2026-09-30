// `?static` renders the page fully composed with no entrance motion or timers.
// The PDF export relies on it: off-screen reveals would otherwise print as blank space.
const params = typeof window === "undefined" ? new URLSearchParams() : new URLSearchParams(window.location.search);

export const IS_STATIC = params.has("static");
export const VIEW = params.get("view");
