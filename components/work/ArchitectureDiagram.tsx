import { ArrowRight } from "lucide-react";

interface ArchitectureDiagramProps {
  layers: string[];
}

export function ArchitectureDiagram({ layers }: ArchitectureDiagramProps) {
  return (
    <div className="mt-4 flex flex-col items-stretch gap-3 rounded-lg border border-border bg-surface p-6 sm:flex-row sm:items-center">
      {layers.map((layer, index) => (
        <div key={layer} className="flex items-center gap-3 sm:flex-1">
          <div className="flex-1 rounded-md border border-border bg-background px-4 py-3 text-center text-sm font-medium text-foreground">
            {layer}
          </div>
          {index < layers.length - 1 ? (
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 shrink-0 rotate-90 text-muted sm:rotate-0"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
