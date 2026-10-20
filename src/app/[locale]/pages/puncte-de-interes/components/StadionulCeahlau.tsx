'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from '@/src/i18n/navigation'
import Navigation from '@/src/components/Navigation'
import { useTranslations } from 'next-intl'
import Footer from '@/src/components/layout/Footer'

export default function StadionulCeahlaul() {
  const t = useTranslations('pagini.StadionulCeahlau')
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/stadionul-ceahlaul-hero.jpg"
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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

          {/* Stadionul Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t07')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">{t.rich('t08', {
                      b: chunks => <strong>{chunks}</strong>
                    })}</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t('t09')}</h3>
                  <ul className="space-y-2">
                    <li>{t('t10')}</li>
                    <li>{t('t11')}</li>
                    <li>{t('t12')}</li>
                    <li>{t('t13')}</li>
                    <li>{t('t14')}</li>
                    <li>{t('t15')}</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/stadionul-ceahlaul-1.jpg"
                  alt={t('t16')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Clubul Sportiv Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t17')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="order-2 lg:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/stadionul-ceahlaul-2.jpg"
                  alt={t('t18')}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">{t.rich('t19', {
                      b: chunks => <strong>{chunks}</strong>
                    })}</p>
                  <p className="mb-4">{t('t20')}</p>
               
                </div>
              </div>
            </div>
          </div>

          {/* Secțiuni sportive */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t21')}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">{t('t22')}</h4>
                <p className="text-gray-600 text-sm">{t('t23')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">{t('t24')}</h4>
                <p className="text-gray-600 text-sm">{t('t25')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">{t('t26')}</h4>
                <p className="text-gray-600 text-sm">{t('t27')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">{t('t28')}</h4>
                <p className="text-gray-600 text-sm">{t('t29')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">{t('t30')}</h4>
                <p className="text-gray-600 text-sm">{t('t31')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">{t('t32')}</h4>
                <p className="text-gray-600 text-sm">{t('t33')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">{t('t34')}</h4>
                <p className="text-gray-600 text-sm">{t('t35')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">{t('t36')}</h4>
                <p className="text-gray-600 text-sm">{t('t37')}</p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center mb-8">
            <p className="text-xl md:text-2xl font-medium italic">{t('t38')}</p>
          </div>

          {/* Contact */}
          <div className="mb-8">
            <div className="bg-white border-2 border-[#B7D662] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('t39')}</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-[#B7D662]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900">{t('t40')}</p>
                  <p className="text-gray-600 text-sm">{t('t41')}</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-[#B7D662]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900">{t('t42')}</p>
                  <a href="mailto:office@csmceahlaul.ro" className="text-[#B7D662] hover:underline text-sm">{t('t43')}</a>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-[#B7D662]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900">{t('t44')}</p>
                  <a href="https://csmceahlaul.ro" target="_blank" rel="noopener noreferrer" className="text-[#B7D662] hover:underline text-sm">{t('t45')}</a>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-[#B7D662]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-[#B7D662]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <p className="font-semibold text-gray-900">{t('t46')}</p>
                  <a href="https://www.facebook.com/CSMCeahlaul" target="_blank" rel="noopener noreferrer" className="text-[#B7D662] hover:underline text-sm">{t('t47')}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Locație */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/K39hVBaJVvHifQcq7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>{t('t48')}</a>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('t49')}</h2>
            <p className="text-xl text-white/80 mb-10">{t('t50')}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/tickets"
                className="bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t51')}</Link>
              
              <Link
                href="/pages/puncte-de-interes"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t52')}</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}