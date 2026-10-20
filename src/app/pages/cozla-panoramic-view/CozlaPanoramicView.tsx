// 'use client'

// import React, { useState, useEffect, useCallback, useRef } from 'react'
// import Image from 'next/image'
// import Navigation from '../../../components/Navigation'
// import Footer from '@/src/components/layout/Footer'

// /* ────────────────────────────────────────────────────────────────────────────
//    DATE UNITATE — modifică aici dacă se schimbă tariful sau contactul
//    ──────────────────────────────────────────────────────────────────────────── */
// const WHATSAPP_NUMBER = '40746609899'
// const PHONE_DISPLAY = '+40 746 609 899'
// const EMAIL = 'rezervari@perlainvest.ro'
// const PRICE = '200'
// const ROOMS = 7

// const waLink = (text: string) =>
//   `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

// const WA_GENERAL = waLink(
//   'Bună ziua! Aș dori informații despre cazarea la Cozla Panoramic View.'
// )

// /* Iconiță WhatsApp refolosită — evită să repetăm path-ul de 8 ori */
// const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
//   </svg>
// )

// /* ────────────────────────────────────────────────────────────────────────────
//    GALERIE — fișierele stau în /public/cozla/
//    Spans doar de la md în sus: la 2 coloane grila bento se rupe urât.
//    ──────────────────────────────────────────────────────────────────────────── */
// type Photo = { img: number; alt: string; span?: string }

// const ALT_TERASA =
//   'Terasa acoperită și zona exterioară de la Cozla Panoramic View, cu vedere spre împrejurimile orașului Piatra-Neamț'
// const ALT_CAMERA =
//   'Cameră la Cozla Panoramic View, pe Dealul Cozla din Piatra-Neamț'
// const ALT_BAIE = 'Băile comune de la Cozla Panoramic View'

// const FEATURED: Photo[] = [
//   { img: 28, alt: ALT_TERASA, span: 'col-span-2 row-span-2' },
//   { img: 26, alt: ALT_TERASA },
//   { img: 1, alt: ALT_CAMERA, span: 'md:row-span-2' },
//   { img: 25, alt: ALT_TERASA },
//   { img: 24, alt: ALT_TERASA, span: 'md:col-span-2' },
//   { img: 5, alt: ALT_CAMERA },
//   { img: 23, alt: ALT_TERASA, span: 'md:row-span-2' },
//   { img: 8, alt: ALT_CAMERA },
//   { img: 20, alt: ALT_TERASA },
//   { img: 16, alt: ALT_TERASA, span: 'col-span-2 md:row-span-2' },
//   { img: 9, alt: ALT_CAMERA },
//   { img: 15, alt: ALT_TERASA },
// ]

// const REST: Photo[] = [
//   { img: 12, alt: ALT_TERASA },
//   { img: 10, alt: ALT_CAMERA },
//   { img: 11, alt: ALT_TERASA },
//   { img: 17, alt: ALT_CAMERA },
//   { img: 7, alt: ALT_TERASA },
//   { img: 18, alt: ALT_CAMERA },
//   { img: 6, alt: ALT_TERASA },
//   { img: 19, alt: ALT_CAMERA },
//   { img: 4, alt: ALT_TERASA },
//   { img: 21, alt: ALT_CAMERA },
//   { img: 2, alt: ALT_TERASA },
//   { img: 27, alt: ALT_CAMERA },
//   { img: 14, alt: ALT_CAMERA },
//   { img: 3, alt: ALT_BAIE },
//   { img: 13, alt: ALT_BAIE },
//   { img: 22, alt: ALT_BAIE },
// ]

// const ALL_PHOTOS: Photo[] = [...FEATURED, ...REST]

// /* ────────────────────────────────────────────────────────────────────────────
//    FACILITĂȚI
//    ──────────────────────────────────────────────────────────────────────────── */
// const ICONS = {
//   bed: 'M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 18h18M3 18v2m18-2v2M7 10V7a1 1 0 011-1h3a1 1 0 011 1v3',
//   wifi: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0',
//   heat: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
//   bath: 'M4 12h16M6 12V6a2 2 0 012-2h1a2 2 0 012 2M5 12v4a4 4 0 004 4h6a4 4 0 004-4v-4',
//   terrace:
//     'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
//   tree: 'M12 3l4 6h-2.5l3 5H14l3 5H7l3-5H7.5l3-5H8l4-6zM12 19v2',
//   linen: 'M4 6h16M4 10h16M4 14h16M4 18h16',
//   towel:
//     'M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm3 4v10m8-10v10',
//   nosmoke:
//     'M18.364 5.636a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728zM5.636 5.636l12.728 12.728',
//   view: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
//   gondola: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
// }

// const FACILITIES: { label: string; path: string; note?: string }[] = [
//   { label: `${ROOMS} camere`, path: ICONS.bed },
//   { label: 'Wi-Fi gratuit', path: ICONS.wifi },
//   { label: 'Încălzire', path: ICONS.heat },
//   { label: 'Băi comune', path: ICONS.bath, note: 'separate femei / bărbați' },
//   { label: 'Terasă acoperită', path: ICONS.terrace },
//   { label: 'Zonă exterioară', path: ICONS.tree, note: 'amenajată, spațiu verde' },
//   { label: 'Lenjerie de pat', path: ICONS.linen },
//   { label: 'Prosoape', path: ICONS.towel },
//   { label: 'Camere nefumători', path: ICONS.nosmoke },
//   { label: 'Vedere panoramică', path: ICONS.view },
//   { label: 'Acces cu telegondola', path: ICONS.gondola },
// ]

// /* Overlay lizibil pe orice ecran: vertical pe mobil, orizontal de la lg în sus */
// const OVERLAY_TEXT_LEFT =
//   'absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/45 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/65 lg:to-black/25'

// /* ──────────────────────────────────────────────────────────────────────────── */

// export default function CozlaPanoramicView() {
//   const [showAllPhotos, setShowAllPhotos] = useState(false)
//   const [lightbox, setLightbox] = useState<number | null>(null)

//   const [form, setForm] = useState({ nume: '', telefon: '', sosire: '', mesaj: '' })
//   const [sent, setSent] = useState(false)

//   const touchStartX = useRef<number | null>(null)
//   const touchStartY = useRef<number | null>(null)

//   /* Animații la scroll — sărite dacă utilizatorul a cerut mișcare redusă */
//   useEffect(() => {
//     const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
//     const nodes = document.querySelectorAll('.fade-in-section')

//     if (reduced) {
//       nodes.forEach((el) => el.classList.add('visible'))
//       return
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add('visible')
//         })
//       },
//       { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
//     )
//     nodes.forEach((el) => observer.observe(el))
//     return () => observer.disconnect()
//   }, [showAllPhotos])

//   /* Lightbox */
//   const closeLightbox = useCallback(() => setLightbox(null), [])
//   const step = useCallback((delta: number) => {
//     setLightbox((prev) =>
//       prev === null ? prev : (prev + delta + ALL_PHOTOS.length) % ALL_PHOTOS.length
//     )
//   }, [])

//   useEffect(() => {
//     if (lightbox === null) return
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') closeLightbox()
//       if (e.key === 'ArrowRight') step(1)
//       if (e.key === 'ArrowLeft') step(-1)
//     }
//     const prevOverflow = document.body.style.overflow
//     window.addEventListener('keydown', onKey)
//     document.body.style.overflow = 'hidden'
//     return () => {
//       window.removeEventListener('keydown', onKey)
//       document.body.style.overflow = prevOverflow
//     }
//   }, [lightbox, closeLightbox, step])

//   /* Swipe pe mobil, cu prag și verificare că gestul e orizontal */
//   const onTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX
//     touchStartY.current = e.touches[0].clientY
//   }
//   const onTouchEnd = (e: React.TouchEvent) => {
//     if (touchStartX.current === null || touchStartY.current === null) return
//     const dx = e.changedTouches[0].clientX - touchStartX.current
//     const dy = e.changedTouches[0].clientY - touchStartY.current
//     if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1)
//     touchStartX.current = null
//     touchStartY.current = null
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     const dataFormatata = form.sosire
//       ? new Date(form.sosire).toLocaleDateString('ro-RO', {
//           day: 'numeric',
//           month: 'long',
//           year: 'numeric',
//         })
//       : '—'

//     const mesaj = [
//       'Solicitare rezervare — Cozla Panoramic View',
//       '',
//       `Nume: ${form.nume}`,
//       `Telefon: ${form.telefon}`,
//       `Data sosirii: ${dataFormatata}`,
//       form.mesaj ? `Mesaj: ${form.mesaj}` : null,
//     ]
//       .filter(Boolean)
//       .join('\n')

//     window.open(waLink(mesaj), '_blank', 'noopener,noreferrer')
//     setSent(true)
//   }

//   const onChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => setForm({ ...form, [e.target.name]: e.target.value })

//   const visiblePhotos = showAllPhotos ? ALL_PHOTOS : FEATURED
//   const today = new Date().toISOString().split('T')[0]

//   return (
//     /* pb-[76px] lasă loc barei fixe de pe mobil, ca să nu acopere footerul */
//     <div className="min-h-screen bg-white overflow-x-hidden pb-[76px] lg:pb-0">
//       <Navigation />

//       {/* ═══════════════════════════════════ HERO ═══════════════════════════════
//           min-h (nu h) + padding: secțiunea CREȘTE dacă textul e mai înalt decât
//           ecranul, deci nu se mai taie nimic pe telefon.                        */}
//       <section className="relative flex items-center overflow-hidden min-h-[max(100svh,600px)] lg:min-h-[88vh] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:py-28">
//         <div className="absolute inset-0">
//           <Image
//             src="/cozla/hero_cozla_panoramic_view.png"
//             alt="Cozla Panoramic View — cazare pe Dealul Cozla, cu vedere panoramică asupra lacului Bâtca Doamnei și a orașului Piatra-Neamț"
//             fill
//             className="object-cover object-center"
//             priority
//             quality={82}
//             sizes="100vw"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
//         </div>

//         <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="mb-4 sm:mb-5 animate-fade-in-down">
//               <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white/90 text-[11px] sm:text-xs font-medium tracking-wider uppercase">
//                 <svg
//                   className="w-4 h-4 text-[#B7D662] flex-shrink-0"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d={ICONS.gondola}
//                   />
//                 </svg>
//                 Cazare pe Dealul Cozla
//               </span>
//             </div>

//             <h1 className="text-[2rem] leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 animate-fade-in-up drop-shadow-2xl">
//               Cozla Panoramic View
//             </h1>

//             <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 animate-fade-in-up animation-delay-200 drop-shadow-lg">
//               Cazare pe Dealul Cozla, în Piatra-Neamț
//             </p>

//             {/* Pe telefon arătăm varianta scurtă — pe tabletă/desktop, textul complet */}
//             <p className="sm:hidden text-sm text-white/80 max-w-md mx-auto mb-6 leading-relaxed animate-fade-in-up animation-delay-200">
//               Zonă liniștită pe Platforma Belvedere, cu vedere spre lacul Bâtca
//               Doamnei. Acces cu telegondola.
//             </p>
//             <p className="hidden sm:block text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
//               Situat pe Platforma Belvedere, Cozla Panoramic View oferă cazare
//               într-o zonă liniștită, cu vedere panoramică asupra lacului Bâtca
//               Doamnei și a împrejurimilor orașului. Accesul se face cu
//               telegondola din Piatra-Neamț.
//             </p>

//             <div className="inline-flex items-baseline gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 mb-6 sm:mb-8 animate-fade-in-up animation-delay-200">
//               <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
//                 {PRICE}
//               </span>
//               <span className="text-white/80 text-xs sm:text-sm md:text-base">
//                 lei / cameră / noapte
//               </span>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center animate-fade-in-up animation-delay-200">
//               <a
//                 href="#rezervare"
//                 className="group inline-flex items-center justify-center gap-2.5 min-h-[52px] bg-[#B7D662] hover:bg-[#a5c550] active:scale-[0.98] text-white font-semibold px-7 rounded-full text-base transition-all shadow-lg"
//               >
//                 <span>Solicită rezervarea</span>
//                 <svg
//                   className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 7l5 5m0 0l-5 5m5-5H6"
//                   />
//                 </svg>
//               </a>

//               <a
//                 href={WA_GENERAL}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center gap-2.5 min-h-[52px] bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 active:scale-[0.98] text-white font-medium px-7 rounded-full transition-all"
//               >
//                 <WhatsAppIcon />
//                 <span>Scrie-ne pe WhatsApp</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ═══════════════════════════ BARĂ STATISTICI ════════════════════════════ */}
//       <section className="relative -mt-10 sm:-mt-14 lg:-mt-16 z-20 mb-12 sm:mb-16 lg:mb-20">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6 lg:p-8">
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-3 sm:gap-6">
//               {[
//                 { value: String(ROOMS), unit: '', label: 'Camere disponibile' },
//                 { value: PRICE, unit: ' lei', label: 'Pe cameră / noapte' },
//                 { value: '632', unit: 'm', label: 'Altitudine Cozla' },
//                 { value: '8', unit: 'min', label: 'Urcare cu telegondola' },
//               ].map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 whitespace-nowrap">
//                     {stat.value}
//                     <span className="text-base sm:text-xl text-gray-500">
//                       {stat.unit}
//                     </span>
//                   </div>
//                   <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-snug">
//                     {stat.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════ DESPRE UNITATE ═════════════════════════ */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 fade-in-section">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             <div className="relative rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl group aspect-[4/3]">
//               <Image
//                 src="/cozla/28.png"
//                 alt="Terasa acoperită de la Cozla Panoramic View, cu vedere spre dealurile din jurul orașului Piatra-Neamț"
//                 fill
//                 className="object-cover transition-transform duration-500 lg:group-hover:scale-105"
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//             </div>

//             <div className="space-y-4 lg:space-y-6">
//               <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">
//                 Despre unitate
//               </span>
//               <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
//                 Cazare la{' '}
//                 <span className="text-[#B7D662]">Cozla Panoramic View</span>
//               </h2>
//               <div className="space-y-3.5 text-gray-600 text-[15px] sm:text-base leading-relaxed">
//                 <p>
//                   Cozla Panoramic View este amplasat pe Dealul Cozla, în zona
//                   Platformei Belvedere, și dispune de {ROOMS} camere amenajate
//                   simplu și funcțional.
//                 </p>
//                 <p>
//                   Poziționarea este principalul avantaj al locației. Din zona
//                   exterioară se deschide o vedere largă către lacul Bâtca
//                   Doamnei, dealurile și zona montană din jurul orașului
//                   Piatra-Neamț. În zilele cu vizibilitate bună, în depărtare
//                   poate fi observat și Masivul Ceahlău.
//                 </p>
//                 <p>
//                   În fața camerelor se află o terasă acoperită și o zonă
//                   exterioară cu spațiu verde, unde oaspeții pot petrece timp în
//                   aer liber și se pot bucura de priveliște.
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1">
//                 {['Vedere panoramică', 'Terasă acoperită', 'Acces cu telegondola'].map(
//                   (item, i) => (
//                     <div
//                       key={i}
//                       className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 shadow-md"
//                     >
//                       <svg
//                         className="w-4 h-4 text-[#B7D662] flex-shrink-0"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                         aria-hidden="true"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       <span className="text-gray-700 font-medium text-[13px] sm:text-sm">
//                         {item}
//                       </span>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════ CAMERE ═════════════════════════════ */}
//       <section className="py-12 sm:py-16 lg:py-20 fade-in-section">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
//               <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">
//                 Camere
//               </span>
//               <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
//                 {ROOMS} camere pentru o ședere liniștită pe Cozla
//               </h2>
//               <div className="space-y-3.5 text-gray-600 text-[15px] sm:text-base leading-relaxed">
//                 <p>
//                   Unitatea are o capacitate de {ROOMS} camere, potrivite pentru
//                   cei care doresc să petreacă una sau mai multe nopți pe Dealul
//                   Cozla.
//                 </p>
//                 <p>
//                   Camerele sunt luminoase și amenajate simplu, cu mobilier
//                   funcțional, lenjerie de pat și prosoape. Accesul către camere
//                   se face din zona terasei acoperite.
//                 </p>
//                 <p>
//                   În funcție de poziționare, unele camere oferă vedere către
//                   împrejurimi și lacul Bâtca Doamnei.
//                 </p>
//               </div>

//               <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6 mt-5">
//                 <div className="text-[11px] font-medium text-gray-500 tracking-wider uppercase mb-1">
//                   Tarif
//                 </div>
//                 <div className="flex items-baseline gap-2 mb-3 flex-wrap">
//                   <span className="text-3xl sm:text-4xl font-light text-gray-900">
//                     {PRICE}
//                   </span>
//                   <span className="text-gray-500 text-sm sm:text-base">
//                     lei / cameră / noapte
//                   </span>
//                 </div>
//                 <p className="text-sm text-gray-600 mb-5">
//                   Pentru rezervare, ne puteți contacta direct prin WhatsApp sau
//                   puteți completa formularul de la finalul paginii.
//                 </p>
//                 <a
//                   href={WA_GENERAL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto bg-[#B7D662] hover:bg-[#a5c550] active:scale-[0.98] text-white font-semibold px-6 rounded-full transition-all shadow-md text-sm"
//                 >
//                   <WhatsAppIcon />
//                   Scrie-ne pe WhatsApp
//                 </a>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-2">
//               <div className="relative rounded-2xl overflow-hidden shadow-xl col-span-2 sm:col-span-1 sm:row-span-2 aspect-[4/3] sm:aspect-auto sm:min-h-[280px]">
//                 <Image
//                   src="/cozla/1.png"
//                   alt="Cameră luminoasă la Cozla Panoramic View, cu mobilier funcțional și lenjerie de pat"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                 />
//               </div>
//               <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
//                 <Image
//                   src="/cozla/5.png"
//                   alt="Interiorul unei camere de la Cozla Panoramic View"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 1024px) 50vw, 25vw"
//                 />
//               </div>
//               <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
//                 <Image
//                   src="/cozla/9.png"
//                   alt="Cameră amenajată simplu la Cozla Panoramic View, pe Dealul Cozla"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 1024px) 50vw, 25vw"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════ PANORAMA ═════════════════════════════ */}
//       <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden fade-in-section">
//         <div className="absolute inset-0">
//           <Image
//             src="/cozla/26.png"
//             alt="Panorama de pe Dealul Cozla — lacul Bâtca Doamnei și culmile din jurul orașului Piatra-Neamț"
//             fill
//             className="object-cover"
//             sizes="100vw"
//           />
//           <div className={OVERLAY_TEXT_LEFT}></div>
//         </div>

//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <div className="max-w-3xl">
//             <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">
//               Priveliștea
//             </span>
//             <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-5 sm:mb-6">
//               Panorama de pe Dealul Cozla
//             </h2>
//             <div className="space-y-3.5 text-white/85 text-[15px] sm:text-base lg:text-lg leading-relaxed">
//               <p>
//                 Amplasarea pe Platforma Belvedere oferă o perspectivă largă
//                 asupra zonei Piatra-Neamț.
//               </p>
//               <p>
//                 De la Cozla Panoramic View se poate vedea lacul Bâtca Doamnei,
//                 împreună cu dealurile și culmile care înconjoară orașul.
//                 Priveliștea poate fi admirată de pe terasă și din zona
//                 exterioară a unității.
//               </p>
//               <p>
//                 În zilele senine, când vizibilitatea permite, în depărtare se
//                 poate vedea și Masivul Ceahlău.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2.5 sm:gap-4 mt-7 sm:mt-8">
//               {['Lacul Bâtca Doamnei', 'Dealurile din jur', 'Masivul Ceahlău'].map(
//                 (item, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-2"
//                   >
//                     <span className="w-1.5 h-1.5 bg-[#B7D662] rounded-full flex-shrink-0"></span>
//                     <span className="text-white/90 text-[13px] sm:text-sm font-medium">
//                       {item}
//                     </span>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ═══════════════════════ TERASĂ ȘI ZONĂ EXTERIOARĂ ═════════════════════ */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 fade-in-section">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             <div className="space-y-4 lg:space-y-6">
//               <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">
//                 Spații exterioare
//               </span>
//               <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
//                 Terasă și zonă exterioară
//               </h2>
//               <div className="space-y-3.5 text-gray-600 text-[15px] sm:text-base leading-relaxed">
//                 <p>
//                   De-a lungul clădirii se află o terasă acoperită, cu acces
//                   către camere și vedere spre împrejurimi.
//                 </p>
//                 <p>
//                   În continuarea terasei este amenajat un spațiu verde exterior,
//                   delimitat și orientat către zona panoramică. Oaspeții îl pot
//                   folosi pentru a petrece timp în aer liber pe durata șederii.
//                 </p>
//                 <p>
//                   Spațiul exterior păstrează caracterul natural al amplasării pe
//                   Dealul Cozla și permite admirarea peisajului direct din
//                   apropierea camerelor.
//                 </p>
//               </div>
//             </div>

//             {/* Fără mt-8 decalat pe mobil — acolo arăta strâmb */}
//             <div className="grid grid-cols-2 gap-3 sm:gap-4">
//               {[
//                 {
//                   img: 24,
//                   alt: 'Zona exterioară amenajată din fața camerelor, la Cozla Panoramic View',
//                   offset: false,
//                 },
//                 {
//                   img: 23,
//                   alt: 'Spațiu verde exterior orientat către zona panoramică de pe Dealul Cozla',
//                   offset: true,
//                 },
//                 {
//                   img: 20,
//                   alt: 'Terasa acoperită cu acces către camerele de la Cozla Panoramic View',
//                   offset: false,
//                 },
//                 {
//                   img: 16,
//                   alt: 'Vedere din zona exterioară a unității Cozla Panoramic View',
//                   offset: true,
//                 },
//               ].map((p) => (
//                 <div
//                   key={p.img}
//                   className={`relative rounded-2xl overflow-hidden shadow-xl aspect-square ${
//                     p.offset ? 'lg:mt-8' : ''
//                   }`}
//                 >
//                   <Image
//                     src={`/cozla/${p.img}.png`}
//                     alt={p.alt}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 1024px) 50vw, 25vw"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ═══════════════════════════ ACCES CU TELEGONDOLA ══════════════════════ */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#B7D662] via-[#a5c550] to-[#95b540] relative overflow-hidden fade-in-section">
//         <div className="absolute inset-0 opacity-10 pointer-events-none">
//           <div className="absolute top-10 left-6 w-28 h-28 md:w-64 md:h-64 border-4 border-white rounded-full"></div>
//           <div className="absolute bottom-10 right-6 w-40 h-40 md:w-96 md:h-96 border-4 border-white rounded-full"></div>
//         </div>

//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-5 sm:mb-6">
//               <svg
//                 className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={ICONS.gondola}
//                 />
//               </svg>
//             </div>

//             <span className="text-[11px] sm:text-xs font-medium text-white/80 tracking-wider uppercase block">
//               Acces cu telegondola
//             </span>
//             <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-5 sm:mb-6">
//               Drumul către Cozla Panoramic View
//             </h2>

//             <div className="space-y-3.5 text-white/90 text-[15px] sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
//               <p>
//                 Accesul la Cozla Panoramic View se face cu telegondola din
//                 Piatra-Neamț, până pe Dealul Cozla.
//               </p>
//               <p>
//                 Pe durata urcării, oaspeții pot admira orașul și împrejurimile,
//                 iar de pe Platforma Belvedere se deschide panorama către lacul
//                 Bâtca Doamnei și zona montană.
//               </p>
//               <p>
//                 Pentru informații legate de acces și rezervare, ne puteți
//                 contacta înainte de sosire.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-10">
//               <a
//                 href={waLink(
//                   'Bună ziua! Aș dori informații despre accesul la Cozla Panoramic View.'
//                 )}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center gap-2.5 min-h-[52px] bg-white hover:bg-gray-50 active:scale-[0.98] text-[#6f8a3a] font-semibold px-7 rounded-full transition-all shadow-lg"
//               >
//                 <WhatsAppIcon />
//                 <span>Contactează-ne pe WhatsApp</span>
//               </a>

//               <a
//                 href="/pages/tarife-program"
//                 className="inline-flex items-center justify-center gap-2.5 min-h-[52px] bg-white/10 backdrop-blur-sm border border-white/40 hover:bg-white/20 active:scale-[0.98] text-white font-medium px-7 rounded-full transition-all text-center"
//               >
//                 <span>Tarife și program telegondolă</span>
//                 <svg
//                   className="w-5 h-5 flex-shrink-0"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 7l5 5m0 0l-5 5m5-5H6"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════ FACILITĂȚI ═══════════════════════════ */}
//       <section className="py-12 sm:py-16 lg:py-20 fade-in-section">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12">
//             <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">
//               Facilități
//             </span>
//             <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
//               La Cozla Panoramic View sunt disponibile
//             </h2>
//           </div>

//           <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
//             {FACILITIES.map((f, i) => (
//               <div
//                 key={i}
//                 className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg lg:hover:shadow-xl transition-all lg:hover:-translate-y-0.5"
//               >
//                 <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#B7D662]/15 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
//                   <svg
//                     className="w-5 h-5 text-[#B7D662]"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={1.8}
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" d={f.path} />
//                   </svg>
//                 </div>
//                 <h3 className="font-semibold text-gray-900 text-[13px] sm:text-sm lg:text-base leading-snug">
//                   {f.label}
//                 </h3>
//                 {f.note && (
//                   <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-snug">
//                     {f.note}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ═══════════════════════════════ GALERIE FOTO ══════════════════════════ */}
//       <section
//         className="py-12 sm:py-16 lg:py-20 bg-gray-50 fade-in-section scroll-mt-20 lg:scroll-mt-24"
//         id="galerie"
//       >
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12">
//             <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">
//               Galerie foto
//             </span>
//             <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
//               Descoperă <span className="italic">Cozla Panoramic View</span>
//             </h2>
//             <p className="text-[15px] sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
//               Vezi camerele, terasa, zona exterioară și panorama de pe Dealul
//               Cozla.
//             </p>
//           </div>

//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-4 auto-rows-[110px] sm:auto-rows-[150px] md:auto-rows-[170px] lg:auto-rows-[200px]">
//               {visiblePhotos.map((photo, index) => (
//                 <button
//                   key={photo.img}
//                   type="button"
//                   onClick={() => setLightbox(index)}
//                   aria-label={`Deschide fotografia ${index + 1} din ${
//                     visiblePhotos.length
//                   }`}
//                   className={`group relative overflow-hidden rounded-xl cursor-pointer will-change-transform ${
//                     photo.span || ''
//                   }`}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
//                   <Image
//                     src={`/cozla/${photo.img}.png`}
//                     alt={photo.alt}
//                     fill
//                     loading={index < 4 ? 'eager' : 'lazy'}
//                     className="object-cover lg:group-hover:scale-110 transition-transform duration-500 ease-out"
//                     sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
//                   />
//                   <span className="absolute bottom-2.5 right-2.5 z-20 opacity-0 lg:group-hover:opacity-100 transition-opacity">
//                     <span className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
//                       <svg
//                         className="w-4 h-4 text-gray-800"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         aria-hidden="true"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                         />
//                       </svg>
//                     </span>
//                   </span>
//                 </button>
//               ))}
//             </div>

//             {!showAllPhotos && (
//               <div className="text-center mt-8 sm:mt-10">
//                 <button
//                   type="button"
//                   onClick={() => setShowAllPhotos(true)}
//                   className="group inline-flex items-center justify-center gap-3 min-h-[52px] w-full sm:w-auto bg-[#B7D662] hover:bg-[#a5c550] active:scale-[0.98] text-white font-medium px-7 rounded-full transition-all shadow-lg"
//                 >
//                   <span>Vezi toate cele {ALL_PHOTOS.length} de fotografii</span>
//                   <svg
//                     className="w-5 h-5 group-hover:translate-y-0.5 transition-transform flex-shrink-0"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ═════════════════════════ TARIF ȘI REZERVĂRI ══════════════════════════ */}
//       <section
//         className="py-12 sm:py-16 lg:py-20 fade-in-section scroll-mt-20 lg:scroll-mt-24"
//         id="rezervare"
//       >
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="text-center mb-8 sm:mb-12">
//             <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">
//               Tarif și rezervări
//             </span>
//             <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
//               {PRICE} lei{' '}
//               <span className="block sm:inline text-gray-400 font-light text-xl sm:text-inherit">
//                 / cameră / noapte
//               </span>
//             </h2>
//             <p className="text-[15px] sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
//               Pentru rezervări, recomandăm contactarea directă prin WhatsApp.
//               Trimiteți-ne perioada dorită și numărul de persoane, iar echipa
//               noastră va reveni cu informațiile necesare pentru confirmarea
//               rezervării.
//             </p>
//           </div>

//           {/* Pe mobil formularul vine PRIMUL — e acțiunea principală */}
//           <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-8">
//             {/* Formular */}
//             <div className="order-1 lg:order-2 bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl border border-gray-100">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
//                 Solicită o rezervare
//               </h3>
//               <p className="text-gray-600 text-sm mb-5 sm:mb-6">
//                 Completați datele de mai jos, iar echipa noastră vă va contacta
//                 pentru confirmarea disponibilității și a rezervării.
//               </p>

//               <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
//                 <div>
//                   <label
//                     htmlFor="nume"
//                     className="block text-sm font-medium text-gray-700 mb-1.5"
//                   >
//                     Nume și prenume <span className="text-[#B7D662]">*</span>
//                   </label>
//                   <input
//                     id="nume"
//                     name="nume"
//                     type="text"
//                     required
//                     value={form.nume}
//                     onChange={onChange}
//                     autoComplete="name"
//                     placeholder="Ion Popescu"
//                     /* text-base = 16px: sub 16px iOS face zoom automat la focus */
//                     className="w-full px-4 py-3 min-h-[52px] text-base rounded-xl border border-gray-200 focus:border-[#B7D662] focus:ring-2 focus:ring-[#B7D662]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 appearance-none"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="telefon"
//                     className="block text-sm font-medium text-gray-700 mb-1.5"
//                   >
//                     Telefon <span className="text-[#B7D662]">*</span>
//                   </label>
//                   <input
//                     id="telefon"
//                     name="telefon"
//                     type="tel"
//                     inputMode="tel"
//                     required
//                     value={form.telefon}
//                     onChange={onChange}
//                     autoComplete="tel"
//                     placeholder="07xx xxx xxx"
//                     className="w-full px-4 py-3 min-h-[52px] text-base rounded-xl border border-gray-200 focus:border-[#B7D662] focus:ring-2 focus:ring-[#B7D662]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 appearance-none"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="sosire"
//                     className="block text-sm font-medium text-gray-700 mb-1.5"
//                   >
//                     Data sosirii <span className="text-[#B7D662]">*</span>
//                   </label>
//                   <input
//                     id="sosire"
//                     name="sosire"
//                     type="date"
//                     required
//                     min={today}
//                     value={form.sosire}
//                     onChange={onChange}
//                     className="w-full px-4 py-3 min-h-[52px] text-base rounded-xl border border-gray-200 focus:border-[#B7D662] focus:ring-2 focus:ring-[#B7D662]/20 outline-none transition-all text-gray-900 appearance-none bg-white"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="mesaj"
//                     className="block text-sm font-medium text-gray-700 mb-1.5"
//                   >
//                     Mesaj
//                   </label>
//                   <textarea
//                     id="mesaj"
//                     name="mesaj"
//                     rows={4}
//                     value={form.mesaj}
//                     onChange={onChange}
//                     placeholder="Număr de persoane, număr de nopți, alte detalii…"
//                     className="w-full px-4 py-3 text-base rounded-xl border border-gray-200 focus:border-[#B7D662] focus:ring-2 focus:ring-[#B7D662]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 resize-none appearance-none"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="group w-full inline-flex items-center justify-center gap-3 min-h-[54px] bg-[#B7D662] hover:bg-[#a5c550] active:scale-[0.99] text-white font-semibold px-8 rounded-full transition-all shadow-lg"
//                 >
//                   <span>Solicită rezervarea</span>
//                   <svg
//                     className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 7l5 5m0 0l-5 5m5-5H6"
//                     />
//                   </svg>
//                 </button>

//                 {sent && (
//                   <div
//                     role="status"
//                     className="bg-[#B7D662]/10 border border-[#B7D662]/30 rounded-xl p-4 text-sm text-gray-700 leading-relaxed"
//                   >
//                     S-a deschis WhatsApp cu solicitarea completată. Apăsați
//                     trimite în WhatsApp ca să ajungă la noi. Dacă nu s-a
//                     deschis,{' '}
//                     <a
//                       href={WA_GENERAL}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-[#6f8a3a] font-semibold underline"
//                     >
//                       apăsați aici
//                     </a>{' '}
//                     sau scrieți-ne la{' '}
//                     <a
//                       href={`mailto:${EMAIL}`}
//                       className="text-[#6f8a3a] font-semibold underline break-all"
//                     >
//                       {EMAIL}
//                     </a>
//                     .
//                   </div>
//                 )}

//                 <p className="text-xs text-gray-500 leading-relaxed pt-1">
//                   Completarea și trimiterea formularului nu reprezintă
//                   confirmarea automată a rezervării. Rezervarea este confirmată
//                   ulterior de echipa noastră.
//                 </p>
//               </form>
//             </div>

//             {/* Contact rapid */}
//             <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
//               <div className="bg-gradient-to-br from-[#B7D662] to-[#95b540] rounded-2xl p-5 sm:p-6 lg:p-8 text-white shadow-xl">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
//                     <WhatsAppIcon className="w-6 h-6" />
//                   </div>
//                   <div className="min-w-0">
//                     <h3 className="font-semibold text-base sm:text-lg leading-tight">
//                       Rezervare rapidă prin WhatsApp
//                     </h3>
//                     <p className="text-white/80 text-xs sm:text-sm">
//                       Cel mai rapid mod
//                     </p>
//                   </div>
//                 </div>
//                 <a
//                   href={`tel:+${WHATSAPP_NUMBER}`}
//                   className="flex items-center min-h-[44px] text-xl sm:text-2xl lg:text-3xl font-bold mb-4 hover:underline whitespace-nowrap"
//                 >
//                   {PHONE_DISPLAY}
//                 </a>
//                 <a
//                   href={WA_GENERAL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center gap-2 w-full min-h-[50px] bg-white text-[#6f8a3a] font-semibold px-6 rounded-full transition-all hover:bg-gray-50 active:scale-[0.99] shadow-md"
//                 >
//                   Scrie-ne pe WhatsApp
//                 </a>
//               </div>

//               <div className="bg-white border-2 border-gray-100 rounded-2xl p-5 sm:p-6 lg:p-8">
//                 <div className="flex items-start gap-4">
//                   <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                     <svg
//                       className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                   </div>
//                   <div className="min-w-0">
//                     <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">
//                       E-mail
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-2">
//                       Ne puteți contacta și prin e-mail:
//                     </p>
//                     <a
//                       href={`mailto:${EMAIL}?subject=${encodeURIComponent(
//                         'Solicitare rezervare — Cozla Panoramic View'
//                       )}`}
//                       className="inline-flex items-center min-h-[44px] text-[#8aa844] hover:text-[#6f8a3a] font-medium break-all transition-colors text-sm sm:text-base"
//                     >
//                       {EMAIL}
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 lg:p-8">
//                 <div className="flex items-start gap-4">
//                   <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
//                     <svg
//                       className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">
//                       Adresă
//                     </h3>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       Platforma Belvedere, Dealul Cozla
//                       <br />
//                       Piatra-Neamț, România
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ═══════════════════════════ BLOC FINAL DE CONTACT ═════════════════════ */}
//       <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             src="/cozla/25.png"
//             alt=""
//             fill
//             className="object-cover"
//             loading="lazy"
//             sizes="100vw"
//           />
//           <div className={OVERLAY_TEXT_LEFT}></div>
//         </div>

//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <div className="max-w-3xl">
//             <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6">
//               Cozla Panoramic View
//             </h2>

//             <div className="space-y-3 text-white/85 text-[15px] sm:text-base lg:text-lg mb-7 sm:mb-8">
//               <p className="flex items-start gap-3">
//                 <svg
//                   className="w-5 h-5 text-[#B7D662] flex-shrink-0 mt-0.5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                   />
//                 </svg>
//                 <span>
//                   Platforma Belvedere, Dealul Cozla
//                   <br />
//                   Piatra-Neamț
//                 </span>
//               </p>
//               <p className="flex items-start gap-3">
//                 <svg
//                   className="w-5 h-5 text-[#B7D662] flex-shrink-0 mt-0.5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//                 <span>
//                   Tarif: <strong className="text-white">{PRICE} lei</strong> /
//                   cameră / noapte
//                 </span>
//               </p>
//               <p className="flex items-start gap-3">
//                 <span className="text-[#B7D662] flex-shrink-0 mt-0.5">
//                   <WhatsAppIcon />
//                 </span>
//                 <a
//                   href={WA_GENERAL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center min-h-[44px] hover:text-white transition-colors"
//                 >
//                   WhatsApp: {PHONE_DISPLAY}
//                 </a>
//               </p>
//               <p className="flex items-start gap-3">
//                 <svg
//                   className="w-5 h-5 text-[#B7D662] flex-shrink-0 mt-0.5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//                 <a
//                   href={`mailto:${EMAIL}`}
//                   className="inline-flex items-center min-h-[44px] hover:text-white transition-colors break-all"
//                 >
//                   {EMAIL}
//                 </a>
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//               <a
//                 href={WA_GENERAL}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center gap-3 min-h-[54px] bg-[#B7D662] hover:bg-[#a5c550] active:scale-[0.98] text-white font-semibold px-8 rounded-full text-base lg:text-lg transition-all shadow-2xl"
//               >
//                 <WhatsAppIcon className="w-6 h-6" />
//                 <span>Scrie-ne pe WhatsApp</span>
//               </a>

//               <a
//                 href="#rezervare"
//                 className="inline-flex items-center justify-center gap-3 min-h-[54px] bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 active:scale-[0.98] text-white font-medium px-8 rounded-full text-base lg:text-lg transition-all"
//               >
//                 <span>Solicită rezervarea</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />

//       {/* ════════════════ BARĂ FIXĂ DE REZERVARE — doar mobil/tabletă ══════════
//           z-[90] ca să rămână SUB meniul mobil din Navigation (z-110/120).      */}
//       <div className="lg:hidden fixed bottom-0 inset-x-0 z-[90] bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
//         <div className="flex items-center gap-2.5 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
//           <div className="flex-1 min-w-0">
//             <div className="text-[10px] uppercase tracking-wider text-gray-500 leading-none mb-0.5">
//               Tarif
//             </div>
//             <div className="text-[15px] font-bold text-gray-900 leading-tight whitespace-nowrap">
//               {PRICE} lei
//               <span className="text-[11px] font-normal text-gray-500"> / noapte</span>
//             </div>
//           </div>

//           <a
//             href={WA_GENERAL}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Scrie-ne pe WhatsApp"
//             className="w-12 h-12 flex-shrink-0 rounded-full bg-[#25D366] text-white flex items-center justify-center active:scale-95 transition-transform shadow-md"
//           >
//             <WhatsAppIcon className="w-6 h-6" />
//           </a>

//           <a
//             href="#rezervare"
//             className="inline-flex items-center justify-center h-12 px-5 rounded-full bg-[#B7D662] text-white font-semibold text-sm active:scale-95 transition-transform shadow-md whitespace-nowrap"
//           >
//             Rezervă
//           </a>
//         </div>
//       </div>

//       {/* ══════════════════════════════════ LIGHTBOX ═══════════════════════════ */}
//       {lightbox !== null && (
//         <div
//           className="fixed inset-0 z-[200] bg-black/95 flex flex-col"
//           role="dialog"
//           aria-modal="true"
//           aria-label="Galerie foto Cozla Panoramic View"
//           onTouchStart={onTouchStart}
//           onTouchEnd={onTouchEnd}
//         >
//           {/* Header: contor + închide */}
//           <div className="flex items-center justify-between px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 flex-shrink-0">
//             <span className="text-white/70 text-sm tracking-wider tabular-nums">
//               {lightbox + 1} / {ALL_PHOTOS.length}
//             </span>
//             <button
//               type="button"
//               onClick={closeLightbox}
//               aria-label="Închide galeria"
//               className="w-11 h-11 bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
//             >
//               <svg
//                 className="w-6 h-6 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Imaginea — zonă flexibilă, nu mai stă sub săgeți */}
//           <div className="flex-1 relative min-h-0 px-3 lg:px-24" onClick={closeLightbox}>
//             <Image
//               src={`/cozla/${ALL_PHOTOS[lightbox].img}.png`}
//               alt={ALL_PHOTOS[lightbox].alt}
//               fill
//               className="object-contain"
//               sizes="100vw"
//               priority
//             />
//           </div>

//           {/* Săgeți: pe mobil jos, centrate și mari; pe desktop pe laterale */}
//           <div className="flex items-center justify-center gap-6 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] flex-shrink-0 lg:hidden">
//             <button
//               type="button"
//               onClick={() => step(-1)}
//               aria-label="Fotografia anterioară"
//               className="w-14 h-14 bg-white/10 active:bg-white/25 active:scale-95 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
//             >
//               <svg
//                 className="w-6 h-6 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//             </button>
//             <span className="text-white/40 text-xs">glisează stânga / dreapta</span>
//             <button
//               type="button"
//               onClick={() => step(1)}
//               aria-label="Fotografia următoare"
//               className="w-14 h-14 bg-white/10 active:bg-white/25 active:scale-95 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
//             >
//               <svg
//                 className="w-6 h-6 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>
//           </div>

//           <button
//             type="button"
//             onClick={() => step(-1)}
//             aria-label="Fotografia anterioară"
//             className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full items-center justify-center transition-colors"
//           >
//             <svg
//               className="w-6 h-6 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>
//           <button
//             type="button"
//             onClick={() => step(1)}
//             aria-label="Fotografia următoare"
//             className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full items-center justify-center transition-colors"
//           >
//             <svg
//               className="w-6 h-6 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       )}

//       {/* ══════════════════════════════════ STILURI ════════════════════════════ */}
//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fade-in-down {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out;
//         }

//         .animate-fade-in-down {
//           animation: fade-in-down 0.8s ease-out;
//         }

//         .animation-delay-200 {
//           animation-delay: 200ms;
//         }

//         .fade-in-section {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//         }

//         .fade-in-section.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .animate-fade-in-up,
//           .animate-fade-in-down {
//             animation: none;
//           }
//           .fade-in-section {
//             opacity: 1;
//             transform: none;
//             transition: none;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }


'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'
import Footer from '@/src/components/layout/Footer'

/* ────────────────────────────────────────────────────────────────────────────
   DATE UNITATE — modifică aici dacă se schimbă contactul
   ──────────────────────────────────────────────────────────────────────────── */
const WHATSAPP_NUMBER = '40746609899'
const PHONE_DISPLAY = '+40 746 609 899'
const EMAIL = 'rezervari@perlainvest.ro'
const ROOMS = 7

const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

const WA_GENERAL = waLink(
  'Bună ziua! Aș dori informații despre cazarea la Cozla Panoramic View.'
)

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
type Photo = { img: number; alt: string; span?: string }

const ALT_TERASA =
  'Terasa acoperită și zona exterioară de la Cozla Panoramic View, cu vedere spre împrejurimile orașului Piatra-Neamț'
const ALT_CAMERA =
  'Cameră la Cozla Panoramic View, pe Dealul Cozla din Piatra-Neamț'
const ALT_BAIE = 'Băile comune de la Cozla Panoramic View'

const FEATURED: Photo[] = [
  { img: 28, alt: ALT_TERASA, span: 'col-span-2 row-span-2' },
  { img: 26, alt: ALT_TERASA },
  { img: 1, alt: ALT_CAMERA, span: 'md:row-span-2' },
  { img: 25, alt: ALT_TERASA },
  { img: 24, alt: ALT_TERASA, span: 'md:col-span-2' },
  { img: 5, alt: ALT_CAMERA },
  { img: 23, alt: ALT_TERASA, span: 'md:row-span-2' },
  { img: 8, alt: ALT_CAMERA },
  { img: 20, alt: ALT_TERASA },
  { img: 16, alt: ALT_TERASA, span: 'col-span-2 md:row-span-2' },
  { img: 9, alt: ALT_CAMERA },
  { img: 15, alt: ALT_TERASA },
]

const REST: Photo[] = [
  { img: 12, alt: ALT_TERASA },
  { img: 10, alt: ALT_CAMERA },
  { img: 11, alt: ALT_TERASA },
  { img: 17, alt: ALT_CAMERA },
  { img: 7, alt: ALT_TERASA },
  { img: 18, alt: ALT_CAMERA },
  { img: 6, alt: ALT_TERASA },
  { img: 19, alt: ALT_CAMERA },
  { img: 4, alt: ALT_TERASA },
  { img: 21, alt: ALT_CAMERA },
  { img: 2, alt: ALT_TERASA },
  { img: 27, alt: ALT_CAMERA },
  { img: 14, alt: ALT_CAMERA },
  { img: 3, alt: ALT_BAIE },
  { img: 13, alt: ALT_BAIE },
  { img: 22, alt: ALT_BAIE },
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

const FACILITIES: { label: string; path: string; note?: string }[] = [
  { label: `${ROOMS} camere`, path: ICONS.bed },
  { label: 'Wi-Fi gratuit', path: ICONS.wifi },
  { label: 'Încălzire', path: ICONS.heat },
  { label: 'Băi comune', path: ICONS.bath, note: 'separate femei / bărbați' },
  { label: 'Terasă acoperită', path: ICONS.terrace },
  { label: 'Zonă exterioară', path: ICONS.tree, note: 'amenajată, spațiu verde' },
  { label: 'Lenjerie de pat', path: ICONS.linen },
  { label: 'Prosoape', path: ICONS.towel },
  { label: 'Camere nefumători', path: ICONS.nosmoke },
  { label: 'Vedere panoramică', path: ICONS.view },
  { label: 'Acces cu telegondola', path: ICONS.gondola },
]

/* Overlay lizibil pe orice ecran: vertical pe mobil, orizontal de la lg în sus */
const OVERLAY_TEXT_LEFT =
  'absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/45 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/65 lg:to-black/25'

/* ──────────────────────────────────────────────────────────────────────────── */

export default function CozlaPanoramicView() {
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
      ? new Date(form.sosire).toLocaleDateString('ro-RO', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : '—'

    const mesaj = [
      'Solicitare rezervare — Cozla Panoramic View',
      '',
      `Nume: ${form.nume}`,
      `Telefon: ${form.telefon}`,
      `Data sosirii: ${dataFormatata}`,
      form.mesaj ? `Mesaj: ${form.mesaj}` : null,
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
            alt="Cozla Panoramic View — cazare pe Dealul Cozla, cu vedere panoramică asupra lacului Bâtca Doamnei și a orașului Piatra-Neamț"
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
                </svg>
                Cazare pe Dealul Cozla
              </span>
            </div>

            <h1 className="text-[2rem] leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 animate-fade-in-up drop-shadow-2xl">
              Cozla Panoramic View
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 animate-fade-in-up animation-delay-200 drop-shadow-lg">
              Cazare pe Dealul Cozla, în Piatra-Neamț
            </p>

            {/* Pe telefon arătăm varianta scurtă — pe tabletă/desktop, textul complet */}
            <p className="sm:hidden text-sm text-white/80 max-w-md mx-auto mb-7 leading-relaxed animate-fade-in-up animation-delay-200">
              Zonă liniștită pe Platforma Belvedere, cu vedere spre lacul Bâtca
              Doamnei. Acces cu telegondola.
            </p>
            <p className="hidden sm:block text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-9 leading-relaxed animate-fade-in-up animation-delay-200">
              Situat pe Platforma Belvedere, Cozla Panoramic View oferă cazare
              într-o zonă liniștită, cu vedere panoramică asupra lacului Bâtca
              Doamnei și a împrejurimilor orașului. Accesul se face cu
              telegondola din Piatra-Neamț.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center animate-fade-in-up animation-delay-200">
              <a
                href="#rezervare"
                className="group inline-flex items-center justify-center gap-2.5 min-h-[52px] bg-[#B7D662] hover:bg-[#a5c550] active:scale-[0.98] text-white font-semibold px-7 rounded-full text-base transition-all shadow-lg"
              >
                <span>Solicită rezervarea</span>
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
                <span>Scrie-ne pe WhatsApp</span>
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
                { value: String(ROOMS), unit: '', label: 'Camere disponibile' },
                { value: '632', unit: 'm', label: 'Altitudine Cozla' },
                { value: '8', unit: 'min', label: 'Urcare cu telegondola' },
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
                alt="Terasa acoperită de la Cozla Panoramic View, cu vedere spre dealurile din jurul orașului Piatra-Neamț"
                fill
                className="object-cover transition-transform duration-500 lg:group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">
                Despre unitate
              </span>
              <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Cazare la{' '}
                <span className="text-[#B7D662]">Cozla Panoramic View</span>
              </h2>
              <div className="space-y-3.5 text-gray-600 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Cozla Panoramic View este amplasat pe Dealul Cozla, în zona
                  Platformei Belvedere, și dispune de {ROOMS} camere amenajate
                  simplu și funcțional.
                </p>
                <p>
                  Poziționarea este principalul avantaj al locației. Din zona
                  exterioară se deschide o vedere largă către lacul Bâtca
                  Doamnei, dealurile și zona montană din jurul orașului
                  Piatra-Neamț. În zilele cu vizibilitate bună, în depărtare
                  poate fi observat și Masivul Ceahlău.
                </p>
                <p>
                  În fața camerelor se află o terasă acoperită și o zonă
                  exterioară cu spațiu verde, unde oaspeții pot petrece timp în
                  aer liber și se pot bucura de priveliște.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1">
                {['Vedere panoramică', 'Terasă acoperită', 'Acces cu telegondola'].map(
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
              <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">
                Camere
              </span>
              <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                {ROOMS} camere pentru o ședere liniștită pe Cozla
              </h2>
              <div className="space-y-3.5 text-gray-600 text-[15px] sm:text-base leading-relaxed">
                <p>
                  Unitatea are o capacitate de {ROOMS} camere, potrivite pentru
                  cei care doresc să petreacă una sau mai multe nopți pe Dealul
                  Cozla.
                </p>
                <p>
                  Camerele sunt luminoase și amenajate simplu, cu mobilier
                  funcțional, lenjerie de pat și prosoape. Accesul către camere
                  se face din zona terasei acoperite.
                </p>
                <p>
                  În funcție de poziționare, unele camere oferă vedere către
                  împrejurimi și lacul Bâtca Doamnei.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6 mt-5">
                <div className="text-[11px] font-medium text-gray-500 tracking-wider uppercase mb-2">
                  Rezervare
                </div>
                <p className="text-sm text-gray-600 mb-5">
                  Pentru disponibilitate și rezervare, ne puteți contacta direct
                  prin WhatsApp sau puteți completa formularul de la finalul
                  paginii.
                </p>
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto bg-[#B7D662] hover:bg-[#a5c550] active:scale-[0.98] text-white font-semibold px-6 rounded-full transition-all shadow-md text-sm"
                >
                  <WhatsAppIcon />
                  Scrie-ne pe WhatsApp
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl col-span-2 sm:col-span-1 sm:row-span-2 aspect-[4/3] sm:aspect-auto sm:min-h-[280px]">
                <Image
                  src="/cozla/1.png"
                  alt="Cameră luminoasă la Cozla Panoramic View, cu mobilier funcțional și lenjerie de pat"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/cozla/5.png"
                  alt="Interiorul unei camere de la Cozla Panoramic View"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/cozla/9.png"
                  alt="Cameră amenajată simplu la Cozla Panoramic View, pe Dealul Cozla"
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
            alt="Panorama de pe Dealul Cozla — lacul Bâtca Doamnei și culmile din jurul orașului Piatra-Neamț"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className={OVERLAY_TEXT_LEFT}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">
              Priveliștea
            </span>
            <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-5 sm:mb-6">
              Panorama de pe Dealul Cozla
            </h2>
            <div className="space-y-3.5 text-white/85 text-[15px] sm:text-base lg:text-lg leading-relaxed">
              <p>
                Amplasarea pe Platforma Belvedere oferă o perspectivă largă
                asupra zonei Piatra-Neamț.
              </p>
              <p>
                De la Cozla Panoramic View se poate vedea lacul Bâtca Doamnei,
                împreună cu dealurile și culmile care înconjoară orașul.
                Priveliștea poate fi admirată de pe terasă și din zona
                exterioară a unității.
              </p>
              <p>
                În zilele senine, când vizibilitatea permite, în depărtare se
                poate vedea și Masivul Ceahlău.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-4 mt-7 sm:mt-8">
              {['Lacul Bâtca Doamnei', 'Dealurile din jur', 'Masivul Ceahlău'].map(
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
              <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">
                Spații exterioare
              </span>
              <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Terasă și zonă exterioară
              </h2>
              <div className="space-y-3.5 text-gray-600 text-[15px] sm:text-base leading-relaxed">
                <p>
                  De-a lungul clădirii se află o terasă acoperită, cu acces
                  către camere și vedere spre împrejurimi.
                </p>
                <p>
                  În continuarea terasei este amenajat un spațiu verde exterior,
                  delimitat și orientat către zona panoramică. Oaspeții îl pot
                  folosi pentru a petrece timp în aer liber pe durata șederii.
                </p>
                <p>
                  Spațiul exterior păstrează caracterul natural al amplasării pe
                  Dealul Cozla și permite admirarea peisajului direct din
                  apropierea camerelor.
                </p>
              </div>
            </div>

            {/* Fără mt-8 decalat pe mobil — acolo arăta strâmb */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  img: 24,
                  alt: 'Zona exterioară amenajată din fața camerelor, la Cozla Panoramic View',
                  offset: false,
                },
                {
                  img: 23,
                  alt: 'Spațiu verde exterior orientat către zona panoramică de pe Dealul Cozla',
                  offset: true,
                },
                {
                  img: 20,
                  alt: 'Terasa acoperită cu acces către camerele de la Cozla Panoramic View',
                  offset: false,
                },
                {
                  img: 16,
                  alt: 'Vedere din zona exterioară a unității Cozla Panoramic View',
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

            <span className="text-[11px] sm:text-xs font-medium text-white/80 tracking-wider uppercase block">
              Acces cu telegondola
            </span>
            <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-5 sm:mb-6">
              Drumul către Cozla Panoramic View
            </h2>

            <div className="space-y-3.5 text-white/90 text-[15px] sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                Accesul la Cozla Panoramic View se face cu telegondola din
                Piatra-Neamț, până pe Dealul Cozla.
              </p>
              <p>
                Pe durata urcării, oaspeții pot admira orașul și împrejurimile,
                iar de pe Platforma Belvedere se deschide panorama către lacul
                Bâtca Doamnei și zona montană.
              </p>
              <p>
                Pentru informații legate de acces și rezervare, ne puteți
                contacta înainte de sosire.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-10">
              <a
                href={waLink(
                  'Bună ziua! Aș dori informații despre accesul la Cozla Panoramic View.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-[52px] bg-white hover:bg-gray-50 active:scale-[0.98] text-[#6f8a3a] font-semibold px-7 rounded-full transition-all shadow-lg"
              >
                <WhatsAppIcon />
                <span>Contactează-ne pe WhatsApp</span>
              </a>

              <a
                href="/pages/tarife-program"
                className="inline-flex items-center justify-center gap-2.5 min-h-[52px] bg-white/10 backdrop-blur-sm border border-white/40 hover:bg-white/20 active:scale-[0.98] text-white font-medium px-7 rounded-full transition-all text-center"
              >
                <span>Tarife și program telegondolă</span>
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
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ FACILITĂȚI ═══════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 fade-in-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">
              Facilități
            </span>
            <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
              La Cozla Panoramic View sunt disponibile
            </h2>
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
                  {f.label}
                </h3>
                {f.note && (
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-snug">
                    {f.note}
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
            <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">
              Galerie foto
            </span>
            <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
              Descoperă <span className="italic">Cozla Panoramic View</span>
            </h2>
            <p className="text-[15px] sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Vezi camerele, terasa, zona exterioară și panorama de pe Dealul
              Cozla.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-4 auto-rows-[110px] sm:auto-rows-[150px] md:auto-rows-[170px] lg:auto-rows-[200px]">
              {visiblePhotos.map((photo, index) => (
                <button
                  key={photo.img}
                  type="button"
                  onClick={() => setLightbox(index)}
                  aria-label={`Deschide fotografia ${index + 1} din ${
                    visiblePhotos.length
                  }`}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer will-change-transform ${
                    photo.span || ''
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <Image
                    src={`/cozla/${photo.img}.png`}
                    alt={photo.alt}
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
                  <span>Vezi toate cele {ALL_PHOTOS.length} de fotografii</span>
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
            <span className="text-[11px] sm:text-xs font-medium text-[#B7D662] tracking-wider uppercase block">
              Rezervări
            </span>
            <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
              Rezervă o cameră la Cozla Panoramic View
            </h2>
            <p className="text-[15px] sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Pentru rezervări, recomandăm contactarea directă prin WhatsApp.
              Trimiteți-ne perioada dorită și numărul de persoane, iar echipa
              noastră va reveni cu informațiile necesare pentru confirmarea
              rezervării.
            </p>
          </div>

          {/* Pe mobil formularul vine PRIMUL — e acțiunea principală */}
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Formular */}
            <div className="order-1 lg:order-2 bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Solicită o rezervare
              </h3>
              <p className="text-gray-600 text-sm mb-5 sm:mb-6">
                Completați datele de mai jos, iar echipa noastră vă va contacta
                pentru confirmarea disponibilității și a rezervării.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
                <div>
                  <label
                    htmlFor="nume"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Nume și prenume <span className="text-[#B7D662]">*</span>
                  </label>
                  <input
                    id="nume"
                    name="nume"
                    type="text"
                    required
                    value={form.nume}
                    onChange={onChange}
                    autoComplete="name"
                    placeholder="Ion Popescu"
                    /* text-base = 16px: sub 16px iOS face zoom automat la focus */
                    className="w-full px-4 py-3 min-h-[52px] text-base rounded-xl border border-gray-200 focus:border-[#B7D662] focus:ring-2 focus:ring-[#B7D662]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 appearance-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefon"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Telefon <span className="text-[#B7D662]">*</span>
                  </label>
                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    inputMode="tel"
                    required
                    value={form.telefon}
                    onChange={onChange}
                    autoComplete="tel"
                    placeholder="07xx xxx xxx"
                    className="w-full px-4 py-3 min-h-[52px] text-base rounded-xl border border-gray-200 focus:border-[#B7D662] focus:ring-2 focus:ring-[#B7D662]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 appearance-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sosire"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Data sosirii <span className="text-[#B7D662]">*</span>
                  </label>
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
                  >
                    Mesaj
                  </label>
                  <textarea
                    id="mesaj"
                    name="mesaj"
                    rows={4}
                    value={form.mesaj}
                    onChange={onChange}
                    placeholder="Număr de persoane, număr de nopți, alte detalii…"
                    className="w-full px-4 py-3 text-base rounded-xl border border-gray-200 focus:border-[#B7D662] focus:ring-2 focus:ring-[#B7D662]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 resize-none appearance-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 min-h-[54px] bg-[#B7D662] hover:bg-[#a5c550] active:scale-[0.99] text-white font-semibold px-8 rounded-full transition-all shadow-lg"
                >
                  <span>Solicită rezervarea</span>
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
                  >
                    S-a deschis WhatsApp cu solicitarea completată. Apăsați
                    trimite în WhatsApp ca să ajungă la noi. Dacă nu s-a
                    deschis,{' '}
                    <a
                      href={WA_GENERAL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6f8a3a] font-semibold underline"
                    >
                      apăsați aici
                    </a>{' '}
                    sau scrieți-ne la{' '}
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-[#6f8a3a] font-semibold underline break-all"
                    >
                      {EMAIL}
                    </a>
                    .
                  </div>
                )}

                <p className="text-xs text-gray-500 leading-relaxed pt-1">
                  Completarea și trimiterea formularului nu reprezintă
                  confirmarea automată a rezervării. Rezervarea este confirmată
                  ulterior de echipa noastră.
                </p>
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
                    <h3 className="font-semibold text-base sm:text-lg leading-tight">
                      Rezervare rapidă prin WhatsApp
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Cel mai rapid mod
                    </p>
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
                >
                  Scrie-ne pe WhatsApp
                </a>
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
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">
                      E-mail
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Ne puteți contacta și prin e-mail:
                    </p>
                    <a
                      href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                        'Solicitare rezervare — Cozla Panoramic View'
                      )}`}
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
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">
                      Adresă
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Platforma Belvedere, Dealul Cozla
                      <br />
                      Piatra-Neamț, România
                    </p>
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
            <h2 className="text-[1.6rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6">
              Cozla Panoramic View
            </h2>

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
                <span>
                  Platforma Belvedere, Dealul Cozla
                  <br />
                  Piatra-Neamț
                </span>
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
                >
                  WhatsApp: {PHONE_DISPLAY}
                </a>
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
                <span>Scrie-ne pe WhatsApp</span>
              </a>

              <a
                href="#rezervare"
                className="inline-flex items-center justify-center gap-3 min-h-[54px] bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 active:scale-[0.98] text-white font-medium px-8 rounded-full text-base lg:text-lg transition-all"
              >
                <span>Solicită rezervarea</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ════════════════ BARĂ FIXĂ DE REZERVARE — doar mobil/tabletă ══════════
          z-[90] ca să rămână SUB meniul mobil din Navigation (z-110/120).      */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-[90] bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-2.5 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
          <div className="flex-1 min-w-0">
            <div className="text-[10px] uppercase tracking-wider text-gray-500 leading-none mb-0.5">
              Cazare pe Cozla
            </div>
            <div className="text-[15px] font-bold text-gray-900 leading-tight truncate">
              Cozla Panoramic View
            </div>
          </div>

          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Scrie-ne pe WhatsApp"
            className="w-12 h-12 flex-shrink-0 rounded-full bg-[#25D366] text-white flex items-center justify-center active:scale-95 transition-transform shadow-md"
          >
            <WhatsAppIcon className="w-6 h-6" />
          </a>

          <a
            href="#rezervare"
            className="inline-flex items-center justify-center h-12 px-5 rounded-full bg-[#B7D662] text-white font-semibold text-sm active:scale-95 transition-transform shadow-md whitespace-nowrap"
          >
            Rezervă
          </a>
        </div>
      </div>

      {/* ══════════════════════════════════ LIGHTBOX ═══════════════════════════ */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Galerie foto Cozla Panoramic View"
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
              aria-label="Închide galeria"
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
              alt={ALL_PHOTOS[lightbox].alt}
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
              aria-label="Fotografia anterioară"
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
            <span className="text-white/40 text-xs">glisează stânga / dreapta</span>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Fotografia următoare"
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
            aria-label="Fotografia anterioară"
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
            aria-label="Fotografia următoare"
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
  )
}