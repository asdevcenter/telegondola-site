// src/app/pages/puncte-de-interes/[slug]/ClientSlugPage.tsx
'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

// Actualizează calea către componente
const attractionComponents: { [key: string]: any } = {
  'curtea-domneasca': dynamic(() => import('../components/CurteaDomneasca'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'biserica-nasterea-sf-ioan-botezatorul': dynamic(() => import('../components/BisericaSfIoan'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'sinagoga-baal-shem-tov': dynamic(() => import('../components/SinagogaBaalSemTov'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
   'casa-calistrat-hogas': dynamic(() => import('../components/MuzeulCalistratHogas'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
    'muzeul-istorie-arheologie': dynamic(() => import('../components/MuzeulIstorieArheologie'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
      'muzeul-cucuteni': dynamic(() => import('../components/MuzeulCucuteni'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'muzeul-arta': dynamic(() => import('../components/MuzeulDeArta'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'muzeul-etnografie': dynamic(() => import('../components/MuzeulDeEtnografie'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
   'teatrul-tineretului': dynamic(() => import('../components/TeatrulTineretului'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
   'telegondola': dynamic(() => import('../components/Telegondola'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
   'muntele-cozla': dynamic(() => import('../components/DealulCozla'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
   'muntele-pietricica': dynamic(() => import('../components/MuntelePietricica'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'muzeul-stiinte-naturale': dynamic(() => import('../components/MuzeulStiinte'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
   'lacul-batca-doamnei': dynamic(() => import('../components/LaculBatcaDoamnei'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'parcul-central': dynamic(() => import('../components/ParculCentral'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'gradina-nicu-albu': dynamic(() => import('../components/GradinNicuAlbu'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'strandul-tineretului': dynamic(() => import('../components/StrandulTineretului'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'stadionul-ceahlaul': dynamic(() => import('../components/StadionulCeahlau'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'manastirea-bistrita': dynamic(() => import('../components/ManastireaBistrita'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'manastirea-pangarati': dynamic(() => import('../components/ManastireaPangarati'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
   'manastirea-neamt': dynamic(() => import('../components/ManastireaNeamt'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'manastirea-agapia': dynamic(() => import('../components/ManastireaAgapia'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'manastirea-varatec': dynamic(() => import('../components/ManastireaVaratec'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'manastirea-secu': dynamic(() => import('../components/ManastireaSecu'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'manastirea-sihastria': dynamic(() => import('../components/ManastireaSihastria'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
    'manastirea-sihla': dynamic(() => import('../components/ManastireaSihla'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'cheile-bicazului': dynamic(() => import('../components/CheileBicazului'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
   'lacul-rosu': dynamic(() => import('../components/LaculRosu'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
   'masivul-ceahlau': dynamic(() => import('../components/MasivulCeahlau'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
    'lacul-izvorul-muntelui': dynamic(() => import('../components/LaculIzvorulMuntelui'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'rezervatia-dragos-voda': dynamic(() => import('../components/RezervatiaZimbri'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'cetatea-neamt': dynamic(() => import('../components/CetateaNeamt'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  'muzeul-ion-creanga': dynamic(() => import('../components/CasaIonCreanga'), {
    ssr: false,
    loading: () => <LoadingSpinner initials="PdS" />
  }),
  // Adaugă alte atracții aici când le creezi
}

function LoadingSpinner({ initials }: { initials: string }) {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
      <div className="relative flex flex-col items-center gap-6">
        
        {/* Logo cu efect de respirație */}
        <div className="relative">
          <img 
            src="/logo-color.png" 
            alt="Telegondola Piatra Neamț" 
            className="w-28 h-28 object-contain animate-[pulse_2s_ease-in-out_infinite]"
          />
          
          {/* Spinner subțire în jurul logo-ului */}
          <div className="absolute -inset-4">
            <div className="w-36 h-36 border-[3px] border-gray-100 rounded-full"></div>
            <div className="absolute inset-0 w-36 h-36 border-[3px] border-t-[#B7D662] border-transparent rounded-full animate-spin"></div>
          </div>
        </div>
        
        {/* Text elegant */}
        <div className="text-center space-y-2">
          <p className="text-gray-800 font-semibold">Se încarcă...</p>
        </div>
        
      </div>
    </div>
  )
}

function NotFoundComponent() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    // Countdown și redirect
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push('/') // Redirect la homepage
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md px-4">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/logo-color.png" 
            alt="Telegondola" 
            className="w-24 h-24 mx-auto object-contain opacity-50"
          />
        </div>

        {/* 404 */}
        <h1 className="text-6xl font-bold text-[#B7D662] mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-2">Pagina nu a fost găsită</p>
        <p className="text-sm text-gray-500 mb-8">
          Vei fi redirecționat în <span className="font-bold text-[#B7D662]">{countdown}</span> secunde...
        </p>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8 overflow-hidden">
          <div 
            className="bg-[#B7D662] h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${((3 - countdown) / 3) * 100}%` }}
          ></div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="inline-flex items-center justify-center gap-2 bg-[#B7D662] hover:bg-[#a5c550] text-white font-semibold py-3 px-6 rounded-full transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Acasă
          </a>
          
          <a 
            href="/pages/puncte-de-interes" 
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-full transition-all border-2 border-gray-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Puncte de interes
          </a>
        </div>
      </div>
    </div>
  )
}

export default function ClientSlugPage({ 
  slug, 
  validSlugs 
}: { 
  slug: string
  validSlugs: string[]
}) {
  const AttractionComponent = attractionComponents[slug]
  
  if (!AttractionComponent || !validSlugs.includes(slug)) {
    return <NotFoundComponent />
  }
  
  return <AttractionComponent />
}