import type { Schema } from '../../types';

export const schemaMembranePlasmique: Schema = {
  id: 'biocell-membrane-plasmique',
  ue: 'biocell',
  titre: 'La membrane plasmique : modèle de la mosaïque fluide',
  description:
    'Organisation de la bicouche de phospholipides, place du cholestérol, protéines membranaires et glycocalyx, selon le modèle de Singer et Nicolson.',
  categorie: 'Biologie cellulaire générale',
  viewBox: '0 0 920 560',
  ficheLiee: 'biocell-membrane-plasmique',
  motsCles: ['membrane plasmique', 'mosaïque fluide', 'phospholipides', 'cholestérol', 'glycocalyx', 'protéines membranaires'],
  svg: `
    <rect x="0" y="0" width="920" height="560" rx="18" fill="#ffffff"/>
    <defs>
      <linearGradient id="biocell-membrane-plasmique-grad-out" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#eaf2ff"/>
        <stop offset="100%" stop-color="#ffffff"/>
      </linearGradient>
      <linearGradient id="biocell-membrane-plasmique-grad-in" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#f5f7fb"/>
      </linearGradient>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="38" font-size="19" font-weight="600" fill="#101828">Modèle de la mosaïque fluide (Singer et Nicolson, 1972)</text>
      <line x1="40" y1="50" x2="200" y2="50" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Milieu extracellulaire -->
      <rect x="40" y="70" width="840" height="110" fill="url(#biocell-membrane-plasmique-grad-out)"/>
      <text x="60" y="92" font-size="13" font-weight="600" fill="#175cd3">Milieu extracellulaire</text>

      <!-- Milieu intracellulaire -->
      <rect x="40" y="380" width="840" height="110" fill="url(#biocell-membrane-plasmique-grad-in)"/>
      <text x="60" y="470" font-size="13" font-weight="600" fill="#475467">Cytosol</text>

      <!-- Bicouche de phospholipides -->
      <g>
        <!-- Ligne de têtes externes -->
        <g fill="#175cd3">
          <circle cx="90" cy="190" r="11"/><circle cx="130" cy="190" r="11"/><circle cx="170" cy="190" r="11"/>
          <circle cx="210" cy="190" r="11"/><circle cx="250" cy="190" r="11"/><circle cx="290" cy="190" r="11"/>
          <circle cx="330" cy="190" r="11"/><circle cx="370" cy="190" r="11"/><circle cx="410" cy="190" r="11"/>
          <circle cx="450" cy="190" r="11"/><circle cx="490" cy="190" r="11"/><circle cx="530" cy="190" r="11"/>
          <circle cx="570" cy="190" r="11"/><circle cx="610" cy="190" r="11"/><circle cx="650" cy="190" r="11"/>
          <circle cx="690" cy="190" r="11"/><circle cx="730" cy="190" r="11"/><circle cx="770" cy="190" r="11"/>
          <circle cx="810" cy="190" r="11"/><circle cx="850" cy="190" r="11"/>
        </g>
        <!-- Queues externes -->
        <g stroke="#f4c22b" stroke-width="3" stroke-linecap="round">
          <line x1="86" y1="200" x2="86" y2="250"/><line x1="94" y1="200" x2="94" y2="250"/>
          <line x1="126" y1="200" x2="126" y2="250"/><line x1="134" y1="200" x2="134" y2="250"/>
          <line x1="166" y1="200" x2="166" y2="250"/><line x1="174" y1="200" x2="174" y2="250"/>
          <line x1="206" y1="200" x2="206" y2="250"/><line x1="214" y1="200" x2="214" y2="250"/>
          <line x1="246" y1="200" x2="246" y2="250"/><line x1="254" y1="200" x2="254" y2="250"/>
          <line x1="286" y1="200" x2="286" y2="250"/><line x1="294" y1="200" x2="294" y2="250"/>
          <line x1="326" y1="200" x2="326" y2="250"/><line x1="334" y1="200" x2="334" y2="250"/>
          <line x1="366" y1="200" x2="366" y2="250"/><line x1="374" y1="200" x2="374" y2="250"/>
          <line x1="406" y1="200" x2="406" y2="250"/><line x1="414" y1="200" x2="414" y2="250"/>
          <line x1="446" y1="200" x2="446" y2="250"/><line x1="454" y1="200" x2="454" y2="250"/>
          <line x1="486" y1="200" x2="486" y2="250"/><line x1="494" y1="200" x2="494" y2="250"/>
          <line x1="526" y1="200" x2="526" y2="250"/><line x1="534" y1="200" x2="534" y2="250"/>
          <line x1="566" y1="200" x2="566" y2="250"/><line x1="574" y1="200" x2="574" y2="250"/>
          <line x1="606" y1="200" x2="606" y2="250"/><line x1="614" y1="200" x2="614" y2="250"/>
          <line x1="646" y1="200" x2="646" y2="250"/><line x1="654" y1="200" x2="654" y2="250"/>
          <line x1="686" y1="200" x2="686" y2="250"/><line x1="694" y1="200" x2="694" y2="250"/>
          <line x1="726" y1="200" x2="726" y2="250"/><line x1="734" y1="200" x2="734" y2="250"/>
          <line x1="766" y1="200" x2="766" y2="250"/><line x1="774" y1="200" x2="774" y2="250"/>
          <line x1="806" y1="200" x2="806" y2="250"/><line x1="814" y1="200" x2="814" y2="250"/>
          <line x1="846" y1="200" x2="846" y2="250"/><line x1="854" y1="200" x2="854" y2="250"/>
        </g>
        <!-- Queues internes -->
        <g stroke="#f4c22b" stroke-width="3" stroke-linecap="round">
          <line x1="86" y1="260" x2="86" y2="310"/><line x1="94" y1="260" x2="94" y2="310"/>
          <line x1="126" y1="260" x2="126" y2="310"/><line x1="134" y1="260" x2="134" y2="310"/>
          <line x1="166" y1="260" x2="166" y2="310"/><line x1="174" y1="260" x2="174" y2="310"/>
          <line x1="206" y1="260" x2="206" y2="310"/><line x1="214" y1="260" x2="214" y2="310"/>
          <line x1="246" y1="260" x2="246" y2="310"/><line x1="254" y1="260" x2="254" y2="310"/>
          <line x1="286" y1="260" x2="286" y2="310"/><line x1="294" y1="260" x2="294" y2="310"/>
          <line x1="326" y1="260" x2="326" y2="310"/><line x1="334" y1="260" x2="334" y2="310"/>
          <line x1="366" y1="260" x2="366" y2="310"/><line x1="374" y1="260" x2="374" y2="310"/>
          <line x1="406" y1="260" x2="406" y2="310"/><line x1="414" y1="260" x2="414" y2="310"/>
          <line x1="446" y1="260" x2="446" y2="310"/><line x1="454" y1="260" x2="454" y2="310"/>
          <line x1="486" y1="260" x2="486" y2="310"/><line x1="494" y1="260" x2="494" y2="310"/>
          <line x1="526" y1="260" x2="526" y2="310"/><line x1="534" y1="260" x2="534" y2="310"/>
          <line x1="566" y1="260" x2="566" y2="310"/><line x1="574" y1="260" x2="574" y2="310"/>
          <line x1="606" y1="260" x2="606" y2="310"/><line x1="614" y1="260" x2="614" y2="310"/>
          <line x1="646" y1="260" x2="646" y2="310"/><line x1="654" y1="260" x2="654" y2="310"/>
          <line x1="686" y1="260" x2="686" y2="310"/><line x1="694" y1="260" x2="694" y2="310"/>
          <line x1="726" y1="260" x2="726" y2="310"/><line x1="734" y1="260" x2="734" y2="310"/>
          <line x1="766" y1="260" x2="766" y2="310"/><line x1="774" y1="260" x2="774" y2="310"/>
          <line x1="806" y1="260" x2="806" y2="310"/><line x1="814" y1="260" x2="814" y2="310"/>
          <line x1="846" y1="260" x2="846" y2="310"/><line x1="854" y1="260" x2="854" y2="310"/>
        </g>
        <!-- Ligne de têtes internes -->
        <g fill="#175cd3">
          <circle cx="90" cy="320" r="11"/><circle cx="130" cy="320" r="11"/><circle cx="170" cy="320" r="11"/>
          <circle cx="210" cy="320" r="11"/><circle cx="250" cy="320" r="11"/><circle cx="290" cy="320" r="11"/>
          <circle cx="330" cy="320" r="11"/><circle cx="370" cy="320" r="11"/><circle cx="410" cy="320" r="11"/>
          <circle cx="450" cy="320" r="11"/><circle cx="490" cy="320" r="11"/><circle cx="530" cy="320" r="11"/>
          <circle cx="570" cy="320" r="11"/><circle cx="610" cy="320" r="11"/><circle cx="650" cy="320" r="11"/>
          <circle cx="690" cy="320" r="11"/><circle cx="730" cy="320" r="11"/><circle cx="770" cy="320" r="11"/>
          <circle cx="810" cy="320" r="11"/><circle cx="850" cy="320" r="11"/>
        </g>
      </g>

      <circle cx="70" cy="190" r="13" fill="#175cd3" opacity="0.2"/>
      <text x="66" y="195" font-size="11" font-weight="700" fill="#175cd3">1</text>
      <text x="60" y="150" font-size="12" fill="#175cd3">Tête hydrophile (polaire)</text>
      <circle cx="94" cy="228" r="13" fill="#f4c22b" opacity="0.28"/>
      <text x="90" y="233" font-size="11" font-weight="700" fill="#8a6300">2</text>
      <text x="640" y="150" font-size="12" fill="#8a6300">Queue hydrophobe (acides gras)</text>
      <line x1="700" y1="200" x2="656" y2="225" stroke="#8a6300" stroke-width="1.2"/>

      <!-- Cholestérol -->
      <g transform="translate(230,225)">
        <rect x="-6" y="-16" width="12" height="72" rx="5" fill="#12a065"/>
      </g>
      <circle cx="230" cy="255" r="13" fill="#12a065" opacity="0.22"/>
      <text x="226" y="260" font-size="11" font-weight="700" fill="#0a7a4d">3</text>
      <text x="192" y="345" font-size="12" font-weight="600" fill="#0a7a4d">Cholestérol</text>

      <!-- Protéine transmembranaire (intrinsèque) -->
      <g transform="translate(450,255)">
        <path d="M -18 -70 q 0 30 10 40 q -10 10 -10 40 q 0 30 10 45" fill="none" stroke="#e0632f" stroke-width="9" stroke-linecap="round"/>
        <path d="M 4 -70 q 0 30 -10 40 q 10 10 10 40 q 0 30 -10 45" fill="none" stroke="#e0632f" stroke-width="9" stroke-linecap="round"/>
      </g>
      <circle cx="440" cy="185" r="13" fill="#e0632f" opacity="0.2"/>
      <text x="436" y="190" font-size="11" font-weight="700" fill="#e0632f">4</text>
      <text x="465" y="70" font-size="12" font-weight="600" fill="#e0632f">Protéine intrinsèque</text>
      <text x="465" y="88" font-size="11.5" fill="#e0632f">(transmembranaire)</text>

      <!-- Protéine extrinsèque, posée sur le feuillet interne -->
      <ellipse cx="640" cy="345" rx="34" ry="15" fill="#7c4df5" opacity="0.85"/>
      <circle cx="672" cy="345" r="13" fill="#7c4df5" opacity="0.24"/>
      <text x="668" y="350" font-size="11" font-weight="700" fill="#5a2fc7">5</text>
      <text x="580" y="400" font-size="12" font-weight="600" fill="#5a2fc7">Protéine extrinsèque</text>
      <text x="580" y="418" font-size="11.5" fill="#5a2fc7">(périphérique)</text>

      <!-- Glycoprotéine et glycolipide côté externe : glycocalyx -->
      <g transform="translate(700,190)" stroke="#d6336c" stroke-width="2.4" fill="none" stroke-linecap="round">
        <path d="M 0 0 q 8 -18 -4 -30"/>
        <path d="M 0 0 q -10 -16 2 -34"/>
        <circle cx="-4" cy="-30" r="4" fill="#d6336c" stroke="none"/>
        <circle cx="2" cy="-34" r="4" fill="#d6336c" stroke="none"/>
      </g>
      <circle cx="720" cy="130" r="13" fill="#d6336c" opacity="0.2"/>
      <text x="716" y="135" font-size="11" font-weight="700" fill="#d6336c">6</text>
      <text x="740" y="120" font-size="12" font-weight="600" fill="#d6336c">Glycoprotéine</text>

      <g transform="translate(770,190)" stroke="#d6336c" stroke-width="2.4" fill="none" stroke-linecap="round">
        <path d="M 0 0 q 6 -20 -6 -32"/>
        <circle cx="-6" cy="-32" r="4" fill="#d6336c" stroke="none"/>
      </g>
      <circle cx="790" cy="140" r="13" fill="#d6336c" opacity="0.2"/>
      <text x="786" y="145" font-size="11" font-weight="700" fill="#d6336c">7</text>
      <text x="726" y="100" font-size="12" font-weight="600" fill="#d6336c">Glycolipide</text>

      <!-- Accolade glycocalyx -->
      <path d="M 690 100 q 120 -20 220 10" fill="none" stroke="#d6336c" stroke-width="1.2" stroke-dasharray="3 3"/>
      <circle cx="900" cy="112" r="13" fill="#d6336c" opacity="0.16"/>
      <text x="895" y="117" font-size="11" font-weight="700" fill="#d6336c">8</text>

      <!-- Double feuillet, encadré titre -->
      <circle cx="60" cy="255" r="13" fill="#101828" opacity="0.14"/>
      <text x="55" y="260" font-size="11" font-weight="700" fill="#101828">9</text>
      <text x="20" y="255" font-size="12" font-weight="600" fill="#101828" transform="rotate(-90 20 255)">Bicouche lipidique</text>

      <text x="40" y="530" font-size="12" fill="#8a94a8">La membrane est fluide : phospholipides et protéines diffusent latéralement dans chaque feuillet.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Tête polaire (phosphate + glycérol), orientée vers les milieux aqueux.' },
    { ref: '2', texte: 'Queue apolaire (chaînes d’acides gras), orientée vers l’intérieur de la bicouche.' },
    { ref: '3', texte: 'Cholestérol : s’intercale entre les phospholipides et module la fluidité membranaire.' },
    { ref: '4', texte: 'Protéine intrinsèque transmembranaire : traverse toute l’épaisseur de la membrane.' },
    { ref: '5', texte: 'Protéine extrinsèque : associée à un seul feuillet, non transmembranaire.' },
    { ref: '6', texte: 'Glycoprotéine : protéine portant une chaîne glucidique exposée en surface.' },
    { ref: '7', texte: 'Glycolipide : lipide portant une chaîne glucidique, toujours du côté extracellulaire.' },
    { ref: '8', texte: 'Glycocalyx : ensemble des chaînes glucidiques formant un revêtement de surface.' },
    { ref: '9', texte: 'Bicouche lipidique : structure fondamentale de la membrane, deux feuillets accolés queue à queue.' },
  ],
};
