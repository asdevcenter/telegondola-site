'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function ParculCentral() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/parcul-central-hero.jpg"
            alt="Parcul Central Piatra Neamț"
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
              Parcul Central
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Parcul Tineretului / Parcul Ștefan cel Mare
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Centrul orașului</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Loc de întâlnire</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Deschis permanent</span>
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
              Inima verde a orașului
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Parcul Central este spațiul unde viața orașului se întâlnește cu istoria, cultura și 
              relaxarea de zi cu zi. Cunoscut și sub denumirile de „Parcul Tineretului" și 
              „Parcul Ștefan cel Mare", acest loc este una dintre cele mai îndrăgite zone de promenadă 
              din oraș.
            </p>
          </div>

          {/* Conținut principal */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/parcul-central-1.jpg"
                  alt="Parcul Central - vedere"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Între istorie și prezent</h3>
                <p className="mb-6">
                  Aflat în imediata vecinătate a Curții Domnești și a Turnului lui Ștefan cel Mare, 
                  parcul marchează legătura simbolică dintre trecutul domnesc al Moldovei și atmosfera 
                  modernă a orașului contemporan. De aici se pot admira, într-o singură privire, 
                  cele mai reprezentative monumente din centrul vechi al Pietrei Neamț.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Puncte de reper:</h3>
                <ul className="space-y-2">
                  <li>Teatrul Tineretului</li>
                  <li>Hotel Ceahlău</li>
                  <li>Statuia lui Ștefan cel Mare</li>
                  <li>Curtea Domnească</li>
                  <li>Turnul lui Ștefan cel Mare</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Evenimente */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Evenimente și atmosferă
            </h2>
            
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <p className="text-gray-700 mb-8 text-center text-lg">
                De-a lungul anului, parcul devine principalul loc de întâlnire al comunității:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Târgul de Crăciun</h4>
                  <p className="text-gray-600 text-sm">
                    Decorațiuni spectaculoase, lumini feerice și atmosferă de sărbătoare care 
                    transformă parcul într-un loc magic.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Revelion în centru</h4>
                  <p className="text-gray-600 text-sm">
                    Petrecerea de Anul Nou adună mii de oameni în noaptea dintre ani pentru 
                    artificii și sărbătoare.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Evenimente de vară</h4>
                  <p className="text-gray-600 text-sm">
                    Concerte, expoziții, festivaluri și zone pietonale în weekenduri pentru 
                    relaxare și socializare.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Parcul de azi */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Parcul de azi
              </h2>
              
              <div className="bg-white border-2 border-[#B7D662] rounded-2xl p-8">
                <p className="text-gray-700 mb-6 leading-relaxed text-center">
                  Cu alei largi, spații verzi bine îngrijite, zone de odihnă și un peisaj urban elegant, 
                  Parcul Central este locul perfect pentru o pauză liniștită între două obiective turistice 
                  sau o plimbare de seară sub luminile calde ale orașului.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Plimbări și relaxare în aer liber</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Admirarea monumentelor istorice</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Spectacole la Teatrul Tineretului</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Fotografie urbană și de arhitectură</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Final */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
            <p className="text-xl md:text-2xl font-medium italic">
              „Fie că vii să admiri Turnul lui Ștefan cel Mare, să asculți un spectacol la 
              Teatrul Tineretului sau pur și simplu să te bucuri de aerul curat, 
              Parcul Central este sufletul orașului Piatra-Neamț."
            </p>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Explorează centrul istoric
            </h2>
            <p className="text-xl text-white/80 mb-10">
              După plimbarea prin parc, urcă în telegondolă și admiră întregul oraș de sus
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