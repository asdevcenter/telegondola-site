import { defineRouting } from 'next-intl/routing'

/**
 * Limbile site-ului. Româna stă la rădăcină, fără prefix (adresele de azi
 * rămân neschimbate); celelalte au prefix: /en, /fr, /de, /es.
 */
export const LIMBI = ['ro', 'en', 'fr', 'de', 'es'] as const
export type Limba = (typeof LIMBI)[number]

/**
 * Limbile pentru care se generează pagini la build.
 * O limbă se adaugă aici doar după ce are toate textele traduse.
 */
export const LIMBI_PUBLICATE: Limba[] = ['ro']

export const routing = defineRouting({
  locales: LIMBI,
  defaultLocale: 'ro',
  localePrefix: 'as-needed',
  localeDetection: false,
})
