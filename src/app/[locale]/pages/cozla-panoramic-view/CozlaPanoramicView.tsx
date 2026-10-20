'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/src/i18n/navigation'

/* ────────────────────────────────────────────────────────────────────────────
   DATE UNITATE — modifică aici dacă se schimbă contactul
   ──────────────────────────────────────────────────────────────────────────── */
const WHATSAPP_NUMBER = '40746609899'
const PHONE_DISPLAY = '+40 746 609 899'
const EMAIL = 'rezervari@perlainvest.ro'
const ROOMS = 7

const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`


/* Iconiță WhatsApp refolosită — evită să repetăm path-ul de 8 ori */
const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

/* ────────────────────────────────────────────────────────────────────────────
   GALERIE — fișierele stau în /public/cozla/
   Spans doar de la md în sus: la 2 coloane grila bento se rupe urât.
   ──────────────────────────────────────────────────────────────────────────── */
type Photo = { img: number; alt: AltFoto; span?: string }

/* alt = cheia textului alternativ din messages (cozla.alt.*) */
type AltFoto = 'terasa' | 'camera' | 'baie'

const FEATURED: Photo[] = [
  { img: 28, alt: 'terasa', span: 'col-span-2 row-span-2' },
  { img: 26, alt: 'terasa' },
  { img: 1, alt: 'camera', span: 'md:row-span-2' },
  { img: 25, alt: 'terasa' },
  { img: 24, alt: 'terasa', span: 'md:col-span-2' },
  { img: 5, alt: 'camera' },
  { img: 23, alt: 'terasa', span: 'md:row-span-2' },
  { img: 8, alt: 'camera' },
  { img: 20, alt: 'terasa' },
  { img: 16, alt: 'terasa', span: 'col-span-2 md:row-span-2' },
  { img: 9, alt: 'camera' },
  { img: 15, alt: 'terasa' },
]

const REST: Photo[] = [
  { img: 12, alt: 'terasa' },
  { img: 10, alt: 'camera' },
  { img: 11, alt: 'terasa' },
  { img: 17, alt: 'camera' },
  { img: 7, alt: 'terasa' },
  { img: 18, alt: 'camera' },
  { img: 6, alt: 'terasa' },
  { img: 19, alt: 'camera' },
  { img: 4, alt: 'terasa' },
  { img: 21, alt: 'camera' },
  { img: 2, alt: 'terasa' },
  { img: 27, alt: 'camera' },
  { img: 14, alt: 'camera' },
  { img: 3, alt: 'baie' },
  { img: 13, alt: 'baie' },
  { img: 22, alt: 'baie' },
]

const ALL_PHOTOS: Photo[] = [...FEATURED, ...REST]

/* ────────────────────────────────────────────────────────────────────────────
   FACILITĂȚI
   ──────────────────────────────────────────────────────────────────────────── */
const ICONS = {
  bed: 'M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 18h18M3 18v2m18-2v2M7 10V7a1 1 0 011-1h3a1 1 0 011 1v3',
  wifi: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0',
  heat: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
  bath: 'M4 12h16M6 12V6a2 2 0 012-2h1a2 2 0 012 2M5 12v4a4 4 0 004 4h6a4 4 0 004-4v-4',
  terrace:
    'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  tree: 'M12 3l4 6h-2.5l3 5H14l3 5H7l3-5H7.5l3-5H8l4-6zM12 19v2',
  linen: 'M4 6h16M4 10h16M4 14h16M4 18h16',
  towel:
    'M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm3 4v10m8-10v10',
  nosmoke:
    'M18.364 5.636a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728zM5.636 5.636l12.728 12.728',
  view: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  gondola: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
}

/* id = cheia din messages (cozla.facilitati.<id>), note = are și cozla.facilitati.<id>Nota */
const FACILITIES: { id: string; path: string; note?: boolean }[] = [
  { id: 'camere', path: ICONS.bed },
  { id: 'wifi', path: ICONS.wifi },
  { id: 'incalzire', path: ICONS.heat },
  { id: 'bai', path: ICONS.bath, note: true },
  { id: 'terasa', path: ICONS.terrace },
  { id: 'exterior', path: ICONS.tree, note: true },
  { id: 'lenjerie', path: ICONS.linen },
  { id: 'prosoape', path: ICONS.towel },
  { id: 'nefumatori', path: ICONS.nosmoke },
  { id: 'vedere', path: ICONS.view },
  { id: 'acces', path: ICONS.gondola },
]

/* Overlay lizibil pe orice ecran: vertical pe mobil, orizontal de la lg în sus */
const OVERLAY_TEXT_LEFT =
  'absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/45 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/65 lg:to-black/25'

/* ──────────────────────────────────────────────────────────────────────────── */

export default function CozlaPanoramicView() {
  const t = useTranslations('cozla.pagina')
  const tc = useTranslations('cozla')
  const limba = useLocale()
  const WA_GENERAL = waLink(tc('wa.general'))
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)

  const [form, setForm] = useState({ nume: '', telefon: '', sosire: '', mesaj: '' })
  const [sent, setSent] = useState(false)

  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  /* Animații la scroll — sărite dacă utilizatorul a cerut mișcare redusă */
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = document.querySelectorAll('.fade-in-section')

    if (reduced) {
      nodes.forEach((el) => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )
    nodes.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [showAllPhotos])

  /* Lightbox */
  const closeLightbox = useCallback(() => setLightbox(null), [])
  const step = useCallback((delta: number) => {
    setLightbox((prev) =>
      prev === null ? prev : (prev + delta + ALL_PHOTOS.length) % ALL_PHOTOS.length
    )
  }, [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    const prevOverflow = document.body.style.overflow
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [lightbox, closeLightbox, step])

  /* Swipe pe mobil, cu prag și verificare că gestul e orizontal */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1)
    touchStartX.current = null
    touchStartY.current = null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const dataFormatata = form.sosire
      ? new Date(form.sosire).toLocaleDateString(limba, {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : '—'

    const mesaj = [
      tc('wa.rezervare'),
      '',
      `${tc('wa.nume')}: ${form.nume}`,
      `${tc('wa.telefon')}: ${form.telefon}`,
      `${tc('wa.sosire')}: ${dataFormatata}`,
      form.mesaj ? `${tc('wa.mesaj')}: ${form.mesaj}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(waLink(mesaj), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const visiblePhotos = showAllPhotos ? ALL_PHOTOS : FEATURED
  const today = new Date().toISOString().split('T')[0]

  return (
    /* pb-[76px] lasă loc barei fixe de pe mobil, ca să nu acopere footerul */
    <div className="min-h-screen bg-white overflow-x-hidden pb-[76px] lg:pb-0">
      <Navigation />

      {/* ═══════════════════════════════════ HERO ═══════════════════════════════
          min-h (nu h) + padding: secțiunea CREȘTE dacă textul e mai înalt decât
          ecranul, deci nu se mai taie nimic pe telefon.                        */}
      <section className="relative flex items-center overflow-hidden min-h-[max(100svh,600px)] lg:min-h-[88vh] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src="/cozla/hero_cozla_panoramic_view.png"
            alt={t('t02')}
            fill
            className="object-cover object-center"
            priority
            quality={82}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 sm:mb-5 animate-fade-in-down">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white/90 text-[11px] sm:text-xs font-medium tracking-wider uppercase">
                <svg
                  className="w-4 h-4 text-[#B7D662] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={ICONS.gondola}
                  />
                </svg>{t('t03')}</span>
            </div>

            <h1 className="text-[2rem] leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 animate-fade-in-up drop-shadow-2xl">{t('t04')}</h1>

            <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 animate-fade-in-up animation-delay-200 drop-shadow-lg">{t('t05')}</p>

            {/* Pe telefon arătăm varianta scurtă — pe tabletă/desktop, textul complet */}
            <p className="sm:hidden text-sm text-white/80 max-w-md mx-auto mb-7 leading-relaxed animate-fade-in-up animation-delay-200">{t('t06')}</p>
            <p className="hidden sm:block text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-9 leading-relaxed animate-fade-in-up animation-delay-200">{t('t07')}</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center animate-fade-in-up animation-delay-200">
              <a
                href="#rezervare"
                className="group inline-flex items-center justify-center gap-2.5 min-h-[52px] bg-[#B7D662] hover:bg-[#a5c550] active:scale-[0.98] text-white font-semibold px-7 rounded-full text-base transition-all shadow-lg"
              >
                <span>{t('t08')}</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>

              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-[52px] bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 active:scale-[0.98] text-white font-medium px-7 rounded-full transition-all"
              >
                <WhatsAppIcon />
                <span>{t('t09')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ BARĂ STATISTICI ════════════════════════════ */}
      <section className="relative -mt-10 sm:-mt-14 lg:-mt-16 z-20 mb-12 sm:mb-16 lg:mb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6 lg:p-8">
            <div className="grid grid-cols-3 gap-y-5 gap-x-3 sm:gap-6">
              {[
                { value: String(ROOMS), unit: '', label: t('t10') },
                { value: '632', unit: 'm', label: t('t11') },
                { value: '8', unit: 'min', label: t('t12') },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 whitespace-nowrap">
                    {stat.value}
                    <span className="text-base sm:text-xl text-gray-500">
                      {stat.unit}
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ DESPRE UNITATE ═════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl group aspect-[4/3]">
              <Image
                src="/cozla/28.png"
                alt={t('t13')}
                fill
                className="object-cover transition-transform duration-500 lg:group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">{t('t14')}</span>
              <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{t.rich('t15', {
                  span1: chunks => <span className="text-[#B7D662]">{chunks}</span>
                })}</h2>
              <div className="space-y-3.5 text-gray-600 text-[15px] sm:text-base leading-relaxed">
                <p>{t('t16', {
                    v1: ROOMS
                  })}</p>
                <p>{t('t17')}</p>
                <p>{t('t18')}</p>
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1">
                {[tc('facilitati.vedere'), tc('facilitati.terasa'), tc('facilitati.acces')].map(
                  (item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 shadow-md"
                    >
                      <svg
                        className="w-4 h-4 text-[#B7D662] flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 font-medium text-[13px] sm:text-sm">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ CAMERE ═════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
              <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">{t('t19')}</span>
              <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{t('t20', {
                  v1: ROOMS
                })}</h2>
              <div className="space-y-3.5 text-gray-600 text-[15px] sm:text-base leading-relaxed">
                <p>{t('t21', {
                    v1: ROOMS
                  })}</p>
                <p>{t('t22')}</p>
                <p>{t('t23')}</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6 mt-5">
                <div className="text-[11px] font-medium text-gray-500 tracking-wider uppercase mb-2">{t('t24')}</div>
                <p className="text-sm text-gray-600 mb-5">{t('t25')}</p>
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto bg-[#B7D662] hover:bg-[#a5c550] active:scale-[0.98] text-white font-semibold px-6 rounded-full transition-all shadow-md text-sm"
                >
                  <WhatsAppIcon />{t('t26')}</a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl col-span-2 sm:col-span-1 sm:row-span-2 aspect-[4/3] sm:aspect-auto sm:min-h-[280px]">
                <Image
                  src="/cozla/1.png"
                  alt={t('t27')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/cozla/5.png"
                  alt={t('t28')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/cozla/9.png"
                  alt={t('t29')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ PANORAMA ═════════════════════════════ */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden fade-in-section">
        <div className="absolute inset-0">
          <Image
            src="/cozla/26.png"
            alt={t('t30')}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className={OVERLAY_TEXT_LEFT}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">{t('t31')}</span>
            <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-5 sm:mb-6">{t('t32')}</h2>
            <div className="space-y-3.5 text-white/85 text-[15px] sm:text-base lg:text-lg leading-relaxed">
              <p>{t('t33')}</p>
              <p>{t('t34')}</p>
              <p>{t('t35')}</p>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-4 mt-7 sm:mt-8">
              {[tc('repere.lac'), tc('repere.dealuri'), tc('repere.ceahlau')].map(
                (item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#B7D662] rounded-full flex-shrink-0"></span>
                    <span className="text-white/90 text-[13px] sm:text-sm font-medium">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TERASĂ ȘI ZONĂ EXTERIOARĂ ═════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 lg:space-y-6">
              <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">{t('t36')}</span>
              <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{t('t37')}</h2>
              <div className="space-y-3.5 text-gray-600 text-[15px] sm:text-base leading-relaxed">
                <p>{t('t38')}</p>
                <p>{t('t39')}</p>
                <p>{t('t40')}</p>
              </div>
            </div>

            {/* Fără mt-8 decalat pe mobil — acolo arăta strâmb */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  img: 24,
                  alt: t('t41'),
                  offset: false,
                },
                {
                  img: 23,
                  alt: t('t42'),
                  offset: true,
                },
                {
                  img: 20,
                  alt: t('t43'),
                  offset: false,
                },
                {
                  img: 16,
                  alt: t('t44'),
                  offset: true,
                },
              ].map((p) => (
                <div
                  key={p.img}
                  className={`relative rounded-2xl overflow-hidden shadow-xl aspect-square ${
                    p.offset ? 'lg:mt-8' : ''
                  }`}
                >
                  <Image
                    src={`/cozla/${p.img}.png`}
                    alt={p.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ ACCES CU TELEGONDOLA ══════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#B7D662] via-[#a5c550] to-[#95b540] relative overflow-hidden fade-in-section">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-6 w-28 h-28 md:w-64 md:h-64 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-6 w-40 h-40 md:w-96 md:h-96 border-4 border-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-5 sm:mb-6">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={ICONS.gondola}
                />
              </svg>
            </div>

            <span className="text-[11px] sm:text-xs font-medium text-white/80 tracking-wider uppercase block">{t('t45')}</span>
            <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-5 sm:mb-6">{t('t46')}</h2>

            <div className="space-y-3.5 text-white/90 text-[15px] sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
              <p>{t('t47')}</p>
              <p>{t('t48')}</p>
              <p>{t('t49')}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-10">
              <a
                href={waLink(tc('wa.acces'))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-[52px] bg-white hover:bg-gray-50 active:scale-[0.98] text-[#6f8a3a] font-semibold px-7 rounded-full transition-all shadow-lg"
              >
                <WhatsAppIcon />
                <span>{t('t50')}</span>
              </a>

              <Link
                href="/pages/tarife-program"
                className="inline-flex items-center justify-center gap-2.5 min-h-[52px] bg-white/10 backdrop-blur-sm border border-white/40 hover:bg-white/20 active:scale-[0.98] text-white font-medium px-7 rounded-full transition-all text-center"
              >
                <span>{t('t51')}</span>
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ FACILITĂȚI ═══════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">{t('t52')}</span>
            <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">{t('t53')}</h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {FACILITIES.map((f, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg lg:hover:shadow-xl transition-all lg:hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#B7D662]/15 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <svg
                    className="w-5 h-5 text-[#B7D662]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.path} />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-[13px] sm:text-sm lg:text-base leading-snug">
                  {tc(`facilitati.${f.id}`, { camere: ROOMS })}
                </h3>
                {f.note && (
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-snug">
                    {tc(`facilitati.${f.id}Nota`)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ GALERIE FOTO ══════════════════════════ */}
      <section
        className="py-12 sm:py-16 lg:py-20 bg-gray-50 fade-in-section scroll-mt-20 lg:scroll-mt-24"
        id="galerie"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">{t('t54')}</span>
            <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">{t.rich('t55', {
                span1: chunks => <span className="italic">{chunks}</span>
              })}</h2>
            <p className="text-[15px] sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">{t('t56')}</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-4 auto-rows-[110px] sm:auto-rows-[150px] md:auto-rows-[170px] lg:auto-rows-[200px]">
              {visiblePhotos.map((photo, index) => (
                <button
                  key={photo.img}
                  type="button"
                  onClick={() => setLightbox(index)}
                  aria-label={tc('deschideFoto', { nr: index + 1, total: visiblePhotos.length })}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer will-change-transform ${
                    photo.span || ''
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <Image
                    src={`/cozla/${photo.img}.png`}
                    alt={tc(`alt.${photo.alt}`)}
                    fill
                    loading={index < 4 ? 'eager' : 'lazy'}
                    className="object-cover lg:group-hover:scale-110 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <span className="absolute bottom-2.5 right-2.5 z-20 opacity-0 lg:group-hover:opacity-100 transition-opacity">
                    <span className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {!showAllPhotos && (
              <div className="text-center mt-8 sm:mt-10">
                <button
                  type="button"
                  onClick={() => setShowAllPhotos(true)}
                  className="group inline-flex items-center justify-center gap-3 min-h-[52px] w-full sm:w-auto bg-[#B7D662] hover:bg-[#a5c550] active:scale-[0.98] text-white font-medium px-7 rounded-full transition-all shadow-lg"
                >
                  <span>{t('t57', {
                      v1: ALL_PHOTOS.length
                    })}</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-y-0.5 transition-transform flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════ REZERVĂRI ═══════════════════════════ */}
      <section
        className="py-12 sm:py-16 lg:py-20 fade-in-section scroll-mt-20 lg:scroll-mt-24"
        id="rezervare"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">{t('t58')}</span>
            <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">{t('t59')}</h2>
            <p className="text-[15px] sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">{t('t60')}</p>
          </div>

          {/* Pe mobil formularul vine PRIMUL — e acțiunea principală */}
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Formular */}
            <div className="order-1 lg:order-2 bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{t('t61')}</h3>
              <p className="text-gray-600 text-sm mb-5 sm:mb-6">{t('t62')}</p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
                <div>
                  <label
                    htmlFor="nume"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >{t.rich('t63', {
                      span1: chunks => <span className="text-[#B7D662]">{chunks}</span>
                    })}</label>
                  <input
                    id="nume"
                    name="nume"
                    type="text"
                    required
                    value={form.nume}
                    onChange={onChange}
                    autoComplete="name"
                    placeholder={t('t64')}
                    /* text-base = 16px: sub 16px iOS face zoom automat la focus */
                    className="w-full px-4 py-3 min-h-[52px] text-base rounded-xl border border-gray-200 focus:border-[#B7D662] focus:ring-2 focus:ring-[#B7D662]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 appearance-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefon"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >{t.rich('t65', {
                      span1: chunks => <span className="text-[#B7D662]">{chunks}</span>
                    })}</label>
                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    inputMode="tel"
                    required
                    value={form.telefon}
                    onChange={onChange}
                    autoComplete="tel"
                    placeholder={t('t66')}
                    className="w-full px-4 py-3 min-h-[52px] text-base rounded-xl border border-gray-200 focus:border-[#B7D662] focus:ring-2 focus:ring-[#B7D662]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 appearance-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sosire"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >{t.rich('t67', {
                      span1: chunks => <span className="text-[#B7D662]">{chunks}</span>
                    })}</label>
                  <input
                    id="sosire"
                    name="sosire"
                    type="date"
                    required
                    min={today}
                    value={form.sosire}
                    onChange={onChange}
                    className="w-full px-4 py-3 min-h-[52px] text-base rounded-xl border border-gray-200 focus:border-[#B7D662] focus:ring-2 focus:ring-[#B7D662]/20 outline-none transition-all text-gray-900 appearance-none bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mesaj"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >{t('t68')}</label>
                  <textarea
                    id="mesaj"
                    name="mesaj"
                    rows={4}
                    value={form.mesaj}
                    onChange={onChange}
                    placeholder={t('t69')}
                    className="w-full px-4 py-3 text-base rounded-xl border border-gray-200 focus:border-[#B7D662] focus:ring-2 focus:ring-[#B7D662]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 resize-none appearance-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 min-h-[54px] bg-[#B7D662] hover:bg-[#a5c550] active:scale-[0.99] text-white font-semibold px-8 rounded-full transition-all shadow-lg"
                >
                  <span>{t('t70')}</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>

                {sent && (
                  <div
                    role="status"
                    className="bg-[#B7D662]/10 border border-[#B7D662]/30 rounded-xl p-4 text-sm text-gray-700 leading-relaxed"
                  >{t.rich('t71', {
                      v1: EMAIL,

                      a1: chunks => <a
                        href={WA_GENERAL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6f8a3a] font-semibold underline">{chunks}</a>,

                      a2: chunks => <a
                        href={`mailto:${EMAIL}`}
                        className="text-[#6f8a3a] font-semibold underline break-all">{chunks}</a>
                    })}</div>
                )}

                <p className="text-xs text-gray-500 leading-relaxed pt-1">{t('t72')}</p>
              </form>
            </div>

            {/* Contact rapid */}
            <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-br from-[#B7D662] to-[#95b540] rounded-2xl p-5 sm:p-6 lg:p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg leading-tight">{t('t73')}</h3>
                    <p className="text-white/80 text-xs sm:text-sm">{t('t74')}</p>
                  </div>
                </div>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="flex items-center min-h-[44px] text-xl sm:text-2xl lg:text-3xl font-bold mb-4 hover:underline whitespace-nowrap"
                >
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full min-h-[50px] bg-white text-[#6f8a3a] font-semibold px-6 rounded-full transition-all hover:bg-gray-50 active:scale-[0.99] shadow-md"
                >{t('t75')}</a>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-2xl p-5 sm:p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">{t('t76')}</h3>
                    <p className="text-gray-600 text-sm mb-2">{t('t77')}</p>
                    <a
                      href={`mailto:${EMAIL}?subject=${encodeURIComponent(tc('wa.rezervare'))}`}
                      className="inline-flex items-center min-h-[44px] text-[#8aa844] hover:text-[#6f8a3a] font-medium break-all transition-colors text-sm sm:text-base"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">{t('t78')}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{t.rich('t79', {
                        br: () => <br />
                      })}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ BLOC FINAL DE CONTACT ═════════════════════ */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/cozla/25.png"
            alt=""
            fill
            className="object-cover"
            loading="lazy"
            sizes="100vw"
          />
          <div className={OVERLAY_TEXT_LEFT}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6">{t('t80')}</h2>

            <div className="space-y-3 text-white/85 text-[15px] sm:text-base lg:text-lg mb-7 sm:mb-8">
              <p className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#B7D662] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{t.rich('t81', {
                    br: () => <br />
                  })}</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#B7D662] flex-shrink-0 mt-0.5">
                  <WhatsAppIcon />
                </span>
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center min-h-[44px] hover:text-white transition-colors"
                >{t('t82', {
                    v1: PHONE_DISPLAY
                  })}</a>
              </p>
              <p className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#B7D662] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center min-h-[44px] hover:text-white transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 min-h-[54px] bg-[#B7D662] hover:bg-[#a5c550] active:scale-[0.98] text-white font-semibold px-8 rounded-full text-base lg:text-lg transition-all shadow-2xl"
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span>{t('t83')}</span>
              </a>

              <a
                href="#rezervare"
                className="inline-flex items-center justify-center gap-3 min-h-[54px] bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 active:scale-[0.98] text-white font-medium px-8 rounded-full text-base lg:text-lg transition-all"
              >{t.rich('t84', {
                  span1: chunks => <span>{chunks}</span>
                })}</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ════════════════ BARĂ FIXĂ DE REZERVARE — doar mobil/tabletă ══════════
          z-[90] ca să rămână SUB meniul mobil din Navigation (z-110/120).      */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-[90] bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-2 min-[360px]:gap-2.5 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
          <div className="flex-1 min-w-0">
            <div className="text-[11px] uppercase tracking-wider text-gray-500 leading-none mb-0.5">{t('t85')}</div>
            <div className="text-[13px] min-[360px]:text-[15px] font-bold text-gray-900 leading-tight truncate">{t('t86')}</div>
          </div>

          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('t87')}
            className="w-12 h-12 flex-shrink-0 rounded-full bg-[#25D366] text-white flex items-center justify-center active:scale-95 transition-transform shadow-md"
          >
            <WhatsAppIcon className="w-6 h-6" />
          </a>

          <a
            href="#rezervare"
            className="inline-flex items-center justify-center h-12 px-3.5 min-[360px]:px-5 rounded-full bg-[#B7D662] text-white font-semibold text-sm active:scale-95 transition-transform shadow-md whitespace-nowrap"
          >{t('t88')}</a>
        </div>
      </div>

      {/* ══════════════════════════════════ LIGHTBOX ═══════════════════════════ */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={t('t89')}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Header: contor + închide */}
          <div className="flex items-center justify-between px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 flex-shrink-0">
            <span className="text-white/70 text-sm tracking-wider tabular-nums">
              {lightbox + 1} / {ALL_PHOTOS.length}
            </span>
            <button
              type="button"
              onClick={closeLightbox}
              aria-label={t('t90')}
              className="w-11 h-11 bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Imaginea — zonă flexibilă, nu mai stă sub săgeți */}
          <div className="flex-1 relative min-h-0 px-3 lg:px-24" onClick={closeLightbox}>
            <Image
              src={`/cozla/${ALL_PHOTOS[lightbox].img}.png`}
              alt={tc(`alt.${ALL_PHOTOS[lightbox].alt}`)}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Săgeți: pe mobil jos, centrate și mari; pe desktop pe laterale */}
          <div className="flex items-center justify-center gap-6 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] flex-shrink-0 lg:hidden">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={t('t91')}
              className="w-14 h-14 bg-white/10 active:bg-white/25 active:scale-95 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <span className="text-white/40 text-xs">{t('t92')}</span>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label={t('t93')}
              className="w-14 h-14 bg-white/10 active:bg-white/25 active:scale-95 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <button
            type="button"
            onClick={() => step(-1)}
            aria-label={t('t94')}
            className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full items-center justify-center transition-colors"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label={t('t95')}
            className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full items-center justify-center transition-colors"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      {/* ══════════════════════════════════ STILURI ════════════════════════════ */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .animate-fade-in-down {
            animation: none;
          }
          .fade-in-section {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}