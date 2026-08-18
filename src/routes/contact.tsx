import { createFileRoute } from "@tanstack/react-router";
import { Hero, Section, SectionLabel } from "@/components/vizionix/primitives";
import { Letterhead } from "@/components/vizionix/Letterhead";
import { ContactForm } from "@/components/vizionix/ContactForm";
import { Reveal } from "@/components/vizionix/Reveal";

const title = "Contact — VIZIONIX";
const description =
  "Prendre rendez-vous avec VIZIONIX : comptabilité, audit, organisation, droit et fiscalité. 7 Rue Taimour, El Menzah 1 – Tunis.";

export const Route = createFileRoute("/contact")({
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
        eyebrow="Contact"
        title="Prenons rendez-vous."
        lede="Décrivez votre besoin en quelques lignes : nous revenons vers vous avec un cadrage de mission et un calendrier."
        cta={false}
      />

      <Section label="Coordonnées et formulaire">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <SectionLabel>Écrivez-nous</SectionLabel>
            <Reveal delay={60}>
              <ContactForm />
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:pt-[3.4rem]">
            <Letterhead />
          </Reveal>
        </div>
      </Section>
    </>
  );
}