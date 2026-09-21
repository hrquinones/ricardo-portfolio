import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted ${className}`}
    >
      {children}
    </span>
  );
}
