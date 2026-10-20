import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import '../globals.css'
import CookieConsent from '@/src/components/CookieConsent'
import { defaultMetadata, organizationSchema } from '@/src/lib/metadata'
import { LIMBI_PUBLICATE, routing } from '@/src/i18n/routing'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = defaultMetadata

// Se generează doar limbile gata traduse; orice altceva dă 404.
export function generateStaticParams() {
  return LIMBI_PUBLICATE.map((locale) => ({ locale }))
}
export const dynamicParams = false

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)

  return (
    <html lang={locale}>
      <head>
        {/* Manifest pentru PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon și icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" href="/icon-192.png" />

        {/* Theme color pentru mobile browsers */}
        <meta name="theme-color" content="#B7D662" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Schema.org JSON-LD pentru Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider>
          {children}
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
