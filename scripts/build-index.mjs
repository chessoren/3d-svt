#!/usr/bin/env node
/**
 * Génère les index de contenu à partir des fichiers présents sur le disque.
 * Chaque fichier de contenu expose un seul export nommé ; ce script les collecte
 * et écrit src/content/fiches/index.ts et src/content/schemas/index.ts.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

async function fichiersTs(dossier) {
  if (!existsSync(dossier)) return [];
  const entrees = await readdir(dossier, { withFileTypes: true });
  const resultats = [];
  for (const entree of entrees) {
    const complet = path.join(dossier, entree.name);
    if (entree.isDirectory()) {
      resultats.push(...(await fichiersTs(complet)));
    } else if (entree.name.endsWith('.ts') && entree.name !== 'index.ts') {
      resultats.push(complet);
    }
  }
  return resultats.sort();
}

async function collecter(dossier, typeAttendu) {
  const fichiers = await fichiersTs(dossier);
  const entrees = [];
  for (const fichier of fichiers) {
    const contenu = await readFile(fichier, 'utf8');
    const motif = new RegExp(
      `export\\s+const\\s+([A-Za-z0-9_]+)\\s*:\\s*${typeAttendu}(\\[\\])?\\s*=`,
      'g',
    );
    let correspondance;
    const exports = [];
    while ((correspondance = motif.exec(contenu)) !== null) {
      exports.push({ nom: correspondance[1], estTableau: Boolean(correspondance[2]) });
    }
    if (exports.length === 0) {
      console.warn(`  (ignoré) aucun export ${typeAttendu} dans ${path.relative(racine, fichier)}`);
      continue;
    }
    const relatif =
      './' + path.relative(dossier, fichier).replace(/\\/g, '/').replace(/\.ts$/, '');
    entrees.push({ relatif, exports });
  }
  return entrees;
}

function genererIndex(entrees, typeAttendu, nomTableau, cheminType) {
  const imports = entrees
    .map((e) => `import { ${e.exports.map((x) => x.nom).join(', ')} } from '${e.relatif}';`)
    .join('\n');
  const elements = entrees
    .flatMap((e) => e.exports.map((x) => (x.estTableau ? `  ...${x.nom},` : `  ${x.nom},`)))
    .join('\n');
  return `// Fichier généré automatiquement par scripts/build-index.mjs — ne pas modifier à la main.
import type { ${typeAttendu} } from '${cheminType}';

${imports}

export const ${nomTableau}: ${typeAttendu}[] = [
${elements}
];
`;
}

const fiches = await collecter(path.join(racine, 'src/content/fiches'), 'Fiche');
await writeFile(
  path.join(racine, 'src/content/fiches/index.ts'),
  genererIndex(fiches, 'Fiche', 'TOUTES_LES_FICHES', '../types'),
  'utf8',
);

const schemas = await collecter(path.join(racine, 'src/content/schemas'), 'Schema');
await writeFile(
  path.join(racine, 'src/content/schemas/index.ts'),
  genererIndex(schemas, 'Schema', 'TOUS_LES_SCHEMAS', '../types'),
  'utf8',
);

const nbFiches = fiches.reduce((n, e) => n + e.exports.length, 0);
const nbSchemas = schemas.reduce((n, e) => n + e.exports.length, 0);
console.log(`Index généré : ${nbFiches} module(s) de fiche, ${nbSchemas} module(s) de schéma.`);
