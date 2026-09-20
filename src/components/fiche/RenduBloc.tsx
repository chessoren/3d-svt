import type { Bloc, VarianteEncadre } from '@/content/types';
import { getSchema } from '@/content';
import { VueSchema } from '@/components/schemas/VueSchema';
import {
  IconeAlerte,
  IconeAmpoule,
  IconeCible,
  IconeGraphique,
  IconeStethoscope,
} from '@/components/ui/Icones';

const ENCADRES: Record<
  VarianteEncadre,
  { couleur: string; fond: string; Icone: typeof IconeAlerte; etiquette: string }
> = {
  info: { couleur: 'var(--info)', fond: 'var(--info-doux)', Icone: IconeAmpoule, etiquette: 'À savoir' },
  attention: {
    couleur: 'var(--alerte)',
    fond: 'var(--alerte-doux)',
    Icone: IconeAlerte,
    etiquette: 'Attention',
  },
  astuce: { couleur: 'var(--violet)', fond: 'var(--violet-doux)', Icone: IconeAmpoule, etiquette: 'Astuce' },
  clinique: {
    couleur: 'var(--succes)',
    fond: 'var(--succes-doux)',
    Icone: IconeStethoscope,
    etiquette: 'Application clinique',
  },
  examen: {
    couleur: 'var(--attention)',
    fond: 'var(--attention-doux)',
    Icone: IconeCible,
    etiquette: 'Piège de concours',
  },
  chiffres: {
    couleur: 'var(--info)',
    fond: 'var(--info-doux)',
    Icone: IconeGraphique,
    etiquette: 'Chiffres à retenir',
  },
};

export function RenduBloc({ bloc }: { bloc: Bloc }) {
  switch (bloc.type) {
    case 'paragraphe':
      return (
        <p className="text-[15px] leading-[1.75]" style={{ color: 'var(--texte-2)' }}>
          {bloc.texte}
        </p>
      );

    case 'liste': {
      const Balise = bloc.ordonnee ? 'ol' : 'ul';
      return (
        <Balise className="flex flex-col gap-2 pl-1">
          {bloc.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-[1.7]" style={{ color: 'var(--texte-2)' }}>
              {bloc.ordonnee ? (
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold"
                  style={{ background: 'var(--accent-doux)', color: 'var(--accent)' }}
                >
                  {i + 1}
                </span>
              ) : (
                <span
                  className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: 'var(--accent)' }}
                  aria-hidden="true"
                />
              )}
              <span>{item}</span>
            </li>
          ))}
        </Balise>
      );
    }

    case 'definition':
      return (
        <div
          className="eviter-coupure rounded-2xl border-l-[3px] py-3 pr-4 pl-4"
          style={{ background: 'var(--surface-2)', borderLeftColor: 'var(--accent)' }}
        >
          <div className="text-[14px] font-semibold tracking-tight">{bloc.terme}</div>
          <p className="mt-1.5 text-[14px] leading-[1.7]" style={{ color: 'var(--texte-2)' }}>
            {bloc.definition}
          </p>
        </div>
      );

    case 'tableau':
      return (
        <figure className="eviter-coupure">
          {bloc.titre && (
            <figcaption className="mb-2 text-[12.5px] font-semibold" style={{ color: 'var(--texte-2)' }}>
              {bloc.titre}
            </figcaption>
          )}
          <div className="defilement-fin overflow-x-auto">
            <table className="tableau-fiche">
              <thead>
                <tr>
                  {bloc.colonnes.map((colonne, i) => (
                    <th key={i} scope="col">
                      {colonne}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bloc.lignes.map((ligne, i) => (
                  <tr key={i}>
                    {ligne.map((cellule, j) => (
                      <td key={j} style={j === 0 ? { fontWeight: 550, color: 'var(--texte)' } : undefined}>
                        {cellule}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </figure>
      );

    case 'encadre': {
      const { couleur, fond, Icone, etiquette } = ENCADRES[bloc.variante];
      return (
        <aside className="eviter-coupure rounded-2xl p-4" style={{ background: fond }}>
          <div className="mb-1.5 flex items-center gap-2">
            <Icone width={16} height={16} style={{ color: couleur }} />
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase" style={{ color: couleur }}>
              {etiquette}
            </span>
          </div>
          <div className="text-[14.5px] font-semibold tracking-tight">{bloc.titre}</div>
          <p className="mt-1.5 text-[14px] leading-[1.7]" style={{ color: 'var(--texte-2)' }}>
            {bloc.texte}
          </p>
        </aside>
      );
    }

    case 'formule':
      return (
        <div className="eviter-coupure carte-plate px-4 py-4 text-center">
          <div
            className="text-[16px] leading-relaxed font-semibold tracking-tight"
            style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
          >
            {bloc.expression}
          </div>
          {bloc.unites && (
            <div className="mt-1.5 text-[12px]" style={{ color: 'var(--texte-3)' }}>
              Unités : {bloc.unites}
            </div>
          )}
          {bloc.legende && (
            <p className="mx-auto mt-2 max-w-2xl text-[13px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
              {bloc.legende}
            </p>
          )}
        </div>
      );

    case 'etapes':
      return (
        <div className="eviter-coupure">
          {bloc.titre && <div className="mb-3 text-[13px] font-semibold">{bloc.titre}</div>}
          <ol className="flex flex-col gap-3">
            {bloc.etapes.map((etape, i) => (
              <li key={i} className="flex gap-3.5">
                <div className="flex flex-col items-center">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold"
                    style={{ background: 'var(--accent)', color: 'var(--accent-contraste)' }}
                  >
                    {i + 1}
                  </span>
                  {i < bloc.etapes.length - 1 && (
                    <span className="mt-1 w-px flex-1" style={{ background: 'var(--bordure)' }} aria-hidden="true" />
                  )}
                </div>
                <div className="pb-1">
                  <div className="text-[14px] font-semibold tracking-tight">{etape.titre}</div>
                  <p className="mt-1 text-[14px] leading-[1.7]" style={{ color: 'var(--texte-2)' }}>
                    {etape.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );

    case 'comparaison':
      return (
        <div className="eviter-coupure">
          {bloc.titre && <div className="mb-3 text-[13px] font-semibold">{bloc.titre}</div>}
          <div className="grid gap-3 sm:grid-cols-2">
            {[bloc.gauche, bloc.droite].map((colonne, i) => (
              <div key={i} className="carte-plate p-4">
                <div
                  className="mb-2.5 text-[13.5px] font-semibold tracking-tight"
                  style={{ color: i === 0 ? 'var(--info)' : 'var(--violet)' }}
                >
                  {colonne.titre}
                </div>
                <ul className="flex flex-col gap-1.5">
                  {colonne.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-[13.5px] leading-[1.65]"
                      style={{ color: 'var(--texte-2)' }}
                    >
                      <span
                        className="mt-[8px] h-1 w-1 shrink-0 rounded-full"
                        style={{ background: i === 0 ? 'var(--info)' : 'var(--violet)' }}
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );

    case 'schema': {
      const schema = getSchema(bloc.schemaId);
      if (!schema) return null;
      return (
        <figure className="eviter-coupure">
          <VueSchema schema={schema} compact />
          {bloc.legende && (
            <figcaption className="mt-2 text-center text-[12.5px]" style={{ color: 'var(--texte-3)' }}>
              {bloc.legende}
            </figcaption>
          )}
        </figure>
      );
    }

    default:
      return null;
  }
}
