'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function RezervatiaDeZimbri() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/rezervatia-zimbri-hero.jpg"
            alt="Rezervația de Zimbri Dragoș-Vodă"
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
              Rezervația de Zimbri<br/>„Dragoș-Vodă"
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Întâlnire cu uriașii Carpaților
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
              Aici vezi, în habitat controlat și tot mai des în sălbăticie, impunătorul 
              <strong> zimbru (Bison bonasus)</strong> – simbol al Carpaților, readus cu succes 
              în Neamț. Cadrul natural este generos: 11.500 hectare de păduri și poieni la nord 
              de Vânători-Neamț, cu urși, cerbi și căprioare.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              Vii cu răbdare și pleci cu povești.
            </p>
          </div>

          {/* Cum se vizitează și Experiențe */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cum se vizitează</h2>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                      <h3 className="font-bold text-gray-900 mb-2">Țarcul de vizitare (~4 ha)</h3>
                      <p className="text-gray-700 text-sm">
                        Sigur pentru familii cu copii. Vezi de aproape zimbri hrănindu-se și 
                        odihnindu-se.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                      <h3 className="font-bold text-gray-900 mb-2">Țarcul de aclimatizare (~180 ha)</h3>
                      <p className="text-gray-700 text-sm">
                        Ture ghidate și observații de la distanță. Șanse reale să zărești zimbri 
                        care hălăduiesc prin pădure.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Experiențe</h2>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Observare faună la răsărit/apus (lumina blândă, animale active)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Plimbare prin poieni cu iazuri (Zimbrilor, Cerbilor, Căpriorilor)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Foto natură: linii de copaci, aburi de dimineață, siluete de zimbri</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/rezervatia-zimbri-1.jpg"
                  alt="Zimbri în Rezervația Dragoș-Vodă"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Informații practice */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Acces & Când */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Acces & Când să vii</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Locație</p>
                  <p className="text-sm">La nord de DN15B (Vânători-Neamț ↔ Pipirig), aproape de 
                  Târgu Neamț. Urmează indicatoarele „Rezervația de Zimbri / Dragoș-Vodă".</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Când să vii</p>
                  <p className="text-sm"><strong>Mai–iunie:</strong> verde crud, pui de animale</p>
                  <p className="text-sm"><strong>Septembrie–octombrie:</strong> culori de toamnă</p>
                  <p className="text-sm"><strong>Program:</strong> dimineața devreme sau spre seară</p>
                </div>
              </div>
            </div>
            
            {/* Reguli */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Reguli simple</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Păstrează distanță mare (minimum 50 m la animalele libere)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Nu hrăni animalele, nu folosi drone, vorbește încet</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Încălțăminte adecvată, binoclu, apă</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Iarna – îmbrăcăminte călduroasă</span>
                </p>
              </div>
            </div>
          </div>

          {/* În apropiere */}
          <div className="bg-white border-2 border-[#B7D662] rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              În apropiere (1 zi plină în Ținutul Neamțului)
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Mănăstiri</h4>
                <p className="text-gray-600 text-sm">Sihăstria, Sihla, Secu – liniște și istorie</p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Cetatea Neamț</h4>
                <p className="text-gray-600 text-sm">+ Casa Ion Creangă (Humulești)</p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Tură scenică</h4>
                <p className="text-gray-600 text-sm">Cheile Bicazului & Lacul Roșu (DN12C)</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/TXFE3a1zNvkKrQGs7"
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
              Renașterea unei specii legendare
            </h2>
            <p className="text-xl text-white/80 mb-10">
              După ce întâlnești uriașii Carpaților, explorează regiunea din altă perspectivă cu 
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