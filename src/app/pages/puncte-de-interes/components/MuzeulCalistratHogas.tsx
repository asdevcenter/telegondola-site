'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function MuzeulCalistratHogas() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/hogas-hero.jpg"
            alt="Muzeul Memorial Calistrat Hogaș Piatra Neamț"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Muzeul Memorial „Calistrat Hogaș"
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Muzeu memorial</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>1880 (Muzeu din 1969)</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Str. Calistrat Hogaș nr. 1</span>
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
              Casa în care s-a fixat definitiv biografia și opera scriitorului Calistrat Hogaș (1847–1917). 
              Aici se păstrează mobilierul, biblioteca, manuscrise, fotografii și obiecte personale, 
              într-o locuință cu arhitectură specifică târgului moldovenesc de la sfârșitul secolului XIX.
            </p>
          </div>

          {/* Despre muzeu Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Despre muzeu
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    Calistrat Hogaș s-a stabilit la Piatra Neamț în 1869, a condus gimnaziul local și a legat 
                    aici viața de familie și scrisul. Casa a fost reconstruită în 1880 și a devenit muzeu memorial 
                    în 1969, prin donația Sidoniei C. Hogaș, fiica scriitorului.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Ce vezi la fața locului:</h3>
                  <ul className="space-y-2">
                    <li><strong>Biroul scriitorului</strong> cu obiecte originale și manuscrise</li>
                    <li><strong>Biblioteca</strong> și ediții princeps</li>
                    <li><strong>Fotografii de familie</strong>, acte și corespondență</li>
                    <li><strong>Ambientul casei târgovețe</strong> de la 1900, păstrat integral</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/hogas-1.jpg"
                  alt="Casa memorială Calistrat Hogaș"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Context biografic Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Context biografic
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="order-2 lg:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/hogas-2.jpg"
                  alt="Interior muzeu - biroul scriitorului"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    Calistrat Hogaș (1847–1917) a debutat la catedră în Piatra Neamț în 1869, revenind ca director 
                    între 1870–1871. S-a căsătorit aici și a rămas legat de oraș toată viața, iar scrierile sale 
                    despre drumurile prin Neamț și Ceahlău i-au fixat reputația.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Momente importante:</h3>
                  <ul className="space-y-2">
                    <li>Debut la catedră în Piatra Neamț (1869)</li>
                    <li>Director de gimnaziu (1870–1871)</li>
                    <li>Se căsătorește și se stabilește definitiv</li>
                    <li>Scrie „În munții Neamțului" și alte opere</li>
                    <li>Reînhumat în 1917 la Cimitirul Borzoghean</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Informații practice */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ce poți vedea</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Biroul de lucru cu manuscrise originale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Biblioteca personală și ediții princeps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Fotografii și documente de epocă</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Expoziții temporare și tur virtual</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informații practice</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Adresă</span>
                  <span className="font-bold text-gray-900">Str. C. Hogaș nr. 1</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Telefon</span>
                  <span className="font-bold text-gray-900">0746 060 154</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">An construcție</span>
                  <span className="font-bold text-gray-900">1880</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Muzeu din</span>
                  <span className="font-bold text-gray-900">1969</span>
                </div>
              </div>
            </div>
          </div>

          {/* Locație */}
          <div className="text-center mb-16">
            <a
              href="https://maps.app.goo.gl/7PJe4FJND4Roxz3C8"
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
              După vizita la muzeu
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Continuă explorarea orașului cu o plimbare prin centrul istoric, apoi urcă în telegondolă 
              pentru a vedea Piatra Neamț așa cum l-a descris Calistrat Hogaș
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