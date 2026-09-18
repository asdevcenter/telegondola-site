'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navigationItems = [
    { name: 'Despre noi', href: '/pages/despre-noi' },
    { name: 'Tarife și program', href: '/pages/tarife-program' },
    { name: 'Puncte de interes', href: '/pages/puncte-de-interes' },
     { name: 'Cazare', href: '/pages/cozla-panoramic-view' },
    { name: 'Galerie', href: '/pages/galerie' },
    { name: 'Contact', href: '/pages/contact' }
  ]

  return (
    <>
      {/* Navigation - Z-INDEX MAXIM! */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 md:py-2' 
          : 'bg-gradient-to-b from-black/50 to-transparent py-4 md:py-4'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className={`transition-all duration-300 transform ${scrolled ? 'scale-90' : 'scale-100'} relative ${mobileMenuOpen ? 'z-[105]' : 'z-[101]'}`}
            >
              <Image 
                src={scrolled ? "/logo-color.png" : "/logo-white.svg"}
                alt="Telegondola Piatra Neamț" 
                width={140} 
                height={46}
                className="h-10 w-auto cursor-pointer"
                priority
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href.includes('#') && pathname === '/' && item.href.startsWith('/#'))
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative font-medium text-sm transition-all duration-300 ${
                      scrolled ? 'text-gray-700 hover:text-[#B7D662]' : 'text-white hover:text-white/80'
                    } group ${isActive ? 'text-[#B7D662]' : ''}`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#B7D662] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                )
              })}
              
              {/* CTA Button */}
              <Link 
                href="/pages/tickets" 
                className="relative group"
              >
                <span className="bg-[#B7D662] hover:bg-[#a5c550] text-white font-semibold py-2.5 px-6 rounded-full transition-all flex items-center gap-2 text-sm shadow-lg hover:shadow-xl">
                  Cumpără bilet
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button - Z-INDEX MARE! */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 relative ${mobileMenuOpen ? 'z-[120]' : 'z-[101]'} touch-manipulation`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className={`w-6 h-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className={`w-6 h-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Z-INDEX SUB NAVIGATION */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[102] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - Z-INDEX PESTE OVERLAY DAR SUB BUTTON */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-[110] lg:hidden transition-transform duration-300 ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Image 
              src="/logo-color.png"
              alt="Telegondola Piatra Neamț" 
              width={120} 
              height={40}
              className="h-8 w-auto"
            />
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto py-4 px-4">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href.includes('#') && pathname === '/' && item.href.startsWith('/#'))
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 px-4 font-medium transition-colors rounded-lg ${
                    isActive 
                      ? 'text-[#B7D662] bg-[#B7D662]/10' 
                      : 'text-gray-700 hover:text-[#B7D662] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-gray-200">
            <Link
              href="/pages/tickets"
              className="block bg-[#B7D662] text-white text-center py-3 rounded-full font-semibold hover:bg-[#a5c550] transition-colors shadow-lg"
            >
              Cumpără bilet
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}