import type { Schema } from '../../types';

export const schemaTranscription: Schema = {
  id: 'ue1-transcription',
  ue: 'ue1',
  titre: 'La transcription chez les eucaryotes',
  description:
    'Assemblage du complexe de préinitiation sur la boîte TATA, puis élongation par l’ARN polymérase II : bulle de transcription, brin matrice et brin codant.',
  categorie: 'Biologie moléculaire',
  viewBox: '0 0 920 460',
  ficheLiee: 'ue1-transcription',
  motsCles: ['transcription', 'boîte TATA', 'ARN polymérase II', 'facteurs généraux de transcription', 'bulle de transcription', 'brin matrice', 'brin codant'],
  svg: `
    <rect x="0" y="0" width="920" height="460" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="ue1-transcription-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="34" font-size="19" font-weight="600" fill="#101828">La transcription chez les eucaryotes</text>
      <line x1="40" y1="46" x2="230" y2="46" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <line x1="460" y1="70" x2="460" y2="368" stroke="#e4e9f5" stroke-width="1.5" stroke-dasharray="4 4"/>

      <!-- Panneau 1 : initiation -->
      <text x="40" y="90" font-size="14" font-weight="600" fill="#101828">1 · Initiation : complexe de préinitiation</text>

      <rect x="140" y="288" width="60" height="24" rx="4" fill="#fef3c7"/>
      <line x1="60" y1="294" x2="420" y2="294" stroke="#667085" stroke-width="3" stroke-linecap="round"/>
      <line x1="60" y1="306" x2="420" y2="306" stroke="#667085" stroke-width="3" stroke-linecap="round"/>
      <line x1="90" y1="294" x2="90" y2="306" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="120" y1="294" x2="120" y2="306" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="230" y1="294" x2="230" y2="306" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="260" y1="294" x2="260" y2="306" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="290" y1="294" x2="290" y2="306" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="380" y1="294" x2="380" y2="306" stroke="#c8ccd4" stroke-width="1.5"/>

      <text x="148" y="278" font-size="12" font-weight="700" fill="#b45309">TATA</text>
      <text x="150" y="330" font-size="11" fill="#8a94a8">-25</text>
      <circle cx="120" cy="270" r="12" fill="#b45309" opacity="0.9"/>
      <text x="115" y="275" font-size="12" font-weight="700" fill="#ffffff">1</text>

      <rect x="155" y="278" width="30" height="14" rx="6" fill="#7c4df5"/>
      <circle cx="185" cy="256" r="12" fill="#7c4df5" opacity="0.9"/>
      <text x="180" y="261" font-size="12" font-weight="700" fill="#ffffff">2</text>

      <circle cx="215" cy="268" r="10" fill="#a8e6da" stroke="#0e7490" stroke-width="1.4"/>
      <circle cx="238" cy="280" r="10" fill="#a8e6da" stroke="#0e7490" stroke-width="1.4"/>
      <circle cx="202" cy="248" r="10" fill="#a8e6da" stroke="#0e7490" stroke-width="1.4"/>
      <text x="200" y="235" font-size="10.5" fill="#0e7490">TFIIA/B/E/F/H</text>
      <circle cx="258" cy="252" r="12" fill="#0e7490" opacity="0.9"/>
      <text x="253" y="257" font-size="12" font-weight="700" fill="#ffffff">3</text>

      <line x1="340" y1="284" x2="340" y2="316" stroke="#101828" stroke-width="2"/>
      <text x="330" y="332" font-size="11" font-weight="700" fill="#101828">+1</text>
      <circle cx="340" cy="266" r="12" fill="#101828" opacity="0.85"/>
      <text x="335" y="271" font-size="12" font-weight="700" fill="#ffffff">4</text>

      <ellipse cx="345" cy="300" rx="42" ry="30" fill="#175cd3" opacity="0.82"/>
      <circle cx="398" cy="268" r="12" fill="#175cd3" opacity="0.9"/>
      <text x="393" y="273" font-size="12" font-weight="700" fill="#ffffff">5</text>

      <!-- Panneau 2 : élongation -->
      <text x="480" y="90" font-size="14" font-weight="600" fill="#101828">2 · Élongation : bulle de transcription</text>

      <rect x="628" y="248" width="114" height="106" rx="30" fill="#175cd3" opacity="0.1"/>
      <circle cx="742" cy="246" r="12" fill="#175cd3" opacity="0.6"/>
      <text x="737" y="251" font-size="12" font-weight="700" fill="#ffffff">6</text>

      <line x1="500" y1="294" x2="650" y2="294" stroke="#667085" stroke-width="3" stroke-linecap="round"/>
      <line x1="500" y1="306" x2="650" y2="306" stroke="#667085" stroke-width="3" stroke-linecap="round"/>
      <line x1="720" y1="294" x2="860" y2="294" stroke="#667085" stroke-width="3" stroke-linecap="round"/>
      <line x1="720" y1="306" x2="860" y2="306" stroke="#667085" stroke-width="3" stroke-linecap="round"/>
      <line x1="530" y1="294" x2="530" y2="306" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="560" y1="294" x2="560" y2="306" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="590" y1="294" x2="590" y2="306" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="620" y1="294" x2="620" y2="306" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="750" y1="294" x2="750" y2="306" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="780" y1="294" x2="780" y2="306" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="810" y1="294" x2="810" y2="306" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="840" y1="294" x2="840" y2="306" stroke="#c8ccd4" stroke-width="1.5"/>

      <path d="M650,294 Q685,272 720,294" fill="none" stroke="#12a065" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M650,306 Q685,328 720,306" fill="none" stroke="#e0632f" stroke-width="3.2" stroke-linecap="round"/>

      <ellipse cx="685" cy="255" rx="45" ry="22" fill="#175cd3" opacity="0.9"/>
      <circle cx="730" cy="234" r="12" fill="#175cd3" opacity="0.9"/>
      <text x="725" y="239" font-size="12" font-weight="700" fill="#ffffff">5</text>

      <circle cx="700" cy="325" r="12" fill="#e0632f" opacity="0.9"/>
      <text x="695" y="330" font-size="12" font-weight="700" fill="#ffffff">7</text>
      <text x="655" y="348" font-size="11.5" fill="#e0632f">Brin matrice</text>

      <circle cx="700" cy="262" r="12" fill="#12a065" opacity="0.9"/>
      <text x="695" y="267" font-size="12" font-weight="700" fill="#ffffff">8</text>
      <text x="655" y="248" font-size="11.5" fill="#12a065">Brin codant</text>

      <path d="M650,280 C610,258 585,268 545,245" fill="none" stroke="#12a065" stroke-width="3" stroke-linecap="round"/>
      <text x="465" y="232" font-size="12" fill="#12a065">ARN naissant (5′→3′)</text>
      <circle cx="545" cy="230" r="12" fill="#12a065" opacity="0.9"/>
      <text x="540" y="235" font-size="12" font-weight="700" fill="#ffffff">9</text>
      <text x="655" y="272" font-size="10.5" font-weight="700" fill="#12a065">3′</text>

      <text x="478" y="290" font-size="11" font-weight="700" fill="#101828">5′</text>
      <text x="478" y="316" font-size="11" font-weight="700" fill="#101828">3′</text>
      <text x="864" y="290" font-size="10" fill="#475467">…3′</text>
      <text x="864" y="316" font-size="10" fill="#475467">…5′</text>

      <line x1="760" y1="350" x2="830" y2="350" stroke="#101828" stroke-width="2.2" marker-end="url(#ue1-transcription-fleche)"/>
      <text x="690" y="345" font-size="11.5" fill="#101828">Sens de la transcription</text>
      <circle cx="745" cy="368" r="12" fill="#101828" opacity="0.85"/>
      <text x="740" y="373" font-size="12" font-weight="700" fill="#ffffff">10</text>

      <text x="40" y="440" font-size="12" fill="#8a94a8">Le brin codant a la même séquence que l’ARN (T remplacé par U) ; le brin matrice sert de modèle.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Boîte TATA (-25/-30) : séquence consensus TATAAA du promoteur, reconnue par TFIID.' },
    { ref: '2', texte: 'TBP (TATA-binding protein) : sous-unité de TFIID qui se fixe dans le petit sillon et coude l’ADN.' },
    { ref: '3', texte: 'Facteurs généraux de transcription (TFIIA, TFIIB, TFIIE, TFIIF, TFIIH) : forment le complexe de préinitiation.' },
    { ref: '4', texte: 'Site d’initiation de la transcription (+1), point de départ de la synthèse d’ARN.' },
    { ref: '5', texte: 'ARN polymérase II : enzyme qui synthétise l’ARN pré-messager à partir du brin matrice.' },
    { ref: '6', texte: 'Bulle de transcription : région où l’ADN est localement déroulé, sur une quinzaine de paires de bases.' },
    { ref: '7', texte: 'Brin matrice (transcrit) : lu 3′→5′ par l’ARN polymérase, sert de modèle à l’ARN.' },
    { ref: '8', texte: 'Brin codant (non transcrit) : même séquence que l’ARN (T à la place de U), lu 5′→3′.' },
    { ref: '9', texte: 'ARN naissant : synthétisé 5′→3′, de séquence complémentaire du brin matrice.' },
    { ref: '10', texte: 'Sens de progression de l’ARN polymérase II le long du gène.' },
  ],
};
