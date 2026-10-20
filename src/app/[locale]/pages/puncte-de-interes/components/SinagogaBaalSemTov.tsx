'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from '@/src/i18n/navigation'
import Navigation from '@/src/components/Navigation'
import { useTranslations } from 'next-intl'
import Footer from '@/src/components/layout/Footer'

export default function SinagogaBaalSemTov() {
  const t = useTranslations('pagini.SinagogaBaalSemTov')
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/sinagoga-hero.jpg"
            alt={t('t01')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{t('t02')}</h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>{t('t03')}</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>1766</span>
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{t('t04')}</span>
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
            <p className="text-lg text-gray-700 leading-relaxed">{t('t05')}</p>
          </div>

          {/* Arhitectură și detalii Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t06')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">{t('t07')}</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t('t08')}</h3>
                  <ul className="space-y-2">
                    <li>{t.rich('t09', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t10', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t11', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t12', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/sinagoga-1.jpg"
                  alt={t('t13')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Istorie și restaurări Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t14')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="order-2 lg:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/sinagoga-2.jpg"
                  alt={t('t15')}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">{t('t16')}</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t('t17')}</h3>
                  <ul className="space-y-2">
                    <li>{t('t18')}</li>
                    <li>{t('t19')}</li>
                    <li>{t('t20')}</li>
                    <li>{t('t21')}</li>
                    <li>{t('t22')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Date tehnice și arhitectură */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t23')}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">{t.rich('t24', {
                    span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                    span2: chunks => <span>{chunks}</span>
                  })}</li>
                <li className="flex items-start gap-2">{t.rich('t25', {
                    span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                    span2: chunks => <span>{chunks}</span>
                  })}</li>
                <li className="flex items-start gap-2">{t.rich('t26', {
                    span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                    span2: chunks => <span>{chunks}</span>
                  })}</li>
                <li className="flex items-start gap-2">{t.rich('t27', {
                    span1: chunks => <span className="text-[#B7D662] mt-1">{chunks}</span>,
                    span2: chunks => <span>{chunks}</span>
                  })}</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t28')}</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">{t.rich('t29', {
                    span1: chunks => <span className="text-gray-600">{chunks}</span>,
                    span2: chunks => <span className="font-bold text-gray-900">{chunks}</span>
                  })}</div>
                <div className="flex justify-between py-2 border-b border-gray-200">{t.rich('t30', {
                    span1: chunks => <span className="text-gray-600">{chunks}</span>,
                    span2: chunks => <span className="font-bold text-gray-900">{chunks}</span>
                  })}</div>
                <div className="flex justify-between py-2 border-b border-gray-200">{t.rich('t31', {
                    span1: chunks => <span className="text-gray-600">{chunks}</span>,
                    span2: chunks => <span className="font-bold text-gray-900">{chunks}</span>
                  })}</div>
                <div className="flex justify-between py-2">{t.rich('t32', {
                    span1: chunks => <span className="text-gray-600">{chunks}</span>,
                    span2: chunks => <span className="font-bold text-gray-900">{chunks}</span>
                  })}</div>
              </div>
            </div>
          </div>

          {/* Locație simplă */}
          <div className="text-center mb-16">
            <a
              href="https://maps.app.goo.gl/41EAZcG47jxzQ8ES8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>{t('t33')}</a>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('t34')}</h2>
            <p className="text-xl text-white/80 mb-10">{t('t35')}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/tickets"
                className="bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t36')}</Link>
              
              <Link
                href="/pages/puncte-de-interes"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t37')}</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}