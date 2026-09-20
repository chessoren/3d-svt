import type { Schema } from '../../types';

export const schemaTransportsMembranaires: Schema = {
  id: 'biocell-transports-membranaires',
  ue: 'biocell',
  titre: 'Les modes de transport membranaire',
  description:
    'Comparaison de la diffusion simple, de la diffusion facilitée (canal et transporteur), du transport actif primaire (pompe Na⁺/K⁺-ATPase) et du transport actif secondaire.',
  categorie: 'Biologie cellulaire générale',
  viewBox: '0 0 920 700',
  ficheLiee: 'biocell-transports-membranaires',
  motsCles: ['transport membranaire', 'diffusion simple', 'diffusion facilitée', 'transport actif', 'pompe Na/K-ATPase', 'gradient électrochimique'],
  svg: `
    <rect x="0" y="0" width="920" height="700" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="36" font-size="19" font-weight="600" fill="#101828">Les grands modes de transport à travers la membrane</text>
      <line x1="40" y1="48" x2="200" y2="48" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Cadre 1 : diffusion simple -->
      <g transform="translate(40,70)">
        <rect x="0" y="0" width="200" height="200" rx="14" fill="#fafbff" stroke="#e4e9f5"/>
        <text x="14" y="26" font-size="13.5" font-weight="600" fill="#101828">Diffusion simple</text>
        <rect x="14" y="70" width="172" height="40" fill="#eaf2ff"/>
        <line x1="14" y1="70" x2="186" y2="70" stroke="#98a2b3" stroke-width="2"/>
        <line x1="14" y1="110" x2="186" y2="110" stroke="#98a2b3" stroke-width="2"/>
        <text x="20" y="62" font-size="11" fill="#475467">extracellulaire</text>
        <text x="20" y="132" font-size="11" fill="#475467">cytosol</text>
        <circle cx="60" cy="50" r="5" fill="#e0632f"/>
        <circle cx="90" cy="48" r="5" fill="#e0632f"/>
        <circle cx="120" cy="52" r="5" fill="#e0632f"/>
        <circle cx="80" cy="140" r="5" fill="#e0632f"/>
        <circle cx="110" cy="150" r="5" fill="#e0632f"/>
        <line x1="90" y1="70" x2="90" y2="110" stroke="#e0632f" stroke-width="1.4" stroke-dasharray="3 3" marker-end="url(#biocell-transports-membranaires-fl1)"/>
        <text x="14" y="168" font-size="11.5" fill="#475467">O₂, CO₂, hormones</text>
        <text x="14" y="184" font-size="11.5" fill="#475467">stéroïdes, lipides</text>
        <circle cx="176" cy="18" r="12" fill="#e0632f" opacity="0.2"/>
        <text x="172" y="23" font-size="11" font-weight="700" fill="#e0632f">1</text>
      </g>

      <!-- Cadre 2 : diffusion facilitée par canal -->
      <g transform="translate(260,70)">
        <rect x="0" y="0" width="200" height="200" rx="14" fill="#fafbff" stroke="#e4e9f5"/>
        <text x="14" y="26" font-size="13.5" font-weight="600" fill="#101828">Diffusion facilitée</text>
        <text x="14" y="42" font-size="12" fill="#475467">(canal protéique)</text>
        <rect x="14" y="70" width="172" height="40" fill="#eaf2ff"/>
        <line x1="14" y1="70" x2="186" y2="70" stroke="#98a2b3" stroke-width="2"/>
        <line x1="14" y1="110" x2="186" y2="110" stroke="#98a2b3" stroke-width="2"/>
        <rect x="88" y="68" width="16" height="44" rx="7" fill="#175cd3"/>
        <circle cx="96" cy="55" r="5" fill="#175cd3"/>
        <circle cx="96" cy="130" r="5" fill="#175cd3"/>
        <line x1="96" y1="70" x2="96" y2="108" stroke="#175cd3" stroke-width="1.4" stroke-dasharray="3 3" marker-end="url(#biocell-transports-membranaires-fl2)"/>
        <text x="14" y="168" font-size="11.5" fill="#475467">Ions (Na⁺, K⁺, Cl⁻)</text>
        <text x="14" y="184" font-size="11.5" fill="#475467">selon leur gradient</text>
        <circle cx="176" cy="18" r="12" fill="#175cd3" opacity="0.2"/>
        <text x="172" y="23" font-size="11" font-weight="700" fill="#175cd3">2</text>
      </g>

      <!-- Cadre 3 : diffusion facilitée par transporteur -->
      <g transform="translate(480,70)">
        <rect x="0" y="0" width="200" height="200" rx="14" fill="#fafbff" stroke="#e4e9f5"/>
        <text x="14" y="26" font-size="13.5" font-weight="600" fill="#101828">Diffusion facilitée</text>
        <text x="14" y="42" font-size="12" fill="#475467">(transporteur, uniport)</text>
        <rect x="14" y="70" width="172" height="40" fill="#eaf2ff"/>
        <line x1="14" y1="70" x2="186" y2="70" stroke="#98a2b3" stroke-width="2"/>
        <line x1="14" y1="110" x2="186" y2="110" stroke="#98a2b3" stroke-width="2"/>
        <path d="M 84 68 q -14 20 0 44 l 28 0 q 14 -24 0 -44 z" fill="#12a065" opacity="0.85"/>
        <circle cx="96" cy="58" r="5" fill="#12a065"/>
        <circle cx="96" cy="126" r="5" fill="#12a065"/>
        <text x="14" y="168" font-size="11.5" fill="#475467">Glucose (GLUT), a.a.</text>
        <text x="14" y="184" font-size="11.5" fill="#475467">changement de forme</text>
        <circle cx="176" cy="18" r="12" fill="#12a065" opacity="0.2"/>
        <text x="172" y="23" font-size="11" font-weight="700" fill="#12a065">3</text>
      </g>

      <!-- Cadre 4 : transport actif primaire -->
      <g transform="translate(700,70)">
        <rect x="0" y="0" width="180" height="200" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="14" y="26" font-size="13.5" font-weight="600" fill="#101828">Transport actif</text>
        <text x="14" y="42" font-size="12" fill="#475467">primaire</text>
        <rect x="14" y="70" width="152" height="40" fill="#fdece0"/>
        <line x1="14" y1="70" x2="166" y2="70" stroke="#98a2b3" stroke-width="2"/>
        <line x1="14" y1="110" x2="166" y2="110" stroke="#98a2b3" stroke-width="2"/>
        <rect x="76" y="68" width="18" height="44" rx="8" fill="#e0632f"/>
        <text x="26" y="140" font-size="11.5" font-weight="600" fill="#e0632f">ATP → ADP + Pi</text>
        <text x="14" y="168" font-size="11.5" fill="#475467">Pompe Na⁺/K⁺-ATPase</text>
        <circle cx="156" cy="18" r="12" fill="#e0632f" opacity="0.2"/>
        <text x="152" y="23" font-size="11" font-weight="700" fill="#e0632f">4</text>
      </g>

      <!-- Détail de la pompe Na/K-ATPase -->
      <g transform="translate(60,320)">
        <text x="0" y="0" font-size="15" font-weight="600" fill="#101828">Détail : la pompe Na⁺/K⁺-ATPase (transport actif primaire)</text>
        <rect x="0" y="20" width="760" height="150" rx="14" fill="#fafbff" stroke="#e4e9f5"/>
        <line x1="20" y1="70" x2="740" y2="70" stroke="#98a2b3" stroke-width="2"/>
        <line x1="20" y1="140" x2="740" y2="140" stroke="#98a2b3" stroke-width="2"/>
        <text x="30" y="60" font-size="11.5" fill="#475467">extracellulaire</text>
        <text x="30" y="162" font-size="11.5" fill="#475467">cytosol</text>

        <rect x="350" y="60" width="40" height="90" rx="14" fill="#e0632f"/>
        <text x="358" y="112" font-size="11" font-weight="700" fill="#ffffff">ATPase</text>

        <!-- 3 Na+ sortants -->
        <circle cx="330" cy="130" r="6" fill="#175cd3"/>
        <text x="326" y="134" font-size="9" fill="#ffffff">Na</text>
        <circle cx="300" cy="130" r="6" fill="#175cd3"/>
        <circle cx="270" cy="130" r="6" fill="#175cd3"/>
        <line x1="330" y1="115" x2="330" y2="70" stroke="#175cd3" stroke-width="1.6" marker-end="url(#biocell-transports-membranaires-fl3)"/>
        <text x="200" y="128" font-size="11.5" fill="#175cd3">3 Na⁺ expulsés</text>

        <!-- 2 K+ entrants -->
        <circle cx="440" cy="80" r="6" fill="#7c4df5"/>
        <circle cx="470" cy="80" r="6" fill="#7c4df5"/>
        <line x1="440" y1="90" x2="440" y2="135" stroke="#7c4df5" stroke-width="1.6" marker-end="url(#biocell-transports-membranaires-fl4)"/>
        <text x="500" y="90" font-size="11.5" fill="#7c4df5">2 K⁺ importés</text>

        <circle cx="620" cy="105" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="616" y="110" font-size="11" font-weight="700" fill="#e0632f">5</text>
        <text x="640" y="110" font-size="11.5" fill="#475467">une molécule d’ATP</text>
        <text x="640" y="126" font-size="11.5" fill="#475467">hydrolysée par cycle</text>
      </g>

      <!-- Transport actif secondaire -->
      <g transform="translate(60,510)">
        <text x="0" y="0" font-size="15" font-weight="600" fill="#101828">Transport actif secondaire (utilise un gradient déjà créé)</text>
        <rect x="0" y="20" width="760" height="130" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>
        <line x1="20" y1="60" x2="740" y2="60" stroke="#98a2b3" stroke-width="2"/>
        <line x1="20" y1="120" x2="740" y2="120" stroke="#98a2b3" stroke-width="2"/>
        <text x="30" y="52" font-size="11.5" fill="#475467">extracellulaire</text>
        <text x="30" y="140" font-size="11.5" fill="#475467">cytosol</text>

        <path d="M 200 58 q -18 30 0 62 l 40 0 q 18 -32 0 -62 z" fill="#f4c22b" opacity="0.9"/>
        <circle cx="215" cy="70" r="6" fill="#175cd3"/>
        <line x1="215" y1="76" x2="215" y2="110" stroke="#175cd3" stroke-width="1.6" marker-end="url(#biocell-transports-membranaires-fl5)"/>
        <text x="150" y="46" font-size="11.5" fill="#175cd3">Na⁺ (gradient favorable)</text>

        <circle cx="235" cy="105" r="6" fill="#12a065"/>
        <line x1="235" y1="70" x2="235" y2="100" stroke="#12a065" stroke-width="1.6" marker-end="url(#biocell-transports-membranaires-fl6)"/>
        <text x="240" y="46" font-size="11.5" fill="#12a065">glucose (co-transport)</text>

        <circle cx="280" cy="90" r="13" fill="#f4c22b" opacity="0.3"/>
        <text x="276" y="95" font-size="11" font-weight="700" fill="#8a6300">6</text>
        <text x="360" y="60" font-size="12" font-weight="600" fill="#101828">Symport Na⁺/glucose (SGLT)</text>
        <text x="360" y="80" font-size="11.5" fill="#475467">L’énergie du gradient de Na⁺, créé par</text>
        <text x="360" y="98" font-size="11.5" fill="#475467">la pompe Na⁺/K⁺, entraîne le glucose</text>
        <text x="360" y="116" font-size="11.5" fill="#475467">contre son propre gradient.</text>
      </g>

      <!-- Récapitulatif des sens de gradient -->
      <g transform="translate(60,660)">
        <circle cx="0" cy="-4" r="12" fill="#101828" opacity="0.12"/>
        <text x="-4" y="1" font-size="11" font-weight="700" fill="#101828">7</text>
        <text x="20" y="1" font-size="11.5" fill="#475467">Diffusion (1, 2, 3) : sens du gradient, sans dépense d’ATP directe</text>
        <circle cx="470" cy="-4" r="12" fill="#101828" opacity="0.12"/>
        <text x="466" y="1" font-size="11" font-weight="700" fill="#101828">8</text>
        <text x="490" y="1" font-size="11.5" fill="#475467">Transport actif (4, 6) : contre le gradient, énergie requise</text>
      </g>

      <defs>
        <marker id="biocell-transports-membranaires-fl1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#e0632f"/>
        </marker>
        <marker id="biocell-transports-membranaires-fl2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#175cd3"/>
        </marker>
        <marker id="biocell-transports-membranaires-fl3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#175cd3"/>
        </marker>
        <marker id="biocell-transports-membranaires-fl4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#7c4df5"/>
        </marker>
        <marker id="biocell-transports-membranaires-fl5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#175cd3"/>
        </marker>
        <marker id="biocell-transports-membranaires-fl6" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#12a065"/>
        </marker>
      </defs>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Diffusion simple : molécules liposolubles ou petites molécules non chargées, traversent directement la bicouche.' },
    { ref: '2', texte: 'Diffusion facilitée par canal : protéine formant un pore, passage passif et sélectif des ions.' },
    { ref: '3', texte: 'Diffusion facilitée par transporteur : changement de conformation de la protéine, sans dépense d’ATP.' },
    { ref: '4', texte: 'Transport actif primaire : utilise directement l’hydrolyse de l’ATP pour transporter contre un gradient.' },
    { ref: '5', texte: 'La pompe Na⁺/K⁺-ATPase hydrolyse une molécule d’ATP par cycle de transport.' },
    { ref: '6', texte: 'Transport actif secondaire (symport) : couple le transport d’une molécule contre son gradient à la descente du gradient d’un ion.' },
    { ref: '7', texte: 'Les transports passifs se font toujours dans le sens du gradient électrochimique.' },
    { ref: '8', texte: 'Les transports actifs se font contre le gradient et nécessitent de l’énergie, directe ou indirecte.' },
  ],
};
