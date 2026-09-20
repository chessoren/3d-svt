import type { Schema } from '../../types';

export const schemaVolumesPulmonaires: Schema = {
  id: 'physio-volumes-pulmonaires',
  ue: 'physio',
  titre: 'Les volumes et capacités pulmonaires',
  description:
    'Spirogramme complet : volume courant, volumes de réserve inspiratoire et expiratoire, volume résiduel, et capacités vitale, inspiratoire, résiduelle fonctionnelle et totale, avec leurs valeurs usuelles chez l’adulte.',
  categorie: 'Physiologie respiratoire',
  viewBox: '0 0 920 760',
  ficheLiee: 'physio-mecanique-ventilatoire',
  motsCles: ['spirogramme', 'volume courant', 'capacité vitale', 'volume résiduel', 'capacité pulmonaire totale', 'capacité résiduelle fonctionnelle'],
  svg: `
    <rect x="0" y="0" width="920" height="760" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">1 · Spirogramme</text>
      <line x1="40" y1="52" x2="180" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(80,90)">
        <!-- axes -->
        <line x1="0" y1="0" x2="0" y2="350" stroke="#475467" stroke-width="1.6"/>
        <line x1="0" y1="350" x2="600" y2="350" stroke="#475467" stroke-width="1.6"/>
        <text x="-150" y="180" font-size="13" fill="#101828" transform="rotate(-90 -150 180)">Volume (mL)</text>

        <!-- lignes de repère -->
        <line x1="0" y1="31" x2="600" y2="31" stroke="#c9d6ff" stroke-width="1" stroke-dasharray="3 3"/>
        <text x="-56" y="35" font-size="11" fill="#475467">5 800</text>
        <line x1="0" y1="196" x2="600" y2="196" stroke="#d9dfea" stroke-width="1" stroke-dasharray="3 3"/>
        <text x="-56" y="200" font-size="11" fill="#475467">2 800</text>
        <line x1="0" y1="224" x2="600" y2="224" stroke="#d9dfea" stroke-width="1" stroke-dasharray="3 3"/>
        <text x="-56" y="228" font-size="11" fill="#475467">2 300</text>
        <line x1="0" y1="284" x2="600" y2="284" stroke="#d9dfea" stroke-width="1" stroke-dasharray="3 3"/>
        <text x="-56" y="288" font-size="11" fill="#475467">1 200</text>
        <text x="-14" y="354" font-size="11" fill="#475467">0</text>

        <!-- tracé du spirogramme -->
        <path d="M0,224 Q15,196 30,196 Q45,224 60,224 Q75,196 90,196 Q105,224 120,224 Q135,196 150,196 Q165,224 180,224
                 C195,180 215,80 240,31
                 C265,80 305,200 330,284
                 C350,260 365,224 390,224
                 Q405,196 420,196 Q435,224 450,224 Q465,196 480,196 Q495,224 510,224
                 L540,224"
          fill="none" stroke="#175cd3" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>

        <circle cx="14" cy="180" r="11" fill="#175cd3" opacity="0.2"/>
        <text x="10" y="184" font-size="11" font-weight="700" fill="#175cd3">9</text>
        <text x="4" y="164" font-size="11" fill="#175cd3">respiration courante</text>

        <circle cx="250" cy="18" r="11" fill="#e0632f" opacity="0.2"/>
        <text x="246" y="22" font-size="11" font-weight="700" fill="#e0632f">10</text>
        <text x="266" y="18" font-size="11" fill="#e0632f">inspiration maximale</text>

        <circle cx="345" cy="298" r="11" fill="#12a065" opacity="0.2"/>
        <text x="341" y="302" font-size="11" font-weight="700" fill="#12a065">11</text>
        <text x="358" y="302" font-size="11" fill="#12a065">expiration maximale</text>

        <!-- brackets des volumes -->
        <line x1="605" y1="31" x2="615" y2="31" stroke="#101828"/>
        <line x1="610" y1="31" x2="610" y2="196" stroke="#101828"/>
        <line x1="605" y1="196" x2="615" y2="196" stroke="#101828"/>
        <circle cx="632" cy="113" r="11" fill="#7c4df5" opacity="0.2"/>
        <text x="628" y="117" font-size="11" font-weight="700" fill="#7c4df5">2</text>

        <line x1="605" y1="196" x2="615" y2="196" stroke="#101828"/>
        <line x1="610" y1="196" x2="610" y2="224" stroke="#101828"/>
        <line x1="605" y1="224" x2="615" y2="224" stroke="#101828"/>
        <circle cx="632" cy="210" r="11" fill="#e0632f" opacity="0.2"/>
        <text x="628" y="214" font-size="11" font-weight="700" fill="#e0632f">1</text>

        <line x1="605" y1="224" x2="615" y2="224" stroke="#101828"/>
        <line x1="610" y1="224" x2="610" y2="284" stroke="#101828"/>
        <line x1="605" y1="284" x2="615" y2="284" stroke="#101828"/>
        <circle cx="632" cy="254" r="11" fill="#12a065" opacity="0.2"/>
        <text x="628" y="258" font-size="11" font-weight="700" fill="#12a065">3</text>

        <line x1="605" y1="284" x2="615" y2="284" stroke="#101828"/>
        <line x1="610" y1="284" x2="610" y2="350" stroke="#101828"/>
        <line x1="605" y1="350" x2="615" y2="350" stroke="#101828"/>
        <circle cx="632" cy="317" r="11" fill="#98a2b3" opacity="0.24"/>
        <text x="628" y="321" font-size="11" font-weight="700" fill="#475467">4</text>

        <!-- brackets des capacités -->
        <line x1="666" y1="31" x2="674" y2="31" stroke="#175cd3"/>
        <line x1="670" y1="31" x2="670" y2="224" stroke="#175cd3"/>
        <line x1="666" y1="224" x2="674" y2="224" stroke="#175cd3"/>
        <circle cx="690" cy="127" r="11" fill="#175cd3" opacity="0.2"/>
        <text x="686" y="131" font-size="11" font-weight="700" fill="#175cd3">5</text>

        <line x1="691" y1="31" x2="699" y2="31" stroke="#d4380d"/>
        <line x1="695" y1="31" x2="695" y2="284" stroke="#d4380d"/>
        <line x1="691" y1="284" x2="699" y2="284" stroke="#d4380d"/>
        <circle cx="715" cy="157" r="11" fill="#d4380d" opacity="0.2"/>
        <text x="711" y="161" font-size="11" font-weight="700" fill="#d4380d">6</text>

        <line x1="716" y1="224" x2="724" y2="224" stroke="#12a065"/>
        <line x1="720" y1="224" x2="720" y2="350" stroke="#12a065"/>
        <line x1="716" y1="350" x2="724" y2="350" stroke="#12a065"/>
        <circle cx="740" cy="287" r="11" fill="#12a065" opacity="0.2"/>
        <text x="736" y="291" font-size="11" font-weight="700" fill="#12a065">7</text>

        <line x1="741" y1="31" x2="749" y2="31" stroke="#101828"/>
        <line x1="745" y1="31" x2="745" y2="350" stroke="#101828"/>
        <line x1="741" y1="350" x2="749" y2="350" stroke="#101828"/>
        <circle cx="765" cy="190" r="11" fill="#101828" opacity="0.16"/>
        <text x="761" y="194" font-size="11" font-weight="700" fill="#101828">8</text>

        <text x="260" y="380" font-size="13" fill="#101828">Temps</text>
      </g>

      <text x="40" y="502" font-size="19" font-weight="600" fill="#101828">2 · Volumes et capacités usuels de l’adulte</text>
      <line x1="40" y1="514" x2="180" y2="514" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(60,534)" font-size="12.5" fill="#101828">
        <rect x="0" y="0" width="400" height="130" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="16" y="24" font-size="13" font-weight="600" fill="#101828">Volumes (non recouvrants)</text>
        <circle cx="20" cy="46" r="10" fill="#e0632f" opacity="0.2"/>
        <text x="17" y="50" font-size="10.5" font-weight="700" fill="#e0632f">1</text>
        <text x="36" y="50">Volume courant (VT) : ≈ 500 mL</text>
        <circle cx="20" cy="70" r="10" fill="#7c4df5" opacity="0.2"/>
        <text x="17" y="74" font-size="10.5" font-weight="700" fill="#7c4df5">2</text>
        <text x="36" y="74">Volume de réserve inspiratoire (VRI) : ≈ 3 000 mL</text>
        <circle cx="20" cy="94" r="10" fill="#12a065" opacity="0.2"/>
        <text x="17" y="98" font-size="10.5" font-weight="700" fill="#12a065">3</text>
        <text x="36" y="98">Volume de réserve expiratoire (VRE) : ≈ 1 100 mL</text>
        <circle cx="20" cy="118" r="10" fill="#98a2b3" opacity="0.26"/>
        <text x="17" y="122" font-size="10.5" font-weight="700" fill="#475467">4</text>
        <text x="36" y="122">Volume résiduel (VR) : ≈ 1 200 mL, non mesurable au spiromètre</text>

        <rect x="420" y="0" width="400" height="130" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="436" y="24" font-size="13" font-weight="600" fill="#101828">Capacités (somme de volumes)</text>
        <circle cx="440" cy="46" r="10" fill="#175cd3" opacity="0.2"/>
        <text x="437" y="50" font-size="10.5" font-weight="700" fill="#175cd3">5</text>
        <text x="456" y="50">Capacité inspiratoire (CI = VT + VRI) : ≈ 3 500 mL</text>
        <circle cx="440" cy="70" r="10" fill="#d4380d" opacity="0.2"/>
        <text x="437" y="74" font-size="10.5" font-weight="700" fill="#d4380d">6</text>
        <text x="456" y="74">Capacité vitale (CV = VT + VRI + VRE) : ≈ 4 600 mL</text>
        <circle cx="440" cy="94" r="10" fill="#12a065" opacity="0.2"/>
        <text x="437" y="98" font-size="10.5" font-weight="700" fill="#12a065">7</text>
        <text x="456" y="98">Capacité résiduelle fonctionnelle (CRF = VRE + VR) : ≈ 2 300 mL</text>
        <circle cx="440" cy="118" r="10" fill="#101828" opacity="0.16"/>
        <text x="437" y="122" font-size="10.5" font-weight="700" fill="#101828">8</text>
        <text x="456" y="122">Capacité pulmonaire totale (CPT = CV + VR) : ≈ 5 800 mL</text>
      </g>

      <text x="40" y="700" font-size="12" fill="#8a94a8">Valeurs usuelles pour un adulte de corpulence moyenne ; elles varient avec la taille, l’âge et le sexe.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Volume courant (VT) : volume mobilisé à chaque cycle respiratoire au repos, ≈ 500 mL.' },
    { ref: '2', texte: 'Volume de réserve inspiratoire (VRI) : volume supplémentaire inspirable après une inspiration courante, ≈ 3 000 mL.' },
    { ref: '3', texte: 'Volume de réserve expiratoire (VRE) : volume supplémentaire expirable après une expiration courante, ≈ 1 100 mL.' },
    { ref: '4', texte: 'Volume résiduel (VR) : volume restant dans les poumons après une expiration maximale, ≈ 1 200 mL, non mesurable par spirométrie simple.' },
    { ref: '5', texte: 'Capacité inspiratoire (CI = VT + VRI) : ≈ 3 500 mL.' },
    { ref: '6', texte: 'Capacité vitale (CV = VT + VRI + VRE) : ≈ 4 600 mL, mesurable par spirométrie.' },
    { ref: '7', texte: 'Capacité résiduelle fonctionnelle (CRF = VRE + VR) : ≈ 2 300 mL, volume pulmonaire en fin d’expiration courante.' },
    { ref: '8', texte: 'Capacité pulmonaire totale (CPT = CV + VR) : ≈ 5 800 mL.' },
    { ref: '9', texte: 'Respiration courante : succession de cycles de volume courant autour de la capacité résiduelle fonctionnelle.' },
    { ref: '10', texte: 'Inspiration maximale : mobilise le volume de réserve inspiratoire jusqu’à la capacité pulmonaire totale.' },
    { ref: '11', texte: 'Expiration maximale : mobilise le volume de réserve expiratoire jusqu’au volume résiduel.' },
  ],
};
