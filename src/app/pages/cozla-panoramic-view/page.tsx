/*
 * Server Component — randare pe server, ca pagina să fie indexabilă de Google.
 * Spre deosebire de celelalte subpagini (care folosesc dynamic + ssr: false),
 * aici conținutul ajunge în HTML-ul livrat, ceea ce contează pentru o pagină
 * al cărei scop este să fie găsită pe „cazare Cozla Piatra Neamț".
 */
import CozlaPanoramicView from './CozlaPanoramicView'

export default function Page() {
  return <CozlaPanoramicView />
}
