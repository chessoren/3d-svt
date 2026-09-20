import type { Schema } from '../../types';

export const schemaRevolutionCardiaque: Schema = {
  id: 'physio-revolution-cardiaque',
  ue: 'physio',
  titre: 'La révolution cardiaque',
  description:
    'Diagramme de Wiggers simplifié du ventricule gauche : systole auriculaire, contraction isovolumétrique, éjection, relaxation isovolumétrique et remplissage, avec les pressions et l’ouverture des valves.',
  categorie: 'Physiologie cardiaque',
  viewBox: '0 0 920 660',
  ficheLiee: 'physio-physiologie-cardiaque',
  motsCles: ['révolution cardiaque', 'systole', 'diastole', 'diagramme de Wiggers', 'valve mitrale', 'valve aortique', 'pression ventriculaire'],
  svg: `
    <rect x="0" y="0" width="920" height="660" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">1 · Pressions au cours du cycle cardiaque (ventricule gauche)</text>
      <line x1="40" y1="52" x2="180" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(110,80)">
        <!-- axes -->
        <line x1="0" y1="0" x2="0" y2="340" stroke="#475467" stroke-width="1.6"/>
        <line x1="0" y1="340" x2="700" y2="340" stroke="#475467" stroke-width="1.6"/>
        <text x="-104" y="26" font-size="12" fill="#475467">120 mmHg</text>
        <line x1="-6" y1="20" x2="0" y2="20" stroke="#475467"/>
        <text x="-92" y="146" font-size="12" fill="#475467">80 mmHg</text>
        <line x1="-6" y1="140" x2="0" y2="140" stroke="#475467"/>
        <text x="-92" y="286" font-size="12" fill="#475467">10 mmHg</text>
        <line x1="-6" y1="280" x2="0" y2="280" stroke="#475467"/>
        <text x="-70" y="326" font-size="12" fill="#475467">0</text>
        <line x1="-6" y1="320" x2="0" y2="320" stroke="#475467"/>
        <text x="-150" y="170" font-size="13" fill="#101828" transform="rotate(-90 -150 170)">Pression (mmHg)</text>

        <!-- pression aortique -->
        <path d="M0,150 C40,140 70,90 110,60 C160,26 220,20 300,26 C380,32 440,48 470,80
                 C500,112 540,150 700,152"
          fill="none" stroke="#d4380d" stroke-width="2.6" stroke-linecap="round"/>
        <circle cx="230" cy="22" r="11" fill="#d4380d" opacity="0.2"/>
        <text x="226" y="27" font-size="11" font-weight="700" fill="#d4380d">1</text>

        <!-- pression ventriculaire -->
        <path d="M0,300 L60,300 C90,300 110,180 150,80 C180,10 220,10 260,14
                 C300,20 330,60 350,150 C365,220 375,290 385,308
                 L470,310 C520,312 600,314 700,314"
          fill="none" stroke="#175cd3" stroke-width="2.8" stroke-linecap="round"/>
        <circle cx="150" cy="72" r="11" fill="#175cd3" opacity="0.2"/>
        <text x="146" y="77" font-size="11" font-weight="700" fill="#175cd3">2</text>

        <!-- pression auriculaire -->
        <path d="M0,296 C20,290 40,300 60,300 L385,308 C420,300 440,270 460,286
                 C480,300 520,304 700,306"
          fill="none" stroke="#12a065" stroke-width="2.2" stroke-linecap="round"/>
        <circle cx="460" cy="280" r="11" fill="#12a065" opacity="0.2"/>
        <text x="456" y="285" font-size="11" font-weight="700" fill="#12a065">3</text>

        <!-- ouverture / fermeture des valves -->
        <line x1="60" y1="0" x2="60" y2="340" stroke="#98a2b3" stroke-width="1" stroke-dasharray="3 3"/>
        <circle cx="60" cy="352" r="11" fill="#7c4df5" opacity="0.2"/>
        <text x="56" y="357" font-size="11" font-weight="700" fill="#7c4df5">4</text>

        <line x1="150" y1="0" x2="150" y2="340" stroke="#98a2b3" stroke-width="1" stroke-dasharray="3 3"/>
        <circle cx="150" cy="352" r="11" fill="#e0632f" opacity="0.2"/>
        <text x="146" y="357" font-size="11" font-weight="700" fill="#e0632f">5</text>

        <line x1="385" y1="0" x2="385" y2="340" stroke="#98a2b3" stroke-width="1" stroke-dasharray="3 3"/>
        <circle cx="385" cy="352" r="11" fill="#e0632f" opacity="0.2"/>
        <text x="380" y="357" font-size="11" font-weight="700" fill="#e0632f">6</text>

        <line x1="460" y1="0" x2="460" y2="340" stroke="#98a2b3" stroke-width="1" stroke-dasharray="3 3"/>
        <circle cx="460" cy="352" r="11" fill="#7c4df5" opacity="0.2"/>
        <text x="456" y="357" font-size="11" font-weight="700" fill="#7c4df5">7</text>

        <!-- phases (bandeau inférieur) -->
        <rect x="0" y="368" width="60" height="20" rx="4" fill="#eafbf1"/>
        <text x="4" y="382" font-size="10.5" fill="#12a065">syst. auric.</text>
        <rect x="60" y="368" width="90" height="20" rx="4" fill="#fff6f1"/>
        <text x="66" y="382" font-size="10.5" fill="#e0632f">contr. isovol.</text>
        <rect x="150" y="368" width="235" height="20" rx="4" fill="#eef4ff"/>
        <text x="230" y="382" font-size="10.5" fill="#175cd3">éjection</text>
        <rect x="385" y="368" width="75" height="20" rx="4" fill="#f6f0ff"/>
        <text x="390" y="382" font-size="10.5" fill="#7c4df5">relax. isovol.</text>
        <rect x="460" y="368" width="240" height="20" rx="4" fill="#f2f4f7"/>
        <text x="550" y="382" font-size="10.5" fill="#475467">remplissage ventriculaire</text>

        <text x="330" y="416" font-size="13" fill="#101828">Temps (ms)</text>
      </g>

      <text x="40" y="512" font-size="19" font-weight="600" fill="#101828">2 · Les cinq phases de la révolution cardiaque</text>
      <line x1="40" y1="524" x2="180" y2="524" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(60,546)" font-size="12.5" fill="#101828">
        <rect x="0" y="0" width="820" height="96" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <circle cx="20" cy="22" r="10" fill="#12a065" opacity="0.2"/>
        <text x="17" y="26" font-size="10.5" font-weight="700" fill="#12a065">8</text>
        <text x="36" y="26">Systole auriculaire : contraction des oreillettes, complète le remplissage ventriculaire.</text>

        <circle cx="20" cy="46" r="10" fill="#175cd3" opacity="0.2"/>
        <text x="17" y="50" font-size="10.5" font-weight="700" fill="#175cd3">9</text>
        <text x="36" y="50">Systole ventriculaire : contraction isovolumétrique puis éjection du sang vers l’aorte.</text>

        <circle cx="420" cy="22" r="10" fill="#7c4df5" opacity="0.22"/>
        <text x="417" y="26" font-size="10.5" font-weight="700" fill="#7c4df5">10</text>
        <text x="436" y="26">Diastole ventriculaire : relaxation isovolumétrique puis remplissage passif rapide.</text>

        <circle cx="420" cy="46" r="10" fill="#e0632f" opacity="0.2"/>
        <text x="417" y="50" font-size="10.5" font-weight="700" fill="#e0632f">11</text>
        <text x="436" y="50">Valves sigmoïdes (aortique, pulmonaire) : ouvertes uniquement pendant l’éjection.</text>

        <circle cx="20" cy="72" r="10" fill="#12a065" opacity="0.2"/>
        <text x="17" y="76" font-size="10.5" font-weight="700" fill="#12a065">3</text>
        <text x="36" y="76">Pression auriculaire gauche : reste basse, avec une onde a lors de la systole auriculaire.</text>
      </g>

      <text x="40" y="656" font-size="12" fill="#8a94a8">Cycle représenté pour une fréquence cardiaque de repos d’environ 75 battements par minute.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Pression aortique : oscille entre 80 mmHg (diastolique) et 120 mmHg (systolique).' },
    { ref: '2', texte: 'Pression ventriculaire gauche : varie de près de 0 mmHg en diastole à plus de 120 mmHg au pic systolique.' },
    { ref: '3', texte: 'Pression auriculaire gauche : reste faible, proche de 5 à 10 mmHg tout au long du cycle.' },
    { ref: '4', texte: 'Fermeture de la valve mitrale : marque le début de la contraction isovolumétrique.' },
    { ref: '5', texte: 'Ouverture de la valve aortique : la pression ventriculaire dépasse la pression aortique, l’éjection commence.' },
    { ref: '6', texte: 'Fermeture de la valve aortique : la pression ventriculaire repasse sous la pression aortique.' },
    { ref: '7', texte: 'Ouverture de la valve mitrale : la pression ventriculaire repasse sous la pression auriculaire, le remplissage débute.' },
    { ref: '8', texte: 'Systole auriculaire : contraction des oreillettes, complète le remplissage ventriculaire.' },
    { ref: '9', texte: 'Systole ventriculaire : contraction isovolumétrique puis éjection du sang vers l’aorte.' },
    { ref: '10', texte: 'Diastole ventriculaire : relaxation isovolumétrique puis remplissage passif rapide.' },
    { ref: '11', texte: 'Valves sigmoïdes (aortique, pulmonaire) : ouvertes uniquement pendant l’éjection.' },
  ],
};
