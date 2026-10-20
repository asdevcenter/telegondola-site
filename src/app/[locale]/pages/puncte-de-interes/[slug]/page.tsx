import { setRequestLocale } from 'next-intl/server'
import Atractie from './Atractie'
import { notFound } from 'next/navigation'

// Lista COMPLETĂ cu toate slug-urile
const validSlugs = [
  'curtea-domneasca',
  'biserica-nasterea-sf-ioan-botezatorul',
  'sinagoga-baal-shem-tov',
  'casa-calistrat-hogas',
  'muzeul-istorie-arheologie',
  'muzeul-cucuteni',
  'muzeul-arta',
  'muzeul-etnografie',
  'teatrul-tineretului',
  'telegondola',
  'muntele-cozla',
  'muntele-pietricica',
  'muzeul-stiinte-naturale',
  'lacul-batca-doamnei',
  'parcul-central',
  'gradina-nicu-albu',
  'strandul-tineretului',
  'stadionul-ceahlaul',
  'manastirea-bistrita',
  'manastirea-pangarati',
  'manastirea-neamt',
  'manastirea-agapia',
  'manastirea-varatec',
  'manastirea-secu',
  'manastirea-sihastria',
  'manastirea-sihla',
  'cheile-bicazului',
  'lacul-rosu',
  'masivul-ceahlau',
  'lacul-izvorul-muntelui',
  'rezervatia-dragos-voda',
  'cetatea-neamt',
  'muzeul-ion-creanga',
  // Adaugă aici toate celelalte pe măsură ce le creezi
]

// OBLIGATORIU pentru "output: export" - rulează pe server
export async function generateStaticParams() {
  return validSlugs.map((slug) => ({
    slug: slug,
  }))
}

export const dynamicParams = false

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  if (!validSlugs.includes(slug)) notFound()
  return <Atractie slug={slug} />
}
