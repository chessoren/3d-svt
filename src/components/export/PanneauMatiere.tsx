'use client';

import type { UE } from '@/content/types';
import type { FlashcardAvecContexte, QCMAvecContexte, Schema } from '@/content';
import {
  BoutonExportFlashcards,
  BoutonExportQCM,
  BoutonExportSchemas,
  BoutonsExportUE,
} from './BoutonsExport';

export function PanneauMatiere({
  ue,
  nbFiches,
  cartes,
  questions,
  schemas,
}: {
  ue: UE;
  nbFiches: number;
  cartes: FlashcardAvecContexte[];
  questions: QCMAvecContexte[];
  schemas: Schema[];
}) {
  return (
    <div className="carte overflow-hidden">
      <div className="flex flex-wrap items-center gap-3 px-5 py-4" style={{ background: ue.couleurClaire }}>
        <span
          className="flex h-9 items-center rounded-xl px-2.5 text-[11.5px] font-semibold"
          style={{ background: ue.couleur, color: '#fff' }}
        >
          {ue.code}
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[15px] font-semibold tracking-tight" style={{ color: ue.couleur }}>
            {ue.titre}
          </div>
          <div className="text-[11.5px]" style={{ color: 'var(--texte-2)' }}>
            {nbFiches} fiches · {cartes.length} flashcards · {questions.length} QCM · {schemas.length} schémas
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 p-4">
        <BoutonsExportUE ueId={ue.id} />
        <BoutonExportFlashcards cartes={cartes} titre={ue.titre} couleur={ue.couleur} libelle="Flashcards à découper" />
        <BoutonExportQCM questions={questions} titre={ue.titre} couleur={ue.couleur} />
        {schemas.length > 0 && <BoutonExportSchemas schemas={schemas} titre={ue.titre} couleur={ue.couleur} />}
      </div>
    </div>
  );
}
