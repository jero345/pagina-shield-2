import type { ReactNode } from "react";

// Double-bezel enclosure: a tinted outer tray holding the real container, with concentric radii.
export function Bezel({ children, className = "", core = "" }: { children: ReactNode; className?: string; core?: string }) {
  return (
    <div className={`rounded-[32px] bg-brand/[0.06] p-2 ring-1 ring-brand/10 ${className}`}>
      <div className={`rounded-[24px] shadow-[inset_0_1px_0_rgb(255_255_255/0.12)] ${core}`}>{children}</div>
    </div>
  );
}
