import { Metric } from "@/components/work/Metric";
import type { Metric as MetricData } from "@/lib/content/schema";

interface ResultMetricsProps {
  metrics: MetricData[];
}

export function ResultMetrics({ metrics }: ResultMetricsProps) {
  if (metrics.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <Metric key={metric.label} value={metric.value} label={metric.label} />
      ))}
    </div>
  );
}
