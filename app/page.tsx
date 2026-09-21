import { ContactCTA } from "@/components/home/ContactCTA";
import { EngineeringPhilosophy } from "@/components/home/EngineeringPhilosophy";
import { ExperienceSnapshot } from "@/components/home/ExperienceSnapshot";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { Hero } from "@/components/home/Hero";
import { MetricsSection } from "@/components/home/MetricsSection";
import { SelectedWork } from "@/components/home/SelectedWork";

export default function Home() {
  return (
    <>
      <Hero />
      <MetricsSection />
      <SelectedWork />
      <EngineeringPhilosophy />
      <ExperienceSnapshot />
      <ExpertiseSection />
      <ContactCTA />
    </>
  );
}
