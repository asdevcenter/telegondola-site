'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function CasaIonCreanga() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/casa-ion-creanga-hero.jpg"
            alt="Casa memorială Ion Creangă"
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
              Casa memorială<br/>„Ion Creangă"
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Locul unde s-au născut poveștile
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
              În Humulești, la marginea Târgului Neamț, se află casa modestă în care s-a născut 
              și a copilărit Ion Creangă, unul dintre cei mai îndrăgiți povestitori români. 
              Ridicată în 1833 din bârne de lemn și acoperită cu draniță, casa a fost păstrată cu 
              grijă de urmașii familiei până în 1959, iar astăzi este muzeu memorial vizitat anual 
              de zeci de mii de oameni.
            </p>
          </div>

          {/* Universul copilăriei */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Universul copilăriei lui Nică
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/casa-ion-creanga-1.jpg"
                  alt="Casa Ion Creangă - interior"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <p className="text-gray-700 leading-relaxed mb-6">
                  În cele două camere și în tinda scundă poți descoperi universul copilăriei lui 
                  Nică: lada de zestre a Smarandei, covata pentru copil, roata de tors, vatra și 
                  prichiciul de care se ținea când învăța să meargă.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Pe masă se află bustul scriitorului și ceaslovul după care a învățat să citească, 
                  iar în cămară poți vedea locul unde a ascuns celebra pupăză din tei.
                </p>
              </div>
            </div>
          </div>

          {/* Parcul tematic */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Parcul tematic „Ion Creangă"
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Lângă casă se întinde Parcul tematic „Ion Creangă", unde prind viață personajele 
                  din poveștile sale – capra cu trei iezi, ursul păcălit de vulpe, Smărăndița și 
                  Moș Chiorpec.
                </p>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Un loc plin de farmec, în care realitatea și copilăria se întâlnesc pentru ca 
                  vizitatorii de toate vârstele să redescopere bucuria de a visa.
                </p>
              </div>
              
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
                <Image
                  src="/puncte-de-interes/casa-ion-creanga-2.jpg"
                  alt="Parcul tematic Ion Creangă"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Ce vei vedea */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Ce vei vedea
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900">În casă:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Lada de zestre a Smarandei</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Covata pentru copil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Roata de tors și vatra</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Prichiciul și ceaslovul</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Locul unde a ascuns pupăza din tei</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900">În parc:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Capra cu trei iezi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Ursul păcălit de vulpe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Smărăndița</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Moș Chiorpec</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Alte personaje îndrăgite</span>
                    </li>
                  </ul>
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
                  <strong>Humulești</strong> se află la marginea <strong>Târgului Neamț</strong>, 
                  foarte ușor accesibil cu mașina sau pe jos din centrul orașului.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Distanțe:</p>
                  <p className="text-sm">• De la Târgu Neamț: ~3 km</p>
                  <p className="text-sm">• De la Cetatea Neamț: ~15 km</p>
                  <p className="text-sm">• De la Piatra-Neamț: ~40 km</p>
                </div>
                <p className="text-sm">
                  Urmează indicatoarele „Casa Ion Creangă" sau „Muzeul Humulești" – sunt clare 
                  și bine amplasate.
                </p>
              </div>
            </div>
            
            {/* Perfect pentru */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect pentru</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Familii cu copii</h4>
                  <p className="text-sm">
                    Parcul tematic face poveștile vii și captează imaginația copiilor
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Iubitori de literatură</h4>
                  <p className="text-sm">
                    Descoperi originile unuia dintre cei mai mari scriitori români
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Circuit cultural</h4>
                  <p className="text-sm">
                    Se combină perfect cu Cetatea Neamț și mănăstirile din zonă
                  </p>
                </div>
                
                <p className="text-sm bg-white rounded-lg p-3 mt-4">
                  <strong>Durată vizită:</strong> 1-2 ore (casă + parc)
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/jec3Q9ZCzWixBsbS6"
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
              Unde s-au născut poveștile
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Redescoperă bucuria copilăriei și continuă explorarea regiunii cu telegondola 
              Piatra-Neamț
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