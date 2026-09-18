// src/app/pages/puncte-de-interes/[slug]/page.tsx
// FĂRĂ 'use client' aici!

import ClientSlugPage from './ClientSlugPage'

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

// IMPORTANT: Permite slug-uri noi care nu sunt în listă


// Page component - rulează pe server
export default function Page({ params }: { params: { slug: string } }) {
  return <ClientSlugPage slug={params.slug} validSlugs={validSlugs} />
}