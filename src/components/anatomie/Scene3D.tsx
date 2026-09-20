'use client';

import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { construireGeometrie } from '@/lib/anatomie/constructeurs';
import type { PieceAnatomique, SystemeAnatomique } from '@/lib/anatomie/types';
import { SYSTEME_PAR_ID } from '@/lib/anatomie/modele';

export interface EtatCoupe {
  axe: 'x' | 'y' | 'z' | null;
  position: number;
  inverse: boolean;
}

interface ProprietesScene {
  pieces: PieceAnatomique[];
  systemesActifs: Set<SystemeAnatomique>;
  opacites: Record<SystemeAnatomique, number>;
  selection: string | null;
  survol: string | null;
  isolement: boolean;
  resultatsRecherche: Set<string> | null;
  coupe: EtatCoupe;
  onSelection: (id: string | null) => void;
  onSurvol: (id: string | null) => void;
}

const HAUTEUR_CORPS = 1.75;

/** Plans de coupe partagés par tous les matériaux de la scène. */
function usePlansDeCoupe(coupe: EtatCoupe) {
  return useMemo(() => {
    if (!coupe.axe) return [];
    const normale = new THREE.Vector3(
      coupe.axe === 'x' ? 1 : 0,
      coupe.axe === 'y' ? 1 : 0,
      coupe.axe === 'z' ? 1 : 0,
    );
    if (coupe.inverse) normale.negate();
    // La constante est l'opposé de la position projetée sur la normale.
    const decalage = coupe.axe === 'y' ? coupe.position * HAUTEUR_CORPS : coupe.position * 0.35;
    const constante = coupe.inverse ? decalage : -decalage;
    return [new THREE.Plane(normale, constante)];
  }, [coupe]);
}

export function Scene3D({
  pieces,
  systemesActifs,
  opacites,
  selection,
  survol,
  isolement,
  resultatsRecherche,
  coupe,
  onSelection,
  onSurvol,
}: ProprietesScene) {
  const plans = usePlansDeCoupe(coupe);
  const { gl } = useThree();

  useEffect(() => {
    gl.localClippingEnabled = true;
  }, [gl]);

  // Les géométries sont construites une seule fois et conservées pour la session.
  const geometries = useMemo(() => {
    const carte = new Map<string, THREE.BufferGeometry>();
    for (const piece of pieces) {
      carte.set(piece.id, construireGeometrie(piece.geometrie));
    }
    return carte;
  }, [pieces]);

  useEffect(() => {
    return () => {
      for (const geometrie of geometries.values()) geometrie.dispose();
    };
  }, [geometries]);

  return (
    <group position={[0, -HAUTEUR_CORPS / 2, 0]}>
      {pieces.map((piece) => {
        const geometrie = geometries.get(piece.id);
        if (!geometrie) return null;
        return (
          <PieceRendue
            key={piece.id}
            piece={piece}
            geometrie={geometrie}
            visible={systemesActifs.has(piece.systeme)}
            opacite={opacites[piece.systeme] ?? 1}
            selectionnee={selection === piece.id}
            survolee={survol === piece.id}
            attenuee={
              (isolement && selection !== null && selection !== piece.id) ||
              (resultatsRecherche !== null && !resultatsRecherche.has(piece.id))
            }
            plans={plans}
            onSelection={onSelection}
            onSurvol={onSurvol}
          />
        );
      })}
    </group>
  );
}

function PieceRendue({
  piece,
  geometrie,
  visible,
  opacite,
  selectionnee,
  survolee,
  attenuee,
  plans,
  onSelection,
  onSurvol,
}: {
  piece: PieceAnatomique;
  geometrie: THREE.BufferGeometry;
  visible: boolean;
  opacite: number;
  selectionnee: boolean;
  survolee: boolean;
  attenuee: boolean;
  plans: THREE.Plane[];
  onSelection: (id: string | null) => void;
  onSurvol: (id: string | null) => void;
}) {
  const systeme = SYSTEME_PAR_ID[piece.systeme];
  // Une pièce paire est rendue deux fois : les deux matériaux doivent réagir
  // ensemble au survol, à la sélection et à l'atténuation.
  const materiauPrincipal = useRef<THREE.MeshStandardMaterial>(null);
  const materiauMiroir = useRef<THREE.MeshStandardMaterial>(null);

  const couleurBase = useMemo(
    () => new THREE.Color(piece.couleur ?? systeme.couleur),
    [piece.couleur, systeme.couleur],
  );
  const couleurEclairee = useMemo(() => couleurBase.clone().lerp(new THREE.Color('#ffffff'), 0.45), [couleurBase]);
  const couleurSelection = useMemo(() => new THREE.Color('#3b62f6').lerp(couleurBase, 0.25), [couleurBase]);

  const opaciteCible = (piece.opacite ?? systeme.opacite) * opacite * (attenuee ? 0.12 : 1);

  // Transition douce de la couleur et de l'opacité, sans re-création du matériau.
  useFrame((_, delta) => {
    const cible = selectionnee ? couleurSelection : survolee ? couleurEclairee : couleurBase;
    const emission = selectionnee ? 0.28 : survolee ? 0.14 : 0;
    const pas = Math.min(1, delta * 12);
    for (const reference of [materiauPrincipal, materiauMiroir]) {
      const m = reference.current;
      if (!m) continue;
      m.color.lerp(cible, pas);
      m.opacity += (opaciteCible - m.opacity) * pas;
      m.transparent = m.opacity < 0.995;
      m.depthWrite = m.opacity > 0.65;
      m.emissiveIntensity += (emission - m.emissiveIntensity) * pas;
    }
  });

  if (!visible) return null;

  const contenu = (miroir: boolean) => (
    <mesh
      key={miroir ? 'miroir' : 'principal'}
      geometry={geometrie}
      scale={miroir ? [-1, 1, 1] : [1, 1, 1]}
      castShadow={false}
      receiveShadow={false}
      onPointerOver={(evenement) => {
        evenement.stopPropagation();
        onSurvol(piece.id);
      }}
      onPointerOut={(evenement) => {
        evenement.stopPropagation();
        onSurvol(null);
      }}
      onClick={(evenement) => {
        evenement.stopPropagation();
        onSelection(piece.id);
      }}
    >
      <meshStandardMaterial
        ref={miroir ? materiauMiroir : materiauPrincipal}
        color={couleurBase}
        roughness={systeme.rugosite}
        metalness={systeme.metallique}
        emissive="#3b62f6"
        emissiveIntensity={0}
        transparent
        opacity={opaciteCible}
        side={THREE.DoubleSide}
        clippingPlanes={plans}
        clipShadows
        flatShading={false}
      />
    </mesh>
  );

  return (
    <group>
      {contenu(false)}
      {piece.miroir && contenu(true)}
    </group>
  );
}

/**
 * Déplace la caméra vers une pièce sélectionnée, ou vers une vue prédéfinie.
 */
export function PiloteCamera({
  controls,
  cible,
  vue,
}: {
  controls: React.RefObject<OrbitControlsImpl | null>;
  cible: { position: THREE.Vector3; rayon: number } | null;
  vue: { position: THREE.Vector3; regard: THREE.Vector3 } | null;
}) {
  const { camera } = useThree();
  const destination = useRef<{ position: THREE.Vector3; regard: THREE.Vector3 } | null>(null);
  const restant = useRef(0);

  useEffect(() => {
    if (!cible) return;
    const distance = Math.max(0.32, cible.rayon * 4.6);
    const direction = new THREE.Vector3(0.42, 0.18, 1).normalize();
    destination.current = {
      position: cible.position.clone().add(direction.multiplyScalar(distance)),
      regard: cible.position.clone(),
    };
    restant.current = 1;
  }, [cible]);

  useEffect(() => {
    if (!vue) return;
    destination.current = { position: vue.position.clone(), regard: vue.regard.clone() };
    restant.current = 1;
  }, [vue]);

  useFrame((_, delta) => {
    if (!destination.current || restant.current <= 0) return;
    const facteur = Math.min(1, delta * 4.2);
    camera.position.lerp(destination.current.position, facteur);
    const orbite = controls.current;
    if (orbite) {
      orbite.target.lerp(destination.current.regard, facteur);
      orbite.update();
    }
    restant.current -= delta * 0.9;
  });

  return null;
}

export function EclairageStudio() {
  return (
    <>
      <hemisphereLight args={['#f4f7ff', '#c6cede', 0.85]} />
      <directionalLight position={[2.6, 3.4, 3.2]} intensity={1.55} color="#ffffff" />
      <directionalLight position={[-3, 1.6, -2.4]} intensity={0.55} color="#cfd9f5" />
      <directionalLight position={[0, -2.2, 1.6]} intensity={0.3} color="#ffe6da" />
      <ambientLight intensity={0.32} />
    </>
  );
}
