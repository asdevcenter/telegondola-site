'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function ManastireaSihla() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/manastirea-sihla-hero.jpg"
            alt="Mănăstirea Sihla"
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
              Mănăstirea Sihla
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span>Altitudine 1000 m</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>Mănăstire de călugărițe</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Peștera Sf. Teodora</span>
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
              Mănăstirea Sihla este situată la aproximativ 1000 m altitudine în Obcina Sihlei 
              (Munții Stânișoarei), pe locul sihăstriei unde a viețuit Sfânta Teodora de la Sihla. 
              Considerat „pământ sfințit de rugăciunile sihaștrilor", este un loc al tăcerii și 
              rugăciunii, în mijlocul pădurilor de piatră.
            </p>
          </div>

          {/* Conținut principal */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/manastirea-sihla-1.jpg"
                  alt="Mănăstirea Sihla - ansamblu montan"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Repere esențiale</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Ctitorie:</p>
                    <p className="text-gray-700">Secolele XVIII–XIX, pe locul sihăstriei Sfintei Teodora</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Hramuri:</p>
                    <p className="text-gray-700">Nașterea Sf. Ioan Botezătorul (biserica veche) și Schimbarea la Față (6 august)</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Altitudine:</p>
                    <p className="text-gray-700">Aproximativ 1000 m, în Obcina Sihlei (Munții Stânișoarei)</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Ansamblu:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Biserica de lemn „Nașterea Sf. Ioan Botezătorul"</li>
                      <li>Biserica „Schimbarea la Față"</li>
                      <li>Peștera Sfintei Teodora – loc de pelerinaj</li>
                      <li>Biserica dintr-un Brad</li>
                      <li>Chiliile vechi și noi, Aghiazmatarul și Casa Pelerinilor</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Program:</p>
                    <p className="text-gray-700">Zilnic de la 07:00 (Liturghie, Vecernie, Paraclis)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sfinți */}
          <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sfinți legați de Sihla</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">Sfânta Cuvioasă Teodora de la Sihla</h4>
                <p className="text-gray-600 text-sm">Sihăstrie și rugăciune în peștera din Sihla</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">Cuviosul Paisie Olaru</h4>
                <p className="text-gray-600 text-sm">Duhovnic și sihastru</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">Episcopul Ioan cel Minunat</h4>
                <p className="text-gray-600 text-sm">Făcător de minuni</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">Cuviosul Pavel</h4>
                <p className="text-gray-600 text-sm">Sihastru al Sihlei</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">Cuviosul Elefterie</h4>
                <p className="text-gray-600 text-sm">Sihastru și rugător</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">Cuviosul Iosif Sihastrul</h4>
                <p className="text-gray-600 text-sm">Viață ascetică în munți</p>
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
                    <p className="text-gray-600 text-sm">Sat Agapia</p>
                    <p className="text-gray-600 text-sm">Comuna Agapia, jud. Neamț</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Website</p>
                    <a href="https://manastireasihla.ro" target="_blank" rel="noopener noreferrer" className="text-[#B7D662] hover:underline text-sm">
                      manastireasihla.ro
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Program</p>
                    <p className="text-gray-600 text-sm">Zilnic de la 07:00</p>
                    <p className="text-gray-600 text-sm">Liturghie, Vecernie, Paraclis</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Statut</p>
                    <p className="text-gray-600 text-sm">Monument istoric (LMI NT-II-a-B-10584)</p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Altitudine</p>
                    <p className="text-gray-600 text-sm">≈1000 m în Obcina Sihlei</p>
                    <p className="text-gray-600 text-sm">Munții Stânișoarei</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Acces</p>
                    <p className="text-gray-600 text-sm">Drum forestier din satul Agapia</p>
                    <p className="text-gray-600 text-sm">Traseu de munte marcat</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Recomandări</p>
                    <p className="text-gray-600 text-sm">Echipament de munte necesar</p>
                    <p className="text-gray-600 text-sm">Verificați condițiile meteo înainte</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/PnPXggSVwTRLATQ88"
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
              Pământ sfințit de rugăciunile sihaștrilor
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Urcă la mănăstirea de la 1000 m altitudine și continuă explorarea cu telegondola 
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
                href="/pages/puncte-de-interes"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all inline-block"
              >
                Vezi puncte de interes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}