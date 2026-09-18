// Versiunea cu redirect INSTANT
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function NotFoundComponent() {
  const router = useRouter()

  useEffect(() => {
    // Redirect instant la homepage
    router.push('/')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Loading spinner simplu */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-[#B7D662] border-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-600">Redirecționare...</p>
      </div>
    </div>
  )
}