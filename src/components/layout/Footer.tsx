'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/src/i18n/navigation'
import { FIRMA, MAGAZIN, NETOPIA_LOGO } from '@/src/lib/firma'

/**
 * Sigla NETOPIA vine dintr-un script al lor, care se pune singur unde e inserat.
 * Îl inserăm la montare, ca să apară și după navigarea între pagini.
 */
function SiglaNetopia({ eticheta }: { eticheta: string }) {
  const loc = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = loc.current
    if (!el || el.childElementCount > 0) return
    const s = document.createElement('script')
    s.src = `https://mny.ro/npId.js?p=${NETOPIA_LOGO}`
    s.type = 'text/javascript'
    s.setAttribute('data-version', 'orizontal')
    s.setAttribute('data-contrast-color', '#f9fafb')
    el.appendChild(s)
  }, [])
  return <div ref={loc} aria-label={eticheta} className="min-h-[50px] min-w-[200px]" />
}

export default function Footer() {
  const t = useTranslations('subsol')
  const m = useTranslations('meniu')
  const limba = useLocale()
  const magazin = (cale = '') => `${MAGAZIN}/${limba}${cale}`

  return (
    <footer className="bg-gray-50 text-gray-800 relative" id="contact">
      <div className="relative w-full h-32 overflow-hidden bg-gradient-to-b from-blue-50 to-gray-50">
        <div className="absolute inset-0">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <line x1="0" y1="50" x2="100%" y2="50" stroke="#4B5563" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="gondola-animation">
          <div className="gondola-wrapper">
            <div className="cable-attachment"></div>
            <div className="gondola-car">
              <div className="gondola-window"></div>
              <div className="gondola-window"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 lg:gap-10 mb-12">
          <div>
            <Image 
              src="/logo-color.png"
              alt="Piatra de Sus"
              width={140}
              height={46}
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              {t('descriere')}
            </p>
            
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61580615018658"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-gray-200 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/piatradesus?igsh=MXZxODRiaHB0NTA0eQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-gray-200 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F56040] rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@piatradesus?_t=ZN-90oTOs7kTrC&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 bg-gray-200 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">{t('linkuri')}</h3>
            <ul className="space-y-2.5">
              {[
                { name: m('despre'), href: '/pages/despre-noi' },
                { name: m('tarife'), href: '/pages/tarife-program' },
                { name: m('puncte'), href: '/pages/puncte-de-interes' },
                { name: t('cazare'), href: '/pages/cozla-panoramic-view' },
                { name: m('galerie'), href: '/pages/galerie' },
                { name: m('contact'), href: '/pages/contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-[#B7D662] transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#B7D662] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href={magazin()} className="text-gray-900 font-semibold hover:text-[#B7D662] transition-colors text-sm">
                  {t('cumpara')} →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">{t('informatii')}</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: t('termeniVanzare'), href: magazin('/informatii/termeni') },
                { name: t('livrare'), href: magazin('/informatii/livrare') },
                { name: t('anulare'), href: magazin('/informatii/anulare') },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-600 hover:text-[#B7D662] transition-colors">{l.name}</a>
                </li>
              ))}
              <li><Link href="/pages/terms" className="text-gray-600 hover:text-[#B7D662] transition-colors">{t('termeni')}</Link></li>
              <li><Link href="/pages/confidentialitate" className="text-gray-600 hover:text-[#B7D662] transition-colors">{t('confidentialitate')}</Link></li>
              <li><Link href="/pages/cookies" className="text-gray-600 hover:text-[#B7D662] transition-colors">{t('cookies')}</Link></li>
              <li>
                <a href={magazin('/retragere')} className="font-semibold text-gray-900 underline underline-offset-2 hover:text-[#B7D662]">
                  {t('retragere')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">{t('contact')}</h3>
            <div className="space-y-4">
              <a 
                href="tel:+40724538928" 
                className="flex items-start gap-3 text-gray-600 hover:text-[#B7D662] transition-colors group"
              >
                <div className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#B7D662]/20 transition-colors">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-0.5">{t('telefon')}</div>
                  <div className="text-sm font-medium">{t('telefonAfisat')}</div>
                </div>
              </a>
              
              <a 
                href="mailto:office@perlainvest.ro" 
                className="flex items-start gap-3 text-gray-600 hover:text-[#B7D662] transition-colors group"
              >
                <div className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#B7D662]/20 transition-colors">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-0.5">{t('email')}</div>
                  <div className="text-sm font-medium">office@perlainvest.ro</div>
                </div>
              </a>
              
              <div className="flex items-start gap-3 text-gray-600">
                <div className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-0.5">{t('adresa')}</div>
                  <div className="text-sm">
                    Piața Gării 7<br />
                    Piatra Neamț<br />
                    {t('tara')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6">
            <div className="text-sm text-gray-600 text-center lg:text-left space-y-1">
              <p className="font-semibold text-gray-800">{FIRMA.nume}</p>
              <p>CIF {FIRMA.cui} · {FIRMA.regCom} · {t('capital')} {FIRMA.capital}</p>
              <p>{FIRMA.sediu}</p>
              <p className="pt-2 text-gray-500">{t('drepturi', { an: new Date().getFullYear() })}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="https://reclamatiisal.anpc.ro/" target="_blank" rel="noopener noreferrer" aria-label={t('sal')}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/anpc-sal.png" alt={t('sal')} width={250} height={50} className="w-[250px] h-[50px]" />
              </a>
              <SiglaNetopia eticheta={t('plata')} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gondola-animation {
          position: absolute;
          top: 50px;
          animation: gondola-move 30s ease-in-out infinite;
          will-change: transform;
        }

        .gondola-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: gondola-sway 3s ease-in-out infinite;
        }

        .cable-attachment {
          width: 12px;
          height: 6px;
          background: #6B7280;
          border-radius: 6px 6px 0 0;
          position: relative;
          margin-bottom: -1px;
        }

        .cable-attachment::after {
          content: '';
          position: absolute;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 20px;
          background: #6B7280;
        }

        .gondola-car {
          width: 50px;
          height: 35px;
          background: linear-gradient(135deg, #B7D662 0%, #a5c550 100%);
          border-radius: 8px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          margin-top: 15px;
        }

        .gondola-window {
          width: 18px;
          height: 20px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        @keyframes gondola-move {
          0% {
            left: -80px;
          }
          100% {
            left: calc(100% + 80px);
          }
        }

        @keyframes gondola-sway {
          0%, 100% {
            transform: rotate(-1deg);
          }
          50% {
            transform: rotate(1deg);
          }
        }

        @media (max-width: 768px) {
          .gondola-animation {
            animation: gondola-move 25s ease-in-out infinite;
          }
          
          .gondola-car {
            width: 40px;
            height: 28px;
          }
          
          .gondola-window {
            width: 14px;
            height: 16px;
          }
        }
      `}</style>
    </footer>
  )
}