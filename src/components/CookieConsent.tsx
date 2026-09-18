'use client'

import React, { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  
  const [preferences, setPreferences] = useState({
    necessary: true, // Întotdeauna activate
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    } else {
      const saved = JSON.parse(consent)
      setPreferences(saved)
      loadScripts(saved)
    }
  }, [])

  const loadScripts = (prefs: typeof preferences) => {
    // Analytics - Google Analytics sau altele
    if (prefs.analytics && typeof window !== 'undefined') {
      // Exemplu: window.gtag('consent', 'update', { analytics_storage: 'granted' })
      console.log('Analytics enabled')
    }
    
    // Marketing - Facebook Pixel, Google Ads etc
    if (prefs.marketing && typeof window !== 'undefined') {
      // Exemplu: window.fbq('consent', 'grant')
      console.log('Marketing enabled')
    }
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    loadScripts(allAccepted)
    setShowBanner(false)
    setShowSettings(false)
  }

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    setPreferences(necessaryOnly)
    localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnly))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setShowBanner(false)
    setShowSettings(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    loadScripts(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" style={{ display: showSettings ? 'block' : 'none' }} />
      
      {/* Banner simplu */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-50 animate-slide-up">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  🍪 Folosim cookies
                </h3>
                <p className="text-gray-600 text-sm">
                  Folosim cookies pentru a îmbunătăți experiența ta pe site. 
                  Poți accepta toate cookie-urile sau le poți gestiona individual.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
                >
                  Setări cookies
                </button>
                <button
                  onClick={acceptNecessary}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
                >
                  Doar necesare
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-3 bg-[#B7D662] hover:bg-[#95b540] text-white font-semibold rounded-lg transition-all shadow-md"
                >
                  Acceptă toate
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Modal setări detaliate */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Setări cookies</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              
              {/* Necesare */}
              <div className="pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-gray-900">Cookies necesare</h3>
                    <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                      Întotdeauna active
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Aceste cookie-uri sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate. 
                  Ele includ cookie-uri de sesiune, securitate și preferințe de bază.
                </p>
              </div>

              {/* Analytics */}
              <div className="pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Cookies de analiză</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#B7D662]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B7D662]"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600">
                  Ne ajută să înțelegem cum folosești site-ul pentru a-l îmbunătăți. 
                  Colectăm date anonime despre vizitatori și comportamentul pe site.
                </p>
              </div>

              {/* Marketing */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Cookies de marketing</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#B7D662]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B7D662]"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-600">
                  Folosite pentru a afișa reclame relevante și pentru a măsura eficiența campaniilor publicitare. 
                  Pot fi setate de parteneri publicitari.
                </p>
              </div>

            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={acceptNecessary}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
              >
                Doar necesare
              </button>
              <button
                onClick={savePreferences}
                className="flex-1 px-6 py-3 bg-[#B7D662] hover:bg-[#95b540] text-white font-semibold rounded-lg transition-all"
              >
                Salvează preferințele
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}