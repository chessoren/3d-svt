import { FICHES, SCHEMAS, UES, schemasDeFiche } from '@/content';

export const dynamic = 'force-static';

/** Archive complète du contenu, utilisée par l'export « tout télécharger ». */
export async function GET() {
  return Response.json({
    ues: UES,
    fiches: FICHES,
    schemas: SCHEMAS,
    schemasParFiche: Object.fromEntries(FICHES.map((f) => [f.id, schemasDeFiche(f).map((s) => s.id)])),
  });
}
