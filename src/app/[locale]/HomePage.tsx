'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Sora, Inter } from 'next/font/google'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/src/i18n/navigation'
import { useTelegondola, programGrupat } from '@/src/lib/telegondola'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export default function Home() {
  // Programul și starea vin de la panoul de administrare.
  // Nu se mai scriu aici: se modifică din admin și apar în cel mult un minut.
  const { gata, stare, program, preturi } = useTelegondola()
  const t = useTranslations('acasa')
  const limba = useLocale()
  const pret = (cod: string, deRezerva: number) => preturi[cod] ?? deRezerva
  const isOpen = stare.deschis
  const announcement = stare.mesaj

  const [scrolled, setScrolled] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500)
  }, [])

  return (
    <div className={`${sora.variable} ${inter.variable} font-inter`}>


      <Navigation />

      {/* Hero Section - OPTIMIZAT */}
      <section className="relative h-screen overflow-hidden">
 <div className="absolute inset-0">
    {[0, 1, 2].map((index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          currentSlide === index ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src={`/hero-telegondola-${index + 1}.jpg`}
          alt={t('imagineHero', { n: index + 1 })}
          fill
          className="object-cover"
          priority={index === 0}
          quality={90}
        />
      </div>
    ))}
  </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 lg:px-8">
          <div className={`mb-6 animate-fade-in-down transition-opacity ${gata ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2">
              <span className="relative flex h-2 w-2">
                {isOpen && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7D662] opacity-75"></span>}
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-[#B7D662]' : 'bg-red-500'}`}></span>
              </span>
              <span className="text-white/90 text-xs font-medium tracking-wider uppercase">
                {isOpen ? t('deschisAcum') : t('inchisAcum')}
              </span>
            </div>
          </div>


          {announcement && (
            <div className="mb-4 animate-fade-in-down animation-delay-200">
              <div className="inline-block bg-red-500/90 backdrop-blur-sm border border-red-400/30 rounded-lg px-4 py-2 max-w-md">
                <p className="text-white text-sm font-medium">{announcement}</p>
              </div>
            </div>
          )}

          {/* {announcement && (
  <div className="mb-4 animate-fade-in-down animation-delay-200">
  <div className="inline-block bg-[#B7D662]/90 backdrop-blur-sm border border-[#a5c550]/50 rounded-lg px-4 py-3 max-w-md">
  <p className="text-white text-sm font-medium whitespace-pre-line text-left">{announcement}</p>
</div>
  </div>
)} */}

          <h1 className="text-white mb-6 max-w-5xl mx-auto font-sora">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 animate-fade-in-up drop-shadow-2xl">
              {t('titlu1')}
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium animate-fade-in-up animation-delay-200 drop-shadow-xl">
              {t('titlu2')}
            </span>
          </h1>

          <p className="text-white text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl animate-fade-in-up animation-delay-400 drop-shadow-lg font-medium">
            {t('subtitlu')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
            <Link href="/pages/despre-noi" className="group inline-flex items-center gap-3 bg-[#B7D662] hover:bg-[#a5c550] text-white font-semibold py-3 px-8 rounded-full text-base transition-all shadow-lg hover:shadow-xl">
              <span>{t('despreNoi')}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link href="/pages/galerie" className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-full transition-all">
              <div className="relative w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span>{t('descopera')}</span>
            </Link>
          </div>
          <div className="mt-8 animate-fade-in-up animation-delay-800">
  <Link
    href="/pages/cozla-panoramic-view"
    className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 hover:border-white/40 rounded-full pl-4 pr-5 py-2.5 transition-all"
  >
    <span className="w-8 h-8 rounded-full bg-[#B7D662] flex items-center justify-center flex-shrink-0">
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 18h18M3 18v2m18-2v2M7 10V7a1 1 0 011-1h3a1 1 0 011 1v3" />
      </svg>
    </span>
    <span className="text-left leading-tight">
      <span className="block text-[10px] font-semibold text-[#B7D662] tracking-[0.15em] uppercase">
        {t('cazare')}
      </span>
      <span className="block text-sm md:text-base font-medium text-white">
        Cozla Panoramic View
      </span>
    </span>
    <svg className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </Link>
</div>
        </div>
        {/* Badge Cazare — Cozla Panoramic View */}


        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up animation-delay-800">
          <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-1 bg-white rounded-full mt-1.5 animate-scroll-down"></div>
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={t('slide', { n: index + 1 })}
              className={`w-8 h-1 rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? 'bg-[#B7D662] w-12'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Floating Stats Bar */}
      <section className="relative -mt-16 z-30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '1.9', unit: 'km', label: t('statLungime') },
                { value: '632', unit: 'm', label: t('statAltitudine') },
                { value: '8', unit: 'min', label: t('statDurata') },
                { value: '1200', unit: '/h', label: t('statCapacitate') }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-light text-gray-800">
                    {stat.value}<span className="text-xl text-gray-500">{stat.unit}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tickets Section - CU TOATE TARIFELE */}
      <section className="py-20 lg:py-24 bg-gray-50" id="bilete">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium text-[#B7D662] tracking-wider uppercase">{t('tarifeEticheta')}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-semibold text-gray-900 mt-2 mb-4">
              {t.rich('tarifeTitlu', { b: (c) => <span className="font-bold">{c}</span> })}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('tarifeSubtitlu')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Main Tickets Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 mb-8">
              {/* Adulți Dus-întors */}
              <div className="bg-white rounded-2xl p-6 lg:p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-sora font-medium mb-1 text-gray-900">{t('adulti')}</h3>
                <div className="text-3xl font-light text-gray-900 mb-1">{pret('adult_dus_intors', 60)}<span className="text-lg text-gray-500"> {t('lei')}</span></div>
                <p className="text-sm text-gray-500 mb-4">{t('dusIntors')}</p>
                <div className="w-full bg-gray-100 text-gray-500 font-medium py-3 rounded-xl text-sm text-center flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t('indisponibil')}</span>
                </div>
              </div>

              {/* Adulți Simplu */}
              <div className="bg-white rounded-2xl p-6 lg:p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-sora font-medium mb-1 text-gray-900">{t('adulti')}</h3>
                <div className="text-3xl font-light text-gray-900 mb-1">{pret('adult_o_cursa', 40)}<span className="text-lg text-gray-500"> {t('lei')}</span></div>
                <p className="text-sm text-gray-500 mb-4">{t('oCursa')}</p>
                <div className="w-full bg-gray-100 text-gray-500 font-medium py-3 rounded-xl text-sm text-center flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t('indisponibil')}</span>
                </div>
              </div>

              {/* Copii Dus-întors */}
              <div className="bg-white rounded-2xl p-6 lg:p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-[#B7D662]">
                <div className="w-12 h-12 bg-[#B7D662]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#B7D662]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-1 text-gray-900">{t('copii')}</h3>
                <div className="text-3xl font-light text-gray-900 mb-1">{pret('copil_dus_intors', 40)}<span className="text-lg text-gray-500"> {t('lei')}</span></div>
                <p className="text-sm text-gray-500 mb-4">{t('dusIntors')}</p>
                <div className="w-full bg-gray-100 text-gray-500 font-medium py-3 rounded-xl text-sm text-center flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t('indisponibil')}</span>
                </div>
              </div>

              {/* Copii Simplu */}
              <div className="bg-white rounded-2xl p-6 lg:p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-1 text-gray-900">{t('copii')}</h3>
                <div className="text-3xl font-light text-gray-900 mb-1">{pret('copil_o_cursa', 30)}<span className="text-lg text-gray-500"> {t('lei')}</span></div>
                <p className="text-sm text-gray-500 mb-4">{t('oCursa')}</p>
                <div className="w-full bg-gray-100 text-gray-500 font-medium py-3 rounded-xl text-sm text-center flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t('indisponibil')}</span>
                </div>
              </div>
            </div>

            {/* Grupuri Section */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">{t('grup20')}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('adultiDusIntors')}</span>
                    <span className="font-semibold text-xl">{pret('grup20_adult', 40)} {t('lei')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('copii514')}</span>
                    <span className="font-semibold text-xl">{pret('grup20_copil', 25)} {t('lei')}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 bg-[#B7D662]/10 p-3 rounded-lg">
                  {t('insotitor')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">{t('grup100')}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('adultiDusIntors')}</span>
                    <span className="font-semibold text-xl">{pret('grup100_adult', 30)} {t('lei')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('copii514')}</span>
                    <span className="font-semibold text-xl">{pret('grup100_copil', 20)} {t('lei')}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 bg-[#B7D662]/10 p-3 rounded-lg">
                  {t('grupuriMari')}
                </p>
              </div>
            </div>

            {/* Abonamente Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 mb-8 text-white">
              <h3 className="text-2xl font-sora font-semibold mb-6">{t('abonamente')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{pret('abonament_5_adult', 100)} {t('lei')}</div>
                  <p className="text-white/80 text-sm">{t('calatoriiAdulti', { n: 5 })}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{pret('abonament_5_copil', 50)} {t('lei')}</div>
                  <p className="text-white/80 text-sm">{t('calatoriiCopii', { n: 5 })}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{pret('abonament_10_adult', 150)} {t('lei')}</div>
                  <p className="text-white/80 text-sm">{t('calatoriiAdulti', { n: 10 })}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{pret('abonament_10_copil', 100)} {t('lei')}</div>
                  <p className="text-white/80 text-sm">{t('calatoriiCopii', { n: 10 })}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/60 text-center">{t('notaCalatorie')}</p>
            </div>

            {/* Program Section */}
            <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{t('program')}</h3>
                </div>
                <div className="space-y-3">
                  {programGrupat(program, limba).map((r) => (
                    <div key={r.interval} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600">{r.zile}</span>
                      <span className="font-medium text-gray-900">{r.interval}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-3 bg-[#B7D662]/10 rounded-lg">
                  <p className="text-sm text-gray-700">{t('deschis365')}</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{t('speciale')}</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900 mb-1">{t('cetateni')}</p>
                    <p className="text-sm text-gray-600">{t('cetateniPret', { adulti: pret('localnic_adult', 25), copii: pret('localnic_copil', 15) })}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900 mb-1">{t('dizabilitati')}</p>
                    <p className="text-sm text-gray-600">{t('dizabilitatiText')}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900 mb-1">{t('pensionari')}</p>
                    <p className="text-sm text-gray-600">{t('pensionariText')}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900 mb-1">{t('sub5')}</p>
                    <p className="text-sm text-gray-600">{t('gratuit')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Interactive Map Section - OPTIMIZED */}
<section className="py-20 lg:py-24 bg-gradient-to-br from-[#B7D662] via-[#a5c550] to-[#95b540] relative overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-full opacity-10">
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white rounded-full"></div>
    </div>
  </div>

  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        {/* Stații cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="text-gray-800">
              <div className="w-12 h-12 bg-[#B7D662]/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-xl mb-2 text-gray-900">{t('plecare')}</h4>
              <p className="text-gray-600 mb-4">Piața Gării 7</p>
              <a
                href="https://maps.app.goo.gl/wA93S4whTgT3STtZ8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#B7D662] hover:bg-[#a5c550] text-white px-5 py-2.5 rounded-full transition font-medium shadow-md hover:shadow-lg"
              >
                {t('directii')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="text-gray-800">
              <div className="w-12 h-12 bg-[#B7D662]/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h4 className="font-semibold text-xl mb-2 text-gray-900">{t('varf')}</h4>
              <p className="text-gray-600 mb-4">{t('altitudineVarf')}</p>
            </div>
          </div>
        </div>

        {/* Detalii tehnice */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <h3 className="text-2xl font-medium text-gray-900 mb-6">{t('tehnice')}</h3>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#B7D662] rounded-full"></div>
              <span className="font-medium">{t('producator')}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#B7D662] rounded-full"></div>
              <span className="font-medium">{t('gondole')}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#B7D662] rounded-full"></div>
              <span className="font-medium">{t('viteza')}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#B7D662] rounded-full"></div>
              <span className="font-medium">{t('stalpi')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps - OPTIMIZED pentru mobile */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden bg-gray-200">
          {/* Placeholder pentru loading */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-2 text-gray-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm text-gray-500">{t('seIncarcaHarta')}</p>
            </div>
          </div>

          {/* Iframe Google Maps - OPTIMIZED */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.753590981863!2d26.3615745!3d46.9272262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473555c641748c49%3A0x67376e9d1e54a160!2sTelegondol%C4%83%20-%20sta%C8%9Bie%20plecare%20-%20Piatra%20Neam%C8%9B!5e0!3m2!1sro!2sro!4v1761296944318!5m2!1sro!2sro"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('titluHarta')}
            className="absolute inset-0"
          />
        </div>

        {/* Fallback button dacă iframe nu se încarcă */}
        <div className="mt-3 text-center">
          <a
            href="https://maps.app.goo.gl/wA93S4whTgT3STtZ8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#B7D662] hover:text-[#a5c550] font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {t('deschideMaps')}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Premium Gallery - OPTIMIZED */}
<section className="py-20 lg:py-24 bg-white" id="galerie">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="text-center mb-12">
      <span className="text-xs font-medium text-[#B7D662] tracking-wider uppercase">{t('galerieEticheta')}</span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-semibold text-gray-900 mt-2 mb-4">
        {t.rich('galerieTitlu', { i: (c) => <span className="font-bold italic">{c}</span> })}
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {t('galerieSubtitlu')}
      </p>
    </div>

    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] lg:auto-rows-[200px]">
        {[
          { span: 'col-span-2 row-span-2', img: 1 },
          { span: '', img: 2 },
          { span: 'row-span-2', img: 3 },
          { span: '', img: 4 },
          { span: 'col-span-2', img: 5 },
          { span: '', img: 6 },
          { span: 'row-span-2', img: 7 },
          { span: '', img: 8 },
          { span: '', img: 9 },
          { span: 'col-span-2 row-span-2', img: 10 },
          { span: '', img: 11 },
          { span: '', img: 12 },
        ].map((item, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-xl cursor-pointer ${item.span} will-change-transform`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img
              src={`/galerie/img${item.img}.jpg`}
              alt={t('galerieAlt', { n: item.img })}
              loading={index < 3 ? "eager" : "lazy"}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/pages/galerie"
          className="group inline-flex items-center gap-3 bg-[#B7D662] hover:bg-[#a5c550] text-white font-medium py-4 px-8 rounded-full transition-all transform hover:scale-105"
        >
          <span>{t('veziGaleria')}</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
</section>
{/* CTA Section - FIXED cu 2 butoane */}
<section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Background Image - OPTIMIZED */}
  <div className="absolute inset-0">
    <img
      src="/journey-bg.jpg"
      alt=""
      className="w-full h-full object-cover"
      loading="lazy"
      style={{
        objectPosition: 'center',
        minWidth: '100%',
        minHeight: '100%'
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    <div className="max-w-4xl">
      <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sora font-bold text-white mb-8 leading-tight">
        {t('ctaTitlu1')}<br />
        <span className="font-semibold italic">{t('ctaTitlu2')}</span>
      </h2>
      <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl">
        {t('ctaText')}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/pages/galerie"
          className="inline-flex items-center justify-center gap-3 bg-[#B7D662] hover:bg-[#a5c550] text-white font-semibold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-2xl"
        >
          <span>{t('descopera')}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
        <Link
          href="/pages/tickets"
          className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-medium py-4 px-10 rounded-full text-lg transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
          <span>{t('cumpara')}</span>
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Footer Component */}
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

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
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

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-scroll-down {
          animation: scroll-down 2s ease-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }
      `}</style>

      <style jsx global>{`
        .font-sora {
          font-family: var(--font-sora);
        }

        .font-inter {
          font-family: var(--font-inter);
        }

        body {
          font-family: var(--font-inter);
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-sora);
        }
      `}</style>
    </div>
  )
}