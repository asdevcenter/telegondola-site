'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'
import { useTelegondola, programGrupat } from '@/src/lib/telegondola'

export default function TelegondolaPiatraNeamt() {
  // Programul și tarifele vin de la panoul de administrare.
  // Valorile din al doilea argument se folosesc doar până răspunde serverul.
  const { program, preturi } = useTelegondola()
  const pret = (cod: string, deRezerva: number) => preturi[cod] ?? deRezerva

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/telegondola-hero.jpg"
            alt="Telegondola Piatra Neamț"
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
              Telegondola Piatra-Neamț
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                <span>Atracție turistică</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Inaugurată 2008</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>632m altitudine</span>
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
              Telegondola Piatra-Neamț este una dintre cele mai moderne și spectaculoase instalații de transport pe cablu din România.
              Inaugurată în februarie 2008, oferă o experiență unică de a admira orașul dintr-o perspectivă aeriană,
              conectând Gara Piatra-Neamț cu vârful Cozla într-o călătorie de 8 minute.
            </p>
          </div>

          {/* Experiența Section cu imagini */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Experiența Telegondolei
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    În timpul călătoriei de aproximativ 8 minute, veți avea parte de priveliști spectaculoase
                    asupra orașului Piatra Neamț, lacului Bâtca Doamnei, Muntelui Pietricica și,
                    în zilele senine, asupra mărețului Ceahlău.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Ce veți descoperi:</h3>
                  <ul className="space-y-2">
                    <li><strong>Panoramă 360°</strong> asupra orașului Piatra Neamț</li>
                    <li><strong>Lacul Bâtca Doamnei</strong> - vedere spectaculoasă</li>
                    <li><strong>Munții din jur</strong> - Pietricica și Ceahlău</li>
                    <li><strong>Vârful Cozla</strong> - parc de agrement și trasee turistice</li>
                  </ul>
                </div>
              </div>

              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/telegondola-1.jpg"
                  alt="Vedere din telegondolă"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Galerie 2 imagini */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/telegondola-2.jpg"
                  alt="Stația de sosire Cozla"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/telegondola-3.jpg"
                  alt="Panoramă oraș Piatra Neamț"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Detalii Tehnice Section cu imagini */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
              Detalii Tehnice - Tehnologie Doppelmayr
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="order-2 lg:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/telegondola-4.jpg"
                  alt="Gondolă Doppelmayr"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="order-1 lg:order-2">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    Produsă de compania austriacă Doppelmayr, lider mondial în transportul pe cablu,
                    telegondola dispune de 22 de gondole moderne, fiecare cu capacitate de 8 persoane.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Specificații tehnice:</h3>
                  <ul className="space-y-2">
                    <li>Lungime totală: <strong>1.915 metri</strong></li>
                    <li>Număr stâlpi: <strong>10</strong> (cel mai înalt: 64m)</li>
                    <li>Capacitate: <strong>1.200 persoane/oră</strong></li>
                    <li>Viteză de deplasare: <strong>6 m/s</strong></li>
                    <li>Durată călătorie: <strong>aprox. 8 minute</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Galerie 2 imagini */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/telegondola-5.jpg"
                  alt="Stâlpi telegondolă"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/telegondola-6.jpg"
                  alt="Interior gondolă"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Program și Tarife */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program de funcționare</h3>
              <ul className="space-y-3 text-gray-700">
                {programGrupat(program).map((r) => (
                  <li key={r.interval} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                    <span>{r.zile}</span>
                    <span className="font-bold">{r.interval}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#B7D662]/10 rounded-lg">
                <p className="text-sm text-gray-600">
                  📞 <strong>Contact:</strong> <a href="tel:+40724538928" className="text-[#B7D662] hover:underline">+40 724 538 928</a>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  📧 <strong>Email:</strong> <a href="mailto:office@perlainvest.ro" className="text-[#B7D662] hover:underline">office@perlainvest.ro</a>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tarife principale</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Adulți (dus-întors)</span>
                  <span className="font-bold text-gray-900">{pret('adult_dus_intors', 60)} lei</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Adulți (o direcție)</span>
                  <span className="font-bold text-gray-900">{pret('adult_o_cursa', 40)} lei</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Copii 5-14 ani (dus-întors)</span>
                  <span className="font-bold text-gray-900">{pret('copil_dus_intors', 40)} lei</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Copii sub 5 ani</span>
                  <span className="font-bold text-[#B7D662]">GRATUIT</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Locuitori Piatra-Neamț</span>
                  <span className="font-bold text-gray-900">{pret('localnic_adult', 25)} lei</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/pages/tarife-program"
                  className="text-[#B7D662] hover:text-[#95b540] font-medium text-sm inline-flex items-center gap-2"
                >
                  Vezi toate tarifele →
                </Link>
              </div>
            </div>
          </div>

          {/* Locație simplă */}
          <div className="text-center mb-16">
            <a
              href="https://maps.app.goo.gl/abZa4Tb5XdYQBZmj8"
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

      {/* CTA Final - Mai clar */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Gata pentru aventură?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Cumpără biletul online și bucură-te de o experiență unică la 632 de metri altitudine
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