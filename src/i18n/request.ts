import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import ro from '../../messages/ro.json'

type Texte = { [cheie: string]: string | string[] | Texte }

const esteObiect = (v: unknown): v is Texte =>
  typeof v === 'object' && v !== null && !Array.isArray(v)

/** Textele limbii peste cele românești: ce nu e încă tradus apare în română, nu gol. */
function peste(baza: Texte, limba: Texte): Texte {
  const rezultat: Texte = { ...baza }
  for (const [cheie, valoare] of Object.entries(limba)) {
    const dinBaza = baza[cheie]
    rezultat[cheie] =
      esteObiect(valoare) && esteObiect(dinBaza) ? peste(dinBaza, valoare) : valoare
  }
  return rezultat
}

export default getRequestConfig(async ({ requestLocale }) => {
  const ceruta = await requestLocale
  const locale = hasLocale(routing.locales, ceruta) ? ceruta : routing.defaultLocale

  const messages =
    locale === 'ro'
      ? ro
      : peste(ro as Texte, (await import(`../../messages/${locale}.json`)).default as Texte)

  return { locale, messages, timeZone: 'Europe/Bucharest' }
})
