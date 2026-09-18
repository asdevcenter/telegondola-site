'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function BisericaNastereSfIoan() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/biserica-ioan-hero.jpg"
            alt="Biserica Nașterea Sfântului Ioan Botezătorul"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Biserica „Nașterea Sfântului Ioan Botezătorul"
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
                <span>1497-1498</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Curtea Domnească</span>
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
              Ridicată între anii 1497–1498, Biserica „Nașterea Sfântului Ioan Botezătorul" este una dintre 
              cele mai vechi și mai valoroase construcții din Piatra Neamț. Ctitorită de Ștefan cel Mare 
              ca parte a ansamblului Curții Domnești, reprezintă un reper al stilului moldovenesc matur, 
              influențat de arhitectura gotică.
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
                    Edificiul este construit din piatră și cărămidă, cu elemente decorative rafinate: 
                    brâu torsionat, ocnițe, contraforturi și ceramică smălțuită pe fațade. Planul bisericii 
                    este mixt, cu abside laterale integrate în zidărie și cu o boltă interioară susținută de 
                    calote semisferice dispuse în filă.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Elemente distinctive:</h3>
                  <ul className="space-y-2">
                    <li><strong>Discuri ceramice</strong> verzi și galbene pe fațadă</li>
                    <li><strong>Brâu torsionat</strong> și ocnițe decorative</li>
                    <li><strong>Contraforturi</strong> și soclu profilat</li>
                    <li><strong>Ancadramente</strong> de piatră sculptată cu influențe gotice</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/biserica-ioan-1.jpg"
                  alt="Fațada Bisericii Sfântul Ioan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Istorie și semnificație Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Istorie și semnificație
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="order-2 lg:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/biserica-ioan-2.jpg"
                  alt="Biserica în Curtea Domnească"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    Biserica a fost locul de rugăciune al domnitorului și al curții sale, fiind parte integrantă 
                    din reședința voievodală. De-a lungul secolelor, a fost restaurată cu grijă, păstrându-și 
                    forma și materialele originale.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Valoare istorică:</h3>
                  <ul className="space-y-2">
                    <li>Lăcaș de cult al domnitorului și curții</li>
                    <li>Parte din reședința voievodală medievală</li>
                    <li>Stil moldovenesc cu influențe gotice</li>
                    <li>Restaurări care păstrează autenticitatea</li>
                    <li>Centrul istoric al Piatra Neamț astăzi</li>
                  </ul>
                </div>
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
                  <span>Piatră și cărămidă cu brâu torsionat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Ceramică smălțuită verde și galbenă</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Contraforturi și ocnițe decorative</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B7D662] mt-1">•</span>
                  <span>Influențe gotice în ancadramente</span>
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
                  <span className="font-bold text-gray-900">1497-1498</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Stil</span>
                  <span className="font-bold text-gray-900">Moldovenesc-gotic</span>
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

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              După vizita la biserică
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Descoperă și Turnul lui Ștefan cel Mare din curtea bisericii, apoi urcă în telegondolă 
              pentru a vedea întregul centru istoric de sus
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