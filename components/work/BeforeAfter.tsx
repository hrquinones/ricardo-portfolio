import { ArrowRight } from "lucide-react";

interface BeforeAfterSide {
  label: string;
  description: string;
}

interface BeforeAfterProps {
  before: BeforeAfterSide;
  after: BeforeAfterSide;
}

export function BeforeAfter({ before, after }: BeforeAfterProps) {
  return (
    <div className="mt-4 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr]">
      <div className="rounded-lg border border-border bg-surface p-6">
        <p className="font-mono text-xs tracking-widest text-muted uppercase">
          Before
        </p>
        <p className="mt-2 font-semibold text-foreground">{before.label}</p>
        <p className="mt-1 text-sm text-muted">{before.description}</p>
      </div>

      <div
        className="flex items-center justify-center text-accent"
        aria-hidden="true"
      >
        <ArrowRight className="h-5 w-5 rotate-90 sm:rotate-0" />
      </div>

      <div className="rounded-lg border border-accent/40 bg-surface p-6">
        <p className="font-mono text-xs tracking-widest text-accent uppercase">
          After
        </p>
        <p className="mt-2 font-semibold text-foreground">{after.label}</p>
        <p className="mt-1 text-sm text-muted">{after.description}</p>
      </div>
    </div>
  );
}
