import { FICHES, getFiche, getUE, schemasDeFiche } from '@/content';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return FICHES.map((fiche) => ({ id: fiche.id }));
}

export async function GET(_requete: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const fiche = getFiche(id);
  if (!fiche) return new Response('Fiche introuvable', { status: 404 });
  return Response.json({ fiche, ue: getUE(fiche.ue), schemas: schemasDeFiche(fiche) });
}
