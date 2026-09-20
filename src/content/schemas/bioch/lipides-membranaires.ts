import type { Schema } from '../../types';

export const schemaLipidesMembranaires: Schema = {
  id: 'bioch-lipides-membranaires',
  ue: 'bioch',
  titre: 'Les lipides membranaires',
  description:
    'Classification des lipides : acides gras saturés et insaturés, triglycéride, phospholipide amphiphile, cholestérol, et organisation en bicouche lipidique.',
  categorie: 'Biochimie structurale',
  viewBox: '0 0 920 1000',
  ficheLiee: 'bioch-lipides',
  motsCles: ['acide gras', 'triglycéride', 'phospholipide', 'cholestérol', 'bicouche lipidique'],
  svg: `
    <rect x="0" y="0" width="920" height="1000" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">Les lipides membranaires</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Section 1 : acides gras -->
      <text x="40" y="76" font-size="14.5" font-weight="600" fill="#101828">1 · Acides gras saturés et insaturés</text>

      <text x="30" y="176" font-size="12" fill="#101828">HOOC</text>
      <polyline points="70,170 110,200 150,170 190,200 230,170 270,200 310,170 350,200 390,170" fill="none" stroke="#101828" stroke-width="2.2"/>
      <text x="396" y="176" font-size="12" fill="#101828">CH₃</text>
      <circle cx="230" cy="150" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="226" y="155" font-size="12" font-weight="700" fill="#175cd3">1</text>
      <text x="230" y="225" font-size="11.5" fill="#475467" text-anchor="middle">Acide gras saturé (chaîne coudée régulière,</text>
      <text x="230" y="241" font-size="11.5" fill="#475467" text-anchor="middle">uniquement des liaisons C–C simples)</text>

      <text x="400" y="176" font-size="12" fill="#101828">HOOC</text>
      <polyline points="440,170 480,200 520,170 550,145 580,170 620,200 660,170 700,200 740,170" fill="none" stroke="#101828" stroke-width="2.2"/>
      <line x1="522" y1="176" x2="548" y2="151" stroke="#101828" stroke-width="2.2"/>
      <text x="746" y="176" font-size="12" fill="#101828">CH₃</text>
      <circle cx="550" cy="128" r="13" fill="#d4380d" opacity="0.18"/>
      <text x="546" y="133" font-size="12" font-weight="700" fill="#d4380d">2</text>
      <text x="580" y="128" font-size="10.5" fill="#d4380d">double liaison cis (Δ9)</text>
      <text x="590" y="225" font-size="11.5" fill="#475467" text-anchor="middle">Acide gras insaturé : une ou plusieurs</text>
      <text x="590" y="241" font-size="11.5" fill="#475467" text-anchor="middle">doubles liaisons C=C créent un coude rigide</text>

      <!-- Section 2 : triglycéride -->
      <text x="40" y="286" font-size="14.5" font-weight="600" fill="#101828">2 · Triglycéride : estérification du glycérol</text>

      <line x1="110" y1="305" x2="110" y2="405" stroke="#7c4df5" stroke-width="3"/>
      <circle cx="90" cy="305" r="13" fill="#7c4df5" opacity="0.2"/>
      <text x="86" y="310" font-size="12" font-weight="700" fill="#7c4df5">4</text>
      <text x="30" y="420" font-size="10.5" fill="#7c4df5">glycérol</text>

      <text x="118" y="315" font-size="11" fill="#101828">C1</text>
      <line x1="140" y1="310" x2="180" y2="310" stroke="#475467" stroke-width="1.6"/>
      <text x="184" y="315" font-size="10.5" fill="#101828">O–CO–</text>
      <polyline points="240,310 270,330 300,310 330,330 360,310" fill="none" stroke="#101828" stroke-width="2"/>

      <text x="118" y="355" font-size="11" fill="#101828">C2</text>
      <line x1="140" y1="350" x2="180" y2="350" stroke="#475467" stroke-width="1.6"/>
      <text x="184" y="355" font-size="10.5" fill="#101828">O–CO–</text>
      <polyline points="240,350 270,370 300,350 330,370 360,350" fill="none" stroke="#101828" stroke-width="2"/>
      <circle cx="210" cy="330" r="13" fill="#e0632f" opacity="0.18"/>
      <text x="206" y="335" font-size="12" font-weight="700" fill="#e0632f">3</text>

      <text x="118" y="395" font-size="11" fill="#101828">C3</text>
      <line x1="140" y1="390" x2="180" y2="390" stroke="#475467" stroke-width="1.6"/>
      <text x="184" y="395" font-size="10.5" fill="#101828">O–CO–</text>
      <polyline points="240,390 270,410 300,390 330,410 360,390" fill="none" stroke="#101828" stroke-width="2"/>

      <text x="420" y="330" font-size="11.5" fill="#475467">Trois acides gras estérifiés sur les</text>
      <text x="420" y="346" font-size="11.5" fill="#475467">trois fonctions alcool du glycérol :</text>
      <text x="420" y="362" font-size="11.5" fill="#475467">forme de stockage énergétique du</text>
      <text x="420" y="378" font-size="11.5" fill="#475467">tissu adipeux.</text>

      <!-- Section 3 : phospholipide -->
      <text x="40" y="450" font-size="14.5" font-weight="600" fill="#101828">3 · Phospholipide : une molécule amphiphile</text>

      <circle cx="150" cy="500" r="24" fill="#c9d6ff" stroke="#175cd3" stroke-width="2.4"/>
      <text x="128" y="505" font-size="10" fill="#175cd3">P</text>
      <circle cx="180" cy="480" r="13" fill="#175cd3" opacity="0.2"/>
      <text x="176" y="485" font-size="12" font-weight="700" fill="#175cd3">5</text>
      <polyline points="140,522 130,570 135,620" fill="none" stroke="#475467" stroke-width="1.8"/>
      <polyline points="160,522 170,570 165,620" fill="none" stroke="#475467" stroke-width="1.8"/>
      <circle cx="180" cy="600" r="13" fill="#12a065" opacity="0.2"/>
      <text x="176" y="605" font-size="12" font-weight="700" fill="#12a065">6</text>
      <text x="150" y="655" font-size="11" fill="#175cd3" text-anchor="middle">tête polaire</text>
      <text x="150" y="670" font-size="10" fill="#175cd3" text-anchor="middle">(hydrophile)</text>
      <text x="150" y="695" font-size="11" fill="#12a065" text-anchor="middle">queues d’acides gras</text>
      <text x="150" y="710" font-size="10" fill="#12a065" text-anchor="middle">(hydrophobes)</text>

      <!-- Section 4 : cholestérol -->
      <text x="340" y="450" font-size="14.5" font-weight="600" fill="#101828">4 · Cholestérol</text>
      <path d="M 380 500 h 46 v 40 h -46 z" fill="#fdf6e3" stroke="#b58a00" stroke-width="2"/>
      <path d="M 426 500 h 46 v 40 h -46 z" fill="#fdf6e3" stroke="#b58a00" stroke-width="2"/>
      <path d="M 472 500 h 46 v 40 h -46 z" fill="#fdf6e3" stroke="#b58a00" stroke-width="2"/>
      <path d="M 518 508 h 34 v 26 h -34 z" fill="#fdf6e3" stroke="#b58a00" stroke-width="2"/>
      <line x1="552" y1="512" x2="578" y2="500" stroke="#b58a00" stroke-width="2"/>
      <line x1="578" y1="500" x2="600" y2="510" stroke="#b58a00" stroke-width="2"/>
      <line x1="376" y1="500" x2="360" y2="486" stroke="#b58a00" stroke-width="2"/>
      <text x="330" y="486" font-size="11" fill="#b58a00">HO</text>
      <circle cx="400" cy="484" r="13" fill="#b58a00" opacity="0.22"/>
      <text x="396" y="489" font-size="12" font-weight="700" fill="#8a6a00">7</text>
      <text x="490" y="570" font-size="11" fill="#475467" text-anchor="middle">noyau stérol : 3 cycles à 6 atomes</text>
      <text x="490" y="586" font-size="11" fill="#475467" text-anchor="middle">+ 1 cycle à 5 atomes, OH en C3</text>

      <!-- Section 5 : bicouche -->
      <text x="40" y="640" font-size="14.5" font-weight="600" fill="#101828">5 · Organisation en bicouche lipidique</text>

      <text x="440" y="616" font-size="12" fill="#175cd3" text-anchor="middle">Milieu extracellulaire (aqueux)</text>
      <circle cx="700" cy="612" r="13" fill="#175cd3" opacity="0.18"/>
      <text x="696" y="617" font-size="12" font-weight="700" fill="#175cd3">8</text>

      <circle cx="80" cy="650" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="74,658 70,690 75,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="86,658 90,690 85,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="142" cy="650" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="136,658 132,690 137,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="148,658 152,690 147,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="204" cy="650" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="198,658 194,690 199,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="210,658 214,690 209,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="266" cy="650" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="260,658 256,690 261,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="272,658 276,690 271,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="328" cy="650" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="322,658 318,690 323,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="334,658 338,690 333,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="390" cy="650" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="384,658 380,690 385,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="396,658 400,690 395,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="452" cy="650" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="446,658 442,690 447,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="458,658 462,690 457,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="514" cy="650" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="508,658 504,690 509,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="520,658 524,690 519,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="576" cy="650" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="570,658 566,690 571,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="582,658 586,690 581,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="638" cy="650" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="632,658 628,690 633,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="644,658 648,690 643,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="700" cy="650" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="694,658 690,690 695,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="706,658 710,690 705,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="762" cy="650" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="756,658 752,690 757,730" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="768,658 772,690 767,730" fill="none" stroke="#475467" stroke-width="1.6"/>

      <rect x="60" y="732" width="720" height="86" fill="#fdf6e3" opacity="0.35"/>
      <text x="440" y="778" font-size="11" fill="#8a6a00" text-anchor="middle">cœur hydrophobe (chaînes d’acides gras)</text>
      <circle cx="700" cy="790" r="13" fill="#12a065" opacity="0.2"/>
      <text x="696" y="795" font-size="12" font-weight="700" fill="#12a065">9</text>

      <!-- Cholestérol inséré dans la bicouche -->
      <path d="M 400 745 h 20 v 18 h -20 z" fill="#fdf6e3" stroke="#b58a00" stroke-width="1.6"/>
      <path d="M 420 745 h 20 v 18 h -20 z" fill="#fdf6e3" stroke="#b58a00" stroke-width="1.6"/>
      <circle cx="430" cy="740" r="13" fill="#e0632f" opacity="0.2"/>
      <text x="426" y="745" font-size="11" font-weight="700" fill="#e0632f">10</text>

      <circle cx="80" cy="900" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="74,892 70,860 75,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="86,892 90,860 85,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="142" cy="900" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="136,892 132,860 137,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="148,892 152,860 147,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="204" cy="900" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="198,892 194,860 199,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="210,892 214,860 209,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="266" cy="900" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="260,892 256,860 261,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="272,892 276,860 271,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="328" cy="900" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="322,892 318,860 323,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="334,892 338,860 333,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="390" cy="900" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="384,892 380,860 385,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="396,892 400,860 395,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="452" cy="900" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="446,892 442,860 447,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="458,892 462,860 457,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="514" cy="900" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="508,892 504,860 509,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="520,892 524,860 519,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="576" cy="900" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="570,892 566,860 571,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="582,892 586,860 581,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="638" cy="900" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="632,892 628,860 633,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="644,892 648,860 643,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="700" cy="900" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="694,892 690,860 695,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="706,892 710,860 705,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <circle cx="762" cy="900" r="10" fill="#c9d6ff" stroke="#101828" stroke-width="1"/>
      <polyline points="756,892 752,860 757,820" fill="none" stroke="#475467" stroke-width="1.6"/>
      <polyline points="768,892 772,860 767,820" fill="none" stroke="#475467" stroke-width="1.6"/>

      <text x="440" y="944" font-size="12" fill="#475467" text-anchor="middle">Cytoplasme (aqueux)</text>

      <g transform="translate(40,960)">
        <rect x="0" y="0" width="840" height="30" fill="#ffffff"/>
        <text x="0" y="20" font-size="11.5" fill="#8a94a8">Les têtes polaires font face à l’eau de part et d’autre de la membrane ; les queues hydrophobes forment le cœur imperméable.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Acide gras saturé : chaîne hydrocarbonée sans double liaison, flexible et compacte.' },
    { ref: '2', texte: 'Double liaison cis : introduit un coude rigide dans la chaîne, réduisant l’empilement des chaînes.' },
    { ref: '3', texte: 'Triglycéride : ester formé par la liaison de trois acides gras sur les trois fonctions alcool du glycérol.' },
    { ref: '4', texte: 'Glycérol : alcool à trois carbones, squelette commun des triglycérides et des phospholipides.' },
    { ref: '5', texte: 'Tête polaire du phospholipide (phosphate et groupement azoté) : partie hydrophile, orientée vers l’eau.' },
    { ref: '6', texte: 'Queues d’acides gras du phospholipide : partie hydrophobe, orientée à l’écart de l’eau.' },
    { ref: '7', texte: 'Cholestérol : noyau stérol à quatre cycles fusionnés portant un hydroxyle en C3.' },
    { ref: '8', texte: 'Feuillet externe de la bicouche : les têtes polaires font face au milieu extracellulaire aqueux.' },
    { ref: '9', texte: 'Cœur hydrophobe de la bicouche, formé par les queues d’acides gras des deux feuillets.' },
    { ref: '10', texte: 'Le cholestérol s’insère entre les phospholipides et module la fluidité et la rigidité de la membrane.' },
  ],
};
