// După „next build", paginile în română sunt în out/ro/.
// Le mutăm în rădăcina out/, ca adresele să rămână ca azi:
//   out/ro/pages/contact/index.html  ->  out/pages/contact/index.html
// Celelalte limbi rămân în out/en/, out/de/ etc.
import { cpSync, existsSync, rmSync } from 'node:fs'

const sursa = 'out/ro'

if (!existsSync(sursa)) {
  console.error('Nu există out/ro. Rulați întâi „next build".')
  process.exit(1)
}

cpSync(sursa, 'out', { recursive: true, force: true })
rmSync(sursa, { recursive: true, force: true })
console.log('Româna e acum la rădăcina site-ului.')
