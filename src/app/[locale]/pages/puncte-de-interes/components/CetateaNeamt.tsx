'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function CetateaNeamt() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/cetatea-neamt-hero.jpg"
            alt="Cetatea Neamț"
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
              Cetatea Neamț
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Fortăreața de pe stâncă
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
              Deasupra Târgului Neamț, pe o culme stâncoasă, Cetatea Neamț veghează valea Ozanei 
              de peste șase secole. Ridicată la sfârșitul secolului XIV și întărită de Ștefan cel 
              Mare cu ziduri mai înalte, bastioane și un șanț adânc de apărare, fortăreața a oprit 
              de nenumărate ori drumul cotropitorilor.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aici s-au născut legende — de la „Muma lui Ștefan cel Mare" la faimoasa rezistență 
              a plăieșilor în fața lui Sobieski.
            </p>
          </div>

          {/* Vizita */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/cetatea-neamt-1.jpg"
                  alt="Cetatea Neamț - interior"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce vezi astăzi</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cetatea e restaurată și deschisă vizitatorilor. Treci pe podul sprijinit pe 
                  11 piloni de piatră, intri pe sub poarta gotică și descoperi curtea interioară, 
                  paraclisul, sala armelor, temnița și camerele refăcute ca în vechime.
                </p>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Bonusul vizitei? Panorama care taie răsuflarea, peste Ozana „cea frumos curgătoare" 
                  și munții Neamțului.
                </p>
              </div>
            </div>
          </div>

          {/* Nu rata */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Nu rata</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Podul de acces</h3>
                      <p className="text-gray-700 text-sm">
                        Construit pe 11 piloni de piatră, impresionant și fotogenic
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Paraclisul „Sf. Nicolae"</h3>
                      <p className="text-gray-700 text-sm">
                        Locul de rugăciune al apărătorilor cetății
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Încăperile tematice</h3>
                      <p className="text-gray-700 text-sm">
                        Sala armelor, temnița, camerele refăcute istoric
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Belvederele nordice</h3>
                      <p className="text-gray-700 text-sm">
                        Panoramă spectaculoasă peste valea Ozanei
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
                <Image
                  src="/puncte-de-interes/cetatea-neamt-2.jpg"
                  alt="Cetatea Neamț - panoramă"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Informații practice */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Acces */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cum ajungi</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Din <strong>Târgu Neamț</strong>, urmează <strong>Aleea Cetății</strong> – 
                  o urcare scurtă, bine semnalizată, fie pe jos (15-20 minute), fie cu mașina 
                  până aproape de intrare.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Distanțe:</p>
                  <p className="text-sm">• De la Piatra-Neamț: ~40 km</p>
                  <p className="text-sm">• De la Mănăstirea Neamț: ~15 km</p>
                  <p className="text-sm">• De la Rezervația de Zimbri: ~25 km</p>
                </div>
              </div>
            </div>
            
            {/* Combine cu */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Combină perfect cu</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Mănăstiri</h4>
                  <p className="text-sm">Neamț, Secu, Sihăstria, Sihla – circuit monahal complet</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Rezervația de Zimbri</h4>
                  <p className="text-sm">Dragoș-Vodă, Vânători-Neamț – natură și faună</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Casa Ion Creangă</h4>
                  <p className="text-sm">Humulești – muzeu memorial la 15 km</p>
                </div>
                
                <p className="text-sm bg-white rounded-lg p-3 mt-4">
                  <strong>Sfat:</strong> Dedică o zi întreagă pentru Târgu Neamț și împrejurimi – 
                  ai destule de văzut!
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/2DFNJBnJW3JtNxVU9"
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
              Șase secole de istorie și legende
            </h2>
            <p className="text-xl text-white/80 mb-10">
              După ce explorezi Cetatea Neamț, continuă descoperirea regiunii cu telegondola 
              Piatra-Neamț pentru o perspectivă unică
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