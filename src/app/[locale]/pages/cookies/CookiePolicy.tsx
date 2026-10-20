'use client'

import React from 'react'
import { Link } from '@/src/i18n/navigation'
import Navigation from '@/src/components/Navigation'
import { useTranslations } from 'next-intl'
import Footer from '@/src/components/layout/Footer'
import NotaTraducere from '@/src/components/NotaTraducere'

export default function CookiePolicy() {
  const t = useTranslations('pagini.CookiePolicy')
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 break-words hyphens-auto">{t('t01')}</h1>
          <p className="text-xl text-white/80">{t('t02')}</p>
        </div>
      </section>

      <NotaTraducere />

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Operator Info */}
          <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t03')}</h2>
            <div className="space-y-2 text-gray-700">
              <p>{t.rich('t04', {
                b: chunks => <strong>{chunks}</strong>
              })}</p>
              <p>{t('t05')}</p>
              <p>{t('t06')}</p>
              <p>{t.rich('t07', {
                  a1: chunks => <a
                    href="mailto:office@perlainvest.ro"
                    className="text-[#B7D662] hover:underline">{chunks}</a>
                })}</p>
              <p>{t.rich('t08', {
                  a1: chunks => <a href="/" className="text-[#B7D662] hover:underline">{chunks}</a>
                })}</p>
            </div>
          </div>

          {/* Cookie Policy Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t09')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t10')}</p>
              <p className="text-gray-700 leading-relaxed">{t('t11')}</p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t12')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t13')}</p>
              <p className="text-gray-700 leading-relaxed">{t('t14')}</p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t15')}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{t('t16')}</p>
              
              <div className="space-y-8">
                {/* Cookie-uri strict necesare */}
                <div className="bg-gradient-to-br from-[#B7D662]/5 to-[#95b540]/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('t17')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">{t('t18')}</p>
                  <div className="space-y-2 text-gray-700">
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

                {/* Cookie-uri de analiză */}
                <div className="bg-gradient-to-br from-[#B7D662]/5 to-[#95b540]/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('t22')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">{t('t23')}</p>
                  <p className="text-gray-700 leading-relaxed mb-3">{t('t24')}</p>
                  <div className="space-y-2 text-gray-700">
                    <p>{t.rich('t25', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</p>
                    <p>{t.rich('t26', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</p>
                  </div>
                </div>

                {/* Cookie-uri de marketing */}
                <div className="bg-gradient-to-br from-[#B7D662]/5 to-[#95b540]/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('t27')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">{t('t28')}</p>
                  <div className="space-y-2 text-gray-700">
                    <p>{t.rich('t29', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</p>
                    <p>{t.rich('t30', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</p>
                  </div>
                </div>

                {/* Cookie-uri terțe */}
                <div className="bg-gradient-to-br from-[#B7D662]/5 to-[#95b540]/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('t31')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">{t('t32')}</p>
                  <p className="text-gray-700 leading-relaxed">{t('t33')}</p>
                  <ul className="mt-2 text-gray-700">
                    <li>{t.rich('t34', {
                        a1: chunks => <a
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#B7D662] hover:underline">{chunks}</a>
                      })}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t35')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t36')}</p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>{t('t37')}</li>
                <li>{t('t38')}</li>
                <li>{t('t39')}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t40')}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t41')}</p>
              <p className="text-gray-700 leading-relaxed mb-3">{t('t42')}</p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>{t.rich('t43', {
                    a1: chunks => <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B7D662] hover:underline">{chunks}</a>
                  })}</li>
                <li>{t.rich('t44', {
                    a1: chunks => <a
                      href="https://support.mozilla.org/ro/kb/cookie-uri-informatii-stocate-site-uri-calculator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B7D662] hover:underline">{chunks}</a>
                  })}</li>
                <li>{t.rich('t45', {
                    a1: chunks => <a
                      href="https://support.microsoft.com/ro-ro/microsoft-edge/ștergerea-cookie-urilor-în-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B7D662] hover:underline">{chunks}</a>
                  })}</li>
                <li>{t.rich('t46', {
                    a1: chunks => <a
                      href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B7D662] hover:underline">{chunks}</a>
                  })}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-semibold">{t('t47')}</p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t48')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t49')}</p>
              <p className="text-gray-700 leading-relaxed">{t('t50')}</p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t51')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t52')}</p>
              <p className="text-gray-700 leading-relaxed">{t('t53')}</p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t54')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('t55')}</p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t56')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t57')}</p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>{t('t58')}</li>
                <li>{t('t59')}</li>
                <li>{t('t60')}</li>
                <li>{t('t61')}</li>
                <li>{t('t62')}</li>
                <li>{t('t63')}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t64')}</p>
              <p className="text-gray-700 leading-relaxed">{t.rich('t65', {
                  a1: chunks => <a
                    href="https://www.dataprotection.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B7D662] hover:underline">{chunks}</a>
                })}</p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t66')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('t67')}</p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t68')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t69')}</p>
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <p className="text-gray-900 font-bold mb-2">{t('t70')}</p>
                <p className="text-gray-700">{t('t71')}</p>
                <p className="text-gray-700">{t.rich('t72', {
                    a1: chunks => <a
                      href="mailto:office@perlainvest.ro"
                      className="text-[#B7D662] hover:underline font-semibold">{chunks}</a>
                  })}</p>
                <p className="text-gray-700">{t('t73')}</p>
              </div>
            </div>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all"
            >{t('t74')}</Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}