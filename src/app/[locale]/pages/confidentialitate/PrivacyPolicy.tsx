'use client'

import React from 'react'
import { Link } from '@/src/i18n/navigation'
import Navigation from '@/src/components/Navigation'
import { useTranslations } from 'next-intl'
import Footer from '@/src/components/layout/Footer'
import NotaTraducere from '@/src/components/NotaTraducere'

export default function PrivacyPolicy() {
  const t = useTranslations('pagini.PrivacyPolicy')
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
                  a1: chunks => <a href="tel:+40724538928" className="text-[#B7D662] hover:underline">{chunks}</a>
                })}</p>
              <p>{t.rich('t09', {
                  a1: chunks => <a href="/" className="text-[#B7D662] hover:underline">{chunks}</a>
                })}</p>
            </div>
          </div>

          {/* Privacy Content */}
          <div className="prose prose-lg max-w-none">

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t10')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t11')}</p>
              <p className="text-gray-700 leading-relaxed">{t('t12')}</p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t13')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t14')}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t15')}</p>
              <p className="text-gray-700 leading-relaxed">{t('t16')}</p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t17')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t18')}</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{t('t19')}</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>{t('t20')}</li>
                    <li>{t('t21')}</li>
                    <li>{t('t22')}{' '}
                      <Link href="/pages/cookies" className="text-[#B7D662] hover:underline font-semibold">{t('t23')}</Link>.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{t('t24')}</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>{t('t25')}</li>
                    <li>{t('t26')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{t('t27')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">{t('t28')}</p>
                  <ul className="space-y-2 text-gray-700 mb-3">
                    <li>{t('t29')}</li>
                    <li>{t('t30')}</li>
                    <li>{t('t31')}</li>
                    <li>{t('t32')}</li>
                    <li>{t('t33')}</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed font-semibold">{t('t34')}</p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t35')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t36')}</p>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>{t('t37')}</li>
                <li>{t('t38')}</li>
                <li>{t('t39')}</li>
                <li>{t('t40')}</li>
                <li>{t('t41')}</li>
                <li>{t('t42')}</li>
                <li>{t('t43')}</li>
              </ol>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t44')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t45')}</p>
              <ul className="space-y-3 text-gray-700">
                <li>{t.rich('t46', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t47', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t48', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t49', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t50')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t51')}</p>
              <ul className="space-y-2 text-gray-700">
                <li>{t.rich('t52', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t53', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t54', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t55', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t56', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">{t('t57')}</p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t58')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t59')}</p>
              <ul className="space-y-2 text-gray-700">
                <li>{t('t60')}</li>
                <li>{t('t61')}</li>
                <li>{t('t62')}</li>
                <li>{t('t63')}</li>
                <li>{t('t64')}</li>
                <li>{t('t65')}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">{t('t66')}</p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t67')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('t68')}</p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t69')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t70')}</p>
              <p className="text-gray-700 leading-relaxed">{t('t71')}</p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t72')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('t73')}</p>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t74')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t75')}</p>
              <ul className="space-y-2 text-gray-700">
                <li>{t('t76')}</li>
                <li>{t('t77')}</li>
                <li>{t('t78')}</li>
                <li>{t('t79')}</li>
                <li>{t('t80')}</li>
                <li>{t('t81')}</li>
                <li>{t('t82')}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 mb-4">{t('t83')}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t84')}</p>
              <p className="text-gray-700 leading-relaxed">{t.rich('t85', {
                  a1: chunks => <a
                    href="https://www.dataprotection.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B7D662] hover:underline">{chunks}</a>
                })}</p>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t86')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t87')}</p>
              <p className="text-gray-700 leading-relaxed">{t('t88')}</p>
            </div>

            {/* Section 13 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t89')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t90')}</p>
              <p className="text-gray-700 leading-relaxed">{t('t91')}</p>
            </div>

            {/* Section 14 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t92')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t93')}</p>
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <p className="text-gray-900 font-bold mb-2">{t('t94')}</p>
                <p className="text-gray-700">{t('t95')}</p>
                <p className="text-gray-700">{t.rich('t96', {
                    a1: chunks => <a
                      href="mailto:office@perlainvest.ro"
                      className="text-[#B7D662] hover:underline font-semibold">{chunks}</a>
                  })}</p>
                <p className="text-gray-700">{t.rich('t97', {
                    a1: chunks => <a
                      href="tel:+40724538928"
                      className="text-[#B7D662] hover:underline font-semibold">{chunks}</a>
                  })}</p>
              </div>
            </div>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all"
            >{t('t98')}</Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}