# VIZIONIX — refonte React + TypeScript + Tailwind

Reconstruction fidèle du site existant, avec une implémentation plus propre et une UX plus soignée. Aucun contenu, aucune formulation française, aucune couleur ni structure de navigation ne change.

## Ce qui est conservé à l'identique

- Palette exacte (bleu #1591D3 / #0F6FA6, fond #F7F9FB, texte #10233A, ainsi que le thème sombre existant)
- Typographie : Century Gothic pour les titres, Segoe UI pour le texte, monospace pour les codes et chiffres
- Rail latéral fixe de 300px : logo, tagline, navigation avec sous-liste des expertises, coordonnées en bas
- Toutes les pages : Accueil (hero, ledger des 5 expertises, chiffres, approche, associés, bande CTA), À propos, Comptabilité, Audit, Organisation, Droit, Fiscalité, Contact
- Textes intégraux des associés, chiffres et note « chiffres illustratifs », coordonnées (7 Rue Taimour, +216 71 234 510, fax, identifiants, lien Maps), pied de page
- Esthétique éditoriale : pas de cartes arrondies, pas de dégradés, séparateurs fins, puces en losange bleu

## Améliorations

- URLs réelles : `/`, `/apropos`, `/comptabilite`, `/audit`, `/organisation`, `/droit`, `/fiscalite`, `/contact` (au lieu des ancres `#/`), avec titre et métadonnées propres à chaque page
- Navigation mobile : le rail devient une barre supérieure avec un menu déroulant accessible, au lieu de disparaître complètement comme aujourd'hui ; état actif visible, fermeture au clavier
- Responsive retravaillé aux paliers tablette : ledger, grille des chiffres, grille équipe, grille contact
- Rythme typographique et espacements harmonisés entre les pages d'expertise
- Animations discrètes conservées et fiabilisées : apparition du hero, révélation au scroll en cascade, flèche du ledger, soulignement de navigation — désactivées si « réduire les animations » est actif
- Accessibilité : hiérarchie de titres correcte, landmarks, focus visibles partout, libellés de formulaire liés, lien d'évitement, contrastes vérifiés
- Formulaire de contact plus professionnel : validation par schéma (nom, e-mail, domaine, message), messages d'erreur en français sous les champs, état de soumission, puis ouverture d'un e-mail pré-rempli vers l'adresse destinataire. Frontend uniquement, sans backend.

## Détails techniques

- Routage par fichier sous `src/routes/`, layout partagé (rail + footer) dans `__root.tsx`
- Composants réutilisables : `Rail`, `MobileNav`, `Section`, `Eyebrow`, `SectionLabel`, `LedgerRow`, `StatGrid`, `PrincipleList`, `TeamCard`, `CheckList`, `CtaBand`, `Letterhead`, `ContactForm`, `Reveal`
- Contenu (expertises, associés, chiffres, coordonnées) centralisé et typé dans `src/content/*.ts` pour édition facile
- Jetons de couleur et de police déclarés dans `src/styles.css` (`@theme inline`), variantes clair/sombre conservées ; aucune couleur en dur dans les composants
- Logo : l'image encodée dans le HTML est extraite en fichier PNG et servie comme asset
- E-mail destinataire dans une constante unique (`src/content/site.ts`) : `kaffelahmed1@gmail.com`
- Validation via zod, encodage correct des paramètres du lien mailto