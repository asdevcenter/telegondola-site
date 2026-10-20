'use client'

import { useEffect } from 'react'

// Orice adresă inexistentă duce la prima pagină, ca înainte.
export default function NotFound() {
  useEffect(() => {
    window.location.href = '/'
  }, [])

  return (
    <html lang="ro">
      <body />
    </html>
  )
}
