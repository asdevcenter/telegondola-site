'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from '@/src/i18n/navigation'
import Navigation from '@/src/components/Navigation'
import { useTranslations } from 'next-intl'
import Footer from '@/src/components/layout/Footer'

export default function GradinaPublicaNicuAlbu() {
  const t = useTranslations('pagini.GradinNicuAlbu')
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/gradina-nicu-albu-hero.jpg"
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('t06')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t('t07')}</p>
          </div>

          {/* Conținut principal */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('t08')}</h3>
                <p className="mb-6">{t('t09')}</p>
                
                <div className="bg-[#B7D662]/10 rounded-xl p-6 mb-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{t.rich('t10', {
                          b: chunks => <strong>{chunks}</strong>
                        })}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{t.rich('t11', {
                          b: chunks => <strong>{chunks}</strong>
                        })}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{t.rich('t12', {
                          b: chunks => <strong>{chunks}</strong>
                        })}</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('t13')}</h3>
                <p>{t.rich('t14', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</p>
              </div>
              
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/gradina-nicu-albu-1.jpg"
                  alt={t('t15')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Facilități */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t16')}</h2>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg text-gray-700 text-center mb-10">{t('t17')}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">{t('t18')}</h4>
                <p className="text-gray-600 text-sm">{t('t19')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">{t('t20')}</h4>
                <p className="text-gray-600 text-sm">{t('t21')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">{t('t22')}</h4>
                <p className="text-gray-600 text-sm">{t('t23')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">{t('t24')}</h4>
                <p className="text-gray-600 text-sm">{t('t25')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">{t('t26')}</h4>
                <p className="text-gray-600 text-sm">{t('t27')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">{t('t28')}</h4>
                <p className="text-gray-600 text-sm">{t('t29')}</p>
              </div>
            </div>
          </div>

          {/* Quote Final */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center mb-8">
            <p className="text-xl md:text-2xl font-medium italic">{t('t30')}</p>
          </div>

          {/* Locație */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/RdR1gYhjx5LNvNiP9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>{t('t31')}</a>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('t32')}</h2>
            <p className="text-xl text-white/80 mb-10">{t('t33')}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/tickets"
                className="bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t34')}</Link>
              
              <Link
                href="/pages/puncte-de-interes"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t35')}</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}