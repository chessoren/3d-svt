#!/usr/bin/env node
/**
 * Contrôle de cohérence et d'orthotypographie de tout le contenu.
 * S'appuie sur la sortie prérendue de la route /api/contenu/tout, produite par
 * `npm run build` : on vérifie donc exactement ce que le site sert.
 */
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const corpsPrerendu = path.join(racine, '.next/server/app/api/contenu/tout.body');

if (!existsSync(corpsPrerendu)) {
  console.error('Lancez d’abord « npm run build » : le corpus prérendu est introuvable.');
  process.exit(1);
}

const { ues, fiches, schemas } = JSON.parse(await readFile(corpsPrerendu, 'utf8'));

const erreurs = [];
const avertissements = [];
const faute = (message) => erreurs.push(message);
const alerte = (message) => avertissements.push(message);

/* -------------------------------------------------------------------------- */
/*  1. Intégrité structurelle                                                  */
/* -------------------------------------------------------------------------- */

const idsUE = new Set(ues.map((u) => u.id));
const idsFiches = new Set();
const idsFlashcards = new Set();
const idsQcm = new Set();
const idsSchemas = new Set();

for (const fiche of fiches) {
  if (idsFiches.has(fiche.id)) faute(`Identifiant de fiche en double : ${fiche.id}`);
  idsFiches.add(fiche.id);

  if (!idsUE.has(fiche.ue)) faute(`${fiche.id} : matière inconnue « ${fiche.ue} »`);
  if (!fiche.id.startsWith(fiche.ue + '-')) {
    faute(`${fiche.id} : l’identifiant devrait commencer par « ${fiche.ue}- »`);
  }
  for (const champ of ['titre', 'sousTitre', 'chapitre']) {
    if (!fiche[champ] || String(fiche[champ]).trim() === '') faute(`${fiche.id} : champ « ${champ} » vide`);
  }
  if (fiche.sections.length < 3) alerte(`${fiche.id} : seulement ${fiche.sections.length} sections`);
  if (fiche.pointsCles.length < 4) alerte(`${fiche.id} : seulement ${fiche.pointsCles.length} points clés`);
  if (fiche.sources.length === 0) alerte(`${fiche.id} : aucune source citée`);

  const idsSections = new Set();
  for (const section of fiche.sections) {
    if (idsSections.has(section.id)) faute(`${fiche.id} : identifiant de section en double « ${section.id} »`);
    idsSections.add(section.id);
    if (section.blocs.length === 0) faute(`${fiche.id} / ${section.id} : section vide`);
    for (const bloc of section.blocs) {
      if (bloc.type === 'tableau') {
        for (const [index, ligne] of bloc.lignes.entries()) {
          if (ligne.length !== bloc.colonnes.length) {
            faute(
              `${fiche.id} / ${section.id} : ligne ${index + 1} du tableau a ${ligne.length} cellules pour ${bloc.colonnes.length} colonnes`,
            );
          }
        }
      }
      if (bloc.type === 'schema' && !schemas.some((s) => s.id === bloc.schemaId)) {
        faute(`${fiche.id} : le bloc renvoie au schéma inexistant « ${bloc.schemaId} »`);
      }
    }
  }

  for (const lien of fiche.schemasLies) {
    if (!schemas.some((s) => s.id === lien)) faute(`${fiche.id} : schéma lié inexistant « ${lien} »`);
  }

  for (const carte of fiche.flashcards) {
    if (idsFlashcards.has(carte.id)) faute(`Identifiant de flashcard en double : ${carte.id}`);
    idsFlashcards.add(carte.id);
    if (!carte.recto.trim() || !carte.verso.trim()) faute(`${carte.id} : recto ou verso vide`);
  }

  for (const question of fiche.qcm) {
    if (idsQcm.has(question.id)) faute(`Identifiant de QCM en double : ${question.id}`);
    idsQcm.add(question.id);
    const lettres = question.propositions.map((p) => p.lettre);
    const attendues = ['A', 'B', 'C', 'D', 'E'].slice(0, lettres.length);
    if (lettres.join('') !== attendues.join('')) {
      faute(`${question.id} : lettres des propositions incorrectes (${lettres.join('')})`);
    }
    if (question.propositions.length !== 5) {
      alerte(`${question.id} : ${question.propositions.length} propositions au lieu de 5`);
    }
    if (!question.propositions.some((p) => p.vraie)) {
      alerte(`${question.id} : aucune proposition exacte`);
    }
    if (question.propositions.every((p) => p.vraie)) {
      alerte(`${question.id} : toutes les propositions sont exactes`);
    }
    for (const proposition of question.propositions) {
      if (!proposition.justification || proposition.justification.trim().length < 12) {
        faute(`${question.id} / ${proposition.lettre} : justification absente ou trop courte`);
      }
    }
    if (!question.correction || question.correction.trim().length < 15) {
      faute(`${question.id} : correction de synthèse absente ou trop courte`);
    }
  }
}

for (const schema of schemas) {
  if (idsSchemas.has(schema.id)) faute(`Identifiant de schéma en double : ${schema.id}`);
  idsSchemas.add(schema.id);
  if (!idsUE.has(schema.ue)) faute(`${schema.id} : matière inconnue « ${schema.ue} »`);
  if (schema.ficheLiee && !idsFiches.has(schema.ficheLiee)) {
    faute(`${schema.id} : fiche liée inexistante « ${schema.ficheLiee} »`);
  }
  if (!/^\d+\s+\d+\s+\d+\s+\d+$/.test(schema.viewBox.trim())) {
    faute(`${schema.id} : viewBox mal formé « ${schema.viewBox} »`);
  }
  if (schema.legendes.length < 4) alerte(`${schema.id} : seulement ${schema.legendes.length} entrées de légende`);
  const refs = new Set();
  for (const legende of schema.legendes) {
    if (refs.has(legende.ref)) faute(`${schema.id} : repère de légende en double « ${legende.ref} »`);
    refs.add(legende.ref);
  }
}

/* -------------------------------------------------------------------------- */
/*  2. Orthotypographie française                                              */
/* -------------------------------------------------------------------------- */

const REGLES = [
  {
    nom: 'apostrophe droite',
    motif: /\p{L}'\p{L}/u,
    conseil: 'utiliser l’apostrophe typographique ’ (U+2019)',
    bloquant: true,
  },
  { nom: 'double espace', motif: /[^\n] {2,}\S/u, conseil: 'un seul espace entre les mots', bloquant: true },
  {
    nom: 'espace avant une virgule',
    motif: /\s,/u,
    conseil: 'pas d’espace avant la virgule en français',
    bloquant: true,
    ignorer: /expression/,
  },
  {
    nom: 'ponctuation double sans espace',
    motif: /\p{L}[;:!?](?:\s|$)/u,
    conseil: 'en français, une espace insécable précède ; : ! et ?',
    bloquant: false,
    // Les formules mathématiques (factorielles) et les titres d'ouvrages
    // étrangers suivent d'autres conventions : ils sont exclus.
    ignorer: /expression|sources|formule/,
  },
  { nom: 'espace avant un point final', motif: /\s\.(?:\s|$)/u, conseil: 'pas d’espace avant le point', bloquant: true },
  { nom: 'guillemet droit', motif: /"/u, conseil: 'utiliser les guillemets français « »', bloquant: false },
  { nom: 'points de suspension en trois points', motif: /\.\.\./u, conseil: 'utiliser le caractère …', bloquant: false },
  { nom: 'espace en fin de chaîne', motif: /\s$/u, conseil: 'supprimer l’espace final', bloquant: true },
];

/** Parcourt récursivement toutes les chaînes de caractères d'un objet. */
function* chaines(valeur, chemin = '') {
  if (typeof valeur === 'string') {
    yield [chemin, valeur];
  } else if (Array.isArray(valeur)) {
    for (const [index, element] of valeur.entries()) yield* chaines(element, `${chemin}[${index}]`);
  } else if (valeur && typeof valeur === 'object') {
    for (const [cle, element] of Object.entries(valeur)) {
      // Le contenu SVG des schémas n'est pas du texte rédigé : il est exclu.
      if (cle === 'svg' || cle === 'viewBox') continue;
      yield* chaines(element, chemin ? `${chemin}.${cle}` : cle);
    }
  }
}

const compteursRegles = new Map();

function verifierTexte(contexte, chemin, texte) {
  for (const regle of REGLES) {
    if (regle.ignorer && regle.ignorer.test(chemin)) continue;
    if (regle.motif.test(texte)) {
      const cle = regle.nom;
      const liste = compteursRegles.get(cle) ?? [];
      liste.push(`${contexte} · ${chemin}`);
      compteursRegles.set(cle, liste);
    }
  }
}

for (const fiche of fiches) {
  for (const [chemin, texte] of chaines(fiche)) verifierTexte(fiche.id, chemin, texte);
}
for (const schema of schemas) {
  for (const [chemin, texte] of chaines(schema)) verifierTexte(schema.id, chemin, texte);
}

/* -------------------------------------------------------------------------- */
/*  3. Rapport                                                                 */
/* -------------------------------------------------------------------------- */

const totalFlashcards = fiches.reduce((n, f) => n + f.flashcards.length, 0);
const totalQcm = fiches.reduce((n, f) => n + f.qcm.length, 0);
const totalSections = fiches.reduce((n, f) => n + f.sections.length, 0);

console.log('');
console.log('  Corpus');
console.log(`    ${ues.length} matières · ${fiches.length} fiches · ${totalSections} sections`);
console.log(`    ${totalFlashcards} flashcards · ${totalQcm} QCM · ${schemas.length} schémas`);
console.log('');

let bloquantes = erreurs.length;
console.log('  Orthotypographie');
for (const regle of REGLES) {
  const occurrences = compteursRegles.get(regle.nom) ?? [];
  const symbole = occurrences.length === 0 ? '✓' : regle.bloquant ? '✗' : '!';
  console.log(`    ${symbole} ${regle.nom} : ${occurrences.length} occurrence(s)${occurrences.length ? ` — ${regle.conseil}` : ''}`);
  if (occurrences.length > 0) {
    for (const exemple of occurrences.slice(0, 4)) console.log(`        ${exemple}`);
    if (occurrences.length > 4) console.log(`        … et ${occurrences.length - 4} autres`);
    if (regle.bloquant) bloquantes += occurrences.length;
  }
}
console.log('');

if (avertissements.length > 0) {
  console.log(`  Avertissements (${avertissements.length})`);
  for (const a of avertissements.slice(0, 20)) console.log('    ! ' + a);
  if (avertissements.length > 20) console.log(`    … et ${avertissements.length - 20} autres`);
  console.log('');
}

if (erreurs.length > 0) {
  console.log(`  Erreurs de structure (${erreurs.length})`);
  for (const e of erreurs.slice(0, 30)) console.log('    ✗ ' + e);
  if (erreurs.length > 30) console.log(`    … et ${erreurs.length - 30} autres`);
  console.log('');
}

if (bloquantes > 0) {
  console.error(`  ÉCHEC : ${bloquantes} problème(s) bloquant(s).`);
  process.exit(1);
}
console.log('  Contenu validé : aucune erreur bloquante.');
