import type { Schema } from '../../types';

export const schemaReplication: Schema = {
  id: 'ue1-replication',
  ue: 'ue1',
  titre: 'La fourche de réplication de l’ADN',
  description:
    'Réplication semi-conservative : hélicase, protéines SSB, primase, ADN polymérase III, synthèse continue du brin direct et discontinue du brin retardé, ADN polymérase I et ligase.',
  categorie: 'Biologie moléculaire',
  viewBox: '0 0 920 580',
  ficheLiee: 'ue1-replication',
  motsCles: ['réplication', 'fourche de réplication', 'hélicase', 'primase', 'ADN polymérase III', 'brin direct', 'brin retardé', 'fragments d’Okazaki', 'ligase'],
  svg: `
    <rect x="0" y="0" width="920" height="580" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="ue1-replication-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">La fourche de réplication de l’ADN</text>
      <line x1="40" y1="52" x2="230" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>
      <text x="40" y="72" font-size="13" fill="#475467">Réplication semi-conservative : synthèse continue du brin direct, discontinue du brin retardé</text>

      <!-- Sens de progression -->
      <circle cx="560" cy="110" r="12" fill="#101828" opacity="0.85"/>
      <text x="555" y="115" font-size="12" font-weight="700" fill="#ffffff">11</text>
      <text x="578" y="106" font-size="12" fill="#101828">Sens de progression</text>
      <text x="578" y="122" font-size="12" fill="#101828">de la fourche</text>
      <line x1="700" y1="112" x2="770" y2="112" stroke="#101828" stroke-width="2.4" marker-end="url(#ue1-replication-fleche)"/>

      <!-- ADN parental non répliqué -->
      <line x1="460" y1="290" x2="860" y2="290" stroke="#98a2b3" stroke-width="3" stroke-linecap="round"/>
      <line x1="460" y1="310" x2="860" y2="310" stroke="#98a2b3" stroke-width="3" stroke-linecap="round"/>
      <line x1="500" y1="290" x2="500" y2="310" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="540" y1="290" x2="540" y2="310" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="580" y1="290" x2="580" y2="310" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="620" y1="290" x2="620" y2="310" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="660" y1="290" x2="660" y2="310" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="700" y1="290" x2="700" y2="310" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="740" y1="290" x2="740" y2="310" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="780" y1="290" x2="780" y2="310" stroke="#c8ccd4" stroke-width="1.5"/>
      <line x1="820" y1="290" x2="820" y2="310" stroke="#c8ccd4" stroke-width="1.5"/>
      <text x="862" y="286" font-size="11" fill="#475467">…5′</text>
      <text x="862" y="318" font-size="11" fill="#475467">…3′</text>
      <circle cx="545" cy="264" r="12" fill="#667085" opacity="0.9"/>
      <text x="540" y="269" font-size="12" font-weight="700" fill="#ffffff">10</text>
      <text x="562" y="345" font-size="12" fill="#475467">ADN parental non répliqué</text>

      <!-- Bras matriciels (brins parentaux séparés) -->
      <line x1="460" y1="300" x2="90" y2="150" stroke="#667085" stroke-width="4" stroke-linecap="round"/>
      <line x1="460" y1="300" x2="90" y2="460" stroke="#667085" stroke-width="4" stroke-linecap="round"/>
      <text x="60" y="148" font-size="13" font-weight="700" fill="#101828">3′</text>
      <text x="58" y="468" font-size="13" font-weight="700" fill="#101828">5′</text>

      <!-- Brin direct (continu) -->
      <line x1="465" y1="289" x2="95" y2="139" stroke="#175cd3" stroke-width="4" stroke-linecap="round"/>
      <text x="66" y="132" font-size="12" font-weight="700" fill="#175cd3">5′</text>
      <text x="472" y="280" font-size="12" font-weight="700" fill="#175cd3">3′</text>
      <circle cx="150" cy="155" r="12" fill="#1849a9" opacity="0.9"/>
      <text x="145" y="160" font-size="12" font-weight="700" fill="#ffffff">5</text>
      <text x="168" y="172" font-size="12.5" fill="#1849a9">Brin direct (continu)</text>

      <!-- Hélicase -->
      <circle cx="460" cy="300" r="28" fill="#0e7490" opacity="0.92"/>
      <circle cx="460" cy="300" r="9" fill="#ffffff"/>
      <circle cx="460" cy="262" r="12" fill="#0e7490" opacity="0.92"/>
      <text x="455" y="267" font-size="12" font-weight="700" fill="#ffffff">1</text>

      <!-- ADN polymérase III (brin direct) -->
      <circle cx="465" cy="289" r="13" fill="#175cd3"/>
      <circle cx="500" cy="266" r="12" fill="#175cd3" opacity="0.92"/>
      <text x="495" y="271" font-size="12" font-weight="700" fill="#ffffff">4</text>

      <!-- Primase -->
      <polygon points="435,308 447,320 435,332 423,320" fill="#7c4df5"/>
      <circle cx="405" cy="292" r="12" fill="#7c4df5" opacity="0.92"/>
      <text x="400" y="297" font-size="12" font-weight="700" fill="#ffffff">3</text>

      <!-- Fragment d'Okazaki R (le plus récent) -->
      <line x1="435" y1="324" x2="406" y2="337" stroke="#e0632f" stroke-width="4" stroke-linecap="round"/>
      <line x1="406" y1="337" x2="354" y2="359" stroke="#175cd3" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 0"/>
      <circle cx="354" cy="359" r="12" fill="#175cd3"/>
      <text x="437" y="316" font-size="11" font-weight="700" fill="#e0632f">5′</text>
      <text x="358" y="352" font-size="11" font-weight="700" fill="#175cd3">3′</text>

      <!-- Protéines SSB -->
      <ellipse cx="341.6" cy="351.2" rx="10" ry="7" fill="#fde68a" stroke="#b45309" stroke-width="1.4"/>
      <ellipse cx="326.8" cy="357.6" rx="10" ry="7" fill="#fde68a" stroke="#b45309" stroke-width="1.4"/>
      <circle cx="345" cy="332" r="12" fill="#b45309" opacity="0.92"/>
      <text x="340" y="337" font-size="12" font-weight="700" fill="#ffffff">2</text>

      <!-- Fragment d'Okazaki M (amorce visible) -->
      <line x1="324.2" y1="371.8" x2="302" y2="381.4" stroke="#e0632f" stroke-width="4" stroke-linecap="round"/>
      <line x1="302" y1="381.4" x2="242.8" y2="407" stroke="#175cd3" stroke-width="4" stroke-linecap="round"/>
      <circle cx="308" cy="376" r="12" fill="#e0632f" opacity="0.92"/>
      <text x="303" y="381" font-size="12" font-weight="700" fill="#ffffff">7</text>
      <text x="200" y="400" font-size="12" fill="#e0632f">Amorce d’ARN</text>

      <!-- Zone de remplacement par l'ADN polymérase I -->
      <line x1="242.8" y1="407" x2="213.2" y2="419.8" stroke="#b93815" stroke-width="3.4" stroke-linecap="round" stroke-dasharray="4 3"/>
      <rect x="220" y="405" width="16" height="11" rx="3" fill="#b93815" transform="rotate(23 228 410)"/>
      <circle cx="235" cy="440" r="12" fill="#b93815" opacity="0.92"/>
      <text x="230" y="445" font-size="12" font-weight="700" fill="#ffffff">8</text>

      <!-- Fragment d'Okazaki L (mature, soudé) -->
      <line x1="213.2" y1="419.8" x2="113.3" y2="463" stroke="#175cd3" stroke-width="4" stroke-linecap="round"/>
      <polygon points="113,463 125,455 125,471" fill="#12a065"/>
      <circle cx="95" cy="435" r="12" fill="#12a065" opacity="0.92"/>
      <text x="90" y="440" font-size="12" font-weight="700" fill="#ffffff">9</text>

      <!-- Brin retardé (discontinu) -->
      <circle cx="150" cy="425" r="12" fill="#e0632f" opacity="0.92"/>
      <text x="145" y="430" font-size="12" font-weight="700" fill="#ffffff">6</text>
      <text x="168" y="443" font-size="12.5" fill="#e0632f">Brin retardé (discontinu)</text>

      <text x="40" y="562" font-size="12" fill="#8a94a8">Chaque fragment d’Okazaki est synthétisé 5′→3′, dans le sens opposé à la progression de la fourche.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Hélicase : sépare les deux brins parentaux en rompant les liaisons hydrogène.' },
    { ref: '2', texte: 'Protéines SSB : se fixent sur l’ADN simple brin exposé et empêchent sa renaturation.' },
    { ref: '3', texte: 'Primase : synthétise une courte amorce d’ARN nécessaire à l’initiation de la synthèse.' },
    { ref: '4', texte: 'ADN polymérase III : synthétise l’ADN 5′→3′, en continu sur le brin direct et par fragments sur le brin retardé.' },
    { ref: '5', texte: 'Brin direct (précoce) : synthétisé sans interruption, dans le sens de progression de la fourche.' },
    { ref: '6', texte: 'Brin retardé (tardif) : synthétisé de façon discontinue, en fragments d’Okazaki.' },
    { ref: '7', texte: 'Amorce d’ARN : marque le début de chaque fragment d’Okazaki, ultérieurement excisée.' },
    { ref: '8', texte: 'ADN polymérase I : excise les amorces d’ARN et les remplace par de l’ADN.' },
    { ref: '9', texte: 'ADN ligase : soude les fragments d’Okazaki entre eux par une liaison phosphodiester.' },
    { ref: '10', texte: 'ADN parental non répliqué : double hélice encore intacte, en avant de la fourche.' },
    { ref: '11', texte: 'Sens de progression de la fourche de réplication le long de la molécule d’ADN.' },
  ],
};
