import { FICHES, FLASHCARDS, QCMS, SCHEMAS, slugDeFiche } from '@/content';
import type { Bloc } from '@/content/types';

export const dynamic = 'force-static';

function texteDuBloc(bloc: Bloc): string {
  switch (bloc.type) {
    case 'paragraphe':
      return bloc.texte;
    case 'liste':
      return bloc.items.join(' ');
    case 'definition':
      return `${bloc.terme} ${bloc.definition}`;
    case 'tableau':
      return [bloc.titre ?? '', ...bloc.colonnes, ...bloc.lignes.flat()].join(' ');
    case 'encadre':
      return `${bloc.titre} ${bloc.texte}`;
    case 'formule':
      return `${bloc.expression} ${bloc.legende ?? ''}`;
    case 'etapes':
      return [bloc.titre ?? '', ...bloc.etapes.flatMap((e) => [e.titre, e.detail])].join(' ');
    case 'comparaison':
      return [
        bloc.titre ?? '',
        bloc.gauche.titre,
        ...bloc.gauche.points,
        bloc.droite.titre,
        ...bloc.droite.points,
      ].join(' ');
    default:
      return '';
  }
}

/** Index de recherche : un enregistrement par élément consultable du site. */
export async function GET() {
  const entrees = [
    ...FICHES.map((fiche) => ({
      type: 'fiche' as const,
      id: fiche.id,
      ue: fiche.ue,
      titre: fiche.titre,
      sousTitre: fiche.sousTitre,
      chapitre: fiche.chapitre,
      url: `/fiches/${fiche.ue}/${slugDeFiche(fiche)}`,
      texte: [
        fiche.titre,
        fiche.sousTitre,
        fiche.motsCles.join(' '),
        fiche.objectifs.join(' '),
        fiche.pointsCles.join(' '),
        fiche.erreursFrequentes.join(' '),
        fiche.sections.map((s) => `${s.titre} ${s.blocs.map(texteDuBloc).join(' ')}`).join(' '),
      ].join(' '),
    })),
    ...SCHEMAS.map((schema) => ({
      type: 'schema' as const,
      id: schema.id,
      ue: schema.ue,
      titre: schema.titre,
      sousTitre: schema.description,
      chapitre: schema.categorie,
      url: `/schemas/${schema.id}`,
      texte: [schema.titre, schema.description, schema.motsCles.join(' '), schema.legendes.map((l) => l.texte).join(' ')].join(' '),
    })),
    ...FLASHCARDS.map((carte) => ({
      type: 'flashcard' as const,
      id: carte.id,
      ue: carte.ue,
      titre: carte.recto,
      sousTitre: carte.verso,
      chapitre: carte.ficheTitre,
      url: `/flashcards/${carte.ue}`,
      texte: `${carte.recto} ${carte.verso} ${carte.tags.join(' ')}`,
    })),
    ...QCMS.map((question) => ({
      type: 'qcm' as const,
      id: question.id,
      ue: question.ue,
      titre: question.enonce,
      sousTitre: question.correction,
      chapitre: question.ficheTitre,
      url: `/qcm/${question.ue}`,
      texte: [question.enonce, ...question.propositions.map((p) => `${p.texte} ${p.justification}`), question.correction].join(' '),
    })),
  ];

  return Response.json({ entrees });
}
