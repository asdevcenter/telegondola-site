'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from '@/src/i18n/navigation'
import Navigation from '@/src/components/Navigation'
import { useTranslations } from 'next-intl'
import Footer from '@/src/components/layout/Footer'

export default function LaculRosu() {
  const t = useTranslations('pagini.LaculRosu')
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/lacul-rosu-hero.jpg"
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
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{t('t04')}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{t('t05')}</p>
          </div>

          {/* Ce îl face unic */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t06')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/lacul-rosu-1.jpg"
                  alt={t('t07')}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>{t.rich('t08', {
                      strong1: chunks => <strong className="text-gray-900">{chunks}</strong>
                    })}</p>
                  <p>{t.rich('t09', {
                      strong1: chunks => <strong className="text-gray-900">{chunks}</strong>
                    })}</p>
                  <p>{t.rich('t10', {
                      strong1: chunks => <strong className="text-gray-900">{chunks}</strong>
                    })}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ce poți face aici */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t11')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('t12')}</h3>
                    <p className="text-gray-700 leading-relaxed">{t('t13')}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('t14')}</h3>
                    <p className="text-gray-700 leading-relaxed">{t('t15')}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('t16')}</h3>
                    <p className="text-gray-700 leading-relaxed">{t('t17')}</p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
                <Image
                  src="/puncte-de-interes/lacul-rosu-2.jpg"
                  alt={t('t18')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Imagine panoramă */}
          <div className="mb-16">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/puncte-de-interes/lacul-rosu-3.jpg"
                alt={t('t19')}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Date tehnice și atmosferă */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('t20')}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{t('t21')}</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>{t('t22')}</li>
                      <li>{t('t23')}</li>
                      <li>{t('t24')}</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{t('t25')}</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>{t('t26')}</li>
                      <li>{t('t27')}</li>
                      <li>{t('t28')}</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{t('t29')}</p>
                    <p className="text-gray-700 leading-relaxed">{t.rich('t30', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{t('t31')}</p>
                    <p className="text-gray-700 leading-relaxed">{t('t32')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Informații practice */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Cum ajungi */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t33')}</h3>
              <div className="space-y-4 text-gray-700">
                <p>{t.rich('t34', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">{t('t35')}</p>
                  <p>{t('t36')}</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">{t('t37')}</p>
                  <p>{t('t38')}</p>
                </div>
                <p className="text-sm bg-white rounded-lg p-3">{t.rich('t39', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</p>
              </div>
            </div>
            
            {/* Merită să știi */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t40')}</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">{t('t41')}</p>
                  <p>{t('t42')}</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-900 mb-2">{t('t43')}</p>
                  <ul className="space-y-1">
                    <li>{t('t44')}</li>
                    <li>{t('t45')}</li>
                    <li>{t('t46')}</li>
                    <li>{t('t47')}</li>
                  </ul>
                </div>
                
                <p className="text-sm bg-white rounded-lg p-3">{t.rich('t48', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/TSJwB8FgHYJVRqF38"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>{t('t49')}</a>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('t50')}</h2>
            <p className="text-xl text-white/80 mb-10">{t('t51')}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/tickets"
                className="bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t52')}</Link>
              
              <Link
                href="/pages/puncte-de-interes"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t53')}</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}