/*
 * Server Component — randare pe server, ca pagina să fie indexabilă de Google.
 */
import { setRequestLocale } from 'next-intl/server'
import CozlaPanoramicView from './CozlaPanoramicView'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  return <CozlaPanoramicView />
}
