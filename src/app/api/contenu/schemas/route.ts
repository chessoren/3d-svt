import { SCHEMAS } from '@/content';

export const dynamic = 'force-static';

export async function GET() {
  return Response.json({ schemas: SCHEMAS });
}
