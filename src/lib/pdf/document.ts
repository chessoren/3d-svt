import type { jsPDF } from 'jspdf';

/**
 * Petite couche de mise en page au-dessus de jsPDF : marges, en-têtes, pieds de
 * page, titres, paragraphes, listes, tableaux et encadrés, avec gestion
 * automatique des sauts de page.
 */

export const A4 = { largeur: 210, hauteur: 297 };
export const MARGE = { gauche: 16, droite: 16, haut: 20, bas: 18 };
export const LARGEUR_UTILE = A4.largeur - MARGE.gauche - MARGE.droite;

export const POLICE = 'MediCapsule';

export type Teinte = [number, number, number];

export const GRIS_FONCE: Teinte = [16, 24, 40];
export const GRIS_TEXTE: Teinte = [71, 84, 103];
export const GRIS_DOUX: Teinte = [138, 148, 168];
export const GRIS_TRAIT: Teinte = [226, 232, 244];
export const GRIS_FOND: Teinte = [246, 248, 253];

export function hexVersRvb(hex: string): Teinte {
  const propre = hex.replace('#', '');
  return [
    parseInt(propre.slice(0, 2), 16),
    parseInt(propre.slice(2, 4), 16),
    parseInt(propre.slice(4, 6), 16),
  ];
}

export function eclaircir(couleur: Teinte, facteur: number): Teinte {
  return [
    Math.round(couleur[0] + (255 - couleur[0]) * facteur),
    Math.round(couleur[1] + (255 - couleur[1]) * facteur),
    Math.round(couleur[2] + (255 - couleur[2]) * facteur),
  ];
}

let policesChargees = false;

/** Charge la police Unicode à la demande (module lourd, importé dynamiquement). */
export async function chargerPolices(doc: jsPDF) {
  const [{ POLICE_REGULIERE }, { POLICE_GRASSE }] = await Promise.all([
    import('./police-reguliere'),
    import('./police-grasse'),
  ]);
  doc.addFileToVFS('medicapsule-regular.ttf', POLICE_REGULIERE);
  doc.addFont('medicapsule-regular.ttf', POLICE, 'normal');
  doc.addFileToVFS('medicapsule-bold.ttf', POLICE_GRASSE);
  doc.addFont('medicapsule-bold.ttf', POLICE, 'bold');
  doc.setFont(POLICE, 'normal');
  policesChargees = true;
}

export function policesPretes() {
  return policesChargees;
}

export interface OptionsDocument {
  titre: string;
  sousTitre?: string;
  couleur?: string;
  mentionPied?: string;
}

export class DocumentPdf {
  readonly doc: jsPDF;
  y = MARGE.haut;
  private couleur: Teinte;
  private titreCourant: string;
  private mentionPied: string;
  private pagesNumerotees = true;

  constructor(doc: jsPDF, options: OptionsDocument) {
    this.doc = doc;
    this.couleur = options.couleur ? hexVersRvb(options.couleur) : [59, 98, 246];
    this.titreCourant = options.titre;
    this.mentionPied = options.mentionPied ?? 'MediCapsule — révisions PASS et LAS';
  }

  definirCouleur(hex: string) {
    this.couleur = hexVersRvb(hex);
  }

  definirTitreCourant(titre: string) {
    this.titreCourant = titre;
  }

  /* --------------------------- gestion des pages -------------------------- */

  espaceRestant() {
    return A4.hauteur - MARGE.bas - this.y;
  }

  verifierEspace(hauteurNecessaire: number) {
    if (this.espaceRestant() < hauteurNecessaire) this.nouvellePage();
  }

  nouvellePage() {
    this.doc.addPage();
    this.y = MARGE.haut;
    this.enTete();
  }

  private enTete() {
    const d = this.doc;
    d.setFont(POLICE, 'normal');
    d.setFontSize(7.5);
    d.setTextColor(...GRIS_DOUX);
    const texte = this.tronquer(this.titreCourant, LARGEUR_UTILE - 28, 7.5);
    d.text(texte, MARGE.gauche, MARGE.haut - 8);
    d.setDrawColor(...GRIS_TRAIT);
    d.setLineWidth(0.2);
    d.line(MARGE.gauche, MARGE.haut - 5.5, A4.largeur - MARGE.droite, MARGE.haut - 5.5);
  }

  private tronquer(texte: string, largeurMax: number, taille: number) {
    const d = this.doc;
    d.setFontSize(taille);
    if (d.getTextWidth(texte) <= largeurMax) return texte;
    let court = texte;
    while (court.length > 4 && d.getTextWidth(court + '…') > largeurMax) {
      court = court.slice(0, -1);
    }
    return court + '…';
  }

  /** Numérote toutes les pages : à appeler une fois le document terminé. */
  finaliser() {
    if (!this.pagesNumerotees) return;
    const d = this.doc;
    const total = d.getNumberOfPages();
    for (let page = 1; page <= total; page += 1) {
      d.setPage(page);
      d.setFont(POLICE, 'normal');
      d.setFontSize(7.5);
      d.setTextColor(...GRIS_DOUX);
      d.text(this.mentionPied, MARGE.gauche, A4.hauteur - MARGE.bas + 8);
      const numero = `${page} / ${total}`;
      d.text(numero, A4.largeur - MARGE.droite - d.getTextWidth(numero), A4.hauteur - MARGE.bas + 8);
    }
  }

  /* ------------------------------ page de garde --------------------------- */

  pageDeGarde({
    surTitre,
    titre,
    sousTitre,
    lignes,
  }: {
    surTitre?: string;
    titre: string;
    sousTitre?: string;
    lignes?: string[];
  }) {
    const d = this.doc;
    d.setFillColor(...this.couleur);
    d.rect(0, 0, A4.largeur, 6, 'F');

    let y = 70;
    if (surTitre) {
      d.setFont(POLICE, 'bold');
      d.setFontSize(9);
      d.setTextColor(...this.couleur);
      d.text(surTitre.toUpperCase(), MARGE.gauche, y);
      y += 12;
    }

    d.setFont(POLICE, 'bold');
    d.setFontSize(28);
    d.setTextColor(...GRIS_FONCE);
    const lignesTitre = d.splitTextToSize(titre, LARGEUR_UTILE) as string[];
    for (const ligne of lignesTitre) {
      d.text(ligne, MARGE.gauche, y);
      y += 12;
    }

    if (sousTitre) {
      y += 2;
      d.setFont(POLICE, 'normal');
      d.setFontSize(12);
      d.setTextColor(...GRIS_TEXTE);
      const lignesSous = d.splitTextToSize(sousTitre, LARGEUR_UTILE) as string[];
      for (const ligne of lignesSous) {
        d.text(ligne, MARGE.gauche, y);
        y += 6.5;
      }
    }

    if (lignes && lignes.length > 0) {
      y += 10;
      d.setDrawColor(...GRIS_TRAIT);
      d.line(MARGE.gauche, y, MARGE.gauche + 40, y);
      y += 8;
      d.setFontSize(9.5);
      d.setTextColor(...GRIS_TEXTE);
      for (const ligne of lignes) {
        d.text(ligne, MARGE.gauche, y);
        y += 5.6;
      }
    }

    d.setFont(POLICE, 'bold');
    d.setFontSize(11);
    d.setTextColor(...this.couleur);
    d.text('MediCapsule', MARGE.gauche, A4.hauteur - 28);
    d.setFont(POLICE, 'normal');
    d.setFontSize(8);
    d.setTextColor(...GRIS_DOUX);
    d.text(
      'Support de révision destiné aux étudiants. Ne remplace ni le cours de la faculté, ni un avis médical.',
      MARGE.gauche,
      A4.hauteur - 22,
    );

    this.nouvellePage();
  }

  /* --------------------------------- texte -------------------------------- */

  titre1(texte: string) {
    this.verifierEspace(24);
    const d = this.doc;
    d.setFont(POLICE, 'bold');
    d.setFontSize(16);
    d.setTextColor(...GRIS_FONCE);
    const lignes = d.splitTextToSize(texte, LARGEUR_UTILE) as string[];
    for (const ligne of lignes) {
      this.verifierEspace(10);
      d.text(ligne, MARGE.gauche, this.y);
      this.y += 7.5;
    }
    d.setDrawColor(...this.couleur);
    d.setLineWidth(0.8);
    d.line(MARGE.gauche, this.y - 2, MARGE.gauche + 18, this.y - 2);
    this.y += 5;
  }

  titre2(texte: string) {
    this.verifierEspace(18);
    const d = this.doc;
    d.setFont(POLICE, 'bold');
    d.setFontSize(12);
    d.setTextColor(...this.couleur);
    const lignes = d.splitTextToSize(texte, LARGEUR_UTILE) as string[];
    for (const ligne of lignes) {
      this.verifierEspace(8);
      d.text(ligne, MARGE.gauche, this.y);
      this.y += 6;
    }
    this.y += 2;
  }

  titre3(texte: string) {
    this.verifierEspace(14);
    const d = this.doc;
    d.setFont(POLICE, 'bold');
    d.setFontSize(10);
    d.setTextColor(...GRIS_FONCE);
    d.text(texte, MARGE.gauche, this.y);
    this.y += 5.5;
  }

  paragraphe(texte: string, options: { taille?: number; couleur?: Teinte; gras?: boolean; indentation?: number } = {}) {
    const { taille = 9.5, couleur = GRIS_TEXTE, gras = false, indentation = 0 } = options;
    const d = this.doc;
    d.setFont(POLICE, gras ? 'bold' : 'normal');
    d.setFontSize(taille);
    d.setTextColor(...couleur);
    const largeur = LARGEUR_UTILE - indentation;
    const lignes = d.splitTextToSize(texte, largeur) as string[];
    const interligne = taille * 0.52;
    for (const ligne of lignes) {
      this.verifierEspace(interligne + 2);
      d.text(ligne, MARGE.gauche + indentation, this.y);
      this.y += interligne;
    }
    this.y += 2.2;
  }

  liste(items: string[], options: { ordonnee?: boolean; taille?: number } = {}) {
    const { ordonnee = false, taille = 9.5 } = options;
    const d = this.doc;
    const retrait = 6;
    items.forEach((item, index) => {
      d.setFont(POLICE, 'normal');
      d.setFontSize(taille);
      const lignes = d.splitTextToSize(item, LARGEUR_UTILE - retrait) as string[];
      const interligne = taille * 0.52;
      this.verifierEspace(lignes.length * interligne + 2);
      const yDepart = this.y;
      if (ordonnee) {
        d.setFont(POLICE, 'bold');
        d.setTextColor(...this.couleur);
        d.text(`${index + 1}.`, MARGE.gauche, yDepart);
      } else {
        d.setFillColor(...this.couleur);
        d.circle(MARGE.gauche + 1.4, yDepart - 1.2, 0.7, 'F');
      }
      d.setFont(POLICE, 'normal');
      d.setTextColor(...GRIS_TEXTE);
      for (const ligne of lignes) {
        this.verifierEspace(interligne + 1);
        d.text(ligne, MARGE.gauche + retrait, this.y);
        this.y += interligne;
      }
      this.y += 1.2;
    });
    this.y += 1.5;
  }

  /* ------------------------------- encadrés ------------------------------- */

  encadre({
    etiquette,
    titre,
    texte,
    couleur,
  }: {
    etiquette: string;
    titre: string;
    texte: string;
    couleur: Teinte;
  }) {
    const d = this.doc;
    const padding = 4;
    d.setFont(POLICE, 'bold');
    d.setFontSize(9.5);
    const lignesTitre = d.splitTextToSize(titre, LARGEUR_UTILE - padding * 2 - 3) as string[];
    d.setFont(POLICE, 'normal');
    d.setFontSize(9);
    const lignesTexte = d.splitTextToSize(texte, LARGEUR_UTILE - padding * 2 - 3) as string[];
    const hauteur = padding * 2 + 4.5 + lignesTitre.length * 5 + lignesTexte.length * 4.7;

    this.verifierEspace(hauteur + 3);

    const fond = eclaircir(couleur, 0.9);
    d.setFillColor(...fond);
    d.roundedRect(MARGE.gauche, this.y - 3.5, LARGEUR_UTILE, hauteur, 2.5, 2.5, 'F');
    d.setFillColor(...couleur);
    d.rect(MARGE.gauche, this.y - 3.5, 1.4, hauteur, 'F');

    let yInterne = this.y + 1;
    d.setFont(POLICE, 'bold');
    d.setFontSize(6.8);
    d.setTextColor(...couleur);
    d.text(etiquette.toUpperCase(), MARGE.gauche + padding + 1.5, yInterne);
    yInterne += 4.8;

    d.setFontSize(9.5);
    d.setTextColor(...GRIS_FONCE);
    for (const ligne of lignesTitre) {
      d.text(ligne, MARGE.gauche + padding + 1.5, yInterne);
      yInterne += 5;
    }

    d.setFont(POLICE, 'normal');
    d.setFontSize(9);
    d.setTextColor(...GRIS_TEXTE);
    for (const ligne of lignesTexte) {
      d.text(ligne, MARGE.gauche + padding + 1.5, yInterne);
      yInterne += 4.7;
    }

    this.y += hauteur;
  }

  /* -------------------------------- tableaux ------------------------------ */

  tableau({ titre, colonnes, lignes }: { titre?: string; colonnes: string[]; lignes: string[][] }) {
    const d = this.doc;
    if (titre) {
      this.verifierEspace(12);
      d.setFont(POLICE, 'bold');
      d.setFontSize(9);
      d.setTextColor(...GRIS_FONCE);
      d.text(titre, MARGE.gauche, this.y);
      this.y += 5;
    }

    const nb = colonnes.length;
    // Largeurs proportionnelles au contenu, bornées pour rester lisibles.
    const poids = colonnes.map((colonne, i) => {
      const echantillons = [colonne, ...lignes.map((l) => l[i] ?? '')];
      const moyenne = echantillons.reduce((s, t) => s + t.length, 0) / echantillons.length;
      return Math.max(6, Math.min(40, moyenne));
    });
    const totalPoids = poids.reduce((s, p) => s + p, 0);
    const largeurs = poids.map((p) => (p / totalPoids) * LARGEUR_UTILE);

    const padding = 2;
    const dessinerEntete = () => {
      d.setFont(POLICE, 'bold');
      d.setFontSize(7.8);
      const hauteurs = colonnes.map(
        (c, i) => (d.splitTextToSize(c, largeurs[i] - padding * 2) as string[]).length,
      );
      const hauteurEntete = Math.max(...hauteurs) * 3.6 + padding * 2;
      this.verifierEspace(hauteurEntete + 10);
      d.setFillColor(...eclaircir(this.couleur, 0.88));
      d.rect(MARGE.gauche, this.y - 3, LARGEUR_UTILE, hauteurEntete, 'F');
      let x = MARGE.gauche;
      d.setTextColor(...GRIS_FONCE);
      colonnes.forEach((colonne, i) => {
        const morceaux = d.splitTextToSize(colonne, largeurs[i] - padding * 2) as string[];
        morceaux.forEach((morceau, j) => {
          d.text(morceau, x + padding, this.y + 0.6 + j * 3.6);
        });
        x += largeurs[i];
      });
      this.y += hauteurEntete;
    };

    dessinerEntete();

    d.setFont(POLICE, 'normal');
    d.setFontSize(7.6);
    lignes.forEach((ligne, index) => {
      const morceauxParColonne = colonnes.map(
        (_, i) => d.splitTextToSize(ligne[i] ?? '', largeurs[i] - padding * 2) as string[],
      );
      const nbLignes = Math.max(...morceauxParColonne.map((m) => m.length));
      const hauteur = nbLignes * 3.6 + padding * 2;

      if (this.espaceRestant() < hauteur + 6) {
        this.nouvellePage();
        dessinerEntete();
        d.setFont(POLICE, 'normal');
        d.setFontSize(7.6);
      }

      if (index % 2 === 1) {
        d.setFillColor(...GRIS_FOND);
        d.rect(MARGE.gauche, this.y - 3, LARGEUR_UTILE, hauteur, 'F');
      }

      let x = MARGE.gauche;
      morceauxParColonne.forEach((morceaux, i) => {
        d.setTextColor(...(i === 0 ? GRIS_FONCE : GRIS_TEXTE));
        d.setFont(POLICE, i === 0 ? 'bold' : 'normal');
        morceaux.forEach((morceau, j) => {
          d.text(morceau, x + padding, this.y + 0.6 + j * 3.6);
        });
        x += largeurs[i];
      });

      d.setDrawColor(...GRIS_TRAIT);
      d.setLineWidth(0.15);
      d.line(MARGE.gauche, this.y + hauteur - 3, A4.largeur - MARGE.droite, this.y + hauteur - 3);
      this.y += hauteur;
    });

    if (nb > 0) this.y += 4;
  }

  /* -------------------------------- divers -------------------------------- */

  separateur() {
    this.verifierEspace(8);
    this.doc.setDrawColor(...GRIS_TRAIT);
    this.doc.setLineWidth(0.25);
    this.doc.line(MARGE.gauche, this.y, A4.largeur - MARGE.droite, this.y);
    this.y += 6;
  }

  espace(hauteur = 4) {
    this.y += hauteur;
  }

  /** Insère une image bitmap (utilisée pour les schémas rastérisés). */
  image(dataUrl: string, largeurMm: number, hauteurMm: number) {
    this.verifierEspace(hauteurMm + 4);
    const x = MARGE.gauche + (LARGEUR_UTILE - largeurMm) / 2;
    this.doc.addImage(dataUrl, 'PNG', x, this.y - 2, largeurMm, hauteurMm, undefined, 'FAST');
    this.y += hauteurMm + 3;
  }
}
