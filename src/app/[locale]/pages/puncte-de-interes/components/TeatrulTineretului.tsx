'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function TeatrulTineretului() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/teatrul-tineretului-hero.jpg"
            alt="Teatrul Tineretului Piatra Neamț"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Teatrul Tineretului
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                <span>Teatru profesionist</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Din 1958</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Centrul istoric</span>
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
              Instituția care a lansat generații întregi de artiști și a pus Piatra Neamț pe harta teatrului românesc. 
              Clădirea actuală a fost ridicată între 1929–1947 după planurile arhitectului Roger Bolomey și 
              funcționează ca teatru din 1959.
            </p>
          </div>

          {/* Despre începuturi Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Identitate și misiune
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    Activitatea profesionistă debutează în 1958 pe scena Sălii Roxy, cu spectacolul inaugural 
                    „Vicleniile lui Scapino" (regia David Esrig). În 1961, devine teatru independent, iar în 1967, 
                    după turneul în R.F.G., primește numele care i-a definit identitatea: Teatrul Tineretului.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Misiunea teatrului:</h3>
                  <ul className="space-y-2">
                    <li><strong>Spectacole curajoase</strong> și relevante</li>
                    <li><strong>Teatru de producție</strong> și experiment</li>
                    <li><strong>Programe pentru tineri</strong> și debutanți</li>
                    <li><strong>Proiecte interdisciplinare</strong></li>
                    <li><strong>Colaborări internaționale</strong></li>
                  </ul>
                </div>
              </div>
              
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/teatrul-tineretului-1.jpg"
                  alt="Scenă Teatrul Tineretului"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Clădirea și patrimoniu Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Clădirea și patrimoniu
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="order-2 lg:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/teatrul-tineretului-2.jpg"
                  alt="Clădirea Teatrului Tineretului"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    Edificiul – finanțat din fonduri publice locale – a fost gândit din start pentru uz teatral 
                    și se află în centrul orașului, lângă Curtea Domnească. Din 1967, instituția folosește semnul 
                    grafic „2T", devenit logo oficial în 2007.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Regizori și colaboratori:</h3>
                  <ul className="space-y-2">
                    <li>David Esrig, Ion Cojar</li>
                    <li>Cătălina Buzoianu, Silviu Purcărete</li>
                    <li>Alexandru Dabija, Radu Afrim</li>
                    <li>Gianina Cărbunariu (director 2020-2024)</li>
                    <li>Andrei Merchea (director din feb. 2025)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Repere istorice */}
          <div className="bg-[#B7D662]/10 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Repere istorice</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Evenimente importante:</h4>
                <ul className="space-y-2">
                  <li>• <strong>1929-1947:</strong> Construcția clădirii</li>
                  <li>• <strong>1958:</strong> Primul spectacol profesionist</li>
                  <li>• <strong>1961:</strong> Devine teatru independent</li>
                  <li>• <strong>1967:</strong> Primește numele „Teatrul Tineretului"</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Emblema „2T":</h4>
                <ul className="space-y-2">
                  <li>• Semnul grafic din 1967</li>
                  <li>• Reinterpretare în 1975</li>
                  <li>• Logo oficial din 2007</li>
                  <li>• Înregistrare OSIM 2016</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Informații practice */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Locație</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>Centrul istoric, lângă Curtea Domnească și Biserica Sf. Ioan Domnesc</span>
                </p>
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>La câteva minute de principalele muzee</span>
                </p>
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Acces ușor din toate zonele orașului</span>
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                  <span>Spectacole de seară și matinee</span>
                </p>
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span>Consultă programul online pentru repertoriu</span>
                </p>
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Bilete disponibile online și la casa de bilete</span>
                </p>
              </div>
            </div>
          </div>

          {/* Locație */}
          <div className="text-center mb-16">
            <a
              href="https://maps.app.goo.gl/uyztSL9oLsQ7a3KB6"
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
              Integrează teatrul în vizită
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Teatrul se află la câteva minute de muzeele din centrul istoric. Poți combina un spectacol 
              de seară cu un tur diurn la Curtea Domnească și o urcare cu Telegondola Piatra Neamț 
              pentru panorama orașului
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/tickets"
                className="bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all inline-block"
              >
                Rezervă bilet la telegondolă
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