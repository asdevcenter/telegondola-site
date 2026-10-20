'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from '@/src/i18n/navigation'
import Navigation from '@/src/components/Navigation'
import { useTranslations } from 'next-intl'
import Footer from '@/src/components/layout/Footer'

export default function MasivulCeahlau() {
  const t = useTranslations('pagini.MasivulCeahlau')
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/puncte-de-interes/masivul-ceahlau-hero.jpg"
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
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">{t('t04')}</p>
          </div>

          {/* Ce vezi aici */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t05')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/puncte-de-interes/masivul-ceahlau-1.jpg"
                  alt={t('t06')}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('t07')}</h3>
                    <p className="text-gray-700 leading-relaxed">{t.rich('t08', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('t09')}</h3>
                    <p className="text-gray-700 leading-relaxed">{t.rich('t10', {
                        b: chunks => <strong>{chunks}</strong>
                      })}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('t11')}</h3>
                    <p className="text-gray-700 leading-relaxed">{t('t12')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t('t13')}</h3>
              <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">{t('t14')}</p>
            </div>
          </div>

          {/* De ce merită */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{t('t15')}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('t16')}</h3>
                    <p className="text-gray-700 leading-relaxed">{t('t17')}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('t18')}</h3>
                    <p className="text-gray-700 leading-relaxed">{t('t19')}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('t20')}</h3>
                    <p className="text-gray-700 leading-relaxed">{t('t21')}</p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
                <Image
                  src="/puncte-de-interes/masivul-ceahlau-2.jpg"
                  alt={t('t22')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Acces și trasee */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Acces */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t23')}</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{t('t24')}</p>
                    <p>{t('t25')}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{t('t26')}</p>
                    <p>{t('t27')}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{t('t28')}</p>
                    <ul className="space-y-1">
                      <li>{t.rich('t29', {
                          b: chunks => <strong>{chunks}</strong>
                        })}</li>
                      <li>{t.rich('t30', {
                          b: chunks => <strong>{chunks}</strong>
                        })}</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Trasee clasice */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t31')}</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{t('t32')}</p>
                    <p className="text-sm">{t('t33')}</p>
                    <p className="text-sm">{t('t34')}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{t('t35')}</p>
                    <p className="text-sm">{t('t36')}</p>
                    <p className="text-sm">{t('t37')}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{t('t38')}</p>
                    <p className="text-sm">{t('t39')}</p>
                    <p className="text-sm">{t('t40')}</p>
                  </div>
                  
                  <p className="text-sm bg-white rounded-lg p-3 mt-4">{t.rich('t41', {
                      b: chunks => <strong>{chunks}</strong>
                    })}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Când și sfaturi */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Când să vii */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t42')}</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{t('t43')}</p>
                    <p>{t('t44')}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{t('t45')}</p>
                    <p>{t('t46')}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{t('t47')}</p>
                    <p>{t('t48')}</p>
                  </div>
                </div>
              </div>
              
              {/* Sfaturi utile */}
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('t49')}</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{t('t50')}</p>
                    <p>{t('t51')}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{t('t52')}</p>
                    <ul className="space-y-1">
                      <li>{t('t53')}</li>
                      <li>{t('t54')}</li>
                      <li>{t('t55')}</li>
                      <li>{t('t56')}</li>
                      <li>{t('t57')}</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm bg-white rounded-lg p-3">{t.rich('t58', {
                      b: chunks => <strong>{chunks}</strong>
                    })}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote final */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
            <p className="text-xl md:text-2xl font-medium italic">{t('t59')}</p>
          </div>
  
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('t60')}</h2>
            <p className="text-xl text-white/80 mb-10">{t('t61')}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pages/tickets"
                className="bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t62')}</Link>
              
              <Link
                href="/pages/puncte-de-interes"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-all inline-block"
              >{t('t63')}</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}