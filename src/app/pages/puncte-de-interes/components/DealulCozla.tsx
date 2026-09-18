'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function DealulCozla() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/dealul-cozla-hero.jpg"
            alt="Dealul Cozla Piatra Neamț"
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
              Muntele Cozla
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                <span>Rezervație naturală</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Împădurit din 1901</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>670m altitudine</span>
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
              Dominând partea de nord a orașului Piatra-Neamț, Muntele Cozla este unul dintre cele mai 
              reprezentative locuri naturale și culturale ale zonei. Parte din Munții Stânișoarei – 
              ultima treaptă a Carpaților Orientali – Cozla oferă panorame spectaculoase asupra 
              orașului și a întregii văi a Bistriței.
            </p>
          </div>

          {/* Istorie și Natură Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              O privire în trecut
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    Zona de la poalele muntelui a fost, timp de secole, vatra vechiului „Târg al Pietrei", 
                    locul unde Ștefan cel Mare a ales să ridice Curtea Domnească. Aici s-a aflat și o 
                    așezare cucuteniană situată la cea mai mare altitudine cunoscută pentru acest tip de 
                    locuire în Moldova.
                  </p>
                  <p className="mb-4">
                    La sfârșitul secolului al XIX-lea, Cozla a devenit o destinație renumită datorită 
                    izvoarelor sale minerale, apreciate și premiate la Expoziția Universală de la Paris din 1900.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Marea împădurire (1901-1904):</h3>
                  <p className="mb-4">
                    După catastrofa naturală din 1897, când ploile torențiale au provocat alunecări masive 
                    de teren, primarul Nicu Albu a inițiat o amplă campanie de împădurire. Sute de oameni 
                    au plantat brazi și pini aduși de la Sinaia, transformând Cozla în parcul care este astăzi.
                  </p>
                  <p className="italic text-gray-600">
                    „A fost greu, dar am învins natura" – Nicu Albu, 1904
                  </p>
                </div>
              </div>
              
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/dealul-cozla-1.jpg"
                  alt="Dealul Cozla - vedere panoramică"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Rezervații și Atracții */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Rezervații naturale și științifice
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Izvoarele */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#B7D662]/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Izvoarele tămăduitoare</h3>
                <p className="text-gray-700 text-sm">
                  Descoperite în 1882, apele minerale cloruro-sodice și sulfuroase au transformat 
                  orașul într-o stațiune balneară recunoscută oficial în 1889.
                </p>
              </div>

              {/* Rezervația paleontologică */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#B7D662]/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">„Acvariul de Piatră"</h3>
                <p className="text-gray-700 text-sm">
                  Primii pești fosili oligoceni din România au fost descoperiți aici între 1883–1885. 
                  Rezervație paleontologică declarată în 1971.
                </p>
              </div>

              {/* Căldările uriașilor */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#B7D662]/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Căldările uriașilor</h3>
                <p className="text-gray-700 text-sm">
                  Rezervație geologică unică: formațiuni numite „marmite eoliene", excavații rotunde 
                  săpate de vânt de-a lungul mileniilor în roca dură.
                </p>
              </div>
            </div>
          </div>

          {/* Cozla astăzi */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Cozla astăzi
            </h2>
            
            <div className="bg-white border-2 border-[#B7D662] rounded-2xl p-8">
              <p className="text-lg text-gray-700 mb-6 text-center">
                Muntele Cozla este principalul spațiu de recreere și aventură al orașului:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Punct de plecare pentru drumeții</p>
                    <p className="text-gray-600 text-sm">Trasee montane și belvedere</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Capătul superior al Telegondolei</p>
                    <p className="text-gray-600 text-sm">Acces rapid din oraș</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Telescaun și Pârtia Cozla</p>
                    <p className="text-gray-600 text-sm">Active iarna și vara</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Panoramă 360°</p>
                    <p className="text-gray-600 text-sm">Vedere către Ceahlău și lacul Bâtca Doamnei</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box Final */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
            <p className="text-xl md:text-2xl font-medium italic">
              „Un loc în care istoria, știința și natura se întâlnesc armonios – 
              Muntele Cozla este, fără îndoială, inima verde a municipiului Piatra-Neamț."
            </p>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Urcă pe Muntele Cozla
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Ia telegondola și descoperă „inima verde" a orașului Piatra-Neamț
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