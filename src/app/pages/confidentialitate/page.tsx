'use client'

import dynamic from 'next/dynamic'

const PrivacyPolicy = dynamic(() => import('./PrivacyPolicy'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Logo Telegondola animat */}
        <div className="relative w-24 h-24 animate-bounce">
          <img 
            src="/logo-color.png" 
            alt="Telegondola" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Text loading */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-lg">Se încarcă pagina</span>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-[#B7D662] rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
            <span className="w-2 h-2 bg-[#B7D662] rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
            <span className="w-2 h-2 bg-[#B7D662] rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
          </div>
        </div>
      </div>
    </div>
  )
})

export default function Page() {
  return <PrivacyPolicy />
}