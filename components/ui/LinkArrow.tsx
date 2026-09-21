import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface LinkArrowProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function LinkArrow({
  href,
  children,
  className = "",
  external = false,
}: LinkArrowProps) {
  const sharedClassName = `group inline-flex items-center gap-1.5 font-medium text-foreground transition-colors duration-200 hover:text-accent ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClassName}>
      {content}
    </Link>
  );
}
