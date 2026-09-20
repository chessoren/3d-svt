import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { FormeAnatomique, Point3 } from './types';

/**
 * Conversion d'une description anatomique en maillage. Toutes les géométries
 * sont générées à la volée : le modèle ne dépend d'aucun fichier 3D externe,
 * ce qui garantit un chargement immédiat et un fonctionnement hors ligne.
 */

const v = (p: Point3) => new THREE.Vector3(p[0], p[1], p[2]);

function appliquerTransformation(
  geometrie: THREE.BufferGeometry,
  centre: Point3,
  rotation?: Point3,
) {
  if (rotation) {
    geometrie.rotateX(rotation[0]);
    geometrie.rotateY(rotation[1]);
    geometrie.rotateZ(rotation[2]);
  }
  geometrie.translate(centre[0], centre[1], centre[2]);
  return geometrie;
}

/** Oriente une géométrie construite le long de Y pour qu'elle relie deux points. */
function orienterEntre(geometrie: THREE.BufferGeometry, debut: Point3, fin: Point3) {
  const a = v(debut);
  const b = v(fin);
  const direction = new THREE.Vector3().subVectors(b, a);
  const longueur = direction.length();
  if (longueur < 1e-6) return geometrie;
  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction.clone().normalize(),
  );
  geometrie.applyQuaternion(quaternion);
  const milieu = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
  geometrie.translate(milieu.x, milieu.y, milieu.z);
  return geometrie;
}

function longueurEntre(a: Point3, b: Point3) {
  return v(a).distanceTo(v(b));
}

/* -------------------------------------------------------------------------- */
/*  Formes élémentaires                                                        */
/* -------------------------------------------------------------------------- */

function construireOsLong(spec: Extract<FormeAnatomique, { forme: 'osLong' }>) {
  const longueur = longueurEntre(spec.debut, spec.fin);
  const rHaut = spec.rayonEpiphyseHaute ?? spec.rayon * 1.75;
  const rBas = spec.rayonEpiphyseBasse ?? spec.rayon * 1.6;

  // Profil de la diaphyse : renflée aux extrémités, effilée au milieu.
  const profil: [number, number][] = [
    [0.001, -longueur / 2],
    [rBas * 0.72, -longueur / 2 + 0.004],
    [rBas, -longueur / 2 + rBas * 0.55],
    [rBas * 0.78, -longueur / 2 + rBas * 1.25],
    [spec.rayon * 1.06, -longueur * 0.26],
    [spec.rayon * 0.94, 0],
    [spec.rayon * 1.08, longueur * 0.27],
    [rHaut * 0.78, longueur / 2 - rHaut * 1.3],
    [rHaut, longueur / 2 - rHaut * 0.55],
    [rHaut * 0.72, longueur / 2 - 0.004],
    [0.001, longueur / 2],
  ];

  const points = profil.map(([r, y]) => new THREE.Vector2(r, y));
  const courbe = new THREE.SplineCurve(points);
  const echantillons = courbe.getPoints(48);
  const geometrie = new THREE.LatheGeometry(echantillons, 28);

  if (spec.courbure) {
    courberGeometrie(geometrie, longueur, spec.courbure);
  }

  return orienterEntre(geometrie, spec.debut, spec.fin);
}

/** Incurve une géométrie alignée sur Y, comme la courbure d'un fémur. */
function courberGeometrie(geometrie: THREE.BufferGeometry, longueur: number, amplitude: Point3) {
  const positions = geometrie.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < positions.count; i += 1) {
    const y = positions.getY(i);
    // t vaut 0 aux extrémités et 1 au milieu de la pièce.
    const t = 1 - Math.pow((2 * y) / longueur, 2);
    positions.setX(i, positions.getX(i) + amplitude[0] * t);
    positions.setY(i, positions.getY(i) + amplitude[1] * t);
    positions.setZ(i, positions.getZ(i) + amplitude[2] * t);
  }
  positions.needsUpdate = true;
  geometrie.computeVertexNormals();
}

function construireEllipsoide(spec: Extract<FormeAnatomique, { forme: 'ellipsoide' }>) {
  const segments = spec.segments ?? 28;
  const geometrie = new THREE.SphereGeometry(1, segments, Math.max(12, Math.round(segments * 0.7)));
  geometrie.scale(spec.rayons[0], spec.rayons[1], spec.rayons[2]);
  return appliquerTransformation(geometrie, spec.centre, spec.rotation);
}

function construireTube(spec: Extract<FormeAnatomique, { forme: 'tube' }>) {
  const points = spec.points.map(v);
  if (points.length < 2) return new THREE.BufferGeometry();
  const courbe = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.35);
  const segmentsLong = spec.segments ?? Math.max(24, points.length * 10);
  const geometrie = new THREE.TubeGeometry(courbe, segmentsLong, spec.rayon, 12, false);

  // Effilement progressif quand un rayon terminal différent est demandé.
  if (spec.rayonFin !== undefined && Math.abs(spec.rayonFin - spec.rayon) > 1e-5) {
    const rapport = spec.rayonFin / spec.rayon;
    const positions = geometrie.attributes.position as THREE.BufferAttribute;
    const anneaux = segmentsLong + 1;
    const parAnneau = 13;
    for (let i = 0; i < anneaux; i += 1) {
      const t = i / segmentsLong;
      const facteur = 1 + (rapport - 1) * t;
      const centre = courbe.getPointAt(Math.min(1, t));
      for (let j = 0; j < parAnneau; j += 1) {
        const index = i * parAnneau + j;
        if (index >= positions.count) break;
        const x = positions.getX(index);
        const y = positions.getY(index);
        const z = positions.getZ(index);
        positions.setXYZ(
          index,
          centre.x + (x - centre.x) * facteur,
          centre.y + (y - centre.y) * facteur,
          centre.z + (z - centre.z) * facteur,
        );
      }
    }
    positions.needsUpdate = true;
    geometrie.computeVertexNormals();
  }

  return geometrie;
}

function construireMuscle(spec: Extract<FormeAnatomique, { forme: 'muscle' }>) {
  const longueur = longueurEntre(spec.debut, spec.fin);
  const largeur = spec.largeur;
  const bombement = spec.bombement ?? 1;

  // Profil fusiforme : tendons fins aux extrémités, ventre renflé au centre.
  const profil: [number, number][] = [
    [0.002, -longueur / 2],
    [largeur * 0.26, -longueur / 2 + longueur * 0.06],
    [largeur * 0.62, -longueur / 2 + longueur * 0.17],
    [largeur * 0.92 * bombement, -longueur * 0.1],
    [largeur * bombement, 0],
    [largeur * 0.9 * bombement, longueur * 0.12],
    [largeur * 0.58, longueur / 2 - longueur * 0.16],
    [largeur * 0.24, longueur / 2 - longueur * 0.05],
    [0.002, longueur / 2],
  ];

  const courbe = new THREE.SplineCurve(profil.map(([r, y]) => new THREE.Vector2(r, y)));
  const geometrie = new THREE.LatheGeometry(courbe.getPoints(40), 24);

  if (spec.epaisseur !== undefined && spec.epaisseur !== spec.largeur) {
    geometrie.scale(1, 1, spec.epaisseur / spec.largeur);
  }
  if (spec.courbure) courberGeometrie(geometrie, longueur, spec.courbure);

  return orienterEntre(geometrie, spec.debut, spec.fin);
}

function construireCapsule(spec: Extract<FormeAnatomique, { forme: 'capsule' }>) {
  const longueur = Math.max(1e-4, longueurEntre(spec.debut, spec.fin) - spec.rayon * 2);
  const geometrie = new THREE.CapsuleGeometry(spec.rayon, longueur, 6, 16);
  return orienterEntre(geometrie, spec.debut, spec.fin);
}

function construireBoite(spec: Extract<FormeAnatomique, { forme: 'boite' }>) {
  const [largeur, hauteur, profondeur] = spec.dimensions;
  const arrondi = spec.arrondi ?? 0;
  let geometrie: THREE.BufferGeometry;
  if (arrondi > 0) {
    // Boîte adoucie : sphère mise à l'échelle puis aplatie vers un cube.
    geometrie = new THREE.BoxGeometry(largeur, hauteur, profondeur, 6, 6, 6);
    const positions = geometrie.attributes.position as THREE.BufferAttribute;
    const demi = new THREE.Vector3(largeur / 2, hauteur / 2, profondeur / 2);
    const rayon = Math.min(demi.x, demi.y, demi.z) * Math.min(1, arrondi);
    for (let i = 0; i < positions.count; i += 1) {
      const p = new THREE.Vector3(positions.getX(i), positions.getY(i), positions.getZ(i));
      const noyau = new THREE.Vector3(
        THREE.MathUtils.clamp(p.x, -demi.x + rayon, demi.x - rayon),
        THREE.MathUtils.clamp(p.y, -demi.y + rayon, demi.y - rayon),
        THREE.MathUtils.clamp(p.z, -demi.z + rayon, demi.z - rayon),
      );
      const ecart = new THREE.Vector3().subVectors(p, noyau);
      if (ecart.lengthSq() > 1e-9) ecart.setLength(rayon);
      positions.setXYZ(i, noyau.x + ecart.x, noyau.y + ecart.y, noyau.z + ecart.z);
    }
    positions.needsUpdate = true;
    geometrie.computeVertexNormals();
  } else {
    geometrie = new THREE.BoxGeometry(largeur, hauteur, profondeur);
  }
  return appliquerTransformation(geometrie, spec.centre, spec.rotation);
}

function construireRevolution(spec: Extract<FormeAnatomique, { forme: 'revolution' }>) {
  const points = spec.profil.map(([r, y]) => new THREE.Vector2(Math.max(0.0005, r), y));
  const geometrie = new THREE.LatheGeometry(points, spec.segments ?? 28);
  return appliquerTransformation(geometrie, spec.centre, spec.rotation);
}

function construireArc(spec: Extract<FormeAnatomique, { forme: 'arc' }>) {
  const geometrie = new THREE.TorusGeometry(
    spec.rayon,
    spec.epaisseur,
    10,
    Math.max(16, Math.round((spec.angleCouvert / (Math.PI * 2)) * 64)),
    spec.angleCouvert,
  );
  geometrie.rotateZ(spec.angleDepart);
  if (spec.aplatissement) {
    geometrie.scale(spec.aplatissement[0], spec.aplatissement[1], spec.aplatissement[2]);
  }
  return appliquerTransformation(geometrie, spec.centre, spec.rotation);
}

function construireLame(spec: Extract<FormeAnatomique, { forme: 'lame' }>) {
  const forme = new THREE.Shape();
  spec.contour.forEach(([x, y], index) => {
    if (index === 0) forme.moveTo(x, y);
    else forme.lineTo(x, y);
  });
  forme.closePath();

  const geometrie = new THREE.ExtrudeGeometry(forme, {
    depth: spec.epaisseur,
    bevelEnabled: true,
    bevelThickness: spec.epaisseur * 0.32,
    bevelSize: spec.epaisseur * 0.36,
    bevelSegments: 3,
    curveSegments: 14,
  });
  geometrie.center();

  if (spec.courbure) {
    // Cintre la lame autour de l'axe vertical, comme une omoplate sur le gril costal.
    const positions = geometrie.attributes.position as THREE.BufferAttribute;
    geometrie.computeBoundingBox();
    const boite = geometrie.boundingBox;
    const demiLargeur = boite ? Math.max(1e-4, (boite.max.x - boite.min.x) / 2) : 1;
    for (let i = 0; i < positions.count; i += 1) {
      const x = positions.getX(i);
      const t = x / demiLargeur;
      positions.setZ(i, positions.getZ(i) - spec.courbure * t * t);
    }
    positions.needsUpdate = true;
    geometrie.computeVertexNormals();
  }

  return appliquerTransformation(geometrie, spec.centre, spec.rotation);
}

/* -------------------------------------------------------------------------- */
/*  Point d'entrée                                                             */
/* -------------------------------------------------------------------------- */

export function construireGeometrie(spec: FormeAnatomique): THREE.BufferGeometry {
  switch (spec.forme) {
    case 'osLong':
      return construireOsLong(spec);
    case 'ellipsoide':
      return construireEllipsoide(spec);
    case 'tube':
      return construireTube(spec);
    case 'muscle':
      return construireMuscle(spec);
    case 'capsule':
      return construireCapsule(spec);
    case 'boite':
      return construireBoite(spec);
    case 'revolution':
      return construireRevolution(spec);
    case 'arc':
      return construireArc(spec);
    case 'lame':
      return construireLame(spec);
    case 'groupe': {
      const morceaux = spec.elements.map(construireGeometrie).filter((g) => g.attributes.position);
      if (morceaux.length === 0) return new THREE.BufferGeometry();
      if (morceaux.length === 1) return morceaux[0];
      // Les primitives de three.js ne sont pas toutes indexées : une extrusion ne
      // l'est pas, une sphère l'est. La fusion exige une forme homogène, on
      // ramène donc tout le monde au format non indexé.
      const normalises = morceaux.map((g) => {
        const copie = g.index ? g.toNonIndexed() : g.clone();
        copie.deleteAttribute('uv');
        copie.deleteAttribute('uv1');
        copie.deleteAttribute('uv2');
        return copie;
      });
      const fusion = mergeGeometries(normalises, false);
      morceaux.forEach((g) => g.dispose());
      normalises.forEach((g) => g.dispose());
      if (!fusion) {
        console.warn('Fusion de géométries impossible pour un groupe anatomique.');
        return new THREE.BufferGeometry();
      }
      fusion.computeVertexNormals();
      return fusion;
    }
    default:
      return new THREE.BufferGeometry();
  }
}

/** Centre géométrique approché d'une pièce, utilisé pour le recadrage caméra. */
export function centreDe(geometrie: THREE.BufferGeometry): THREE.Vector3 {
  geometrie.computeBoundingBox();
  const boite = geometrie.boundingBox;
  if (!boite) return new THREE.Vector3();
  return boite.getCenter(new THREE.Vector3());
}

export function rayonDe(geometrie: THREE.BufferGeometry): number {
  geometrie.computeBoundingSphere();
  return geometrie.boundingSphere?.radius ?? 0.1;
}
