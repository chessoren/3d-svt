import type { Schema } from '../../types';

export const schemaMitochondrie: Schema = {
  id: 'biocell-mitochondrie',
  ue: 'biocell',
  titre: 'Ultrastructure de la mitochondrie',
  description:
    'Organisation des deux membranes mitochondriales, de l’espace intermembranaire et de la matrice, avec la localisation de l’ADN mitochondrial et des grandes voies métaboliques.',
  categorie: 'Biologie cellulaire générale',
  viewBox: '0 0 920 600',
  ficheLiee: 'biocell-mitochondrie',
  motsCles: ['mitochondrie', 'membrane interne', 'crêtes mitochondriales', 'matrice', 'ADN mitochondrial', 'chaîne respiratoire'],
  svg: `
    <rect x="0" y="0" width="920" height="600" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="36" font-size="19" font-weight="600" fill="#101828">Ultrastructure de la mitochondrie</text>
      <line x1="40" y1="48" x2="200" y2="48" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Grande coupe de mitochondrie -->
      <g transform="translate(60,90)">
        <!-- Membrane externe -->
        <ellipse cx="230" cy="150" rx="220" ry="140" fill="#fdece0" stroke="#e0632f" stroke-width="3"/>
        <!-- Espace intermembranaire -->
        <ellipse cx="230" cy="150" rx="202" ry="124" fill="#fff8f3" stroke="none"/>
        <!-- Matrice -->
        <ellipse cx="230" cy="150" rx="188" ry="112" fill="#fff2e6"/>

        <!-- Crêtes mitochondriales (invaginations de la membrane interne) -->
        <g stroke="#d4380d" stroke-width="4" fill="none" stroke-linecap="round">
          <path d="M 90 90 q 60 4 60 60 q 0 56 -60 60"/>
          <path d="M 150 80 q 65 6 65 70 q 0 64 -65 70"/>
          <path d="M 210 76 q 68 8 68 74 q 0 66 -68 74"/>
          <path d="M 275 80 q 65 6 65 70 q 0 64 -65 70"/>
          <path d="M 335 90 q 55 6 55 60 q 0 54 -55 60"/>
        </g>

        <!-- Membrane interne (contour) -->
        <ellipse cx="230" cy="150" rx="188" ry="112" fill="none" stroke="#d4380d" stroke-width="3"/>

        <!-- ADN mitochondrial dans la matrice -->
        <g transform="translate(140,150)">
          <circle r="18" fill="none" stroke="#12a065" stroke-width="2.6"/>
          <path d="M -10 -10 q 10 8 20 0" stroke="#0a7a4d" stroke-width="1.4" fill="none"/>
          <path d="M -10 4 q 10 8 20 0" stroke="#0a7a4d" stroke-width="1.4" fill="none"/>
        </g>

        <!-- Ribosomes mitochondriaux -->
        <circle cx="180" cy="190" r="4" fill="#7c4df5"/>
        <circle cx="192" cy="200" r="4" fill="#7c4df5"/>
        <circle cx="170" cy="205" r="4" fill="#7c4df5"/>

        <!-- Particules ATP synthase sur les crêtes -->
        <circle cx="150" cy="90" r="4" fill="#175cd3"/>
        <circle cx="215" cy="82" r="4" fill="#175cd3"/>
        <circle cx="280" cy="90" r="4" fill="#175cd3"/>
      </g>

      <!-- Pastilles de légende sur le dessin -->
      <circle cx="80" cy="92" r="13" fill="#e0632f" opacity="0.22"/>
      <text x="76" y="97" font-size="11" font-weight="700" fill="#e0632f">1</text>
      <text x="30" y="70" font-size="11.5" font-weight="600" fill="#e0632f">Membrane externe</text>

      <circle cx="100" cy="120" r="13" fill="#f0883e" opacity="0.3"/>
      <text x="96" y="125" font-size="11" font-weight="700" fill="#8a4a1a">2</text>
      <text x="30" y="150" font-size="11.5" font-weight="600" fill="#8a4a1a">Espace</text>
      <text x="30" y="166" font-size="11.5" font-weight="600" fill="#8a4a1a">intermembranaire</text>

      <circle cx="200" cy="118" r="13" fill="#d4380d" opacity="0.22"/>
      <text x="196" y="123" font-size="11" font-weight="700" fill="#d4380d">3</text>
      <text x="640" y="120" font-size="11.5" font-weight="600" fill="#d4380d">Membrane interne</text>

      <circle cx="290" cy="170" r="13" fill="#d4380d" opacity="0.22"/>
      <text x="286" y="175" font-size="11" font-weight="700" fill="#d4380d">4</text>
      <text x="640" y="150" font-size="11.5" font-weight="600" fill="#d4380d">Crêtes mitochondriales</text>

      <circle cx="230" cy="250" r="13" fill="#fbd7ae" opacity="0.9"/>
      <text x="226" y="255" font-size="11" font-weight="700" fill="#8a4a1a">5</text>
      <text x="640" y="180" font-size="11.5" font-weight="600" fill="#8a4a1a">Matrice mitochondriale</text>

      <circle cx="158" cy="150" r="13" fill="#12a065" opacity="0.24"/>
      <text x="154" y="155" font-size="11" font-weight="700" fill="#0a7a4d">6</text>
      <text x="640" y="210" font-size="11.5" font-weight="600" fill="#0a7a4d">ADN mitochondrial</text>

      <circle cx="198" cy="202" r="13" fill="#7c4df5" opacity="0.24"/>
      <text x="194" y="207" font-size="11" font-weight="700" fill="#5a2fc7">7</text>
      <text x="640" y="240" font-size="11.5" font-weight="600" fill="#5a2fc7">Ribosomes mitochondriaux</text>

      <circle cx="215" cy="82" r="13" fill="#175cd3" opacity="0.24"/>
      <text x="211" y="87" font-size="11" font-weight="700" fill="#175cd3">8</text>
      <text x="640" y="270" font-size="11.5" font-weight="600" fill="#175cd3">ATP synthase</text>

      <!-- Bandeau des grandes voies métaboliques -->
      <g transform="translate(40,360)">
        <text x="0" y="0" font-size="15" font-weight="600" fill="#101828">Localisation des grandes voies métaboliques</text>
        <rect x="0" y="16" width="840" height="200" rx="14" fill="#fafbff" stroke="#e4e9f5"/>

        <text x="24" y="48" font-size="13" font-weight="600" fill="#8a4a1a">Dans la matrice</text>
        <circle cx="180" cy="42" r="13" fill="#fbd7ae" opacity="0.9"/>
        <text x="176" y="47" font-size="11" font-weight="700" fill="#8a4a1a">9</text>
        <text x="24" y="70" font-size="11.5" fill="#475467">• Cycle de Krebs (cycle de l’acide citrique)</text>
        <text x="24" y="88" font-size="11.5" fill="#475467">• β-oxydation des acides gras</text>
        <text x="24" y="106" font-size="11.5" fill="#475467">• Réplication et transcription de l’ADNmt</text>

        <text x="440" y="48" font-size="13" font-weight="600" fill="#d4380d">Sur la membrane interne</text>
        <circle cx="640" cy="42" r="13" fill="#d4380d" opacity="0.22"/>
        <text x="636" y="47" font-size="11" font-weight="700" fill="#d4380d">10</text>
        <text x="440" y="70" font-size="11.5" fill="#475467">• Chaîne respiratoire (complexes I à IV)</text>
        <text x="440" y="88" font-size="11.5" fill="#475467">• ATP synthase (complexe V)</text>
        <text x="440" y="106" font-size="11.5" fill="#475467">• Gradient de protons transmembranaire</text>

        <text x="24" y="140" font-size="11.5" fill="#475467">Les crêtes augmentent considérablement la surface de membrane interne,</text>
        <text x="24" y="158" font-size="11.5" fill="#475467">et donc le rendement de la production d’ATP par phosphorylation oxydative.</text>
        <text x="24" y="182" font-size="11.5" fill="#8a94a8">Génome propre, circulaire, de transmission strictement maternelle.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Membrane externe : lisse, perméable grâce aux porines.' },
    { ref: '2', texte: 'Espace intermembranaire : entre les deux membranes, riche en protons lors de la respiration.' },
    { ref: '3', texte: 'Membrane interne : imperméable, siège de la chaîne respiratoire et de l’ATP synthase.' },
    { ref: '4', texte: 'Crêtes mitochondriales : replis de la membrane interne augmentant la surface d’échange.' },
    { ref: '5', texte: 'Matrice mitochondriale : compartiment central, siège du cycle de Krebs.' },
    { ref: '6', texte: 'ADN mitochondrial : molécule circulaire, distincte de l’ADN nucléaire, hérité de la mère.' },
    { ref: '7', texte: 'Ribosomes mitochondriaux : traduisent les ARNm codés par l’ADN mitochondrial.' },
    { ref: '8', texte: 'ATP synthase : complexe protéique produisant l’ATP grâce au gradient de protons.' },
    { ref: '9', texte: 'Voies métaboliques matricielles : cycle de Krebs et β-oxydation des acides gras.' },
    { ref: '10', texte: 'Chaîne respiratoire membranaire : transfert d’électrons couplé au pompage de protons.' },
  ],
};
