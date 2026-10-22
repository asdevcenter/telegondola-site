'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'
import { useTranslations, useLocale } from 'next-intl'
import { useTelegondola, programScurt } from '@/src/lib/telegondola'
import { BaraCos, ButonCos } from '@/src/components/Cos'

// Pozițiile particulelor din imaginea de sus. Sunt fixe (nu Math.random),
// ca pagina generată la build să fie identică cu cea din browser.
const PARTICULE = (() => {
  let x = 7
  const urmator = () => {
    x = (x * 16807) % 2147483647
    return x / 2147483647
  }
  return Array.from({ length: 20 }, () => ({
    left: (urmator() * 100).toFixed(2),
    top: (urmator() * 100).toFixed(2),
    delay: (urmator() * 10).toFixed(2),
    durata: (10 + urmator() * 20).toFixed(2),
  }))
})()

export default function Bilete() {
  const t = useTranslations('pagini.Tickets')
  const limba = useLocale()
  const tf = useTranslations('bilete')
  const tc = useTranslations('cos')
  const [activePromo, setActivePromo] = useState(0)

  // Programul vine de la panoul de administrare.
  const { program, preturi, bilete } = useTelegondola()
  const pret = (cod: string, deRezerva: number) => preturi[cod] ?? deRezerva
  const economie = (cod: string, deRezerva: number) =>
    bilete.find((b) => b.cod === cod)?.economie ?? deRezerva
  // ce se vinde online hotărăște panoul; până se încarcă datele, butonul e activ
  const online = (cod: string) => bilete.find((b) => b.cod === cod)?.online ?? true
  const zileValabil = bilete.find((b) => b.valabilZile)?.valabilZile ?? 90

  // Tipuri de bilete cu prețurile actualizate
  const ticketTypes = [
    {
      id: 'adult',
      cod: 'adult_dus_intors',
      name: t('t01'),
      price: pret('adult_dus_intors', 60),
      description: t('t02'),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      features: [tf('completa'), tf('valabil'), tf('reprogramat')],
      color: 'bg-gradient-to-br from-gray-800 to-gray-600'
    },
    {
      id: 'adult-single',
      cod: 'adult_o_cursa',
      name: t('t03'),
      price: pret('adult_o_cursa', 40),
      description: t('t04'),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      features: [tf('oCursa'), tf('urcareSau'), tf('valabil')],
      color: 'bg-gradient-to-br from-gray-700 to-gray-500'
    },
    {
      id: 'copil',
      cod: 'copil_dus_intors',
      name: t('t05'),
      price: pret('copil_dus_intors', 40),
      description: t('t06'),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      features: [tf('sub5'), tf('completa'), tf('valabil')],
      color: 'bg-gradient-to-br from-[#B7D662] to-[#95b540]',
      popular: true
    },
    {
      id: 'copil-single',
      cod: 'copil_o_cursa',
      name: t('t07'),
      price: pret('copil_o_cursa', 30),
      description: t('t08'),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      features: [tf('varsta'), tf('oCursa'), tf('valabil')],
      color: 'bg-gradient-to-br from-[#a5c550] to-[#8fa540]'
    },
    {
      id: 'local-adult',
      cod: 'localnic_adult',
      name: t('t09'),
      price: pret('localnic_adult', 25),
      description: t('t10'),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
      features: [tf('cetateni'), tf('limitrofe'), tf('act')],
      color: 'bg-gradient-to-br from-blue-600 to-blue-400',
      special: true
    },
    {
      id: 'local-copil',
      cod: 'localnic_copil',
      name: t('t11'),
      price: pret('localnic_copil', 15),
      description: t('t12'),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
      features: [tf('copii514'), tf('dinPN'), tf('actParinte')],
      color: 'bg-gradient-to-br from-blue-500 to-blue-300'
    }
  ]

  // Oferte speciale
  const specialOffers = [
    {
      id: 'grup20',
      name: t('t13'),
      description: t('t14'),
      price: tf('pretGrup', { adult: pret('grup20_adult', 40), copil: pret('grup20_copil', 25) }),
      features: [tf('insotitor'), tf('urcareSi')],

    },
    {
      id: 'grup100',
      name: t('t15'),
      description: t('t16'),
      price: tf('pretGrup', { adult: pret('grup100_adult', 30), copil: pret('grup100_copil', 20) }),
      features: [tf('insotitor'), tf('urcareSi')],

      highlight: true
    }
  ]

  // Abonamente
  const subscriptions = [
    {
      id: 'abo5adult',
      cod: 'abonament_5_adult',
      name: t('t17'),
      price: pret('abonament_5_adult', 100),
      description: t('t18'),
      savings: economie('abonament_5_adult', 100),
      color: 'from-orange-500 to-orange-400'
    },
    {
      id: 'abo5copil',
      cod: 'abonament_5_copil',
      name: t('t19'),
      price: pret('abonament_5_copil', 50),
      description: t('t20'),
      savings: economie('abonament_5_copil', 100),
      color: 'from-pink-500 to-pink-400'
    },
    {
      id: 'abo10adult',
      cod: 'abonament_10_adult',
      name: t('t21'),
      price: pret('abonament_10_adult', 150),
      description: t('t22'),
      savings: economie('abonament_10_adult', 250),
      color: 'from-purple-500 to-purple-400'
    },
    {
      id: 'abo10copil',
      cod: 'abonament_10_copil',
      name: t('t23'),
      price: pret('abonament_10_copil', 100),
      description: t('t24'),
      savings: economie('abonament_10_copil', 200),
      color: 'from-indigo-500 to-indigo-400'
    }
  ]

  // Auto-advance promo carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePromo((prev) => (prev + 1) % 4)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  // Galerie imagini
  const galleryImages = [
    '/galerie/img-1.jpg',
    '/galerie/img-2.jpg',
    '/galerie/img-3.jpg',
    '/galerie/img-4.jpg'
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Original Design */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  activePromo === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                 src="/contact-hero.jpg"
                  alt={t('t25')}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={75}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          </div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {PARTICULE.map((p, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  animationDelay: `${p.delay}s`,
                  animationDuration: `${p.durata}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 lg:px-8">
          {/* <div className="mb-6 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7D662] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B7D662]"></span>
              </span>
              <span className="text-white/90 text-xs font-medium tracking-wider uppercase">Deschis 365 zile pe an</span>
            </div>
          </div> */}

          <h1 className="text-white mb-6 max-w-5xl mx-auto font-sora">{t.rich('t26', {
              span1: chunks => <span
                className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-2 animate-fade-in-up">{chunks}</span>,

              span2: chunks => <span
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in-up animation-delay-200">{chunks}</span>,

              span3: chunks => <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#B7D662] to-[#95b540]">{chunks}</span>
            })}</h1>

          <p className="text-white/80 text-base md:text-lg lg:text-xl mb-10 max-w-2xl animate-fade-in-up animation-delay-400">{t.rich('t27', {
              br: () => <br />
            })}</p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 min-[400px]:gap-8 md:gap-16 animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <div className="text-xl min-[400px]:text-2xl md:text-3xl font-bold text-[#B7D662] whitespace-nowrap">{t('t28')}</div>
              <div className="text-xs md:text-sm text-white/70 break-words hyphens-auto">{t('t29')}</div>
            </div>
            <div className="text-center">
              <div className="text-xl min-[400px]:text-2xl md:text-3xl font-bold text-[#B7D662] whitespace-nowrap">{t('t30')}</div>
              <div className="text-xs md:text-sm text-white/70 break-words hyphens-auto">{t('t31')}</div>
            </div>
            <div className="text-center">
              <div className="text-xl min-[400px]:text-2xl md:text-3xl font-bold text-[#B7D662] whitespace-nowrap">{t('t32')}</div>
              <div className="text-xs md:text-sm text-white/70 break-words hyphens-auto">{t('t33')}</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}

      </section>

      {/* Date Picker Section - OPTIMIZED */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div className="flex-1 w-full text-center md:text-left">
                  <p className="text-lg font-semibold text-gray-900">{tc('valabil', { zile: zileValabil })}</p>
                  <p className="text-sm text-gray-600 mt-1">{tc('urmatorul')}</p>
                </div>

                {/* Program Badge - RESPONSIVE */}
                <div className="w-full md:w-auto">
                  <div className="bg-gradient-to-r from-[#B7D662] to-[#95b540] text-white rounded-xl p-4 md:p-5">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <svg className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <div className="text-center md:text-left">
                        <p className="font-semibold text-base md:text-lg">{t('t39')}</p>
                        <p className="text-xs md:text-sm text-white/90">
                          {programScurt(program, limba)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tickets Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-semibold text-gray-900 mb-4">{t.rich('t40', {
                span1: chunks => <span className="text-[#B7D662] font-bold">{chunks}</span>
              })}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('t41')}</p>
          </div>

          {/* Ticket Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
            {ticketTypes.map((ticket) => (
              <div
                key={ticket.id}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 ${
                  ticket.popular ? 'ring-2 ring-[#B7D662]' : ''
                } ${ticket.special ? 'ring-2 ring-blue-500' : ''}`}
              >
{ticket.popular && (
  <div className="absolute top-1 right-4 bg-[#B7D662] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">{t('t42')}</div>
)}
{ticket.special && (
  <div className="absolute top-1 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">{t('t43')}</div>
)}

                {/* Header with gradient */}
                <div className={`${ticket.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      {ticket.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{t('t44', {
                          v1: ticket.price
                        })}</div>
                      <div className="text-sm text-white/80">{ticket.description}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{ticket.name}</h3>
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {ticket.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#B7D662] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Add button */}
                  <ButonCos cod={ticket.cod} nume={ticket.name} disponibil={online(ticket.cod)} />
                </div>
              </div>
            ))}
          </div>

          {/* Oferte Speciale */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">{t.rich('t46', {
                span1: chunks => <span className="text-[#B7D662]">{chunks}</span>
              })}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {specialOffers.map((offer) => (
                <div
                  key={offer.id}
                  className={`bg-gradient-to-r ${offer.highlight ? 'from-[#B7D662] to-[#95b540]' : 'from-gray-700 to-gray-600'} rounded-2xl p-6 text-white relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all`}
                >
                  {/* <div className="absolute top-0 right-0 text-6xl opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                    {offer.icon}
                  </div> */}
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-2">{offer.name}</h4>
                    <p className="text-white/90 mb-4">{offer.description}</p>
                    <div className="text-2xl font-bold mb-3">{offer.price}</div>
                    <ul className="space-y-1">
                      {offer.features.map((feature, i) => (
                        <li key={i} className="text-sm text-white/80 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Abonamente */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">{t.rich('t47', {
                span1: chunks => <span className="text-[#B7D662]">{chunks}</span>
              })}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subscriptions.map((sub) => (
                <div key={sub.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6">
                  <div className={`h-2 bg-gradient-to-r ${sub.color} rounded-full mb-4`}></div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{sub.name}</h4>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{t('t48', {
                      v1: sub.price
                    })}</div>
                  <p className="text-sm text-gray-600 mb-3">{sub.description}</p>
                  <div className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full inline-block mb-4">{t('t49', {
                      v1: sub.savings
                    })}</div>
                  <ButonCos cod={sub.cod} nume={sub.name} disponibil={online(sub.cod)} />
                </div>
              ))}
            </div>
          </div>

          {/* Note importante */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">{t('t50')}</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>{t.rich('t51', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t52', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t53', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t54', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t55', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
              </ul>
            </div>
          </div>

      {/* Photo Gallery Mini */}
<div className="max-w-6xl mx-auto mb-16">
  <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">{t.rich('t56', {
      span1: chunks => <span className="text-[#B7D662]">{chunks}</span>
    })}</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[1, 2, 3, 4].map((num) => (
      <div key={num} className="relative aspect-square rounded-xl overflow-hidden group">
        <Image
          src={`/galerie/img-${num}.jpg`}
          alt={tf('foto', { nr: num })}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <p className="text-white text-sm font-medium">
            {num === 1 && 'Panoramă spectaculoasă'}
            {num === 2 && 'Vârful Cozla'}
            {num === 3 && 'Apus magic'}
            {num === 4 && 'Orașul de sus'}
          </p>
        </div> */}
      </div>
    ))}
  </div>
</div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#B7D662]/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-1">{t('t57')}</h4>
              <p className="text-sm text-gray-600">{t('t58')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#B7D662]/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-1">{t('t59')}</h4>
              <p className="text-sm text-gray-600">{t('t60')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#B7D662]/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-1">{t('t61')}</h4>
              <p className="text-sm text-gray-600">{t('t62')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#B7D662]/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-1">{t('t63')}</h4>
              <p className="text-sm text-gray-600">{t('t64')}</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section - FIXED fără zoom */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">{t.rich('t65', {
                br: () => <br />,
                span1: chunks => <span className="font-semibold italic text-[#B7D662]">{chunks}</span>
              })}</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 max-w-3xl">{t('t66')}</p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="tel:+40724538928"
                className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#B7D662] hover:bg-[#a5c550] text-white font-semibold py-3 px-6 md:py-4 md:px-10 rounded-full text-base md:text-lg transition-all transform hover:scale-105 shadow-2xl"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+40 724 538 928</span>
              </a>
              <a
                href="mailto:office@perlainvest.ro"
                className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-medium py-3 px-6 md:py-4 md:px-10 rounded-full text-base md:text-lg transition-all"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{t('t67')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <BaraCos
        produse={[...ticketTypes, ...subscriptions].map((x) => ({ cod: x.cod, nume: x.name, pret: x.price }))}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(10px) translateX(-10px);
          }
          75% {
            transform: translateY(-10px) translateX(5px);
          }
        }

        @keyframes scroll-down {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
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

        .animate-float {
          animation: float linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
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
    </div>
  );
}