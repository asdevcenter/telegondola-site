'use client'

import { useEffect } from 'react'

// Orice adresă inexistentă duce la prima pagină, în limba din adresă (/en/..., /de/...).
export default function NotFound() {
  useEffect(() => {
    const limba = window.location.pathname.match(/^\/(en|fr|de|es)(\/|$)/)?.[1]
    window.location.href = limba ? `/${limba}/` : '/'
  }, [])

  return (
    <html lang="ro">
      <body />
    </html>
  )
}
