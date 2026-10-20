import { defineRouting } from 'next-intl/routing'

/**
 * Limbile site-ului. Româna stă la rădăcină, fără prefix (adresele de azi
 * rămân neschimbate); celelalte au prefix: /en, /fr, /de, /es.
 */
export const LIMBI = ['ro', 'en', 'fr', 'de', 'es'] as const
export type Limba = (typeof LIMBI)[number]

/**
 * Limbile care apar pe site-ul publicat (la „npm run build").
 * O limbă se adaugă aici doar după ce are toate textele traduse.
 *
 * La „npm run dev" apar toate, ca să se poată verifica traducerile.
 * Pentru un build de probă cu toate limbile (de urcat pe preview):
 *   set NEXT_PUBLIC_TOATE_LIMBILE=1 && npm run build
 */
const GATA_DE_PUBLICAT: Limba[] = ['ro']

const TOATE =
  process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_TOATE_LIMBILE === '1'

export const LIMBI_PUBLICATE: Limba[] = TOATE ? [...LIMBI] : GATA_DE_PUBLICAT

export const routing = defineRouting({
  locales: LIMBI,
  defaultLocale: 'ro',
  localePrefix: 'as-needed',
  localeDetection: false,
})
