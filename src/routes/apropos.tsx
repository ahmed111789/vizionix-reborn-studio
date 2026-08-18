import { createFileRoute } from "@tanstack/react-router";
import { Hero, Section, SectionLabel, Lede, CtaBand } from "@/components/vizionix/primitives";
import { TeamCard } from "@/components/vizionix/TeamCard";
import { Reveal } from "@/components/vizionix/Reveal";
import { PARTNERS } from "@/content/team";

const title = "À propos — VIZIONIX";
const description =
  "VIZIONIX réunit comptabilité, audit, organisation, droit et fiscalité au sein d'un même cabinet, à Tunis.";

export const Route = createFileRoute("/apropos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Hero
        eyebrow="Le cabinet"
        title="Un cabinet, une équipe, un seul dossier."
        lede="VIZIONIX est né du constat qu'un dossier d'entreprise circule trop souvent entre un comptable, un auditeur et un avocat qui ne se parlent pas. Nous avons réuni ces métiers sous un même toit pour que les comptes, le contrôle interne et le droit avancent ensemble."
      />

      <Section label="Notre approche">
        <SectionLabel>Notre approche</SectionLabel>
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <Lede className="mt-0">
              Chaque mission est portée par un chargé de dossier unique, qui coordonne les
              spécialistes du cabinet. Vous n'avez qu'un interlocuteur, et il connaît l'ensemble de
              votre dossier.
            </Lede>
          </Reveal>
          <Reveal delay={80}>
            <Lede className="mt-0">
              Nos recommandations sont formalisées par écrit et documentées : elles doivent résister
              à l'examen d'un régulateur, d'une banque ou d'un repreneur, pas seulement rassurer sur
              le moment.
            </Lede>
          </Reveal>
        </div>
      </Section>

      <Section label="Les associés">
        <SectionLabel>Les associés</SectionLabel>
        <div className="grid gap-12 md:grid-cols-2 md:gap-10">
          {PARTNERS.map((p, i) => (
            <TeamCard key={p.name} partner={p} delay={i * 90} />
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Premier échange"
        title="Discutons de votre situation"
        text="Un premier rendez-vous permet de cadrer votre besoin et le calendrier de la mission, sans engagement."
      />
    </>
  );
}