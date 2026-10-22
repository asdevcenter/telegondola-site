'use client'

import { useCallback, useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { MAGAZIN } from '@/src/lib/firma'

/**
 * Coșul de pe site. Se păstrează în browser; la „Continuă” clientul ajunge în magazin
 * (bilete.telegondolapiatraneamt.ro) cu alegerea în adresă. Prețurile le recalculează
 * magazinul din panou, deci ce e aici e doar „ce” și „cât”.
 */

export type ProdusCos = { cod: string; nume: string; pret: number }
type Cos = Record<string, number>
const CHEIE = 'tg-cos'
const EVENIMENT = 'tg-cos-schimbat'

function citeste(): Cos {
  try {
    const v = JSON.parse(localStorage.getItem(CHEIE) ?? '{}')
    return v && typeof v === 'object' ? v : {}
  } catch {
    return {}
  }
}

export function useCos() {
  const [cos, setCos] = useState<Cos>({})
  useEffect(() => {
    setCos(citeste())
    const f = () => setCos(citeste())
    window.addEventListener(EVENIMENT, f)
    window.addEventListener('storage', f)
    return () => {
      window.removeEventListener(EVENIMENT, f)
      window.removeEventListener('storage', f)
    }
  }, [])
  const seteaza = useCallback((cod: string, n: number) => {
    const nou = { ...citeste() }
    if (n <= 0) delete nou[cod]
    else nou[cod] = Math.min(50, n)
    try {
      localStorage.setItem(CHEIE, JSON.stringify(nou))
    } catch {
      /* fără stocare: coșul rămâne doar în pagină */
    }
    setCos(nou)
    window.dispatchEvent(new Event(EVENIMENT))
  }, [])
  return { cos, seteaza }
}

/** Butonul de pe fiecare bilet: „Adaugă în coș”, apoi − n +. */
export function ButonCos({ cod, nume, disponibil = true }: { cod: string; nume: string; disponibil?: boolean }) {
  const t = useTranslations('cos')
  const { cos, seteaza } = useCos()
  const n = cos[cod] ?? 0

  if (!disponibil)
    return (
      <div className="w-full py-3 text-center text-sm font-medium text-gray-500 bg-gray-100 rounded-xl">{t('casierie')}</div>
    )

  if (n === 0)
    return (
      <button
        type="button"
        onClick={() => seteaza(cod, 1)}
        className="w-full py-3 bg-gradient-to-r from-[#B7D662] to-[#95b540] hover:from-[#95b540] hover:to-[#B7D662] text-white font-semibold rounded-xl transition-all shadow-md"
      >
        {t('adauga')}
      </button>
    )

  return (
    <div className="flex items-center justify-between w-full rounded-xl border-2 border-[#B7D662] bg-white">
      <button
        type="button"
        onClick={() => seteaza(cod, n - 1)}
        aria-label={`${t('scade')}: ${nume}`}
        className="h-12 w-14 text-2xl text-gray-700 hover:bg-gray-50 rounded-l-xl"
      >
        −
      </button>
      <span className="font-semibold text-gray-900 tabular-nums" aria-live="polite">
        {n}
      </span>
      <button
        type="button"
        onClick={() => seteaza(cod, n + 1)}
        aria-label={`${t('creste')}: ${nume}`}
        className="h-12 w-14 text-2xl text-white bg-[#B7D662] hover:bg-[#a5c550] rounded-r-lg"
      >
        +
      </button>
    </div>
  )
}

/** Bara de jos (total + Continuă) și coșul deschis peste pagină. */
export function BaraCos({ produse }: { produse: ProdusCos[] }) {
  const t = useTranslations('cos')
  const limba = useLocale()
  const { cos, seteaza } = useCos()
  const [deschis, setDeschis] = useState(false)

  const linii = produse.filter((p) => (cos[p.cod] ?? 0) > 0).map((p) => ({ ...p, n: cos[p.cod] }))
  const bucati = linii.reduce((s, l) => s + l.n, 0)
  const total = Math.round(linii.reduce((s, l) => s + l.n * l.pret, 0) * 100) / 100
  const lei = (x: number) => `${new Intl.NumberFormat(limba).format(x)} ${limba === 'de' ? 'Lei' : 'lei'}`
  const link = `${MAGAZIN}/${limba}/comanda?b=${encodeURIComponent(linii.map((l) => `${l.cod}:${l.n}`).join(','))}`
  // coșul trece în magazin prin adresă; aici îl golim, ca după cumpărare să nu mai apară
  const pleaca = () => {
    try {
      localStorage.removeItem(CHEIE)
    } catch {
      /* fără stocare */
    }
  }

  useEffect(() => {
    document.body.style.overflow = deschis ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [deschis])

  if (bucati === 0) return null

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur shadow-[0_-8px_24px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]">
        <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3 lg:px-8">
          <button type="button" onClick={() => setDeschis(true)} className="min-w-0 text-left">
            <span className="block text-xs text-gray-500">
              {t('bilete', { n: bucati })} · <span className="underline underline-offset-2">{t('vezi')}</span>
            </span>
            <span className="block text-2xl font-bold text-gray-900 tabular-nums">{lei(total)}</span>
          </button>
          <a
            href={link}
            onClick={pleaca}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gray-900 px-6 font-semibold text-white hover:bg-gray-800 sm:px-8"
          >
            {t('continua')} →
          </a>
        </div>
      </div>

      {deschis && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label={t('titlu')}>
          <button type="button" aria-label={t('inchide')} onClick={() => setDeschis(false)} className="absolute inset-0 bg-black/50" />
          <div className="relative w-full max-w-md rounded-t-2xl bg-white p-5 shadow-2xl sm:rounded-2xl sm:p-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">{t('titlu')}</h2>
              <button type="button" onClick={() => setDeschis(false)} aria-label={t('inchide')} className="h-10 w-10 rounded-full text-xl text-gray-500 hover:bg-gray-100">
                ×
              </button>
            </div>
            <ul className="mt-4 divide-y divide-gray-100">
              {linii.map((l) => (
                <li key={l.cod} className="flex items-center justify-between gap-3 py-3">
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900">{l.nume}</p>
                    <p className="text-sm text-gray-500 tabular-nums">{lei(l.pret)}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button type="button" onClick={() => seteaza(l.cod, l.n - 1)} aria-label={`${t('scade')}: ${l.nume}`} className="h-10 w-10 rounded-full border border-gray-200 text-lg">
                      −
                    </button>
                    <span className="w-7 text-center font-semibold tabular-nums">{l.n}</span>
                    <button type="button" onClick={() => seteaza(l.cod, l.n + 1)} aria-label={`${t('creste')}: ${l.nume}`} className="h-10 w-10 rounded-full bg-[#B7D662] text-lg text-white">
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex items-baseline justify-between border-t border-gray-200 pt-3">
              <span className="text-sm uppercase tracking-wider text-gray-500">{t('total')}</span>
              <span className="text-2xl font-bold text-gray-900 tabular-nums">{lei(total)}</span>
            </div>
            <p className="mt-1 text-right text-xs text-gray-500">{t('tva')}</p>
            <a href={link} onClick={pleaca} className="mt-5 flex min-h-[52px] w-full items-center justify-center rounded-full bg-gray-900 font-semibold text-white hover:bg-gray-800">
              {t('continua')} →
            </a>
            <p className="mt-3 text-center text-xs text-gray-500">{t('urmatorul')}</p>
          </div>
        </div>
      )}
    </>
  )
}
