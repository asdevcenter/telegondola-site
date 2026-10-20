'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function StrandulTineretului() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/strandul-tineretului-hero.jpg"
            alt="Ștrandul Tineretului Piatra Neamț"
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
              Ștrandul Tineretului
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Malul Bistriței</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Complex de agrement</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                <span>Sport și relaxare</span>
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
              Situat pe malul stâng al Bistriței, Ștrandul Tineretului este cea mai mare zonă de 
              agrement din Piatra-Neamț și una dintre cele mai moderne din Moldova. Complexul oferă 
              spații pentru sport, relaxare și distracție în aer liber, fiind o destinație populară 
              atât pentru localnici, cât și pentru turiști.
            </p>
          </div>

          {/* Conținut principal */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/strandul-tineretului-1.jpg"
                  alt="Ștrandul Tineretului - facilități"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  Zona include trei bazine de înot (unul dintre ele VIP), terenuri de tenis, 
                  fotbal, volei și baschet, locuri de joacă, căsuțe pentru cazare, restaurante 
                  și terase.
                </p>
                <p className="font-semibold text-gray-900">
                  În afara sezonului estival, terenurile și spațiile recreative rămân deschise 
                  pentru public.
                </p>
              </div>
            </div>
          </div>

          {/* Facilități */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Facilități
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Bazine de înot</h4>
                <p className="text-gray-600 text-sm">Pentru adulți și copii, inclusiv bazin VIP</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Terenuri de sport</h4>
                <p className="text-gray-600 text-sm">Tenis, fotbal, volei, baschet cu nocturnă</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Foișoare și grătar</h4>
                <p className="text-gray-600 text-sm">Zone pentru petreceri și evenimente private</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Locuri de joacă</h4>
                <p className="text-gray-600 text-sm">Spații moderne și sigure pentru copii</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Cazare și campare</h4>
                <p className="text-gray-600 text-sm">Căsuțe de cazare și spațiu pentru camping</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">Restaurante și terase</h4>
                <p className="text-gray-600 text-sm">Zone de relaxare cu specific local</p>
              </div>
            </div>
          </div>

          {/* Contact și locație */}
          <div className="mb-8">
            <div className="bg-white border-2 border-[#B7D662] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact și informații</h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-[#B7D662]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900">Adresă</p>
                  <p className="text-gray-600 text-sm">Aleea Tineretului, Piatra-Neamț</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-[#B7D662]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900">Telefon</p>
                  <a href="tel:+40737554316" className="text-[#B7D662] hover:underline text-sm">+40 737 554 316</a>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-[#B7D662]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900">Facebook</p>
                  <a href="https://www.facebook.com/StrandulTineretuluiPiatraNeamt" target="_blank" rel="noopener noreferrer" className="text-[#B7D662] hover:underline text-sm">
                    StrandulTineretuluiPiatraNeamt
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Locație */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/D2AW3Z3dJnkof2t49"
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
              Relaxare și sport la malul Bistriței
            </h2>
            <p className="text-xl text-white/80 mb-10">
              După o zi la strand, urcă în telegondolă și admiră panorama orașului de sus
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