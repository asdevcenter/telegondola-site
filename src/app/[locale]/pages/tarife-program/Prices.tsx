'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'
import { useTelegondola, programPeZile } from '@/src/lib/telegondola'

export default function PreturiOrar() {
  const [activeTab, setActiveTab] = useState('bilete-individuale')
  const [scrollY, setScrollY] = useState(0)

  // Programul vine de la panoul de administrare.
  const { program, preturi, bilete } = useTelegondola()
  const programData = programPeZile(program)
  const pret = (cod: string, deRezerva: number) => preturi[cod] ?? deRezerva
  const economie = (cod: string, deRezerva: number) =>
    bilete.find((b) => b.cod === cod)?.economie ?? deRezerva

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

{/* Hero Section - FĂRĂ Parallax (smooth pe toate device-urile) */}
<section className="relative h-[40vh] min-h-[350px] md:h-[50vh] md:min-h-[400px] overflow-hidden">
  {/* Image container - STATIC */}
  <div className="absolute inset-0">
    <Image
      src="/telegondola-hero-preturi.jpg"
      alt="Telegondola Piatra Neamț - Prețuri și Orar"
      fill
      className="object-cover"
      priority
      quality={90}
      style={{
        willChange: 'auto'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
        Tarife și program
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-white/90 animate-fade-in-up animation-delay-200">
        Toate informațiile necesare pentru vizita ta
      </p>
    </div>
  </div>
</section>

      {/* Quick Stats */}
      <section className="relative -mt-16 z-20 mb-16 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              {[
                { value: '365', label: 'Zile pe an deschis' },
                { value: '~8', label: 'Minute călătorie' },
                { value: '1.200', label: 'Persoane/oră' },
                { value: '632m', label: 'Altitudine maximă' }
              ].map((stat, i) => (
                <div key={i} className="group transition-transform hover:scale-105">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B7D662]">{stat.value}</div>
                  <p className="text-gray-600 mt-1 text-xs sm:text-sm md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-12 md:py-16 bg-gray-50 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Program de funcționare
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Deschis tot anul, în funcție de condițiile meteo
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8">
                {/* Zilele săptămânii */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">Orar săptămânal</h3>
                  <div className="space-y-2 md:space-y-3">
                    {programData.map((item, index) => (
                      <div
                        key={item.zi}
                        className={`flex justify-between items-center pb-2 md:pb-3 transition-colors hover:bg-gray-50 px-2 py-1 rounded-lg ${
                          index < programData.length - 1 ? 'border-b border-gray-100' : ''
                        }`}
                      >
                        <span className={`font-medium text-sm md:text-base ${item.diferit ? 'text-[#B7D662]' : 'text-gray-700'}`}>
                          {item.nume}
                        </span>
                        <span className="text-gray-900 text-sm md:text-base">{item.interval}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 md:mt-6 p-3 md:p-4 bg-[#B7D662]/10 rounded-lg">
                    <p className="text-xs md:text-sm text-gray-700">
                      <span className="font-semibold">Notă:</span> Ultima cursă pleacă cu 30 de minute înainte de închidere
                    </p>
                  </div>
                </div>

                {/* Informații speciale */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">Informații importante</h3>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      ...programData
                        .filter((z) => z.diferit)
                        .map((z) => `Program diferit ${z.nume.toLowerCase()}: ${z.interval}`),
                      'Deschis tot timpul anului în funcție de condițiile meteo',
                      'Program special de sărbători'
                    ].map((info, i) => (
                      <div key={i} className="flex items-start gap-2 md:gap-3 transition-transform hover:translate-x-1">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#B7D662]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#B7D662]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <p className="text-gray-700 text-sm md:text-base">{info}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 md:mt-8 p-3 md:p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-start gap-2 md:gap-3">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                      <p className="text-xs md:text-sm text-blue-800">
                        În caz de vreme nefavorabilă, activitatea poate fi suspendată temporar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section className="py-12 md:py-16 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Tarife telegondolă
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Alege tipul de bilet potrivit pentru tine.
            </p>
          </div>

          {/* Tabs */}
          <div className="max-w-5xl mx-auto mb-6 md:mb-8">
            <div className="flex flex-wrap justify-center gap-2 bg-gray-100 p-1 rounded-full">
              {[
                { id: 'bilete-individuale', label: 'Bilete individuale' },
                { id: 'grupuri', label: 'Grupuri' },
                { id: 'abonamente', label: 'Abonamente' },
                { id: 'speciale', label: 'Tarife speciale' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 sm:px-4 md:px-6 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#B7D662] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            {/* Bilete Individuale */}
            {activeTab === 'bilete-individuale' && (
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 animate-fade-in-up">
                {/* Adulți */}
                <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">Adulți</h3>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex justify-between items-center pb-2 md:pb-3 border-b border-gray-100">
                      <span className="text-sm md:text-base text-gray-600">Urcare și coborâre</span>
                      <span className="text-xl md:text-2xl font-bold text-gray-900">{pret('adult_dus_intors', 60)} lei</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-600">Urcare sau coborâre</span>
                      <span className="text-lg md:text-xl font-semibold text-gray-900">{pret('adult_o_cursa', 40)} lei</span>
                    </div>
                  </div>
                </div>

                {/* Copii */}
                <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-[#B7D662] relative">
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#B7D662]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#B7D662]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">Copii (5-14 ani)</h3>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex justify-between items-center pb-2 md:pb-3 border-b border-gray-100">
                      <span className="text-sm md:text-base text-gray-600">Urcare și coborâre</span>
                      <span className="text-xl md:text-2xl font-bold text-gray-900">{pret('copil_dus_intors', 40)} lei</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-600">Urcare sau coborâre</span>
                      <span className="text-lg md:text-xl font-semibold text-gray-900">{pret('copil_o_cursa', 30)} lei</span>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 p-2.5 md:p-3 bg-[#B7D662]/10 rounded-lg">
                    <p className="text-xs md:text-sm text-gray-700">
                      <strong>Gratuit</strong> pentru copii până la 5 ani
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Grupuri */}
            {activeTab === 'grupuri' && (
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 animate-fade-in-up">
                {/* Grupuri 20+ */}
                <div className="bg-white rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                    </div>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900">Grupuri 20+ persoane</h3>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex justify-between items-center pb-2 md:pb-3 border-b border-gray-100">
                      <span className="text-sm md:text-base text-gray-600">Adulți</span>
                      <span className="text-xl md:text-2xl font-bold text-gray-900">{pret('grup20_adult', 40)} lei</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-600">Copii 5-14 ani</span>
                      <span className="text-lg md:text-xl font-semibold text-gray-900">{pret('grup20_copil', 25)} lei</span>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 p-2.5 md:p-3 bg-green-50 rounded-lg">
                    <p className="text-xs md:text-sm text-green-800">
                      <strong>Bonus:</strong> 1 însoțitor gratuit la fiecare 20 persoane
                    </p>
                  </div>
                </div>

                {/* Grupuri 100+ */}
                <div className="bg-white rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-[#B7D662]">
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#B7D662]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#B7D662]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                    </div>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900">Grupuri 100+ persoane</h3>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex justify-between items-center pb-2 md:pb-3 border-b border-gray-100">
                      <span className="text-sm md:text-base text-gray-600">Adulți</span>
                      <span className="text-xl md:text-2xl font-bold text-gray-900">{pret('grup100_adult', 30)} lei</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-600">Copii 5-14 ani</span>
                      <span className="text-lg md:text-xl font-semibold text-gray-900">{pret('grup100_copil', 20)} lei</span>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 p-2.5 md:p-3 bg-[#B7D662]/10 rounded-lg">
                    <p className="text-xs md:text-sm text-gray-700">
                      <strong>Bonus:</strong> 1 însoțitor gratuit la fiecare 20 persoane
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Abonamente */}
            {activeTab === 'abonamente' && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 animate-fade-in-up">
                {[
                  { cod: 'abonament_5_adult', title: '5 călătorii adulți', pretRezerva: 100, economieRezerva: 100 },
                  { cod: 'abonament_5_copil', title: '5 călătorii copii', pretRezerva: 50, economieRezerva: 100 },
                  { cod: 'abonament_10_adult', title: '10 călătorii adulți', pretRezerva: 150, economieRezerva: 250, highlight: true },
                  { cod: 'abonament_10_copil', title: '10 călătorii copii', pretRezerva: 100, economieRezerva: 200 }
                ].map((a) => {
                  const p = pret(a.cod, a.pretRezerva)
                  return { ...a, price: p, original: p + economie(a.cod, a.economieRezerva) }
                }).map((abo, i) => (
                  <div key={i} className={`bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${abo.highlight ? 'border-2 border-[#B7D662] relative' : ''}`}>
                    {abo.highlight && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-[#B7D662] text-white text-xs font-bold px-3 py-1 rounded-full">
                          Cel mai popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">{abo.title}</h3>
                    <div className="mb-3 md:mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl md:text-4xl font-bold text-gray-900">{abo.price}</span>
                        <span className="text-lg md:text-xl text-gray-500">lei</span>
                      </div>
                      <div className="text-xs md:text-sm text-gray-500 line-through">în loc de {abo.original} lei</div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600">
                      O călătorie = urcare sau coborâre
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tarife Speciale */}
            {activeTab === 'speciale' && (
              <div className="space-y-4 md:space-y-6 animate-fade-in-up">
                {/* Cetățeni Piatra Neamț */}
                <div className="bg-white rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg">
                  <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Cetățeni Piatra Neamț și localități limitrofe</h3>
                      <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">Alexandru cel Bun, Dumbrava Roșie, Gârcina, Girov</p>
                      <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="text-sm md:text-base text-gray-700">Adulți</span>
                          <span className="text-xl md:text-2xl font-bold text-blue-600">{pret('localnic_adult', 25)} lei</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="text-sm md:text-base text-gray-700">Copii 5-14 ani</span>
                          <span className="text-xl md:text-2xl font-bold text-blue-600">{pret('localnic_copil', 15)} lei</span>
                        </div>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600 mt-3">
                        <strong>Dovada:</strong> Act de identitate cu domiciliul în Piatra Neamț sau localitățile limitrofe
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gratuități */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-5 md:p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900">Copii până la 5 ani</h3>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-green-700 mb-2">GRATUIT</p>
                    <p className="text-xs md:text-sm text-gray-700">Transport gratuit pentru copiii sub 5 ani</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-5 md:p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                        </svg>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900">Persoane cu dizabilități</h3>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-purple-700 mb-2">GRATUIT</p>
                    <p className="text-xs md:text-sm text-gray-700">O dată pe zi, pe baza abonamentului lunar eliberat la casierie</p>
                  </div>
                </div>

                {/* Pensionari Piatra Neamț */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-orange-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-2">Pensionari Piatra Neamț</h3>
                      <p className="text-2xl md:text-3xl font-bold text-orange-700 mb-2 md:mb-3">GRATUIT</p>
                      <p className="text-xs md:text-sm text-gray-700">
                        În <strong>ultima zi de miercuri din fiecare lună</strong>, pe baza cuponului de pensie și actului de identitate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Detalii tehnice
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              Tehnologie de ultimă generație
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: 'Producător', value: 'Doppelmayr', sub: '(Austria)' },
              { label: 'Lungime traseu', value: '1.915m' },
              { label: 'Număr gondole', value: '22', sub: '8 locuri fiecare' },
              { label: 'Viteză medie', value: '6 m/s' },
              { label: 'Capacitate', value: '1.200', sub: 'persoane/oră' },
              { label: 'Număr stâlpi', value: '10', sub: 'cel mai înalt: 64m' },
              { label: 'Diferență nivel', value: '309m', sub: '323m → 632m' },
              { label: 'Durata', value: '~8 min' }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/10 transition-all border border-white/10">
                <div className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2">{item.label}</div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{item.value}</div>
                {item.sub && <div className="text-xs md:text-sm text-gray-400">{item.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Info */}
      <section className="py-12 md:py-16 bg-gray-50 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                Contact
              </h2>

              <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                <a href="tel:+40724538928" className="flex items-start gap-3 md:gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#B7D662]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#B7D662]/30 transition-colors">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs md:text-sm font-medium text-gray-500 mb-1">Telefon</div>
                    <div className="text-sm md:text-base font-semibold text-gray-900">+40 724 538 928</div>
                  </div>
                </a>

                <a href="mailto:office@perlainvest.ro" className="flex items-start gap-3 md:gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#B7D662]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#B7D662]/30 transition-colors">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs md:text-sm font-medium text-gray-500 mb-1">Email</div>
                    <div className="text-sm md:text-base font-semibold text-gray-900">office@perlainvest.ro</div>
                  </div>
                </a>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#B7D662]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs md:text-sm font-medium text-gray-500 mb-1">Adresă</div>
                    <div className="text-sm md:text-base font-semibold text-gray-900">
                      Piața Gării nr. 7<br />
                      610001 Piatra Neamț
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 md:pt-8">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">Despre proiect</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Telegondola Piatra Neamț, inaugurată în 2008, este una dintre cele mai importante investiții turistice ale municipiului. Realizată de compania austriacă Doppelmayr, instalația asigură legătura între centrul orașului și platoul Cozla, oferind o panoramă completă asupra orașului Piatra Neamț, a lacului Bâtca Doamnei și a munților din jur. Până astăzi, peste un milion de pasageri au călătorit cu telegondola, confirmând valoarea și durabilitatea acestui proiect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}