'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Navigation from '../../../components/Navigation'
import Footer from '@/src/components/layout/Footer'
import { useTelegondola, programGrupat } from '../../../lib/telegondola'

export default function Contact() {
  const [activeTab, setActiveTab] = useState('info')

  // Programul vine de la panoul de administrare.
  const { program } = useTelegondola()

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Telefon',
      details: ['+40 724 538 928'],
      action: 'tel:+40724538928',
      actionText: 'Sună acum',
      primary: true
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      details: ['office@perlainvest.ro'],
      action: 'mailto:office@perlainvest.ro',
      actionText: 'Trimite email'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Adrese',
      details: [
        'Stație plecare: Piața Gării 7, Piatra Neamț',
        'Stație sosire: Platoul Cozla, 632m altitudine'
      ],
      action: 'https://maps.app.goo.gl/WnXkdwCFgsbfeq1C9',
      actionText: 'Vezi pe hartă'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Program',
      details: programGrupat(program).map((r) => `${r.zile}: ${r.interval}`)
    }
  ]

  const faqs = [
    {
      q: 'Pot face rezervări pentru grupuri mari?',
      a: 'Da, oferim tarife speciale pentru grupuri de peste 20 de persoane. Vă rugăm să ne contactați telefonic la +40 724 538 928 sau prin email la office@perlainvest.ro pentru detalii și rezervări.'
    },
    {
      q: 'Ce se întâmplă în caz de vreme nefavorabilă?',
      a: 'Siguranța vizitatorilor este prioritatea noastră. În caz de vânt puternic, furtună sau alte condiții meteo periculoase, telegondola își poate suspenda temporar activitatea. Vă recomandăm să ne contactați înainte de vizită.'
    },
    {
      q: 'Există facilități pentru persoane cu dizabilități?',
      a: 'Da, telegondola este accesibilă persoanelor cu dizabilități. Oferim transport gratuit o dată pe zi, în baza abonamentului lunar eliberat gratuit la casierie, cu prezentarea actelor doveditoare.'
    },
    {
      q: 'Pot anula sau modifica o rezervare?',
      a: 'Biletele achiziționate online sunt valabile 90 de zile de la data achiziției. Pentru modificări sau anulări, vă rugăm să ne contactați cu cel puțin 24 de ore înainte.'
    },
    {
      q: 'Există parcare disponibilă?',
      a: 'Da, există parcare disponibilă în apropierea stației de plecare.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

 {/* Hero Section */}
<section className="relative h-[40vh] min-h-[350px] md:h-[50vh] md:min-h-[400px] overflow-hidden">
  <div className="absolute inset-0">
    <Image
      src="/contact-hero.jpg"
      alt="Contact Telegondola Piatra Neamț"
      fill
      className="object-cover"
      priority
      quality={90}
      style={{ willChange: 'auto' }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
  </div>

  <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
        Contact
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-white/90 animate-fade-in-up animation-delay-200">
        Echipa Telegondolei Piatra Neamț este mereu disponibilă pentru informații, rezervări sau asistență.
      </p>
    </div>
  </div>
</section>

      {/* Quick Actions */}
      <section className="relative -mt-16 z-20 mb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/pages/tickets" className="group">
                <div className="bg-gradient-to-br from-[#B7D662] to-[#95b540] p-6 rounded-xl text-white hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Cumpără bilet</h3>
                      <p className="text-white/80 text-sm">Online</p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="tel:+40724538928" className="group">
                <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#B7D662] hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#B7D662]/10">
                      <svg className="w-6 h-6 text-gray-700 group-hover:text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#B7D662]">Sună-ne</h3>
                      <p className="text-gray-600 text-sm">+40 724 538 928</p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://maps.app.goo.gl/WnXkdwCFgsbfeq1C9" target="_blank" className="group">
                <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#B7D662] hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#B7D662]/10">
                      <svg className="w-6 h-6 text-gray-700 group-hover:text-[#B7D662]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#B7D662]">Vezi pe hartă</h3>
                      <p className="text-gray-600 text-sm">Direcții GPS</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'info'
                  ? 'bg-[#B7D662] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Informații contact
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'faq'
                  ? 'bg-[#B7D662] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Întrebări frecvente
            </button>
          </div>



{/* Tab Content */}
{activeTab === 'info' && (
  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
    {/* Contact Info Cards */}
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Suntem aici pentru tine
      </h2>

      {contactInfo.map((info, index) => (
        <div
          key={index}
          className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all ${
            info.primary ? 'border-2 border-[#B7D662]' : ''
          }`}
        >
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
              info.primary ? 'bg-[#B7D662]/20' : 'bg-gray-100'
            }`}>
              <div className={info.primary ? 'text-[#B7D662]' : 'text-gray-700'}>
                {info.icon}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-gray-600 mb-1">{detail}</p>
              ))}
              {info.action && (
                <a
                  href={info.action}
                  target={info.action.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center gap-2 mt-3 font-medium transition-colors ${
                    info.primary
                      ? 'text-[#B7D662] hover:text-[#95b540]'
                      : 'text-gray-700 hover:text-[#B7D662]'
                  }`}
                >
                  {info.actionText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Map & Additional Info */}
    <div className="space-y-6">
      {/* Map - OPTIMIZED */}
      <div className="bg-white rounded-2xl p-3 shadow-lg">
        <div className="relative w-full h-[400px] md:h-[450px] rounded-xl overflow-hidden bg-gray-100">
          {/* Loading placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-2 text-gray-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm text-gray-500">Se încarcă harta...</p>
            </div>
          </div>

          {/* Iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.753590981863!2d26.3615745!3d46.9272262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473555c641748c49%3A0x67376e9d1e54a160!2sTelegondol%C4%83%20-%20sta%C8%9Bie%20plecare%20-%20Piatra%20Neam%C8%9B!5e0!3m2!1sro!2sro!4v1761310671097!5m2!1sro!2sro"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-300"
            title="Locația Telegondola Piatra Neamț"
          />
        </div>

        {/* Fallback link */}
        <div className="mt-3 text-center">
          <a
            href="https://maps.app.goo.gl/wA93S4whTgT3STtZ8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#B7D662] hover:text-[#a5c550] font-medium transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Deschide în Google Maps
          </a>
        </div>
      </div>

      {/* Emergency Info */}
      <div className="bg-red-50 border-2 border-red-100 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-red-900 mb-2">Numere de urgență</h3>
            <div className="space-y-1 text-red-800">
              <p>Urgențe generale: <a href="tel:112" className="font-semibold hover:underline">112</a></p>
              <p>Salvamont: <a href="tel:0725826668" className="font-semibold hover:underline">0725 826 668</a></p>
              <p>Dispecerat telegondolă: <a href="tel:+40724538928" className="font-semibold hover:underline">+40 724 538 928</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-gradient-to-r from-[#B7D662] to-[#95b540] rounded-2xl p-6 text-white">
        <h3 className="font-semibold text-xl mb-4">Urmărește-ne pe social media</h3>
        <p className="text-white/80 mb-6">
          Fii la curent cu ultimele noutăți, evenimente și fotografii
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61580615018658"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 bg-white/20 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/piatradesus?igsh=MXZxODRiaHB0NTA0eQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 bg-white/20 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F56040] rounded-full flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@piatradesus?_t=ZN-90oTOs7kTrC&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-10 h-10 bg-white/20 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
)}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Întrebări frecvente
                </h2>
                <p className="text-gray-600 text-lg">
                  Răspunsuri la cele mai comune întrebări
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 flex items-start gap-3">
                      <span className="text-[#B7D662] text-2xl flex-shrink-0">Q</span>
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 pl-8 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-600 mb-6">Nu ai găsit răspunsul căutat?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+40724538928"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#B7D662] hover:bg-[#95b540] text-white font-semibold rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Sună-ne</span>
                  </a>
                  <a
                    href="mailto:office@perlainvest.ro"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 hover:border-[#B7D662] text-gray-700 font-semibold rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Trimite Email</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

{/* CTA Section - FIXED */}
<section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/journey-bg.jpg"
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
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
        Te așteptăm la <br />
        <span className="font-semibold italic text-[#B7D662]">telegondolă</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 max-w-3xl">
        Suntem aici pentru orice întrebare sau informație de care ai nevoie.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <a
          href="/pages/tickets"
          className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#B7D662] hover:bg-[#a5c550] text-white font-semibold py-3 px-6 md:py-4 md:px-10 rounded-full text-base md:text-lg transition-all transform hover:scale-105 shadow-2xl"
        >
          <span>Cumpără bilet online</span>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <a
          href="tel:+40724538928"
          className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-medium py-3 px-6 md:py-4 md:px-10 rounded-full text-base md:text-lg transition-all"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Sună-ne</span>
        </a>
      </div>
    </div>
  </div>
</section>

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
      `}</style>
    </div>
  )
}