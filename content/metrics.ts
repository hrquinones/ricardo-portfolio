export interface ImpactMetric {
  id: string;
  value: string;
  label: string;
  description: string;
  relatedCaseStudySlug?: string;
}

export const impactMetrics: ImpactMetric[] = [
  {
    id: "years-experience",
    value: "19+",
    label: "Years of experience",
    description:
      "Building web systems, microservices, and scalable architectures.",
  },
  {
    id: "card-onboarding-error-rate",
    value: "<1%",
    label: "Card-onboarding error rate",
    description:
      "Reduced from 15% by redesigning the card-issuance process at Personal Pay.",
    relatedCaseStudySlug: "card-onboarding",
  },
  {
    id: "provider-api-requests",
    value: "-90%",
    label: "Provider API requests",
    description:
      "Fewer calls to the card provider's API, cutting the provider's share of total cost from 42.1% to 1.3%.",
    relatedCaseStudySlug: "card-onboarding",
  },
  {
    id: "judicial-response-time",
    value: "-50%",
    label: "Response-time improvement",
    description:
      "Faster per-request response times after optimizing SQL Server transactions for the judicial virtual desk.",
    relatedCaseStudySlug: "judicial-platform",
  },
];
