'use client'

import { useEffect, useRef, useState } from 'react'
import NextLink from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname } from '@/src/i18n/navigation'
import { LIMBI_PUBLICATE, type Limba } from '@/src/i18n/routing'

/** Numele fiecărei limbi, scris în limba ei — așa o recunoaște vizitatorul. */
const NUME: Record<Limba, string> = {
  ro: 'Română',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
}

/**
 * Adresa paginii curente în limba aleasă. Româna nu are prefix (/pages/contact/),
 * celelalte au (/de/pages/contact/). Linkul spre română îl scriem direct,
 * fiindcă site-ul static nu are pagini sub /ro/.
 */
function LinkLimba({
  limba,
  cale,
  ...rest
}: { limba: Limba; cale: string } & Omit<React.ComponentProps<typeof NextLink>, 'href'>) {
  if (limba === 'ro') return <NextLink href={cale} hrefLang="ro" {...rest} />
  return <Link href={cale} locale={limba} hrefLang={limba} {...rest} />
}

/**
 * Selectorul de limbă. Duce la aceeași pagină în limba aleasă.
 * Apare doar dacă site-ul are mai mult de o limbă publicată.
 */
export default function AlegeLimba({
  varianta,
  peFundalDeschis = false,
}: {
  varianta: 'meniu' | 'mobil'
  peFundalDeschis?: boolean
}) {
  const limba = useLocale() as Limba
  const cale = usePathname()
  const t = useTranslations('limba')
  const [deschis, setDeschis] = useState(false)
  const cutie = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!deschis) return
    const laClic = (e: MouseEvent) => {
      if (cutie.current && !cutie.current.contains(e.target as Node)) setDeschis(false)
    }
    const laTasta = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDeschis(false)
    }
    document.addEventListener('mousedown', laClic)
    document.addEventListener('keydown', laTasta)
    return () => {
      document.removeEventListener('mousedown', laClic)
      document.removeEventListener('keydown', laTasta)
    }
  }, [deschis])

  if (LIMBI_PUBLICATE.length < 2) return null

  if (varianta === 'mobil') {
    return (
      <div className="px-4 pb-4">
        <p className="text-xs font-medium text-gray-500 mb-2">{t('alege')}</p>
        <div className="flex flex-wrap gap-2">
          {LIMBI_PUBLICATE.map((l) => (
            <LinkLimba
              key={l}
              limba={l}
              cale={cale}
              aria-current={l === limba ? 'true' : undefined}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                l === limba
                  ? 'bg-[#B7D662] border-[#B7D662] text-white'
                  : 'border-gray-200 text-gray-700 hover:border-[#B7D662] hover:text-[#B7D662]'
              }`}
            >
              {NUME[l]}
            </LinkLimba>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative" ref={cutie}>
      <button
        type="button"
        onClick={() => setDeschis(!deschis)}
        aria-expanded={deschis}
        aria-haspopup="listbox"
        aria-label={`${t('alege')}: ${NUME[limba]}`}
        className={`flex items-center gap-1 font-medium text-sm uppercase transition-colors ${
          peFundalDeschis ? 'text-gray-700 hover:text-[#B7D662]' : 'text-white hover:text-white/80'
        }`}
      >
        {limba}
        <svg className={`w-3.5 h-3.5 transition-transform ${deschis ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {deschis && (
        <ul
          role="listbox"
          aria-label={t('alege')}
          className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-[105]"
        >
          {LIMBI_PUBLICATE.map((l) => (
            <li key={l} role="option" aria-selected={l === limba}>
              <LinkLimba
                limba={l}
                cale={cale}
                onClick={() => setDeschis(false)}
                className={`flex items-center justify-between px-4 py-2 text-sm transition-colors ${
                  l === limba ? 'text-[#B7D662] font-semibold' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {NUME[l]}
                <span className="text-xs uppercase text-gray-400">{l}</span>
              </LinkLimba>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
