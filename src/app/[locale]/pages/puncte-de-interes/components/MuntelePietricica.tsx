'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function MuntelePietricica() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/muntele-pietricica-hero.jpg"
            alt="Muntele Pietricica Piatra Neamț"
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
              Muntele Pietricica
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                <span>Reper natural</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Rezervație geologică</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>590m altitudine</span>
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
              Simbolul de piatră al orașului Piatra-Neamț, Muntele Pietricica se ridică la o altitudine 
              maximă de 590 m, dominând partea sudică a orașului și oferind una dintre cele mai frumoase 
              panorame asupra văii Bistriței și a munților din împrejurimi.
            </p>
          </div>

          {/* Origine și Istorie Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Origine și particularități geologice
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    Muntele Pietricica este o <strong>relicvă geologică unică</strong>, un rest al unei 
                    cute răsturnate formate în perioada paleogenului, ce păstrează straturi oligocene 
                    bogate în depozite fosilifere.
                  </p>
                  <p className="mb-4">
                    Din punct de vedere științific, reprezintă o adevărată <strong>arhivă naturală</strong> a 
                    istoriei geologice a Carpaților Orientali.
                  </p>
                  <p className="mb-4">
                    De-a lungul vremii, Pietricica a fost considerată un reper definitoriu al identității 
                    orașului – mulți cercetători cred chiar că numele <strong>„Piatra"</strong> derivă din 
                    acest masiv stâncos vizibil din orice colț al localității.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">O priveliște de neuitat:</h3>
                  <p className="mb-4">
                    Deși altitudinea sa este modestă, vederea din vârful Pietricicăi este spectaculoasă: 
                    muntele Ceahlău, valea Bistriței, lacurile Bâtca Doamnei și Reconstrucția, dar și 
                    dealurile Cozla, Cernegura și Cârloman.
                  </p>
                  <p className="italic text-gray-600">
                    Apusul de soare oferă o lumină aparte, care colorează orașul și munții în nuanțe calde, 
                    transformând orice vizită într-o experiență memorabilă.
                  </p>
                </div>
              </div>
              
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/muntele-pietricica-1.jpg"
                  alt="Muntele Pietricica - vedere panoramică"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Legende și Locuri Ascunse */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Legende și locuri ascunse
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Chilia Călugărului */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
                <div className="w-12 h-12 bg-[#B7D662]/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Chilia Călugărului</h3>
                <p className="text-gray-700">
                  O mică peșteră săpată în stâncă pe versantul dinspre Bistrița, despre care se spune 
                  că a fost loc de retragere pentru sihaștri. Un loc plin de mister și spiritualitate.
                </p>
              </div>

              {/* Groapa lui Ștefan cel Mare */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
                <div className="w-12 h-12 bg-[#B7D662]/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Groapa lui Ștefan cel Mare</h3>
                <p className="text-gray-700">
                  Locul de unde, potrivit tradiției, plăieșii aprindeau focuri pentru a anunța 
                  apropierea primejdiei. Un punct strategic cu semnificație istorică profundă.
                </p>
              </div>
            </div>
          </div>

          {/* O redescoperire a naturii */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              O redescoperire a naturii
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border-2 border-[#B7D662] rounded-2xl p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Deși în trecut era descris ca un munte „aspru și golaș", Pietricica a fost în mare 
                  parte împădurit în ultimele decenii, iar astăzi potecile sale oferă drumuri line, 
                  puncte de belvedere și refugii naturale.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Acces facil</p>
                      <p className="text-gray-600 text-sm">Cu mașina până aproape de platou</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Trasee pentru familii</p>
                      <p className="text-gray-600 text-sm">Poteci ușoare și bine marcate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Puncte de belvedere</p>
                      <p className="text-gray-600 text-sm">Panorame spectaculoase</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Fotografie</p>
                      <p className="text-gray-600 text-sm">Locație ideală pentru apus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pietricica astăzi */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Pietricica astăzi
            </h2>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <p className="text-lg text-gray-700 mb-6 text-center">
                Loc de drumeție, relaxare și fotografie, Muntele Pietricica completează perfect 
                experiența urbană din Piatra-Neamț.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="w-12 h-12 bg-[#B7D662]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Drumeție</h4>
                  <p className="text-gray-600 text-sm">Trasee ușoare pentru toate vârstele</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="w-12 h-12 bg-[#B7D662]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Fotografie</h4>
                  <p className="text-gray-600 text-sm">Panorame unice asupra orașului</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="w-12 h-12 bg-[#B7D662]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Relaxare</h4>
                  <p className="text-gray-600 text-sm">Natură și liniște aproape de oraș</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box Final */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
            <p className="text-xl md:text-2xl font-medium italic">
              „Vizitatorii care urcă până în vârf descoperă nu doar o priveliște amplă asupra orașului, 
              ci și esența legăturii dintre piatră, istorie și oameni. Este, fără îndoială, unul dintre 
              cele mai frumoase puncte de belvedere din întreg județul Neamț."
            </p>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Descoperă Muntele Pietricica
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Urcă în telegondolă și privește de sus simbolul de piatră al orașului
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