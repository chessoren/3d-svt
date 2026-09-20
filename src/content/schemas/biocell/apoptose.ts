import type { Schema } from '../../types';

export const schemaApoptose: Schema = {
  id: 'biocell-apoptose',
  ue: 'biocell',
  titre: 'L’apoptose : voies de signalisation et morphologie',
  description:
    'Les voies intrinsèque (mitochondriale) et extrinsèque (récepteurs de mort) de l’apoptose, le rôle des caspases initiatrices et effectrices, les modifications morphologiques et la comparaison avec la nécrose.',
  categorie: 'Biologie cellulaire générale',
  viewBox: '0 0 920 680',
  ficheLiee: 'biocell-signalisation-apoptose',
  motsCles: ['apoptose', 'voie intrinsèque', 'voie extrinsèque', 'caspases', 'cytochrome c', 'récepteur de mort', 'nécrose'],
  svg: `
    <rect x="0" y="0" width="920" height="680" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="biocell-apoptose-fl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="34" font-size="19" font-weight="600" fill="#101828">L’apoptose : deux voies convergentes</text>
      <line x1="40" y1="46" x2="200" y2="46" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Voie extrinsèque -->
      <g transform="translate(40,66)">
        <rect x="0" y="0" width="380" height="190" rx="14" fill="#eaf2ff" stroke="#c9d6ff"/>
        <text x="16" y="26" font-size="14" font-weight="600" fill="#175cd3">Voie extrinsèque (récepteurs de mort)</text>
        <circle cx="356" cy="18" r="13" fill="#175cd3" opacity="0.22"/>
        <text x="352" y="23" font-size="11" font-weight="700" fill="#175cd3">1</text>

        <line x1="30" y1="50" x2="30" y2="130" stroke="#98a2b3" stroke-width="4"/>
        <text x="4" y="46" font-size="10.5" fill="#475467">membrane plasmique</text>
        <path d="M 30 50 l -14 -14 M 30 50 l 14 -14" stroke="#175cd3" stroke-width="4" stroke-linecap="round"/>
        <text x="46" y="38" font-size="11" fill="#175cd3">ligand (FasL, TNF)</text>
        <circle cx="70" cy="44" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="66" y="49" font-size="11" font-weight="700" fill="#175cd3">2</text>

        <rect x="24" y="50" width="12" height="60" fill="#5a72e0"/>
        <text x="46" y="70" font-size="11" fill="#5a72e0">récepteur de mort</text>
        <text x="46" y="86" font-size="11" fill="#5a72e0">(Fas / TNFR)</text>

        <line x1="30" y1="110" x2="30" y2="150" stroke="#101828" stroke-width="2" marker-end="url(#biocell-apoptose-fl)"/>
        <rect x="14" y="150" width="90" height="26" rx="6" fill="#f4c22b" opacity="0.9"/>
        <text x="22" y="168" font-size="10.5" font-weight="600" fill="#8a6300">caspase 8</text>
        <circle cx="118" cy="163" r="13" fill="#f4c22b" opacity="0.3"/>
        <text x="114" y="168" font-size="11" font-weight="700" fill="#8a6300">3</text>
        <text x="150" y="150" font-size="10.5" fill="#475467">caspase initiatrice,</text>
        <text x="150" y="166" font-size="10.5" fill="#475467">activée par le complexe</text>
        <text x="150" y="182" font-size="10.5" fill="#475467">de signalisation DISC</text>
      </g>

      <!-- Voie intrinsèque -->
      <g transform="translate(500,66)">
        <rect x="0" y="0" width="380" height="190" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="16" y="26" font-size="14" font-weight="600" fill="#e0632f">Voie intrinsèque (mitochondriale)</text>
        <circle cx="356" cy="18" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="352" y="23" font-size="11" font-weight="700" fill="#e0632f">4</text>

        <text x="16" y="46" font-size="10.5" fill="#475467">Stress cellulaire, lésion de l’ADN,</text>
        <text x="16" y="60" font-size="10.5" fill="#475467">privation de facteurs de croissance</text>

        <ellipse cx="70" cy="110" rx="46" ry="26" fill="#fdece0" stroke="#e0632f" stroke-width="2"/>
        <text x="42" y="115" font-size="9.5" fill="#e0632f">mitochondrie</text>
        <circle cx="112" cy="94" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="108" y="99" font-size="11" font-weight="700" fill="#e0632f">5</text>

        <circle cx="70" cy="106" r="4" fill="#d4380d"/>
        <line x1="70" y1="106" x2="150" y2="130" stroke="#d4380d" stroke-width="1.6" marker-end="url(#biocell-apoptose-fl)"/>
        <text x="152" y="120" font-size="10.5" font-weight="600" fill="#d4380d">cytochrome c libéré</text>
        <circle cx="245" cy="126" r="13" fill="#d4380d" opacity="0.2"/>
        <text x="241" y="131" font-size="11" font-weight="700" fill="#d4380d">6</text>

        <text x="16" y="160" font-size="10.5" fill="#475467">Bax/Bak perméabilisent la</text>
        <text x="16" y="174" font-size="10.5" fill="#475467">membrane mitochondriale externe</text>

        <rect x="280" y="150" width="90" height="26" rx="6" fill="#f4c22b" opacity="0.9"/>
        <text x="288" y="168" font-size="10.5" font-weight="600" fill="#8a6300">caspase 9</text>
      </g>

      <!-- Convergence -->
      <line x1="230" y1="256" x2="230" y2="310" stroke="#101828" stroke-width="2" marker-end="url(#biocell-apoptose-fl)"/>
      <line x1="690" y1="256" x2="690" y2="310" stroke="#101828" stroke-width="2" marker-end="url(#biocell-apoptose-fl)"/>

      <g transform="translate(230,320)">
        <line x1="0" y1="0" x2="460" y2="0" stroke="#98a2b3" stroke-width="1.4"/>
      </g>
      <line x1="460" y1="320" x2="460" y2="360" stroke="#101828" stroke-width="2" marker-end="url(#biocell-apoptose-fl)"/>

      <g transform="translate(310,368)">
        <rect x="0" y="0" width="300" height="56" rx="10" fill="#f6f0ff" stroke="#e3d4ff"/>
        <text x="16" y="24" font-size="12.5" font-weight="600" fill="#5a2fc7">Caspases effectrices (3, 6, 7)</text>
        <circle cx="264" cy="18" r="13" fill="#5a2fc7" opacity="0.2"/>
        <text x="260" y="23" font-size="11" font-weight="700" fill="#5a2fc7">7</text>
        <text x="16" y="42" font-size="10.5" fill="#475467">clivage de nombreux substrats cellulaires</text>
      </g>

      <line x1="460" y1="424" x2="460" y2="460" stroke="#101828" stroke-width="2" marker-end="url(#biocell-apoptose-fl)"/>

      <!-- Modifications morphologiques -->
      <g transform="translate(40,470)">
        <text x="0" y="0" font-size="14" font-weight="600" fill="#101828">Modifications morphologiques de la cellule apoptotique</text>
        <circle cx="440" cy="-6" r="13" fill="#101828" opacity="0.14"/>
        <text x="436" y="-1" font-size="11" font-weight="700" fill="#101828">8</text>
        <rect x="0" y="16" width="840" height="110" rx="14" fill="#fafbff" stroke="#e4e9f5"/>

        <ellipse cx="90" cy="72" rx="46" ry="40" fill="#eef2fb" stroke="#98a2b3" stroke-width="1.6"/>
        <circle cx="90" cy="70" r="16" fill="#c9d6ff"/>
        <text x="50" y="128" font-size="10" fill="#475467">cellule saine</text>

        <path d="M 240 40 q 20 -6 30 10 q 18 -4 24 16 q 16 4 8 22 q 10 14 -8 22 q -4 16 -24 8 q -14 12 -28 -2 q -18 6 -22 -14 q -14 -4 -6 -22 q -8 -14 8 -22 q 2 -14 18 -18 z" fill="#fdece0" stroke="#e0632f" stroke-width="1.6"/>
        <circle cx="255" cy="72" r="6" fill="#d4380d"/>
        <circle cx="272" cy="60" r="5" fill="#d4380d"/>
        <text x="222" y="128" font-size="10" fill="#e0632f">condensation, bourgeonnement</text>

        <circle cx="410" cy="60" r="16" fill="#fdece0" stroke="#e0632f" stroke-width="1.4"/>
        <circle cx="440" cy="78" r="13" fill="#fdece0" stroke="#e0632f" stroke-width="1.4"/>
        <circle cx="418" cy="92" r="11" fill="#fdece0" stroke="#e0632f" stroke-width="1.4"/>
        <text x="392" y="128" font-size="10" fill="#e0632f">corps apoptotiques</text>

        <path d="M 560 70 q 10 -20 30 -12" fill="none" stroke="#98a2b3" stroke-width="1.4"/>
        <ellipse cx="620" cy="60" rx="18" ry="14" fill="#e7ecff" stroke="#5a72e0" stroke-width="1.6"/>
        <circle cx="620" cy="58" r="4" fill="#7c8695"/>
        <text x="560" y="128" font-size="10" fill="#5a72e0">phagocytose, sans inflammation</text>
        <circle cx="654" cy="46" r="13" fill="#5a72e0" opacity="0.2"/>
        <text x="650" y="51" font-size="11" font-weight="700" fill="#5a72e0">9</text>
      </g>

      <!-- Comparaison apoptose / nécrose -->
      <g transform="translate(40,610)">
        <rect x="0" y="0" width="840" height="56" rx="14" fill="#fff1f1" stroke="#fbd5d5"/>
        <text x="16" y="22" font-size="12.5" font-weight="600" fill="#c81e1e">Nécrose : mort accidentelle</text>
        <circle cx="240" cy="16" r="13" fill="#c81e1e" opacity="0.2"/>
        <text x="236" y="21" font-size="11" font-weight="700" fill="#c81e1e">10</text>
        <text x="16" y="42" font-size="11" fill="#7a2a2a">Gonflement cellulaire, rupture membranaire et fuite du contenu : réaction inflammatoire, contrairement à l’apoptose.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Voie extrinsèque : déclenchée par la liaison d’un ligand à un récepteur de mort transmembranaire.' },
    { ref: '2', texte: 'Ligands de mort tels que FasL ou le TNF, reconnus par leur récepteur spécifique.' },
    { ref: '3', texte: 'Caspase 8 : caspase initiatrice activée par le complexe de signalisation induisant la mort (DISC).' },
    { ref: '4', texte: 'Voie intrinsèque : déclenchée par un stress intracellulaire, sous contrôle de la famille Bcl-2.' },
    { ref: '5', texte: 'La perméabilisation de la membrane mitochondriale externe est régulée par les protéines pro- et anti-apoptotiques.' },
    { ref: '6', texte: 'Libération du cytochrome c dans le cytosol, formation de l’apoptosome et activation de la caspase 9.' },
    { ref: '7', texte: 'Les caspases effectrices, activées par les caspases initiatrices, exécutent la dégradation cellulaire.' },
    { ref: '8', texte: 'Condensation de la chromatine, rétraction cellulaire, bourgeonnement de la membrane plasmique.' },
    { ref: '9', texte: 'Fragmentation en corps apoptotiques, phagocytés sans déclencher de réaction inflammatoire.' },
    { ref: '10', texte: 'À la différence de l’apoptose, la nécrose entraîne une lyse cellulaire et une inflammation.' },
  ],
};
