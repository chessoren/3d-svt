import type { Schema } from '../../types';

export const schemaNeuroneSynapse: Schema = {
  id: 'histo-neurone-synapse',
  ue: 'histo',
  titre: 'Le neurone et la synapse chimique',
  description:
    'Structure complète d’un neurone multipolaire (dendrites, corps cellulaire, axone myélinisé) et agrandissement d’une synapse chimique avec le mécanisme de transmission du signal.',
  categorie: 'Histologie du tissu nerveux',
  viewBox: '0 0 920 660',
  ficheLiee: 'histo-tissu-nerveux',
  motsCles: [
    'neurone',
    'dendrite',
    'corps cellulaire',
    'axone',
    'gaine de myéline',
    'nœud de Ranvier',
    'synapse chimique',
    'neurotransmetteur',
    'fente synaptique',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="660" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">1 · Le neurone multipolaire</text>
      <line x1="40" y1="52" x2="200" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Dendrites -->
      <g transform="translate(70,90)">
        <path d="M60,110 Q30,90 18,60" fill="none" stroke="#175cd3" stroke-width="4" stroke-linecap="round"/>
        <path d="M18,60 Q4,50 -6,32" fill="none" stroke="#175cd3" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M18,60 Q28,44 26,24" fill="none" stroke="#175cd3" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M60,110 Q42,132 44,158" fill="none" stroke="#175cd3" stroke-width="4" stroke-linecap="round"/>
        <path d="M44,158 Q30,168 16,172" fill="none" stroke="#175cd3" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M44,158 Q52,176 48,196" fill="none" stroke="#175cd3" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M60,110 Q46,108 30,112" fill="none" stroke="#175cd3" stroke-width="3" stroke-linecap="round"/>
      </g>
      <circle cx="98" cy="118" r="13" fill="#175cd3" opacity="0.16"/>
      <text x="94" y="123" font-size="12" font-weight="700" fill="#175cd3">1</text>

      <!-- Corps cellulaire (péricaryon) -->
      <g transform="translate(130,200)">
        <ellipse cx="0" cy="0" rx="46" ry="40" fill="#fff6f1" stroke="#e0632f" stroke-width="2.4"/>
        <circle cx="4" cy="-4" r="17" fill="#f6d9c4" stroke="#c98a2f"/>
        <circle cx="4" cy="-4" r="6" fill="#c98a2f"/>
      </g>
      <circle cx="130" cy="248" r="13" fill="#e0632f" opacity="0.16"/>
      <text x="126" y="253" font-size="12" font-weight="700" fill="#e0632f">2</text>

      <!-- Cône d'émergence -->
      <path d="M176,205 L214,196 L214,206 Z" fill="#98a2b3"/>
      <circle cx="200" cy="180" r="13" fill="#475467" opacity="0.16"/>
      <text x="196" y="185" font-size="12" font-weight="700" fill="#475467">3</text>

      <!-- Axone myélinisé avec noeuds de Ranvier -->
      <g transform="translate(214,196)">
        <line x1="0" y1="4" x2="480" y2="4" stroke="#101828" stroke-width="3"/>
        <rect x="10" y="-8" width="70" height="24" rx="10" fill="#e8ecff" stroke="#7c4df5" stroke-width="1.6"/>
        <rect x="94" y="-8" width="70" height="24" rx="10" fill="#e8ecff" stroke="#7c4df5" stroke-width="1.6"/>
        <rect x="178" y="-8" width="70" height="24" rx="10" fill="#e8ecff" stroke="#7c4df5" stroke-width="1.6"/>
        <rect x="262" y="-8" width="70" height="24" rx="10" fill="#e8ecff" stroke="#7c4df5" stroke-width="1.6"/>
        <rect x="346" y="-8" width="70" height="24" rx="10" fill="#e8ecff" stroke="#7c4df5" stroke-width="1.6"/>
        <ellipse cx="45" cy="-14" rx="14" ry="7" fill="#c9d6ff" stroke="#7c4df5"/>
        <ellipse cx="129" cy="-14" rx="14" ry="7" fill="#c9d6ff" stroke="#7c4df5"/>
        <ellipse cx="297" cy="-14" rx="14" ry="7" fill="#c9d6ff" stroke="#7c4df5"/>
      </g>
      <circle cx="248" cy="176" r="13" fill="#7c4df5" opacity="0.16"/>
      <text x="244" y="181" font-size="12" font-weight="700" fill="#7c4df5">4</text>
      <line x1="248" y1="188" x2="248" y2="196" stroke="#7c4df5" stroke-width="1.2"/>
      <circle cx="298" cy="222" r="13" fill="#12a065" opacity="0.16"/>
      <text x="291" y="227" font-size="11" font-weight="700" fill="#12a065">5</text>
      <line x1="298" y1="212" x2="298" y2="204" stroke="#12a065" stroke-width="1.2"/>

      <!-- Arborisation terminale -->
      <g transform="translate(694,200)">
        <path d="M0,-4 Q30,-24 58,-30" fill="none" stroke="#101828" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M0,-4 Q30,-4 58,0" fill="none" stroke="#101828" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M0,-4 Q30,18 58,30" fill="none" stroke="#101828" stroke-width="2.6" stroke-linecap="round"/>
        <circle cx="60" cy="-31" r="6" fill="#e0632f"/>
        <circle cx="60" cy="0" r="6" fill="#e0632f"/>
        <circle cx="60" cy="31" r="6" fill="#e0632f"/>
      </g>
      <circle cx="760" cy="170" r="13" fill="#e0632f" opacity="0.16"/>
      <text x="756" y="175" font-size="12" font-weight="700" fill="#e0632f">6</text>

      <text x="70" y="320" font-size="12" fill="#475467">Corps cellulaire → cône d’émergence → axone → arborisation terminale : sens de conduction du message nerveux.</text>

      <!-- ===== SYNAPSE CHIMIQUE (agrandissement) ===== -->
      <text x="40" y="370" font-size="19" font-weight="600" fill="#101828">2 · Agrandissement : la synapse chimique</text>
      <line x1="40" y1="382" x2="200" y2="382" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(140,420)">
        <!-- Terminaison présynaptique -->
        <path d="M0,0 L0,220 Q0,260 60,260 L200,260 Q260,260 260,220 L260,40 Q260,0 200,0 Z" fill="#fff6f1" stroke="#e0632f" stroke-width="2.4"/>
        <circle cx="230" cy="24" r="13" fill="#e0632f" opacity="0.18"/>
        <text x="225" y="29" font-size="11" font-weight="700" fill="#e0632f">7</text>

        <!-- Mitochondrie -->
        <ellipse cx="60" cy="70" rx="34" ry="22" fill="#f6d9c4" stroke="#c98a2f" stroke-width="1.6"/>
        <path d="M36,70 q8,-10 16,0 q8,10 16,0 q8,-10 16,0" fill="none" stroke="#c98a2f" stroke-width="1.4"/>
        <circle cx="60" cy="42" r="12" fill="#c98a2f" opacity="0.2"/>
        <text x="56.5" y="46.5" font-size="10.5" font-weight="700" fill="#c98a2f">8</text>

        <!-- Vésicules synaptiques -->
        <circle cx="120" cy="90" r="9" fill="#7c4df5"/>
        <circle cx="145" cy="105" r="9" fill="#7c4df5"/>
        <circle cx="110" cy="115" r="9" fill="#7c4df5"/>
        <circle cx="150" cy="135" r="9" fill="#7c4df5"/>
        <circle cx="125" cy="150" r="9" fill="#7c4df5"/>
        <circle cx="160" cy="165" r="9" fill="#7c4df5" opacity="0.85"/>
        <circle cx="175" cy="195" r="9" fill="#7c4df5" opacity="0.6"/>
        <circle cx="190" cy="215" r="9" fill="#7c4df5" opacity="0.4"/>
        <circle cx="205" cy="235" r="9" fill="#7c4df5" opacity="0.25"/>
        <circle cx="150" cy="115" r="13" fill="#7c4df5" opacity="0.16"/>
        <text x="146" y="120" font-size="11" font-weight="700" fill="#7c4df5">9</text>

        <!-- Membrane présynaptique -->
        <line x1="30" y1="252" x2="230" y2="252" stroke="#101828" stroke-width="3.4"/>

        <!-- Fente synaptique -->
        <rect x="30" y="256" width="200" height="26" fill="#eaf2ff"/>
        <circle cx="240" cy="269" r="13" fill="#175cd3" opacity="0.18"/>
        <text x="234" y="274" font-size="11" font-weight="700" fill="#175cd3">10</text>

        <!-- Neurotransmetteurs libérés -->
        <circle cx="90" cy="265" r="4.5" fill="#7c4df5"/>
        <circle cx="110" cy="272" r="4.5" fill="#7c4df5"/>
        <circle cx="130" cy="264" r="4.5" fill="#7c4df5"/>
        <circle cx="150" cy="273" r="4.5" fill="#7c4df5"/>
        <circle cx="170" cy="266" r="4.5" fill="#7c4df5"/>

        <!-- Membrane postsynaptique avec récepteurs -->
        <line x1="30" y1="282" x2="230" y2="282" stroke="#101828" stroke-width="3.4"/>
        <rect x="0" y="282" width="260" height="46" fill="#f0f3fb"/>
        <rect x="80" y="272" width="16" height="20" rx="4" fill="#12a065"/>
        <rect x="150" y="272" width="16" height="20" rx="4" fill="#12a065"/>
        <circle cx="126" cy="300" r="13" fill="#12a065" opacity="0.18"/>
        <text x="121" y="305" font-size="11" font-weight="700" fill="#12a065">11</text>
        <text x="14" y="316" font-size="10.5" fill="#475467">élément post-synaptique (dendrite)</text>
      </g>

      <!-- Encadré résumé des étapes -->
      <g transform="translate(500,420)">
        <rect x="0" y="0" width="380" height="230" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="16" y="26" font-size="13.5" font-weight="600" fill="#101828">Déroulement de la transmission</text>
        <text x="16" y="52" font-size="11.5" fill="#475467">1. Arrivée du potentiel d’action à la terminaison</text>
        <text x="16" y="72" font-size="11.5" fill="#475467">2. Entrée de Ca²⁺ voltage-dépendante</text>
        <text x="16" y="92" font-size="11.5" fill="#475467">3. Exocytose des vésicules synaptiques (9)</text>
        <text x="16" y="112" font-size="11.5" fill="#475467">4. Libération du neurotransmetteur dans la</text>
        <text x="30" y="130" font-size="11.5" fill="#475467">fente synaptique (10)</text>
        <text x="16" y="150" font-size="11.5" fill="#475467">5. Fixation sur les récepteurs post-synaptiques (11)</text>
        <text x="16" y="170" font-size="11.5" fill="#475467">6. Génération d’un potentiel post-synaptique</text>
        <text x="16" y="190" font-size="11.5" fill="#475467">7. Dégradation ou recapture du neurotransmetteur</text>
        <text x="16" y="212" font-size="11" fill="#98a2b3">Transmission unidirectionnelle : présynaptique → postsynaptique</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Dendrites : prolongements courts et ramifiés qui reçoivent les informations et les conduisent vers le corps cellulaire.' },
    { ref: '2', texte: 'Corps cellulaire (péricaryon) : contient le noyau et l’essentiel des organites ; centre trophique du neurone.' },
    { ref: '3', texte: 'Cône d’émergence : origine de l’axone, zone de naissance du potentiel d’action.' },
    { ref: '4', texte: 'Gaine de myéline : enroulement de membrane produit par les cellules gliales, isolant l’axone.' },
    { ref: '5', texte: 'Nœud de Ranvier : interruption de la myéline où se régénère le potentiel d’action (conduction saltatoire).' },
    { ref: '6', texte: 'Arborisation terminale : ramifications distales de l’axone se terminant par les boutons synaptiques.' },
    { ref: '7', texte: 'Bouton synaptique (terminaison présynaptique) : extrémité de l’axone en regard de la cellule cible.' },
    { ref: '8', texte: 'Mitochondrie : fournit l’ATP nécessaire à la synthèse et au recyclage du neurotransmetteur.' },
    { ref: '9', texte: 'Vésicules synaptiques : stockent le neurotransmetteur et fusionnent avec la membrane présynaptique par exocytose.' },
    { ref: '10', texte: 'Fente synaptique : espace extracellulaire d’environ 20 nm séparant les deux neurones.' },
    { ref: '11', texte: 'Récepteurs post-synaptiques : protéines membranaires spécifiques qui fixent le neurotransmetteur et déclenchent la réponse.' },
  ],
};
