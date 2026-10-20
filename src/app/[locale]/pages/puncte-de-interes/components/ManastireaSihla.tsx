'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from '@/src/i18n/navigation'
import Navigation from '@/src/components/Navigation'
import { useTranslations } from 'next-intl'
import Footer from '@/src/components/layout/Footer'

export default function ManastireaSihla() {
  const t = useTranslations('pagini.ManastireaSihla')
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/manastirea-sihla-hero.jpg"
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span>{t('t03')}</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>{t('t04')}</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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

          {/* Conținut principal */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/manastirea-sihla-1.jpg"
                  alt={t('t07')}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('t08')}</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{t('t09')}</p>
                    <p className="text-gray-700">{t('t10')}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{t('t11')}</p>
                    <p className="text-gray-700">{t('t12')}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{t('t13')}</p>
                    <p className="text-gray-700">{t('t14')}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{t('t15')}</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>{t('t16')}</li>
                      <li>{t('t17')}</li>
                      <li>{t('t18')}</li>
                      <li>{t('t19')}</li>
                      <li>{t('t20')}</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{t('t21')}</p>
                    <p className="text-gray-700">{t('t22')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sfinți */}
          <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('t23')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">{t('t24')}</h4>
                <p className="text-gray-600 text-sm">{t('t25')}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">{t('t26')}</h4>
                <p className="text-gray-600 text-sm">{t('t27')}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">{t('t28')}</h4>
                <p className="text-gray-600 text-sm">{t('t29')}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">{t('t30')}</h4>
                <p className="text-gray-600 text-sm">{t('t31')}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">{t('t32')}</h4>
                <p className="text-gray-600 text-sm">{t('t33')}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">{t('t34')}</h4>
                <p className="text-gray-600 text-sm">{t('t35')}</p>
              </div>
            </div>
          </div>

          {/* Contact și Locație */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Contact */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t36')}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t('t37')}</p>
                    <p className="text-gray-600 text-sm">{t('t38')}</p>
                    <p className="text-gray-600 text-sm">{t('t39')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t('t40')}</p>
                    <a href="https://manastireasihla.ro" target="_blank" rel="noopener noreferrer" className="text-[#B7D662] hover:underline text-sm">{t('t41')}</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t('t42')}</p>
                    <p className="text-gray-600 text-sm">{t('t43')}</p>
                    <p className="text-gray-600 text-sm">{t('t44')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t('t45')}</p>
                    <p className="text-gray-600 text-sm">{t('t46')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cum ajungi */}
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t47')}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t('t48')}</p>
                    <p className="text-gray-600 text-sm">{t('t49')}</p>
                    <p className="text-gray-600 text-sm">{t('t50')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t('t51')}</p>
                    <p className="text-gray-600 text-sm">{t('t52')}</p>
                    <p className="text-gray-600 text-sm">{t('t53')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B7D662] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{t('t54')}</p>
                    <p className="text-gray-600 text-sm">{t('t55')}</p>
                    <p className="text-gray-600 text-sm">{t('t56')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/PnPXggSVwTRLATQ88"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>{t('t57')}</a>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('t58')}</h2>
            <p className="text-xl text-white/80 mb-10">{t('t59')}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/tickets"
                className="bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t60')}</Link>
              
              <Link
                href="/pages/puncte-de-interes"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t61')}</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}