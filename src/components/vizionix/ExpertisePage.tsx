import type { Expertise } from "@/content/expertises";
import { CheckList, CtaBand, Hero, Lede, Section, SectionLabel } from "./primitives";

export function ExpertisePage({ expertise }: { expertise: Expertise }) {
  return (
    <>
      <Hero
        eyebrow={`${expertise.code} — Expertise`}
        title={expertise.name}
        lede={expertise.lede}
      />
      <Section>
        <SectionLabel>Ce que nous faisons</SectionLabel>
        <CheckList items={expertise.services} />
      </Section>
      <Section>
        <SectionLabel>Pour qui</SectionLabel>
        <Lede className="mt-0">{expertise.audience}</Lede>
      </Section>
      <CtaBand title={expertise.ctaTitle} text={expertise.ctaText} />
    </>
  );
}
