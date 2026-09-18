import type { Metadata } from 'next'
import { createPageMetadata, createBreadcrumbSchema, createFAQSchema } from '@/src/lib/metadata'

const SITE_URL = 'https://telegondolapiatraneamt.ro'
const PAGE_PATH = '/pages/cozla-panoramic-view'

export const metadata: Metadata = createPageMetadata({
  title: 'Cozla Panoramic View | Cazare pe Dealul Cozla, Piatra-Neamț',
  description:
    'Cazare la Cozla Panoramic View, pe Dealul Cozla din Piatra-Neamț. 7 camere, terasă, vedere spre lacul Bâtca Doamnei și acces cu telegondola. Tarif: 200 lei/cameră/noapte.',
  path: PAGE_PATH,
  keywords: [
    'cazare piatra neamt',
    'cazare cozla',
    'cazare dealul cozla',
    'cozla panoramic view',
    'cazare platforma belvedere',
    'cazare varf cozla',
    'pensiune piatra neamt',
    'camere piatra neamt',
    'cazare cu vedere panoramica piatra neamt',
    'unde dorm in piatra neamt',
    'cazare langa telegondola',
    'cazare batca doamnei',
    'cazare munte neamt',
    'cazare ieftina piatra neamt',
    'rezervare cazare piatra neamt',
  ],
  image: `${SITE_URL}/cozla/hero_cozla_panoramic_view.png`,
})

/* Schema.org: unitatea de cazare ca entitate proprie, legată de telegondolă */
const lodgingSchema = {
  '@context': 'https://schema.org',
  '@type': ['LodgingBusiness', 'BedAndBreakfast'],
  '@id': `${SITE_URL}${PAGE_PATH}#lodging`,
  name: 'Cozla Panoramic View',
  description:
    'Cazare pe Dealul Cozla, în zona Platformei Belvedere din Piatra-Neamț. 7 camere, terasă acoperită și zonă exterioară amenajată, cu vedere panoramică spre lacul Bâtca Doamnei. Accesul se face cu telegondola din Piatra-Neamț.',
  url: `${SITE_URL}${PAGE_PATH}`,
  image: [
    `${SITE_URL}/cozla/hero_cozla_panoramic_view.png`,
    `${SITE_URL}/cozla/28.png`,
    `${SITE_URL}/cozla/1.png`,
  ],
  telephone: '+40746609899',
  email: 'rezervari@perlainvest.ro',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Platforma Belvedere, Dealul Cozla',
    addressLocality: 'Piatra Neamț',
    addressRegion: 'Județul Neamț',
    postalCode: '610101',
    addressCountry: 'RO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.93635,
    longitude: 26.36745,
  },
  priceRange: '200 RON',
  currenciesAccepted: 'RON',
  numberOfRooms: {
    '@type': 'QuantitativeValue',
    value: 7,
  },
  makesOffer: {
    '@type': 'Offer',
    name: 'Cameră / noapte',
    price: '200',
    priceCurrency: 'RON',
    availability: 'https://schema.org/InStock',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi gratuit', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Încălzire', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Terasă acoperită', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Zonă exterioară amenajată', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Lenjerie de pat', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Prosoape', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Camere pentru nefumători', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Vedere panoramică', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Acces cu telegondola', value: true },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Băi comune',
      value: true,
      description: 'Băile sunt comune, separate pentru femei și bărbați',
    },
  ],
  petsAllowed: false,
  smokingAllowed: false,
  parentOrganization: {
    '@type': 'Organization',
    name: 'Perla Invest SRL',
    url: 'https://perlainvest.ro',
  },
}

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Acasă', url: SITE_URL },
  { name: 'Cazare — Cozla Panoramic View', url: `${SITE_URL}${PAGE_PATH}` },
])

const faqSchema = createFAQSchema([
  {
    question: 'Cum ajung la Cozla Panoramic View?',
    answer:
      'Accesul se face cu telegondola din Piatra-Neamț, până pe Dealul Cozla. Unitatea se află în zona Platformei Belvedere. Pentru informații legate de acces, ne puteți contacta înainte de sosire pe WhatsApp la +40 746 609 899.',
  },
  {
    question: 'Cât costă o cameră pe noapte?',
    answer: 'Tariful este de 200 lei pe cameră pe noapte.',
  },
  {
    question: 'Câte camere are unitatea?',
    answer:
      'Cozla Panoramic View dispune de 7 camere amenajate simplu și funcțional, cu lenjerie de pat și prosoape incluse.',
  },
  {
    question: 'Băile sunt în cameră?',
    answer:
      'Nu. Băile sunt comune, separate pentru femei și bărbați, și se află în afara camerelor.',
  },
  {
    question: 'Cum rezerv o cameră?',
    answer:
      'Rezervarea se face prin WhatsApp la +40 746 609 899, prin e-mail la rezervari@perlainvest.ro sau completând formularul de pe pagină. Trimiterea formularului nu reprezintă confirmarea automată a rezervării — aceasta este confirmată ulterior de echipa noastră.',
  },
  {
    question: 'Ce se vede de la Cozla Panoramic View?',
    answer:
      'Din zona panoramică se vede lacul Bâtca Doamnei, dealurile și culmile din jurul orașului Piatra-Neamț. În zilele senine, în depărtare se poate observa și Masivul Ceahlău.',
  },
])

export default function CozlaPanoramicViewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
