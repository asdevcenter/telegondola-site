'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function LaculBatcaDoamnei() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/lacul-batca-doamnei-hero.jpg"
            alt="Lacul Bâtca Doamnei Piatra Neamț"
            fill
            className="object-cover"
            priority
            quality={90}
            style={{ willChange: 'auto' }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Lacul Bâtca Doamnei
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                <span>Lac antropic</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Creat în 1962</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span>235 hectare</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Introducere */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              O bijuterie naturală la poalele orașului, unde liniștea apei se împletește cu imaginea 
              impunătoare a Muntelui Ceahlău și cu panorama orașului întins la poale. Lacul Bâtca Doamnei 
              este locul unde apele liniștite ale Bistriței se întâlnesc cu cerul înalt al Carpaților.
            </p>
          </div>

          {/* Despre lac Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              O bijuterie naturală la poalele orașului
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    Creat în 1962 prin bararea râului Bistrița, lacul are atât un rol de protecție împotriva 
                    viiturilor, cât și unul turistic și ecologic deosebit. Face parte din același sistem 
                    hidrografic cu Barajul Izvorul Muntelui–Bicaz.
                  </p>
                  <p className="mb-4">
                    Cu o suprafață de 235 de hectare și o adâncime de până la 15,5 metri, Bâtca Doamnei 
                    este una dintre cele mai mari acumulări artificiale din regiunea Moldovei.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Date tehnice:</h3>
                  <ul className="space-y-2">
                    <li>Lungime: <strong>3.200 metri</strong></li>
                    <li>Lățime maximă: <strong>1.050 metri</strong></li>
                    <li>Adâncime maximă: <strong>15,5 metri</strong></li>
                    <li>Altitudine: <strong>325 metri</strong></li>
                    <li>Suprafață totală: <strong>235 hectare</strong></li>
                  </ul>
                </div>
              </div>
              
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/lacul-batca-doamnei-1.jpg"
                  alt="Lacul Bâtca Doamnei - vedere panoramică"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Ecosistem și biodiversitate */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Ecosistem și biodiversitate
            </h2>
            
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Deși este un lac antropic, Bâtca Doamnei a devenit, în timp, un ecosistem viu, 
                  integrat în lanțul de lacuri care formează culoarul de migrație est-carpatic 
                  (împreună cu lacurile Vaduri și Pângărați). Această zonă este esențială pentru 
                  păstrarea biodiversității și a habitatelor naturale din estul Europei.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Păsări migratoare în sezonul rece:</h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl mb-2"></div>
                    <p className="font-semibold text-gray-900 text-sm">Corcodel cu gât negru</p>
                    <p className="text-gray-600 text-xs">Corcodel cu gât roșu</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl mb-2"></div>
                    <p className="font-semibold text-gray-900 text-sm">Ferestraș mare</p>
                    <p className="text-gray-600 text-xs">Ferestraș motat și mic</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl mb-2"></div>
                    <p className="font-semibold text-gray-900 text-sm">Cormoran mare</p>
                    <p className="text-gray-600 text-xs">Vizibil noiembrie–decembrie</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mt-6 italic">
                  Observarea păsărilor este o activitate tot mai populară aici, lacul devenind 
                  un punct de interes pentru ornitologi și fotografi de natură.
                </p>
              </div>
            </div>
          </div>

          {/* Legătura cu istoria + Lacul astăzi */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="order-2 lg:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/lacul-batca-doamnei-2.jpg"
                  alt="Lac și Ceahlău"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Legătura cu istoria
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                  <p className="mb-4">
                    În apropierea lacului se ridică Dealul Bâtca Doamnei, unde se află ruinele 
                    <strong> Cetății Dacice Petrodava</strong>, una dintre cele mai importante 
                    fortificații ale dacilor liberi din estul Carpaților.
                  </p>
                  <p className="mb-6">
                    Astfel, zona reunește într-un singur peisaj natura, istoria și spiritualitatea locului.
                  </p>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Lacul astăzi
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Un loc perfect pentru relaxare, plimbări pe mal, fotografie sau sporturi nautice ușoare. 
                    De pe malul nordic, privirea se deschide spre orașul Piatra-Neamț, iar spre vest, 
                    spre Ceahlău și munții Stânișoarei.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Activități */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Ce poți face la Bâtca Doamnei
            </h2>
            
            <div className="bg-white border-2 border-[#B7D662] rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Plimbări pe mal</p>
                    <p className="text-gray-600 text-sm">Trasee liniștite cu panoramă spre Ceahlău</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Fotografie de natură</p>
                    <p className="text-gray-600 text-sm">Peisaje spectaculoase în orice anotimp</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Observarea păsărilor</p>
                    <p className="text-gray-600 text-sm">Ornitologie și documentare în sezonul rece</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Sporturi nautice ușoare</p>
                    <p className="text-gray-600 text-sm">Caiac, paddle board în sezonul cald</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Relaxare</p>
                    <p className="text-gray-600 text-sm">Locuri liniștite pentru picnic și contemplație</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Vizitarea Cetății Petrodava</p>
                    <p className="text-gray-600 text-sm">Istorie dacică pe Dealul Bâtca Doamnei</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box Final */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
            <p className="text-xl md:text-2xl font-medium italic">
              „În zilele senine, culorile apei, muntele și cerul par să se contopească într-un tablou 
              natural care definește frumusețea Neamțului. Un simbol al echilibrului dintre om și natură."
            </p>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Privește lacul de sus
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Urcă în telegondolă și admiră întreaga panoramă a Lacului Bâtca Doamnei de la înălțime
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/tickets"
                className="bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all inline-block"
              >
                Cumpără bilet
              </Link>
              
              <Link
                href="/pages/puncte-de-interes"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all inline-block"
              >
                Descoperă alte atracții
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}