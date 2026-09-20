import type { Schema } from '../../types';

export const schemaCourbeHemoglobine: Schema = {
  id: 'physio-courbe-hemoglobine',
  ue: 'physio',
  titre: 'La courbe de dissociation de l’oxyhémoglobine',
  description:
    'Saturation de l’hémoglobine en oxygène en fonction de la pression partielle en oxygène : allure sigmoïde, P50, points artériel et veineux, et facteurs déplaçant la courbe à droite ou à gauche.',
  categorie: 'Physiologie respiratoire',
  viewBox: '0 0 920 680',
  ficheLiee: 'physio-echanges-gazeux',
  motsCles: ['courbe de dissociation', 'oxyhémoglobine', 'saturation', 'P50', 'effet Bohr', '2,3-DPG'],
  svg: `
    <rect x="0" y="0" width="920" height="680" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">1 · Courbe de dissociation et facteurs de déplacement</text>
      <line x1="40" y1="52" x2="180" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(110,84)">
        <!-- axes -->
        <line x1="0" y1="0" x2="0" y2="350" stroke="#475467" stroke-width="1.6"/>
        <line x1="0" y1="350" x2="600" y2="350" stroke="#475467" stroke-width="1.6"/>
        <text x="-150" y="180" font-size="13" fill="#101828" transform="rotate(-90 -150 180)">Saturation en O₂, SaO₂ (%)</text>
        <text x="240" y="392" font-size="13" fill="#101828">Pression partielle en O₂, PO₂ (mmHg)</text>

        <!-- graduations Y -->
        <text x="-24" y="354" font-size="11" fill="#475467">0</text>
        <line x1="0" y1="280" x2="600" y2="280" stroke="#eef1f6" stroke-width="1"/>
        <text x="-28" y="284" font-size="11" fill="#475467">20</text>
        <line x1="0" y1="210" x2="600" y2="210" stroke="#eef1f6" stroke-width="1"/>
        <text x="-28" y="214" font-size="11" fill="#475467">40</text>
        <line x1="0" y1="175" x2="600" y2="175" stroke="#f3d3c2" stroke-width="1" stroke-dasharray="3 3"/>
        <text x="-28" y="179" font-size="11" fill="#475467">50</text>
        <line x1="0" y1="140" x2="600" y2="140" stroke="#eef1f6" stroke-width="1"/>
        <text x="-28" y="144" font-size="11" fill="#475467">60</text>
        <line x1="0" y1="70" x2="600" y2="70" stroke="#eef1f6" stroke-width="1"/>
        <text x="-28" y="74" font-size="11" fill="#475467">80</text>
        <text x="-32" y="4" font-size="11" fill="#475467">100</text>

        <!-- graduations X -->
        <text x="-4" y="366" font-size="11" fill="#475467">0</text>
        <text x="116" y="366" font-size="11" fill="#475467">20</text>
        <line x1="162" y1="350" x2="162" y2="356" stroke="#e0632f"/>
        <text x="146" y="366" font-size="11" fill="#e0632f">27</text>
        <text x="236" y="366" font-size="11" fill="#475467">40</text>
        <text x="356" y="366" font-size="11" fill="#475467">60</text>
        <text x="476" y="366" font-size="11" fill="#475467">80</text>
        <text x="590" y="366" font-size="11" fill="#475467">100</text>

        <!-- ligne P50 -->
        <line x1="162" y1="175" x2="162" y2="350" stroke="#e0632f" stroke-width="1" stroke-dasharray="4 3"/>

        <!-- courbe déplacée à gauche -->
        <path d="M0,340 C20,300 40,240 70,170 C90,130 110,100 140,70 C170,45 210,25 270,12 C340,3 450,0 600,0"
          fill="none" stroke="#7c4df5" stroke-width="2.2" stroke-dasharray="6 4"/>
        <circle cx="90" cy="128" r="11" fill="#7c4df5" opacity="0.2"/>
        <text x="86" y="132" font-size="11" font-weight="700" fill="#7c4df5">6</text>

        <!-- courbe normale -->
        <path d="M0,350 C30,348 60,330 90,290 C110,260 130,220 150,190 C165,168 180,150 200,120
                 C220,95 245,80 270,65 C310,45 360,30 420,22 C480,16 540,10 600,7"
          fill="none" stroke="#175cd3" stroke-width="3.2" stroke-linecap="round"/>
        <circle cx="330" cy="42" r="11" fill="#175cd3" opacity="0.2"/>
        <text x="326" y="46" font-size="11" font-weight="700" fill="#175cd3">1</text>

        <!-- courbe déplacée à droite -->
        <path d="M0,350 C50,349 100,345 150,330 C190,315 220,290 250,250 C280,210 310,170 340,130
                 C380,90 430,55 500,30 C550,18 580,12 600,8"
          fill="none" stroke="#d4380d" stroke-width="2.2" stroke-dasharray="6 4"/>
        <circle cx="300" cy="235" r="11" fill="#d4380d" opacity="0.2"/>
        <text x="296" y="239" font-size="11" font-weight="700" fill="#d4380d">5</text>

        <!-- P50 -->
        <circle cx="162" cy="175" r="7" fill="#e0632f"/>
        <circle cx="188" cy="150" r="11" fill="#e0632f" opacity="0.24"/>
        <text x="184" y="154" font-size="11" font-weight="700" fill="#e0632f">2</text>

        <!-- point artériel -->
        <circle cx="592" cy="9" r="7" fill="#12a065"/>
        <circle cx="560" cy="34" r="11" fill="#12a065" opacity="0.22"/>
        <text x="556" y="38" font-size="11" font-weight="700" fill="#12a065">3</text>
        <text x="500" y="-6" font-size="11" fill="#12a065">artériel</text>

        <!-- point veineux -->
        <circle cx="240" cy="86" r="7" fill="#f79009"/>
        <circle cx="216" cy="60" r="11" fill="#f79009" opacity="0.26"/>
        <text x="212" y="64" font-size="11" font-weight="700" fill="#b54708">4</text>
        <text x="242" y="106" font-size="11" fill="#b54708">veineux</text>

        <!-- zone plate et zone pentue -->
        <rect x="440" y="5" width="150" height="22" rx="6" fill="#eafbf1" stroke="#bdeccb"/>
        <text x="450" y="20" font-size="10.5" fill="#12a065">portion plate (sécurité)</text>
        <circle cx="612" cy="16" r="11" fill="#12a065" opacity="0.2"/>
        <text x="608" y="20" font-size="11" font-weight="700" fill="#12a065">9</text>

        <rect x="95" y="150" width="150" height="22" rx="6" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="104" y="165" font-size="10.5" fill="#e0632f">portion pentue (échange tissulaire)</text>
        <circle cx="252" cy="161" r="11" fill="#e0632f" opacity="0.2"/>
        <text x="248" y="165" font-size="11" font-weight="700" fill="#e0632f">10</text>
      </g>

      <text x="40" y="470" font-size="19" font-weight="600" fill="#101828">2 · Facteurs de déplacement de la courbe</text>
      <line x1="40" y1="482" x2="180" y2="482" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(60,502)" font-size="12.5" fill="#101828">
        <rect x="0" y="0" width="400" height="120" rx="12" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="16" y="24" font-size="13" font-weight="600" fill="#d4380d">Déplacement à droite — affinité ↓</text>
        <circle cx="20" cy="46" r="10" fill="#d4380d" opacity="0.2"/>
        <text x="17" y="50" font-size="10.5" font-weight="700" fill="#d4380d">7</text>
        <text x="36" y="50">↑ Température, ↑ PCO₂, ↓ pH (effet Bohr)</text>
        <text x="36" y="72">↑ 2,3-DPG (globule rouge)</text>
        <text x="16" y="96" font-size="11.5" fill="#475467">Favorise la libération d’O₂ vers les tissus actifs.</text>

        <rect x="420" y="0" width="400" height="120" rx="12" fill="#f6f0ff" stroke="#e0d4fb"/>
        <text x="436" y="24" font-size="13" font-weight="600" fill="#7c4df5">Déplacement à gauche — affinité ↑</text>
        <circle cx="440" cy="46" r="10" fill="#7c4df5" opacity="0.2"/>
        <text x="437" y="50" font-size="10.5" font-weight="700" fill="#7c4df5">8</text>
        <text x="456" y="50">↓ Température, ↓ PCO₂, ↑ pH</text>
        <text x="456" y="72">↓ 2,3-DPG, hémoglobine fœtale (HbF)</text>
        <text x="436" y="96" font-size="11.5" fill="#475467">Favorise la fixation d’O₂ au niveau pulmonaire.</text>
      </g>

      <text x="40" y="656" font-size="12" fill="#8a94a8">P50 normal ≈ 26 à 27 mmHg ; point artériel ≈ 100 mmHg / 97 à 98 % ; point veineux ≈ 40 mmHg / 75 %.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Courbe normale de dissociation de l’oxyhémoglobine, de forme sigmoïde.' },
    { ref: '2', texte: 'P50 : pression partielle en O₂ pour laquelle 50 % de l’hémoglobine est saturée, normalement 26 à 27 mmHg.' },
    { ref: '3', texte: 'Point artériel : PO₂ ≈ 100 mmHg, SaO₂ ≈ 97 à 98 %.' },
    { ref: '4', texte: 'Point veineux mêlé : PO₂ ≈ 40 mmHg, SaO₂ ≈ 75 %.' },
    { ref: '5', texte: 'Déplacement de la courbe à droite : diminution de l’affinité de l’hémoglobine pour l’O₂.' },
    { ref: '6', texte: 'Déplacement de la courbe à gauche : augmentation de l’affinité de l’hémoglobine pour l’O₂.' },
    { ref: '7', texte: 'Facteurs déplaçant la courbe à droite : hausse de la température, hausse de la PCO₂, baisse du pH (effet Bohr), hausse du 2,3-DPG.' },
    { ref: '8', texte: 'Facteurs déplaçant la courbe à gauche : baisse de la température, baisse de la PCO₂, hausse du pH, baisse du 2,3-DPG, hémoglobine fœtale.' },
    { ref: '9', texte: 'Portion plate de la courbe (PO₂ élevée) : la saturation reste élevée malgré une baisse de la PO₂ alvéolaire, ce qui sécurise le transport d’O₂.' },
    { ref: '10', texte: 'Portion pentue de la courbe (PO₂ tissulaire) : une faible baisse de PO₂ libère une grande quantité d’O₂ vers les tissus.' },
  ],
};
