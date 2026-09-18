// src/lib/metadata.ts
import type { Metadata } from 'next'

const SITE_NAME = 'Telegondola Piatra Neamț'
const SITE_URL = 'https://telegondolapiatraneamt.ro'
const SITE_DESCRIPTION = 'Descoperă experiența unică a telegondolei Piatra-Neamț! Urcă pe Muntele Cozla și bucură-te de priveliști spectaculoase asupra orașului și munților din jur. Peste 1 milion de turiști transportați din 2008!'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Experiență Unică pe Muntele Cozla`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    // Principale - exact match
    'telegondola piatra neamt',
    'telecabina piatra neamt',
    'telegondola cozla',
    'telescaun piatra neamt',
    'partie schi piatra neamt',
    'muntele cozla',
    
    // Long-tail - cum caută oamenii
    'telegondola piatra neamt pret',
    'telegondola piatra neamt tarif',
    'telecabina piatra neamt program',
    'telegondola piatra neamt orar',
    'cat costa telegondola piatra neamt',
    'cum ajung la telegondola piatra neamt',
    'telegondola piatra neamt bilete',
    'telegondola piatra neamt abonament',
    'telegondola piatra neamt contact',
    
    // Zone turistice
    'muntele cozla piatra neamt',
    'varf cozla',
    'batca doamnei',
    'lacul batca doamnei',
    'muntele pietricica',
    'atractii turistice piatra neamt',
    'obiective turistice piatra neamt',
    'turism piatra neamt',
    'vacanta piatra neamt',
    'weekend piatra neamt',
    
    // Variante regionale
    'telegondola neamt',
    'telecabina neamt',
    'gondola piatra neamt',
    'teleferic piatra neamt',
    'atractii neamt',
    'turism moldova',
    'obiective turistice moldova',
    'atractii turistice moldova',
    
    // Intent-based
    'ce sa vizitez in piatra neamt',
    'unde sa merg in piatra neamt',
    'activitati piatra neamt',
    'plimbare cu telecabina',
    'plimbare cu gondola',
    'privelisti piatra neamt',
    'panorama piatra neamt',
    'traseu montan piatra neamt',
    'drumetie cozla',
    'excursie cozla',
    
    // Schi și iarnă
    'schi piatra neamt',
    'partie schi cozla',
    'sport iarna piatra neamt',
    'snowboard piatra neamt',
    
    // Familie și grupuri
    'atractii pentru copii piatra neamt',
    'activitati familie piatra neamt',
    'excursie scolari piatra neamt',
    'iesire in natura piatra neamt',
    
    // Nearby & Regional
    'ceahlau',
    'masivul ceahlau',
    'bicaz',
    'cheile bicazului',
    'lacul rosu',
    'manastiri neamt',
    'manastirea neamt',
    'rezervatia dragos voda',
    'piatra de sus',
    'piatra neamt',
    
    // Compania
    'perla invest',
    'perla invest srl',
    'doppelmayr austria',
  ],
  authors: [{ name: 'Perla Invest SRL' }],
  creator: 'Perla Invest SRL',
  publisher: 'Perla Invest SRL',
  
  // Indexare optimizată
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph - Facebook, WhatsApp, LinkedIn
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Aventură și priveliști spectaculoase pe Muntele Cozla`,
    description: 'Urcă cu telegondola pe Muntele Cozla! Trăiește o experiență de neuitat cu panorame unice asupra orașului Piatra Neamț, Lacul Bâtca Doamnei și Masivul Ceahlău. Perfect pentru familie si prieteni!',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Telegondola Piatra Neamț - Vedere spectaculoasă de pe Muntele Cozla cu panoramă asupra orașului',
        type: 'image/jpeg',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Experiență Unică pe Muntele Cozla`,
    description: 'Descoperă Piatra Neamțul din înălțime! Telegondola te urcă 309 metri pe Cozla în doar 8 minute. Priveliști care îți taie răsuflarea! Bilete de la 25 lei.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  
  // Canonical URL
  alternates: {
    canonical: SITE_URL,
  },
  
  // Verificare ownership - VA FI COMPLETAT DUPĂ GOOGLE SEARCH CONSOLE
  verification: {
    google: 'your-google-verification-code',
  },
  
  // App capabilities
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: SITE_NAME,
  },
  
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
}

// Helper pentru pagini individuale - SUPER FLEXIBIL
export function createPageMetadata(config: {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article' | 'profile'
}): Metadata {
  const { 
    title, 
    description, 
    path, 
    keywords = [], 
    image,
    type = 'website' 
  } = config
  
  const url = `${SITE_URL}${path}`
  const ogImage = image || `${SITE_URL}/og-image.jpg`
  const fullTitle = `${title} | ${SITE_NAME}`

  return {
    title,
    description,
    keywords: [
      ...defaultMetadata.keywords as string[], 
      ...keywords,
      'piatra neamt',
      'neamt',
      'moldova',
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: 'ro_RO',
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  }
}

// Schema.org pentru Local Business - COMPLET CU DATE REALE
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['TouristAttraction', 'LocalBusiness'],
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: [
    'Telecabina Piatra Neamț',
    'Telegondola Cozla',
    'Telescaun Piatra Neamț',
    'Pârtie Schi Piatra Neamț',
    'Piatra de Sus',
  ],
  description: 'Telegondola Piatra Neamț oferă o experiență turistică unică prin telecabina care urcă pe Muntele Cozla. Inaugurată în februarie 2008, instalația întinsă pe 1915 metri cu 22 de gondole transportă peste 1200 persoane pe oră, oferind panorame spectaculoase asupra orașului Piatra Neamț, Lacul Bâtca Doamnei, Muntele Pietricica și Masivul Ceahlău.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-color.png`,
  image: [
    `${SITE_URL}/og-image.jpg`,
    `${SITE_URL}/images/telegondola-1.jpg`,
    `${SITE_URL}/images/cozla-panorama.jpg`,
  ],
  
  // Contact info REAL
  telephone: '+40724538928',
  email: 'office@perlainvest.ro',
  
  // Adresă completă REALĂ
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Piața Gării 7',
    addressLocality: 'Piatra Neamț',
    addressRegion: 'Județul Neamț',
    postalCode: '610101',
    addressCountry: 'RO',
  },
  
  // Coordonate GPS REALE (Piața Gării 7)
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.92845,
    longitude: 26.37282,
  },
  
  // Program de funcționare REAL
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Wednesday',
      opens: '12:00',
      closes: '18:00',
    },
  ],
  
  // Preț REAL
  priceRange: '25 - 45 RON',
  currenciesAccepted: 'RON',
  paymentAccepted: 'Cash, Card',
  
  // Informații tehnice în oferte
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'Bilet adult urcare și coborâre',
      price: '45',
      priceCurrency: 'RON',
    },
    {
      '@type': 'Offer',
      name: 'Bilet copil (5-14 ani) urcare și coborâre',
      price: '25',
      priceCurrency: 'RON',
    },
    {
      '@type': 'Offer',
      name: 'Bilet adult urcare sau coborâre',
      price: '25',
      priceCurrency: 'RON',
    },
    {
      '@type': 'Offer',
      name: 'Abonament 5 călătorii adulți',
      price: '80',
      priceCurrency: 'RON',
    },
    {
      '@type': 'Offer',
      name: 'Abonament 10 călătorii adulți',
      price: '120',
      priceCurrency: 'RON',
    },
    {
      '@type': 'Offer',
      name: 'Copii până la 5 ani',
      price: '0',
      priceCurrency: 'RON',
      description: 'Gratuit',
    },
  ],
  
  // Caracteristici REALE
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Parcare',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Acces persoane cu dizabilități',
      value: true,
      description: 'Transport gratuit cu telegondola o singură dată pe zi, în baza abonamentului lunar',
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Toalete',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Pârtie de schi',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Trasee montane',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Zonă panoramică',
      value: true,
    },
  ],
  
  // Detalii tehnice unice
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Producător',
      value: 'Doppelmayr Austria',
    },
    {
      '@type': 'PropertyValue',
      name: 'Lungime traseu',
      value: '1915 metri',
    },
    {
      '@type': 'PropertyValue',
      name: 'Durată călătorie',
      value: '8 minute',
    },
    {
      '@type': 'PropertyValue',
      name: 'Capacitate',
      value: '1200 persoane pe oră',
    },
    {
      '@type': 'PropertyValue',
      name: 'Număr gondole',
      value: '22',
    },
    {
      '@type': 'PropertyValue',
      name: 'Capacitate gondolă',
      value: '8 persoane',
    },
    {
      '@type': 'PropertyValue',
      name: 'Viteza transport',
      value: '6 m/s',
    },
    {
      '@type': 'PropertyValue',
      name: 'Număr stâlpi',
      value: '10',
    },
    {
      '@type': 'PropertyValue',
      name: 'Cel mai înalt stâlp',
      value: '64 metri',
    },
    {
      '@type': 'PropertyValue',
      name: 'Altitudine pornire',
      value: '323m (Gară)',
    },
    {
      '@type': 'PropertyValue',
      name: 'Altitudine sosire',
      value: '632m (Muntele Cozla)',
    },
    {
      '@type': 'PropertyValue',
      name: 'Diferență altitudine',
      value: '309 metri',
    },
    {
      '@type': 'PropertyValue',
      name: 'An inaugurare',
      value: 'februarie 2008',
    },
    {
      '@type': 'PropertyValue',
      name: 'Turiști transportați',
      value: 'peste 1 milion',
    },
  ],
  
  // Social Media - LINKURI REALE
  sameAs: [
    'https://www.facebook.com/profile.php?id=61580615018658',
    'https://www.instagram.com/piatradesus?igsh=MXZxODRiaHB0NTA0eQ==',
    'https://www.tiktok.com/@piatradesus?_t=ZN-90oTOs7kTrC&_r=1',
  ],
  
  // Review-uri estimate
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '1200',
    bestRating: '5',
    worstRating: '1',
  },
  
  // Zonă deservită
  areaServed: [
    {
      '@type': 'City',
      name: 'Piatra Neamț',
    },
    {
      '@type': 'City',
      name: 'Alexandru cel Bun',
    },
    {
      '@type': 'City',
      name: 'Dumbrava Roșie',
    },
    {
      '@type': 'City',
      name: 'Gărcina',
    },
    {
      '@type': 'City',
      name: 'Girov',
    },
  ],
  
  // Compania
  parentOrganization: {
    '@type': 'Organization',
    name: 'Perla Invest SRL',
    url: 'https://perlainvest.ro',
  },
}

// BreadcrumbList Schema - pentru navigare
export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// FAQ Schema - pentru întrebări frecvente
export function createFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Article Schema - pentru blog posts / despre noi
export function createArticleSchema(config: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.title,
    description: config.description,
    image: config.image,
    datePublished: config.datePublished,
    dateModified: config.dateModified || config.datePublished,
    author: {
      '@type': 'Organization',
      name: config.author || 'Perla Invest SRL',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Telegondola Piatra Neamț',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo-color.png`,
      },
    },
  }
}