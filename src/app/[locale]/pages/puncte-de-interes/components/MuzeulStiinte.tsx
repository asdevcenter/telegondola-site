'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from '@/src/i18n/navigation'
import Navigation from '@/src/components/Navigation'
import { useTranslations } from 'next-intl'
import Footer from '@/src/components/layout/Footer'

export default function MuzeulStiinteNaturale() {
  const t = useTranslations('pagini.MuzeulStiinte')
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/muzeul-stiinte-naturale-hero.jpg"
            alt={t('t01')}
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{t('t02')}</h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('t03')}</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{t('t04')}</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{t('t05')}</span>
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
            <p className="text-lg text-gray-700 leading-relaxed">{t('t06')}</p>
          </div>

          {/* Despre muzeu Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t07')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">{t.rich('t08', {
                      b: chunks => <strong>{chunks}</strong>
                    })}</p>
                  <p className="mb-4">{t('t09')}</p>
                  <p className="mb-4">{t.rich('t10', {
                      b: chunks => <strong>{chunks}</strong>
                    })}</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t('t11')}</h3>
                  <ul className="space-y-2">
                    <li>{t.rich('t12', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t13', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t14', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/muzeul-stiinte-naturale-1.jpg"
                  alt={t('t15')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Expoziția permanentă Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t16')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="order-2 lg:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/muzeul-stiinte-naturale-2.jpg"
                  alt={t('t17')}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">{t('t18')}</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t('t19')}</h3>
                  <ul className="space-y-2">
                    <li>{t.rich('t20', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t21', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t22', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t23', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                  </ul>
                  <p className="mt-4 italic text-gray-600">{t('t24')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activitate științifică */}
          <div className="bg-[#B7D662]/10 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('t25')}</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#B7D662]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{t('t26')}</h4>
                <p className="text-sm">{t('t27')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#B7D662]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{t('t28')}</h4>
                <p className="text-sm">{t('t29')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#B7D662]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{t('t30')}</h4>
                <p className="text-sm">{t('t31')}</p>
              </div>
            </div>
          </div>

          {/* Program și tarife */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t32')}</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between py-2 border-b border-gray-200">{t.rich('t33', {
                    span1: chunks => <span className="font-semibold">{chunks}</span>,
                    span2: chunks => <span>{chunks}</span>
                  })}</div>
                <div className="flex justify-between py-2 border-b border-gray-200">{t.rich('t34', {
                    span1: chunks => <span className="font-semibold">{chunks}</span>,
                    span2: chunks => <span>{chunks}</span>
                  })}</div>
                <div className="flex justify-between py-2 border-b border-gray-200">{t.rich('t35', {
                    span1: chunks => <span className="font-semibold">{chunks}</span>,
                    span2: chunks => <span>{chunks}</span>
                  })}</div>
                <p className="text-sm text-gray-600 pt-2">{t('t36')}</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t37')}</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">{t.rich('t38', {
                    span1: chunks => <span className="text-gray-600">{chunks}</span>,
                    span2: chunks => <span className="font-bold text-gray-900">{chunks}</span>
                  })}</div>
                <div className="flex justify-between py-2 border-b border-gray-200">{t.rich('t39', {
                    span1: chunks => <span className="text-gray-600">{chunks}</span>,
                    span2: chunks => <span className="font-bold text-gray-900">{chunks}</span>
                  })}</div>
                <div className="flex justify-between py-2 border-b border-gray-200">{t.rich('t40', {
                    span1: chunks => <span className="text-gray-600">{chunks}</span>,
                    span2: chunks => <span className="font-bold text-gray-900">{chunks}</span>
                  })}</div>
                <div className="flex justify-between py-2">{t.rich('t41', {
                    span1: chunks => <span className="text-gray-600">{chunks}</span>,
                    span2: chunks => <span className="font-bold text-gray-900">{chunks}</span>
                  })}</div>
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
                <span>{t('t42')}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0233 224 211</span>
              </div>
            </div>
          </div>

          {/* Locație */}
          <div className="text-center mb-16">
            <a
              href="https://maps.app.goo.gl/wNJWhvZGtuGGysa3A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>{t('t43')}</a>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('t44')}</h2>
            <p className="text-xl text-white/80 mb-10">{t('t45')}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/tickets"
                className="bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t46')}</Link>
              
              <Link
                href="/pages/puncte-de-interes"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t47')}</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}