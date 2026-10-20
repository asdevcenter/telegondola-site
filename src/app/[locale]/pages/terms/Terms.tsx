'use client'

import React from 'react'
import { Link } from '@/src/i18n/navigation'
import Navigation from '@/src/components/Navigation'
import { useTranslations } from 'next-intl'
import Footer from '@/src/components/layout/Footer'
import NotaTraducere from '@/src/components/NotaTraducere'

export default function TermsPage() {
  const t = useTranslations('pagini.Terms')
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

          {/* Terms Content */}
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
              <ul className="space-y-3 text-gray-700">
                <li>{t.rich('t15', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t16', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t17', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t18', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t19', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t20', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
                <li>{t.rich('t21', {
                    b: chunks => <strong>{chunks}</strong>
                  })}</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t22')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t23')}</p>
              <p className="text-gray-700 leading-relaxed">{t('t24')}</p>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t25')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t26')}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t27')}</p>
              <p className="text-gray-700 leading-relaxed">{t('t28')}</p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t29')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t30')}</p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li>{t('t31')}</li>
                <li>{t('t32')}</li>
                <li>{t('t33')}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">{t('t34')}</p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t35')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t36')}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t37')}</p>
              <p className="text-gray-700 leading-relaxed">{t('t38')}</p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t39')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t40')}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t41')}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t42')}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t43')}</p>
              <p className="text-gray-700 leading-relaxed">{t('t44')}</p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t45')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t46')}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t47')}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t48')}</p>
              <p className="text-gray-700 leading-relaxed">{t('t49')}</p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t50')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t.rich('t51', {
                  b: chunks => <strong>{chunks}</strong>
                })}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t52')}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t53')}</p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li>{t('t54')}</li>
                <li>{t('t55')}</li>
                <li>{t('t56')}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">{t('t57')}</p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t58')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t59')}</p>
              <p className="text-gray-700 leading-relaxed">{t('t60')}</p>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t61')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t62')}</p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li>{t('t63')}</li>
                <li>{t('t64')}</li>
                <li>{t('t65')}</li>
                <li>{t('t66')}</li>
                <li>{t('t67')}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">{t('t68')}</p>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t69')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('t70')}{' '}
                <Link href="/pages/confidentialitate" className="text-[#B7D662] hover:underline font-semibold">{t('t71')}</Link>.
                {' '}{t('t72')}</p>
            </div>

            {/* Section 13 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t73')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('t74')}{' '}
                <Link href="/pages/cookies" className="text-[#B7D662] hover:underline font-semibold">{t('t75')}</Link>.
                {' '}{t('t76')}</p>
            </div>

            {/* Section 14 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t77')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t78')}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t79')}</p>
              <p className="text-gray-700 leading-relaxed">{t('t80')}</p>
            </div>

            {/* Section 15 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t81')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t82')}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t.rich('t83', {
                  a1: chunks => <a
                    href="https://anpc.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B7D662] hover:underline font-semibold">{chunks}</a>
                })}</p>
              <p className="text-gray-700 leading-relaxed">{t('t84')}</p>
            </div>

            {/* Section 16 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t85')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('t86')}</p>
            </div>

            {/* Section 17 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t87')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t88')}</p>
              <ul className="space-y-2 text-gray-700">
                <li>{t('t89')}</li>
                <li>{t('t90')}</li>
                <li>{t('t91')}</li>
                <li>{t('t92')}</li>
                <li>{t('t93')}</li>
                <li>{t('t94')}</li>
              </ul>
            </div>

            {/* Section 18 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('t95')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('t96')}</p>
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <p className="text-gray-900 font-bold mb-2">{t('t97')}</p>
                <p className="text-gray-700">{t('t98')}</p>
                <p className="text-gray-700">{t.rich('t99', {
                    a1: chunks => <a
                      href="mailto:office@perlainvest.ro"
                      className="text-[#B7D662] hover:underline font-semibold">{chunks}</a>
                  })}</p>
                <p className="text-gray-700">{t.rich('t100', {
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
            >{t('t101')}</Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}