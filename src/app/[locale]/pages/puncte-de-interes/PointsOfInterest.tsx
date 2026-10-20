'use client'

import React, { useState, useEffect, useMemo, useCallback } from 'react'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

// Component pentru imagine SIMPLĂ
const OptimizedImage = ({ src, alt, className, priority = false }) => (
  <img
    src={src}
    alt={alt}
    className={`${className} w-full h-full object-cover`}
    loading={priority ? "eager" : "lazy"}
    onError={(e) => {
      e.target.src = '/puncte-de-interes/placeholder.jpg'
    }}
  />
)

// Card component EXACT ca în original dar FĂRĂ duration
const AttractionCard = React.memo(({ attraction, index }) => {
  return (
    <Link 
      href={`/pages/puncte-de-interes/${attraction.id}`}
      className="block"
    >
      <div className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        {/* Imagine */}
        <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
          <OptimizedImage
            src={attraction.image}
            alt={attraction.name}
            className="group-hover:scale-105 transition-transform"
            priority={index < 3}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          
          {/* Badge */}
          {attraction.viewFromGondola && (
            <div className="absolute top-3 md:top-4 left-3 md:left-4">
              <span className="px-2 md:px-3 py-1 bg-[#B7D662] text-white text-xs font-semibold rounded-full">
                Vizibil din Telegondolă
              </span>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#B7D662] transition-colors line-clamp-2">
            {attraction.name}
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{attraction.shortDesc}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
            {attraction.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="px-2 md:px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer - DOAR distanța */}
          <div className="flex items-center justify-between">
            <span className="text-xs md:text-sm text-gray-500">{attraction.distance} km</span>
            <span className="text-[#B7D662] font-semibold text-sm md:text-base group-hover:underline flex items-center gap-1 md:gap-2">
              Detalii
              <svg className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
})

AttractionCard.displayName = 'AttractionCard'

// Card compact FĂRĂ duration
const CompactAttractionCard = React.memo(({ attraction }) => {
  return (
    <Link 
      href={`/pages/puncte-de-interes/${attraction.id}`}
      className="block"
    >
      <div className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        {/* Imagine */}
        <div className="relative h-40 md:h-48 overflow-hidden">
          <OptimizedImage
            src={attraction.image}
            alt={attraction.name}
            className="group-hover:scale-105 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Distance Badge */}
          <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3">
            <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              {attraction.distance} km
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4 md:p-5">
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-[#B7D662] transition-colors line-clamp-2">
            {attraction.name}
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-3 line-clamp-2">{attraction.shortDesc}</p>
          
          <div className="flex items-center justify-end">
            <span className="text-[#B7D662] font-medium text-xs md:text-sm">Vezi detalii →</span>
          </div>
        </div>
      </div>
    </Link>
  )
})

CompactAttractionCard.displayName = 'CompactAttractionCard'

export default function PuncteInteres() {
  const [activeCategory, setActiveCategory] = useState('toate')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [visibleCount, setVisibleCount] = useState(12)

  // Categorii
  const categories = [
    { id: 'toate', name: 'Toate' },
    { id: 'istorie', name: 'Istorie & Cultură' },
    { id: 'natura', name: 'Natură' },
    { id: 'spiritualitate', name: 'Spiritualitate' },
    { id: 'agrement', name: 'Agrement' }
  ]

  // ATRACȚII CU DISTANȚE REALE ȘI IMAGINI DIN PUBLIC/PUNCTE-DE-INTERES
  const attractions = [
    // ATRACȚII DIN ORAȘ (sub 5 km de centru)
    {
      id: 'curtea-domneasca',
      name: 'Curtea Domnească și Turnul lui Ștefan cel Mare',
      image: '/puncte-de-interes/curtea-domneasca.jpg',
      category: 'istorie',
      description: 'Complex medieval emblematic din secolul XV, nucleul istoric al orașului',
      shortDesc: 'Centrul istoric al orașului',
      distance: 0.8,
      highlight: true,
      viewFromGondola: true,
      tags: ['Medieval', 'Ștefan cel Mare', 'Must See']
    },
    {
      id: 'biserica-nasterea-sf-ioan-botezatorul',
      name: 'Biserica "Nașterea Sf. Ioan Botezătorul"',
      image: '/puncte-de-interes/biserica-sf-ioan.jpg',
      category: 'spiritualitate',
      description: 'Parte integrantă a Curții Domnești, construită în stil moldovenesc, cu o vechime de peste 500 de ani',
      shortDesc: 'Biserica medievală moldovenească',
      distance: 0.8,
      highlight: true,
      viewFromGondola: true,
      tags: ['Religie', 'Arhitectură', 'Medieval']
    },
    {
      id: 'sinagoga-baal-shem-tov',
      name: 'Sinagoga "Baal Shem Tov"',
      image: '/puncte-de-interes/sinagoga-baal-shem-tov.jpg',
      category: 'istorie',
      description: 'Lăcaș de cult evreiesc de importanță istorică, una dintre cele mai vechi sinagogi din România',
      shortDesc: 'Monument istoric evreiesc',
      distance: 1.2,
      highlight: true,
      viewFromGondola: false,
      tags: ['Patrimoniu', 'Cultură', 'Istorie']
    },
    {
      id: 'casa-calistrat-hogas',
      name: 'Casa Memorială Calistrat Hogaș',
      image: '/puncte-de-interes/casa-calistrat-hogas.jpg',
      category: 'istorie',
      description: 'Locuința memorială a scriitorului Calistrat Hogaș, păstrată cu mobilierul și atmosfera vremii',
      shortDesc: 'Casa marelui scriitor',
      distance: 0.9,
      highlight: true,
      viewFromGondola: false,
      tags: ['Literatură', 'Memorial', 'Cultură']
    },
    {
      id: 'muzeul-istorie-arheologie',
      name: 'Muzeul de Istorie și Arheologie',
      image: '/puncte-de-interes/muzeul-istorie-arheologie.jpg',
      category: 'istorie',
      description: 'Prezintă artefacte de mare valoare din epoci diferite, inclusiv vestigii dacice și cucuteniene',
      shortDesc: 'Comori arheologice',
      distance: 0.7,
      highlight: true,
      viewFromGondola: false,
      tags: ['Muzeu', 'Arheologie', 'Istorie']
    },
    {
      id: 'muzeul-cucuteni',
      name: 'Muzeul de Artă Eneolitică Cucuteni',
      image: '/puncte-de-interes/muzeul-cucuteni.jpg',
      category: 'istorie',
      description: 'Adăpostește cea mai bogată colecție de obiecte aparținând culturii Cucuteni din Europa',
      shortDesc: 'Tezaur arheologic unic',
      distance: 0.7,
      highlight: true,
      viewFromGondola: false,
      tags: ['Cucuteni', 'Arheologie', 'Unic în Europa']
    },
    {
      id: 'muzeul-arta',
      name: 'Muzeul de Artă Piatra Neamț',
      image: '/puncte-de-interes/muzeul-arta.jpg',
      category: 'istorie',
      description: 'Oferă o incursiune în arta românească clasică și modernă',
      shortDesc: 'Artă românească',
      distance: 0.6,
      highlight: true,
      viewFromGondola: false,
      tags: ['Artă', 'Cultură', 'Muzeu']
    },
    {
      id: 'muzeul-etnografie',
      name: 'Muzeul de Etnografie',
      image: '/puncte-de-interes/muzeul-etnografie.jpg',
      category: 'istorie',
      description: 'Reflectă viața rurală moldovenească tradițională prin obiecte autentice și reconstituiri',
      shortDesc: 'Tradiții moldovenești',
      distance: 0.7,
      highlight: true,
      viewFromGondola: false,
      tags: ['Etnografie', 'Tradiții', 'Cultură']
    },
    {
      id: 'muzeul-stiinte-naturale',
      name: 'Muzeul de Științe Naturale',
      image: '/puncte-de-interes/muzeul-stiinte-naturale.jpg',
      category: 'istorie',
      description: 'Include expoziții despre fauna și flora zonei',
      shortDesc: 'Natura regiunii',
      distance: 0.7,
      highlight: true,
      viewFromGondola: false,
      tags: ['Științe', 'Natură', 'Educație']
    },
    {
      id: 'teatrul-tineretului',
      name: 'Teatrul Tineretului',
      image: '/puncte-de-interes/teatrul-tineretului.jpg',
      category: 'istorie',
      description: 'Instituție culturală de renume, recunoscută pentru spectacolele sale de calitate',
      shortDesc: 'Teatru de prestigiu',
      distance: 0.5,
      highlight: true,
      viewFromGondola: true,
      tags: ['Cultură', 'Spectacole', 'Artă']
    },
    {
      id: 'telegondola',
      name: 'Telegondola Piatra Neamț',
      image: '/puncte-de-interes/telegondola.jpg',
      category: 'agrement',
      description: 'Legătură aeriană către platoul Cozla, cu vederi panoramice asupra orașului',
      shortDesc: 'Experiență panoramică unică',
      distance: 1.5,
      highlight: true,
      viewFromGondola: false,
      tags: ['Panoramă', 'Must Do', '632m']
    },
    {
      id: 'muntele-cozla',
      name: 'Muntele Cozla',
      image: '/puncte-de-interes/muntele-cozla.jpg',
      category: 'natura',
      description: 'Zonă de agrement cu trasee montane, belvedere și, iarna, pârtie de schi',
      shortDesc: 'Destinația telegondolei',
      distance: 2.3,
      highlight: true,
      viewFromGondola: false,
      tags: ['Drumeții', 'Schi', 'Belvedere']
    },
    {
      id: 'muntele-pietricica',
      name: 'Muntele Pietricica',
      image: '/puncte-de-interes/muntele-pietricica.jpg',
      category: 'natura',
      description: 'Coline pitorești, ideale pentru drumeții ușoare și liniște',
      shortDesc: 'Drumeții și relaxare',
      distance: 2.8,
      highlight: true,
      viewFromGondola: true,
      tags: ['Natură', 'Drumeții', 'Liniște']
    },
    {
      id: 'lacul-batca-doamnei',
      name: 'Lacul Bâtca Doamnei',
      image: '/puncte-de-interes/lacul-batca-doamnei.jpg',
      category: 'natura',
      description: 'Lac de acumulare pe râul Bistrița, cu potențial recreativ și peisaje spectaculoase',
      shortDesc: 'Oază de liniște',
      distance: 4.2,
      highlight: true,
      viewFromGondola: true,
      tags: ['Lac', 'Plimbări', 'Fotografie']
    },
    {
      id: 'parcul-central',
      name: 'Parcul Central',
      image: '/puncte-de-interes/parcul-central.jpg',
      category: 'agrement',
      description: 'Spațiu verde emblematic, ideal pentru plimbări, activități recreative și evenimente publice',
      shortDesc: 'Inima verde a orașului',
      distance: 0.3,
      highlight: true,
      viewFromGondola: true,
      tags: ['Parc', 'Relaxare', 'Familie']
    },
  {
      id: 'gradina-nicu-albu',
      name: 'Grădina Publică "Nicu Albu"',
      image: '/puncte-de-interes/gradina-nicu-albu.jpg',
      category: 'agrement',
      description: 'Spațiu de relaxare și promenadă în centrul orașului',
      shortDesc: 'Grădină publică',
    distance: 1.1,
     
      highlight: true,
      viewFromGondola: true,
      tags: ['Parc', 'Istorie', 'Plimbări']
    },
    {
      id: 'strandul-tineretului',
      name: 'Ștrandul Tineretului',
      image: '/puncte-de-interes/strandul-tineretului.jpg',
      category: 'agrement',
      description: 'Complex de agrement urban cu piscine și facilități pentru sport și odihnă',
      shortDesc: 'Complex de înot și relaxare',
      distance: 1.8,
      highlight: true,
      viewFromGondola: true,
      tags: ['Sport', 'Înot', 'Agrement']
    },
    {
      id: 'stadionul-ceahlaul',
      name: 'Stadionul Municipal Ceahlăul',
      image: '/puncte-de-interes/stadionul-ceahlaul.jpg',
      category: 'agrement',
      description: 'Arenă sportivă importantă pentru oraș',
      shortDesc: 'Stadion municipal',
      distance: 2.1,
      highlight: true,
      viewFromGondola: false,
      tags: ['Sport', 'Fotbal', 'Evenimente']
    },

    // ATRACȚII DIN JUDEȚ (peste 5 km)
    {
      id: 'manastirea-bistrita',
      name: 'Mănăstirea Bistrița',
      image: '/puncte-de-interes/manastirea-bistrita.jpg',
      category: 'spiritualitate',
      description: 'Ctitorită de Alexandru cel Bun, una dintre cele mai vechi vetre monahale moldovenești',
      shortDesc: 'Ctitorie domnească',
      distance: 8,
      highlight: false,
      viewFromGondola: false,
      tags: ['Spiritualitate', 'Istorie', 'Alexandru cel Bun']
    },
    {
      id: 'manastirea-pangarati',
      name: 'Mănăstirea Pângărați',
      image: '/puncte-de-interes/manastirea-pangarati.jpg',
      category: 'spiritualitate',
      description: 'Așezată într-un cadru natural de vis, între păduri de conifere și izvoare',
      shortDesc: 'Oază de pace și natură',
      distance: 16,
      highlight: false,
      viewFromGondola: false,
      tags: ['Spiritualitate', 'Natură', 'Liniște']
    },
    {
      id: 'manastirea-neamt',
      name: 'Mănăstirea Neamț',
      image: '/puncte-de-interes/manastirea-neamt.jpg',
      category: 'spiritualitate',
      description: 'Considerată "Ierusalimul ortodoxiei românești", cea mai mare mănăstire medievală din Moldova',
      shortDesc: 'Centru spiritual major',
      distance: 11,
      highlight: false,
      viewFromGondola: false,
      tags: ['Spiritualitate', 'Medieval', 'Artă']
    },
    {
      id: 'manastirea-agapia',
      name: 'Mănăstirea Agapia',
      image: '/puncte-de-interes/manastirea-agapia.jpg',
      category: 'spiritualitate',
      description: 'Cunoscută pentru pictura realizată de Nicolae Grigorescu și pentru comunitatea monahală activă',
      shortDesc: 'Artă și spiritualitate',
      distance: 9,
      highlight: false,
      viewFromGondola: false,
      tags: ['Grigorescu', 'Pictură', 'Spiritualitate']
    },
    {
      id: 'manastirea-varatec',
      name: 'Mănăstirea Văratec',
      image: '/puncte-de-interes/manastirea-varatec.jpg',
      category: 'spiritualitate',
      description: 'Cea mai mare mănăstire de maici din România, înconjurată de grădini și case tradiționale',
      shortDesc: 'Cea mai mare mănăstire de maici',
      distance: 12,
      highlight: false,
      viewFromGondola: false,
      tags: ['Spiritualitate', 'Grădini', 'Tradiție']
    },
    {
      id: 'manastirea-secu',
      name: 'Mănăstirea Secu',
      image: '/puncte-de-interes/manastirea-secu.jpg',
      category: 'spiritualitate',
      description: 'Amplasată într-un cadru montan pitoresc, cu o istorie bogată',
      shortDesc: 'Mănăstire montană',
      distance: 17,
      highlight: false,
      viewFromGondola: false,
      tags: ['Spiritualitate', 'Munte', 'Istorie']
    },
    {
      id: 'manastirea-sihastria',
      name: 'Mănăstirea Sihăstria',
      image: '/puncte-de-interes/manastirea-sihastria.jpg',
      category: 'spiritualitate',
      description: 'Loc de retragere duhovnicească, strâns legat de viața Sfântului Paisie Olaru',
      shortDesc: 'Centru duhovnicesc',
      distance: 20,
      highlight: false,
      viewFromGondola: false,
      tags: ['Spiritualitate', 'Sf. Paisie', 'Pelerinaj']
    },
    {
      id: 'manastirea-sihla',
      name: 'Mănăstirea Sihla',
      image: '/puncte-de-interes/manastirea-sihla.jpg',
      category: 'spiritualitate',
      description: 'Legată de viața Cuvioasei Teodora de la Sihla, loc de pelerinaj',
      shortDesc: 'Schit de pelerinaj',
      distance: 22,
      highlight: false,
      viewFromGondola: false,
      tags: ['Pelerinaj', 'Cuv. Teodora', 'Spiritualitate']
    },
    {
      id: 'cheile-bicazului',
      name: 'Cheile Bicazului',
      image: '/puncte-de-interes/cheile-bicazului.jpg',
      category: 'natura',
      description: 'Defileu spectaculos, unul dintre cele mai impresionante din România',
      shortDesc: 'Minune a naturii',
      distance: 27,
      highlight: false,
      viewFromGondola: false,
      tags: ['Spectaculos', 'Must See', 'Natură']
    },
    {
      id: 'lacul-rosu',
      name: 'Lacul Roșu',
      image: '/puncte-de-interes/lacul-rosu.jpg',
      category: 'natura',
      description: 'Lac natural de baraj cu trunchiuri de copaci ieșind din apă',
      shortDesc: 'Peisaj de basm',
      distance: 30,
      highlight: false,
      viewFromGondola: false,
      tags: ['Lac', 'Legendă', 'Fotogenic']
    },
    {
      id: 'masivul-ceahlau',
      name: 'Masivul Ceahlău',
      image: '/puncte-de-interes/masivul-ceahlau.jpg',
      category: 'natura',
      description: 'Olimpul României cu trasee spectaculoase și legende fascinante',
      shortDesc: 'Muntele sacru al dacilor',
      distance: 38,
      highlight: false,
      viewFromGondola: true,
      tags: ['Drumeții', 'Legendar', '1907m']
    },
    {
      id: 'lacul-izvorul-muntelui',
      name: 'Lacul Izvorul Muntelui (Bicaz)',
      image: '/puncte-de-interes/lacul-izvorul-muntelui.jpg',
      category: 'natura',
      description: 'Cel mai mare lac artificial de pe râul Bistrița, ideal pentru plimbări, pescuit și croaziere',
      shortDesc: 'Cel mai mare lac artificial',
      distance: 28,
      highlight: false,
      viewFromGondola: false,
      tags: ['Lac', 'Croaziere', 'Pescuit']
    },
    {
      id: 'rezervatia-dragos-voda',
      name: 'Rezervația de zimbri "Dragoș Vodă"',
      image: '/puncte-de-interes/rezervatia-zimbri.jpg',
      category: 'natura',
      description: 'Zimbri și faună carpatină în habitat natural',
      shortDesc: 'Zimbri în libertate',
      distance: 33,
      highlight: false,
      viewFromGondola: false,
      tags: ['Zimbri', 'Wildlife', 'Natură']
    },
    {
      id: 'cetatea-neamt',
      name: 'Cetatea Neamț',
      image: '/puncte-de-interes/cetatea-neamt.jpg',
      category: 'istorie',
      description: 'Fortificație medievală impresionantă a lui Ștefan cel Mare',
      shortDesc: 'Bastion medieval',
      distance: 14,
      highlight: false,
      viewFromGondola: false,
      tags: ['Medieval', 'Ștefan cel Mare', 'Panoramă']
    },
    {
      id: 'muzeul-ion-creanga',
      name: 'Muzeul Memorial Ion Creangă - Humulești',
      image: '/puncte-de-interes/muzeul-ion-creanga.jpg',
      category: 'istorie',
      description: 'Casa copilăriei marelui povestitor',
      shortDesc: 'Casa din Humulești',
      distance: 9,
      highlight: false,
      viewFromGondola: false,
      tags: ['Ion Creangă', 'Literatură', 'Memorial']
    }
  ]
const removeDiacritics = (str) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Elimină diacriticele
    .toLowerCase()
}
  // Filtrare
// Filtrare actualizată
const filteredAttractions = useMemo(() => {
  let result = attractions
  
  if (activeCategory !== 'toate') {
    result = result.filter(a => a.category === activeCategory)
  }
  
  if (searchTerm) {
    const search = removeDiacritics(searchTerm)
    result = result.filter(a => 
      removeDiacritics(a.name).includes(search) ||
      removeDiacritics(a.description).includes(search) ||
      a.tags.some(tag => removeDiacritics(tag).includes(search))
    )
  }
  
  return result
}, [activeCategory, searchTerm])

// Funcție pentru a elimina diacriticele


  // Separare atracții - ORAȘ până la 5km, JUDEȚ peste 5km
  const cityAttractions = useMemo(() => 
    filteredAttractions.filter(a => a.distance <= 5),
    [filteredAttractions]
  )
  
  const countyAttractions = useMemo(() => 
    filteredAttractions.filter(a => a.distance > 5),
    [filteredAttractions]
  )

  // Atracții vizibile cu Load More
  const visibleCityAttractions = cityAttractions.slice(0, visibleCount)
  const visibleCountyAttractions = countyAttractions.slice(0, visibleCount)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500)
  }, [])

  const loadMore = useCallback(() => {
    setVisibleCount(prev => prev + 12)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/puncte-de-interes/hero-puncte-interes.jpg"
            alt="Puncte de interes Piatra Neamț"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-8 leading-tight animate-fade-in-up">
            Descoperă <span className="text-[#B7D662]">locurile</span> care definesc<br />
            <span className="font-light italic">orașul și împrejurimile</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-3xl mx-auto mb-8 md:mb-12 animate-fade-in-up animation-delay-200">
Piatra Neamț este un oraș cu o istorie de peste șase secole, așezat într-un cadru natural spectaculos.          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <button 
              onClick={() => document.getElementById('attractions').scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 md:gap-3 bg-[#B7D662] hover:bg-[#a5c550] text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full text-sm md:text-lg transition-all transform hover:scale-105 shadow-2xl"
            >
              <span>Explorează atracțiile</span>
              <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a 
              href="/pages/tickets" 
              className="flex items-center gap-2 md:gap-3 bg-white/20 backdrop-blur-sm border-2 border-white/50 hover:bg-white/30 text-white font-medium py-3 md:py-4 px-6 md:px-8 rounded-full text-sm md:text-lg transition-all"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
              <span>Cumpără bilet</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-scroll-down">
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Filters Section */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 py-4 md:py-6">
          {/* Search Bar */}
          <div className="mb-4 md:mb-6">
            <div className="relative max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Caută o atracție..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-full text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#B7D662] focus:border-transparent transition-all"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  whitespace-nowrap px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-sm md:text-base
                  transition-all duration-200
                  ${activeCategory === category.id 
                    ? 'bg-[#B7D662] text-white shadow-lg transform scale-105' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section id="attractions" className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-3xl h-96 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="space-y-16">
              {/* Atracții din Piatra Neamț */}
              {cityAttractions.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                    Atracții din <span className="text-[#B7D662]">Piatra Neamț</span>
                  </h2>
                  
                  {/* Primele 9 carduri mari */}
                  {visibleCityAttractions.slice(0, 9).length > 0 && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8">
                      {visibleCityAttractions.slice(0, 9).map((attraction, index) => (
                        <AttractionCard key={attraction.id} attraction={attraction} index={index} />
                      ))}
                    </div>
                  )}
                  
                  {/* Restul cardurilor compacte */}
                  {cityAttractions.length > 9 && (
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">Alte atracții din oraș</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        {visibleCityAttractions.slice(9).map((attraction) => (
                          <CompactAttractionCard key={attraction.id} attraction={attraction} />
                        ))}
                      </div>
                      
                      {visibleCount < cityAttractions.length && (
                        <div className="flex justify-center mt-8">
                          <button 
                            onClick={loadMore}
                            className="group flex items-center gap-2 bg-[#B7D662] hover:bg-[#a5c550] text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                          >
                            <span>Vezi mai multe</span>
                            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Atracții din județ */}
              {countyAttractions.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                    Atracții din <span className="text-[#B7D662]">Județul Neamț</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {visibleCountyAttractions.map((attraction) => (
                      <CompactAttractionCard key={attraction.id} attraction={attraction} />
                    ))}
                  </div>
                  
                  {visibleCount < countyAttractions.length && (
                    <div className="flex justify-center mt-8">
                      <button 
                        onClick={loadMore}
                        className="group flex items-center gap-2 bg-[#B7D662] hover:bg-[#a5c550] text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                      >
                        <span>Vezi mai multe</span>
                        <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* No results */}
              {filteredAttractions.length === 0 && (
                <div className="text-center py-12 md:py-20">
                  <svg className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Nu am găsit rezultate</h3>
                  <p className="text-sm md:text-base text-gray-600">Încearcă să cauți altceva sau schimbă categoria</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

{/* CTA Section - FIXED */}
<section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/puncte-de-interes/cta-puncte-interes.jpg"
      alt=""
      className="w-full h-full object-cover"
      loading="lazy"
      style={{ objectPosition: 'center' }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
  </div>
  
  {/* Content */}
  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    <div className="max-w-4xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-8 leading-tight">
        Începe <br />
        <span className="font-semibold italic text-[#B7D662]">aventura</span>
      </h2>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/80 mb-8 md:mb-12 max-w-3xl">
        Urcă în telegondolă și privește orașul de sus.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <a 
          href="/pages/tickets" 
          className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#B7D662] hover:bg-[#a5c550] text-white font-semibold py-3 md:py-4 px-6 md:px-10 rounded-full text-sm md:text-lg transition-all transform hover:scale-105 shadow-2xl"
        >
          <span>Cumpără bilet</span>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <a 
          href="/pages/despre-noi" 
          className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-medium py-3 md:py-4 px-6 md:px-10 rounded-full text-sm md:text-lg transition-all"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Află mai multe</span>
        </a>
      </div>
    </div>
  </div>
</section>
      
      <Footer />
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-scroll-down {
          animation: scroll-down 2s ease-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}