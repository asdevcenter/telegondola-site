'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from '@/src/i18n/navigation'
import Navigation from '@/src/components/Navigation'
import { useTranslations } from 'next-intl'
import Footer from '@/src/components/layout/Footer'

export default function LaculIzvorulMuntelui() {
  const t = useTranslations('pagini.LaculIzvorulMuntelui')
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/lacul-izvorul-muntelui-hero.jpg"
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
            <p className="text-xl md:text-2xl text-white/90 font-medium">{t('t03')}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Introducere */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{t('t04')}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{t('t05')}</p>
          </div>

          {/* Ce poți face */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t06')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/lacul-izvorul-muntelui-1.jpg"
                  alt={t('t07')}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('t08')}</h3>
                    <p className="text-gray-700">{t('t09')}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('t10')}</h3>
                    <p className="text-gray-700">{t('t11')}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('t12')}</h3>
                    <p className="text-gray-700">{t('t13')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Informații practice */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Cum ajungi & Când */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('t14')}</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>{t.rich('t15', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</p>
                    <p>{t.rich('t16', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('t17')}</h3>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <p>{t.rich('t18', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</p>
                    <p>{t.rich('t19', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</p>
                    <p>{t.rich('t20', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</p>
                    <p>{t.rich('t21', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</p>
                  </div>
                </div>
              </div>
              
              {/* Imagine 2 */}
              <div className="relative h-[400px] lg:h-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/lacul-izvorul-muntelui-2.jpg"
                  alt={t('t22')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sfaturi și În apropiere */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Sfaturi utile */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t23')}</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm">{t('t24')}</p>
                  <p className="text-sm">{t('t25')}</p>
                  <p className="text-sm">{t('t26')}</p>
                  <p className="text-sm">{t('t27')}</p>
                  <p className="text-sm">{t('t28')}</p>
                </div>
              </div>
              
              {/* În apropiere */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t29')}</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm">{t.rich('t30', {
                      b: chunks => <strong>{chunks}</strong>,
                      br: () => <br />
                    })}</p>
                  
                  <p className="text-sm">{t.rich('t31', {
                      b: chunks => <strong>{chunks}</strong>,
                      br: () => <br />
                    })}</p>
                  
                  <p className="text-sm">{t.rich('t32', {
                      b: chunks => <strong>{chunks}</strong>,
                      br: () => <br />
                    })}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Itinerar propus */}
          <div className="mb-16">
            <div className="bg-white border-2 border-[#B7D662] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('t33')}</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#B7D662] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    1
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">{t('t34')}</p>
                  <p className="text-gray-600 text-sm">{t('t35')}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#B7D662] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    2
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">{t('t36')}</p>
                  <p className="text-gray-600 text-sm">{t('t37')}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#B7D662] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    3
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">{t('t38')}</p>
                  <p className="text-gray-600 text-sm">{t('t39')}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#B7D662] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    4
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">{t('t40')}</p>
                  <p className="text-gray-600 text-sm">{t('t41')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Știați că */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white mb-16">
            <h3 className="text-2xl font-bold mb-4 text-center">{t('t42')}</h3>
            <div className="space-y-3 max-w-3xl mx-auto">
              <p>{t('t43')}</p>
              <p>{t('t44')}</p>
            </div>
          </div>

          {/* Quote final */}
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-700 italic font-medium">{t('t45')}</p>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('t46')}</h2>
            <p className="text-xl text-white/80 mb-10">{t('t47')}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/tickets"
                className="bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t48')}</Link>
              
              <Link
                href="/pages/puncte-de-interes"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t49')}</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}