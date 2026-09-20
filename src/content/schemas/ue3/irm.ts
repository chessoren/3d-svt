import type { Schema } from '../../types';

export const schemaIrm: Schema = {
  id: 'ue3-irm',
  ue: 'ue3',
  titre: 'Principe de l’imagerie par résonance magnétique',
  description:
    'Alignement des spins dans le champ magnétique principal, bascule par impulsion de radiofréquence, relaxations longitudinale T1 et transversale T2 avec leurs courbes, et contraste des tissus selon la pondération choisie.',
  categorie: 'Imagerie médicale',
  viewBox: '0 0 920 700',
  ficheLiee: 'ue3-irm-echographie-scintigraphie',
  motsCles: ['IRM', 'résonance magnétique', 'relaxation T1', 'relaxation T2', 'radiofréquence', 'pondération'],
  svg: `
    <rect x="0" y="0" width="920" height="700" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="32" font-size="19" font-weight="600" fill="#101828">Principe de l’imagerie par résonance magnétique</text>
      <line x1="40" y1="44" x2="180" y2="44" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <!-- Panneau A : alignement dans B0 -->
      <g transform="translate(40,64)">
        <rect x="0" y="0" width="400" height="200" rx="14" fill="#f2f6ff" stroke="#c9d6ff"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">1 · Alignement dans le champ B0</text>

        <defs>
          <marker id="ue3-irm-fl-b0" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#101828"/>
          </marker>
          <marker id="ue3-irm-fl-up" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#175cd3"/>
          </marker>
          <marker id="ue3-irm-fl-dn" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#98a2b3"/>
          </marker>
        </defs>

        <line x1="30" y1="180" x2="30" y2="40" stroke="#101828" stroke-width="3" marker-end="url(#ue3-irm-fl-b0)"/>
        <text x="8" y="34" font-size="13" font-weight="600" fill="#101828">B0</text>

        <g stroke="#175cd3" stroke-width="2">
          <line x1="90" y1="150" x2="90" y2="110" marker-end="url(#ue3-irm-fl-up)"/>
          <line x1="120" y1="150" x2="120" y2="110" marker-end="url(#ue3-irm-fl-up)"/>
          <line x1="150" y1="150" x2="150" y2="110" marker-end="url(#ue3-irm-fl-up)"/>
          <line x1="180" y1="150" x2="180" y2="110" marker-end="url(#ue3-irm-fl-up)"/>
          <line x1="210" y1="150" x2="210" y2="110" marker-end="url(#ue3-irm-fl-up)"/>
        </g>
        <g stroke="#98a2b3" stroke-width="2">
          <line x1="105" y1="110" x2="105" y2="150" marker-end="url(#ue3-irm-fl-dn)"/>
          <line x1="165" y1="110" x2="165" y2="150" marker-end="url(#ue3-irm-fl-dn)"/>
        </g>
        <circle cx="150" cy="82" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="145" y="87" font-size="12" font-weight="700" fill="#175cd3">1</text>
        <text x="80" y="176" font-size="11" fill="#475467">spins d’hydrogène (protons)</text>

        <line x1="300" y1="180" x2="300" y2="70" stroke="#d4380d" stroke-width="4" marker-end="url(#ue3-irm-fl-b0)"/>
        <text x="308" y="80" font-size="13" font-weight="600" fill="#d4380d">M0</text>
        <text x="250" y="192" font-size="11" fill="#475467">aimantation nette longitudinale</text>
      </g>

      <!-- Panneau B : impulsion RF -->
      <g transform="translate(480,64)">
        <rect x="0" y="0" width="400" height="200" rx="14" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">2 · Impulsion de radiofréquence (90°)</text>

        <g transform="translate(150,120)">
          <ellipse cx="0" cy="0" rx="90" ry="34" fill="none" stroke="#c9d6ff" stroke-width="2"/>
          <line x1="0" y1="60" x2="0" y2="-70" stroke="#101828" stroke-width="2" marker-end="url(#ue3-irm-fl-b0)"/>
          <text x="6" y="-58" font-size="11" fill="#475467">z (B0)</text>

          <path d="M 0 -10 C 40 -30 70 -10 84 8" fill="none" stroke="#e0632f" stroke-width="2.4" marker-end="url(#ue3-irm-fl-b0)"/>
          <circle cx="40" cy="-24" r="13" fill="#e0632f" opacity="0.22"/>
          <text x="35" y="-19" font-size="12" font-weight="700" fill="#e0632f">2</text>
          <text x="10" y="-42" font-size="11" fill="#e0632f">onde RF à la fréquence de Larmor</text>

          <line x1="0" y1="0" x2="84" y2="8" stroke="#7c4df5" stroke-width="3" marker-end="url(#ue3-irm-fl-b0)"/>
          <path d="M 60 22 A 30 12 0 0 1 84 8" fill="none" stroke="#7c4df5" stroke-width="1.6" stroke-dasharray="2 3" marker-end="url(#ue3-irm-fl-b0)"/>
          <circle cx="95" cy="20" r="13" fill="#7c4df5" opacity="0.22"/>
          <text x="90" y="25" font-size="12" font-weight="700" fill="#7c4df5">3</text>
          <text x="-58" y="30" font-size="11" fill="#7c4df5">Mxy précessant dans le plan transversal</text>
        </g>
        <text x="16" y="184" font-size="10.5" fill="#8a94a8">La précession de Mxy à la fréquence de Larmor induit le signal recueilli par l’antenne.</text>
      </g>

      <!-- Panneau C : relaxation T1 -->
      <g transform="translate(40,290)">
        <rect x="0" y="0" width="400" height="220" rx="14" fill="#eefaf3" stroke="#bfe8cf"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">4 · Relaxation longitudinale T1</text>
        <circle cx="368" cy="20" r="13" fill="#12a065" opacity="0.2"/>
        <text x="363" y="25" font-size="12" font-weight="700" fill="#12a065">4</text>

        <g transform="translate(66,50)">
          <line x1="0" y1="0" x2="0" y2="110" stroke="#475467" stroke-width="1.6"/>
          <line x1="0" y1="100" x2="270" y2="100" stroke="#475467" stroke-width="1.6"/>
          <text x="-30" y="8" font-size="11.5" fill="#475467">Mz</text>
          <text x="256" y="118" font-size="11.5" fill="#475467">t</text>
          <text x="-30" y="104" font-size="10.5" fill="#8a94a8">0</text>
          <line x1="-6" y1="0" x2="0" y2="0" stroke="#475467" stroke-width="1.6"/>
          <text x="-30" y="4" font-size="10.5" fill="#8a94a8">M0</text>

          <line x1="0" y1="37" x2="52" y2="37" stroke="#12a065" stroke-width="1.3" stroke-dasharray="3 3"/>
          <line x1="52" y1="37" x2="52" y2="100" stroke="#12a065" stroke-width="1.3" stroke-dasharray="3 3"/>
          <text x="-30" y="41" font-size="10" fill="#0f8a58">0,63 M0</text>
          <text x="40" y="114" font-size="10.5" fill="#0f8a58">T1</text>
          <circle cx="52" cy="37" r="12" fill="#0f8a58" opacity="0.24"/>
          <text x="48" y="41.5" font-size="11" font-weight="700" fill="#0f8a58">5</text>

          <text x="98" y="114" font-size="9.5" fill="#8a94a8">2T1</text>
          <text x="150" y="114" font-size="9.5" fill="#8a94a8">3T1</text>
          <text x="202" y="114" font-size="9.5" fill="#8a94a8">4T1</text>
          <text x="252" y="114" font-size="9.5" fill="#8a94a8">5T1</text>

          <path d="M 0.0 100.0 L 10.8 81.2 L 21.7 65.9 L 32.5 53.5 L 43.3 43.5 L 54.2 35.3 L 65.0 28.7 L 75.8 23.3 L 86.7 18.9 L 97.5 15.3 L 108.3 12.5 L 119.2 10.1 L 130.0 8.2 L 140.8 6.7 L 151.7 5.4 L 162.5 4.4 L 173.3 3.6 L 184.2 2.9 L 195.0 2.4 L 205.8 1.9 L 216.7 1.6 L 227.5 1.3 L 238.3 1.0 L 249.2 0.8 L 260.0 0.7"
                fill="none" stroke="#12a065" stroke-width="2.6"/>
        </g>
        <text x="16" y="200" font-size="10.5" fill="#475467">Mz(t) = M0 · (1 − e^(−t/T1)) — recroissance de l’aimantation longitudinale</text>
      </g>

      <!-- Panneau D : relaxation T2 -->
      <g transform="translate(480,290)">
        <rect x="0" y="0" width="400" height="220" rx="14" fill="#f2f0ff" stroke="#dcd6fb"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">6 · Relaxation transversale T2</text>
        <circle cx="368" cy="20" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="363" y="25" font-size="12" font-weight="700" fill="#7c4df5">6</text>

        <g transform="translate(66,50)">
          <line x1="0" y1="0" x2="0" y2="110" stroke="#475467" stroke-width="1.6"/>
          <line x1="0" y1="100" x2="270" y2="100" stroke="#475467" stroke-width="1.6"/>
          <text x="-32" y="8" font-size="11.5" fill="#475467">Mxy</text>
          <text x="256" y="118" font-size="11.5" fill="#475467">t</text>
          <text x="-30" y="104" font-size="10.5" fill="#8a94a8">0</text>
          <text x="-30" y="4" font-size="10.5" fill="#8a94a8">M0</text>

          <line x1="0" y1="63" x2="52" y2="63" stroke="#7c4df5" stroke-width="1.3" stroke-dasharray="3 3"/>
          <line x1="52" y1="63" x2="52" y2="100" stroke="#7c4df5" stroke-width="1.3" stroke-dasharray="3 3"/>
          <text x="-30" y="67" font-size="10" fill="#5f3dc4">0,37 M0</text>
          <text x="40" y="114" font-size="10.5" fill="#5f3dc4">T2</text>
          <circle cx="52" cy="63" r="12" fill="#5f3dc4" opacity="0.22"/>
          <text x="48" y="67.5" font-size="11" font-weight="700" fill="#5f3dc4">7</text>

          <text x="98" y="114" font-size="9.5" fill="#8a94a8">2T2</text>
          <text x="150" y="114" font-size="9.5" fill="#8a94a8">3T2</text>
          <text x="202" y="114" font-size="9.5" fill="#8a94a8">4T2</text>
          <text x="252" y="114" font-size="9.5" fill="#8a94a8">5T2</text>

          <path d="M 0.0 0.0 L 10.8 18.8 L 21.7 34.1 L 32.5 46.5 L 43.3 56.5 L 54.2 64.7 L 65.0 71.3 L 75.8 76.7 L 86.7 81.1 L 97.5 84.7 L 108.3 87.5 L 119.2 89.9 L 130.0 91.8 L 140.8 93.3 L 151.7 94.6 L 162.5 95.6 L 173.3 96.4 L 184.2 97.1 L 195.0 97.6 L 205.8 98.1 L 216.7 98.4 L 227.5 98.7 L 238.3 99.0 L 249.2 99.2 L 260.0 99.3"
                fill="none" stroke="#7c4df5" stroke-width="2.6"/>
        </g>
        <text x="16" y="200" font-size="10.5" fill="#475467">Mxy(t) = M0 · e^(−t/T2) — décroissance de l’aimantation transversale (T2 &lt; T1)</text>
      </g>

      <!-- Panneau E : contraste selon la pondération -->
      <g transform="translate(40,530)">
        <rect x="0" y="0" width="840" height="140" rx="14" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="16" y="26" font-size="14.5" font-weight="600" fill="#101828">Contraste selon la pondération de la séquence</text>
        <circle cx="360" cy="20" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="355" y="25" font-size="12" font-weight="700" fill="#e0632f">8</text>
        <circle cx="500" cy="20" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="494" y="25" font-size="12" font-weight="700" fill="#175cd3">9</text>
        <circle cx="740" cy="20" r="13" fill="#12a065" opacity="0.2"/>
        <text x="734" y="25" font-size="12" font-weight="700" fill="#12a065">10</text>

        <line x1="16" y1="46" x2="824" y2="46" stroke="#e4e9f5" stroke-width="1.4"/>
        <text x="16" y="66" font-size="12.5" font-weight="600" fill="#101828">Tissu</text>
        <text x="340" y="66" font-size="12.5" font-weight="600" fill="#101828">Pondération T1</text>
        <text x="600" y="66" font-size="12.5" font-weight="600" fill="#101828">Pondération T2</text>
        <line x1="16" y1="78" x2="824" y2="78" stroke="#e4e9f5" stroke-width="1"/>

        <text x="16" y="102" font-size="12.5" fill="#475467">Eau, LCR</text>
        <rect x="330" y="88" width="18" height="18" rx="4" fill="#232a35"/>
        <text x="356" y="102" font-size="12" fill="#475467">hyposignal (noir)</text>
        <rect x="590" y="88" width="18" height="18" rx="4" fill="#eef2f6" stroke="#c9d0da"/>
        <text x="616" y="102" font-size="12" fill="#475467">hypersignal (blanc)</text>

        <text x="16" y="128" font-size="12.5" fill="#475467">Graisse</text>
        <rect x="330" y="114" width="18" height="18" rx="4" fill="#eef2f6" stroke="#c9d0da"/>
        <text x="356" y="128" font-size="12" fill="#475467">hypersignal (blanc)</text>
        <rect x="590" y="114" width="18" height="18" rx="4" fill="#b0bac8"/>
        <text x="616" y="128" font-size="12" fill="#475467">signal intermédiaire</text>
      </g>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Dans le champ B0, la majorité des spins s’alignent parallèlement à B0, créant une aimantation longitudinale nette M0.' },
    { ref: '2', texte: 'Impulsion de radiofréquence délivrée à la fréquence de Larmor : elle bascule M0 d’un angle choisi (90° ici) dans le plan transversal.' },
    { ref: '3', texte: 'L’aimantation transversale Mxy précesse à la fréquence de Larmor et induit le signal de résonance magnétique capté par l’antenne.' },
    { ref: '4', texte: 'Relaxation longitudinale (spin-réseau) : Mz recroît vers M0 après l’arrêt de l’impulsion, selon la constante de temps T1.' },
    { ref: '5', texte: 'T1 : temps nécessaire pour que Mz retrouve 63 % de sa valeur d’équilibre M0.' },
    { ref: '6', texte: 'Relaxation transversale (spin-spin) : Mxy décroît par déphasage progressif des spins, selon la constante de temps T2.' },
    { ref: '7', texte: 'T2 : temps nécessaire pour que Mxy ait perdu 63 % de sa valeur initiale (il n’en reste que 37 %).' },
    { ref: '8', texte: 'En pondération T1, les liquides (eau, LCR) apparaissent en hyposignal et la graisse en hypersignal.' },
    { ref: '9', texte: 'En pondération T2, les liquides apparaissent en hypersignal : c’est la séquence de référence pour repérer un œdème.' },
    { ref: '10', texte: 'Le choix du temps de répétition (TR) et du temps d’écho (TE) détermine la pondération T1 ou T2 de la séquence.' },
  ],
};
