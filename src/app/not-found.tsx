import Link from 'next/link';
import { IconeFiche, IconeFleche, IconeRecherche } from '@/components/ui/Icones';

export default function PageIntrouvable() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 py-16 text-center">
      <span
        className="flex h-16 w-16 items-center justify-center rounded-3xl text-[22px] font-semibold"
        style={{ background: 'var(--accent-doux)', color: 'var(--accent)' }}
      >
        404
      </span>
      <div>
        <h1 className="text-[26px] font-semibold tracking-tight">Cette page n’existe pas</h1>
        <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed" style={{ color: 'var(--texte-2)' }}>
          Le lien est peut-être incorrect, ou la fiche a été renommée. Utilisez le sommaire ou la
          recherche pour retrouver ce que vous cherchiez.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <Link href="/fiches" className="bouton bouton-primaire">
          <IconeFiche width={16} height={16} />
          Sommaire des fiches
        </Link>
        <Link href="/recherche" className="bouton bouton-secondaire">
          <IconeRecherche width={16} height={16} />
          Rechercher
        </Link>
        <Link href="/" className="bouton bouton-fantome">
          Accueil
          <IconeFleche width={15} height={15} />
        </Link>
      </div>
    </div>
  );
}
