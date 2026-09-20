import type { Metadata } from 'next';
import {
  COMPTEURS_PAR_UE,
  STATISTIQUES,
  UES,
  flashcardsDeUE,
  qcmDeUE,
  schemasDeUE,
} from '@/content';
import { EnTetePage, Statistique } from '@/components/ui/Primitives';
import { BoutonExportTout } from '@/components/export/BoutonsExport';
import { PanneauMatiere } from '@/components/export/PanneauMatiere';
import {
  IconeCartes,
  IconeFiche,
  IconeQCM,
  IconeSchema,
  IconeTelechargement,
} from '@/components/ui/Icones';

export const metadata: Metadata = {
  title: 'Téléchargements',
  description:
    'Exportez en PDF les fiches, les paquets de flashcards, les schémas et les QCM corrigés, matière par matière ou en un seul recueil.',
};

export default function PageTelechargements() {
  return (
    <div>
      <EnTetePage
        surTitre="Hors ligne"
        titre="Téléchargements"
        description="Tout le contenu du site s’exporte en PDF, mis en page pour l’impression. Les documents sont fabriqués dans votre navigateur : rien n’est envoyé sur un serveur, et l’export fonctionne même sans connexion une fois la page chargée."
      />

      <section
        className="carte relative overflow-hidden p-7"
        style={{
          background: 'linear-gradient(120deg, color-mix(in srgb, var(--accent) 11%, var(--surface)), var(--surface) 60%)',
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="capsule capsule-neutre mb-3">
              <IconeTelechargement width={14} height={14} />
              Document unique
            </span>
            <h2 className="text-[24px] leading-tight font-semibold tracking-tight">
              Le recueil complet, en un seul PDF
            </h2>
            <p className="mt-2.5 text-[14px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
              Les {STATISTIQUES.fiches} fiches des {UES.length} matières, avec leurs schémas, leurs points
              clés, leurs flashcards et leurs QCM corrigés, assemblés avec sommaire, en-têtes et
              pagination. La génération prend une à deux minutes selon votre appareil.
            </p>
          </div>
          <BoutonExportTout />
        </div>
      </section>

      <section className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Statistique valeur={STATISTIQUES.fiches} libelle="Fiches" icone={<IconeFiche width={18} height={18} />} accent="#2f80c4" />
        <Statistique valeur={STATISTIQUES.flashcards} libelle="Flashcards" icone={<IconeCartes width={18} height={18} />} accent="#7c4df5" />
        <Statistique valeur={STATISTIQUES.qcm} libelle="QCM" icone={<IconeQCM width={18} height={18} />} accent="#12a065" />
        <Statistique valeur={STATISTIQUES.schemas} libelle="Schémas" icone={<IconeSchema width={18} height={18} />} accent="#e0632f" />
      </section>

      <h2 className="mt-8 mb-3 text-[19px] font-semibold tracking-tight">Matière par matière</h2>
      <div className="flex flex-col gap-3">
        {UES.map((ue) => (
          <PanneauMatiere
            key={ue.id}
            ue={ue}
            nbFiches={COMPTEURS_PAR_UE[ue.id].fiches}
            cartes={flashcardsDeUE(ue.id)}
            questions={qcmDeUE(ue.id)}
            schemas={schemasDeUE(ue.id)}
          />
        ))}
      </div>

      <section className="mt-8 grid gap-3 sm:grid-cols-3">
        {[
          {
            titre: 'Fiches mises en page',
            texte:
              'Chaque PDF de fiche reprend les sections, les tableaux, les encadrés colorés, les points clés et les sources, avec en-tête courant et pagination.',
          },
          {
            titre: 'Flashcards à découper',
            texte:
              'Les paquets s’impriment en recto verso : huit cartes par page, questions et réponses alignées au dos l’une de l’autre, avec repères de découpe.',
          },
          {
            titre: 'Impression directe',
            texte:
              'Chaque page du site dispose aussi d’une feuille de style d’impression : le bouton « Imprimer » produit un rendu propre, sans navigation ni boutons.',
          },
        ].map((item) => (
          <div key={item.titre} className="carte p-5">
            <div className="text-[14px] font-semibold tracking-tight">{item.titre}</div>
            <p className="mt-2 text-[13px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
              {item.texte}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
