'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function GradinaPublicaNicuAlbu() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/gradina-nicu-albu-hero.jpg"
            alt="Grădina Publică Nicu Albu Piatra Neamț"
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
              Grădina Publică „Nicu Albu"
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>La baza Dealului Cozla</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Inaugurată 2025</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Spațiu multifuncțional</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Un nou spațiu verde în inima orașului
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cea mai nouă oază de relaxare din Piatra-Neamț, Grădina Publică „Nicu Albu", 
              redă orașului un loc cu valoare istorică și simbolică — fostul amplasament al 
              grădinii zoologice. Situată la poalele Dealului Cozla, grădina leagă zona centrală 
              a orașului de traseele montane, devenind un spațiu deschis comunității, artei și naturii.
            </p>
          </div>

          {/* Conținut principal */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Un loc al memoriei și al renașterii
                </h3>
                <p className="mb-6">
                  Proiectul de reconversie urbană îmbină respectul pentru trecut cu tehnologia 
                  și designul contemporan, păstrând amintirea vechii grădini zoologice prin 
                  elemente arhitecturale reinterpretate:
                </p>
                
                <div className="bg-[#B7D662]/10 rounded-xl p-6 mb-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Fosta cușcă a ursului</strong> a fost transformată într-o instalație 
                        artistică din metal – o siluetă stilizată care amintește de istoria locului
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Împrejmuirea fostei cuști a leului</strong> delimitează acum o 
                        platformă de expoziții temporare
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Lacul central</strong> a fost remodelat într-o oglindă de apă care 
                        reflectă vegetația și lumina, punctul de atracție principal al parcului
                      </span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  O moștenire dedicată lui Nicu Albu
                </h3>
                <p>
                  Grădina poartă numele celui mai vizionar primar al orașului, <strong>Nicu N. Albu 
                  (1853–1908)</strong> – primar, prefect, senator și unul dintre marii modernizatori 
                  ai Piatrei-Neamț. La începutul secolului XX a pus bazele modernizării orașului: 
                  rețele de apă și canalizare, urbanizarea Cozlei, primele școli moderne și 
                  împădurirea muntelui.
                </p>
              </div>
              
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/gradina-nicu-albu-1.jpg"
                  alt="Grădina Publică Nicu Albu - vedere"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Facilități */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Arhitectură, natură și comunitate
            </h2>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg text-gray-700 text-center mb-10">
                Noua grădină publică este concepută ca un spațiu multifuncțional, unde natura, 
                cultura și socializarea se completează firesc:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Amfiteatru în aer liber</h4>
                <p className="text-gray-600 text-sm">
                  Pentru concerte estivale, proiecții de film și evenimente culturale
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Zone pentru ateliere</h4>
                <p className="text-gray-600 text-sm">
                  Spații dedicate creației și expoziții de artă
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Sera urbană</h4>
                <p className="text-gray-600 text-sm">
                  Combinație între cafenea, florărie și spațiu de relaxare
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Locuri de joacă moderne</h4>
                <p className="text-gray-600 text-sm">
                  Pentru copii, adaptate pe grupe de vârstă
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Zone de recreere</h4>
                <p className="text-gray-600 text-sm">
                  Mese pentru șah și bănci pentru lectură
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Iluminat arhitectural</h4>
                <p className="text-gray-600 text-sm">
                  Transformă seara grădina într-un spectacol vizual
                </p>
              </div>
            </div>
          </div>

          {/* Quote Final */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center mb-8">
            <p className="text-xl md:text-2xl font-medium italic">
              „În umbra Cozlei, acolo unde odinioară răsuna grădina zoologică, renaște astăzi 
              o grădină a oamenilor — un loc al bucuriei, al artei și al memoriei."
            </p>
          </div>

          {/* Locație */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/RdR1gYhjx5LNvNiP9"
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
              Un nou punct de întâlnire
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Grădina Publică „Nicu Albu" este un spațiu viu, dedicat relaxării, creației și 
              evenimentelor culturale. Locul unde trecutul se întâlnește cu viitorul.
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