import { setRequestLocale } from 'next-intl/server'
import CookiePolicy from './CookiePolicy'

// Pagina se generează la build, cu tot conținutul în HTML,
// ca să fie citită de Google și să apară imediat, fără ecran de încărcare.
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  return <CookiePolicy />
}
