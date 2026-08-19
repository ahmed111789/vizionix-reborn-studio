import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, Hero, Lede, Section, SectionLabel } from "@/components/vizionix/primitives";
import { Reveal } from "@/components/vizionix/Reveal";
import { TeamCard } from "@/components/vizionix/TeamCard";
import { EXPERTISES } from "@/content/expertises";
import { PARTNERS } from "@/content/team";
import { STATS, STATS_NOTE } from "@/content/site";

const title = "VIZIONIX — Comptabilité, audit, organisation, droit et fiscalité à Tunis";
const description =
  "Cabinet pluridisciplinaire à Tunis : comptabilité, audit, organisation, droit des affaires et fiscalité réunis dans une même équipe intégrée.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PRINCIPLES = [
  {
    n: "01",
    t: "Un seul interlocuteur",
    d: "Un chargé de dossier unique coordonne comptables, auditeurs et juristes. Vous n'expliquez votre situation qu'une fois.",
  },
  {
    n: "02",
    t: "Des travaux documentés",
    d: "Chaque recommandation est écrite et justifiée, pour tenir devant une banque, un régulateur ou un repreneur.",
  },
  {
    n: "03",
    t: "Aucune sous-traitance",
    d: "Les missions sont réalisées en interne par l'équipe du cabinet, du premier échange à la remise des conclusions.",
  },
];

function HomeNav() {
  const links = [
    { to: "#expertises", label: "Expertises" },
    { to: "#chiffres", label: "Chiffres" },
    { to: "#approche", label: "Approche" },
    { to: "#associes", label: "Les associés" },
    { to: "/apropos", label: "Le cabinet" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav aria-label="Accès rapide" className="border-b border-line px-6 py-5 sm:px-10 lg:px-20">
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.9rem]">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="relative w-fit pb-[2px] text-muted-foreground no-underline transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-[width] after:duration-200 hover:text-foreground hover:after:w-full focus-visible:text-foreground focus-visible:after:w-full"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Ledger() {
  return (
    <ul className="flex list-none flex-col p-0">
      {EXPERTISES.map((e, i) => (
        <Reveal as="li" key={e.slug} delay={i * 60} className="border-t border-line last:border-b">
          <Link
            to={e.slug}
            className="group grid grid-cols-[3.2rem_1fr_1.5rem] items-start gap-x-4 gap-y-2 py-6 no-underline sm:grid-cols-[4rem_1fr_2rem] sm:py-7"
          >
            <span className="mt-[0.35rem] font-mono text-[0.78rem] tracking-[0.06em] text-accent">
              {e.code}
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[1.3rem] font-bold text-foreground transition-colors group-hover:text-accent-strong md:text-[1.5rem]">
                {e.name}
              </span>
              <span className="mt-2 block max-w-[62ch] text-[0.95rem] text-muted-foreground">
                {e.desc}
              </span>
            </span>
            <span
              aria-hidden
              className="mt-[0.35rem] justify-self-end text-accent transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}

function Index() {
  return (
    <>
      <Hero
        eyebrow="Cabinet pluridisciplinaire — Tunis"
        title="Comptabilité, audit et droit dans une même équipe."
        lede="VIZIONIX accompagne les entreprises tunisiennes sur l'ensemble de leur cycle administratif, financier et juridique : des comptes tenus au jour le jour jusqu'à la représentation devant l'administration fiscale."
      />

      <HomeNav />

      <Section label="Expertises" id="expertises">
        <SectionLabel>Nos expertises</SectionLabel>
        <Ledger />
      </Section>

      <Section label="Chiffres" id="chiffres">
        <SectionLabel>Le cabinet en chiffres</SectionLabel>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="border-t border-line pt-5">
              <p className="font-mono text-[2rem] font-bold leading-none text-accent-strong">
                {s.figure}
              </p>
              <p className="mt-3 max-w-[22ch] text-[0.88rem] text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 font-mono text-[0.72rem] uppercase tracking-[0.06em] text-muted-foreground">
          {STATS_NOTE}
        </p>
      </Section>

      <Section label="Approche" id="approche">
        <SectionLabel>Notre approche</SectionLabel>
        <div className="grid gap-10 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <p className="font-mono text-[0.76rem] tracking-[0.08em] text-accent">{p.n}</p>
              <h3 className="mt-3 font-display text-[1.15rem] font-bold">{p.t}</h3>
              <p className="mt-3 max-w-[38ch] text-[0.94rem] text-muted-foreground">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section label="Les associés" id="associes">
        <SectionLabel>Les associés</SectionLabel>
        <div className="grid gap-12 md:grid-cols-2 md:gap-10">
          {PARTNERS.map((p, i) => (
            <TeamCard key={p.name} partner={p} delay={i * 90} />
          ))}
        </div>
        <Lede>
          Deux associés, deux métiers complémentaires : l'audit et la comptabilité d'un côté, le
          droit fiscal et le droit des sociétés de l'autre.
        </Lede>
      </Section>

      <CtaBand
        eyebrow="Premier échange"
        title="Discutons de votre situation"
        text="Un premier rendez-vous permet de cadrer votre besoin, le périmètre et le calendrier de la mission, sans engagement."
      />
    </>
  );
}
