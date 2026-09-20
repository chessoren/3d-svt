import type { Schema } from '../../types';

export const schemaScanner: Schema = {
  id: 'ue3-scanner',
  ue: 'ue3',
  titre: 'Principe de la tomodensitométrie (scanner X)',
  description:
    'Rotation synchronisée du couple tube-détecteurs autour du patient, acquisition des profils d’atténuation, reconstruction de la coupe, échelle des unités Hounsfield et notion de fenêtrage.',
  categorie: 'Imagerie médicale',
  viewBox: '0 0 920 660',
  ficheLiee: 'ue3-imagerie-rx-tdm',
  motsCles: ['tomodensitométrie', 'scanner', 'unités Hounsfield', 'reconstruction tomographique', 'fenêtrage', 'atténuation'],
  svg: `
    <rect x="0" y="0" width="920" height="660" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">Principe de la tomodensitométrie</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Panneau A : rotation tube-détecteurs -->
      <g transform="translate(60,70)">
        <rect x="0" y="0" width="380" height="270" rx="14" fill="#f2f6ff" stroke="#c9d6ff"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Acquisition en rotation</text>

        <circle cx="190" cy="150" r="100" fill="none" stroke="#c9d6ff" stroke-width="2" stroke-dasharray="4 5"/>
        <ellipse cx="190" cy="150" rx="46" ry="66" fill="#ffe3df" stroke="#d4380d" stroke-width="2"/>
        <circle cx="190" cy="150" r="16" fill="#eef2f6" stroke="#667085"/>
        <text x="176" y="240" font-size="11.5" fill="#475467">coupe du patient</text>

        <g transform="translate(190,50)">
          <rect x="-16" y="-14" width="32" height="28" rx="6" fill="#175cd3"/>
          <text x="-6" y="-22" font-size="11" fill="#175cd3">tube RX</text>
          <circle cx="24" cy="0" r="13" fill="#175cd3" opacity="0.2"/>
          <text x="19" y="5" font-size="12" font-weight="700" fill="#175cd3">1</text>
        </g>
        <g transform="translate(190,250)">
          <path d="M -60 0 A 60 60 0 0 1 60 0" fill="none" stroke="#12a065" stroke-width="8" stroke-linecap="round"/>
          <text x="-24" y="22" font-size="11" fill="#0f8a58">couronne de détecteurs</text>
          <circle cx="64" cy="-4" r="13" fill="#12a065" opacity="0.2"/>
          <text x="59" y="1" font-size="12" font-weight="700" fill="#12a065">2</text>
        </g>

        <defs>
          <marker id="ue3-scan-fx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#e0632f"/>
          </marker>
        </defs>
        <line x1="190" y1="64" x2="150" y2="208" stroke="#e0632f" stroke-width="1.6" marker-end="url(#ue3-scan-fx)"/>
        <line x1="190" y1="64" x2="190" y2="208" stroke="#e0632f" stroke-width="1.6" marker-end="url(#ue3-scan-fx)"/>
        <line x1="190" y1="64" x2="230" y2="208" stroke="#e0632f" stroke-width="1.6" marker-end="url(#ue3-scan-fx)"/>
        <circle cx="150" cy="120" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="145" y="125" font-size="12" font-weight="700" fill="#e0632f">3</text>

        <path d="M 90 60 A 130 130 0 0 1 290 60" fill="none" stroke="#98a2b3" stroke-width="1.4" stroke-dasharray="2 4"/>
        <text x="230" y="52" font-size="10.5" fill="#8a94a8">rotation solidaire ~ 0,3–1 s/tour</text>
      </g>

      <!-- Panneau B : profils et reconstruction -->
      <g transform="translate(470,70)">
        <rect x="0" y="0" width="410" height="270" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Des profils à l’image</text>
        <circle cx="384" cy="20" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="379" y="25" font-size="12" font-weight="700" fill="#7c4df5">4</text>

        <text x="18" y="52" font-size="11.5" fill="#475467">1. Chaque détecteur mesure l’intensité transmise I,</text>
        <text x="18" y="70" font-size="11.5" fill="#475467">   liée à l’intensité incidente I0 par la loi de Beer-Lambert :</text>
        <rect x="18" y="82" width="220" height="32" rx="8" fill="#ffffff" stroke="#f3d3c2"/>
        <text x="30" y="103" font-size="14.5" font-weight="700" fill="#101828">I = I0 · e^(−μx)</text>

        <text x="18" y="136" font-size="11.5" fill="#475467">2. Un profil d’atténuation est obtenu pour chaque</text>
        <text x="18" y="154" font-size="11.5" fill="#475467">   angle de projection (μ = coefficient d’atténuation).</text>
        <path d="M 20 190 L 40 190 L 46 170 L 60 200 L 74 178 L 90 190 L 120 190"
              fill="none" stroke="#d4380d" stroke-width="2.2"/>
        <circle cx="130" cy="178" r="13" fill="#d4380d" opacity="0.2"/>
        <text x="125" y="183" font-size="12" font-weight="700" fill="#d4380d">5</text>

        <text x="18" y="228" font-size="11.5" fill="#475467">3. Un algorithme de reconstruction (rétroprojection</text>
        <text x="18" y="246" font-size="11.5" fill="#475467">   filtrée) combine tous les profils angulaires en une</text>
        <text x="18" y="264" font-size="11.5" fill="#475467">   carte 2D des coefficients μ : la coupe tomodensitométrique.</text>
      </g>

      <!-- Panneau C : échelle de Hounsfield -->
      <g transform="translate(60,364)">
        <rect x="0" y="0" width="820" height="130" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Échelle des unités Hounsfield (UH)</text>
        <circle cx="784" cy="20" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="778" y="25" font-size="12" font-weight="700" fill="#175cd3">6</text>

        <rect x="20" y="50" width="220" height="30" rx="8" fill="#ffffff" stroke="#e4e9f5"/>
        <text x="32" y="70" font-size="13" font-weight="600" fill="#101828">UH = 1000 × (μ − μeau) / μeau</text>

        <line x1="280" y1="90" x2="800" y2="90" stroke="#475467" stroke-width="2"/>
        <line x1="330" y1="84" x2="330" y2="96" stroke="#475467" stroke-width="1.6"/>
        <text x="300" y="112" font-size="11" fill="#475467">Air</text>
        <text x="296" y="126" font-size="10.5" fill="#8a94a8">−1000 UH</text>

        <line x1="470" y1="84" x2="470" y2="96" stroke="#475467" stroke-width="1.6"/>
        <text x="450" y="112" font-size="11" fill="#475467">Eau</text>
        <text x="454" y="126" font-size="10.5" fill="#8a94a8">0 UH</text>

        <line x1="560" y1="84" x2="560" y2="96" stroke="#475467" stroke-width="1.6"/>
        <text x="524" y="112" font-size="11" fill="#475467">Graisse</text>
        <text x="522" y="126" font-size="10.5" fill="#8a94a8">−100 à −50</text>

        <line x1="660" y1="84" x2="660" y2="96" stroke="#475467" stroke-width="1.6"/>
        <text x="628" y="112" font-size="11" fill="#475467">Tissus mous</text>
        <text x="628" y="126" font-size="10.5" fill="#8a94a8">+20 à +70</text>

        <line x1="770" y1="84" x2="770" y2="96" stroke="#475467" stroke-width="1.6"/>
        <text x="742" y="112" font-size="11" fill="#475467">Os</text>
        <text x="730" y="126" font-size="10.5" fill="#8a94a8">+400 à +1000</text>
        <circle cx="770" cy="72" r="13" fill="#d4380d" opacity="0.2"/>
        <text x="765" y="77" font-size="12" font-weight="700" fill="#d4380d">7</text>
      </g>

      <!-- Panneau D : fenêtrage -->
      <g transform="translate(60,516)">
        <rect x="0" y="0" width="820" height="110" rx="14" fill="#eefaf3" stroke="#bfe8cf"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Notion de fenêtrage</text>
        <circle cx="150" cy="20" r="13" fill="#12a065" opacity="0.2"/>
        <text x="145" y="25" font-size="12" font-weight="700" fill="#12a065">8</text>

        <text x="16" y="52" font-size="12" fill="#475467">Le fenêtrage choisit une plage d’UH (centre WL, largeur WW) affichée sur toute l’échelle de gris :</text>
        <text x="16" y="72" font-size="12" fill="#475467">les valeurs sous la fenêtre paraissent noires, celles au-dessus blanches, ce qui adapte le contraste au tissu étudié.</text>
        <text x="16" y="94" font-size="11.5" fill="#0f8a58">Ex. fenêtre parenchymateuse (WL ≈ 40, WW ≈ 400) ou fenêtre osseuse (WL ≈ 500, WW ≈ 1500).</text>
        <circle cx="700" cy="86" r="13" fill="#0f8a58" opacity="0.2"/>
        <text x="695" y="91" font-size="12" font-weight="700" fill="#0f8a58">9</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Tube à rayons X, solidaire du statif, qui tourne autour du patient à chaque acquisition.' },
    { ref: '2', texte: 'Couronne de détecteurs opposée au tube, qui mesure l’intensité transmise à chaque position angulaire.' },
    { ref: '3', texte: 'Faisceau de rayons X collimaté qui traverse la coupe étudiée selon plusieurs incidences.' },
    { ref: '4', texte: 'Reconstruction tomographique : les projections mesurées à chaque angle sont combinées pour former une image en coupe.' },
    { ref: '5', texte: 'Profil d’atténuation : succession de mesures d’intensité qui traduit les variations de coefficient d’atténuation le long du faisceau.' },
    { ref: '6', texte: 'L’unité Hounsfield rapporte le coefficient d’atténuation μ du tissu à celui de l’eau, fixé arbitrairement à 0.' },
    { ref: '7', texte: 'L’os, très atténuant, se situe en haut de l’échelle ; l’air, transparent aux rayons X, tout en bas (−1000 UH).' },
    { ref: '8', texte: 'Le fenêtrage sélectionne la plage d’UH affichée en niveaux de gris, sans modifier les valeurs mesurées.' },
    { ref: '9', texte: 'Une fenêtre étroite (faible WW) augmente le contraste apparent entre tissus de densités voisines.' },
  ],
};
