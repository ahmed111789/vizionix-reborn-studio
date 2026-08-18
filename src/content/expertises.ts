export type Expertise = {
  code: string;
  slug: string;
  name: string;
  /** Short description used in the home page ledger. */
  desc: string;
  lede: string;
  services: string[];
  audience: string;
  ctaTitle: string;
  ctaText: string;
};

export const EXPERTISES: Expertise[] = [
  {
    code: "CA",
    slug: "/comptabilite",
    name: "Comptabilité",
    desc: "Tenue de comptabilité, états financiers, paie et clôtures annuelles, réalisées avec rigueur et dans les délais.",
    lede: "Une comptabilité tenue avec rigueur est le socle de toute décision de gestion, de tout financement bancaire et de toute relation avec l'administration fiscale. VIZIONIX prend en charge l'ensemble du cycle comptable de votre structure, de la saisie quotidienne à la certification des comptes annuels.",
    services: [
      "Tenue de comptabilité générale et analytique",
      "Établissement des états financiers et de la liasse fiscale",
      "Paie et déclarations sociales (CNSS)",
      "Clôtures mensuelles, semestrielles et annuelles",
      "Mise en place de tableaux de bord de pilotage (Power BI)",
      "Accompagnement à la migration ERP (Sage, Ciel, SAP)",
    ],
    audience:
      "PME, sociétés commerciales et agricoles, groupes multi-entités et associations qui veulent des comptes fiables, à jour, et prêts à être présentés à une banque ou à un investisseur.",
    ctaTitle: "Parlons de votre comptabilité",
    ctaText:
      "Un premier échange permet d'évaluer l'état de vos comptes et ce qu'il faut mettre en place pour les fiabiliser.",
  },
  {
    code: "AU",
    slug: "/audit",
    name: "Audit",
    desc: "Commissariat aux comptes, audit interne, due diligence et missions d'assurance qui résistent à l'examen.",
    lede: "Qu'il s'agisse d'une obligation légale ou d'une démarche volontaire, un audit mené avec indépendance protège la crédibilité de vos comptes auprès des actionnaires, des banques et des autorités de contrôle.",
    services: [
      "Commissariat aux comptes (audit légal)",
      "Audit contractuel et audit interne",
      "Due diligence pour opérations de cession, fusion ou prise de participation",
      "Évaluation d'entreprise",
      "Diagnostic des systèmes d'information financiers",
      "Missions d'assurance selon les normes IAS-IFRS",
    ],
    audience:
      "Sociétés soumises au commissariat aux comptes, groupes en levée de fonds, acquéreurs et cédants dans une opération de cession ou de prise de participation.",
    ctaTitle: "Parlons de votre audit",
    ctaText:
      "Un audit bien mené commence par un cadrage clair de la mission et de son calendrier.",
  },
  {
    code: "OR",
    slug: "/organisation",
    name: "Organisation",
    desc: "Conception de processus, restructuration et gouvernance adaptées à la croissance de votre structure.",
    lede: "La croissance expose souvent des process qui n'ont pas suivi le rythme de l'activité. Nous concevons des structures de gouvernance et des procédures qui tiennent la route à l'échelle.",
    services: [
      "Élaboration de manuels de procédures administratives et financières",
      "Restructuration organisationnelle et gouvernance",
      "Diagnostic et optimisation des systèmes d'information de gestion",
      "Mise en place du contrôle de gestion et de tableaux de bord",
      "Accompagnement au changement (ERP, digitalisation)",
      "Formation des équipes de direction",
    ],
    audience:
      "PME en croissance, entreprises industrielles et structures familiales en transition de gouvernance qui doivent formaliser leurs processus sans perdre en agilité.",
    ctaTitle: "Parlons de votre organisation",
    ctaText:
      "Un diagnostic initial suffit pour identifier les points de friction dans vos processus actuels.",
  },
  {
    code: "DR",
    slug: "/droit",
    name: "Droit",
    desc: "Droit des sociétés, contrats et conformité, intégrés à vos décisions du quotidien.",
    lede: "Chaque décision de gestion a une implication juridique. Notre conseil en droit des affaires est pensé pour anticiper le risque plutôt que le gérer après coup.",
    services: [
      "Création et structuration de sociétés (SARL, SA, sociétés agricoles)",
      "Rédaction de statuts, pactes d'associés et conventions",
      "Droit des contrats et conformité réglementaire",
      "Représentation en contentieux commercial et arbitrage",
      "Montage de dossiers d'investissement et de subvention (APIA)",
      "Veille réglementaire sectorielle",
    ],
    audience:
      "Créateurs d'entreprise, sociétés en levée de fonds et structures engagées dans un investissement sectoriel nécessitant un accompagnement juridique et réglementaire.",
    ctaTitle: "Parlons de votre dossier juridique",
    ctaText:
      "Un conseil juridique en amont coûte toujours moins cher qu'un contentieux en aval.",
  },
  {
    code: "FI",
    slug: "/fiscalite",
    name: "Fiscalité",
    desc: "Planification fiscale, conformité et représentation devant l'administration quand cela compte le plus.",
    lede: "La fiscalité tunisienne évolue vite, avec des régimes sectoriels qui changent la donne pour qui sait les mobiliser. Nous transformons la conformité fiscale en avantage plutôt qu'en contrainte.",
    services: [
      "Planification et optimisation fiscale",
      "Déclarations fiscales et retenues à la source",
      "Représentation lors des vérifications et du contentieux fiscal",
      "Avantages fiscaux sectoriels (agriculture, export, tourisme)",
      "Exonérations et régimes dérogatoires",
      "Veille sur la loi de finances",
    ],
    audience:
      "Entreprises de tous secteurs, exploitations agricoles et investisseurs étrangers souhaitant sécuriser leur conformité fiscale et mobiliser les régimes qui leur sont applicables.",
    ctaTitle: "Parlons de votre fiscalité",
    ctaText:
      "Un premier échange permet d'identifier les régimes et avantages auxquels votre activité peut prétendre.",
  },
];

/** Lookup by route slug. Throws at module load if a slug is mistyped. */
export function getExpertise(slug: string): Expertise {
  const found = EXPERTISES.find((e) => e.slug === slug);
  if (!found) throw new Error(`Unknown expertise slug: ${slug}`);
  return found;
}
