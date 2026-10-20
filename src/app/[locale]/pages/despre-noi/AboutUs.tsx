'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'
import { useTranslations } from 'next-intl'
import { Link } from '@/src/i18n/navigation'

export default function DespreNoi() {
  const t = useTranslations('despre')
  const [activeValue, setActiveValue] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  
  const coreValues = [
    {
      icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: t('valori.siguranta.titlu'),
      description: t('valori.siguranta.text')
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      title: t('valori.colaborare.titlu'),
      description: t('valori.colaborare.text')
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      title: t('valori.inovatie.titlu'),
      description: t('valori.inovatie.text')
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 19.14a1 1 0 01-.73-.31L9.73 15.3a5 5 0 117.07 0l-3.54 3.54a1 1 0 01-.73.31zM12 4a3 3 0 00-3 3 3 3 0 000 .39L12 10.5l3-3.09V7a3 3 0 00-3-3z"/>
        </svg>
      ),
      title: t('valori.experienta.titlu'),
      description: t('valori.experienta.text')
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % coreValues.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

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
      
{/* Hero Section - FĂRĂ Parallax pe mobile, smooth pe desktop */}
<section className="relative h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[500px] overflow-hidden">
  {/* Image container - FĂRĂ parallax effect */}
  <div className="absolute inset-0">
    <Image 
      src="/telegondola-panorama.jpg"
      alt={t('imagineHero')}
      fill
      className="object-cover"
      priority
      quality={90}
      style={{
        willChange: 'auto' // Previne tremuratul
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
  </div>
          
  {/* Content */}
  <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up">
        {t('titlu')}
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-white/90 animate-fade-in-up animation-delay-200">
        Telegondola Piatra-Neamț
      </p>
    </div>
  </div>
  
  {/* Scroll indicator - HIDDEN pe mobile, vizibil pe desktop */}
  <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
      <div className="w-1 h-1 bg-white rounded-full mt-2 animate-scroll-down"></div>
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="relative -mt-16 md:-mt-20 z-20 mb-16 md:mb-20 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: <svg className="w-7 h-7 md:w-8 md:h-8 text-[#B7D662]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, num: "22", label: t('statGondole'), sub: t('statGondoleSub') },
                { icon: <svg className="w-7 h-7 md:w-8 md:h-8 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, num: "8", label: t('statMinute'), sub: t('statMinuteSub') },
                { icon: <svg className="w-7 h-7 md:w-8 md:h-8 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>, num: t('valKm'), label: t('statKm'), sub: t('statKmSub') },
                { icon: <svg className="w-7 h-7 md:w-8 md:h-8 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, num: "1M+", label: t('statVizitatori'), sub: t('statVizitatoriSub') }
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#B7D662]/20 rounded-full mb-3 md:mb-4 transition-transform group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">{stat.num}</div>
                  <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                  <div className="text-xs md:text-sm text-gray-500">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-20 bg-gray-50 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group order-1 lg:order-1">
              <Image
                src="/telegondola-cabina.jpg"
                alt={t('imagineCabina')}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="space-y-4 md:space-y-6 order-2 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                {t.rich('calatorieTitlu', { c: (c) => <span className="text-[#B7D662]">{c}</span> })}
              </h2>
              <div className="prose prose-sm sm:prose-base md:prose-lg text-gray-600">
                <p>
                {t('calatorieText')}
                </p>
           
              </div>
              
              <div className="flex flex-wrap gap-3 md:gap-4">
                {[
                  { text: t('punctPanorama') },
                  { text: t('punctAltitudine') },
                  { text: t('punctEcologic') }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3 bg-white rounded-lg px-3 py-2 md:px-4 md:py-3 shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#B7D662]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700 font-medium text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Route */}
      <section className="py-16 md:py-20 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              {t('traseuTitlu')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {t('traseuText')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 md:w-1 h-full bg-gradient-to-b from-[#B7D662] via-[#a5c550] to-[#95b540]"></div>
              
              <div className="space-y-16 md:space-y-24">
                <div className="relative flex items-center">
                  <div className="flex-1"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full border-4 border-[#B7D662] flex items-center justify-center shadow-xl transition-transform hover:scale-110">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#B7D662]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                  </div>
                  <div className="flex-1 pl-20 md:pl-32">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{t('plecare')}</h3>
                    <p className="text-gray-600 text-sm md:text-base">Piața Gării 7</p>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">{t('altitudine', { m: 323 })}</p>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1 text-right pr-20 md:pr-32">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{t('panoramaOras')}</h3>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full border-4 border-[#B7D662] flex items-center justify-center shadow-xl transition-transform hover:scale-110">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#B7D662]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  </div>
                  <div className="flex-1"></div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full border-4 border-[#B7D662] flex items-center justify-center shadow-xl transition-transform hover:scale-110">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#B7D662]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
                    </svg>
                  </div>
                  <div className="flex-1 pl-20 md:pl-32">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{t('platou')}</h3>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">{t('altitudine', { m: 632 })}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#B7D662] via-[#a5c550] to-[#95b540] relative overflow-hidden fade-in-section">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 md:w-96 md:h-96 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 md:w-48 md:h-48 border-4 border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              {t('valoriTitlu')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              {t('valoriSubtitlu')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center transition-all duration-500 cursor-pointer ${
                  activeValue === index 
                    ? 'transform scale-105 shadow-2xl' 
                    : 'hover:transform hover:scale-105 hover:shadow-xl'
                }`}
                onClick={() => setActiveValue(index)}
              >
                <div className="text-[#B7D662] mb-3 md:mb-4">{value.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{value.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {coreValues.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveValue(index)}
                aria-label={coreValues[index].title}
                className="p-3 -m-1.5 flex items-center justify-center"
              >
                {/* punctul rămâne mic, dar zona de atingere are 32 px */}
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    activeValue === index ? 'bg-white w-8' : 'bg-white/50 w-2'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 md:p-12 transition-all hover:shadow-xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{t('misiune')}</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {t('misiuneText')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#B7D662]/20 to-[#a5c550]/20 rounded-2xl p-6 sm:p-8 md:p-12 transition-all hover:shadow-xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B7D662] rounded-full flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{t('viziune')}</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {t('viziuneText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 md:py-20 bg-gray-50 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            {t('povesteTitlu')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('povesteSubtitlu')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              <div className="space-y-8 md:space-y-12">
                {[
                  { year: "2004", title: t('istoric.2004.titlu'), desc: t('istoric.2004.text') },
                  { year: "2006", title: t('istoric.2006.titlu'), desc: t('istoric.2006.text') },
                  { year: "2007", title: t('istoric.2007.titlu'), desc: t('istoric.2007.text') },
                  { year: "2008", title: t('istoric.2008.titlu'), desc: t('istoric.2008.text'), highlight: true, extra: true },
                  { year: "2024", title: t('istoric.2024.titlu'), desc: t('istoric.2024.text') },
                  { year: t('prezent'), title: t('istoric.prezent.titlu'), desc: t('istoric.prezent.text'), pulse: true }
                ].map((event, i) => (
                  <div key={i} className="relative flex items-start">
                    <div className={`absolute left-4 md:left-8 ${event.highlight ? "w-4 h-4 md:w-6 md:h-6 ring-4 ring-[#B7D662]/20" : "w-3 h-3 md:w-4 md:h-4"} bg-[#B7D662] rounded-full -translate-x-1/2 ${event.pulse ? "animate-pulse" : ""}`}></div>
                    <div className="ml-12 md:ml-20">
                      <span className="text-[#B7D662] font-bold text-sm md:text-base">{event.year}</span>
                      <h4 className="text-lg md:text-xl font-bold text-gray-900 mt-1">{event.title}</h4>
                      <p className="text-gray-600 mt-2 text-sm md:text-base">{event.desc}</p>
                      {event.extra && (
                        <div className="mt-3 md:mt-4 p-3 md:p-4 bg-[#B7D662]/10 rounded-lg">
                          <p className="text-xs md:text-sm text-gray-700">
                            {t.rich('primaZi', { b: (c) => <span className="font-semibold">{c}</span> })}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 md:py-20 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              {t('tehnicTitlu')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('tehnicSubtitlu')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                  {t('specificatii')}
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {[
                    { title: t('spec.producator.titlu'), desc: t('spec.producator.text') },
                    { title: t('spec.capacitate.titlu'), desc: t('spec.capacitate.text') },
                    { title: t('spec.infrastructura.titlu'), desc: t('spec.infrastructura.text') },
                    { title: t('spec.viteza.titlu'), desc: t('spec.viteza.text') }
                  ].map((spec, i) => (
                    <div key={i} className="flex items-start gap-3 md:gap-4 transition-all hover:translate-x-1">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-[#B7D662]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#B7D662]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm md:text-base">{spec.title}</h4>
                        <p className="text-gray-600 text-xs md:text-sm">{spec.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/telegondola-tehnic.jpg"
                  alt={t('imagineTehnic')}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
                  <div className="text-white">
                    <h4 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{t('sigurantaCertificata')}</h4>
                    <p className="text-white/90 text-sm md:text-base">
                {t('sigurantaText')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-green-100 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-green-600 rounded-full mb-4 md:mb-6">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17h-13L12 5.8z"/>
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              {t('mediuTitlu')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
             {t('mediuSubtitlu')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                {t('mediuText1')}
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t('mediuText2')}
              </p>
              
              <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10">
                {[
                  { value: "100%", label: t('energieVerde') },
                  { value: "0", label: t('emisii') },
                  { value: "-85%", label: t('trafic') }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-4xl font-bold text-green-600 mb-1 md:mb-2">{stat.value}</div>
                    <div className="text-gray-600 text-xs md:text-base break-words hyphens-auto [overflow-wrap:anywhere]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Call to Action - FIXED */}
<section className="relative min-h-[60vh] md:min-h-screen flex items-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/journey-bg.jpg"
      alt=""
      className="w-full h-full object-cover"
      loading="lazy"
      style={{ objectPosition: 'center' }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
  </div>
  
  {/* Content */}
  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    <div className="max-w-4xl">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
        {t('ctaTitlu1')}<br />
        <span className="font-semibold italic">{t('ctaTitlu2')}</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 max-w-3xl">
                {t('ctaText')}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <Link 
          href="/pages/tickets" 
          className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#B7D662] hover:bg-[#a5c550] text-white font-semibold py-3 px-6 md:py-4 md:px-10 rounded-full text-base md:text-lg transition-all transform hover:scale-105 shadow-2xl"
        >
          <span>{t('cumparaOnline')}</span>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
        <Link 
          href="/pages/contact" 
          className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-medium py-3 px-6 md:py-4 md:px-10 rounded-full text-base md:text-lg transition-all"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>{t('contacteaza')}</span>
        </Link>
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

        @keyframes scroll-down {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-scroll-down {
          animation: scroll-down 2s ease-out infinite;
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