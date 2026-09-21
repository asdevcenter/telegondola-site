'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import type { Bilet } from './telegondola'

/**
 * Coșul de bilete. Stă în browser, pe site, până la „Finalizează comanda";
 * atunci se trimite la magazinul de pe bilete.telegondolapiatraneamt.ro.
 * Prețurile de aici sunt doar pentru afișare: magazinul le recalculează din panou.
 */

export const URL_MAGAZIN = 'https://bilete.telegondolapiatraneamt.ro'

const CHEIE = 'telegondola-cos'
const EVENIMENT = 'telegondola-cos'
const VALABIL_MS = 7 * 24 * 60 * 60 * 1000

export const MAX_PE_TIP = 20
export const MAX_TOTAL = 50

type Continut = Record<string, number>

export type ArticolCos = {
  bilet: Bilet
  cantitate: number
  subtotal: number
}

const COD_VALID = /^[a-z0-9_]{1,64}$/

function curata(date: unknown): Continut {
  const rezultat: Continut = {}
  if (!date || typeof date !== 'object') return rezultat
  for (const [cod, n] of Object.entries(date as Record<string, unknown>)) {
    const cantitate = Math.floor(Number(n))
    if (COD_VALID.test(cod) && cantitate > 0) {
      rezultat[cod] = Math.min(cantitate, MAX_PE_TIP)
    }
  }
  return rezultat
}

function citeste(): Continut {
  try {
    const brut = localStorage.getItem(CHEIE)
    if (!brut) return {}
    const date = JSON.parse(brut)
    if (!date || Date.now() - Number(date.t ?? 0) > VALABIL_MS) return {}
    return curata(date.a)
  } catch {
    return {}
  }
}

function scrie(continut: Continut) {
  try {
    if (Object.keys(continut).length === 0) localStorage.removeItem(CHEIE)
    else localStorage.setItem(CHEIE, JSON.stringify({ t: Date.now(), a: continut }))
  } catch {
    // fără spațiu de stocare: coșul rămâne doar pe pagina curentă
  }
  window.dispatchEvent(new CustomEvent(EVENIMENT, { detail: continut }))
}

const suma = (c: Continut) => Object.values(c).reduce((s, n) => s + n, 0)

/**
 * @param bilete lista din useTelegondola(); fără ea, coșul știe doar câte bilete sunt
 * @param dinUrl preia ?bilet=cod&cantitate=n din adresă (pagina de bilete)
 */
export function useCos(bilete: Bilet[] = [], dinUrl = false) {
  const [continut, setContinut] = useState<Continut>({})
  const [gata, setGata] = useState(false)

  useEffect(() => {
    const laSchimbare = (e: Event) => {
      const detaliu = (e as CustomEvent).detail
      setContinut(detaliu ? curata(detaliu) : citeste())
    }
    const dinAltTab = (e: StorageEvent) => {
      if (e.key === CHEIE) setContinut(citeste())
    }

    setContinut(citeste())
    setGata(true)
    window.addEventListener(EVENIMENT, laSchimbare)
    window.addEventListener('storage', dinAltTab)
    return () => {
      window.removeEventListener(EVENIMENT, laSchimbare)
      window.removeEventListener('storage', dinAltTab)
    }
  }, [])

  const modifica = useCallback((f: (c: Continut) => Continut) => {
    const nou = curata(f(citeste()))
    scrie(nou)
  }, [])

  const adauga = useCallback(
    (cod: string, n = 1) =>
      modifica((c) => {
        const actual = c[cod] ?? 0
        const permis = Math.min(n, MAX_PE_TIP - actual, MAX_TOTAL - suma(c))
        return permis > 0 ? { ...c, [cod]: actual + permis } : c
      }),
    [modifica],
  )

  const seteaza = useCallback(
    (cod: string, n: number) =>
      modifica((c) => {
        const altele = suma(c) - (c[cod] ?? 0)
        const cantitate = Math.max(0, Math.min(Math.floor(n), MAX_PE_TIP, MAX_TOTAL - altele))
        const { [cod]: _, ...rest } = c
        return cantitate > 0 ? { ...rest, [cod]: cantitate } : rest
      }),
    [modifica],
  )

  const sterge = useCallback((cod: string) => seteaza(cod, 0), [seteaza])
  const goleste = useCallback(() => scrie({}), [])

  // Biletul venit din link, de pe homepage sau de pe pagina de tarife
  useEffect(() => {
    if (!dinUrl || !gata) return
    const parametri = new URLSearchParams(window.location.search)
    const cod = parametri.get('bilet')
    if (!cod || !COD_VALID.test(cod)) return

    const n = Math.floor(Number(parametri.get('cantitate') ?? 1))
    if ((citeste()[cod] ?? 0) === 0) adauga(cod, n > 0 ? n : 1)

    parametri.delete('bilet')
    parametri.delete('cantitate')
    const rest = parametri.toString()
    window.history.replaceState(null, '', window.location.pathname + (rest ? `?${rest}` : '') + window.location.hash)
  }, [dinUrl, gata, adauga])

  const disponibile = useMemo(
    () => new Map(bilete.filter((b) => b.online).map((b) => [b.cod, b])),
    [bilete],
  )

  // Scoate din coș biletele care nu se mai vând online
  useEffect(() => {
    if (!gata || disponibile.size === 0) return
    const deScos = Object.keys(continut).filter((cod) => !disponibile.has(cod))
    if (deScos.length) modifica((c) => Object.fromEntries(Object.entries(c).filter(([cod]) => disponibile.has(cod))))
  }, [gata, disponibile, continut, modifica])

  const articole: ArticolCos[] = useMemo(
    () =>
      Object.entries(continut).flatMap(([cod, cantitate]) => {
        const bilet = disponibile.get(cod)
        return bilet ? [{ bilet, cantitate, subtotal: Math.round(bilet.pret * cantitate * 100) / 100 }] : []
      }),
    [continut, disponibile],
  )

  const total = Math.round(articole.reduce((s, a) => s + a.subtotal, 0) * 100) / 100
  const numar = disponibile.size ? articole.reduce((s, a) => s + a.cantitate, 0) : suma(continut)

  const linkFinalizare = articole.length
    ? `${URL_MAGAZIN}/comanda?${new URLSearchParams(articole.map((a) => [a.bilet.cod, String(a.cantitate)])).toString()}`
    : null

  return {
    gata,
    articole,
    numar,
    total,
    cantitate: (cod: string) => continut[cod] ?? 0,
    adauga,
    seteaza,
    sterge,
    goleste,
    linkFinalizare,
  }
}

/** Linkul folosit de butoanele „Cumpără" de pe homepage și de pe pagina de tarife. */
export const linkBilet = (cod: string) => `/pages/tickets?bilet=${encodeURIComponent(cod)}`