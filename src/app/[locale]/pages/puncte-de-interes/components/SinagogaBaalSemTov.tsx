'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function SinagogaBaalSemTov() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/sinagoga-hero.jpg"
            alt="Sinagoga de lemn Baal Șem Tov Piatra Neamț"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Sinagoga de lemn „Baal Șem Tov"
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Monument istoric</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>1766</span>
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
              Aflată pe strada Dimitrie Ernici nr. 7, în centrul istoric al orașului Piatra Neamț, 
              Sinagoga de lemn Baal Șem Tov este unul dintre cele mai vechi și mai valoroase monumente 
              de cult mozaic din Europa de Est. Construită în 1766, pe locul unei sinagogi mai vechi ce 
              data dinainte de 1497, aceasta este considerată cea mai veche sinagogă păstrată integral în România.
            </p>
          </div>

          {/* Arhitectură și detalii Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Arhitectură și detalii
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    Edificiul este realizat integral din bârne masive de lemn, așezate pe o temelie înaltă de piatră. 
                    Intrarea se face coborând câteva trepte, un detaliu specific sinagogilor tradiționale din 
                    Europa Centrală și de Est.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Elemente valoroase:</h3>
                  <ul className="space-y-2">
                    <li><strong>Urna Sfântă</strong> (Aron ha-Kodeș) sculptată în 1835</li>
                    <li><strong>Perdeaua rituală</strong> din 1767 cu inscripții ebraice</li>
                    <li><strong>Galeriile interioare</strong> pentru femei și copii</li>
                    <li><strong>Structura din lemn</strong> păstrată integral din 1766</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/sinagoga-1.jpg"
                  alt="Exteriorul Sinagogii de lemn"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Istorie și restaurări Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Istorie și restaurări
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="order-2 lg:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/sinagoga-2.jpg"
                  alt="Interior sinagogă cu Urna Sfântă"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    Sinagoga actuală a fost construită în baza unui hrisov semnat la 19 iulie 1766 de 
                    domnitorul Grigore al III-lea Ghica. În decursul timpului, a trecut prin mai multe 
                    etape de restaurare, cea mai recentă fiind între 2004–2009.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Etape importante:</h3>
                  <ul className="space-y-2">
                    <li>Construcție: 1766, cu hrisov domnesc</li>
                    <li>Restaurări: 1826, 1872, 1922, 1928</li>
                    <li>Renovare majoră: 2004-2009</li>
                    <li>Sprijin: World Monuments Fund, New York</li>
                    <li>Monument funcțional și vizitabil</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Date tehnice și arhitectură */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Arhitectură tradițională</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Bârne masive de lemn pe temelie de piatră</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Urna Sfântă sculptată și aurită din 1835</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Perdea rituală din 1767 cu inscripții</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Stil est-european tradițional</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informații esențiale</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">An construcție</span>
                  <span className="font-bold text-gray-900">1766</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Ctitor</span>
                  <span className="font-bold text-gray-900">Comunitatea evreiască</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Material</span>
                  <span className="font-bold text-gray-900">Lemn, piatră</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Status</span>
                  <span className="font-bold text-gray-900">Cea mai veche din România</span>
                </div>
              </div>
            </div>
          </div>

          {/* Locație simplă */}
          <div className="text-center mb-16">
            <a
              href="https://maps.app.goo.gl/41EAZcG47jxzQ8ES8"
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
              După vizita la sinagogă
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Descoperă Curtea Domnească și Turnul lui Ștefan cel Mare, aflate la doar câteva minute de mers pe jos, 
              apoi urcă în telegondolă pentru a vedea orașul de sus
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