'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from '@/src/i18n/navigation'
import Navigation from '@/src/components/Navigation'
import { useTranslations } from 'next-intl'
import Footer from '@/src/components/layout/Footer'

export default function RezervatiaDeZimbri() {
  const t = useTranslations('pagini.RezervatiaZimbri')
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/rezervatia-zimbri-hero.jpg"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{t.rich('t02', {
                br: () => <br />
              })}</h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">{t('t03')}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Introducere */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{t.rich('t04', {
                b: chunks => <strong>{chunks}</strong>
              })}</p>
            <p className="text-lg text-gray-700 leading-relaxed italic">{t('t05')}</p>
          </div>

          {/* Cum se vizitează și Experiențe */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t06')}</h2>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                      <h3 className="font-bold text-gray-900 mb-2">{t('t07')}</h3>
                      <p className="text-gray-700 text-sm">{t('t08')}</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                      <h3 className="font-bold text-gray-900 mb-2">{t('t09')}</h3>
                      <p className="text-gray-700 text-sm">{t('t10')}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t11')}</h2>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-start gap-2">{t.rich('t12', {
                        span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                        span2: chunks => <span>{chunks}</span>
                      })}</p>
                    <p className="flex items-start gap-2">{t.rich('t13', {
                        span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                        span2: chunks => <span>{chunks}</span>
                      })}</p>
                    <p className="flex items-start gap-2">{t.rich('t14', {
                        span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                        span2: chunks => <span>{chunks}</span>
                      })}</p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/rezervatia-zimbri-1.jpg"
                  alt={t('t15')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Informații practice */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Acces & Când */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t16')}</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">{t('t17')}</p>
                  <p className="text-sm">{t('t18')}</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-900 mb-2">{t('t19')}</p>
                  <p className="text-sm">{t.rich('t20', {
                      b: chunks => <strong>{chunks}</strong>
                    })}</p>
                  <p className="text-sm">{t.rich('t21', {
                      b: chunks => <strong>{chunks}</strong>
                    })}</p>
                  <p className="text-sm">{t.rich('t22', {
                      b: chunks => <strong>{chunks}</strong>
                    })}</p>
                </div>
              </div>
            </div>
            
            {/* Reguli */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t23')}</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p className="flex items-start gap-2">{t.rich('t24', {
                    span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                    span2: chunks => <span>{chunks}</span>
                  })}</p>
                <p className="flex items-start gap-2">{t.rich('t25', {
                    span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                    span2: chunks => <span>{chunks}</span>
                  })}</p>
                <p className="flex items-start gap-2">{t.rich('t26', {
                    span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                    span2: chunks => <span>{chunks}</span>
                  })}</p>
                <p className="flex items-start gap-2">{t.rich('t27', {
                    span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                    span2: chunks => <span>{chunks}</span>
                  })}</p>
              </div>
            </div>
          </div>

          {/* În apropiere */}
          <div className="bg-white border-2 border-[#B7D662] rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('t28')}</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{t('t29')}</h4>
                <p className="text-gray-600 text-sm">{t('t30')}</p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{t('t31')}</h4>
                <p className="text-gray-600 text-sm">{t('t32')}</p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{t('t33')}</h4>
                <p className="text-gray-600 text-sm">{t('t34')}</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/TXFE3a1zNvkKrQGs7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>{t('t35')}</a>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('t36')}</h2>
            <p className="text-xl text-white/80 mb-10">{t('t37')}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/tickets"
                className="bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t38')}</Link>
              
              <Link
                href="/pages/puncte-de-interes"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t39')}</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}