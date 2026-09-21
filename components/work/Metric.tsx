interface MetricProps {
  value: string;
  label: string;
}

export function Metric({ value, label }: MetricProps) {
  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <p className="font-mono text-3xl font-semibold text-accent">{value}</p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
