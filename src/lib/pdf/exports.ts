import type { Bloc, Fiche, QCM, Schema, UE, VarianteEncadre } from '@/content/types';
import type { FlashcardAvecContexte, QCMAvecContexte } from '@/content';
import {
  A4,
  DocumentPdf,
  GRIS_DOUX,
  GRIS_FONCE,
  GRIS_TEXTE,
  LARGEUR_UTILE,
  MARGE,
  POLICE,
  chargerPolices,
  eclaircir,
  hexVersRvb,
  type Teinte,
} from './document';

const ETIQUETTES_ENCADRE: Record<VarianteEncadre, { etiquette: string; couleur: Teinte }> = {
  info: { etiquette: 'À savoir', couleur: [23, 92, 211] },
  attention: { etiquette: 'Attention', couleur: [212, 56, 13] },
  astuce: { etiquette: 'Astuce', couleur: [124, 77, 245] },
  clinique: { etiquette: 'Application clinique', couleur: [18, 160, 101] },
  examen: { etiquette: 'Piège de concours', couleur: [181, 71, 8] },
  chiffres: { etiquette: 'Chiffres à retenir', couleur: [23, 92, 211] },
};

async function nouveauDocument(titre: string, couleur: string) {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
  await chargerPolices(doc);
  doc.setProperties({
    title: titre,
    subject: 'Support de révision PASS / LAS',
    creator: 'MediCapsule',
    author: 'MediCapsule',
  });
  return new DocumentPdf(doc, { titre, couleur });
}

function enregistrer(pdf: DocumentPdf, nomFichier: string) {
  pdf.finaliser();
  pdf.doc.save(nomFichier);
}

export function nettoyerNomFichier(texte: string) {
  return texte
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
    .slice(0, 80);
}

/* -------------------------------------------------------------------------- */
/*  Rastérisation des schémas                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Convertit un schéma SVG en image PNG utilisable par jsPDF.
 * Renvoie null si le navigateur ne peut pas réaliser l'opération.
 */
export async function schemaVersPng(
  schema: Schema,
  largeurPixels = 1600,
): Promise<{ dataUrl: string; largeur: number; hauteur: number } | null> {
  if (typeof window === 'undefined') return null;
  const [, , largeurVb, hauteurVb] = schema.viewBox.split(/\s+/).map(Number);
  if (!largeurVb || !hauteurVb) return null;
  const ratio = hauteurVb / largeurVb;
  const largeur = largeurPixels;
  const hauteur = Math.round(largeur * ratio);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${schema.viewBox}" width="${largeur}" height="${hauteur}"><rect width="100%" height="100%" fill="#ffffff"/>${schema.svg}</svg>`;
  const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('svg illisible'));
      img.src = url;
    });
    const canevas = document.createElement('canvas');
    canevas.width = largeur;
    canevas.height = hauteur;
    const contexte = canevas.getContext('2d');
    if (!contexte) return null;
    contexte.fillStyle = '#ffffff';
    contexte.fillRect(0, 0, largeur, hauteur);
    contexte.drawImage(image, 0, 0, largeur, hauteur);
    return { dataUrl: canevas.toDataURL('image/png'), largeur, hauteur };
  } catch {
    return null;
  }
}

/* -------------------------------------------------------------------------- */
/*  Écriture d'une fiche                                                       */
/* -------------------------------------------------------------------------- */

export interface OptionsFiche {
  avecObjectifs?: boolean;
  avecPointsCles?: boolean;
  avecErreurs?: boolean;
  avecMnemo?: boolean;
  avecFlashcards?: boolean;
  avecQcm?: boolean;
  avecCorrections?: boolean;
  avecSchemas?: boolean;
  avecSources?: boolean;
}

export const OPTIONS_COMPLETES: Required<OptionsFiche> = {
  avecObjectifs: true,
  avecPointsCles: true,
  avecErreurs: true,
  avecMnemo: true,
  avecFlashcards: true,
  avecQcm: true,
  avecCorrections: true,
  avecSchemas: true,
  avecSources: true,
};

function ecrireBloc(pdf: DocumentPdf, bloc: Bloc, images: Map<string, { dataUrl: string; largeur: number; hauteur: number }>) {
  switch (bloc.type) {
    case 'paragraphe':
      pdf.paragraphe(bloc.texte);
      break;
    case 'liste':
      pdf.liste(bloc.items, { ordonnee: bloc.ordonnee });
      break;
    case 'definition':
      pdf.encadre({
        etiquette: 'Définition',
        titre: bloc.terme,
        texte: bloc.definition,
        couleur: [59, 98, 246],
      });
      pdf.espace(3);
      break;
    case 'tableau':
      pdf.tableau({ titre: bloc.titre, colonnes: bloc.colonnes, lignes: bloc.lignes });
      break;
    case 'encadre': {
      const { etiquette, couleur } = ETIQUETTES_ENCADRE[bloc.variante];
      pdf.encadre({ etiquette, titre: bloc.titre, texte: bloc.texte, couleur });
      pdf.espace(3);
      break;
    }
    case 'formule': {
      const d = pdf.doc;
      pdf.verifierEspace(14);
      d.setFillColor(246, 248, 253);
      d.roundedRect(MARGE.gauche, pdf.y - 4, LARGEUR_UTILE, 11, 2, 2, 'F');
      d.setFont(POLICE, 'bold');
      d.setFontSize(10.5);
      d.setTextColor(...GRIS_FONCE);
      const largeurTexte = d.getTextWidth(bloc.expression);
      d.text(bloc.expression, MARGE.gauche + Math.max(3, (LARGEUR_UTILE - largeurTexte) / 2), pdf.y + 3);
      pdf.y += 11;
      if (bloc.unites) pdf.paragraphe(`Unités : ${bloc.unites}`, { taille: 8.5, couleur: GRIS_DOUX });
      if (bloc.legende) pdf.paragraphe(bloc.legende, { taille: 9 });
      break;
    }
    case 'etapes':
      if (bloc.titre) pdf.titre3(bloc.titre);
      bloc.etapes.forEach((etape, i) => {
        pdf.paragraphe(`${i + 1}. ${etape.titre}`, { gras: true, taille: 9.5, couleur: GRIS_FONCE });
        pdf.paragraphe(etape.detail, { taille: 9, indentation: 5 });
      });
      break;
    case 'comparaison': {
      if (bloc.titre) pdf.titre3(bloc.titre);
      pdf.tableau({
        colonnes: [bloc.gauche.titre, bloc.droite.titre],
        lignes: Array.from(
          { length: Math.max(bloc.gauche.points.length, bloc.droite.points.length) },
          (_, i) => [bloc.gauche.points[i] ?? '', bloc.droite.points[i] ?? ''],
        ),
      });
      break;
    }
    case 'schema': {
      const image = images.get(bloc.schemaId);
      if (image) {
        const largeurMm = Math.min(LARGEUR_UTILE, 160);
        pdf.image(image.dataUrl, largeurMm, (largeurMm * image.hauteur) / image.largeur);
      }
      if (bloc.legende) pdf.paragraphe(bloc.legende, { taille: 8.5, couleur: GRIS_DOUX });
      break;
    }
  }
}

export async function ecrireFiche(
  pdf: DocumentPdf,
  fiche: Fiche,
  ue: UE,
  options: OptionsFiche = OPTIONS_COMPLETES,
  schemas: Schema[] = [],
) {
  const opt = { ...OPTIONS_COMPLETES, ...options };
  pdf.definirCouleur(ue.couleur);
  pdf.definirTitreCourant(`${ue.titre} · ${fiche.titre}`);

  const images = new Map<string, { dataUrl: string; largeur: number; hauteur: number }>();
  if (opt.avecSchemas) {
    for (const schema of schemas) {
      const image = await schemaVersPng(schema, 1400);
      if (image) images.set(schema.id, image);
    }
  }

  const d = pdf.doc;

  // Bandeau de titre
  pdf.verifierEspace(34);
  d.setFont(POLICE, 'bold');
  d.setFontSize(7.5);
  d.setTextColor(...hexVersRvb(ue.couleur));
  d.text(`${ue.code} · ${fiche.chapitre.toUpperCase()}`, MARGE.gauche, pdf.y);
  pdf.y += 6.5;

  d.setFontSize(18);
  d.setTextColor(...GRIS_FONCE);
  for (const ligne of d.splitTextToSize(fiche.titre, LARGEUR_UTILE) as string[]) {
    pdf.verifierEspace(10);
    d.text(ligne, MARGE.gauche, pdf.y);
    pdf.y += 8;
  }

  d.setFont(POLICE, 'normal');
  d.setFontSize(9.5);
  d.setTextColor(...GRIS_TEXTE);
  for (const ligne of d.splitTextToSize(fiche.sousTitre, LARGEUR_UTILE) as string[]) {
    pdf.verifierEspace(6);
    d.text(ligne, MARGE.gauche, pdf.y);
    pdf.y += 5;
  }
  pdf.espace(3);

  d.setFontSize(8);
  d.setTextColor(...GRIS_DOUX);
  const difficultes = { 1: 'Accessible', 2: 'Intermédiaire', 3: 'Exigeant' } as const;
  d.text(
    `Lecture ${fiche.duree} min · ${difficultes[fiche.difficulte]} · ${fiche.flashcards.length} flashcards · ${fiche.qcm.length} QCM`,
    MARGE.gauche,
    pdf.y,
  );
  pdf.y += 6;
  pdf.separateur();

  if (opt.avecObjectifs && fiche.objectifs.length > 0) {
    pdf.titre2('Objectifs');
    pdf.liste(fiche.objectifs, { ordonnee: true, taille: 9 });
  }

  for (const section of fiche.sections) {
    pdf.titre1(section.titre);
    for (const bloc of section.blocs) ecrireBloc(pdf, bloc, images);
    pdf.espace(2);
  }

  if (opt.avecSchemas && images.size > 0) {
    const dejaInseres = new Set(
      fiche.sections.flatMap((s) => s.blocs.filter((b) => b.type === 'schema').map((b) => (b as { schemaId: string }).schemaId)),
    );
    const restants = schemas.filter((s) => !dejaInseres.has(s.id) && images.has(s.id));
    if (restants.length > 0) {
      pdf.titre1('Schémas');
      for (const schema of restants) {
        const image = images.get(schema.id);
        if (!image) continue;
        pdf.titre3(schema.titre);
        const largeurMm = Math.min(LARGEUR_UTILE, 165);
        pdf.image(image.dataUrl, largeurMm, (largeurMm * image.hauteur) / image.largeur);
        if (schema.legendes.length > 0) {
          pdf.liste(
            schema.legendes.map((l) => `${l.ref}. ${l.texte}`),
            { taille: 8.5 },
          );
        }
      }
    }
  }

  if (opt.avecPointsCles && fiche.pointsCles.length > 0) {
    pdf.titre1('Points clés');
    pdf.liste(fiche.pointsCles, { taille: 9.5 });
  }

  if (opt.avecErreurs && fiche.erreursFrequentes.length > 0) {
    pdf.titre1('Erreurs fréquentes');
    pdf.liste(fiche.erreursFrequentes, { taille: 9.5 });
  }

  if (opt.avecMnemo && fiche.mnemotechniques.length > 0) {
    pdf.titre1('Moyens mnémotechniques');
    for (const mnemo of fiche.mnemotechniques) {
      pdf.encadre({
        etiquette: 'Mnémotechnique',
        titre: mnemo.moyen,
        texte: mnemo.explication,
        couleur: [124, 77, 245],
      });
      pdf.espace(3);
    }
  }

  if (opt.avecFlashcards && fiche.flashcards.length > 0) {
    pdf.titre1('Flashcards');
    pdf.tableau({
      colonnes: ['Question', 'Réponse'],
      lignes: fiche.flashcards.map((c) => [c.recto, c.verso]),
    });
  }

  if (opt.avecQcm && fiche.qcm.length > 0) {
    pdf.titre1('QCM');
    ecrireQcm(pdf, fiche.qcm, opt.avecCorrections);
  }

  if (opt.avecSources && fiche.sources.length > 0) {
    pdf.titre2('Sources consultées');
    pdf.liste(fiche.sources, { taille: 8.5 });
  }
}

function ecrireQcm(pdf: DocumentPdf, questions: QCM[], avecCorrections: boolean) {
  questions.forEach((question, index) => {
    pdf.verifierEspace(30);
    pdf.paragraphe(`QCM ${index + 1}. ${question.enonce}`, { gras: true, taille: 9.8, couleur: GRIS_FONCE });
    for (const proposition of question.propositions) {
      pdf.paragraphe(`${proposition.lettre}. ${proposition.texte}`, { taille: 9, indentation: 4 });
    }
    if (avecCorrections) {
      const justes = question.propositions.filter((p) => p.vraie).map((p) => p.lettre);
      pdf.encadre({
        etiquette: 'Correction',
        titre: justes.length > 0 ? `Réponses exactes : ${justes.join(', ')}` : 'Aucune proposition exacte',
        texte:
          question.correction +
          '\n' +
          question.propositions.map((p) => `${p.lettre} (${p.vraie ? 'vrai' : 'faux'}) : ${p.justification}`).join('\n'),
        couleur: [18, 160, 101],
      });
    }
    pdf.espace(4);
  });
}

/* -------------------------------------------------------------------------- */
/*  Exports publics                                                            */
/* -------------------------------------------------------------------------- */

export async function exporterFiche(
  fiche: Fiche,
  ue: UE,
  schemas: Schema[] = [],
  options: OptionsFiche = OPTIONS_COMPLETES,
) {
  const pdf = await nouveauDocument(fiche.titre, ue.couleur);
  // L'en-tête courant est fixé avant la page de garde pour rester identique
  // sur toutes les pages du document.
  pdf.definirTitreCourant(`${ue.titre} · ${fiche.titre}`);
  pdf.pageDeGarde({
    surTitre: `${ue.code} · ${ue.titre}`,
    titre: fiche.titre,
    sousTitre: fiche.sousTitre,
    lignes: [
      `Chapitre : ${fiche.chapitre}`,
      `${fiche.sections.length} sections · ${fiche.flashcards.length} flashcards · ${fiche.qcm.length} QCM`,
      `Durée de lecture estimée : ${fiche.duree} minutes`,
    ],
  });
  await ecrireFiche(pdf, fiche, ue, options, schemas);
  enregistrer(pdf, `medicapsule-${nettoyerNomFichier(fiche.titre)}.pdf`);
}

export async function exporterUE(
  ue: UE,
  fiches: Fiche[],
  schemasParFiche: Map<string, Schema[]>,
  options: OptionsFiche = OPTIONS_COMPLETES,
  surProgression?: (fait: number, total: number) => void,
) {
  const pdf = await nouveauDocument(ue.titre, ue.couleur);
  pdf.pageDeGarde({
    surTitre: `Matière ${ue.code}`,
    titre: ue.titre,
    sousTitre: ue.sousTitre,
    lignes: [
      `${fiches.length} fiches`,
      `${fiches.reduce((s, f) => s + f.flashcards.length, 0)} flashcards`,
      `${fiches.reduce((s, f) => s + f.qcm.length, 0)} QCM corrigés`,
    ],
  });

  // Sommaire
  pdf.definirCouleur(ue.couleur);
  pdf.titre1('Sommaire');
  let chapitreCourant = '';
  for (const fiche of fiches) {
    if (fiche.chapitre !== chapitreCourant) {
      chapitreCourant = fiche.chapitre;
      pdf.paragraphe(chapitreCourant, { gras: true, taille: 9.5, couleur: GRIS_FONCE });
    }
    pdf.paragraphe(`${fiche.ordre}. ${fiche.titre}`, { taille: 9, indentation: 5 });
  }

  for (const [index, fiche] of fiches.entries()) {
    pdf.nouvellePage();
    await ecrireFiche(pdf, fiche, ue, options, schemasParFiche.get(fiche.id) ?? []);
    surProgression?.(index + 1, fiches.length);
  }

  enregistrer(pdf, `medicapsule-${nettoyerNomFichier(ue.titre)}.pdf`);
}

export async function exporterTout(
  ues: UE[],
  fichesParUE: Map<string, Fiche[]>,
  schemasParFiche: Map<string, Schema[]>,
  options: OptionsFiche = OPTIONS_COMPLETES,
  surProgression?: (fait: number, total: number) => void,
) {
  const toutesLesFiches = ues.flatMap((ue) => fichesParUE.get(ue.id) ?? []);
  const pdf = await nouveauDocument('MediCapsule — recueil complet', '#3b62f6');
  pdf.pageDeGarde({
    surTitre: 'Recueil complet',
    titre: 'Toute la première année de médecine',
    sousTitre: 'Fiches, schémas, flashcards et QCM corrigés — PASS et LAS',
    lignes: [
      `${ues.length} matières`,
      `${toutesLesFiches.length} fiches`,
      `${toutesLesFiches.reduce((s, f) => s + f.flashcards.length, 0)} flashcards`,
      `${toutesLesFiches.reduce((s, f) => s + f.qcm.length, 0)} QCM corrigés`,
    ],
  });

  pdf.titre1('Sommaire général');
  for (const ue of ues) {
    const fiches = fichesParUE.get(ue.id) ?? [];
    if (fiches.length === 0) continue;
    pdf.definirCouleur(ue.couleur);
    pdf.titre2(`${ue.code} — ${ue.titre}`);
    pdf.liste(
      fiches.map((f) => f.titre),
      { taille: 8.5 },
    );
  }

  let fait = 0;
  for (const ue of ues) {
    const fiches = fichesParUE.get(ue.id) ?? [];
    if (fiches.length === 0) continue;
    pdf.nouvellePage();
    pdf.definirCouleur(ue.couleur);
    pdf.definirTitreCourant(ue.titre);
    const d = pdf.doc;
    d.setFillColor(...eclaircir(hexVersRvb(ue.couleur), 0.88));
    d.roundedRect(MARGE.gauche, pdf.y - 4, LARGEUR_UTILE, 26, 3, 3, 'F');
    d.setFont(POLICE, 'bold');
    d.setFontSize(20);
    d.setTextColor(...hexVersRvb(ue.couleur));
    d.text(ue.titre, MARGE.gauche + 6, pdf.y + 8);
    d.setFont(POLICE, 'normal');
    d.setFontSize(9);
    d.setTextColor(...GRIS_TEXTE);
    d.text(ue.sousTitre, MARGE.gauche + 6, pdf.y + 15);
    pdf.y += 30;

    for (const fiche of fiches) {
      pdf.nouvellePage();
      await ecrireFiche(pdf, fiche, ue, options, schemasParFiche.get(fiche.id) ?? []);
      fait += 1;
      surProgression?.(fait, toutesLesFiches.length);
    }
  }

  enregistrer(pdf, 'medicapsule-recueil-complet.pdf');
}

/** Paquet de flashcards à découper : recto et verso alignés au dos l'un de l'autre. */
export async function exporterFlashcards(
  cartes: FlashcardAvecContexte[],
  titre: string,
  couleur = '#7c4df5',
) {
  const pdf = await nouveauDocument(titre, couleur);
  pdf.pageDeGarde({
    surTitre: 'Paquet de flashcards',
    titre,
    sousTitre: 'À imprimer en recto verso, bord long, puis à découper le long des repères.',
    lignes: [`${cartes.length} cartes`, 'Une page de questions, puis la page de réponses correspondante'],
  });

  const d = pdf.doc;
  const colonnes = 2;
  const rangees = 4;
  const parPage = colonnes * rangees;
  const largeurCarte = LARGEUR_UTILE / colonnes;
  const hauteurCarte = (A4.hauteur - MARGE.haut - MARGE.bas) / rangees;
  const teinte = hexVersRvb(couleur);

  const dessinerPage = (lot: FlashcardAvecContexte[], verso: boolean) => {
    d.setDrawColor(210, 216, 230);
    d.setLineWidth(0.2);
    for (let i = 0; i < parPage; i += 1) {
      const colonneBrute = i % colonnes;
      // Au verso, l'ordre des colonnes est inversé pour tomber en face du recto.
      const colonne = verso ? colonnes - 1 - colonneBrute : colonneBrute;
      const rangee = Math.floor(i / colonnes);
      const x = MARGE.gauche + colonne * largeurCarte;
      const y = MARGE.haut + rangee * hauteurCarte;
      d.rect(x, y, largeurCarte, hauteurCarte);

      const carte = lot[i];
      if (!carte) continue;

      d.setFont(POLICE, 'bold');
      d.setFontSize(6.5);
      d.setTextColor(...teinte);
      d.text(verso ? 'RÉPONSE' : 'QUESTION', x + 4, y + 6);
      d.setFont(POLICE, 'normal');
      d.setTextColor(...GRIS_DOUX);
      const contexte = carte.ficheTitre;
      d.text(
        contexte.length > 34 ? contexte.slice(0, 33) + '…' : contexte,
        x + largeurCarte - 4 - d.getTextWidth(contexte.length > 34 ? contexte.slice(0, 33) + '…' : contexte),
        y + 6,
      );

      d.setFont(POLICE, verso ? 'normal' : 'bold');
      d.setFontSize(verso ? 8.5 : 9.5);
      d.setTextColor(...(verso ? GRIS_TEXTE : GRIS_FONCE));
      const texte = verso ? carte.verso : carte.recto;
      const lignes = d.splitTextToSize(texte, largeurCarte - 8) as string[];
      const interligne = verso ? 4.4 : 5;
      const hauteurTexte = lignes.length * interligne;
      let yTexte = y + Math.max(12, (hauteurCarte - hauteurTexte) / 2);
      for (const ligne of lignes) {
        if (yTexte > y + hauteurCarte - 5) break;
        d.text(ligne, x + 4, yTexte);
        yTexte += interligne;
      }
    }
  };

  for (let debut = 0; debut < cartes.length; debut += parPage) {
    const lot = cartes.slice(debut, debut + parPage);
    if (debut > 0) pdf.nouvellePage();
    dessinerPage(lot, false);
    pdf.nouvellePage();
    dessinerPage(lot, true);
  }

  enregistrer(pdf, `medicapsule-flashcards-${nettoyerNomFichier(titre)}.pdf`);
}

export async function exporterQCM(
  questions: QCMAvecContexte[],
  titre: string,
  couleur = '#12a065',
  avecCorrections = true,
) {
  const pdf = await nouveauDocument(titre, couleur);
  pdf.pageDeGarde({
    surTitre: 'Entraînement QCM',
    titre,
    sousTitre: avecCorrections
      ? 'Questions et corrections détaillées, proposition par proposition.'
      : 'Sujet seul : les corrections ne sont pas incluses dans ce document.',
    lignes: [
      `${questions.length} questions`,
      `${questions.reduce((s, q) => s + q.propositions.length, 0)} propositions`,
    ],
  });
  pdf.definirTitreCourant(titre);
  ecrireQcm(pdf, questions, avecCorrections);
  enregistrer(pdf, `medicapsule-qcm-${nettoyerNomFichier(titre)}.pdf`);
}

export async function exporterSchemas(schemas: Schema[], titre: string, couleur = '#e0632f') {
  const pdf = await nouveauDocument(titre, couleur);
  pdf.pageDeGarde({
    surTitre: 'Planches légendées',
    titre,
    sousTitre: 'Schémas vectoriels rendus en haute définition, avec leur légende complète.',
    lignes: [`${schemas.length} planches`],
  });
  pdf.definirTitreCourant(titre);

  for (const [index, schema] of schemas.entries()) {
    if (index > 0) pdf.nouvellePage();
    pdf.titre1(schema.titre);
    pdf.paragraphe(schema.description, { taille: 9 });
    const image = await schemaVersPng(schema, 1800);
    if (image) {
      const largeurMm = Math.min(LARGEUR_UTILE, 175);
      pdf.image(image.dataUrl, largeurMm, (largeurMm * image.hauteur) / image.largeur);
    }
    if (schema.legendes.length > 0) {
      pdf.titre3('Légende');
      pdf.liste(
        schema.legendes.map((l) => `${l.ref}. ${l.texte}`),
        { taille: 8.5 },
      );
    }
  }

  enregistrer(pdf, `medicapsule-schemas-${nettoyerNomFichier(titre)}.pdf`);
}
