'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function LaculRosu() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/lacul-rosu-hero.jpg"
            alt="Lacul Roșu"
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
              Lacul Roșu
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Comoara naturală a Munților Hășmaș
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Introducere */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Situat la poalele Muntelui Hășmașul Mare, la o altitudine de aproape 1.000 de metri, 
              Lacul Roșu este unul dintre cele mai spectaculoase lacuri naturale din România. Format 
              în urma unei alunecări de teren din anul 1838, lacul este înconjurat de păduri de 
              conifere și stânci impunătoare, fiind poarta de intrare spre Cheile Bicazului.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              O destinație unde natura, legenda și liniștea se întâlnesc într-un tablou viu al 
              Carpaților Orientali.
            </p>
          </div>

          {/* Ce îl face unic */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Ce îl face unic
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/lacul-rosu-1.jpg"
                  alt="Lacul Roșu - trunchiuri în apă"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">Cel mai mare lac de baraj natural din țară</strong>, 
                    întins pe aproape 12 hectare. Din apă răsar trunchiuri de brazi pietrificați, 
                    martori tăcuți ai pădurii înghițite acum aproape două secole.
                  </p>
                  <p>
                    Numele său provine de la <strong className="text-gray-900">apele roșiatice</strong>, 
                    colorate de oxizii de fier din sol, dar și din legenda care spune că un sat întreg 
                    ar fi fost înghițit de munte.
                  </p>
                  <p>
                    În maghiară este cunoscut ca <strong className="text-gray-900">Gyilkos-tó</strong> 
                    („Lacul Ucigaș"), nume care păstrează vie povestea dramatică a formării sale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ce poți face aici */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Ce poți face aici
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Plimbări cu barca</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Navighează printre trunchiurile de copaci scufundați și admiră peisajul din 
                      perspectivă unică. Este o experiență liniștitoare și puțin surrealistă.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Drumeții montane</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Trasee spre Cheile Bicazului, Poiana Ghilcoș, Piatra Altarului sau Suhardul Mic. 
                      Pentru toate nivelurile de pregătire, de la plimbări liniștite la drumeții mai 
                      solicitante.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Fotografie de peisaj</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Dimineața, când ceața se ridică peste oglinda lacului, este momentul perfect 
                      pentru fotografii spectaculoase. Lumina joacă magic printre trunchiuri.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
                <Image
                  src="/puncte-de-interes/lacul-rosu-2.jpg"
                  alt="Lacul Roșu - activități"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Imagine panoramă */}
          <div className="mb-16">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/puncte-de-interes/lacul-rosu-3.jpg"
                alt="Lacul Roșu - panoramă"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Date tehnice și atmosferă */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Date tehnice și climat
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Dimensiuni</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Suprafață: 11,5 hectare</li>
                      <li>• Adâncime maximă: 10,5 metri</li>
                      <li>• Altitudine: 980 metri</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Locație</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Județul Harghita</li>
                      <li>• 26 km de Gheorgheni</li>
                      <li>• 30 km de Bicaz</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Climat și beneficii</p>
                    <p className="text-gray-700 leading-relaxed">
                      Zona Lacului Roșu are un <strong>microclimat terapeutic</strong>, benefic 
                      pentru relaxare, insomnii și stres. Aerul curat bogat în aerosoli de pădure 
                      și liniștea deplină fac din acest loc o destinație perfectă pentru refacere.
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Stațiunea Lacul Roșu</p>
                    <p className="text-gray-700 leading-relaxed">
                      Oferă numeroase opțiuni de cazare, gastronomie locală și activități în aer 
                      liber. Este punct de pornire ideal pentru explorarea Cheilor Bicazului și a 
                      Munților Hășmaș.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Informații practice */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Cum ajungi */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cum ajungi</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Lacul Roșu se află pe <strong>drumul național DN12C</strong>, care traversează 
                  Cheile Bicazului și leagă orașele Bicaz și Gheorgheni.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Din Piatra-Neamț:</p>
                  <p>Drum spre Bicaz, apoi DN12C prin Cheile Bicazului. Distanță totală aproximativ 
                  60 km, cu opriri recomandate pentru fotografii în chei.</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Din Gheorgheni:</p>
                  <p>26 km pe DN12C, traseu spectaculos prin munți.</p>
                </div>
                <p className="text-sm bg-white rounded-lg p-3">
                  <strong>Recomandare:</strong> Oprește-te și la Cheile Bicazului în drum spre lac 
                  pentru o experiență completă.
                </p>
              </div>
            </div>
            
            {/* Merită să știi */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Merită să știi</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Când să vizitezi</p>
                  <p>
                    Lacul este spectaculos în orice anotimp. Vara pentru plimbări cu barca, toamna 
                    pentru culorile pădurii reflectate în apă, iarna pentru peisajul înghețat.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Ce să iei cu tine</p>
                  <ul className="space-y-1">
                    <li>• Aparat foto (obligatoriu!)</li>
                    <li>• Îmbrăcăminte pe straturi, poate fi răcoros</li>
                    <li>• Încălțăminte comodă pentru drumeții</li>
                    <li>• Apă și gustări pentru trasee mai lungi</li>
                  </ul>
                </div>
                
                <p className="text-sm bg-white rounded-lg p-3">
                  <strong>Important:</strong> Respectă natura și nu lăsa urme în urmă. Păstrează 
                  frumusețea locului pentru generațiile viitoare.
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/TSJwB8FgHYJVRqF38"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Vezi locația pe Google Maps
            </a>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Natură, legendă și liniște
            </h2>
            <p className="text-xl text-white/80 mb-10">
              După ce explorezi Lacul Roșu și Cheile Bicazului, continuă aventura cu telegondola 
              Piatra-Neamț pentru o altă perspectivă spectaculoasă asupra regiunii
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/tickets"
                className="bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all inline-block"
              >
                Cumpără bilet telegondolă
              </Link>
              
              <Link
                href="/pages/puncte-de-interes"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all inline-block"
              >
                Vezi alte puncte de interes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}