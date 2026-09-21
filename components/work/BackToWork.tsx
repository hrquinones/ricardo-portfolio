import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackToWork() {
  return (
    <Link
      href="/work"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      Back to Work
    </Link>
  );
}
