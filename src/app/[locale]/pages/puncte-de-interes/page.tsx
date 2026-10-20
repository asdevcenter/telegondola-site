import { setRequestLocale } from 'next-intl/server'
import PointsOfInterest from './PointsOfInterest'
import { metadateDinMesaje } from '@/src/lib/seo'

// Pagina se generează la build, cu tot conținutul în HTML,
// ca să fie citită de Google și să apară imediat, fără ecran de încărcare.
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadateDinMesaje(params, 'puncte', '/pages/puncte-de-interes')
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  return <PointsOfInterest />
}
