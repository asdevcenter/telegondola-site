'use client'

import { useEffect, useState } from 'react'

/**
 * Programul, starea și tarifele vin de la panoul de administrare.
 * Nu se mai scriu în cod: se modifică din admin și apar aici în cel mult un minut,
 * fără build și fără urcat fișiere pe găzduire.
 *
 * Dacă serverul nu răspunde, pagina folosește valorile de rezervă de mai jos,
 * așa că nu rămâne niciodată goală.
 */

const URL_CONFIG = 'https://admin.telegondolapiatraneamt.ro/api/public/config'
const REIMPROSPATARE_MS = 60_000

export type ZiProgram = {
  zi: number // 0 = duminică
  deschide: string // "10:00"
  inchide: string // "20:00"
  deschideMin: number
  inchideMin: number
}

export type Bilet = {
  cod: string
  nume: string
  subtitlu: string | null
  pret: number
  public: 'ADULT' | 'COPIL' | 'ORICE'
  tip: 'DUS_INTORS' | 'O_CURSA' | 'ABONAMENT' | 'GRUP' | 'EVENIMENT'
  nrCalatorii: number | null
  minPersoane: number | null
  insotitorGratuitLa: number | null
  valabilZile: number | null
  cereAct: boolean
  online: boolean
  eticheta: string | null
  puncte: string[]
  economie: number | null
}

export type ConfigTelegondola = {
  actualizat: string
  stare: {
    deschis: boolean
    motiv: 'program' | 'exceptie' | 'urgenta' | 'fara_program'
    mesaj: string | null
    deschide: string | null
    inchide: string | null
  }
  program: ZiProgram[]
  preturi: Record<string, number>
  bilete: Bilet[]
  gratuitati: { cod: string; nume: string; descriere: string }[]
}

/** Programul de rezervă — folosit doar dacă serverul nu răspunde. */
const PROGRAM_REZERVA: ZiProgram[] = [
  { zi: 0, deschide: '10:00', inchide: '20:00', deschideMin: 600, inchideMin: 1200 },
  { zi: 1, deschide: '10:00', inchide: '20:00', deschideMin: 600, inchideMin: 1200 },
  { zi: 2, deschide: '10:00', inchide: '20:00', deschideMin: 600, inchideMin: 1200 },
  { zi: 3, deschide: '12:00', inchide: '20:00', deschideMin: 720, inchideMin: 1200 },
  { zi: 4, deschide: '10:00', inchide: '20:00', deschideMin: 600, inchideMin: 1200 },
  { zi: 5, deschide: '10:00', inchide: '20:00', deschideMin: 600, inchideMin: 1200 },
  { zi: 6, deschide: '10:00', inchide: '20:00', deschideMin: 600, inchideMin: 1200 },
]

const NECUNOSCUT: ConfigTelegondola['stare'] = {
  deschis: false,
  motiv: 'program',
  mesaj: null,
  deschide: null,
  inchide: null,
}

const ZI_DUPA_NUME: Record<string, number> = {
  Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
}

/**
 * Ziua și ora în București, indiferent de ceasul vizitatorului.
 * Un turist cu telefonul pe alt fus orar vede aceeași informație ca localnicii.
 */
function acumInRomania(): { zi: number; minute: number } {
  const parti = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Bucharest',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(new Date())

  const ia = (tip: string) => parti.find((p) => p.type === tip)?.value ?? ''
  const zi = ZI_DUPA_NUME[ia('weekday')] ?? 0
  const ora = parseInt(ia('hour'), 10) % 24 // unele browsere dau 24 la miezul nopții
  const minut = parseInt(ia('minute'), 10)

  return { zi, minute: ora * 60 + minut }
}

function stareDinProgram(program: ZiProgram[]): ConfigTelegondola['stare'] {
  const { zi, minute } = acumInRomania()
  const azi = program.find((z) => z.zi === zi)

  if (!azi) {
    return { deschis: false, motiv: 'fara_program', mesaj: null, deschide: null, inchide: null }
  }

  return {
    deschis: minute >= azi.deschideMin && minute < azi.inchideMin,
    motiv: 'program',
    mesaj: null,
    deschide: azi.deschide,
    inchide: azi.inchide,
  }
}

/**
 * Datele live. Cât timp `incarcat` e false, starea e calculată local din
 * programul de rezervă — corectă, dar fără să știe de închiderile de urgență.
 */
export function useTelegondola() {
  const [config, setConfig] = useState<ConfigTelegondola | null>(null)
  const [incarcat, setIncarcat] = useState(false)
  const [gata, setGata] = useState(false)

  useEffect(() => {
    let activ = true
    setGata(true)

    const cere = async () => {
      try {
        const raspuns = await fetch(URL_CONFIG, { cache: 'no-store' })
        if (!raspuns.ok) return
        const date = (await raspuns.json()) as ConfigTelegondola
        if (activ) {
          setConfig(date)
          setIncarcat(true)
        }
      } catch {
        // serverul nu răspunde — rămânem pe valorile de rezervă
      }
    }

    cere()
    const cronometru = setInterval(cere, REIMPROSPATARE_MS)

    return () => {
      activ = false
      clearInterval(cronometru)
    }
  }, [])

  const program = config?.program ?? PROGRAM_REZERVA

  // Înainte de montare nu calculăm nimic din ceas: pagina e exportată static,
  // iar HTML-ul de la build trebuie să coincidă cu prima randare din browser.
  const stare = config?.stare ?? (gata ? stareDinProgram(program) : NECUNOSCUT)

  return {
    gata,
    incarcat,
    stare,
    program,
    preturi: config?.preturi ?? {},
    bilete: config?.bilete ?? [],
    gratuitati: config?.gratuitati ?? [],
  }
}

/**
 * „Luni, Marți, Joi" + „10:00 - 20:00".
 * Grupează zilele cu același interval chiar dacă nu sunt una după alta —
 * miercurea are alt program, dar lunea, marțea și joia rămân împreună.
 */
export function programGrupat(program: ZiProgram[]) {
  const NUME = ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă']
  const ordinea = [1, 2, 3, 4, 5, 6, 0] // săptămâna începe luni

  const dupaInterval = new Map<string, { zile: string[]; primaZi: number }>()

  ordinea.forEach((ziNr, pozitie) => {
    const z = program.find((p) => p.zi === ziNr)
    if (!z) return

    const interval = `${z.deschide} - ${z.inchide}`
    const grup = dupaInterval.get(interval)

    if (grup) grup.zile.push(NUME[ziNr])
    else dupaInterval.set(interval, { zile: [NUME[ziNr]], primaZi: pozitie })
  })

  return [...dupaInterval.entries()]
    .sort((a, b) => a[1].primaZi - b[1].primaZi)
    .map(([interval, g]) => ({ zile: g.zile.join(', '), interval }))
}