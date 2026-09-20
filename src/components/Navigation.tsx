'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  IconeAccueil,
  IconeCartes,
  IconeCorps,
  IconeCroix,
  IconeFiche,
  IconeMenu,
  IconeQCM,
  IconeRecherche,
  IconeSchema,
  IconeTelechargement,
} from './ui/Icones';
import { BoutonTheme } from './Theme';

const LIENS = [
  { href: '/', libelle: 'Accueil', Icone: IconeAccueil, exact: true },
  { href: '/fiches', libelle: 'Fiches', Icone: IconeFiche },
  { href: '/flashcards', libelle: 'Flashcards', Icone: IconeCartes },
  { href: '/schemas', libelle: 'Schémas', Icone: IconeSchema },
  { href: '/qcm', libelle: 'QCM', Icone: IconeQCM },
  { href: '/anatomie-3d', libelle: 'Anatomie 3D', Icone: IconeCorps },
  { href: '/recherche', libelle: 'Recherche', Icone: IconeRecherche },
  { href: '/telechargements', libelle: 'Téléchargements', Icone: IconeTelechargement },
];

function estActif(pathname: string, href: string, exact?: boolean) {
  if (exact) return pathname === href;
  return pathname === href || pathname.startsWith(href + '/');
}

export function Navigation() {
  const pathname = usePathname();
  const [ouvert, setOuvert] = useState(false);

  const liens = (
    <nav className="flex flex-col gap-1">
      {LIENS.map(({ href, libelle, Icone, exact }) => {
        const actif = estActif(pathname, href, exact);
        return (
          <Link
            key={href}
            href={href}
            onClick={() => setOuvert(false)}
            className="flex items-center gap-3 rounded-2xl px-3.5 py-2.5 text-sm font-medium transition-all"
            style={{
              background: actif ? 'var(--accent)' : 'transparent',
              color: actif ? 'var(--accent-contraste)' : 'var(--texte-2)',
              boxShadow: actif ? '0 6px 16px color-mix(in srgb, var(--accent) 26%, transparent)' : 'none',
            }}
          >
            <Icone width={19} height={19} />
            {libelle}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Barre supérieure mobile */}
      <header
        className="sans-impression sticky top-0 z-40 flex items-center justify-between px-4 py-3 lg:hidden"
        style={{ background: 'color-mix(in srgb, var(--page) 88%, transparent)', backdropFilter: 'blur(12px)' }}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-base font-semibold tracking-tight">MediCapsule</span>
        </Link>
        <div className="flex items-center gap-1">
          <BoutonTheme />
          <button
            type="button"
            onClick={() => setOuvert((o) => !o)}
            className="bouton bouton-fantome px-3 py-2"
            aria-label={ouvert ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={ouvert}
          >
            {ouvert ? <IconeCroix width={18} height={18} /> : <IconeMenu width={18} height={18} />}
          </button>
        </div>
      </header>

      {ouvert && (
        <div className="sans-impression fixed inset-0 z-30 lg:hidden" onClick={() => setOuvert(false)}>
          <div className="absolute inset-0" style={{ background: 'rgba(16,24,40,0.35)' }} />
          <div
            className="carte absolute top-16 right-3 left-3 p-3 apparition"
            onClick={(e) => e.stopPropagation()}
          >
            {liens}
          </div>
        </div>
      )}

      {/* Barre latérale sur grand écran */}
      <aside className="sans-impression fixed top-0 left-0 z-30 hidden h-screen w-[264px] flex-col p-5 lg:flex">
        <Link href="/" className="mb-7 flex items-center gap-3 px-1.5">
          <Logo />
          <div className="leading-tight">
            <div className="text-[17px] font-semibold tracking-tight">MediCapsule</div>
            <div className="text-[11px]" style={{ color: 'var(--texte-3)' }}>
              Révisions PASS &amp; LAS
            </div>
          </div>
        </Link>

        {liens}

        <div className="mt-auto flex items-center justify-between rounded-2xl px-2 py-2">
          <span className="text-[11px]" style={{ color: 'var(--texte-3)' }}>
            100 % hors ligne, sans IA
          </span>
          <BoutonTheme />
        </div>
      </aside>
    </>
  );
}

export function Logo() {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl"
      style={{ background: 'var(--accent)', color: 'var(--accent-contraste)' }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" width={19} height={19} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
        <path d="M8.5 5.5h7a3 3 0 0 1 0 6h-7a3 3 0 0 1 0-6Z" />
        <path d="M8.5 12.5h7a3 3 0 0 1 0 6h-7a3 3 0 0 1 0-6Z" opacity={0.55} />
      </svg>
    </span>
  );
}
