import type { Schema } from '../../types';

export const schemaCytosquelette: Schema = {
  id: 'biocell-cytosquelette',
  ue: 'biocell',
  titre: 'Le cytosquelette : trois réseaux de filaments',
  description:
    'Comparaison des microfilaments d’actine, des filaments intermédiaires et des microtubules : diamètre, organisation à partir du centrosome et moteurs moléculaires associés.',
  categorie: 'Biologie cellulaire générale',
  viewBox: '0 0 920 620',
  ficheLiee: 'biocell-cytosquelette',
  motsCles: ['cytosquelette', 'microfilaments', 'actine', 'filaments intermédiaires', 'microtubules', 'kinésine', 'dynéine', 'myosine'],
  svg: `
    <rect x="0" y="0" width="920" height="620" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="36" font-size="19" font-weight="600" fill="#101828">Les trois réseaux du cytosquelette</text>
      <line x1="40" y1="48" x2="200" y2="48" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Colonne 1 : microfilaments d'actine -->
      <g transform="translate(40,72)">
        <rect x="0" y="0" width="270" height="360" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="16" y="28" font-size="14.5" font-weight="600" fill="#101828">Microfilaments d’actine</text>
        <circle cx="246" cy="20" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="242" y="25" font-size="11" font-weight="700" fill="#e0632f">1</text>

        <!-- double hélice d'actine -->
        <path d="M 30 60 q 20 20 0 40 q -20 20 0 40 q 20 20 0 40 q -20 20 0 40" fill="none" stroke="#e0632f" stroke-width="6" stroke-linecap="round"/>
        <path d="M 60 60 q -20 20 0 40 q 20 20 0 40 q -20 20 0 40 q 20 20 0 40" fill="none" stroke="#f0883e" stroke-width="6" stroke-linecap="round"/>
        <text x="90" y="80" font-size="11.5" fill="#475467">≈ 7 nm de diamètre</text>
        <circle cx="120" cy="60" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="116" y="65" font-size="11" font-weight="700" fill="#e0632f">2</text>

        <text x="16" y="250" font-size="12.5" font-weight="600" fill="#475467">Rôles principaux</text>
        <text x="16" y="270" font-size="11.5" fill="#475467">• Cortex cellulaire, forme</text>
        <text x="16" y="288" font-size="11.5" fill="#475467">• Contraction musculaire</text>
        <text x="16" y="306" font-size="11.5" fill="#475467">• Mobilité (lamellipodes)</text>
        <text x="16" y="324" font-size="11.5" fill="#475467">• Anneau contractile (cytodièse)</text>

        <text x="16" y="346" font-size="12" font-weight="600" fill="#d6336c">Moteur : myosine</text>
        <circle cx="180" cy="341" r="13" fill="#d6336c" opacity="0.2"/>
        <text x="176" y="346" font-size="11" font-weight="700" fill="#d6336c">3</text>
      </g>

      <!-- Colonne 2 : filaments intermédiaires -->
      <g transform="translate(330,72)">
        <rect x="0" y="0" width="270" height="360" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="16" y="28" font-size="14.5" font-weight="600" fill="#101828">Filaments intermédiaires</text>
        <circle cx="246" cy="20" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="242" y="25" font-size="11" font-weight="700" fill="#7c4df5">4</text>

        <!-- câble tressé -->
        <path d="M 30 60 l 0 160" stroke="#7c4df5" stroke-width="10" stroke-linecap="round" opacity="0.3"/>
        <path d="M 20 60 q 20 20 0 40 q -20 20 0 40 q 20 20 0 40 q -20 20 0 40" fill="none" stroke="#7c4df5" stroke-width="4"/>
        <path d="M 40 60 q -20 20 0 40 q 20 20 0 40 q -20 20 0 40 q 20 20 0 40" fill="none" stroke="#5a2fc7" stroke-width="4"/>
        <text x="90" y="80" font-size="11.5" fill="#475467">≈ 10 nm de diamètre</text>
        <circle cx="120" cy="60" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="116" y="65" font-size="11" font-weight="700" fill="#7c4df5">5</text>

        <text x="16" y="250" font-size="12.5" font-weight="600" fill="#475467">Rôles principaux</text>
        <text x="16" y="270" font-size="11.5" fill="#475467">• Résistance mécanique</text>
        <text x="16" y="288" font-size="11.5" fill="#475467">• Kératines (épithéliums)</text>
        <text x="16" y="306" font-size="11.5" fill="#475467">• Lamines (enveloppe nucléaire)</text>
        <text x="16" y="324" font-size="11.5" fill="#475467">• Pas de rôle moteur direct</text>

        <text x="16" y="346" font-size="12" font-weight="600" fill="#98a2b3">Réseau statique, stable</text>
      </g>

      <!-- Colonne 3 : microtubules -->
      <g transform="translate(620,72)">
        <rect x="0" y="0" width="260" height="360" rx="14" fill="#eaf2ff" stroke="#c9d6ff"/>
        <text x="16" y="28" font-size="14.5" font-weight="600" fill="#101828">Microtubules</text>
        <circle cx="236" cy="20" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="232" y="25" font-size="11" font-weight="700" fill="#175cd3">6</text>

        <!-- tube creux de tubuline -->
        <ellipse cx="45" cy="60" rx="22" ry="9" fill="none" stroke="#175cd3" stroke-width="3"/>
        <line x1="23" y1="60" x2="23" y2="200" stroke="#175cd3" stroke-width="3"/>
        <line x1="67" y1="60" x2="67" y2="200" stroke="#175cd3" stroke-width="3"/>
        <ellipse cx="45" cy="200" rx="22" ry="9" fill="#eaf2ff" stroke="#175cd3" stroke-width="3"/>
        <circle cx="30" cy="90" r="5" fill="#175cd3"/>
        <circle cx="30" cy="110" r="5" fill="#5a72e0"/>
        <text x="90" y="80" font-size="11.5" fill="#475467">≈ 25 nm de diamètre</text>
        <circle cx="120" cy="60" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="116" y="65" font-size="11" font-weight="700" fill="#175cd3">7</text>
        <text x="90" y="98" font-size="11" fill="#475467">dimères α/β-tubuline</text>

        <text x="16" y="250" font-size="12.5" font-weight="600" fill="#475467">Rôles principaux</text>
        <text x="16" y="270" font-size="11.5" fill="#475467">• Fuseau mitotique</text>
        <text x="16" y="288" font-size="11.5" fill="#475467">• Transport vésiculaire</text>
        <text x="16" y="306" font-size="11.5" fill="#475467">• Cils et flagelles</text>
        <text x="16" y="324" font-size="11.5" fill="#475467">• Issus du centrosome</text>

        <text x="16" y="346" font-size="12" font-weight="600" fill="#0a7a4d">Moteurs : kinésine, dynéine</text>
        <circle cx="230" cy="341" r="13" fill="#0a7a4d" opacity="0.2"/>
        <text x="226" y="346" font-size="11" font-weight="700" fill="#0a7a4d">8</text>
      </g>

      <!-- Bandeau centrosome et moteurs moléculaires -->
      <g transform="translate(40,460)">
        <text x="0" y="0" font-size="15" font-weight="600" fill="#101828">Organisation à partir du centrosome et transport dirigé</text>
        <rect x="0" y="16" width="840" height="120" rx="14" fill="#fafbff" stroke="#e4e9f5"/>

        <!-- Centrosome au centre -->
        <g transform="translate(120,76)">
          <rect x="-14" y="-6" width="24" height="6" fill="#175cd3"/>
          <rect x="-14" y="6" width="24" height="6" fill="#175cd3"/>
        </g>
        <text x="70" y="122" font-size="11.5" fill="#175cd3">Centrosome</text>
        <circle cx="150" cy="55" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="146" y="60" font-size="11" font-weight="700" fill="#175cd3">9</text>

        <g stroke="#175cd3" stroke-width="1.6">
          <line x1="120" y1="76" x2="220" y2="40"/>
          <line x1="120" y1="76" x2="230" y2="76"/>
          <line x1="120" y1="76" x2="220" y2="112"/>
        </g>

        <!-- Membrane cible -->
        <line x1="420" y1="30" x2="420" y2="122" stroke="#98a2b3" stroke-width="2"/>
        <text x="428" y="42" font-size="11" fill="#475467">membrane plasmique</text>

        <!-- Vésicule tirée par kinésine (vers +, périphérie) -->
        <circle cx="330" cy="55" r="10" fill="#f4c22b" opacity="0.9"/>
        <path d="M 330 65 l -10 14 l 20 0 z" fill="#0a7a4d"/>
        <line x1="260" y1="76" x2="320" y2="58" stroke="#0a7a4d" stroke-width="1.6" stroke-dasharray="3 3" marker-end="url(#biocell-cytosquelette-fl1)"/>
        <text x="250" y="100" font-size="11" fill="#0a7a4d">kinésine → périphérie</text>
        <circle cx="380" cy="60" r="13" fill="#0a7a4d" opacity="0.2"/>
        <text x="376" y="65" font-size="11" font-weight="700" fill="#0a7a4d">10</text>

        <!-- Vésicule tirée par dynéine (vers -, centrosome) -->
        <circle cx="330" cy="100" r="10" fill="#d6336c" opacity="0.85"/>
        <path d="M 320 98 l -14 -8 l 0 16 z" fill="#5a2fc7"/>
        <line x1="330" y1="100" x2="260" y2="90" stroke="#5a2fc7" stroke-width="1.6" stroke-dasharray="3 3" marker-end="url(#biocell-cytosquelette-fl2)"/>
        <text x="250" y="118" font-size="11" fill="#5a2fc7">dynéine → centrosome</text>
        <circle cx="380" cy="105" r="13" fill="#5a2fc7" opacity="0.2"/>
        <text x="376" y="110" font-size="11" font-weight="700" fill="#5a2fc7">11</text>

        <text x="500" y="50" font-size="11.5" fill="#475467">Les moteurs moléculaires se déplacent</text>
        <text x="500" y="68" font-size="11.5" fill="#475467">le long des microtubules grâce à</text>
        <text x="500" y="86" font-size="11.5" fill="#475467">l’hydrolyse d’ATP, transportant des</text>
        <text x="500" y="104" font-size="11.5" fill="#475467">vésicules et des organites.</text>
      </g>

      <defs>
        <marker id="biocell-cytosquelette-fl1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#0a7a4d"/>
        </marker>
        <marker id="biocell-cytosquelette-fl2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#5a2fc7"/>
        </marker>
      </defs>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Microfilaments d’actine : le réseau le plus fin du cytosquelette.' },
    { ref: '2', texte: 'Double hélice de monomères d’actine globulaire (actine G polymérisée en actine F), environ 7 nm.' },
    { ref: '3', texte: 'La myosine, moteur associé à l’actine, permet la contraction musculaire et la cytodièse.' },
    { ref: '4', texte: 'Filaments intermédiaires : réseau de résistance mécanique, environ 10 nm de diamètre.' },
    { ref: '5', texte: 'Structure en câble tressé de protéines fibreuses (kératines, vimentine, lamines selon le tissu).' },
    { ref: '6', texte: 'Microtubules : le réseau le plus épais, organisé en tube creux.' },
    { ref: '7', texte: 'Paroi formée de dimères d’α- et de β-tubuline, environ 25 nm de diamètre.' },
    { ref: '8', texte: 'Kinésine et dynéine, moteurs associés aux microtubules, assurent le transport intracellulaire.' },
    { ref: '9', texte: 'Centrosome : centre organisateur des microtubules, d’où ils irradient vers la périphérie.' },
    { ref: '10', texte: 'La kinésine déplace généralement ses cargaisons vers l’extrémité + du microtubule, en périphérie.' },
    { ref: '11', texte: 'La dynéine déplace généralement ses cargaisons vers l’extrémité −, vers le centrosome.' },
  ],
};
