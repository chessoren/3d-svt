import type { Schema } from '../../types';

export const schemaEcgNormal: Schema = {
  id: 'physio-ecg-normal',
  ue: 'physio',
  titre: 'Le tracé électrocardiographique normal',
  description:
    'Ondes P, QRS et T d’un cycle cardiaque normal, segments et intervalles avec leurs durées usuelles, et correspondance avec les événements électriques du cœur.',
  categorie: 'Physiologie cardiaque',
  viewBox: '0 0 920 600',
  ficheLiee: 'physio-physiologie-cardiaque',
  motsCles: ['ECG', 'onde P', 'complexe QRS', 'onde T', 'intervalle PR', 'segment ST', 'intervalle QT'],
  svg: `
    <rect x="0" y="0" width="920" height="600" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">1 · Tracé d’un cycle cardiaque</text>
      <line x1="40" y1="52" x2="180" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(100,90)">
        <!-- axes -->
        <line x1="0" y1="0" x2="0" y2="300" stroke="#475467" stroke-width="1.6"/>
        <line x1="0" y1="300" x2="700" y2="300" stroke="#475467" stroke-width="1.6"/>
        <text x="-98" y="60" font-size="12" fill="#475467">1,0 mV</text>
        <line x1="-6" y1="55" x2="0" y2="55" stroke="#475467"/>
        <text x="-90" y="182" font-size="12" fill="#475467">0 mV</text>
        <line x1="-6" y1="180" x2="0" y2="180" stroke="#475467"/>
        <text x="-96" y="232" font-size="12" fill="#475467">−0,2 mV</text>
        <line x1="-6" y1="230" x2="0" y2="230" stroke="#475467"/>
        <text x="-140" y="150" font-size="13" fill="#101828" transform="rotate(-90 -140 150)">Amplitude (mV)</text>

        <line x1="0" y1="180" x2="700" y2="180" stroke="#98a2b3" stroke-width="1" stroke-dasharray="3 3"/>

        <!-- tracé ECG -->
        <path d="M0,180 L70,180 Q83,155 96,155 Q109,155 122,180 L200,180 L212,196 L226,20 L242,222 L258,180
                 L328,180 Q358,140 388,140 Q418,140 448,180 L700,180"
          fill="none" stroke="#175cd3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

        <!-- pastilles ondes -->
        <circle cx="108" cy="146" r="12" fill="#12a065" opacity="0.2"/>
        <text x="104" y="151" font-size="12" font-weight="700" fill="#12a065">1</text>
        <text x="90" y="130" font-size="11.5" fill="#12a065">onde P</text>

        <circle cx="226" cy="8" r="12" fill="#175cd3" opacity="0.2"/>
        <text x="222" y="13" font-size="12" font-weight="700" fill="#175cd3">2</text>
        <text x="240" y="12" font-size="11.5" fill="#175cd3">complexe QRS</text>

        <circle cx="388" cy="128" r="12" fill="#e0632f" opacity="0.2"/>
        <text x="384" y="133" font-size="12" font-weight="700" fill="#e0632f">3</text>
        <text x="404" y="126" font-size="11.5" fill="#e0632f">onde T</text>

        <!-- segment PR -->
        <line x1="122" y1="264" x2="200" y2="264" stroke="#7c4df5" stroke-width="2.4"/>
        <circle cx="161" cy="264" r="11" fill="#7c4df5" opacity="0.22"/>
        <text x="157" y="268" font-size="11" font-weight="700" fill="#7c4df5">4</text>

        <!-- intervalle PR -->
        <line x1="70" y1="284" x2="200" y2="284" stroke="#101828" stroke-width="1.4"/>
        <line x1="70" y1="278" x2="70" y2="290" stroke="#101828"/>
        <line x1="200" y1="278" x2="200" y2="290" stroke="#101828"/>
        <circle cx="135" cy="284" r="11" fill="#101828" opacity="0.14"/>
        <text x="131" y="288" font-size="11" font-weight="700" fill="#101828">5</text>

        <!-- segment ST -->
        <line x1="242" y1="196" x2="328" y2="196" stroke="#12a065" stroke-width="2.4"/>
        <circle cx="285" cy="196" r="11" fill="#12a065" opacity="0.2"/>
        <text x="281" y="200" font-size="11" font-weight="700" fill="#12a065">6</text>

        <!-- intervalle QT -->
        <line x1="212" y1="264" x2="448" y2="264" stroke="#d4380d" stroke-width="1.4"/>
        <line x1="212" y1="258" x2="212" y2="270" stroke="#d4380d"/>
        <line x1="448" y1="258" x2="448" y2="270" stroke="#d4380d"/>
        <circle cx="330" cy="264" r="11" fill="#d4380d" opacity="0.18"/>
        <text x="326" y="268" font-size="11" font-weight="700" fill="#d4380d">7</text>

        <!-- axe temps -->
        <text x="330" y="330" font-size="13" fill="#101828">Temps (ms)</text>
        <text x="-4" y="316" font-size="11" fill="#475467">0</text>
        <text x="256" y="316" font-size="11" fill="#475467">200</text>
        <text x="518" y="316" font-size="11" fill="#475467">400</text>
        <text x="680" y="316" font-size="11" fill="#475467">600</text>
        <line x1="0" y1="300" x2="0" y2="306" stroke="#475467"/>
        <line x1="262" y1="300" x2="262" y2="306" stroke="#475467"/>
        <line x1="524" y1="300" x2="524" y2="306" stroke="#475467"/>
        <line x1="700" y1="300" x2="700" y2="306" stroke="#475467"/>
      </g>

      <text x="40" y="452" font-size="19" font-weight="600" fill="#101828">2 · Durées normales et correspondance électrique</text>
      <line x1="40" y1="464" x2="180" y2="464" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(60,486)">
        <rect x="0" y="0" width="400" height="94" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="20" cy="22" r="10" fill="#12a065" opacity="0.2"/>
        <text x="17" y="26" font-size="10.5" font-weight="700" fill="#12a065">1</text>
        <text x="36" y="26" font-size="12.5" fill="#101828">Onde P — 80 à 100 ms — dépolarisation auriculaire</text>
        <circle cx="20" cy="46" r="10" fill="#175cd3" opacity="0.2"/>
        <text x="17" y="50" font-size="10.5" font-weight="700" fill="#175cd3">2</text>
        <text x="36" y="50" font-size="12.5" fill="#101828">QRS — moins de 100 ms — dépolarisation ventriculaire</text>
        <circle cx="20" cy="70" r="10" fill="#e0632f" opacity="0.2"/>
        <text x="17" y="74" font-size="10.5" font-weight="700" fill="#e0632f">3</text>
        <text x="36" y="74" font-size="12.5" fill="#101828">Onde T — repolarisation ventriculaire</text>

        <rect x="420" y="0" width="400" height="94" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="440" cy="22" r="10" fill="#7c4df5" opacity="0.22"/>
        <text x="437" y="26" font-size="10.5" font-weight="700" fill="#7c4df5">4</text>
        <text x="456" y="26" font-size="12.5" fill="#101828">Segment PR — conduction dans le nœud AV</text>
        <circle cx="440" cy="46" r="10" fill="#101828" opacity="0.16"/>
        <text x="437" y="50" font-size="10.5" font-weight="700" fill="#101828">5</text>
        <text x="456" y="50" font-size="12.5" fill="#101828">Intervalle PR — 120 à 200 ms</text>
        <circle cx="440" cy="70" r="10" fill="#12a065" opacity="0.2"/>
        <text x="437" y="74" font-size="10.5" font-weight="700" fill="#12a065">6</text>
        <text x="456" y="74" font-size="12.5" fill="#101828">Segment ST — isoélectrique, plateau ventriculaire</text>
      </g>

      <g transform="translate(60,596)">
        <circle cx="20" cy="-4" r="10" fill="#d4380d" opacity="0.18"/>
        <text x="17" y="0" font-size="10.5" font-weight="700" fill="#d4380d">7</text>
        <text x="36" y="0" font-size="12.5" fill="#101828">Intervalle QT — 350 à 440 ms (corrigé de la fréquence)</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Onde P : dépolarisation des oreillettes, durée normale de 80 à 100 ms.' },
    { ref: '2', texte: 'Complexe QRS : dépolarisation des ventricules, durée normale inférieure à 100 ms.' },
    { ref: '3', texte: 'Onde T : repolarisation ventriculaire, asymétrique et de même sens que le QRS en dérivation normale.' },
    { ref: '4', texte: 'Segment PR : ligne isoélectrique correspondant au ralentissement de la conduction dans le nœud auriculo-ventriculaire.' },
    { ref: '5', texte: 'Intervalle PR : du début de l’onde P au début du QRS, normalement entre 120 et 200 ms.' },
    { ref: '6', texte: 'Segment ST : isoélectrique, correspond au plateau de dépolarisation ventriculaire.' },
    { ref: '7', texte: 'Intervalle QT : du début du QRS à la fin de l’onde T, normalement entre 350 et 440 ms selon la fréquence cardiaque.' },
  ],
};
