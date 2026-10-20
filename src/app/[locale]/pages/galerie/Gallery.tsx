'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'
import { useTranslations } from 'next-intl'
import { Link } from '@/src/i18n/navigation'

export default function Galerie() {
  const t = useTranslations('galerie')
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [visibleImages, setVisibleImages] = useState(20)
  const [isLoading, setIsLoading] = useState(false)
  
  // Generăm lista de imagini img-1.jpg până la img-34.jpg
  const images = useMemo(() => {
    const imageList = []
    for (let i = 1; i <= 34; i++) {
      imageList.push({
        id: i,
        src: `/galerie/img${i}.jpg`
      })
    }
    return imageList
  }, [])
  
  // Imagini afișate
  const displayedImages = images.slice(0, visibleImages)
  
  // Load more
  const handleLoadMore = useCallback(() => {
    setVisibleImages(prev => Math.min(prev + 20, images.length))
  }, [images.length])
  
  // Open lightbox
  const handleImageClick = useCallback((image, index) => {
    setSelectedImage(image)
    setSelectedIndex(index)
  }, [])
  
  // Close lightbox
  const handleCloseLightbox = useCallback(() => {
    setSelectedImage(null)
  }, [])
  
  // Navigate in lightbox
  const handleNext = useCallback(() => {
    const nextIndex = (selectedIndex + 1) % displayedImages.length
    setSelectedIndex(nextIndex)
    setSelectedImage(displayedImages[nextIndex])
  }, [selectedIndex, displayedImages])
  
  const handlePrev = useCallback(() => {
    const prevIndex = selectedIndex === 0 ? displayedImages.length - 1 : selectedIndex - 1
    setSelectedIndex(prevIndex)
    setSelectedImage(displayedImages[prevIndex])
  }, [selectedIndex, displayedImages])
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return
      
      if (e.key === 'Escape') handleCloseLightbox()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, handleCloseLightbox, handleNext, handlePrev])
  
  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000) {
        if (visibleImages < images.length) {
          handleLoadMore()
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [visibleImages, images.length, handleLoadMore])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - EXACT CA ÎN ORIGINAL */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-galerie.jpg"
            alt={t('imagineHero')}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-8 leading-tight animate-fade-in-up">
            {t.rich('titlu', { c: (c) => <span className="text-[#B7D662]">{c}</span> })}
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-3xl mx-auto mb-8 md:mb-12 animate-fade-in-up animation-delay-200">
            {t('subtitlu')}
          </p>
          
  
        </div>
      </section>

{/* Main Gallery - MEGA WOW BENTO GRID - OPTIMIZED */}
<section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
    {/* Dynamic Bento Grid Layout - OPTIMIZED */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-4">
      {displayedImages.map((image, index) => {
        // Pattern pentru layout dinamic spectaculos
        let gridClass = ""
        
        // Responsive pe mobile - OPTIMIZAT
        if (index % 12 === 8) {
          gridClass = "col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-3 row-span-2"
        } else if (index % 12 === 0 || index % 12 === 5) {
          gridClass = "col-span-2 row-span-2"
        } else if (index % 12 === 2 || index % 12 === 11) {
          gridClass = "col-span-1 row-span-2"
        } else if (index % 12 === 3 || index % 12 === 10) {
          gridClass = "col-span-2 md:col-span-2 row-span-1"
        } else {
          gridClass = "col-span-1 row-span-1"
        }
        
        return (
          <div
            key={image.id}
            className={`${gridClass} group relative overflow-hidden cursor-pointer will-change-transform`}
            onClick={() => handleImageClick(image, index)}
          >
            {/* Gradient overlay - OPTIMIZED */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            
            {/* Container pentru imagine cu efecte - OPTIMIZED */}
            <div className="relative w-full h-full overflow-hidden rounded-xl md:rounded-2xl bg-gray-200">
              <img
                src={image.src}
                alt=""
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                loading={index < 6 ? "eager" : "lazy"}
                decoding="async"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-gray-100', 'to-gray-200')
                  e.target.parentElement.innerHTML = `
                    <svg class="w-8 h-8 md:w-12 md:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  `
                }}
              />
              
              {/* Gradient overlay pentru depth - OPTIMIZED */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon view centrat - OPTIMIZED */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 md:p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
             
            {/* Border glow effect - OPTIMIZED */}
            <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-[-2px] bg-gradient-to-r from-[#B7D662] via-[#a5c550] to-[#B7D662] rounded-xl md:rounded-2xl opacity-30 blur-sm"></div>
            </div>
          </div>
        )
      })}
    </div>
    
    {/* Load more cu animație fancy - OPTIMIZED */}
    {visibleImages < images.length && (
      <div className="flex justify-center mt-16">
        <button
          onClick={handleLoadMore}
          className="group relative px-10 py-4 overflow-hidden rounded-full bg-gradient-to-r from-[#B7D662] to-[#a5c550] text-white font-semibold shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-2">
            <span>{t('maiMulte')}</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#a5c550] to-[#B7D662] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      </div>
    )}
  </div>
  
  {/* Decorative elements - OPTIMIZED */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-[#B7D662]/5 rounded-full blur-3xl pointer-events-none"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B7D662]/5 rounded-full blur-3xl pointer-events-none"></div>
</section>

 {/* CTA Section - FIXED */}
<section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/cta-galerie.jpg"
      alt=""
      className="w-full h-full object-cover"
      loading="lazy"
      style={{ objectPosition: 'center' }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
  </div>
  
  {/* Content */}
  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    <div className="max-w-4xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-8 leading-tight">
        {t('ctaTitlu1')}<br />
        <span className="font-semibold italic text-[#B7D662]">{t('ctaTitlu2')}</span>
      </h2>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/80 mb-6 md:mb-8 lg:mb-12 max-w-3xl">
        {t('ctaText')}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <Link 
          href="/pages/tickets" 
          className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#B7D662] hover:bg-[#a5c550] text-white font-semibold py-3 md:py-4 px-6 md:px-10 rounded-full text-sm md:text-lg transition-all transform hover:scale-105 shadow-2xl"
        >
          <span>{t('cumpara')}</span>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
        <Link 
          href="/pages/despre-noi" 
          className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-medium py-3 md:py-4 px-6 md:px-10 rounded-full text-sm md:text-lg transition-all"
        >
          <span>{t('aflaMaiMulte')}</span>
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={handleCloseLightbox}
        >
          {/* Navigation buttons */}
          <button
            className="absolute left-4 md:left-8 text-white hover:text-gray-300 z-10 p-2"
            onClick={(e) => {
              e.stopPropagation()
              handlePrev()
            }}
          >
            <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="absolute right-4 md:right-8 text-white hover:text-gray-300 z-10 p-2"
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
          >
            <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 p-2"
            onClick={(e) => {
              e.stopPropagation()
              handleCloseLightbox()
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Image */}
          <img
            src={selectedImage.src}
            alt=""
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      
      <Footer />
      
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

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  )
}