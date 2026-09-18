'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function MuzeulDeArta() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/muzeul-arta-hero.jpg"
            alt="Muzeul de Artă Piatra Neamț"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Muzeul de Artă Piatra Neamț
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                <span>Artă românească</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Din 1960</span>
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
              Un reper cultural al orașului, situat chiar în centrul istoric, în perimetrul Curții Domnești. 
              Muzeul de Artă Piatra Neamț oferă o incursiune elegantă în evoluția artelor vizuale românești – 
              de la clasic la contemporan.
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
                    Colecția de artă își are originile în activitatea părintelui Constantin Matasă (1878–1971), 
                    fondatorul Muzeului Arheologic. În 1960, prin sprijinul pictoriței Iulia Hălăucescu, 
                    a fost creată Secția de Artă. Din 1980 devine instituție de sine stătătoare.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Colecția include:</h3>
                  <ul className="space-y-2">
                    <li><strong>Pictură</strong> românească clasică și contemporană</li>
                    <li><strong>Grafică</strong> și desen artistic</li>
                    <li><strong>Sculptură</strong> modernă</li>
                    <li><strong>Tapiserie</strong> decorativă</li>
                    <li><strong>Expoziții temporare</strong> și retrospective</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/muzeul-arta-1.jpg"
                  alt="Interior muzeu - sală expoziție"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Clădirea muzeului Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Clădirea muzeului
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="order-2 lg:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/muzeul-arta-2.jpg"
                  alt="Clădirea Muzeului de Artă"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    Edificiul a fost construit în 1930 ca Școala Primară nr. 1 de băieți „Lascăr Catargi", 
                    proiectat de arhitecții Roger Bolomey și Fr. Droz. Arhitectura îmbină elemente tradiționale 
                    moldovenești cu detalii moderne ale epocii interbelice.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Detalii arhitecturale:</h3>
                  <ul className="space-y-2">
                    <li>Alternarea piatră și cărămidă</li>
                    <li>Ocnițe decorative tradiționale</li>
                    <li>Ferestre arcuite specific moldovenești</li>
                    <li>Decorațiuni sculptate de Vicenzo Puschiasis</li>
                    <li>Restaurare completă în 2010-2011</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Artiști reprezentați */}
          <div className="bg-[#B7D662]/10 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Artiști reprezentați în colecție</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Clasici români:</h4>
                <ul className="space-y-2">
                  <li>• Nicolae Tonitza</li>
                  <li>• Gheorghe Petrașcu</li>
                  <li>• Francisc Șirato</li>
                  <li>• Vladimir Frimu</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Artiști locali:</h4>
                <ul className="space-y-2">
                  <li>• C.D. Stahi</li>
                  <li>• Aurel Băeșu</li>
                  <li>• Lascăr Vorel</li>
                  <li>• Iulia Hălăucescu</li>
                </ul>
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

          {/* Contact */}
          <div className="text-center mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-700 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>Piața Curtea Domnească nr. 1</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0233 216 808</span>
              </div>
            </div>
          </div>

          {/* Locație */}
          <div className="text-center mb-16">
            <a
              href="https://maps.app.goo.gl/xtV6NzHaZF6qtD4j8"
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
              După vizitarea muzeului
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Explorează întreaga zonă a Curții Domnești – Biserica Sf. Ioan Domnesc, Turnul lui Ștefan cel Mare, 
              Muzeul Cucuteni. Iar pentru o panoramă completă asupra orașului, urcă cu Telegondola Piatra Neamț
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