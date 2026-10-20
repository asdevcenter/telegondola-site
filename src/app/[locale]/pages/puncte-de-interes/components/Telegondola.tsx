'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from '@/src/i18n/navigation'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'
import { useLocale, useTranslations } from 'next-intl'
import { useTelegondola, programGrupat } from '@/src/lib/telegondola'

export default function TelegondolaPiatraNeamt() {
  const t = useTranslations('pagini.Telegondola')
  // Programul și tarifele vin de la panoul de administrare.
  // Valorile din al doilea argument se folosesc doar până răspunde serverul.
  const { program, preturi } = useTelegondola()
  const pret = (cod: string, deRezerva: number) => preturi[cod] ?? deRezerva

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/telegondola-hero.jpg"
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

          {/* Experiența Section cu imagini */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t07')}</h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">{t('t08')}</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t('t09')}</h3>
                  <ul className="space-y-2">
                    <li>{t.rich('t10', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t11', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t12', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t13', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                  </ul>
                </div>
              </div>

              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/telegondola-1.jpg"
                  alt={t('t14')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Galerie 2 imagini */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/telegondola-2.jpg"
                  alt={t('t15')}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/telegondola-3.jpg"
                  alt={t('t16')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Detalii Tehnice Section cu imagini */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t17')}</h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="order-2 lg:order-1 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/telegondola-4.jpg"
                  alt={t('t18')}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="order-1 lg:order-2">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">{t('t19')}</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t('t20')}</h3>
                  <ul className="space-y-2">
                    <li>{t.rich('t21', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t22', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t23', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t24', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                    <li>{t.rich('t25', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Galerie 2 imagini */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/telegondola-5.jpg"
                  alt={t('t26')}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/telegondola-6.jpg"
                  alt={t('t27')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Program și Tarife */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t28')}</h3>
              <ul className="space-y-3 text-gray-700">
                {programGrupat(program, useLocale()).map((r) => (
                  <li key={r.interval} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                    <span>{r.zile}</span>
                    <span className="font-bold">{r.interval}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#B7D662]/10 rounded-lg">
                <p className="text-sm text-gray-600">{t.rich('t29', {
                    b: chunks => <strong>{chunks}</strong>,
                    a1: chunks => <a href="tel:+40724538928" className="text-[#B7D662] hover:underline">{chunks}</a>
                  })}</p>
                <p className="text-sm text-gray-600 mt-1">{t.rich('t30', {
                    b: chunks => <strong>{chunks}</strong>,

                    a1: chunks => <a
                      href="mailto:office@perlainvest.ro"
                      className="text-[#B7D662] hover:underline">{chunks}</a>
                  })}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t31')}</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">{t.rich('t32', {
                    v1: pret('adult_dus_intors', 60),
                    span1: chunks => <span className="text-gray-600">{chunks}</span>,
                    span2: chunks => <span className="font-bold text-gray-900">{chunks}</span>
                  })}</div>
                <div className="flex justify-between py-2 border-b border-gray-200">{t.rich('t33', {
                    v1: pret('adult_o_cursa', 40),
                    span1: chunks => <span className="text-gray-600">{chunks}</span>,
                    span2: chunks => <span className="font-bold text-gray-900">{chunks}</span>
                  })}</div>
                <div className="flex justify-between py-2 border-b border-gray-200">{t.rich('t34', {
                    v1: pret('copil_dus_intors', 40),
                    span1: chunks => <span className="text-gray-600">{chunks}</span>,
                    span2: chunks => <span className="font-bold text-gray-900">{chunks}</span>
                  })}</div>
                <div className="flex justify-between py-2 border-b border-gray-200">{t.rich('t35', {
                    span1: chunks => <span className="text-gray-600">{chunks}</span>,
                    span2: chunks => <span className="font-bold text-[#B7D662]">{chunks}</span>
                  })}</div>
                <div className="flex justify-between py-2">{t.rich('t36', {
                    v1: pret('localnic_adult', 25),
                    span1: chunks => <span className="text-gray-600">{chunks}</span>,
                    span2: chunks => <span className="font-bold text-gray-900">{chunks}</span>
                  })}</div>
              </div>
              <div className="mt-6">
                <Link
                  href="/pages/tarife-program"
                  className="text-[#B7D662] hover:text-[#95b540] font-medium text-sm inline-flex items-center gap-2"
                >{t('t37')}</Link>
              </div>
            </div>
          </div>

          {/* Locație simplă */}
          <div className="text-center mb-16">
            <a
              href="https://maps.app.goo.gl/abZa4Tb5XdYQBZmj8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>{t('t38')}</a>
          </div>

        </div>
      </section>

      {/* CTA Final - Mai clar */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('t39')}</h2>
            <p className="text-xl text-white/80 mb-10">{t('t40')}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/tickets"
                className="bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t41')}</Link>

              <Link
                href="/pages/puncte-de-interes"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t42')}</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}