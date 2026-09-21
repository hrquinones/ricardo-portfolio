import { MetricCard } from "@/components/home/MetricCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { impactMetrics } from "@/content/metrics";

export function MetricsSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Impact"
          title="Engineering impact, measured."
          description="Real outcomes from real systems, connected to the case studies behind them."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {impactMetrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </Container>
    </section>
  );
}
