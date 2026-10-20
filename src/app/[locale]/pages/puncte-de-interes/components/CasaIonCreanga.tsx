'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from '@/src/i18n/navigation'
import Navigation from '@/src/components/Navigation'
import { useTranslations } from 'next-intl'
import Footer from '@/src/components/layout/Footer'

export default function CasaIonCreanga() {
  const t = useTranslations('pagini.CasaIonCreanga')
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/casa-ion-creanga-hero.jpg"
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
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{t('t04')}</p>
          </div>

          {/* Universul copilăriei */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t05')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/casa-ion-creanga-1.jpg"
                  alt={t('t06')}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <p className="text-gray-700 leading-relaxed mb-6">{t('t07')}</p>
                <p className="text-gray-700 leading-relaxed">{t('t08')}</p>
              </div>
            </div>
          </div>

          {/* Parcul tematic */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t09')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <p className="text-gray-700 leading-relaxed mb-6">{t('t10')}</p>
                <p className="text-gray-700 leading-relaxed font-medium">{t('t11')}</p>
              </div>
              
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
                <Image
                  src="/puncte-de-interes/casa-ion-creanga-2.jpg"
                  alt={t('t12')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Ce vei vedea */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('t13')}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900">{t('t14')}</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">{t.rich('t15', {
                        span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                        span2: chunks => <span>{chunks}</span>
                      })}</li>
                    <li className="flex items-start gap-2">{t.rich('t16', {
                        span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                        span2: chunks => <span>{chunks}</span>
                      })}</li>
                    <li className="flex items-start gap-2">{t.rich('t17', {
                        span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                        span2: chunks => <span>{chunks}</span>
                      })}</li>
                    <li className="flex items-start gap-2">{t.rich('t18', {
                        span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                        span2: chunks => <span>{chunks}</span>
                      })}</li>
                    <li className="flex items-start gap-2">{t.rich('t19', {
                        span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                        span2: chunks => <span>{chunks}</span>
                      })}</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900">{t('t20')}</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">{t.rich('t21', {
                        span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                        span2: chunks => <span>{chunks}</span>
                      })}</li>
                    <li className="flex items-start gap-2">{t.rich('t22', {
                        span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                        span2: chunks => <span>{chunks}</span>
                      })}</li>
                    <li className="flex items-start gap-2">{t.rich('t23', {
                        span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                        span2: chunks => <span>{chunks}</span>
                      })}</li>
                    <li className="flex items-start gap-2">{t.rich('t24', {
                        span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                        span2: chunks => <span>{chunks}</span>
                      })}</li>
                    <li className="flex items-start gap-2">{t.rich('t25', {
                        span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                        span2: chunks => <span>{chunks}</span>
                      })}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Informații practice */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Cum ajungi */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t26')}</h3>
              <div className="space-y-4 text-gray-700">
                <p>{t.rich('t27', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</p>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">{t('t28')}</p>
                  <p className="text-sm">{t('t29')}</p>
                  <p className="text-sm">{t('t30')}</p>
                  <p className="text-sm">{t('t31')}</p>
                </div>
                <p className="text-sm">{t('t32')}</p>
              </div>
            </div>
            
            {/* Perfect pentru */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t33')}</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{t('t34')}</h4>
                  <p className="text-sm">{t('t35')}</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{t('t36')}</h4>
                  <p className="text-sm">{t('t37')}</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{t('t38')}</h4>
                  <p className="text-sm">{t('t39')}</p>
                </div>
                
                <p className="text-sm bg-white rounded-lg p-3 mt-4">{t.rich('t40', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/jec3Q9ZCzWixBsbS6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>{t('t41')}</a>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('t42')}</h2>
            <p className="text-xl text-white/80 mb-10">{t('t43')}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/tickets"
                className="bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t44')}</Link>
              
              <Link
                href="/pages/puncte-de-interes"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t45')}</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}