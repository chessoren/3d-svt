import { UES, UE_PAR_ID, fichesDeUE, schemasDeFiche, schemasDeUE } from '@/content';
import type { UEId } from '@/content/types';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return UES.map((ue) => ({ ue: ue.id }));
}

export async function GET(_requete: Request, { params }: { params: Promise<{ ue: string }> }) {
  const { ue: id } = await params;
  const ue = UE_PAR_ID[id as UEId];
  if (!ue) return new Response('Matière introuvable', { status: 404 });
  const fiches = fichesDeUE(ue.id);
  return Response.json({
    ue,
    fiches,
    schemas: schemasDeUE(ue.id),
    schemasParFiche: Object.fromEntries(fiches.map((f) => [f.id, schemasDeFiche(f).map((s) => s.id)])),
  });
}
