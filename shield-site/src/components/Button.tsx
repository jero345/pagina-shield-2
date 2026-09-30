import type { ComponentType, ReactNode } from "react";
import { ArrowRight, ArrowUpRight, type IconProps } from "@phosphor-icons/react";

type Variant = "signal" | "brand" | "ghost" | "onBrand";

const shell: Record<Variant, string> = {
  signal: "bg-signal text-on-signal shadow-[0_10px_30px_-12px_rgb(242_177_58/0.8)] hover:brightness-[1.04]",
  brand: "bg-brand text-on-brand shadow-[0_10px_30px_-14px_rgb(14_32_58/0.7)] hover:bg-brand-deep",
  ghost: "bg-surface text-ink ring-1 ring-line hover:ring-brand/40",
  onBrand: "bg-white/10 text-on-brand ring-1 ring-white/20 hover:bg-white/15",
};

const bubble: Record<Variant, string> = {
  signal: "bg-on-signal/10",
  brand: "bg-white/15",
  ghost: "bg-ink/[0.06]",
  onBrand: "bg-white/15",
};

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  icon?: ComponentType<IconProps>;
};

// Pill button with the trailing icon nested in its own circle (button-in-button).
export function Button({ children, href, variant = "brand", external = false, type = "button", disabled, className = "", icon }: Props) {
  const Icon = icon ?? (external ? ArrowUpRight : ArrowRight);
  const cls = `group inline-flex items-center gap-3 whitespace-nowrap rounded-full py-2 pl-6 pr-2 text-[16px] font-medium tracking-[-0.01em] transition-[transform,background-color,box-shadow,filter] duration-300 ease-spring active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 ${shell[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span className={`grid size-9 place-items-center rounded-full transition-transform duration-500 ease-spring group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105 ${bubble[variant]}`}>
        <Icon size={17} weight="bold" aria-hidden />
      </span>
    </>
  );
  if (href) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} disabled={disabled} className={cls}>
      {inner}
    </button>
  );
}
