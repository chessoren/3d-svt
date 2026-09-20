'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import type { QCMAvecContexte } from '@/content';
import { useProgression } from '@/lib/progression';
import { BoutonExportQCM } from '@/components/export/BoutonsExport';
import { AnneauProgression } from '@/components/ui/Primitives';
import { IconeCheck, IconeCroix, IconeFleche, IconeRotation } from '@/components/ui/Icones';

type Mode = 'entrainement' | 'examen';

interface Reponse {
  lettres: Set<string>;
  validee: boolean;
  juste: boolean;
}

export function SessionQCM({
  questions,
  titre,
  couleur,
  cleProgression,
}: {
  questions: QCMAvecContexte[];
  titre: string;
  couleur: string;
  cleProgression: string;
}) {
  const parametres = useSearchParams();
  const ficheFiltre = parametres.get('fiche');
  const { enregistrerQCM } = useProgression();

  const [mode, setMode] = useState<Mode>('entrainement');
  const [index, setIndex] = useState(0);
  const [reponses, setReponses] = useState<Record<string, Reponse>>({});
  const [termine, setTermine] = useState(false);
  const [melange, setMelange] = useState(0);
  const [nombreVoulu, setNombreVoulu] = useState<number | 'tout'>('tout');

  const corpus = useMemo(
    () => (ficheFiltre ? questions.filter((q) => q.ficheId === ficheFiltre) : questions),
    [questions, ficheFiltre],
  );

  const serie = useMemo(() => {
    const melangees = [...corpus];
    let graine = melange * 7919 + 104729;
    for (let i = melangees.length - 1; i > 0; i -= 1) {
      graine = (graine * 9301 + 49297) % 233280;
      const j = Math.floor((graine / 233280) * (i + 1));
      [melangees[i], melangees[j]] = [melangees[j], melangees[i]];
    }
    return nombreVoulu === 'tout' ? melangees : melangees.slice(0, nombreVoulu);
  }, [corpus, melange, nombreVoulu]);

  const question = serie[index];
  const reponse = question ? reponses[question.id] : undefined;

  const basculerLettre = useCallback(
    (lettre: string) => {
      if (!question) return;
      setReponses((etat) => {
        const actuelle = etat[question.id] ?? { lettres: new Set<string>(), validee: false, juste: false };
        if (actuelle.validee) return etat;
        const lettres = new Set(actuelle.lettres);
        if (lettres.has(lettre)) lettres.delete(lettre);
        else lettres.add(lettre);
        return { ...etat, [question.id]: { ...actuelle, lettres } };
      });
    },
    [question],
  );

  const valider = useCallback(() => {
    if (!question) return;
    setReponses((etat) => {
      const actuelle = etat[question.id] ?? { lettres: new Set<string>(), validee: false, juste: false };
      const attendues = new Set(question.propositions.filter((p) => p.vraie).map((p) => p.lettre));
      const juste =
        attendues.size === actuelle.lettres.size &&
        [...attendues].every((lettre) => actuelle.lettres.has(lettre));
      return { ...etat, [question.id]: { ...actuelle, validee: true, juste } };
    });
  }, [question]);

  const suivante = useCallback(() => {
    if (index < serie.length - 1) {
      setIndex((i) => i + 1);
    } else {
      // Fin de série : en mode examen, tout est corrigé d'un coup.
      setReponses((etat) => {
        const suivant = { ...etat };
        for (const q of serie) {
          const actuelle = suivant[q.id] ?? { lettres: new Set<string>(), validee: false, juste: false };
          const attendues = new Set(q.propositions.filter((p) => p.vraie).map((p) => p.lettre));
          const juste =
            attendues.size === actuelle.lettres.size &&
            [...attendues].every((lettre) => actuelle.lettres.has(lettre));
          suivant[q.id] = { ...actuelle, validee: true, juste };
        }
        return suivant;
      });
      setTermine(true);
    }
  }, [index, serie]);

  const score = useMemo(
    () => serie.filter((q) => reponses[q.id]?.juste).length,
    [serie, reponses],
  );

  useEffect(() => {
    if (termine && serie.length > 0) {
      enregistrerQCM(cleProgression, score, serie.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termine]);

  useEffect(() => {
    setIndex(0);
    setReponses({});
    setTermine(false);
  }, [mode, nombreVoulu, melange, ficheFiltre]);

  const recommencer = () => {
    setReponses({});
    setIndex(0);
    setTermine(false);
    setMelange((m) => m + 1);
  };

  if (serie.length === 0) {
    return (
      <div className="carte px-6 py-14 text-center">
        <div className="text-base font-semibold">Aucun QCM disponible</div>
        <p className="mx-auto mt-2 max-w-md text-sm" style={{ color: 'var(--texte-2)' }}>
          Cette sélection ne contient pas encore de question.
        </p>
      </div>
    );
  }

  if (termine) {
    const pourcentage = (score / serie.length) * 100;
    return (
      <div className="flex flex-col gap-4">
        <div className="carte flex flex-col items-center gap-4 p-8 text-center">
          <AnneauProgression valeur={pourcentage} taille={140} sousLibelle="de bonnes réponses" couleur={couleur} />
          <div>
            <div className="text-[20px] font-semibold tracking-tight">
              {score} bonne{score > 1 ? 's' : ''} réponse{score > 1 ? 's' : ''} sur {serie.length}
            </div>
            <p className="mt-1.5 text-[13.5px]" style={{ color: 'var(--texte-2)' }}>
              {pourcentage >= 80
                ? 'Excellent niveau de maîtrise sur cette sélection.'
                : pourcentage >= 50
                  ? 'Bonne base ; reprenez les justifications des questions manquées.'
                  : 'Revoyez la fiche correspondante avant de refaire la série.'}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <button type="button" onClick={recommencer} className="bouton bouton-primaire text-[13px]">
              <IconeRotation width={15} height={15} />
              Refaire une série
            </button>
            <Link href="/qcm" className="bouton bouton-secondaire text-[13px]">
              Changer de matière
            </Link>
          </div>
        </div>

        <h2 className="mt-2 text-[17px] font-semibold tracking-tight">Correction détaillée</h2>
        {serie.map((q, i) => (
          <CorrectionQCM key={q.id} question={q} numero={i + 1} reponse={reponses[q.id]} couleur={couleur} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {(['entrainement', 'examen'] as Mode[]).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setMode(option)}
              className="capsule"
              style={{
                background: mode === option ? 'var(--surface)' : 'transparent',
                color: mode === option ? 'var(--texte)' : 'var(--texte-3)',
                boxShadow: mode === option ? 'var(--ombre-carte)' : 'none',
                border: `1px solid ${mode === option ? 'var(--bordure)' : 'transparent'}`,
              }}
            >
              {option === 'entrainement' ? 'Entraînement corrigé' : 'Mode examen'}
            </button>
          ))}
          <select
            value={String(nombreVoulu)}
            onChange={(e) => setNombreVoulu(e.target.value === 'tout' ? 'tout' : Number(e.target.value))}
            className="capsule capsule-neutre ml-auto px-3 py-1.5 text-[12px]"
            aria-label="Nombre de questions"
          >
            <option value="tout">Toutes ({corpus.length})</option>
            <option value="10">10 questions</option>
            <option value="20">20 questions</option>
            <option value="40">40 questions</option>
          </select>
        </div>

        <div className="carte p-6 sm:p-7">
          <div className="flex items-center justify-between gap-3">
            <span
              className="capsule px-2.5 py-1 text-[11px] font-semibold"
              style={{ background: `color-mix(in srgb, ${couleur} 13%, transparent)`, color: couleur }}
            >
              Question {index + 1} / {serie.length}
            </span>
            <span className="truncate text-[11.5px]" style={{ color: 'var(--texte-3)', maxWidth: '55%' }}>
              {question.ficheTitre}
            </span>
          </div>

          <h2 className="mt-4 text-[17px] leading-snug font-semibold tracking-tight">{question.enonce}</h2>
          <p className="mt-1.5 text-[12px]" style={{ color: 'var(--texte-3)' }}>
            Une ou plusieurs propositions peuvent être exactes.
          </p>

          <div className="mt-4 flex flex-col gap-2">
            {question.propositions.map((proposition) => {
              const choisie = reponse?.lettres.has(proposition.lettre) ?? false;
              const corrigee = reponse?.validee && mode === 'entrainement';
              const juste = proposition.vraie;

              let fond = 'var(--surface-2)';
              let bordure = 'var(--bordure)';
              let teinte = 'var(--texte)';
              if (corrigee) {
                if (juste) {
                  fond = 'var(--succes-doux)';
                  bordure = 'var(--succes)';
                  teinte = 'var(--texte)';
                } else if (choisie) {
                  fond = 'var(--alerte-doux)';
                  bordure = 'var(--alerte)';
                }
              } else if (choisie) {
                fond = 'var(--accent-doux)';
                bordure = 'var(--accent)';
              }

              return (
                <button
                  key={proposition.lettre}
                  type="button"
                  onClick={() => basculerLettre(proposition.lettre)}
                  disabled={reponse?.validee}
                  className="flex items-start gap-3 rounded-2xl border px-4 py-3 text-left transition-all"
                  style={{ background: fond, borderColor: bordure, color: teinte }}
                >
                  <span
                    className="mt-px flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[12px] font-semibold"
                    style={{
                      background: choisie || (corrigee && juste) ? bordure : 'var(--surface)',
                      color: choisie || (corrigee && juste) ? '#fff' : 'var(--texte-2)',
                    }}
                  >
                    {proposition.lettre}
                  </span>
                  <span className="flex-1 text-[14px] leading-relaxed">{proposition.texte}</span>
                  {corrigee && (
                    <span className="mt-0.5 shrink-0" style={{ color: juste ? 'var(--succes)' : 'var(--alerte)' }}>
                      {juste ? <IconeCheck width={16} height={16} /> : choisie ? <IconeCroix width={16} height={16} /> : null}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {reponse?.validee && mode === 'entrainement' && (
            <div className="mt-4 flex flex-col gap-2.5">
              <div
                className="rounded-2xl p-4"
                style={{ background: reponse.juste ? 'var(--succes-doux)' : 'var(--alerte-doux)' }}
              >
                <div
                  className="text-[13px] font-semibold"
                  style={{ color: reponse.juste ? 'var(--succes)' : 'var(--alerte)' }}
                >
                  {reponse.juste ? 'Réponse exacte' : 'Réponse incomplète ou fausse'}
                </div>
                <p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
                  {question.correction}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                {question.propositions.map((proposition) => (
                  <div key={proposition.lettre} className="flex gap-2.5 text-[13px] leading-relaxed">
                    <span
                      className="font-semibold"
                      style={{ color: proposition.vraie ? 'var(--succes)' : 'var(--alerte)' }}
                    >
                      {proposition.lettre}
                    </span>
                    <span style={{ color: 'var(--texte-2)' }}>{proposition.justification}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-5 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="bouton bouton-fantome text-[13px] disabled:opacity-40"
            >
              Précédente
            </button>
            {mode === 'entrainement' && !reponse?.validee ? (
              <button
                type="button"
                onClick={valider}
                disabled={!reponse || reponse.lettres.size === 0}
                className="bouton bouton-primaire text-[13px]"
              >
                Valider
              </button>
            ) : (
              <button type="button" onClick={suivante} className="bouton bouton-primaire text-[13px]">
                {index === serie.length - 1 ? 'Terminer la série' : 'Question suivante'}
                <IconeFleche width={15} height={15} />
              </button>
            )}
          </div>
        </div>

        {/* Fil de progression */}
        <div className="flex flex-wrap gap-1">
          {serie.map((q, i) => {
            const etat = reponses[q.id];
            const couleurPastille = etat?.validee
              ? etat.juste
                ? 'var(--succes)'
                : 'var(--alerte)'
              : etat?.lettres.size
                ? 'var(--accent)'
                : 'var(--surface-3)';
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Aller à la question ${i + 1}`}
                className="h-2 flex-1 rounded-full transition-all"
                style={{
                  background: couleurPastille,
                  minWidth: 8,
                  outline: i === index ? '2px solid var(--texte)' : 'none',
                  outlineOffset: 2,
                }}
              />
            );
          })}
        </div>
      </div>

      <aside className="flex flex-col gap-3">
        <div className="carte p-5">
          <h2 className="text-[14px] font-semibold tracking-tight">{titre}</h2>
          <p className="mt-1 text-[12px]" style={{ color: 'var(--texte-3)' }}>
            {corpus.length} questions disponibles
          </p>
          <dl className="mt-4 flex flex-col gap-2 text-[12.5px]">
            <div className="flex justify-between">
              <dt style={{ color: 'var(--texte-2)' }}>Répondues</dt>
              <dd className="font-semibold tabular-nums">
                {serie.filter((q) => reponses[q.id]?.validee).length} / {serie.length}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt style={{ color: 'var(--texte-2)' }}>Exactes</dt>
              <dd className="font-semibold tabular-nums" style={{ color: 'var(--succes)' }}>
                {score}
              </dd>
            </div>
          </dl>
        </div>

        <div className="carte p-5">
          <div className="text-[13px] font-semibold">Méthode</div>
          <p className="mt-1.5 text-[12.5px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
            En QCM de concours, chaque proposition se juge indépendamment. Lisez-les toutes avant de
            trancher, et méfiez-vous des adverbes absolus : « toujours », « jamais », « uniquement ».
          </p>
        </div>

        <BoutonExportQCM questions={corpus} titre={titre} couleur={couleur} />
      </aside>
    </div>
  );
}

function CorrectionQCM({
  question,
  numero,
  reponse,
  couleur,
}: {
  question: QCMAvecContexte;
  numero: number;
  reponse?: Reponse;
  couleur: string;
}) {
  const justes = question.propositions.filter((p) => p.vraie).map((p) => p.lettre);
  return (
    <div className="carte p-5">
      <div className="flex items-start gap-3">
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-[12px] font-semibold"
          style={{
            background: reponse?.juste ? 'var(--succes-doux)' : 'var(--alerte-doux)',
            color: reponse?.juste ? 'var(--succes)' : 'var(--alerte)',
          }}
        >
          {numero}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-[14.5px] leading-snug font-semibold">{question.enonce}</h3>
          <div className="mt-2 text-[12.5px]" style={{ color: 'var(--texte-3)' }}>
            Réponses exactes : <span style={{ color: couleur, fontWeight: 600 }}>{justes.join(', ')}</span>
            {reponse && reponse.lettres.size > 0 && (
              <>
                {' · '}Votre réponse : {[...reponse.lettres].sort().join(', ')}
              </>
            )}
          </div>
          <div className="mt-3 flex flex-col gap-1.5">
            {question.propositions.map((proposition) => (
              <div key={proposition.lettre} className="flex gap-2.5 text-[13px] leading-relaxed">
                <span
                  className="font-semibold"
                  style={{ color: proposition.vraie ? 'var(--succes)' : 'var(--alerte)' }}
                >
                  {proposition.lettre}
                </span>
                <span style={{ color: 'var(--texte-2)' }}>
                  {proposition.texte} — {proposition.justification}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
