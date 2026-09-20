import type { Schema } from '../../types';

export const schemaGastrulation: Schema = {
  id: 'embryo-gastrulation',
  ue: 'embryo',
  titre: 'La gastrulation (3ᵉ semaine)',
  description:
    'Vue de dessus du disque embryonnaire avec ligne primitive et nœud de Hensen, coupe transversale montrant la migration cellulaire à travers la ligne primitive, et mise en place des trois feuillets embryonnaires avec leurs principaux dérivés.',
  categorie: 'Développement embryonnaire précoce',
  viewBox: '0 0 920 620',
  ficheLiee: 'embryo-gastrulation',
  motsCles: [
    'gastrulation',
    'ligne primitive',
    'nœud de Hensen',
    'épiblaste',
    'hypoblaste',
    'ectoderme',
    'mésoderme',
    'endoderme',
    'processus notochordal',
  ],
  svg: `
    <rect x="0" y="0" width="920" height="620" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="34" font-size="18.5" font-weight="600" fill="#101828">1 · Disque embryonnaire vu de dessus (≈ J16)</text>
      <line x1="40" y1="46" x2="200" y2="46" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(60,90)">
        <ellipse cx="150" cy="130" rx="130" ry="90" fill="#fdf3e7" stroke="#c9bfa1" stroke-width="2"/>
        <text x="150" y="16" font-size="11" fill="#475467" text-anchor="middle">crânial</text>
        <text x="150" y="240" font-size="11" fill="#475467" text-anchor="middle">caudal</text>
        <text x="8" y="134" font-size="10.5" fill="#8a94a8">D</text>
        <text x="286" y="134" font-size="10.5" fill="#8a94a8">G</text>

        <!-- Ligne primitive -->
        <path d="M150,205 Q142,175 150,150 Q158,175 150,205 Z" fill="#c9532f" stroke="#a83e13" stroke-width="1.4"/>
        <circle cx="180" cy="182" r="13" fill="#c9532f" opacity="0.2"/>
        <text x="176" y="187" font-size="11" font-weight="700" fill="#c9532f">1</text>

        <!-- Noeud de Hensen -->
        <circle cx="150" cy="150" r="11" fill="#e0632f" stroke="#a83e13" stroke-width="1.6"/>
        <circle cx="150" cy="150" r="3.4" fill="#ffffff"/>
        <circle cx="180" cy="150" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="176" y="155" font-size="11" font-weight="700" fill="#e0632f">2</text>
        <circle cx="120" cy="150" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="115" y="155" font-size="11" font-weight="700" fill="#7c4df5">3</text>

        <!-- Processus notochordal -->
        <line x1="150" y1="139" x2="150" y2="90" stroke="#175cd3" stroke-width="2.4" stroke-dasharray="5 4"/>
        <circle cx="176" cy="112" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="172" y="117" font-size="11" font-weight="700" fill="#175cd3">4</text>

        <!-- Membrane pharyngienne -->
        <ellipse cx="150" cy="72" rx="26" ry="12" fill="#cfe3ff" stroke="#175cd3" stroke-width="1.6"/>
        <circle cx="184" cy="66" r="13" fill="#12a065" opacity="0.2"/>
        <text x="179" y="71" font-size="11" font-weight="700" fill="#12a065">5</text>

        <!-- Membrane cloacale -->
        <ellipse cx="150" cy="209" rx="22" ry="10" fill="#e8ecff" stroke="#7c4df5" stroke-width="1.6"/>
        <circle cx="184" cy="215" r="13" fill="#c4930b" opacity="0.2"/>
        <text x="178" y="220" font-size="11" font-weight="700" fill="#c4930b">6</text>

        <!-- flèches de migration bilatérale -->
        <path d="M148,175 Q100,170 70,150" fill="none" stroke="#98a2b3" stroke-width="1.2" stroke-dasharray="3 3"/>
        <path d="M152,175 Q200,170 230,150" fill="none" stroke="#98a2b3" stroke-width="1.2" stroke-dasharray="3 3"/>
      </g>

      <!-- Panneau dérivés -->
      <g transform="translate(460,90)">
        <rect x="0" y="0" width="420" height="230" rx="12" fill="#f6f8fd" stroke="#e4e9f5"/>
        <text x="18" y="26" font-size="14" font-weight="600" fill="#101828">Devenir des trois feuillets</text>

        <text x="18" y="52" font-size="12" font-weight="600" fill="#175cd3">Ectoderme</text>
        <text x="18" y="70" font-size="10.5" fill="#475467">Épiderme et annexes, système nerveux</text>
        <text x="18" y="86" font-size="10.5" fill="#475467">(tube neural, crête neurale), rétine.</text>

        <text x="18" y="112" font-size="12" font-weight="600" fill="#7c4df5">Mésoderme</text>
        <text x="18" y="130" font-size="10.5" fill="#475467">Derme, squelette, muscles, appareil</text>
        <text x="18" y="146" font-size="10.5" fill="#475467">cardiovasculaire, appareil urogénital.</text>

        <text x="18" y="172" font-size="12" font-weight="600" fill="#e0632f">Endoderme</text>
        <text x="18" y="190" font-size="10.5" fill="#475467">Épithélium du tube digestif et de</text>
        <text x="18" y="206" font-size="10.5" fill="#475467">l’appareil respiratoire, foie, pancréas.</text>
      </g>

      <text x="40" y="360" font-size="18.5" font-weight="600" fill="#101828">2 · Coupe transversale au niveau de la ligne primitive</text>
      <line x1="40" y1="372" x2="200" y2="372" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(90,410)">
        <rect x="0" y="0" width="740" height="170" rx="10" fill="#fbfbfc" stroke="#e4e7ec"/>

        <!-- Epiblaste (avec gouttière de la ligne primitive) -->
        <path d="M20,40 L330,40 Q370,80 410,40 L720,40" fill="none" stroke="#175cd3" stroke-width="16" stroke-linecap="round"/>
        <circle cx="70" cy="24" r="13" fill="#175cd3" opacity="0.2"/>
        <text x="66" y="29" font-size="11" font-weight="700" fill="#175cd3">7</text>
        <text x="88" y="29" font-size="10.5" fill="#175cd3">épiblaste</text>
        <circle cx="660" cy="24" r="13" fill="#12a065" opacity="0.2"/>
        <text x="653" y="29" font-size="10" font-weight="700" fill="#12a065">11</text>
        <text x="600" y="29" font-size="10.5" fill="#12a065">ectoderme (futur)</text>

        <!-- Hypoblaste / endoderme définitif -->
        <path d="M20,140 L720,140" fill="none" stroke="#f6c4a4" stroke-width="14" stroke-linecap="round"/>
        <path d="M290,140 L470,140" fill="none" stroke="#e0632f" stroke-width="14" stroke-linecap="round"/>
        <circle cx="70" cy="158" r="13" fill="#c98a2f" opacity="0.22"/>
        <text x="66" y="163" font-size="11" font-weight="700" fill="#c98a2f">8</text>
        <text x="88" y="163" font-size="10.5" fill="#c98a2f">hypoblaste</text>
        <circle cx="470" cy="158" r="13" fill="#e0632f" opacity="0.2"/>
        <text x="463" y="163" font-size="10" font-weight="700" fill="#e0632f">12</text>
        <text x="486" y="163" font-size="10.5" fill="#e0632f">endoderme définitif</text>

        <!-- Migration / ingression -->
        <path d="M370,55 L370,100" stroke="#7c4df5" stroke-width="2.2" marker-end="url(#embryo-gastrulation-fleche-a)"/>
        <path d="M370,100 L260,120" stroke="#7c4df5" stroke-width="2.2" marker-end="url(#embryo-gastrulation-fleche-a)"/>
        <path d="M370,100 L480,120" stroke="#7c4df5" stroke-width="2.2" marker-end="url(#embryo-gastrulation-fleche-a)"/>
        <defs>
          <marker id="embryo-gastrulation-fleche-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="#7c4df5"/>
          </marker>
        </defs>
        <circle cx="392" cy="78" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="386" y="83" font-size="11" font-weight="700" fill="#7c4df5">9</text>

        <!-- Cellules mésoblastiques dispersées -->
        <circle cx="150" cy="80" r="4.5" fill="#7c4df5"/>
        <circle cx="185" cy="100" r="4.5" fill="#7c4df5"/>
        <circle cx="215" cy="75" r="4.5" fill="#7c4df5"/>
        <circle cx="120" cy="105" r="4.5" fill="#7c4df5"/>
        <circle cx="560" cy="80" r="4.5" fill="#7c4df5"/>
        <circle cx="595" cy="100" r="4.5" fill="#7c4df5"/>
        <circle cx="625" cy="75" r="4.5" fill="#7c4df5"/>
        <circle cx="530" cy="105" r="4.5" fill="#7c4df5"/>
        <circle cx="180" cy="92" r="13" fill="#7c4df5" opacity="0.2"/>
        <text x="176" y="97" font-size="11" font-weight="700" fill="#7c4df5">10</text>
        <text x="196" y="97" font-size="10.5" fill="#7c4df5">mésoderme intra-embryonnaire</text>
      </g>

      <text x="40" y="608" font-size="11.5" fill="#8a94a8">Les cellules épiblastiques ingressent par la ligne primitive, refoulent l’hypoblaste et forment les trois feuillets définitifs.</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Ligne primitive : épaississement médian caudal qui définit l’axe cranio-caudal et le plan de symétrie bilatérale.' },
    { ref: '2', texte: 'Nœud de Hensen (nœud primitif) : extrémité crâniale de la ligne primitive, centre organisateur de la gastrulation.' },
    { ref: '3', texte: 'Fossette primitive : dépression au centre du nœud de Hensen, par où passent les cellules formant le processus notochordal.' },
    { ref: '4', texte: 'Processus notochordal : cordon cellulaire médian émis par le nœud de Hensen vers la plaque préchordale, futur axe de la chorde dorsale.' },
    { ref: '5', texte: 'Membrane pharyngienne (bucco-pharyngienne) : limite crâniale du disque embryonnaire, future ouverture buccale.' },
    { ref: '6', texte: 'Membrane cloacale : limite caudale du disque embryonnaire.' },
    { ref: '7', texte: 'Épiblaste : feuillet dorsal du disque didermique, seule source des cellules qui migrent pour former les trois feuillets.' },
    { ref: '8', texte: 'Hypoblaste : feuillet ventral, progressivement repoussé et remplacé latéralement par l’endoderme définitif.' },
    { ref: '9', texte: 'Ingression cellulaire à travers la ligne primitive : invagination des cellules épiblastiques (gastrulation proprement dite).' },
    { ref: '10', texte: 'Mésoderme intra-embryonnaire : nouveau feuillet intermédiaire formé par les cellules qui migrent entre épiblaste et hypoblaste.' },
    { ref: '11', texte: 'Ectoderme : nom pris par l’épiblaste restant en surface une fois la migration achevée.' },
    { ref: '12', texte: 'Endoderme définitif : feuillet profond issu de l’épiblaste qui remplace l’hypoblaste au niveau de la ligne primitive.' },
  ],
};
