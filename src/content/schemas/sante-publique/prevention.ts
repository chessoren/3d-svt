import type { Schema } from '../../types';

export const schemaPrevention: Schema = {
  id: 'sante-publique-prevention',
  ue: 'sante-publique',
  titre: 'Les niveaux de prévention sur l’histoire naturelle de la maladie',
  description:
    'Prévention primaire, secondaire, tertiaire et quaternaire replacées sur l’histoire naturelle de la maladie, avec le moment d’intervention, les objectifs et des exemples pour chaque niveau.',
  categorie: 'Santé publique',
  viewBox: '0 0 920 700',
  ficheLiee: 'sante-publique-prevention',
  motsCles: ['prévention primaire', 'prévention secondaire', 'prévention tertiaire', 'prévention quaternaire', 'histoire naturelle de la maladie', 'dépistage'],
  svg: `
    <rect x="0" y="0" width="920" height="700" rx="18" fill="#ffffff"/>
    <defs>
      <marker id="sp-prevention-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
      </marker>
    </defs>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="30" font-size="19" font-weight="600" fill="#101828">Histoire naturelle de la maladie et niveaux de prévention</text>
      <line x1="40" y1="42" x2="220" y2="42" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Frise temporelle -->
      <line x1="60" y1="108" x2="860" y2="108" stroke="#475467" stroke-width="2" marker-end="url(#sp-prevention-fleche)"/>
      <text x="800" y="96" font-size="12" fill="#475467">temps</text>

      <circle cx="100" cy="108" r="6" fill="#101828"/>
      <text x="70" y="132" font-size="11.5" fill="#101828">Sujet sain</text>

      <circle cx="330" cy="108" r="6" fill="#e0632f"/>
      <text x="256" y="132" font-size="11.5" fill="#e0632f">Facteurs de risque présents</text>

      <circle cx="500" cy="108" r="6" fill="#b54708"/>
      <text x="440" y="132" font-size="11.5" fill="#b54708">Maladie infraclinique</text>

      <circle cx="650" cy="108" r="6" fill="#d4380d"/>
      <text x="596" y="132" font-size="11.5" fill="#d4380d">Maladie symptomatique</text>

      <circle cx="820" cy="108" r="6" fill="#5a2fc7"/>
      <text x="748" y="132" font-size="11.5" fill="#5a2fc7">Séquelles / handicap</text>

      <!-- Prévention primaire -->
      <line x1="100" y1="150" x2="330" y2="150" stroke="#12a065" stroke-width="6" stroke-linecap="round"/>
      <circle cx="120" cy="150" r="14" fill="#12a065"/>
      <text x="115" y="155" font-size="12" font-weight="700" fill="#ffffff">1</text>

      <!-- Prévention secondaire -->
      <line x1="330" y1="150" x2="650" y2="150" stroke="#175cd3" stroke-width="6" stroke-linecap="round"/>
      <circle cx="500" cy="150" r="14" fill="#175cd3"/>
      <text x="495" y="155" font-size="12" font-weight="700" fill="#ffffff">4</text>

      <!-- Prévention tertiaire -->
      <line x1="650" y1="150" x2="860" y2="150" stroke="#7c4df5" stroke-width="6" stroke-linecap="round"/>
      <circle cx="740" cy="150" r="14" fill="#7c4df5"/>
      <text x="735" y="155" font-size="12" font-weight="700" fill="#ffffff">7</text>

      <!-- Bloc prévention primaire -->
      <g transform="translate(40,190)">
        <rect x="0" y="0" width="270" height="180" rx="12" fill="#eafbf1" stroke="#bdeccb"/>
        <circle cx="22" cy="24" r="13" fill="#12a065"/>
        <text x="17" y="29" font-size="12" font-weight="700" fill="#ffffff">1</text>
        <text x="42" y="29" font-size="13.5" font-weight="600" fill="#101828">Prévention primaire</text>
        <text x="18" y="52" font-size="11.5" fill="#475467">Avant l’apparition de la maladie</text>
        <circle cx="22" cy="72" r="12" fill="#12a065" opacity="0.2"/>
        <text x="18" y="77" font-size="11.5" font-weight="700" fill="#0a7a4d">2</text>
        <text x="40" y="77" font-size="12" font-weight="600" fill="#0a7a4d">Objectif</text>
        <text x="18" y="94" font-size="11.5" fill="#475467">Réduire l’incidence en évitant</text>
        <text x="18" y="110" font-size="11.5" fill="#475467">l’apparition de nouveaux cas</text>
        <circle cx="22" cy="130" r="12" fill="#12a065" opacity="0.2"/>
        <text x="18" y="135" font-size="11.5" font-weight="700" fill="#0a7a4d">3</text>
        <text x="40" y="135" font-size="12" font-weight="600" fill="#0a7a4d">Exemples</text>
        <text x="18" y="152" font-size="11.5" fill="#475467">Vaccination, lutte contre le</text>
        <text x="18" y="168" font-size="11.5" fill="#475467">tabagisme, hygiène de vie</text>
      </g>

      <!-- Bloc prévention secondaire -->
      <g transform="translate(326,190)">
        <rect x="0" y="0" width="270" height="180" rx="12" fill="#eef4ff" stroke="#c9d6ff"/>
        <circle cx="22" cy="24" r="13" fill="#175cd3"/>
        <text x="17" y="29" font-size="12" font-weight="700" fill="#ffffff">4</text>
        <text x="42" y="29" font-size="13.5" font-weight="600" fill="#101828">Prévention secondaire</text>
        <text x="18" y="52" font-size="11.5" fill="#475467">Au stade infraclinique ou précoce</text>
        <circle cx="22" cy="72" r="12" fill="#175cd3" opacity="0.2"/>
        <text x="18" y="77" font-size="11.5" font-weight="700" fill="#175cd3">5</text>
        <text x="40" y="77" font-size="12" font-weight="600" fill="#175cd3">Objectif</text>
        <text x="18" y="94" font-size="11.5" fill="#475467">Réduire la prévalence par un</text>
        <text x="18" y="110" font-size="11.5" fill="#475467">diagnostic et un traitement précoces</text>
        <circle cx="22" cy="130" r="12" fill="#175cd3" opacity="0.2"/>
        <text x="18" y="135" font-size="11.5" font-weight="700" fill="#175cd3">6</text>
        <text x="40" y="135" font-size="12" font-weight="600" fill="#175cd3">Exemples</text>
        <text x="18" y="152" font-size="11.5" fill="#475467">Dépistage organisé (cancer du</text>
        <text x="18" y="168" font-size="11.5" fill="#475467">sein, du col utérin, colorectal)</text>
      </g>

      <!-- Bloc prévention tertiaire -->
      <g transform="translate(612,190)">
        <rect x="0" y="0" width="270" height="180" rx="12" fill="#f2f0ff" stroke="#dcd6fb"/>
        <circle cx="22" cy="24" r="13" fill="#7c4df5"/>
        <text x="17" y="29" font-size="12" font-weight="700" fill="#ffffff">7</text>
        <text x="42" y="29" font-size="13.5" font-weight="600" fill="#101828">Prévention tertiaire</text>
        <text x="18" y="52" font-size="11.5" fill="#475467">Une fois la maladie déclarée</text>
        <circle cx="22" cy="72" r="12" fill="#7c4df5" opacity="0.22"/>
        <text x="18" y="77" font-size="11.5" font-weight="700" fill="#5a2fc7">8</text>
        <text x="40" y="77" font-size="12" font-weight="600" fill="#5a2fc7">Objectif</text>
        <text x="18" y="94" font-size="11.5" fill="#475467">Limiter les séquelles, les</text>
        <text x="18" y="110" font-size="11.5" fill="#475467">complications et les rechutes</text>
        <circle cx="22" cy="130" r="12" fill="#7c4df5" opacity="0.22"/>
        <text x="18" y="135" font-size="11.5" font-weight="700" fill="#5a2fc7">9</text>
        <text x="40" y="135" font-size="12" font-weight="600" fill="#5a2fc7">Exemples</text>
        <text x="18" y="152" font-size="11.5" fill="#475467">Rééducation, réadaptation,</text>
        <text x="18" y="168" font-size="11.5" fill="#475467">éducation thérapeutique</text>
      </g>

      <!-- Bloc prévention quaternaire -->
      <g transform="translate(40,398)">
        <rect x="0" y="0" width="842" height="126" rx="12" fill="#fff6f1" stroke="#f3d3c2"/>
        <circle cx="22" cy="24" r="13" fill="#e0632f"/>
        <text x="17" y="29" font-size="12" font-weight="700" fill="#ffffff">10</text>
        <text x="44" y="29" font-size="13.5" font-weight="600" fill="#101828">Prévention quaternaire</text>
        <text x="18" y="52" font-size="11.5" fill="#475467">Transversale : intervient à tout moment du parcours de soins</text>
        <circle cx="22" cy="72" r="12" fill="#e0632f" opacity="0.2"/>
        <text x="18" y="77" font-size="11.5" font-weight="700" fill="#e0632f">11</text>
        <text x="40" y="77" font-size="12" font-weight="600" fill="#e0632f">Objectif</text>
        <text x="18" y="94" font-size="11.5" fill="#475467">Éviter le surdiagnostic et le surtraitement, et leurs conséquences pour le patient</text>
        <text x="440" y="72" font-size="12" font-weight="600" fill="#e0632f">Exemples</text>
        <circle cx="422" cy="68" r="12" fill="#e0632f" opacity="0.2"/>
        <text x="416" y="73" font-size="11.5" font-weight="700" fill="#e0632f">12</text>
        <text x="440" y="90" font-size="11.5" fill="#475467">Limiter les examens complémentaires non pertinents,</text>
        <text x="440" y="106" font-size="11.5" fill="#475467">réévaluer la pertinence d’un traitement au long cours</text>
      </g>

      <text x="40" y="654" font-size="12" fill="#8a94a8">Les quatre niveaux sont complémentaires et se succèdent, sauf la prévention quaternaire, transversale à tout le parcours de soins.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Prévention primaire : agit avant l’apparition de la maladie, sur les facteurs de risque et les déterminants de santé.' },
    { ref: '2', texte: 'Objectif de la prévention primaire : réduire l’incidence, c’est-à-dire le nombre de nouveaux cas.' },
    { ref: '3', texte: 'Exemples : vaccination, lutte contre le tabagisme et l’alcool, promotion de l’activité physique.' },
    { ref: '4', texte: 'Prévention secondaire : agit au stade infraclinique ou au tout début symptomatique de la maladie.' },
    { ref: '5', texte: 'Objectif de la prévention secondaire : réduire la prévalence par un diagnostic et un traitement précoces.' },
    { ref: '6', texte: 'Exemples : dépistages organisés (cancer du sein, du col de l’utérus, colorectal).' },
    { ref: '7', texte: 'Prévention tertiaire : agit une fois la maladie déclarée, souvent chronique.' },
    { ref: '8', texte: 'Objectif de la prévention tertiaire : limiter les séquelles, les complications et les rechutes.' },
    { ref: '9', texte: 'Exemples : rééducation fonctionnelle, réadaptation, éducation thérapeutique du patient.' },
    { ref: '10', texte: 'Prévention quaternaire : transversale, intervient à tout moment du parcours de soins.' },
    { ref: '11', texte: 'Objectif de la prévention quaternaire : éviter le surdiagnostic et le surtraitement et leurs conséquences iatrogènes.' },
    { ref: '12', texte: 'Exemples : limiter les examens complémentaires non pertinents, réévaluer régulièrement les traitements au long cours.' },
  ],
};
