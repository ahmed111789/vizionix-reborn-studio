export type Partner = {
  initials: string;
  name: string;
  title: string;
  credential: string;
  bio: string;
  highlights: string[];
  tags: string;
};

export const PARTNERS: Partner[] = [
  {
    initials: "JB",
    name: "Jamel Eddine Ben Aissa",
    title: "Associé fondateur",
    credential:
      "Comptable Auditeur — Membre de l'Ordre des Comptables de Tunisie depuis 1997",
    bio: "Dirige le cabinet depuis 28 ans, après des débuts comme collaborateur junior puis senior chez Africain Audit Consult (1997–2002). Son expertise couvre le commissariat aux comptes, l'audit contractuel, le conseil fiscal et le montage de dossiers de financement bancaire. Il a représenté un groupe financier japonais (JBIC / Mitsubishi UFJ) dans une étude de fonds d'investissement menée avec la Banque Centrale de Tunisie, et conduit l'évaluation d'entreprise ayant permis la prise de participation du groupe italien Albini e Pitigliani dans une société tunisienne. Consultant et formateur pendant 5 ans dans le cadre du Programme TPME II (Union européenne), il a accompagné l'accès au financement bancaire de nombreuses PME tunisiennes.",
    highlights: [
      "Certifié IAS-IFRS (2018) et Power BI — Data Analytics (2023)",
      "Ancien enseignant contractuel, Faculté des Sciences Économiques et de Gestion de Tunis",
      "Expert financier auprès de JBIC / Mitsubishi UFJ Financial Group (2006)",
    ],
    tags: "Audit · Comptabilité · Financement bancaire · IAS-IFRS",
  },
  {
    initials: "MK",
    name: "Mouhaïmen Kaffel",
    title: "Associé",
    credential:
      "Avocat — Barreau de Tunis, Tableau des Avocats près la Cour de Cassation depuis 2020",
    bio: "Conseille les entreprises en droit fiscal et droit des sociétés depuis 2007, après six ans comme Inspecteur Central des Services Financiers à la Direction Générale des Impôts (2000–2006), où il a notamment siégé comme rapporteur de la commission de suivi des dossiers de redressement fiscal majeurs. Il représente ses clients dans les vérifications fiscales, le contentieux fiscal et de recouvrement, et structure des dossiers d'investissement et de subvention auprès de l'APIA. Il a dispensé des formations en fiscalité pour Tunisie Télécom, l'ONTT et l'Office National de l'Élevage.",
    highlights: [
      "Inscrit au Tableau des Avocats près la Cour de Cassation (2020)",
      "Auteur, « Les présomptions légales et de fait en matière fiscale », Revue de l'Avocature n°4 (2014)",
      "Formation Inspecteurs Centraux des Services Financiers, École Nationale d'Administration",
    ],
    tags: "Droit fiscal · Droit des sociétés · Contentieux fiscal · Dossiers d'investissement",
  },
];
