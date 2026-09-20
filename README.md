# MediCapsule

Plateforme de révision pour la première année de médecine française (PASS et LAS).

Fiches de cours structurées, flashcards à répétition espacée, schémas vectoriels légendés,
QCM entièrement corrigés et modèle 3D manipulable du corps humain. Tout le contenu est
exportable en PDF et le site fonctionne sans appel à un service externe.

## Principes

- **Aucune intelligence artificielle à l’exécution.** Tout le contenu est écrit, figé dans le
  dépôt et servi tel quel. Aucun texte n’est généré au moment où l’étudiant consulte le site.
- **Aucune donnée personnelle.** Pas de compte, pas de serveur applicatif, pas de mouchard.
  La progression est stockée dans le navigateur, dans `localStorage`.
- **Hors ligne.** Une fois la page chargée, la lecture, les flashcards, les QCM, le modèle 3D
  et la génération des PDF fonctionnent sans réseau.
- **Vérifiable.** Le contenu est typé en TypeScript et contrôlé par des scripts dédiés :
  identifiants uniques, liens internes valides, structure des QCM, orthotypographie française.

## Démarrage

```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts

| Commande | Rôle |
| --- | --- |
| `npm run dev` | serveur de développement |
| `npm run build` | build de production (prérend toutes les fiches et les schémas) |
| `npm run typecheck` | vérification TypeScript stricte |
| `npm run verify` | contrôle du corpus : intégrité, liens, QCM, orthotypographie (après un build) |
| `node scripts/build-index.mjs` | régénère les index de contenu à partir des fichiers présents |
| `node scripts/verify-schemas.mjs` | contrôle les planches SVG (balises, identifiants, légendes) |

## Organisation

```
src/
├── app/                    routes Next.js (App Router)
│   ├── fiches/             sommaire, matières, fiches détaillées
│   ├── flashcards/         sessions de répétition espacée
│   ├── schemas/            galerie et planches en plein écran
│   ├── qcm/                séries d’entraînement et mode examen
│   ├── anatomie-3d/        modèle tridimensionnel
│   ├── recherche/          recherche plein texte côté navigateur
│   ├── telechargements/    exports PDF
│   └── api/contenu/        corpus servi en JSON statique
├── components/             interface, rendu des fiches, visionneuse 3D, exports
├── content/                LE CONTENU : un fichier TypeScript typé par fiche et par schéma
│   ├── types.ts            schéma de données de référence
│   ├── ue.ts               les quatorze matières
│   ├── fiches/<matiere>/   une fiche par fichier
│   └── schemas/<matiere>/  une planche SVG par fichier
└── lib/
    ├── anatomie/           modèle 3D : repères, constructeurs de géométrie, systèmes
    ├── pdf/                moteur de mise en page PDF et police Unicode embarquée
    └── progression.ts      suivi local de la progression
```

## Ajouter du contenu

1. Créer un fichier dans `src/content/fiches/<matiere>/<slug>.ts` exportant une constante typée `Fiche`.
2. Lancer `node scripts/build-index.mjs` pour régénérer l’index.
3. Lancer `npm run build` puis `npm run verify`.

La fiche `src/content/fiches/bioch/acides-amines.ts` sert de référence de structure et de densité.

## Le modèle 3D

Le corps humain n’est pas un fichier téléchargé : chaque structure est construite par calcul
dans le navigateur, à partir de repères anatomiques exprimés en mètres sur un sujet de 1,75 m
(`src/lib/anatomie/reperes.ts`). Les formes disponibles — os long, muscle fusiforme, tube suivant
une courbe, lame extrudée, solide de révolution — sont décrites dans `src/lib/anatomie/types.ts`
et assemblées par `src/lib/anatomie/constructeurs.ts`.

Il s’agit d’un modèle pédagogique schématique, destiné à situer et à réviser les structures,
et non d’une reconstruction issue d’imagerie médicale.

## Avertissement

MediCapsule est un support de révision destiné aux étudiants. Il ne remplace ni le cours de la
faculté, ni un avis médical.
