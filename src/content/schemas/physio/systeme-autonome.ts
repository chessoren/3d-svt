import type { Schema } from '../../types';

export const schemaSystemeAutonome: Schema = {
  id: 'physio-systeme-autonome',
  ue: 'physio',
  titre: 'Systèmes sympathique et parasympathique',
  description:
    'Comparaison des systèmes sympathique et parasympathique : origines médullaires, relais ganglionnaires, neurotransmetteurs, récepteurs, et effets sur les principaux organes.',
  categorie: 'Physiologie du système nerveux autonome',
  viewBox: '0 0 920 860',
  ficheLiee: 'physio-neurophysiologie',
  motsCles: ['système nerveux autonome', 'sympathique', 'parasympathique', 'noradrénaline', 'acétylcholine', 'récepteurs adrénergiques', 'récepteurs muscariniques'],
  svg: `
    <rect x="0" y="0" width="920" height="860" rx="18" fill="#ffffff"/>
    <g font-family="Inter, system-ui, sans-serif">

      <text x="40" y="40" font-size="19" font-weight="600" fill="#101828">1 · Voies efférentes et neurotransmetteurs</text>
      <line x1="40" y1="52" x2="180" y2="52" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(0,70)">
        <!-- colonne sympathique -->
        <text x="150" y="0" font-size="15" font-weight="700" fill="#e0632f" text-anchor="middle">SYMPATHIQUE</text>

        <rect x="70" y="16" width="170" height="60" rx="12" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="155" y="40" font-size="12" fill="#101828" text-anchor="middle">Moelle épinière</text>
        <text x="155" y="58" font-size="12" fill="#101828" text-anchor="middle">thoraco-lombaire (T1-L2)</text>
        <circle cx="228" cy="26" r="12" fill="#e0632f" opacity="0.2"/>
        <text x="224" y="30" font-size="11" font-weight="700" fill="#e0632f">1</text>

        <line x1="180" y1="76" x2="230" y2="128" stroke="#e0632f" stroke-width="2.4"/>
        <circle cx="175" cy="108" r="12" fill="#e0632f" opacity="0.2"/>
        <text x="171" y="112" font-size="11" font-weight="700" fill="#e0632f">3</text>
        <text x="188" y="100" font-size="10.5" fill="#e0632f">ACh (nicotinique)</text>

        <circle cx="230" cy="150" r="24" fill="#fdeee8" stroke="#e0632f" stroke-width="1.8"/>
        <text x="230" y="147" font-size="10" fill="#101828" text-anchor="middle">ganglion</text>
        <text x="230" y="159" font-size="9.5" fill="#101828" text-anchor="middle">paravertébral</text>
        <circle cx="258" cy="138" r="12" fill="#e0632f" opacity="0.2"/>
        <text x="254" y="142" font-size="11" font-weight="700" fill="#e0632f">2</text>

        <line x1="230" y1="174" x2="205" y2="380" stroke="#e0632f" stroke-width="2.4" stroke-dasharray="7 5"/>
        <circle cx="252" cy="270" r="12" fill="#e0632f" opacity="0.2"/>
        <text x="248" y="274" font-size="11" font-weight="700" fill="#e0632f">4</text>
        <text x="264" y="260" font-size="10.5" fill="#e0632f">NA (adrénergique α, β)</text>
        <text x="264" y="276" font-size="9.5" fill="#98a2b3">(exception : glandes sudoripares, ACh)</text>

        <rect x="140" y="386" width="130" height="34" rx="10" fill="#fff6f1" stroke="#f3d3c2"/>
        <text x="205" y="407" font-size="11" fill="#101828" text-anchor="middle">organes effecteurs</text>

        <text x="200" y="18" font-size="10.5" fill="#98a2b3">préganglionnaire courte</text>
        <text x="200" y="352" font-size="10.5" fill="#98a2b3">postganglionnaire longue</text>

        <!-- colonne parasympathique -->
        <text x="740" y="0" font-size="15" font-weight="700" fill="#7c4df5" text-anchor="middle">PARASYMPATHIQUE</text>

        <rect x="630" y="6" width="220" height="80" rx="12" fill="#f6f0ff" stroke="#e0d4fb"/>
        <text x="740" y="30" font-size="12" fill="#101828" text-anchor="middle">Tronc cérébral</text>
        <text x="740" y="48" font-size="12" fill="#101828" text-anchor="middle">(nerfs III, VII, IX, X)</text>
        <text x="740" y="66" font-size="12" fill="#101828" text-anchor="middle">et moelle sacrée (S2-S4)</text>
        <circle cx="838" cy="18" r="12" fill="#7c4df5" opacity="0.22"/>
        <text x="834" y="22" font-size="11" font-weight="700" fill="#7c4df5">5</text>

        <line x1="740" y1="86" x2="740" y2="310" stroke="#7c4df5" stroke-width="2.4"/>
        <circle cx="770" cy="200" r="12" fill="#7c4df5" opacity="0.22"/>
        <text x="765" y="204" font-size="11" font-weight="700" fill="#7c4df5">6</text>
        <text x="784" y="204" font-size="10.5" fill="#7c4df5">ACh (nicotinique)</text>

        <circle cx="740" cy="336" r="24" fill="#f6f0ff" stroke="#7c4df5" stroke-width="1.8"/>
        <text x="740" y="332" font-size="9.5" fill="#101828" text-anchor="middle">ganglion</text>
        <text x="740" y="343" font-size="9" fill="#101828" text-anchor="middle">terminal</text>
        <circle cx="774" cy="322" r="12" fill="#7c4df5" opacity="0.22"/>
        <text x="769" y="326" font-size="11" font-weight="700" fill="#7c4df5">7</text>

        <line x1="740" y1="360" x2="740" y2="386" stroke="#7c4df5" stroke-width="2.4"/>
        <circle cx="770" cy="374" r="12" fill="#7c4df5" opacity="0.22"/>
        <text x="765" y="378" font-size="11" font-weight="700" fill="#7c4df5">8</text>
        <text x="784" y="378" font-size="10.5" fill="#7c4df5">ACh (muscarinique)</text>

        <rect x="675" y="392" width="130" height="34" rx="10" fill="#f6f0ff" stroke="#e0d4fb"/>
        <text x="740" y="413" font-size="11" fill="#101828" text-anchor="middle">organes effecteurs</text>

        <text x="784" y="104" font-size="10.5" fill="#98a2b3">préganglionnaire longue</text>
        <text x="784" y="360" font-size="10.5" fill="#98a2b3">postganglionnaire courte</text>

        <line x1="460" y1="0" x2="460" y2="430" stroke="#eef1f6" stroke-width="1.4"/>
      </g>

      <text x="40" y="536" font-size="19" font-weight="600" fill="#101828">2 · Effets sur les principaux organes</text>
      <line x1="40" y1="548" x2="180" y2="548" stroke="#e0632f" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(40,566)" font-size="12" fill="#101828">
        <text x="150" y="0" font-size="11.5" font-weight="600" fill="#101828">Organe</text>
        <text x="290" y="0" font-size="11.5" font-weight="600" fill="#e0632f">Sympathique</text>
        <text x="600" y="0" font-size="11.5" font-weight="600" fill="#7c4df5">Parasympathique</text>
        <line x1="0" y1="10" x2="840" y2="10" stroke="#e4e9f5"/>

        <circle cx="14" cy="38" r="12" fill="#98a2b3" opacity="0.2"/>
        <text x="10" y="42" font-size="11" font-weight="700" fill="#475467">9</text>
        <text x="150" y="42" font-weight="600">Cœur</text>
        <text x="290" y="42" fill="#e0632f">↑ fréquence et contractilité (récepteurs β1)</text>
        <text x="600" y="42" fill="#7c4df5">↓ fréquence (récepteurs M2, nerf vague)</text>
        <line x1="0" y1="58" x2="840" y2="58" stroke="#f2f4f7"/>

        <circle cx="14" cy="86" r="12" fill="#98a2b3" opacity="0.2"/>
        <text x="9" y="90" font-size="11" font-weight="700" fill="#475467">10</text>
        <text x="150" y="90" font-weight="600">Bronches</text>
        <text x="290" y="90" fill="#e0632f">Bronchodilatation (récepteurs β2)</text>
        <text x="600" y="90" fill="#7c4df5">Bronchoconstriction et sécrétion (muscarinique)</text>
        <line x1="0" y1="106" x2="840" y2="106" stroke="#f2f4f7"/>

        <circle cx="14" cy="134" r="12" fill="#98a2b3" opacity="0.2"/>
        <text x="9" y="138" font-size="11" font-weight="700" fill="#475467">11</text>
        <text x="150" y="138" font-weight="600">Pupille</text>
        <text x="290" y="138" fill="#e0632f">Mydriase (dilatation)</text>
        <text x="600" y="138" fill="#7c4df5">Myosis (contraction)</text>
        <line x1="0" y1="154" x2="840" y2="154" stroke="#f2f4f7"/>

        <circle cx="14" cy="182" r="12" fill="#98a2b3" opacity="0.2"/>
        <text x="9" y="186" font-size="11" font-weight="700" fill="#475467">12</text>
        <text x="150" y="182" font-weight="600">Tube digestif</text>
        <text x="150" y="198" font-weight="600">et vessie</text>
        <text x="290" y="182" fill="#e0632f">↓ motilité digestive ;</text>
        <text x="290" y="198" fill="#e0632f">contraction du sphincter vésical (continence)</text>
        <text x="600" y="182" fill="#7c4df5">↑ motilité digestive ;</text>
        <text x="600" y="198" fill="#7c4df5">contraction du détrusor (miction)</text>
      </g>

      <text x="40" y="810" font-size="12" fill="#8a94a8">Neurotransmetteur préganglionnaire commun aux deux systèmes : acétylcholine sur récepteurs nicotiniques.</text>
      <text x="40" y="828" font-size="12" fill="#8a94a8">Neurotransmetteur postganglionnaire : noradrénaline (sympathique) ou acétylcholine muscarinique (parasympathique).</text>
    </g>
  `,
  legendes: [
    { ref: '1', texte: 'Origine sympathique : corne latérale de la moelle épinière thoraco-lombaire, de T1 à L2.' },
    { ref: '2', texte: 'Ganglion paravertébral : relais proche de la moelle, forme la chaîne sympathique latéro-vertébrale.' },
    { ref: '3', texte: 'Synapse préganglionnaire sympathique : acétylcholine sur récepteurs nicotiniques.' },
    { ref: '4', texte: 'Synapse postganglionnaire sympathique : noradrénaline sur récepteurs adrénergiques α et β (sauf glandes sudoripares, acétylcholine).' },
    { ref: '5', texte: 'Origine parasympathique : noyaux du tronc cérébral (nerfs crâniens III, VII, IX et X) et moelle sacrée S2 à S4.' },
    { ref: '6', texte: 'Synapse préganglionnaire parasympathique : acétylcholine sur récepteurs nicotiniques, fibre préganglionnaire longue.' },
    { ref: '7', texte: 'Ganglion terminal : relais situé à proximité ou dans la paroi de l’organe cible.' },
    { ref: '8', texte: 'Synapse postganglionnaire parasympathique : acétylcholine sur récepteurs muscariniques, fibre postganglionnaire courte.' },
    { ref: '9', texte: 'Cœur : le sympathique augmente la fréquence et la contractilité (β1) ; le parasympathique les diminue (M2, nerf vague).' },
    { ref: '10', texte: 'Bronches : le sympathique entraîne une bronchodilatation (β2) ; le parasympathique une bronchoconstriction et une sécrétion accrue.' },
    { ref: '11', texte: 'Pupille : le sympathique entraîne une mydriase ; le parasympathique un myosis.' },
    { ref: '12', texte: 'Tube digestif et vessie : le sympathique freine la motilité digestive et favorise la continence ; le parasympathique stimule la motilité et la miction.' },
  ],
};
