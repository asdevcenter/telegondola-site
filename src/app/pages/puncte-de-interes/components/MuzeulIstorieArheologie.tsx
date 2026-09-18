'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function MuzeulIstorieArheologie() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/muzeu-istorie-hero.jpg"
            alt="Muzeul de Istorie și Arheologie Piatra Neamț"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Muzeul de Istorie și Arheologie
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Complexul Muzeal Național</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Din 1934</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Str. Mihai Eminescu nr. 10</span>
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
              Instituția de referință a patrimoniului istoric și arheologic din zona Neamț. 
              Expoziția de bază prezintă evoluția comunităților umane din regiune, completată de 
              cabinetul numismatic, spații pentru expoziții temporare și un tur virtual.
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
                    Muzeografia locală începe în primul sfert al secolului XX. Din 1934, prin inițiativa 
                    preotului Constantin Matasă, ia formă un muzeu arheologic dedicat descoperirilor din zonă. 
                    Din 1980, muzeul funcționează în clădirea istorică de pe strada Mihai Eminescu nr. 10.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Ce poți vedea:</h3>
                  <ul className="space-y-2">
                    <li><strong>Expoziția de bază</strong> cu piese arheologice și istorice</li>
                    <li><strong>Cabinet numismatic</strong> cu monede și medalioane</li>
                    <li><strong>Expoziții temporare</strong> și tematice</li>
                    <li><strong>Secțiunea Constantin Matasă</strong></li>
                    <li><strong>Tur virtual</strong> interactiv</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/muzeu-istorie-1.jpg"
                  alt="Clădirea Muzeului de Istorie"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Colecții și expoziții Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Colecții și expoziții
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="order-2 lg:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/muzeu-istorie-2.jpg"
                  alt="Expoziție arheologică"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    Expoziția permanentă prezintă evoluția comunităților umane din zona Neamț, 
                    de la preistorie până în epoca modernă. Ultima reorganizare a avut loc în 2007–2008, 
                    cu redeschiderea programată pentru 15 mai 2025.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Colecții importante:</h3>
                  <ul className="space-y-2">
                    <li>Artefacte din perioada paleolitică și neolitică</li>
                    <li>Obiecte din epoca dacilor și romani</li>
                    <li>Piese medievale și moderne</li>
                    <li>Colecție numismatică valoroasă</li>
                    <li>Documente și fotografii istorice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Program și tarife */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program de vizitare</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold">Luni</span>
                  <span>Închis</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold">Aprilie–Septembrie</span>
                  <span>10:00–18:00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold">Octombrie–Martie</span>
                  <span>9:00–17:00</span>
                </div>
                <p className="text-sm text-gray-600 pt-2">
                  *Ultimul acces cu 30 de minute înainte de închidere
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tarife</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Adulți</span>
                  <span className="font-bold text-gray-900">16 lei</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Studenți / Grup adulți</span>
                  <span className="font-bold text-gray-900">8 lei</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Preșcolari / Elevi</span>
                  <span className="font-bold text-gray-900">4 lei</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Fotografiere / Filmare</span>
                  <span className="font-bold text-gray-900">10 lei</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact și eveniment */}
          <div className="bg-[#B7D662]/10 rounded-2xl p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Informații de contact</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#B7D662] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span>Strada Mihai Eminescu nr. 10, Piatra Neamț</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#B7D662] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p>0233 217 496</p>
                      <p>0233 218 108</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Eveniment important</h3>
                <div className="bg-white rounded-xl p-4">
                  <p className="text-gray-700">
                    <strong className="text-[#B7D662]">Redeschidere expoziție permanentă</strong><br />
                    📅 15 mai 2025, ora 14:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Locație */}
          <div className="text-center mb-16">
            <a
              href="https://maps.app.goo.gl/uW5fvRy5XJtMJq2r9"
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
              Planifică vizita
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Include muzeul într-un circuit urban alături de Curtea Domnească, Turnul lui Ștefan cel Mare 
              și Sinagoga de lemn. Pentru o perspectivă asupra orașului, urcă cu Telegondola Piatra Neamț
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