'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function MasivulCeahlau() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/masivul-ceahlau-hero.jpg"
            alt="Masivul Ceahlău"
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
              Masivul Ceahlău
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Muntele-emblemă al Moldovei
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Introducere */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ceahlăul te cucerește prin simplitate și măreție. Urcă-l cu răbdare și te răsplătește 
              la fiecare pas cu peisaje spectaculoase, aer curat și panorame care îți taie respirația.
            </p>
          </div>

          {/* Ce vezi aici */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Ce vezi aici
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/masivul-ceahlau-1.jpg"
                  alt="Masivul Ceahlău - vârfuri"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Două vârfuri spectaculoase</h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Ocolașul Mare (1.907 m)</strong> și <strong>Toaca (1.904 m)</strong>, 
                      cu panorame care se întind spre lacul Izvorul Muntelui și Munții Hășmaș. 
                      Răsăriturile de pe Toaca sunt memorabile.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Forme de stâncă emblematice</h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Panaghia</strong>, <strong>Piatra Ciobanului</strong>, 
                      <strong>Scaunele Zeilor</strong> – formațiuni care par sculptate special 
                      pentru a impresiona privirea.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Cascada Duruitoarea</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Cădere de aproximativ 30 de metri pe Valea Rupturilor, un punct de oprire 
                      obligatoriu pe traseele din zona Durău.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Biodiversitate de parc național
              </h3>
              <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                Păduri de molid și brad, poieni alpine, capre negre și cocoș de munte. Ceahlăul 
                face parte din Parcul Național Ceahlău (7.742 hectare), o zonă protejată cu 
                reguli stricte de comportament în natură.
              </p>
            </div>
          </div>

          {/* De ce merită */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              De ce merită
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Rute bine marcate</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Peisaje care se schimbă la fiecare 30–40 de minute, de la pădure deasă la 
                      poieni deschise și apoi creste alpine. Traseele sunt bine marcate și 
                      întreținute.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Microclimat perfect</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Aer curat, răcoros vara și culori puternice toamna. În octombrie, pădurea 
                      se transformă într-o paletă de galben, portocaliu și roșu.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Legende și povești</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Povestea Babei Dochia, „piramida" de lumină de la Schimbarea la Față – 
                      legendele locului adaugă farmec experienței. Ceahlăul nu este doar un munte, 
                      este un simbol.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
                <Image
                  src="/puncte-de-interes/masivul-ceahlau-2.jpg"
                  alt="Masivul Ceahlău - trasee"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Acces și trasee */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Acces */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Acces rapid</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Nord / Est</p>
                    <p>DN15: Bicaz – Poiana Largului – Tulgheș</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Sud</p>
                    <p>DN12C: Bicazu Ardelean – Bicaz</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Porți principale</p>
                    <ul className="space-y-1">
                      <li>• <strong>Durău</strong> – stațiune la ~800 m</li>
                      <li>• <strong>Izvorul Muntelui</strong> – cabană cu același nume</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Trasee clasice */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Trasee clasice</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Durău → Cabana Dochia</p>
                    <p className="text-sm">Prin Fântânele, sub Toaca</p>
                    <p className="text-sm">Bandă roșie • 3½–4 ore</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Durău → Dochia prin Duruitoarea</p>
                    <p className="text-sm">Cruce roșie / cruce albastră</p>
                    <p className="text-sm">4½–5 ore</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Izvorul Muntelui → Dochia</p>
                    <p className="text-sm">Prin Ocolașul Mic</p>
                    <p className="text-sm">Bandă roșie • 4–4½ ore</p>
                  </div>
                  
                  <p className="text-sm bg-white rounded-lg p-3 mt-4">
                    <strong>Notă:</strong> Timpii sunt orientativi pentru turiști cu experiență 
                    medie. Calculează mai mult timp pentru pauze și fotografii.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Când și sfaturi */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Când să vii */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Când să vii</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Iunie – octombrie</p>
                    <p>Vreme mai stabilă, vizibilitate bună, toate traseele accesibile. Vara este 
                    răcoroasă pe vârf, perfectă pentru drumeții.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Octombrie</p>
                    <p>Culorile de toamnă transformă pădurea într-un spectacol vizual. Este perioada 
                    preferată de fotografi.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Iarna</p>
                    <p>Doar cu echipament de iarnă complet și experiență montană. Zăpada poate fi 
                    adâncă, vizibilitatea scăzută, riscul de avalanșă prezent.</p>
                  </div>
                </div>
              </div>
              
              {/* Sfaturi utile */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Sfaturi utile</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Parcul Național Ceahlău</p>
                    <p>Respectă marcajele, nu lăsa urme, nu hrăni animalele. Taxă de acces și reguli 
                    de parc – informează-te la punctele de intrare.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Echipament esențial</p>
                    <ul className="space-y-1">
                      <li>• Îmbrăcăminte pe straturi (vremea se schimbă rapid)</li>
                      <li>• Apă (minimum 1,5 litri)</li>
                      <li>• Frontală (pentru răsăritul de pe Toaca)</li>
                      <li>• Hartă și busola / GPS</li>
                      <li>• Bocanci de munte</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm bg-white rounded-lg p-3">
                    <strong>Important:</strong> Informează pe cineva despre traseul ales și ora 
                    estimată de întoarcere. Siguranța ta este prioritară.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote final */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
            <p className="text-xl md:text-2xl font-medium italic">
              „Ceahlăul te cucerește prin simplitate și măreție. Urcă-l cu răbdare și te 
              răsplătește la fiecare pas."
            </p>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Muntele-emblemă al Moldovei te așteaptă
            </h2>
            <p className="text-xl text-white/80 mb-10">
              După ce cucerești Ceahlăul, explorează regiunea din altă perspectivă cu telegondola 
              Piatra-Neamț
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