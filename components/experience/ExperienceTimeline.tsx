import { ExperienceCard } from "@/components/experience/ExperienceCard";
import type { ExperienceEntry } from "@/content/experience";

interface ExperienceTimelineProps {
  entries: ExperienceEntry[];
}

export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {entries.map((entry) => (
        <ExperienceCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
