import type { Schema } from '../../types';

export const schemaAdme: Schema = {
  id: 'ue6-adme',
  ue: 'ue6',
  titre: 'Le devenir du médicament dans l’organisme (ADME)',
  description:
    'Les quatre étapes du devenir du médicament : absorption, distribution, métabolisme et élimination, avec l’effet de premier passage hépatique et les principales barrières traversées.',
  categorie: 'Pharmacocinétique',
  viewBox: '0 0 920 680',
  ficheLiee: 'ue6-absorption',
  motsCles: ['ADME', 'absorption', 'distribution', 'métabolisme', 'élimination', 'premier passage hépatique', 'biodisponibilité', 'barrière hémato-encéphalique'],
  svg: `
    <rect x="0" y="0" width="920" height="680" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="ue6-adme-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">Les quatre étapes du devenir du médicament (ADME)</text>
      <line x1="40" y1="44" x2="220" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- A : Absorption -->
      <g transform="translate(40,66)">
        <rect x="0" y="0" width="200" height="180" rx="14" fill="#eef4ff" stroke="#c9d6ff"/>
        <circle cx="22" cy="24" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="18" y="29" font-size="12" font-weight="700" fill="#175cd3">1</text>
        <text x="42" y="29" font-size="14" font-weight="600" fill="#101828">Absorption</text>
        <path d="M30,60 Q60,44 90,60 Q120,76 150,60" fill="none" stroke="#175cd3" stroke-width="3" stroke-linecap="round"/>
        <text x="28" y="96" font-size="11.5" fill="#475467">Passage du site</text>
        <text x="28" y="112" font-size="11.5" fill="#475467">d’administration vers</text>
        <text x="28" y="128" font-size="11.5" fill="#475467">la circulation générale</text>
        <text x="28" y="150" font-size="11.5" fill="#175cd3">Voie orale, IV, IM, SC…</text>
        <circle cx="176" cy="150" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="171" y="155" font-size="12" font-weight="700" fill="#175cd3">2</text>
      </g>
      <line x1="242" y1="156" x2="266" y2="156" stroke="#101828" stroke-width="2.2" marker-end="url(#ue6-adme-fleche)"/>

      <!-- D : Distribution -->
      <g transform="translate(272,66)">
        <rect x="0" y="0" width="200" height="180" rx="14" fill="#eafbf1" stroke="#bdeccb"/>
        <circle cx="22" cy="24" r="13" fill="#12a065" opacity="0.2"/>
        <text x="18" y="29" font-size="12" font-weight="700" fill="#12a065">3</text>
        <text x="42" y="29" font-size="14" font-weight="600" fill="#101828">Distribution</text>
        <circle cx="60" cy="90" r="14" fill="#12a065" opacity="0.3"/>
        <circle cx="100" cy="72" r="10" fill="#12a065" opacity="0.3"/>
        <circle cx="130" cy="100" r="12" fill="#12a065" opacity="0.3"/>
        <text x="28" y="128" font-size="11.5" fill="#475467">Diffusion dans les tissus,</text>
        <text x="28" y="144" font-size="11.5" fill="#475467">selon la fixation aux</text>
        <text x="28" y="160" font-size="11.5" fill="#475467">protéines plasmatiques</text>
        <circle cx="176" cy="150" r="13" fill="#12a065" opacity="0.24"/>
        <text x="171" y="155" font-size="12" font-weight="700" fill="#0a7a4d">4</text>
      </g>
      <line x1="474" y1="156" x2="498" y2="156" stroke="#101828" stroke-width="2.2" marker-end="url(#ue6-adme-fleche)"/>

      <!-- M : Métabolisme -->
      <g transform="translate(504,66)">
        <rect x="0" y="0" width="200" height="180" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <circle cx="22" cy="24" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="18" y="29" font-size="12" font-weight="700" fill="#e0632f">5</text>
        <text x="42" y="29" font-size="14" font-weight="600" fill="#101828">Métabolisme</text>
        <path d="M40,60 h100 v40 h-100 z" fill="none" stroke="#e0632f" stroke-width="2.2"/>
        <text x="58" y="86" font-size="11" font-weight="600" fill="#e0632f">foie</text>
        <text x="28" y="122" font-size="11.5" fill="#475467">Biotransformation, surtout</text>
        <text x="28" y="138" font-size="11.5" fill="#475467">hépatique (cytochromes</text>
        <text x="28" y="154" font-size="11.5" fill="#475467">P450), en métabolites</text>
        <circle cx="176" cy="150" r="13" fill="#e0632f" opacity="0.22"/>
        <text x="171" y="155" font-size="12" font-weight="700" fill="#e0632f">6</text>
      </g>
      <line x1="706" y1="156" x2="730" y2="156" stroke="#101828" stroke-width="2.2" marker-end="url(#ue6-adme-fleche)"/>

      <!-- E : Élimination -->
      <g transform="translate(736,66)">
        <rect x="0" y="0" width="144" height="180" rx="14" fill="#f2f0ff" stroke="#dcd6fb"/>
        <circle cx="22" cy="24" r="13" fill="#7c4df5" opacity="0.22"/>
        <text x="18" y="29" font-size="12" font-weight="700" fill="#5a2fc7">7</text>
        <text x="42" y="29" font-size="14" font-weight="600" fill="#101828">Élimination</text>
        <path d="M40,60 q0,-14 14,-14 q0,-16 18,-16 q4,-10 16,-6 q10,-6 16,4 q12,0 10,14 q10,4 4,16 q-4,10 -16,8 h-44 q-16,0 -18,-6z" fill="#7c4df5" opacity="0.28"/>
        <text x="26" y="112" font-size="11.5" fill="#475467">Rénale (majoritaire)</text>
        <text x="26" y="128" font-size="11.5" fill="#475467">ou biliaire/fécale,</text>
        <text x="26" y="144" font-size="11.5" fill="#475467">parfois pulmonaire</text>
        <circle cx="120" cy="150" r="13" fill="#7c4df5" opacity="0.24"/>
        <text x="115" y="155" font-size="12" font-weight="700" fill="#5a2fc7">8</text>
      </g>

      <text x="40" y="284" font-size="19" font-weight="600" fill="#101828">Effet de premier passage hépatique</text>
      <line x1="40" y1="296" x2="220" y2="296" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Schéma premier passage -->
      <g transform="translate(40,318)">
        <rect x="0" y="0" width="130" height="60" rx="10" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="18" y="35" font-size="12.5" font-weight="600" fill="#101828">Tube digestif</text>
        <line x1="130" y1="30" x2="200" y2="30" stroke="#101828" stroke-width="2" marker-end="url(#ue6-adme-fleche)"/>

        <rect x="206" y="0" width="150" height="60" rx="10" fill="#fdecea" stroke="#d4380d"/>
        <text x="228" y="26" font-size="12.5" font-weight="600" fill="#101828">Veine porte</text>
        <text x="228" y="44" font-size="11" fill="#d4380d">passe par le foie</text>
        <circle cx="340" cy="16" r="13" fill="#d4380d" opacity="0.2"/>
        <text x="336" y="21" font-size="12" font-weight="700" fill="#d4380d">9</text>
        <line x1="356" y1="30" x2="426" y2="30" stroke="#101828" stroke-width="2" marker-end="url(#ue6-adme-fleche)"/>

        <rect x="432" y="0" width="140" height="60" rx="10" fill="#eef4ff" stroke="#c9d6ff"/>
        <text x="452" y="26" font-size="12.5" font-weight="600" fill="#101828">Circulation</text>
        <text x="452" y="44" font-size="12.5" font-weight="600" fill="#101828">systémique</text>
        <circle cx="558" cy="16" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="553" y="21" font-size="12" font-weight="700" fill="#175cd3">10</text>

        <text x="0" y="94" font-size="11.5" fill="#475467">Une fraction est métabolisée dès le premier passage hépatique, avant même d’atteindre la circulation générale :</text>
        <text x="0" y="112" font-size="11.5" fill="#475467">ce phénomène réduit la biodisponibilité de nombreux médicaments administrés par voie orale.</text>
      </g>

      <text x="40" y="470" font-size="19" font-weight="600" fill="#101828">Principales barrières traversées</text>
      <line x1="40" y1="482" x2="220" y2="482" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(40,502)">
        <rect x="0" y="0" width="260" height="88" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="22" cy="22" r="13" fill="#101828" opacity="0.14"/>
        <text x="17" y="27" font-size="12" font-weight="700" fill="#101828">11</text>
        <text x="42" y="27" font-size="13" font-weight="600" fill="#101828">Barrière intestinale</text>
        <text x="18" y="50" font-size="11.5" fill="#475467">Épithélium digestif, franchi</text>
        <text x="18" y="66" font-size="11.5" fill="#475467">lors de l’absorption orale</text>

        <rect x="280" y="0" width="260" height="88" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="302" cy="22" r="13" fill="#101828" opacity="0.14"/>
        <text x="296" y="27" font-size="12" font-weight="700" fill="#101828">12</text>
        <text x="322" y="27" font-size="13" font-weight="600" fill="#101828">Barrière hémato-encéphalique</text>
        <text x="298" y="50" font-size="11.5" fill="#475467">Sélective, protège le système</text>
        <text x="298" y="66" font-size="11.5" fill="#475467">nerveux central</text>

        <rect x="560" y="0" width="260" height="88" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="582" y="27" font-size="13" font-weight="600" fill="#101828">Barrière placentaire</text>
        <text x="582" y="50" font-size="11.5" fill="#475467">Traversée par de nombreux</text>
        <text x="582" y="66" font-size="11.5" fill="#475467">médicaments, risque fœtal</text>
      </g>

      <text x="40" y="628" font-size="12" fill="#8a94a8">La biodisponibilité (F) mesure la fraction de la dose administrée qui atteint la circulation générale sous forme active.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Absorption : passage du médicament du site d’administration vers la circulation générale.' },
    { ref: '2', texte: 'La voie et la forme galénique conditionnent la vitesse et l’intensité de l’absorption.' },
    { ref: '3', texte: 'Distribution : diffusion du médicament dans les différents tissus de l’organisme.' },
    { ref: '4', texte: 'La fraction libre (non liée aux protéines plasmatiques) est seule active et diffusible.' },
    { ref: '5', texte: 'Métabolisme (biotransformation) : principalement hépatique, via les cytochromes P450.' },
    { ref: '6', texte: 'Les métabolites peuvent être inactifs, actifs, ou parfois toxiques.' },
    { ref: '7', texte: 'Élimination : sortie définitive du médicament ou de ses métabolites de l’organisme.' },
    { ref: '8', texte: 'La voie rénale est la principale voie d’élimination, devant les voies biliaire et pulmonaire.' },
    { ref: '9', texte: 'Après absorption orale, le sang veineux digestif passe obligatoirement par le foie via la veine porte.' },
    { ref: '10', texte: 'L’effet de premier passage hépatique réduit la quantité de principe actif atteignant la circulation systémique.' },
    { ref: '11', texte: 'Barrière intestinale : premier obstacle franchi lors de l’absorption par voie orale.' },
    { ref: '12', texte: 'Barrière hémato-encéphalique : limite sélectivement l’accès des médicaments au système nerveux central. La barrière placentaire, également franchie par de nombreuses molécules, expose au risque de toxicité fœtale.' },
  ],
};
