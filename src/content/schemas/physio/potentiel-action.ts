import type { Schema } from '../../types';

export const schemaPotentielAction: Schema = {
  id: 'physio-potentiel-action',
  ue: 'physio',
  titre: 'Le potentiel d’action neuronal',
  description:
    'Évolution du potentiel de membrane au cours d’un potentiel d’action : repos, dépolarisation, repolarisation, hyperpolarisation, périodes réfractaires et mouvements ioniques associés.',
  categorie: 'Physiologie cellulaire',
  viewBox: '0 0 920 640',
  ficheLiee: 'physio-excitabilite',
  motsCles: ['potentiel d’action', 'potentiel de repos', 'seuil', 'dépolarisation', 'repolarisation', 'canaux sodium', 'canaux potassium', 'période réfractaire'],
  svg: `
    <rect x="0" y="0" width="920" height="640" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">1 · Tracé du potentiel d’action</text>
      <line x1="40" y1="52" x2="180" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Axes -->
      <g transform="translate(90,90)">
        <!-- graduations verticales (mV) -->
        <line x1="0" y1="0" x2="0" y2="360" stroke="#475467" stroke-width="1.6"/>
        <line x1="0" y1="360" x2="700" y2="360" stroke="#475467" stroke-width="1.6"/>
        <text x="-58" y="4" font-size="12" fill="#475467">+40</text>
        <line x1="-6" y1="0" x2="0" y2="0" stroke="#475467" stroke-width="1.4"/>
        <text x="-52" y="104" font-size="12" fill="#475467">0</text>
        <line x1="-6" y1="100" x2="0" y2="100" stroke="#475467" stroke-width="1.4"/>
        <text x="-70" y="224" font-size="12" fill="#475467">−55</text>
        <line x1="-6" y1="220" x2="0" y2="220" stroke="#475467" stroke-width="1.4"/>
        <text x="-70" y="264" font-size="12" fill="#475467">−70</text>
        <line x1="-6" y1="260" x2="0" y2="260" stroke="#475467" stroke-width="1.4"/>
        <text x="-70" y="304" font-size="12" fill="#475467">−90</text>
        <line x1="-6" y1="300" x2="0" y2="300" stroke="#475467" stroke-width="1.4"/>
        <text x="-118" y="184" font-size="13" fill="#101828" transform="rotate(-90 -118 184)">Potentiel de membrane (mV)</text>

        <!-- ligne de seuil -->
        <line x1="0" y1="220" x2="700" y2="220" stroke="#e0632f" stroke-width="1.2" stroke-dasharray="5 4"/>
        <text x="560" y="214" font-size="12" fill="#e0632f">seuil ≈ −55 mV</text>

        <!-- ligne de repos -->
        <line x1="0" y1="260" x2="700" y2="260" stroke="#98a2b3" stroke-width="1" stroke-dasharray="3 3"/>

        <!-- courbe du potentiel d'action -->
        <path d="M0,260 L120,260 C160,258 180,250 196,220 C212,180 220,60 244,20 C258,-2 272,4 284,20 C300,44 308,90 320,140 C332,190 344,240 360,280 C372,308 384,320 400,304 C416,290 424,270 434,262 C460,254 520,260 700,260"
          fill="none" stroke="#175cd3" stroke-width="3.2" stroke-linecap="round"/>

        <!-- axe du temps -->
        <text x="330" y="392" font-size="13" fill="#101828">Temps (ms)</text>
        <text x="196" y="378" font-size="11.5" fill="#475467">0</text>
        <text x="240" y="378" font-size="11.5" fill="#475467">1</text>
        <text x="320" y="378" font-size="11.5" fill="#475467">2</text>
        <text x="400" y="378" font-size="11.5" fill="#475467">3</text>
        <line x1="196" y1="360" x2="196" y2="366" stroke="#475467"/>
        <line x1="240" y1="360" x2="240" y2="366" stroke="#475467"/>
        <line x1="320" y1="360" x2="320" y2="366" stroke="#475467"/>
        <line x1="400" y1="360" x2="400" y2="366" stroke="#475467"/>

        <!-- pastilles de phase -->
        <circle cx="120" cy="272" r="12" fill="#667085" opacity="0.18"/>
        <text x="116" y="277" font-size="12" font-weight="700" fill="#667085">1</text>

        <circle cx="200" cy="232" r="12" fill="#e0632f" opacity="0.2"/>
        <text x="196" y="237" font-size="12" font-weight="700" fill="#e0632f">2</text>

        <circle cx="244" cy="8" r="12" fill="#175cd3" opacity="0.2"/>
        <text x="240" y="13" font-size="12" font-weight="700" fill="#175cd3">3</text>

        <circle cx="270" cy="10" r="12" fill="#12a065" opacity="0.2"/>
        <text x="266" y="15" font-size="12" font-weight="700" fill="#12a065">4</text>

        <circle cx="360" cy="292" r="12" fill="#12a065" opacity="0.2"/>
        <text x="356" y="297" font-size="12" font-weight="700" fill="#12a065">5</text>

        <circle cx="404" cy="314" r="12" fill="#7c4df5" opacity="0.2"/>
        <text x="400" y="319" font-size="12" font-weight="700" fill="#7c4df5">6</text>

        <!-- étiquettes de phase -->
        <text x="96" y="248" font-size="11.5" fill="#475467">repos</text>
        <text x="176" y="212" font-size="11.5" fill="#e0632f">seuil atteint</text>
        <text x="252" y="-8" font-size="11.5" fill="#175cd3">pic (dépolarisation)</text>
        <text x="330" y="176" font-size="11.5" fill="#12a065">repolarisation</text>
        <text x="378" y="336" font-size="11.5" fill="#7c4df5">hyperpolarisation</text>

        <!-- périodes réfractaires -->
        <rect x="220" y="344" width="130" height="14" rx="4" fill="#d4380d" opacity="0.18"/>
        <text x="228" y="354" font-size="10.5" fill="#d4380d">réfractaire absolue</text>
        <circle cx="352" cy="351" r="10" fill="#d4380d" opacity="0.22"/>
        <text x="349" y="355" font-size="11" font-weight="700" fill="#d4380d">7</text>

        <rect x="350" y="344" width="150" height="14" rx="4" fill="#f79009" opacity="0.18"/>
        <text x="358" y="354" font-size="10.5" fill="#b54708">réfractaire relative</text>
        <circle cx="498" cy="351" r="10" fill="#f79009" opacity="0.26"/>
        <text x="495" y="355" font-size="11" font-weight="700" fill="#b54708">8</text>
      </g>

      <text x="40" y="524" font-size="19" font-weight="600" fill="#101828">2 · Mouvements ioniques associés</text>
      <line x1="40" y1="536" x2="180" y2="536" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(60,560)">
        <rect x="0" y="0" width="250" height="64" rx="12" fill="#eef4ff" stroke="#c9d6ff"/>
        <circle cx="22" cy="20" r="11" fill="#175cd3" opacity="0.2"/>
        <text x="18" y="24" font-size="11" font-weight="700" fill="#175cd3">9</text>
        <text x="42" y="24" font-size="13" font-weight="600" fill="#101828">Canaux Na⁺ voltage-dépendants</text>
        <text x="18" y="46" font-size="11.5" fill="#475467">Ouverture rapide : entrée de Na⁺, dépolarisation.</text>

        <rect x="270" y="0" width="270" height="64" rx="12" fill="#eafbf1" stroke="#bdeccb"/>
        <circle cx="292" cy="20" r="11" fill="#12a065" opacity="0.2"/>
        <text x="288" y="24" font-size="11" font-weight="700" fill="#12a065">10</text>
        <text x="312" y="24" font-size="13" font-weight="600" fill="#101828">Canaux K⁺ voltage-dépendants</text>
        <text x="288" y="46" font-size="11.5" fill="#475467">Ouverture retardée : sortie de K⁺, repolarisation.</text>

        <rect x="560" y="0" width="270" height="64" rx="12" fill="#fff6f1" stroke="#f3d3c2"/>
        <circle cx="582" cy="20" r="11" fill="#e0632f" opacity="0.2"/>
        <text x="578" y="24" font-size="11" font-weight="700" fill="#e0632f">11</text>
        <text x="602" y="24" font-size="13" font-weight="600" fill="#101828">Pompe Na⁺/K⁺-ATPase</text>
        <text x="578" y="46" font-size="11.5" fill="#475467">Restaure les gradients : 3 Na⁺ sortis, 2 K⁺ entrés.</text>
      </g>

      <text x="40" y="620" font-size="12" fill="#8a94a8">Neurone à seuil ≈ −55 mV, potentiel de repos ≈ −70 mV (valeurs usuelles).</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Potentiel de repos : environ −70 mV, membrane polarisée.' },
    { ref: '2', texte: 'Seuil d’excitation : environ −55 mV, déclenche l’ouverture massive des canaux Na⁺.' },
    { ref: '3', texte: 'Dépolarisation rapide : entrée massive de Na⁺, le potentiel tend vers +30 à +40 mV.' },
    { ref: '4', texte: 'Pic du potentiel d’action : inversion transitoire de la polarité membranaire.' },
    { ref: '5', texte: 'Repolarisation : fermeture des canaux Na⁺ et sortie de K⁺ par les canaux voltage-dépendants.' },
    { ref: '6', texte: 'Hyperpolarisation post-potentielle : le potentiel dépasse transitoirement le niveau de repos.' },
    { ref: '7', texte: 'Période réfractaire absolue : aucun nouveau potentiel d’action n’est déclenchable, quelle que soit l’intensité du stimulus.' },
    { ref: '8', texte: 'Période réfractaire relative : un potentiel d’action reste possible mais exige un stimulus supraliminaire.' },
    { ref: '9', texte: 'Canaux sodiques voltage-dépendants : ouverture rapide puis inactivation.' },
    { ref: '10', texte: 'Canaux potassiques voltage-dépendants : ouverture retardée par rapport aux canaux Na⁺.' },
    { ref: '11', texte: 'Pompe Na⁺/K⁺-ATPase : rétablit activement les gradients ioniques entre les potentiels d’action.' },
  ],
};
