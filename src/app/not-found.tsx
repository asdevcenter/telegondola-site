// app/not-found.tsx
'use client'

import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function NotFound() {
  useEffect(() => {
    window.location.href = '/'
  }, [])

  return null
}