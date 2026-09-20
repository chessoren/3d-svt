'use client';

import { useCallback, useEffect, useState } from 'react';

/**
 * Suivi de progression local. Tout est stocké dans le navigateur : aucune donnée
 * ne quitte l'appareil, le site fonctionne sans compte et sans serveur.
 */

const CLE = 'medicapsule-progression-v1';

/** Intervalles du système de Leitner, en jours, indexés par numéro de boîte. */
export const INTERVALLES_JOURS = [0, 1, 2, 4, 8, 16, 32];

export interface EtatCarte {
  boite: number;
  prochaine: number;
  vues: number;
  reussites: number;
}

export interface ResultatQCM {
  score: number;
  total: number;
  date: number;
}

export interface Progression {
  fichesLues: Record<string, number>;
  cartes: Record<string, EtatCarte>;
  qcm: Record<string, ResultatQCM>;
  favoris: string[];
}

const VIDE: Progression = { fichesLues: {}, cartes: {}, qcm: {}, favoris: [] };

function lire(): Progression {
  if (typeof window === 'undefined') return VIDE;
  try {
    const brut = window.localStorage.getItem(CLE);
    if (!brut) return VIDE;
    const objet = JSON.parse(brut) as Partial<Progression>;
    return {
      fichesLues: objet.fichesLues ?? {},
      cartes: objet.cartes ?? {},
      qcm: objet.qcm ?? {},
      favoris: objet.favoris ?? [],
    };
  } catch {
    return VIDE;
  }
}

function ecrire(valeur: Progression) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(CLE, JSON.stringify(valeur));
    window.dispatchEvent(new CustomEvent('medicapsule-progression'));
  } catch {
    /* quota atteint ou stockage refusé : la session continue sans persistance */
  }
}

export function useProgression() {
  const [progression, setProgression] = useState<Progression>(VIDE);
  const [pret, setPret] = useState(false);

  useEffect(() => {
    setProgression(lire());
    setPret(true);
    const rafraichir = () => setProgression(lire());
    window.addEventListener('medicapsule-progression', rafraichir);
    window.addEventListener('storage', rafraichir);
    return () => {
      window.removeEventListener('medicapsule-progression', rafraichir);
      window.removeEventListener('storage', rafraichir);
    };
  }, []);

  const modifier = useCallback((transformation: (p: Progression) => Progression) => {
    const suivant = transformation(lire());
    ecrire(suivant);
    setProgression(suivant);
  }, []);

  const marquerFicheLue = useCallback(
    (ficheId: string) => {
      modifier((p) => ({ ...p, fichesLues: { ...p.fichesLues, [ficheId]: Date.now() } }));
    },
    [modifier],
  );

  const oublierFiche = useCallback(
    (ficheId: string) => {
      modifier((p) => {
        const fichesLues = { ...p.fichesLues };
        delete fichesLues[ficheId];
        return { ...p, fichesLues };
      });
    },
    [modifier],
  );

  const noterCarte = useCallback(
    (carteId: string, reussie: boolean) => {
      modifier((p) => {
        const actuel: EtatCarte = p.cartes[carteId] ?? { boite: 0, prochaine: 0, vues: 0, reussites: 0 };
        const boite = reussie
          ? Math.min(actuel.boite + 1, INTERVALLES_JOURS.length - 1)
          : 0;
        const prochaine = Date.now() + INTERVALLES_JOURS[boite] * 24 * 3600 * 1000;
        return {
          ...p,
          cartes: {
            ...p.cartes,
            [carteId]: {
              boite,
              prochaine,
              vues: actuel.vues + 1,
              reussites: actuel.reussites + (reussie ? 1 : 0),
            },
          },
        };
      });
    },
    [modifier],
  );

  const enregistrerQCM = useCallback(
    (cle: string, score: number, total: number) => {
      modifier((p) => ({ ...p, qcm: { ...p.qcm, [cle]: { score, total, date: Date.now() } } }));
    },
    [modifier],
  );

  const basculerFavori = useCallback(
    (id: string) => {
      modifier((p) => ({
        ...p,
        favoris: p.favoris.includes(id) ? p.favoris.filter((f) => f !== id) : [...p.favoris, id],
      }));
    },
    [modifier],
  );

  const reinitialiser = useCallback(() => {
    ecrire(VIDE);
    setProgression(VIDE);
  }, []);

  return {
    progression,
    pret,
    marquerFicheLue,
    oublierFiche,
    noterCarte,
    enregistrerQCM,
    basculerFavori,
    reinitialiser,
  };
}

/** Cartes dont la date de révision est échue (ou jamais vues). */
export function cartesAReviser(progression: Progression, ids: string[]): string[] {
  const maintenant = Date.now();
  return ids.filter((id) => {
    const etat = progression.cartes[id];
    return !etat || etat.prochaine <= maintenant;
  });
}

export function statistiquesCartes(progression: Progression, ids: string[]) {
  let acquises = 0;
  let enCours = 0;
  const maintenant = Date.now();
  let dues = 0;
  for (const id of ids) {
    const etat = progression.cartes[id];
    if (!etat) {
      dues += 1;
      continue;
    }
    if (etat.boite >= 4) acquises += 1;
    else enCours += 1;
    if (etat.prochaine <= maintenant) dues += 1;
  }
  return { acquises, enCours, dues, nouvelles: ids.length - acquises - enCours, total: ids.length };
}
