'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function CurteaDomneasca() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
 {/* Hero Section */}
<section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
  <div className="absolute inset-0">
    <Image
      src="/puncte-de-interes/curtea-domneasca-hero.jpg"
      alt="Curtea Domnească Piatra Neamț"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/40"></div>
  </div>
  
  <div className="relative h-full flex items-center justify-center text-center">
    <div className="max-w-4xl px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
        Curtea Domnească și Turnul lui Ștefan cel Mare
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
          <span>1497-1499</span>
        </span>
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Centrul orașului</span>
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
              În centrul orașului Piatra Neamț se află unul dintre cele mai valoroase ansambluri medievale din România. 
              Construită între 1497-1499 în timpul domniei lui Ștefan cel Mare, Curtea Domnească a fost 
              reședință domnească, centru administrativ și loc de apărare.
            </p>
          </div>

          {/* Curtea Domnească Section cu imagini */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Curtea Domnească - Reședința voievodală
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    Complexul a fost ridicat între 1497-1499 pe o terasă a râului Bistrița. 
                    Inițial cuprindea palatul domnesc, biserica voievodală și anexe gospodărești, 
                    toate înconjurate de ziduri fortificate.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Ce s-a păstrat până astăzi:</h3>
                  <ul className="space-y-2">
                    <li><strong>Biserica "Nașterea Sf. Ioan Botezătorul"</strong> (1497-1498)</li>
                    <li><strong>Turnul lui Ștefan cel Mare</strong> (1499)</li>
                 
                    <li>Conturul fortificațiilor originale în piațetă</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/curtea-domneasca-1.jpg"
                  alt="Curtea Domnească vedere generală"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Galerie 2 imagini */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/curtea-domneasca-2.jpg"
                  alt="Biserica Domnească"
                  fill
                  className="object-cover"
                />
     
              </div>
              
              <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/curtea-domneasca-3.jpg"
                  alt="Muzeul de Arheologie"
                  fill
                  className="object-cover"
                />
             
              </div>
            </div>
          </div>

          {/* Turnul Section cu imagini */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Turnul lui Ștefan cel Mare
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="order-2 lg:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/turnul-stefan-1.jpg"
                  alt="Turnul lui Ștefan cel Mare"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    Construit în 1499, imediat după victoria de la Codrii Cosminului. 
                    Realizat din piatră brută și cărămidă, se înalță la 19 metri cu patru contraforturi.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Funcții de-a lungul timpului:</h3>
                  <ul className="space-y-2">
                    <li>Clopotniță pentru biserică</li>
                    <li>Loc de refugiu în caz de pericol</li>
                    <li>Punct strategic de observație</li>
                    <li>Post pentru "paznicul de foc" al orașului</li>
                    <li>Din 1861 - turn cu orologiu public</li>
                  </ul>
                 
                </div>
              </div>
            </div>

            {/* Galerie 2 imagini */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/turnul-stefan-2.jpg"
                  alt="Detaliu arhitectural turn"
                  fill
                  className="object-cover"
                />
          
              </div>
              
              <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/turnul-stefan-3.jpg"
                  alt="Vedere panoramică"
                  fill
                  className="object-cover"
                />
        
              </div>
            </div>
          </div>

          {/* Date tehnice și arhitectură */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Arhitectură moldovenească</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Piatră brută alternată cu cărămidă</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Discuri ceramice smălțuite pe fațade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Ancadramente sculptate în piatră</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Stil moldovenesc cu influențe gotice</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informații esențiale</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Ctitor</span>
                  <span className="font-bold text-gray-900">Ștefan cel Mare</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Perioada</span>
                  <span className="font-bold text-gray-900">1497-1499</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Înălțime turn</span>
                  <span className="font-bold text-gray-900">19 metri</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Monument</span>
                  <span className="font-bold text-gray-900">Importanță națională</span>
                </div>
              </div>
            </div>
          </div>
{/* Locație simplă */}
<div className="text-center mb-16">
  <a
    href="https://maps.app.goo.gl/25uXskKkjoXUNJS1A"
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

      {/* CTA Final - Mai clar */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              După vizita la Curtea Domnească
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Urcă în telegondolă pentru a vedea de sus întregul oraș și locul unde istoria Moldovei își are rădăcinile
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