'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function LaculIzvorulMuntelui() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/lacul-izvorul-muntelui-hero.jpg"
            alt="Lacul Izvorul Muntelui"
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
              Lacul Izvorul Muntelui
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              „Marea dintre munți"
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Introducere */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Cel mai mare lac de acumulare din România montană: aproximativ 32,6 km² întins pe 
              35 de kilometri, cu panorame largi și Ceahlăul ca fundal permanent. Barajul Bicaz 
              impresionează cu cei 127 metri înălțime, iar coronamentul oferă serpentine fotogenice 
              pe DN15.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Locul în care muntele, apa și povestea se întâlnesc. Vii pentru peisaj, rămâi pentru 
              liniște.
            </p>
          </div>

          {/* Ce poți face */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Ce poți face
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/lacul-izvorul-muntelui-1.jpg"
                  alt="Lacul Izvorul Muntelui - activități"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Pe apă</h3>
                    <p className="text-gray-700">
                      Croaziere din Portul Bicaz spre viaductul de la Poiana Largului, caiac și SUP 
                      dimineața când e liniște, pescuit cu permis (păstrăv, clean, scobar).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Pe uscat</h3>
                    <p className="text-gray-700">
                      Drumeții spre belvedere, urcări în Ceahlău din Durău, ciclism pe DN15 cu pauze 
                      în golfuri și sate.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Puncte de fotografiat</h3>
                    <p className="text-gray-700">
                      Coronamentul barajului dimineața, golfurile liniștite la Izvorul Alb, apus din 
                      Portul Bicaz cu Ceahlăul pe fundal, viaductul Poiana Largului.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Informații practice */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Cum ajungi & Când */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cum ajungi</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Auto:</strong> DN15 Piatra-Neamț → Bicaz → pe lângă lac până la 
                    Poiana Largului. Din Transilvania: DN12C prin Cheile Bicazului.</p>
                    <p><strong>Tren:</strong> până la Gara Bicaz, apoi 5 minute cu taxiul la 
                    baraj/port.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Când e mai frumos</h3>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <p><strong>Mai–iunie:</strong> verde crud, ape pline</p>
                    <p><strong>Iulie–august:</strong> sezonul croazierelor</p>
                    <p><strong>Septembrie–octombrie:</strong> culori de toamnă, vizibilitate 
                    excelentă</p>
                    <p><strong>Iarna:</strong> peisaj spectaculos, activități reduse pe apă</p>
                  </div>
                </div>
              </div>
              
              {/* Imagine 2 */}
              <div className="relative h-[400px] lg:h-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/lacul-izvorul-muntelui-2.jpg"
                  alt="Lacul Izvorul Muntelui - baraj"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sfaturi și În apropiere */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Sfaturi utile */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Sfaturi utile</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm">• Lacul e arie protejată – nu lăsa urme, nu hrăni fauna</p>
                  <p className="text-sm">• Vântul de prânz ridică valuri – ieși pe apă dimineața</p>
                  <p className="text-sm">• Nivelul variază; unele țărmuri pot fi nămoloase</p>
                  <p className="text-sm">• Vara e trafic la baraj – pornește devreme</p>
                  <p className="text-sm">• Pentru pescuit: informează-te local despre permis</p>
                </div>
              </div>
              
              {/* În apropiere */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">În apropiere</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm"><strong>Cheile Bicazului & Lacul Roșu</strong><br/>
                  Drum scenic pe DN12C</p>
                  
                  <p className="text-sm"><strong>Masivul Ceahlău</strong><br/>
                  Durău, Cascada Duruitoarea, vârful Toaca</p>
                  
                  <p className="text-sm"><strong>Mănăstiri</strong><br/>
                  Secu, Sihăstria, Sihla din Ținutul Neamțului</p>
                </div>
              </div>
            </div>
          </div>

          {/* Itinerar propus */}
          <div className="mb-16">
            <div className="bg-white border-2 border-[#B7D662] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Itinerar propus (o zi lejeră)
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#B7D662] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    1
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">Dimineață</p>
                  <p className="text-gray-600 text-sm">Croazieră din Portul Bicaz → viaduct</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#B7D662] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    2
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">Prânz</p>
                  <p className="text-gray-600 text-sm">Restaurant cu vedere (Potoci/Izvorul Muntelui)</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#B7D662] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    3
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">După-amiază</p>
                  <p className="text-gray-600 text-sm">Coronament baraj + plimbare DN15</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#B7D662] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    4
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">Seară</p>
                  <p className="text-gray-600 text-sm">Apus pe ponton cu Ceahlăul</p>
                </div>
              </div>
            </div>
          </div>

          {/* Știați că */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-16">
            <h3 className="text-2xl font-bold mb-4 text-center">Știați că...</h3>
            <div className="space-y-3 max-w-3xl mx-auto">
              <p>
                Hidrocentrala „Dimitrie Leonida" (Stejaru) are 210 MW; tunelul de aducțiune 
                străpunge muntele aproximativ 4,7 km.
              </p>
              <p>
                Complexul a fost construit între 1950–1960. Există o cruce comemorativă la baraj, 
                în amintirea celor care au suferit pe șantier. Vizitează cu respect.
              </p>
            </div>
          </div>

          {/* Quote final */}
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-700 italic font-medium">
              „Vii pentru peisaj, rămâi pentru liniște."
            </p>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Marea dintre munți te așteaptă
            </h2>
            <p className="text-xl text-white/80 mb-10">
              După ce explorezi Lacul Izvorul Muntelui, continuă descoperirea regiunii cu 
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