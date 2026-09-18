'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function CheileBicazului() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/cheile-bicazului-hero.jpg"
            alt="Cheile Bicazului"
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
              Cheile Bicazului
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Miracolul dintre stânci
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
              La granița dintre județele Neamț și Harghita, în inima Munților Hășmaș, se află una 
              dintre cele mai spectaculoase creații ale naturii din România. Cheile Bicazului sunt 
              săpate de râul Bicaz în calcarele jurasice și formează un drum sinuos printre pereți 
              de piatră uriași, tuneluri, peșteri și serpentine amețitoare.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fiecare cotitură a drumului te aduce mai aproape de natură, liniște și spectacolul 
              pur al Carpaților. Este locul unde peisajul devine atât de impresionant încât îți 
              taie răsuflarea.
            </p>
          </div>

          {/* Ce poți vedea - Section 1 */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Ce poți vedea
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/cheile-bicazului-1.jpg"
                  alt="Cheile Bicazului - Poarta de Piatră"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Poarta de Piatră</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Simbolul natural al cheilor, un arc uriaș săpat în stâncă de forțele naturii. 
                  Este punctul de referință al zonei și locul perfect pentru fotografii spectaculoase.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Piatra Altarului</h3>
                <p className="text-gray-700 leading-relaxed">
                  Un perete vertical de peste 300 de metri, preferat de alpiniști din toată țara. 
                  Pentru cei care rămân cu picioarele pe pământ, priveliștea de jos este la fel 
                  de impresionantă.
                </p>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gâtul Iadului</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cea mai îngustă și spectaculoasă porțiune a traseului, unde pereții de piatră 
                  par să se îmbine deasupra drumului. Este locul unde simți cu adevăratimensitatea 
                  munților.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lacul Roșu</h3>
                <p className="text-gray-700 leading-relaxed">
                  La capătul superior al cheilor se află Lacul Roșu, un lac natural format în urma 
                  unei alunecări de teren în 1837. Trunchii de copaci care ies din apă îi dau un 
                  aspect unic, aproape irealist.
                </p>
              </div>
              
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
                <Image
                  src="/puncte-de-interes/cheile-bicazului-2.jpg"
                  alt="Cheile Bicazului - Lacul Roșu"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Trasee și activități */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Trasee și activități
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Cheile Bicăjelului și Cheile Șugăului</h4>
                  <p className="text-gray-700 mb-4">
                    Trasee montane sălbatice pe afluenții râului Bicaz, pentru cei care vor să 
                    exploreze mai mult decât drumul principal. Aici găsești liniște deplină și 
                    natură neîmblânzită.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Activități disponibile</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Drumeții pe trasee marcate de diferite dificultăți</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Alpinism pe pereții de calcar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Fotografie de peisaj și natură</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B7D662] mt-1">•</span>
                      <span>Turism montan și explorare</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Imagine finală */}
          <div className="mb-16">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/puncte-de-interes/cheile-bicazului-3.jpg"
                alt="Cheile Bicazului - panoramă"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Informații practice */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Cum ajungi */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cum ajungi</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Cheile sunt străbătute de <strong>drumul național DN12C</strong>, care leagă 
                  orașele Bicaz (Neamț) și Gheorgheni (Harghita). Traseul rutier este complet 
                  asfaltat și spectaculos în orice anotimp.
                </p>
             
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Coordonate:</p>
                  <p>46°46′N, 25°46′E</p>
                  <p className="font-semibold text-gray-900">Altitudine:</p>
                  <p>800–1000 m</p>
                </div>
              </div>
            </div>
            
            {/* De știut */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">De știut</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Parcul Național Cheile Bicazului – Hășmaș</strong> este o rezervație 
                  naturală de interes național, ceea ce înseamnă că zona este protejată și trebuie 
                  respectate regulile de comportament în natură.
                </p>
                <p>
                  Pe traseu vei găsi <strong>locuri de popas</strong> amenajate, tarabe cu produse 
                  locale (brânzeturi, miere, produse artizanale) și belvedere sigure pentru vizitatori.
                </p>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="font-semibold text-gray-900 mb-2">Recomandări:</p>
                  <ul className="space-y-1">
                    <li>• Oprește-te la belvederele marcate pentru fotografii în siguranță</li>
                    <li>• Fii atent la trafic pe serpentine</li>
                    <li>• Verifică prognoza meteo înainte de trasee montane</li>
                    <li>• Respectă natura și nu lăsa urme în urmă</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/TSJwB8FgHYJVRqF38"
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
              Spectacolul pur al Carpaților
            </h2>
            <p className="text-xl text-white/80 mb-10">
              După ce explorezi Cheile Bicazului, urcă cu telegondola Piatra-Neamț pentru o altă 
              perspectivă spectaculoasă asupra regiunii
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