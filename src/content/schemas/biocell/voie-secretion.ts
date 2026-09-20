import type { Schema } from '../../types';

export const schemaVoieSecretion: Schema = {
  id: 'biocell-voie-secretion',
  ue: 'biocell',
  titre: 'La voie de sécrétion protéique',
  description:
    'Trajet complet d’une protéine sécrétée : synthèse sur ribosome, translocation dans le réticulum via le peptide signal, transport par vésicules COPII, maturation dans le Golgi et exocytose.',
  categorie: 'Biologie cellulaire générale',
  viewBox: '0 0 920 580',
  ficheLiee: 'biocell-reticulum-golgi',
  motsCles: ['voie de sécrétion', 'peptide signal', 'réticulum endoplasmique', 'vésicules COPII', 'appareil de Golgi', 'exocytose'],
  svg: `
    <rect x="0" y="0" width="920" height="580" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="biocell-voie-secretion-fl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="36" font-size="19" font-weight="600" fill="#101828">Trajet d’une protéine sécrétée</text>
      <line x1="40" y1="48" x2="200" y2="48" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Étape 1 : ribosome et peptide signal -->
      <g transform="translate(40,80)">
        <text x="0" y="0" font-size="13.5" font-weight="600" fill="#101828">1 · Traduction et peptide signal</text>
        <circle cx="20" cy="40" r="16" fill="#98a2b3"/>
        <circle cx="16" cy="32" r="10" fill="#7c8695"/>
        <text x="8" y="20" font-size="10.5" fill="#475467">ribosome</text>
        <path d="M 20 40 q 10 -4 8 -18 q -2 -14 4 -20" fill="none" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>
        <circle cx="34" cy="4" r="6" fill="#e0632f"/>
        <circle cx="46" cy="22" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="42" y="27" font-size="11" font-weight="700" fill="#e0632f">1</text>
        <text x="0" y="72" font-size="11" fill="#475467">Peptide signal en</text>
        <text x="0" y="88" font-size="11" fill="#475467">cours de traduction</text>
      </g>

      <line x1="150" y1="130" x2="210" y2="130" stroke="#101828" stroke-width="2" marker-end="url(#biocell-voie-secretion-fl)"/>

      <!-- Étape 2 : translocation dans le RE -->
      <g transform="translate(220,80)">
        <text x="0" y="0" font-size="13.5" font-weight="600" fill="#101828">2 · Translocation</text>
        <path d="M 0 60 q 20 -14 40 0 q 20 14 40 0" fill="none" stroke="#d4380d" stroke-width="3"/>
        <rect x="34" y="28" width="12" height="34" rx="5" fill="#175cd3"/>
        <circle cx="40" cy="20" r="6" fill="#e0632f"/>
        <circle cx="60" cy="8" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="56" y="13" font-size="11" font-weight="700" fill="#175cd3">2</text>
        <text x="0" y="90" font-size="11" fill="#475467">Translocon : entrée</text>
        <text x="0" y="106" font-size="11" fill="#475467">de la chaîne dans la</text>
        <text x="0" y="122" font-size="11" fill="#475467">lumière du REG</text>
        <text x="0" y="148" font-size="11" fill="#d4380d">Réticulum endoplasmique</text>
        <text x="0" y="164" font-size="11" fill="#d4380d">granuleux (REG)</text>
      </g>

      <line x1="380" y1="130" x2="440" y2="130" stroke="#101828" stroke-width="2" marker-end="url(#biocell-voie-secretion-fl)"/>

      <!-- Étape 3 : vésicule COPII -->
      <g transform="translate(450,80)">
        <text x="0" y="0" font-size="13.5" font-weight="600" fill="#101828">3 · Bourgeonnement COPII</text>
        <path d="M 0 40 q 20 -14 40 0" fill="none" stroke="#d4380d" stroke-width="3"/>
        <circle cx="60" cy="50" r="18" fill="none" stroke="#f4c22b" stroke-width="3" stroke-dasharray="4 3"/>
        <circle cx="60" cy="50" r="7" fill="#eaf2ff"/>
        <circle cx="88" cy="34" r="13" fill="#f4c22b" opacity="0.28"/>
        <text x="84" y="39" font-size="11" font-weight="700" fill="#8a6300">3</text>
        <text x="0" y="90" font-size="11" fill="#475467">Manteau COPII :</text>
        <text x="0" y="106" font-size="11" fill="#475467">bourgeonne du REG</text>
        <text x="0" y="122" font-size="11" fill="#475467">vers le Golgi (sens</text>
        <text x="0" y="138" font-size="11" fill="#475467">antérograde)</text>
      </g>

      <line x1="580" y1="130" x2="640" y2="130" stroke="#101828" stroke-width="2" marker-end="url(#biocell-voie-secretion-fl)"/>

      <!-- Étape 4 : Golgi -->
      <g transform="translate(650,60)">
        <text x="0" y="0" font-size="13.5" font-weight="600" fill="#101828">4 · Appareil de Golgi</text>
        <path d="M 0 30 q 30 -8 60 0" fill="none" stroke="#7c4df5" stroke-width="4"/>
        <path d="M 4 42 q 26 -8 52 0" fill="none" stroke="#7c4df5" stroke-width="4"/>
        <path d="M 8 54 q 22 -8 44 0" fill="none" stroke="#7c4df5" stroke-width="4"/>
        <text x="-6" y="24" font-size="10.5" fill="#7c4df5">cis</text>
        <text x="10" y="48" font-size="10.5" fill="#7c4df5">médian</text>
        <text x="20" y="72" font-size="10.5" fill="#7c4df5">trans</text>
        <circle cx="70" cy="20" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="66" y="25" font-size="11" font-weight="700" fill="#7c4df5">4</text>
      </g>

      <!-- Bandeau explicatif Golgi -->
      <g transform="translate(40,220)">
        <rect x="0" y="0" width="840" height="90" rx="14" fill="#f6f0ff" stroke="#e3d4ff"/>
        <text x="20" y="26" font-size="12.5" font-weight="600" fill="#5a2fc7">Maturation et tri dans le Golgi</text>
        <circle cx="240" cy="20" r="13" fill="#5a2fc7" opacity="0.2"/>
        <text x="236" y="25" font-size="11" font-weight="700" fill="#5a2fc7">5</text>
        <text x="20" y="48" font-size="11.5" fill="#475467">Face cis (réception depuis le REG) → citernes médianes (glycosylation,</text>
        <text x="20" y="66" font-size="11.5" fill="#475467">modifications) → face trans (tri et adressage vers la destination finale).</text>
      </g>

      <!-- Étape 5 : vésicule de sécrétion -->
      <g transform="translate(230,340)">
        <text x="0" y="0" font-size="13.5" font-weight="600" fill="#101828">6 · Vésicule de sécrétion</text>
        <circle cx="40" cy="50" r="26" fill="#eaf2ff" stroke="#175cd3" stroke-width="2.4"/>
        <circle cx="34" cy="44" r="3" fill="#e0632f"/>
        <circle cx="46" cy="52" r="3" fill="#e0632f"/>
        <circle cx="40" cy="60" r="3" fill="#e0632f"/>
        <circle cx="70" cy="30" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="66" y="35" font-size="11" font-weight="700" fill="#175cd3">6</text>
        <text x="0" y="98" font-size="11" fill="#475467">Concentre les protéines</text>
        <text x="0" y="114" font-size="11" fill="#475467">matures avant exocytose</text>
      </g>

      <line x1="400" y1="390" x2="460" y2="390" stroke="#101828" stroke-width="2" marker-end="url(#biocell-voie-secretion-fl)"/>

      <!-- Étape 6 : exocytose -->
      <g transform="translate(470,320)">
        <text x="0" y="0" font-size="13.5" font-weight="600" fill="#101828">7 · Exocytose</text>
        <line x1="0" y1="90" x2="260" y2="90" stroke="#98a2b3" stroke-width="3"/>
        <text x="0" y="108" font-size="11" fill="#475467">milieu extracellulaire</text>
        <circle cx="90" cy="60" r="20" fill="#eaf2ff" stroke="#175cd3" stroke-width="2"/>
        <path d="M 90 82 q 0 8 0 8" stroke="#175cd3" stroke-width="2" fill="none"/>
        <circle cx="86" cy="56" r="3" fill="#e0632f"/>
        <circle cx="96" cy="62" r="3" fill="#e0632f"/>
        <path d="M 130 60 q 10 20 30 28" stroke="#e0632f" stroke-width="2" fill="none"/>
        <circle cx="160" cy="90" r="3" fill="#e0632f"/>
        <circle cx="175" cy="95" r="3" fill="#e0632f"/>
        <circle cx="130" cy="38" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="126" y="43" font-size="11" font-weight="700" fill="#e0632f">7</text>
        <text x="0" y="130" font-size="11" fill="#475467">Fusion de la vésicule avec la membrane plasmique</text>
        <text x="0" y="146" font-size="11" fill="#475467">et libération du contenu hors de la cellule</text>
      </g>

      <!-- Bloc peptide signal / adressage -->
      <g transform="translate(40,470)">
        <rect x="0" y="0" width="840" height="80" rx="14" fill="#fafbff" stroke="#e4e9f5"/>
        <text x="20" y="26" font-size="12.5" font-weight="600" fill="#101828">Rôle du peptide signal</text>
        <circle cx="200" cy="20" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="196" y="25" font-size="11" font-weight="700" fill="#e0632f">8</text>
        <text x="20" y="48" font-size="11.5" fill="#475467">Séquence N-terminale hydrophobe reconnue par la particule de reconnaissance</text>
        <text x="20" y="66" font-size="11.5" fill="#475467">du signal (SRP), qui adresse le ribosome au réticulum endoplasmique.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Le ribosome traduit l’ARNm et synthétise un peptide signal en N-terminal.' },
    { ref: '2', texte: 'Translocation cotraductionnelle : la chaîne pénètre dans la lumière du réticulum via le translocon.' },
    { ref: '3', texte: 'Manteau protéique COPII : forme les vésicules de transport antérograde vers le Golgi.' },
    { ref: '4', texte: 'Appareil de Golgi : empilement de citernes cis, médianes et trans.' },
    { ref: '5', texte: 'Glycosylation et autres modifications post-traductionnelles au fil des citernes.' },
    { ref: '6', texte: 'Vésicule de sécrétion : bourgeonne de la face trans du Golgi, contient les protéines matures.' },
    { ref: '7', texte: 'Exocytose : fusion membranaire et libération du contenu dans le milieu extracellulaire.' },
    { ref: '8', texte: 'Le peptide signal, reconnu par la SRP, dirige la protéine naissante vers le réticulum.' },
  ],
};
