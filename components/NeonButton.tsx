"use client";

import type { ReactNode, AnchorHTMLAttributes } from "react";

interface NeonButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly children: ReactNode;
  readonly variant?: "orange" | "violet";
}

export default function NeonButton({
  children,
  variant = "orange",
  className = "",
  ...props
}: NeonButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer";

  const styles =
    variant === "orange"
      ? "bg-gradient-to-r from-neon-orange to-[#ff8c00] text-white hover:shadow-[0_0_30px_rgba(255,106,0,0.5)] shimmer-hover"
      : "border border-neon-violet text-neon-violet hover:bg-neon-violet/10 hover:shadow-[0_0_30px_rgba(139,0,255,0.3)]";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
