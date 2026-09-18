'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function ManastireaAgapia() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/manastirea-agapia-hero.jpg"
            alt="Mănăstirea Agapia"
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
              Mănăstirea Agapia
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Ctitorie 1641–1643</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>300–400 maici</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                <span>Pictată de Nicolae Grigorescu</span>
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
              Mănăstirea Agapia este una dintre cele mai mari mănăstiri de maici din România, 
              ctitorie a hatmanului Gavriil Coci (1641–1643). Este celebră pentru picturile murale 
              realizate de Nicolae Grigorescu între 1858–1861, considerate o capodoperă a artei 
              românești.
            </p>
          </div>

          {/* Conținut principal */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/manastirea-agapia-1.jpg"
                  alt="Mănăstirea Agapia - ansamblu"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Repere esențiale</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Ctitorie:</p>
                    <p className="text-gray-700">Hatmanul Gavriil Coci, fratele lui Vasile Lupu (1641–1643)</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Hram:</p>
                    <p className="text-gray-700">Sfinții Arhangheli Mihail și Gavriil (8 noiembrie)</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Obște:</p>
                    <p className="text-gray-700">Mănăstire de maici cu ≈300–400 maici, una dintre cele mai mari din România</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Arhitectură:</p>
                    <p className="text-gray-700">Plan triconc, ziduri din piatră și cărămidă; stil neoclasic cu turlă octogonală; incintă în formă de careu cu cerdacuri și turn-clopotniță din 1823</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">De văzut:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Biserica „Sf. Voievozi" – pictată de Nicolae Grigorescu (1858–1861)</li>
                      <li>Paraclisul „Nașterea Maicii Domnului" (1847)</li>
                      <li>Bisericile de lemn „Sf. Ioan Bogoslov" (1821) și „Adormirea Maicii Domnului" (1780)</li>
                      <li>Casa memorială Alexandru Vlahuță</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Personalități:</p>
                    <p className="text-gray-700">Mitropolitul Veniamin Costache, Nicolae Grigorescu, Ion Creangă, Alexandru Vlahuță, Calistrat Hogaș</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Educație și cultură */}
          <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Viață monahală și educație</h3>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Mănăstirea include <strong>Seminarul Teologic Monahal „Sf. Cuvioasă Parascheva"</strong> – 
              singurul seminar de fete din Moldova, continuând tradiția de educație și spiritualitate 
              a așezământului.
            </p>
          </div>

          {/* Contact și Locație */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Contact */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact și informații</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Adresă</p>
                    <p className="text-gray-600 text-sm">Valea pârâului Agapia</p>
                    <p className="text-gray-600 text-sm">Comuna Agapia, jud. Neamț</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Website</p>
                    <a href="https://www.agapia.mmb.ro" target="_blank" rel="noopener noreferrer" className="text-[#B7D662] hover:underline text-sm">
                      agapia.mmb.ro
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Statut</p>
                    <p className="text-gray-600 text-sm">Monument istoric (LMI NT-II-a-A-10627)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cum ajungi */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cum ajungi</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Distanță</p>
                    <p className="text-gray-600 text-sm">≈ 9 km de Târgu Neamț</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Locație</p>
                    <p className="text-gray-600 text-sm">Valea pârâului Agapia</p>
                    <p className="text-gray-600 text-sm">Cadru natural pitoresc</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Proximitate</p>
                    <p className="text-gray-600 text-sm">În apropiere: Mănăstirea Neamț și Secu</p>
                    <p className="text-gray-600 text-sm">Circuit mănăstiresc Moldova</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/2d4XHh2hCdzCfY8B6"
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
              Artă și spiritualitate moldovenească
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Admiră capodopera lui Nicolae Grigorescu și continuă explorarea regiunii cu 
              telegondola Piatra-Neamț
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
                Vezi puncte de interes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}