'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function ManastireaNeamt() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/manastirea-neamt-hero.jpg"
            alt="Mănăstirea Neamț"
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
              Mănăstirea Neamț
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Sec. XIV - Ștefan cel Mare</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span>Cel mai mare așezământ monahal</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Monument istoric</span>
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
              Mănăstirea Neamț este cel mai mare și mai vechi așezământ monahal din Moldova, 
              cu începuturi în secolul XIV și biserica actuală ridicată de Ștefan cel Mare la 
              sfârșitul secolului XV. Un simbol al spiritualității moldovenești și al continuității 
              creștine ortodoxe.
            </p>
          </div>

          {/* Conținut principal */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/manastirea-neamt-1.jpg"
                  alt="Mănăstirea Neamț - ansamblu"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Repere esențiale</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Ctitorie:</p>
                    <p className="text-gray-700">Începuturi sec. XIV (Petru I Mușat); biserica actuală – Ștefan cel Mare, sfârșit sec. XV</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Hram:</p>
                    <p className="text-gray-700">Înălțarea Domnului (la 40 de zile după Paște)</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Ansamblu monumental:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Două biserici (Biserica mare + Sf. Gheorghe în zidul de incintă)</li>
                      <li>Turn-clopotniță cu 11 clopote</li>
                      <li>Agheasmatar circular</li>
                      <li>Paraclise</li>
                      <li>Seminarul „Veniamin Costache"</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">De văzut:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Icoana Maicii Domnului (pictată în 665)</li>
                      <li>Muzeul și sala tiparului</li>
                      <li>Biblioteca cu ≈18.000 volume</li>
                      <li>Morminte voievodale (Ștefan al II-lea)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Arhitectură:</p>
                    <p className="text-gray-700">Stil moldovenesc cu elemente bizantine și gotice; pridvor și gropniță; fațade cu discuri ceramice smălțuite</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact și Locație */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Contact */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact și informații</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Adresă</p>
                    <p className="text-gray-600 text-sm">Str. Arh. Chiriac Nicolau 40</p>
                    <p className="text-gray-600 text-sm">Sat Mănăstirea Neamț</p>
                    <p className="text-gray-600 text-sm">Comuna Vânători-Neamț, jud. Neamț</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Website</p>
                    <a href="https://neamt.mmb.ro" target="_blank" rel="noopener noreferrer" className="text-[#B7D662] hover:underline text-sm">
                      neamt.mmb.ro
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Obște</p>
                    <p className="text-gray-600 text-sm">Viață monahală activă cu zeci de călugări</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cum ajungi */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cum ajungi</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Locație</p>
                    <p className="text-gray-600 text-sm">Sat Mănăstirea Neamț</p>
                    <p className="text-gray-600 text-sm">Comuna Vânători-Neamț</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Traseu recomandat</p>
                    <p className="text-gray-600 text-sm">Din Piatra-Neamț către Târgu Neamț</p>
                    <p className="text-gray-600 text-sm">Drum bine marcat și accesibil</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Proximitate</p>
                    <p className="text-gray-600 text-sm">În apropierea Mănăstirii Secu și Agapia</p>
                    <p className="text-gray-600 text-sm">Zona mănăstirilor din nordul Moldovei</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/zk4aTTq4uobmvAru7"
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
              Cel mai mare așezământ monahal din Moldova
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Descoperă comoara spirituală a Moldovei și continuă explorarea cu telegondola 
              Piatra-Neamț pentru o perspectivă unică asupra regiunii
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/tickets"
                className="bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all inline-block"
              >
                Cumpără bilet telegondolă
              </Link>
              
              <Link
                href="/pages/atractii-judet"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all inline-block"
              >
                Vezi alte atracții din județ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}