import type { Schema } from '../../types';

export const schemaPlansAxes: Schema = {
  id: 'anat-plans-axes',
  ue: 'anat',
  titre: 'Position anatomique de référence, plans et axes',
  description:
    'Position anatomique de référence, les trois plans de l’espace (sagittal médian, frontal, transversal), les trois axes et le vocabulaire de position, complétés par les mouvements élémentaires.',
  categorie: 'Anatomie générale',
  viewBox: '0 0 920 660',
  ficheLiee: 'anat-organisation-generale',
  motsCles: [
    'position anatomique',
    'plan sagittal',
    'plan frontal',
    'plan transversal',
    'axe longitudinal',
    'proximal distal',
    'médial latéral',
    'mouvements élémentaires',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="660" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="42" font-size="19" font-weight="600" fill="#101828">1 · Position anatomique de référence et plans de l’espace</text>
      <line x1="40" y1="54" x2="180" y2="54" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Silhouette en position anatomique -->
      <g transform="translate(210,90)">
        <ellipse cx="0" cy="18" rx="26" ry="30" fill="#f5ead9" stroke="#c9b892"/>
        <rect x="-38" y="46" width="76" height="150" rx="26" fill="#f5ead9" stroke="#c9b892"/>
        <rect x="-70" y="52" width="26" height="150" rx="12" fill="#f5ead9" stroke="#c9b892"/>
        <rect x="44" y="52" width="26" height="150" rx="12" fill="#f5ead9" stroke="#c9b892"/>
        <rect x="-30" y="192" width="26" height="170" rx="12" fill="#f5ead9" stroke="#c9b892"/>
        <rect x="4" y="192" width="26" height="170" rx="12" fill="#f5ead9" stroke="#c9b892"/>

        <!-- plan sagittal médian : ligne verticale au milieu -->
        <line x1="0" y1="-16" x2="0" y2="368" stroke="#175cd3" stroke-width="2.4" stroke-dasharray="8 5"/>
        <circle cx="0" cy="-30" r="13" fill="#175cd3" opacity="0.16"/>
        <text x="-4" y="-25" font-size="12" font-weight="700" fill="#175cd3">1</text>

        <!-- plan frontal : rectangle translucide vertical coupant le corps avant/arrière -->
        <rect x="-90" y="-16" width="180" height="384" fill="#e0632f" opacity="0.08"/>
        <line x1="-90" y1="-16" x2="-90" y2="368" stroke="#e0632f" stroke-width="1.6"/>
        <line x1="90" y1="-16" x2="90" y2="368" stroke="#e0632f" stroke-width="1.6"/>
        <circle cx="-104" cy="60" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="-108" y="65" font-size="12" font-weight="700" fill="#e0632f">2</text>

        <!-- plan transversal : ellipse horizontale au niveau de la taille -->
        <ellipse cx="0" cy="196" rx="92" ry="16" fill="#12a065" opacity="0.14" stroke="#12a065" stroke-width="1.4"/>
        <circle cx="110" cy="196" r="13" fill="#12a065" opacity="0.16"/>
        <text x="105" y="201" font-size="12" font-weight="700" fill="#12a065">3</text>
      </g>

      <!-- Trois axes, illustrés séparément -->
      <g transform="translate(430,120)">
        <text x="0" y="-30" font-size="14" font-weight="600" fill="#101828">Les trois axes</text>
        <line x1="20" y1="-10" x2="20" y2="120" stroke="#101828" stroke-width="2.2" marker-end="url(#pa-fleche1)"/>
        <text x="30" y="0" font-size="12.5" fill="#475467">axe longitudinal</text>
        <circle cx="4" cy="60" r="13" fill="#7c4df5" opacity="0.16"/>
        <text x="0" y="65" font-size="12" font-weight="700" fill="#7c4df5">4</text>

        <line x1="60" y1="150" x2="190" y2="150" stroke="#101828" stroke-width="2.2" marker-end="url(#pa-fleche2)"/>
        <text x="70" y="140" font-size="12.5" fill="#475467">axe transversal</text>
        <circle cx="150" cy="164" r="13" fill="#7c4df5" opacity="0.16"/>
        <text x="146" y="169" font-size="12" font-weight="700" fill="#7c4df5">5</text>

        <line x1="20" y1="150" x2="-70" y2="200" stroke="#101828" stroke-width="2.2" marker-end="url(#pa-fleche3)"/>
        <text x="-100" y="216" font-size="12.5" fill="#475467">axe sagittal (antéro-postérieur)</text>
        <circle cx="-36" cy="176" r="13" fill="#7c4df5" opacity="0.16"/>
        <text x="-40" y="181" font-size="12" font-weight="700" fill="#7c4df5">6</text>
      </g>

      <defs>
        <marker id="pa-fleche1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
        </marker>
        <marker id="pa-fleche2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
        </marker>
        <marker id="pa-fleche3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
        </marker>
        <marker id="pa-fleche4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
        </marker>
      </defs>

      <text x="40" y="330" font-size="19" font-weight="600" fill="#101828">2 · Vocabulaire de position</text>
      <line x1="40" y1="342" x2="180" y2="342" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Membre supérieur tendu pour proximal / distal, médial / latéral -->
      <g transform="translate(90,380)">
        <ellipse cx="20" cy="10" rx="20" ry="24" fill="#f5ead9" stroke="#c9b892"/>
        <rect x="4" y="30" width="32" height="120" rx="16" fill="#f5ead9" stroke="#c9b892"/>
        <line x1="36" y1="60" x2="150" y2="90" stroke="#f5ead9" stroke-width="26" stroke-linecap="round"/>
        <line x1="36" y1="60" x2="150" y2="90" stroke="#c9b892" stroke-width="1.4" fill="none"/>
        <ellipse cx="164" cy="94" rx="20" ry="14" fill="#f5ead9" stroke="#c9b892"/>

        <line x1="40" y1="70" x2="90" y2="82" stroke="#101828" stroke-width="1.8" marker-end="url(#pa-fleche4)"/>
        <circle cx="42" cy="52" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="38" y="57" font-size="12" font-weight="700" fill="#e0632f">7</text>
        <text x="8" y="30" font-size="12" fill="#475467">proximal</text>

        <circle cx="170" cy="78" r="13" fill="#e0632f" opacity="0.16"/>
        <text x="166" y="83" font-size="12" font-weight="700" fill="#e0632f">8</text>
        <text x="150" y="60" font-size="12" fill="#475467">distal</text>

        <line x1="20" y1="90" x2="20" y2="160" stroke="#101828" stroke-width="1.4" stroke-dasharray="4 3"/>
        <text x="-20" y="170" font-size="11.5" fill="#8a94a8">(ligne médiane du corps)</text>
        <circle cx="20" cy="108" r="13" fill="#12a065" opacity="0.16"/>
        <text x="16" y="113" font-size="12" font-weight="700" fill="#12a065">9</text>
        <text x="-46" y="112" font-size="12" fill="#475467">médial</text>

        <circle cx="130" cy="86" r="13" fill="#12a065" opacity="0.16"/>
        <text x="126" y="91" font-size="12" font-weight="700" fill="#12a065">10</text>
        <text x="118" y="118" font-size="12" fill="#475467">latéral</text>
      </g>

      <!-- Antérieur / postérieur : coupe transversale schématique -->
      <g transform="translate(430,400)">
        <text x="0" y="-30" font-size="14" font-weight="600" fill="#101828">Antérieur / postérieur (vue de profil)</text>
        <ellipse cx="60" cy="40" rx="60" ry="34" fill="#f5ead9" stroke="#c9b892"/>
        <line x1="120" y1="40" x2="160" y2="40" stroke="#101828" stroke-width="2" marker-end="url(#pa-fleche1)"/>
        <text x="164" y="45" font-size="12.5" fill="#475467">antérieur (ventral)</text>
        <circle cx="132" cy="26" r="13" fill="#d4380d" opacity="0.16"/>
        <text x="128" y="31" font-size="12" font-weight="700" fill="#d4380d">11</text>

        <line x1="0" y1="40" x2="-40" y2="40" stroke="#101828" stroke-width="2" marker-end="url(#pa-fleche2)"/>
        <text x="-160" y="45" font-size="12.5" fill="#475467">postérieur (dorsal)</text>
        <circle cx="-12" cy="26" r="13" fill="#175cd3" opacity="0.16"/>
        <text x="-17" y="31" font-size="12" font-weight="700" fill="#175cd3">12</text>
      </g>

      <text x="40" y="520" font-size="19" font-weight="600" fill="#101828">3 · Mouvements élémentaires</text>
      <line x1="40" y1="532" x2="180" y2="532" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g font-size="12.5" fill="#475467">
        <g transform="translate(60,560)">
          <line x1="0" y1="40" x2="0" y2="0" stroke="#101828" stroke-width="2"/>
          <line x1="0" y1="40" x2="30" y2="50" stroke="#101828" stroke-width="2" marker-end="url(#pa-fleche3)"/>
          <text x="-6" y="66" fill="#101828" font-weight="600">Flexion / extension</text>
          <text x="-6" y="82">rapprochement / éloignement du plan sagittal</text>
        </g>
        <g transform="translate(280,560)">
          <line x1="0" y1="20" x2="-24" y2="0" stroke="#101828" stroke-width="2"/>
          <line x1="0" y1="20" x2="24" y2="0" stroke="#101828" stroke-width="2" marker-end="url(#pa-fleche4)"/>
          <text x="-30" y="66" fill="#101828" font-weight="600">Abduction / adduction</text>
          <text x="-30" y="82">éloignement / rapprochement du plan sagittal</text>
        </g>
        <g transform="translate(500,560)">
          <path d="M -18 0 A 20 20 0 1 1 -18 20" fill="none" stroke="#101828" stroke-width="2" marker-end="url(#pa-fleche1)"/>
          <text x="-30" y="46" fill="#101828" font-weight="600">Rotation médiale / latérale</text>
          <text x="-30" y="62">autour de l’axe longitudinal</text>
        </g>
        <g transform="translate(720,560)">
          <path d="M -18 10 A 20 8 0 1 1 18 10" fill="none" stroke="#101828" stroke-width="2" marker-end="url(#pa-fleche2)"/>
          <text x="-30" y="46" fill="#101828" font-weight="600">Pronation / supination</text>
          <text x="-30" y="62">rotation de l’avant-bras (radius sur ulna)</text>
        </g>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Plan sagittal médian : plan vertical qui divise le corps en deux moitiés droite et gauche symétriques.' },
    { ref: '2', texte: 'Plan frontal (coronal) : plan vertical perpendiculaire au précédent, séparant une partie antérieure et une partie postérieure.' },
    { ref: '3', texte: 'Plan transversal (horizontal) : plan perpendiculaire au grand axe du corps, séparant une partie supérieure et une partie inférieure.' },
    { ref: '4', texte: 'Axe longitudinal (vertical) : axe de rotation des mouvements de rotation médiale et latérale.' },
    { ref: '5', texte: 'Axe transversal (frontal) : axe des mouvements de flexion et d’extension.' },
    { ref: '6', texte: 'Axe sagittal (antéro-postérieur) : axe des mouvements d’abduction et d’adduction.' },
    { ref: '7', texte: 'Proximal : plus proche de la racine du membre ou du tronc.' },
    { ref: '8', texte: 'Distal : plus éloigné de la racine du membre.' },
    { ref: '9', texte: 'Médial : plus proche du plan sagittal médian.' },
    { ref: '10', texte: 'Latéral : plus éloigné du plan sagittal médian.' },
    { ref: '11', texte: 'Antérieur (ventral) : situé du côté de la face avant du corps.' },
    { ref: '12', texte: 'Postérieur (dorsal) : situé du côté de la face arrière du corps.' },
  ],
};
