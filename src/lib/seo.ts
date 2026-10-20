// Titlu, descriere, adresă canonică și variantele în celelalte limbi (hreflang)
// pentru fiecare pagină, în limba paginii.
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { LIMBI_PUBLICATE, type Limba } from '@/src/i18n/routing'

export const SITE_URL = 'https://telegondolapiatraneamt.ro'
const SITE_NAME = 'Telegondola Piatra Neamț'

const OG_LOCALE: Record<Limba, string> = {
  ro: 'ro_RO',
  en: 'en_GB',
  fr: 'fr_FR',
  de: 'de_DE',
  es: 'es_ES',
}

/** Adresa completă a unei pagini într-o limbă. Româna nu are prefix. */
export function adresa(limba: string, cale: string) {
  const c = cale === '/' ? '/' : `${cale.replace(/\/$/, '')}/`
  return `${SITE_URL}${limba === 'ro' ? '' : `/${limba}`}${c}`
}

export function metadatePagina(o: {
  limba: string
  cale: string
  titlu: string
  descriere: string
  imagine?: string
  /** titlul complet, fără „| Telegondola Piatra Neamț” adăugat automat (pagina principală) */
  absolut?: boolean
}): Metadata {
  const url = adresa(o.limba, o.cale)
  const imagine = o.imagine || `${SITE_URL}/og-image.jpg`
  const limbi: Record<string, string> = {}
  for (const l of LIMBI_PUBLICATE) limbi[l] = adresa(l, o.cale)
  limbi['x-default'] = adresa('ro', o.cale)

  return {
    title: o.absolut ? { absolute: o.titlu } : o.titlu,
    description: o.descriere,
    alternates: { canonical: url, languages: limbi },
    openGraph: {
      type: 'website',
      locale: OG_LOCALE[o.limba as Limba] ?? 'ro_RO',
      alternateLocale: LIMBI_PUBLICATE.filter((l) => l !== o.limba).map((l) => OG_LOCALE[l]),
      url,
      siteName: SITE_NAME,
      title: o.absolut ? o.titlu : `${o.titlu} | ${SITE_NAME}`,
      description: o.descriere,
      images: [{ url: imagine, width: 1200, height: 630, alt: o.titlu }],
    },
    twitter: {
      card: 'summary_large_image',
      title: o.absolut ? o.titlu : `${o.titlu} | ${SITE_NAME}`,
      description: o.descriere,
      images: [imagine],
    },
  }
}

/** Pentru paginile care au titlul și descrierea în messages, la meta.<cheie>. */
export async function metadateDinMesaje(
  params: Promise<{ locale: string }>,
  cheie: string,
  cale: string,
  imagine?: string,
  absolut = false,
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: `meta.${cheie}` })
  return metadatePagina({ limba: locale, cale, titlu: t('titlu'), descriere: t('descriere'), imagine, absolut })
}
