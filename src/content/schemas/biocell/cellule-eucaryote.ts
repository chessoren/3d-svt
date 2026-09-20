import type { Schema } from '../../types';

export const schemaCelluleEucaryote: Schema = {
  id: 'biocell-cellule-eucaryote',
  ue: 'biocell',
  titre: 'La cellule eucaryote animale',
  description:
    'Coupe schématique d’une cellule animale montrant l’ensemble des organites : noyau, système endomembranaire, mitochondries, cytosquelette et membrane plasmique.',
  categorie: 'Biologie cellulaire générale',
  viewBox: '0 0 920 640',
  ficheLiee: 'biocell-cellule-generalites',
  motsCles: ['cellule eucaryote', 'organites', 'noyau', 'réticulum endoplasmique', 'appareil de Golgi', 'mitochondrie'],
  svg: `
    <rect x="0" y="0" width="920" height="640" rx="18" fill="#ffffff"/>
    <defs>
      <radialGradient id="biocell-cellule-eucaryote-grad-cyto" cx="50%" cy="45%" r="70%">
        <stop offset="0%" stop-color="#f5f8ff"/>
        <stop offset="100%" stop-color="#eef2fb"/>
      </radialGradient>
      <radialGradient id="biocell-cellule-eucaryote-grad-noyau" cx="45%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#e7ecff"/>
        <stop offset="100%" stop-color="#c9d6ff"/>
      </radialGradient>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="38" font-size="19" font-weight="600" fill="#101828">Coupe d’une cellule animale</text>
      <line x1="40" y1="50" x2="200" y2="50" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Corps cellulaire -->
      <ellipse cx="330" cy="340" rx="290" ry="250" fill="url(#biocell-cellule-eucaryote-grad-cyto)" stroke="#98a2b3" stroke-width="2.5"/>
      <text x="70" y="110" font-size="13" font-weight="600" fill="#475467">Cytosol</text>
      <circle cx="58" cy="106" r="12" fill="#475467" opacity="0.16"/>
      <text x="54" y="111" font-size="11" font-weight="700" fill="#475467">1</text>

      <!-- Membrane plasmique -->
      <circle cx="330" cy="340" r="0" fill="none"/>
      <text x="120" y="558" font-size="13" font-weight="600" fill="#12a065">Membrane plasmique</text>
      <circle cx="108" cy="554" r="12" fill="#12a065" opacity="0.18"/>
      <text x="104" y="559" font-size="11" font-weight="700" fill="#12a065">2</text>
      <line x1="200" y1="555" x2="230" y2="560" stroke="#12a065" stroke-width="1.6"/>

      <!-- Noyau -->
      <ellipse cx="270" cy="300" rx="120" ry="105" fill="url(#biocell-cellule-eucaryote-grad-noyau)" stroke="#5a72e0" stroke-width="2.4"/>
      <ellipse cx="270" cy="300" rx="120" ry="105" fill="none" stroke="#5a72e0" stroke-width="1" stroke-dasharray="2 3"/>
      <circle cx="300" cy="310" r="34" fill="#7c4df5" opacity="0.55"/>
      <text x="182" y="205" font-size="13" font-weight="600" fill="#3b3fb0">Noyau</text>
      <circle cx="172" cy="200" r="12" fill="#3b3fb0" opacity="0.18"/>
      <text x="168" y="205" font-size="11" font-weight="700" fill="#3b3fb0">3</text>
      <text x="330" y="286" font-size="12" font-weight="600" fill="#ffffff">Nucléole</text>
      <circle cx="330" cy="336" r="12" fill="#3b3fb0" opacity="0.7"/>
      <text x="326" y="341" font-size="11" font-weight="700" fill="#ffffff">4</text>

      <!-- Enveloppe nucléaire et pores -->
      <g stroke="#5a72e0" stroke-width="1.4">
        <line x1="238" y1="197" x2="230" y2="182"/>
        <circle cx="230" cy="182" r="3" fill="#5a72e0" stroke="none"/>
      </g>
      <circle cx="248" cy="160" r="12" fill="#5a72e0" opacity="0.18"/>
      <text x="244" y="165" font-size="11" font-weight="700" fill="#5a72e0">5</text>
      <text x="262" y="150" font-size="11.5" fill="#475467">Pore nucléaire</text>

      <!-- Réticulum endoplasmique rugueux -->
      <path d="M 400 260 q 30 -10 55 5 q 25 15 50 0 q 25 -15 45 5" fill="none" stroke="#d4380d" stroke-width="2.2"/>
      <path d="M 395 280 q 30 -10 55 5 q 25 15 50 0 q 25 -15 45 5" fill="none" stroke="#d4380d" stroke-width="2.2"/>
      <path d="M 390 300 q 30 -10 55 5 q 25 15 50 0 q 25 -15 45 5" fill="none" stroke="#d4380d" stroke-width="2.2"/>
      <circle cx="410" cy="258" r="1.6" fill="#101828"/>
      <circle cx="430" cy="262" r="1.6" fill="#101828"/>
      <circle cx="450" cy="257" r="1.6" fill="#101828"/>
      <circle cx="470" cy="264" r="1.6" fill="#101828"/>
      <circle cx="415" cy="279" r="1.6" fill="#101828"/>
      <circle cx="440" cy="283" r="1.6" fill="#101828"/>
      <circle cx="465" cy="278" r="1.6" fill="#101828"/>
      <text x="500" y="250" font-size="12" font-weight="600" fill="#d4380d">Réticulum endoplasmique</text>
      <text x="522" y="266" font-size="11.5" fill="#d4380d">granuleux (rugueux)</text>
      <circle cx="562" cy="288" r="12" fill="#d4380d" opacity="0.18"/>
      <text x="558" y="293" font-size="11" font-weight="700" fill="#d4380d">6</text>

      <!-- Réticulum endoplasmique lisse -->
      <path d="M 400 340 q 20 -18 40 -4 q 20 14 40 -2 q 20 -16 42 0 q 20 14 38 -2" fill="none" stroke="#f0883e" stroke-width="2.2"/>
      <text x="500" y="332" font-size="12" font-weight="600" fill="#f0883e">Réticulum endoplasmique</text>
      <text x="522" y="348" font-size="11.5" fill="#f0883e">lisse (agranuleux)</text>
      <circle cx="562" cy="368" r="12" fill="#f0883e" opacity="0.2"/>
      <text x="558" y="373" font-size="11" font-weight="700" fill="#f0883e">7</text>

      <!-- Appareil de Golgi -->
      <g transform="translate(430,400)">
        <path d="M 0 0 q 40 -8 80 0" fill="none" stroke="#7c4df5" stroke-width="4"/>
        <path d="M 4 10 q 36 -8 72 0" fill="none" stroke="#7c4df5" stroke-width="4"/>
        <path d="M 8 20 q 32 -8 64 0" fill="none" stroke="#7c4df5" stroke-width="4"/>
        <path d="M 12 30 q 28 -8 56 0" fill="none" stroke="#7c4df5" stroke-width="4"/>
        <circle cx="-6" cy="0" r="4" fill="#7c4df5"/>
        <circle cx="86" cy="30" r="4" fill="#7c4df5"/>
      </g>
      <text x="520" y="400" font-size="12" font-weight="600" fill="#7c4df5">Appareil de Golgi</text>
      <circle cx="562" cy="420" r="12" fill="#7c4df5" opacity="0.18"/>
      <text x="558" y="425" font-size="11" font-weight="700" fill="#7c4df5">8</text>

      <!-- Mitochondries -->
      <g transform="translate(140,420)">
        <ellipse cx="0" cy="0" rx="46" ry="24" fill="#fdece0" stroke="#e0632f" stroke-width="2"/>
        <path d="M -30 -8 q 8 -14 16 0 q 8 -14 16 0 q 8 -14 16 0 q 8 -14 16 0" fill="none" stroke="#e0632f" stroke-width="1.6"/>
        <path d="M -30 8 q 8 -14 16 0 q 8 -14 16 0 q 8 -14 16 0 q 8 -14 16 0" fill="none" stroke="#e0632f" stroke-width="1.6"/>
      </g>
      <text x="86" y="470" font-size="12" font-weight="600" fill="#e0632f">Mitochondrie</text>
      <circle cx="152" cy="480" r="12" fill="#e0632f" opacity="0.18"/>
      <text x="148" y="485" font-size="11" font-weight="700" fill="#e0632f">9</text>

      <!-- Lysosome -->
      <circle cx="480" cy="480" r="20" fill="#12a065" opacity="0.22" stroke="#12a065" stroke-width="2"/>
      <circle cx="472" cy="474" r="4" fill="#12a065"/>
      <circle cx="486" cy="484" r="3" fill="#12a065"/>
      <text x="440" y="518" font-size="12" font-weight="600" fill="#12a065">Lysosome</text>
      <circle cx="502" cy="500" r="12" fill="#12a065" opacity="0.2"/>
      <text x="498" y="505" font-size="11" font-weight="700" fill="#12a065">10</text>

      <!-- Peroxysome -->
      <circle cx="380" cy="470" r="16" fill="#f4c22b" opacity="0.28" stroke="#b98a08" stroke-width="2"/>
      <text x="316" y="500" font-size="12" font-weight="600" fill="#b98a08">Peroxysome</text>
      <circle cx="396" cy="486" r="12" fill="#b98a08" opacity="0.2"/>
      <text x="392" y="491" font-size="11" font-weight="700" fill="#b98a08">11</text>

      <!-- Centrosome -->
      <g transform="translate(250,470)">
        <rect x="-14" y="-6" width="22" height="6" fill="#175cd3"/>
        <rect x="-14" y="6" width="22" height="6" fill="#175cd3"/>
      </g>
      <text x="196" y="510" font-size="12" font-weight="600" fill="#175cd3">Centrosome (2 centrioles)</text>
      <circle cx="230" cy="452" r="12" fill="#175cd3" opacity="0.18"/>
      <text x="226" y="457" font-size="11" font-weight="700" fill="#175cd3">12</text>

      <!-- Cytosquelette : microtubules irradiant du centrosome -->
      <g stroke="#8a94a8" stroke-width="1.2">
        <line x1="250" y1="470" x2="180" y2="410"/>
        <line x1="250" y1="470" x2="150" y2="460"/>
        <line x1="250" y1="470" x2="170" y2="520"/>
        <line x1="250" y1="470" x2="310" y2="540"/>
      </g>

      <!-- Bloc légende titres de parties -->
      <text x="700" y="70" font-size="14" font-weight="600" fill="#101828">Système endomembranaire</text>
      <line x1="700" y1="80" x2="880" y2="80" stroke="#d0d5dd" stroke-width="1.4"/>
      <text x="700" y="102" font-size="11.5" fill="#475467">Noyau, RE, Golgi et</text>
      <text x="700" y="120" font-size="11.5" fill="#475467">vésicules sont en</text>
      <text x="700" y="138" font-size="11.5" fill="#475467">continuité fonctionnelle.</text>

      <text x="700" y="200" font-size="14" font-weight="600" fill="#101828">Organites énergétiques</text>
      <line x1="700" y1="210" x2="880" y2="210" stroke="#d0d5dd" stroke-width="1.4"/>
      <text x="700" y="232" font-size="11.5" fill="#475467">Mitochondries : ATP</text>
      <text x="700" y="250" font-size="11.5" fill="#475467">Peroxysomes : β-oxydation</text>

      <text x="700" y="312" font-size="14" font-weight="600" fill="#101828">Cytosquelette</text>
      <line x1="700" y1="322" x2="880" y2="322" stroke="#d0d5dd" stroke-width="1.4"/>
      <text x="700" y="344" font-size="11.5" fill="#475467">Microtubules issus</text>
      <text x="700" y="362" font-size="11.5" fill="#475467">du centrosome.</text>

      <text x="40" y="618" font-size="12" fill="#8a94a8">Échelle indicative : une cellule animale mesure en moyenne 10 à 30 µm de diamètre.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Cytosol : milieu aqueux intracellulaire où baignent les organites.' },
    { ref: '2', texte: 'Membrane plasmique : bicouche lipidique délimitant la cellule.' },
    { ref: '3', texte: 'Noyau : entouré d’une double enveloppe, il contient l’ADN sous forme de chromatine.' },
    { ref: '4', texte: 'Nucléole : lieu de synthèse des ribosomes, visible au sein du noyau.' },
    { ref: '5', texte: 'Pore nucléaire : permet les échanges entre noyau et cytoplasme.' },
    { ref: '6', texte: 'Réticulum endoplasmique granuleux : ribosomes fixés, synthèse des protéines sécrétées.' },
    { ref: '7', texte: 'Réticulum endoplasmique lisse : synthèse des lipides et détoxification.' },
    { ref: '8', texte: 'Appareil de Golgi : maturation, tri et adressage des protéines.' },
    { ref: '9', texte: 'Mitochondrie : double membrane, production d’ATP par respiration cellulaire.' },
    { ref: '10', texte: 'Lysosome : vésicule contenant des enzymes hydrolytiques pour la digestion intracellulaire.' },
    { ref: '11', texte: 'Peroxysome : dégradation des acides gras et neutralisation du peroxyde d’hydrogène.' },
    { ref: '12', texte: 'Centrosome : organise les microtubules, formé de deux centrioles perpendiculaires.' },
  ],
};
