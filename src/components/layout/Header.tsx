'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-white text-2xl font-bold">
              PIATRA DE SUS
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="#telegondola" className="text-white hover:text-verde-piatra transition">
              Telegondola
            </Link>
            <Link href="#tarife" className="text-white hover:text-verde-piatra transition">
              Tarife / Program
            </Link>
            <Link href="#puncte-interes" className="text-white hover:text-verde-piatra transition">
              Puncte de interes
            </Link>
            <Link 
              href="https://bilete-externe.ro" 
              className="bg-verde-piatra hover:bg-verde-inchis text-white font-semibold py-3 px-6 rounded-full transition"
            >
              Bilete
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}