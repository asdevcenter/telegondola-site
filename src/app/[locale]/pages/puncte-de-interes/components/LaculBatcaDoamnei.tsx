'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from '@/src/i18n/navigation'
import Navigation from '@/src/components/Navigation'
import { useTranslations } from 'next-intl'
import Footer from '@/src/components/layout/Footer'

export default function LaculBatcaDoamnei() {
  const t = useTranslations('pagini.LaculBatcaDoamnei')
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/lacul-batca-doamnei-hero.jpg"
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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

          {/* Despre lac Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t07')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">{t('t08')}</p>
                  <p className="mb-4">{t('t09')}</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t('t10')}</h3>
                  <ul className="space-y-2">
                    <li>{t.rich('t11', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t12', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t13', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t14', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t15', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/lacul-batca-doamnei-1.jpg"
                  alt={t('t16')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Ecosistem și biodiversitate */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t17')}</h2>
            
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">{t('t18')}</p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('t19')}</h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl mb-2"></div>
                    <p className="font-semibold text-gray-900 text-sm">{t('t20')}</p>
                    <p className="text-gray-600 text-xs">{t('t21')}</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl mb-2"></div>
                    <p className="font-semibold text-gray-900 text-sm">{t('t22')}</p>
                    <p className="text-gray-600 text-xs">{t('t23')}</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl mb-2"></div>
                    <p className="font-semibold text-gray-900 text-sm">{t('t24')}</p>
                    <p className="text-gray-600 text-xs">{t('t25')}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mt-6 italic">{t('t26')}</p>
              </div>
            </div>
          </div>

          {/* Legătura cu istoria + Lacul astăzi */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="order-2 lg:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/lacul-batca-doamnei-2.jpg"
                  alt={t('t27')}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('t28')}</h2>
                <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                  <p className="mb-4">{t.rich('t29', {
                      b: chunks => <strong>{chunks}</strong>
                    })}</p>
                  <p className="mb-6">{t('t30')}</p>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('t31')}</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>{t('t32')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activități */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t33')}</h2>
            
            <div className="bg-white border-2 border-[#B7D662] rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">{t('t34')}</p>
                    <p className="text-gray-600 text-sm">{t('t35')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">{t('t36')}</p>
                    <p className="text-gray-600 text-sm">{t('t37')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">{t('t38')}</p>
                    <p className="text-gray-600 text-sm">{t('t39')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">{t('t40')}</p>
                    <p className="text-gray-600 text-sm">{t('t41')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">{t('t42')}</p>
                    <p className="text-gray-600 text-sm">{t('t43')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B7D662] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">{t('t44')}</p>
                    <p className="text-gray-600 text-sm">{t('t45')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box Final */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
            <p className="text-xl md:text-2xl font-medium italic">{t('t46')}</p>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('t47')}</h2>
            <p className="text-xl text-white/80 mb-10">{t('t48')}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/tickets"
                className="bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t49')}</Link>
              
              <Link
                href="/pages/puncte-de-interes"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t50')}</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}