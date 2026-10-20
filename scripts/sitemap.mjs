// Generează out/sitemap.xml după build, din paginile care există efectiv în out/.
// Fiecare pagină apare o dată pe limbă, cu legături către variantele ei (hreflang),
// așa că o limbă nou publicată intră automat în sitemap.
import { existsSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const SITE = 'https://telegondolapiatraneamt.ro'
const ALTE_LIMBI = ['en', 'fr', 'de', 'es'].filter((l) => existsSync(join('out', l)))
const SARITE = new Set(['_next', '404', ...ALTE_LIMBI])

// Căile paginilor în română (rădăcina out/), ex. '/', '/pages/contact/'
function pagini(dir, cale = '/') {
  const rez = []
  if (existsSync(join(dir, 'index.html'))) rez.push(cale)
  for (const nume of readdirSync(dir)) {
    if (cale === '/' && SARITE.has(nume)) continue
    const p = join(dir, nume)
    if (statSync(p).isDirectory()) rez.push(...pagini(p, `${cale}${nume}/`))
  }
  return rez
}

const adresa = (limba, cale) => `${SITE}${limba === 'ro' ? '' : `/${limba}`}${cale}`
const azi = new Date().toISOString().slice(0, 10)
const prioritate = (cale) =>
  cale === '/' ? '1.0' : /puncte-de-interes\/.+/.test(cale) ? '0.6' : /(terms|confidentialitate|cookies)/.test(cale) ? '0.3' : '0.8'

const intrari = []
for (const cale of pagini('out').sort()) {
  const limbi = ['ro', ...ALTE_LIMBI.filter((l) => existsSync(join('out', l, cale, 'index.html')))]
  const alt = limbi
    .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${adresa(l, cale)}"/>`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${adresa('ro', cale)}"/>`)
    .join('\n')
  for (const l of limbi) {
    intrari.push(
      `  <url>\n    <loc>${adresa(l, cale)}</loc>\n    <lastmod>${azi}</lastmod>\n    <priority>${prioritate(cale)}</priority>\n${limbi.length > 1 ? alt + '\n' : ''}  </url>`,
    )
  }
}

writeFileSync(
  'out/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${intrari.join('\n')}\n</urlset>\n`,
)
console.log(`sitemap.xml: ${intrari.length} adrese (${['ro', ...ALTE_LIMBI].join(', ')})`)
