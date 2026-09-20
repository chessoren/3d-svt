import type { MetadataRoute } from 'next';
import { FICHES, SCHEMAS, UES, slugDeFiche } from '@/content';

const BASE = process.env.NEXT_PUBLIC_URL_SITE ?? 'https://medicapsule.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const pagesFixes = [
    '',
    '/fiches',
    '/flashcards',
    '/schemas',
    '/qcm',
    '/anatomie-3d',
    '/recherche',
    '/telechargements',
  ].map((chemin) => ({
    url: `${BASE}${chemin}`,
    changeFrequency: 'monthly' as const,
    priority: chemin === '' ? 1 : 0.8,
  }));

  const pagesMatieres = UES.flatMap((ue) => [
    { url: `${BASE}/fiches/${ue.id}`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE}/flashcards/${ue.id}`, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${BASE}/qcm/${ue.id}`, changeFrequency: 'monthly' as const, priority: 0.5 },
  ]);

  const pagesFiches = FICHES.map((fiche) => ({
    url: `${BASE}/fiches/${fiche.ue}/${slugDeFiche(fiche)}`,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  const pagesSchemas = SCHEMAS.map((schema) => ({
    url: `${BASE}/schemas/${schema.id}`,
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...pagesFixes, ...pagesMatieres, ...pagesFiches, ...pagesSchemas];
}
