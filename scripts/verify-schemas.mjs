#!/usr/bin/env node
/**
 * Contrôle les planches SVG sans les compiler : équilibrage des balises,
 * balises interdites, identifiants de définitions uniques, et correspondance
 * entre les pastilles numérotées du dessin et les entrées de légende.
 */
import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dossier = path.join(racine, 'src/content/schemas');

const AUTOFERMANTES = new Set(['path', 'rect', 'circle', 'ellipse', 'line', 'polyline', 'polygon', 'use', 'stop', 'image']);
const INTERDITES = new Set(['script', 'style', 'foreignObject', 'iframe', 'image', 'animate', 'set']);

async function fichiers(dir) {
  if (!existsSync(dir)) return [];
  const entrees = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entrees) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await fichiers(p)));
    else if (e.name.endsWith('.ts') && e.name !== 'index.ts') out.push(p);
  }
  return out;
}

function verifierSvg(svg, contexte, erreurs) {
  const pile = [];
  const idsDefinis = new Set();
  const motif = /<\s*(\/?)\s*([A-Za-z][A-Za-z0-9:-]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/?)\s*>/g;
  let m;
  while ((m = motif.exec(svg)) !== null) {
    const fermeture = m[1] === '/';
    const nom = m[2];
    const attributs = m[3] ?? '';
    const autoferme = m[4] === '/';

    if (INTERDITES.has(nom)) {
      erreurs.push(`${contexte} : balise interdite <${nom}>`);
      continue;
    }
    if (/\son[a-z]+\s*=/.test(attributs)) {
      erreurs.push(`${contexte} : attribut d'événement interdit sur <${nom}>`);
    }
    const idTrouve = attributs.match(/\sid\s*=\s*"([^"]+)"/);
    if (idTrouve) {
      if (idsDefinis.has(idTrouve[1])) {
        erreurs.push(`${contexte} : identifiant "${idTrouve[1]}" défini deux fois`);
      }
      idsDefinis.add(idTrouve[1]);
    }

    if (fermeture) {
      const attendu = pile.pop();
      if (attendu !== nom) {
        erreurs.push(`${contexte} : </${nom}> ne ferme pas <${attendu ?? 'rien'}>`);
        return { idsDefinis };
      }
    } else if (!autoferme && !AUTOFERMANTES.has(nom)) {
      pile.push(nom);
    }
  }
  if (pile.length > 0) {
    erreurs.push(`${contexte} : balises non fermées : ${pile.join(', ')}`);
  }

  // Les références url(#x) doivent pointer vers une définition du même schéma.
  for (const reference of svg.matchAll(/url\(#([^)]+)\)/g)) {
    if (!idsDefinis.has(reference[1])) {
      erreurs.push(`${contexte} : référence url(#${reference[1]}) sans définition correspondante`);
    }
  }

  return { idsDefinis };
}

const erreurs = [];
const avertissements = [];
const listeFichiers = await fichiers(dossier);
let nbSchemas = 0;

for (const fichier of listeFichiers) {
  const relatif = path.relative(racine, fichier);
  const source = await readFile(fichier, 'utf8');

  const svgs = [...source.matchAll(/svg:\s*`([\s\S]*?)`\s*,/g)];
  if (svgs.length === 0) {
    erreurs.push(`${relatif} : aucun champ svg trouvé`);
    continue;
  }

  for (const [, contenu] of svgs) {
    nbSchemas += 1;
    verifierSvg(contenu, relatif, erreurs);

    if (!/<\s*svg[\s>]/.test(contenu) === false) {
      erreurs.push(`${relatif} : le champ svg ne doit pas contenir la balise <svg> englobante`);
    }
    if (contenu.includes('${')) {
      erreurs.push(`${relatif} : interpolation interdite dans le champ svg`);
    }

    // Cohérence des pastilles numérotées avec la légende.
    const refsLegende = [...source.matchAll(/ref:\s*'([^']+)'/g)].map((r) => r[1]);
    const numerosDessin = new Set(
      [...contenu.matchAll(/>\s*([0-9]{1,2}|[A-E])\s*<\/text>/g)].map((r) => r[1]),
    );
    for (const ref of refsLegende) {
      if (!numerosDessin.has(ref)) {
        avertissements.push(`${relatif} : la légende ${ref} n'a pas de pastille correspondante dans le dessin`);
      }
    }
    if (refsLegende.length < 5) {
      avertissements.push(`${relatif} : seulement ${refsLegende.length} entrées de légende (6 à 12 attendues)`);
    }
  }
}

for (const a of avertissements) console.warn('  avertissement : ' + a);
if (erreurs.length > 0) {
  console.error(`\n${erreurs.length} erreur(s) :`);
  for (const e of erreurs) console.error('  ✗ ' + e);
  process.exit(1);
}
console.log(`${nbSchemas} planche(s) vérifiée(s), aucune erreur bloquante.`);
