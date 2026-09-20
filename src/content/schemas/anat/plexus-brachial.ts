import type { Schema } from '../../types';

export const schemaPlexusBrachial: Schema = {
  id: 'anat-plexus-brachial',
  ue: 'anat',
  titre: 'Organisation du plexus brachial',
  description:
    'Racines, troncs, divisions et faisceaux du plexus brachial jusqu’aux cinq nerfs terminaux, avec leurs principaux territoires.',
  categorie: 'Anatomie du membre supérieur',
  viewBox: '0 0 920 600',
  ficheLiee: 'anat-epaule-bras',
  motsCles: [
    'plexus brachial',
    'racines C5 T1',
    'tronc primaire',
    'faisceau',
    'nerf médian',
    'nerf ulnaire',
    'nerf radial',
    'nerf musculocutané',
    'nerf axillaire',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="600" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">Racines → troncs → divisions → faisceaux → nerfs terminaux</text>
      <line x1="40" y1="52" x2="360" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g font-family="Inter, system-ui, sans-serif" font-size="13">
        <!-- Colonne 1 : racines -->
        <text x="30" y="90" font-size="12.5" font-weight="600" fill="#8a94a8">RACINES</text>
        <g fill="#fdf3d6" stroke="#c9922b">
          <rect x="20" y="100" width="60" height="30" rx="8"/>
          <rect x="20" y="146" width="60" height="30" rx="8"/>
          <rect x="20" y="192" width="60" height="30" rx="8"/>
          <rect x="20" y="238" width="60" height="30" rx="8"/>
          <rect x="20" y="284" width="60" height="30" rx="8"/>
        </g>
        <g fill="#7a5a12" font-weight="600" text-anchor="middle">
          <text x="50" y="120">C5</text>
          <text x="50" y="166">C6</text>
          <text x="50" y="212">C7</text>
          <text x="50" y="258">C8</text>
          <text x="50" y="304">T1</text>
        </g>
        <g>
          <circle cx="8" cy="115" r="13" fill="#c9922b" opacity="0.24"/><text x="4" y="120" font-size="12" font-weight="700" fill="#c9922b">1</text>
          <circle cx="8" cy="161" r="13" fill="#c9922b" opacity="0.24"/><text x="4" y="166" font-size="12" font-weight="700" fill="#c9922b">2</text>
          <circle cx="8" cy="207" r="13" fill="#c9922b" opacity="0.24"/><text x="4" y="212" font-size="12" font-weight="700" fill="#c9922b">3</text>
          <circle cx="8" cy="253" r="13" fill="#c9922b" opacity="0.24"/><text x="4" y="258" font-size="12" font-weight="700" fill="#c9922b">4</text>
          <circle cx="8" cy="299" r="13" fill="#c9922b" opacity="0.24"/><text x="4" y="304" font-size="12" font-weight="700" fill="#c9922b">5</text>
        </g>

        <!-- Colonne 2 : troncs -->
        <text x="150" y="90" font-size="12.5" font-weight="600" fill="#8a94a8">TRONCS</text>
        <g fill="#fdf3d6" stroke="#c9922b">
          <rect x="140" y="112" width="80" height="30" rx="8"/>
          <rect x="140" y="200" width="80" height="30" rx="8"/>
          <rect x="140" y="272" width="80" height="30" rx="8"/>
        </g>
        <g fill="#7a5a12" font-size="11.5" text-anchor="middle">
          <text x="180" y="131">supérieur</text>
          <text x="180" y="219">moyen</text>
          <text x="180" y="291">inférieur</text>
        </g>
        <circle cx="130" cy="127" r="13" fill="#e0632f" opacity="0.2"/><text x="125" y="132" font-size="12" font-weight="700" fill="#e0632f">6</text>
        <circle cx="130" cy="215" r="13" fill="#e0632f" opacity="0.2"/><text x="125" y="220" font-size="12" font-weight="700" fill="#e0632f">7</text>
        <circle cx="130" cy="287" r="13" fill="#e0632f" opacity="0.2"/><text x="125" y="292" font-size="12" font-weight="700" fill="#e0632f">8</text>

        <!-- Connexions racines -> troncs -->
        <g stroke="#c9922b" stroke-width="1.6" fill="none">
          <path d="M 80 115 L 140 127"/>
          <path d="M 80 161 L 140 127"/>
          <path d="M 80 207 L 140 215"/>
          <path d="M 80 253 L 140 287"/>
          <path d="M 80 299 L 140 287"/>
        </g>

        <!-- Colonne 3 : divisions (antérieures / postérieures), non numérotées -->
        <text x="270" y="90" font-size="12.5" font-weight="600" fill="#8a94a8">DIVISIONS</text>
        <g stroke="#98a2b3" stroke-width="1.4" fill="none">
          <path d="M 220 127 L 300 100"/>
          <path d="M 220 127 L 300 150"/>
          <path d="M 220 215 L 300 195"/>
          <path d="M 220 215 L 300 240"/>
          <path d="M 220 287 L 300 270"/>
          <path d="M 220 287 L 300 310"/>
        </g>
        <text x="272" y="103" font-size="10.5" fill="#98a2b3">ant.</text>
        <text x="272" y="153" font-size="10.5" fill="#98a2b3">post.</text>
        <text x="272" y="198" font-size="10.5" fill="#98a2b3">ant.</text>
        <text x="272" y="243" font-size="10.5" fill="#98a2b3">post.</text>
        <text x="272" y="273" font-size="10.5" fill="#98a2b3">ant.</text>
        <text x="272" y="313" font-size="10.5" fill="#98a2b3">post.</text>

        <!-- Colonne 4 : faisceaux -->
        <text x="390" y="90" font-size="12.5" font-weight="600" fill="#8a94a8">FAISCEAUX</text>
        <g fill="#fdf3d6" stroke="#c9922b">
          <rect x="380" y="90" width="90" height="30" rx="8"/>
          <rect x="380" y="200" width="90" height="30" rx="8"/>
          <rect x="380" y="290" width="90" height="30" rx="8"/>
        </g>
        <g fill="#7a5a12" font-size="11.5" text-anchor="middle">
          <text x="425" y="109">latéral</text>
          <text x="425" y="219">postérieur</text>
          <text x="425" y="309">médial</text>
        </g>
        <circle cx="370" cy="105" r="13" fill="#175cd3" opacity="0.2"/><text x="365" y="110" font-size="12" font-weight="700" fill="#175cd3">9</text>
        <circle cx="370" cy="215" r="13" fill="#175cd3" opacity="0.2"/><text x="363" y="220" font-size="12" font-weight="700" fill="#175cd3">10</text>
        <circle cx="370" cy="305" r="13" fill="#175cd3" opacity="0.2"/><text x="363" y="310" font-size="12" font-weight="700" fill="#175cd3">11</text>

        <g stroke="#98a2b3" stroke-width="1.4" fill="none">
          <path d="M 300 100 L 380 105"/>
          <path d="M 300 195 L 380 105"/>
          <path d="M 300 150 L 380 215"/>
          <path d="M 300 240 L 380 215"/>
          <path d="M 300 270 L 380 215"/>
          <path d="M 300 310 L 380 305"/>
        </g>

        <!-- Colonne 5 : nerfs terminaux -->
        <text x="520" y="70" font-size="12.5" font-weight="600" fill="#8a94a8">NERFS TERMINAUX</text>
        <g fill="#fff1e8" stroke="#e0632f">
          <rect x="510" y="80" width="150" height="32" rx="8"/>
          <rect x="510" y="130" width="150" height="32" rx="8"/>
          <rect x="510" y="180" width="150" height="32" rx="8"/>
          <rect x="510" y="230" width="150" height="32" rx="8"/>
          <rect x="510" y="280" width="150" height="32" rx="8"/>
        </g>
        <g fill="#101828" font-weight="600">
          <text x="524" y="100">Musculocutané</text>
          <text x="524" y="150">Axillaire (circonflexe)</text>
          <text x="524" y="200">Radial</text>
          <text x="524" y="250">Médian</text>
          <text x="524" y="300">Ulnaire (cubital)</text>
        </g>
        <circle cx="690" cy="200" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="685" y="205" font-size="12" font-weight="700" fill="#e0632f">12</text>

        <g stroke="#98a2b3" stroke-width="1.4" fill="none">
          <path d="M 470 105 L 510 96"/>
          <path d="M 470 105 L 510 196"/>
          <path d="M 470 215 L 510 146"/>
          <path d="M 470 215 L 510 246"/>
          <path d="M 470 305 L 510 296"/>
        </g>

        <g font-size="11.5" fill="#475467">
          <text x="524" y="115">flexion du coude, sensibilité</text>
          <text x="524" y="165">deltoïde, sensibilité du moignon</text>
          <text x="524" y="215">extension du coude, du poignet</text>
          <text x="524" y="265">flexion du poignet, main « de singe »</text>
          <text x="524" y="315">muscles intrinsèques, main « en griffe »</text>
        </g>
      </g>

      <g transform="translate(40,470)" font-size="12.5" fill="#475467">
        <text x="0" y="0" font-size="14" font-weight="600" fill="#101828">Mnémotechnique de la structure</text>
        <text x="0" y="24">« Robert Taylor Drinks Cold Beer » : Racines, Troncs, Divisions, Cordes (faisceaux), Branches (nerfs terminaux).</text>
        <text x="0" y="48">Les racines C5-C6 forment le tronc supérieur, C7 seule forme le tronc moyen, C8-T1 forment le tronc inférieur.</text>
        <text x="0" y="72">Chaque tronc se divise en une division antérieure et une division postérieure avant de former les trois faisceaux.</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Racine C5 : issue du 5ᵉ nerf spinal cervical.' },
    { ref: '2', texte: 'Racine C6.' },
    { ref: '3', texte: 'Racine C7.' },
    { ref: '4', texte: 'Racine C8.' },
    { ref: '5', texte: 'Racine T1 : issue du 1er nerf spinal thoracique.' },
    { ref: '6', texte: 'Tronc primaire supérieur : union de C5 et C6.' },
    { ref: '7', texte: 'Tronc primaire moyen : prolongement direct de C7.' },
    { ref: '8', texte: 'Tronc primaire inférieur : union de C8 et T1.' },
    { ref: '9', texte: 'Faisceau (corde) latéral : formé par les divisions antérieures des troncs supérieur et moyen.' },
    { ref: '10', texte: 'Faisceau (corde) postérieur : formé par les trois divisions postérieures.' },
    { ref: '11', texte: 'Faisceau (corde) médial : prolongement de la division antérieure du tronc inférieur.' },
    { ref: '12', texte: 'Cinq nerfs terminaux : musculocutané, axillaire, radial, médian et ulnaire, avec leurs territoires moteurs et sensitifs principaux.' },
  ],
};
