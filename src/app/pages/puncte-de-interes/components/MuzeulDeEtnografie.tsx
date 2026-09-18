'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function MuzeulEtnografie() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/etnografie-hero.jpg"
            alt="Muzeul de Etnografie Piatra Neamț"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Muzeul de Etnografie
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Cultură tradițională</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Din 1980</span>
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
              Un spațiu dedicat culturii tradiționale și meșteșugurilor autentice ale zonei Neamțului. 
              Muzeul de Etnografie oferă o incursiune în viața de altădată a satului românesc — 
              prin obiecte, costume, simboluri și povești păstrate cu grijă.
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
                    Colecția de etnografie a început să prindă contur la mijlocul secolului XX, în urma 
                    cercetărilor efectuate de echipa condusă de Romulus Vuia, odată cu ridicarea barajului 
                    de la Bicaz. În 1980, s-a deschis oficial muzeul, într-o clădire care reflectă perfect 
                    spiritul tradiției populare.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Ce poți vedea:</h3>
                  <ul className="space-y-2">
                    <li><strong>Port popular</strong> de pe Valea Bistriței</li>
                    <li><strong>Ceramică tradițională</strong> și textile</li>
                    <li><strong>Unelte și obiecte</strong> din gospodării</li>
                    <li><strong>Târgul Meșterilor Populari</strong> (anual)</li>
                    <li><strong>Galerie foto</strong> și tur virtual</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/etnografie-1.jpg"
                  alt="Port popular și costume tradiționale"
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
                  src="/puncte-de-interes/etnografie-2.jpg"
                  alt="Clădirea Muzeului de Etnografie"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    Actualul sediu a fost construit în 1924 ca locuință a directorului Școlii Primare 
                    „Lascăr Catargi", proiect realizat de arhitectul Eugen Albu. Edificiul este un exemplu 
                    remarcabil de stil neoromânesc, cu detalii care evocă arhitectura caselor tradiționale.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Arhitectură neoromânească:</h3>
                  <ul className="space-y-2">
                    <li>Pridvoare cu stâlpi sculptați din lemn</li>
                    <li>Ocnițe decorative tradiționale</li>
                    <li>Ferestre încadrate elegant</li>
                    <li>Acoperiș înalt cu lucarne</li>
                    <li>Restaurare completă 2010-2011</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Colecția muzeului */}
          <div className="bg-[#B7D662]/10 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Colecția muzeului</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Cercetări fundamentale:</h4>
                <ul className="space-y-2">
                  <li>• <em>Arta populară de pe Valea Bistriței</em> (1969)</li>
                  <li>• <em>Etnografia Văii Bistriței</em> (1973)</li>
                  <li>• Studii realizate de Romulus Vuia</li>
                  <li>• Extinderea colecției de dr. Elena Florescu</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Categorii de obiecte:</h4>
                <ul className="space-y-2">
                  <li>• Port și costume populare</li>
                  <li>• Textile și covoare</li>
                  <li>• Ceramică și olărit</li>
                  <li>• Unelte și obiecte casnice</li>
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
                <span>0733 939 453</span>
              </div>
            </div>
          </div>

          {/* Locație */}
          <div className="text-center mb-16">
            <a
              href="https://maps.app.goo.gl/MDpLQUtqGrgKE2NM9"
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
              Descoperă cultura populară
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Include Muzeul de Etnografie în circuitul cultural al Curții Domnești, alături de celelalte muzee. 
              Încheie vizita cu o plimbare cu Telegondola pentru o priveliște spectaculoasă asupra văii Bistriței — 
              spațiul care a inspirat întreaga civilizație populară din regiune
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