'use client';

import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, ContactShadows } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { MODELE, REGIONS, SYSTEMES, SYSTEME_PAR_ID } from '@/lib/anatomie/modele';
import { construireGeometrie, centreDe, rayonDe } from '@/lib/anatomie/constructeurs';
import type { PieceAnatomique, SystemeAnatomique } from '@/lib/anatomie/types';
import { EclairageStudio, PiloteCamera, Scene3D, type EtatCoupe } from './Scene3D';
import {
  IconeCouches,
  IconeCroix,
  IconeFleche,
  IconeLoupePlus,
  IconeRecherche,
  IconeRotation,
} from '@/components/ui/Icones';

const HAUTEUR_CORPS = 1.75;

/**
 * Champ de vision vertical de la caméra, en degrés. La distance des vues
 * prédéfinies en découle : pour cadrer une hauteur H, il faut se placer à
 * H / (2 x tan(fov / 2)). On vise 2,25 m de hauteur utile pour un corps de
 * 1,75 m : la marge laisse respirer la silhouette et évite que les pieds
 * passent sous les réglages posés en bas du canevas.
 */
const CHAMP_DE_VISION = 34;
const DISTANCE_PLEIN_CORPS =
  2.25 / (2 * Math.tan((CHAMP_DE_VISION / 2) * (Math.PI / 180)));

/** Le regard vise légèrement sous le centre du corps pour remonter la silhouette. */
const REGARD = new THREE.Vector3(0, -0.06, 0);

/** Place la caméra à la distance de cadrage, dans la direction demandée. */
function vue(x: number, y: number, z: number, facteur = 1) {
  return new THREE.Vector3(x, y, z).normalize().multiplyScalar(DISTANCE_PLEIN_CORPS * facteur);
}

const POSITION_INITIALE = vue(0.62, 0.2, 0.78, 0.94);

const VUES = [
  { id: 'face', nom: 'Face', position: vue(0, 0.04, 1) },
  { id: 'dos', nom: 'Dos', position: vue(0, 0.04, -1) },
  { id: 'profil', nom: 'Profil', position: vue(1, 0.04, 0.001) },
  { id: 'trois-quarts', nom: 'Trois quarts', position: POSITION_INITIALE },
  { id: 'dessus', nom: 'Dessus', position: vue(0.001, 1, 0.05) },
];

const AXES_COUPE = [
  { id: 'x' as const, nom: 'Sagittal' },
  { id: 'y' as const, nom: 'Transversal' },
  { id: 'z' as const, nom: 'Frontal' },
];

function normaliser(texte: string) {
  return texte
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}

export function Visionneuse3D({ urlsFiches }: { urlsFiches: Record<string, string> }) {
  const [systemesActifs, setSystemesActifs] = useState<Set<SystemeAnatomique>>(
    () => new Set(SYSTEMES.filter((s) => s.actifParDefaut).map((s) => s.id)),
  );
  const [opacites, setOpacites] = useState<Record<SystemeAnatomique, number>>(
    () => Object.fromEntries(SYSTEMES.map((s) => [s.id, 1])) as Record<SystemeAnatomique, number>,
  );
  const [selection, setSelection] = useState<string | null>(null);
  const [survol, setSurvol] = useState<string | null>(null);
  const [isolement, setIsolement] = useState(false);
  const [modeDetail, setModeDetail] = useState(false);
  const [recherche, setRecherche] = useState('');
  const [region, setRegion] = useState<string>('tout');
  const [coupe, setCoupe] = useState<EtatCoupe>({ axe: null, position: 0, inverse: false });
  const [panneauOuvert, setPanneauOuvert] = useState(false);
  const [cibleCamera, setCibleCamera] = useState<{ position: THREE.Vector3; rayon: number } | null>(null);
  const [vueDemandee, setVueDemandee] = useState<{ position: THREE.Vector3; regard: THREE.Vector3 } | null>(null);

  const controls = useRef<OrbitControlsImpl | null>(null);

  const pieces = useMemo(
    () =>
      MODELE.filter((p) => (modeDetail ? true : !p.detail)).filter((p) =>
        region === 'tout' ? true : p.region === region,
      ),
    [modeDetail, region],
  );

  const pieceParId = useMemo(() => new Map(MODELE.map((p) => [p.id, p])), []);
  const pieceSelectionnee = selection ? pieceParId.get(selection) ?? null : null;
  const pieceSurvolee = survol ? pieceParId.get(survol) ?? null : null;

  const resultatsRecherche = useMemo(() => {
    const terme = normaliser(recherche.trim());
    if (terme.length < 2) return null;
    const trouvees = new Set<string>();
    for (const piece of pieces) {
      if (
        normaliser(piece.nom).includes(terme) ||
        (piece.nomLatin && normaliser(piece.nomLatin).includes(terme)) ||
        normaliser(piece.description).includes(terme)
      ) {
        trouvees.add(piece.id);
      }
    }
    return trouvees;
  }, [recherche, pieces]);

  const listeRecherche = useMemo(() => {
    if (!resultatsRecherche) return [];
    return pieces.filter((p) => resultatsRecherche.has(p.id)).slice(0, 14);
  }, [resultatsRecherche, pieces]);

  const basculerSysteme = useCallback((id: SystemeAnatomique) => {
    setSystemesActifs((actuels) => {
      const suivant = new Set(actuels);
      if (suivant.has(id)) suivant.delete(id);
      else suivant.add(id);
      return suivant;
    });
  }, []);

  const centrerSur = useCallback(
    (piece: PieceAnatomique) => {
      const geometrie = construireGeometrie(piece.geometrie);
      const centre = centreDe(geometrie);
      const rayon = rayonDe(geometrie);
      geometrie.dispose();
      centre.y -= HAUTEUR_CORPS / 2;
      setCibleCamera({ position: centre, rayon });
      setSelection(piece.id);
      setPanneauOuvert(true);
    },
    [],
  );

  const reinitialiser = useCallback(() => {
    setSelection(null);
    setIsolement(false);
    setRecherche('');
    setCoupe({ axe: null, position: 0, inverse: false });
    setRegion('tout');
    setVueDemandee({ position: POSITION_INITIALE.clone(), regard: REGARD.clone() });
  }, []);

  useEffect(() => {
    const surTouche = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;
      if (e.key === 'Escape') {
        setSelection(null);
        setPanneauOuvert(false);
      }
      if (e.key.toLowerCase() === 'i') setIsolement((v) => !v);
      if (e.key.toLowerCase() === 'r') reinitialiser();
    };
    window.addEventListener('keydown', surTouche);
    return () => window.removeEventListener('keydown', surTouche);
  }, [reinitialiser]);

  const nbVisibles = pieces.filter((p) => systemesActifs.has(p.systeme)).reduce((n, p) => n + (p.miroir ? 2 : 1), 0);

  return (
    <div className="carte relative flex h-[76vh] min-h-[560px] flex-col overflow-hidden">
      {/* Bandeau des systèmes */}
      <div className="z-20 flex flex-wrap items-center gap-1.5 border-b px-3 py-2.5">
        <div className="defilement-fin flex flex-1 flex-wrap items-center gap-1.5">
          {SYSTEMES.map((systeme) => {
            const actif = systemesActifs.has(systeme.id);
            return (
              <button
                key={systeme.id}
                type="button"
                onClick={() => basculerSysteme(systeme.id)}
                title={systeme.description}
                className="capsule"
                style={{
                  background: actif ? 'var(--surface)' : 'transparent',
                  color: actif ? 'var(--texte)' : 'var(--texte-3)',
                  boxShadow: actif ? 'var(--ombre-carte)' : 'none',
                  border: actif ? '1px solid var(--bordure)' : '1px solid transparent',
                }}
                aria-pressed={actif}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: systeme.couleur, opacity: actif ? 1 : 0.35 }}
                  aria-hidden="true"
                />
                {systeme.nom}
              </button>
            );
          })}
        </div>
        <span className="hidden text-[11px] tabular-nums sm:block" style={{ color: 'var(--texte-3)' }}>
          {nbVisibles} structures affichées
        </span>
      </div>

      <div className="relative flex min-h-0 flex-1">
        {/* Canevas 3D */}
        <Canvas
          camera={{
            position: [POSITION_INITIALE.x, POSITION_INITIALE.y, POSITION_INITIALE.z],
            fov: CHAMP_DE_VISION,
            near: 0.02,
            far: 60,
          }}
          dpr={[1, 1.8]}
          gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
          onPointerMissed={() => setSelection(null)}
          style={{ background: 'transparent', cursor: survol ? 'pointer' : 'grab' }}
        >
          <Suspense fallback={null}>
            <EclairageStudio />
            <Scene3D
              pieces={pieces}
              systemesActifs={systemesActifs}
              opacites={opacites}
              selection={selection}
              survol={survol}
              isolement={isolement}
              resultatsRecherche={resultatsRecherche}
              coupe={coupe}
              onSelection={(id) => {
                setSelection(id);
                if (id) setPanneauOuvert(true);
              }}
              onSurvol={setSurvol}
            />
            <ContactShadows
              position={[0, -HAUTEUR_CORPS / 2 - 0.005, 0]}
              opacity={0.28}
              scale={3.4}
              blur={2.6}
              far={1.4}
              resolution={512}
            />
            <Grid
              position={[0, -HAUTEUR_CORPS / 2 - 0.006, 0]}
              args={[6, 6]}
              cellSize={0.1}
              cellThickness={0.5}
              cellColor="#c3cbe0"
              sectionSize={0.5}
              sectionThickness={0.8}
              sectionColor="#aab5d0"
              fadeDistance={6.5}
              fadeStrength={1.4}
              infiniteGrid
            />
            <OrbitControls
              ref={controls}
              makeDefault
              enableDamping
              dampingFactor={0.07}
              minDistance={0.18}
              maxDistance={6}
              target={[REGARD.x, REGARD.y, REGARD.z]}
              panSpeed={0.8}
              rotateSpeed={0.85}
              zoomSpeed={0.9}
            />
            <PiloteCamera controls={controls} cible={cibleCamera} vue={vueDemandee} />
          </Suspense>
        </Canvas>

        {/* Étiquette de survol */}
        {pieceSurvolee && !panneauOuvert && (
          <div
            className="pointer-events-none absolute top-3 left-1/2 -translate-x-1/2 rounded-full px-3.5 py-1.5 text-[12.5px] font-medium"
            style={{ background: 'var(--texte)', color: 'var(--surface)' }}
          >
            {pieceSurvolee.nom}
          </div>
        )}

        {/* Barre d'outils gauche : recherche et régions */}
        <div className="absolute top-3 left-3 flex w-[232px] flex-col gap-2">
          <div className="carte flex items-center gap-2 px-3 py-2">
            <IconeRecherche width={15} height={15} style={{ color: 'var(--texte-3)' }} />
            <input
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              placeholder="Chercher une structure…"
              className="w-full bg-transparent text-[13px] outline-none"
              style={{ color: 'var(--texte)' }}
            />
            {recherche && (
              <button type="button" onClick={() => setRecherche('')} aria-label="Effacer la recherche">
                <IconeCroix width={13} height={13} style={{ color: 'var(--texte-3)' }} />
              </button>
            )}
          </div>

          {listeRecherche.length > 0 && (
            <div className="carte defilement-fin max-h-[240px] overflow-y-auto p-1.5">
              {listeRecherche.map((piece) => (
                <button
                  key={piece.id}
                  type="button"
                  onClick={() => centrerSur(piece)}
                  className="flex w-full items-center gap-2 rounded-xl px-2.5 py-1.5 text-left text-[12.5px] transition-colors hover:bg-[var(--surface-2)]"
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ background: SYSTEME_PAR_ID[piece.systeme].couleur }}
                    aria-hidden="true"
                  />
                  <span className="truncate">{piece.nom}</span>
                </button>
              ))}
            </div>
          )}

          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="carte px-3 py-2 text-[12.5px]"
            style={{ color: 'var(--texte)', background: 'var(--surface)' }}
            aria-label="Filtrer par région anatomique"
          >
            <option value="tout">Toutes les régions</option>
            {REGIONS.map((r) => (
              <option key={r.id} value={r.id}>
                {r.nom}
              </option>
            ))}
          </select>
        </div>

        {/* Barre d'outils droite */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
          <div className="carte flex flex-col gap-1 p-1.5">
            {VUES.map((vue) => (
              <button
                key={vue.id}
                type="button"
                onClick={() =>
                  setVueDemandee({ position: vue.position.clone(), regard: REGARD.clone() })
                }
                className="rounded-xl px-3 py-1.5 text-[12px] font-medium transition-colors hover:bg-[var(--surface-2)]"
                style={{ color: 'var(--texte-2)' }}
              >
                {vue.nom}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsolement((v) => !v)}
            disabled={!selection}
            className="carte flex items-center gap-2 px-3 py-2 text-[12px] font-medium disabled:opacity-45"
            style={{ color: isolement ? 'var(--accent)' : 'var(--texte-2)' }}
            title="Isoler la structure sélectionnée (touche I)"
          >
            <IconeLoupePlus width={14} height={14} />
            Isoler
          </button>

          <button
            type="button"
            onClick={() => setModeDetail((v) => !v)}
            className="carte flex items-center gap-2 px-3 py-2 text-[12px] font-medium"
            style={{ color: modeDetail ? 'var(--accent)' : 'var(--texte-2)' }}
            title="Afficher aussi les structures de détail"
          >
            <IconeCouches width={14} height={14} />
            {modeDetail ? 'Détaillé' : 'Simplifié'}
          </button>

          <button
            type="button"
            onClick={reinitialiser}
            className="carte flex items-center gap-2 px-3 py-2 text-[12px] font-medium"
            style={{ color: 'var(--texte-2)' }}
            title="Réinitialiser la vue (touche R)"
          >
            <IconeRotation width={14} height={14} />
            Réinitialiser
          </button>
        </div>

        {/* Réglages du bas : opacité et coupe */}
        <div className="absolute bottom-3 left-3 flex flex-col gap-2">
          <div className="carte flex items-center gap-2.5 px-3 py-2">
            <span className="text-[11px]" style={{ color: 'var(--texte-3)' }}>
              Plan de coupe
            </span>
            {AXES_COUPE.map((axe) => (
              <button
                key={axe.id}
                type="button"
                onClick={() =>
                  setCoupe((c) => (c.axe === axe.id ? { ...c, axe: null } : { ...c, axe: axe.id }))
                }
                className="capsule px-2.5 py-1 text-[11.5px]"
                style={{
                  background: coupe.axe === axe.id ? 'var(--accent)' : 'var(--surface-3)',
                  color: coupe.axe === axe.id ? 'var(--accent-contraste)' : 'var(--texte-2)',
                }}
              >
                {axe.nom}
              </button>
            ))}
            {coupe.axe && (
              <>
                <input
                  type="range"
                  min={-0.5}
                  max={0.5}
                  step={0.01}
                  value={coupe.position}
                  onChange={(e) => setCoupe((c) => ({ ...c, position: Number(e.target.value) }))}
                  className="w-28"
                  aria-label="Position du plan de coupe"
                />
                <button
                  type="button"
                  onClick={() => setCoupe((c) => ({ ...c, inverse: !c.inverse }))}
                  className="capsule px-2 py-1 text-[11px]"
                  style={{ background: 'var(--surface-3)', color: 'var(--texte-2)' }}
                  title="Inverser le côté conservé"
                >
                  Inverser
                </button>
              </>
            )}
          </div>

          <div className="carte flex flex-wrap items-center gap-3 px-3 py-2">
            {SYSTEMES.filter((s) => systemesActifs.has(s.id)).map((systeme) => (
              <label key={systeme.id} className="flex items-center gap-1.5 text-[11px]" style={{ color: 'var(--texte-3)' }}>
                <span className="h-2 w-2 rounded-full" style={{ background: systeme.couleur }} aria-hidden="true" />
                {systeme.nom}
                <input
                  type="range"
                  min={0.05}
                  max={1}
                  step={0.05}
                  value={opacites[systeme.id]}
                  onChange={(e) =>
                    setOpacites((o) => ({ ...o, [systeme.id]: Number(e.target.value) }))
                  }
                  className="w-16"
                  aria-label={`Opacité du système ${systeme.nom}`}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Panneau d'information */}
        {pieceSelectionnee && panneauOuvert && (
          <aside className="carte apparition absolute top-3 right-3 bottom-3 w-[320px] overflow-hidden">
            <div className="h-1.5" style={{ background: SYSTEME_PAR_ID[pieceSelectionnee.systeme].couleur }} />
            <div className="defilement-fin h-[calc(100%-6px)] overflow-y-auto p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[11px] font-medium" style={{ color: 'var(--texte-3)' }}>
                    {SYSTEME_PAR_ID[pieceSelectionnee.systeme].nom}
                  </div>
                  <h3 className="mt-0.5 text-[17px] leading-tight font-semibold tracking-tight">
                    {pieceSelectionnee.nom}
                  </h3>
                  {pieceSelectionnee.nomLatin && (
                    <div className="mt-0.5 text-[12px] italic" style={{ color: 'var(--texte-3)' }}>
                      {pieceSelectionnee.nomLatin}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setPanneauOuvert(false)}
                  aria-label="Fermer le panneau"
                  className="shrink-0 rounded-full p-1.5 hover:bg-[var(--surface-2)]"
                >
                  <IconeCroix width={15} height={15} style={{ color: 'var(--texte-3)' }} />
                </button>
              </div>

              <p className="mt-3 text-[13.5px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
                {pieceSelectionnee.description}
              </p>

              {pieceSelectionnee.reperes.length > 0 && (
                <div className="mt-4">
                  <div
                    className="mb-2 text-[10.5px] font-semibold tracking-[0.1em] uppercase"
                    style={{ color: 'var(--texte-3)' }}
                  >
                    Repères et points clés
                  </div>
                  <ul className="flex flex-col gap-2">
                    {pieceSelectionnee.reperes.map((repere, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-[13px] leading-relaxed"
                        style={{ color: 'var(--texte-2)' }}
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: SYSTEME_PAR_ID[pieceSelectionnee.systeme].couleur }}
                          aria-hidden="true"
                        />
                        {repere}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => centrerSur(pieceSelectionnee)}
                  className="bouton bouton-secondaire w-full py-2 text-[12.5px]"
                >
                  <IconeLoupePlus width={14} height={14} />
                  Centrer la caméra
                </button>
                {pieceSelectionnee.ficheLiee && urlsFiches[pieceSelectionnee.ficheLiee] && (
                  <Link
                    href={urlsFiches[pieceSelectionnee.ficheLiee]}
                    className="bouton bouton-primaire w-full py-2 text-[12.5px]"
                  >
                    Ouvrir la fiche associée
                    <IconeFleche width={14} height={14} />
                  </Link>
                )}
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
