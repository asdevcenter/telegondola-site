'use client'

import React from 'react'
import { Link } from '@/src/i18n/navigation'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Politica de utilizare a cookie-urilor
          </h1>
          <p className="text-xl text-white/80">
            Ultima actualizare: 25 octombrie 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Operator Info */}
          <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Operator de date</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>PERLA INVEST SRL</strong></p>
              <p>CUI: 19101430</p>
              <p>Sediu: Piața Gării nr. 7, Piatra Neamț, cod poștal 610005, România</p>
              <p>E-mail: <a href="mailto:office@perlainvest.ro" className="text-[#B7D662] hover:underline">office@perlainvest.ro</a></p>
              <p>Website: <a href="/" className="text-[#B7D662] hover:underline">www.telegondolapiatraneamt.ro</a></p>
            </div>
          </div>

          {/* Cookie Policy Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducere</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prezenta politică explică modul în care site-ul www.telegondolapiatraneamt.ro utilizează fișiere de tip 
                cookie și tehnologii similare. Scopul acestor instrumente este de a asigura funcționarea corectă a site-ului, 
                de a îmbunătăți performanța acestuia și de a oferi o experiență personalizată vizitatorilor.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Prin continuarea navigării pe acest site sau prin apăsarea butonului „Acceptă toate", îți exprimi acordul 
                pentru utilizarea cookie-urilor conform prezentei politici. Poți modifica oricând preferințele tale prin 
                funcția „Setări cookies" disponibilă în bannerul de consimțământ.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Ce sunt cookie-urile</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookie-urile sunt fișiere mici de text stocate pe dispozitivul tău (computer, tabletă, telefon) atunci 
                când vizitezi un site web. Ele permit recunoașterea dispozitivului tău la următoarele vizite și facilitează 
                anumite funcționalități esențiale, cum ar fi autentificarea, păstrarea preferințelor sau analiza traficului.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cookie-urile nu conțin informații care identifică direct o persoană, dar pot fi corelate cu alte date care 
                permit identificarea ta, caz în care acestea devin date cu caracter personal și sunt supuse regulilor GDPR.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Tipuri de cookie-uri utilizate pe site</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Site-ul www.telegondolapiatraneamt.ro utilizează următoarele categorii de cookie-uri:
              </p>
              
              <div className="space-y-8">
                {/* Cookie-uri strict necesare */}
                <div className="bg-gradient-to-br from-[#B7D662]/5 to-[#95b540]/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">a) Cookie-uri strict necesare</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Aceste cookie-uri sunt esențiale pentru funcționarea corectă a site-ului. Ele permit navigarea, 
                    accesul la zonele securizate și menținerea sesiunilor active. Fără aceste cookie-uri, site-ul nu 
                    poate funcționa în mod corespunzător.
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Exemple:</strong> stocarea preferințelor privind consimțământul, sesiunea utilizatorului, 
                    siguranța conexiunii.</p>
                    <p><strong>Durată:</strong> până la închiderea sesiunii sau până la 12 luni, în funcție de scop.</p>
                    <p><strong>Exemplu:</strong> cookieConsent, cookieConsentDate.</p>
                  </div>
                </div>

                {/* Cookie-uri de analiză */}
                <div className="bg-gradient-to-br from-[#B7D662]/5 to-[#95b540]/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">b) Cookie-uri de analiză (opționale)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Aceste cookie-uri ne ajută să înțelegem modul în care vizitatorii folosesc site-ul, pentru a îmbunătăți 
                    performanța și conținutul acestuia. Datele colectate sunt anonime și agregate.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Dacă le accepți, pot fi încărcate scripturi precum Google Analytics sau instrumente similare, fără a 
                    te identifica personal.
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Scop:</strong> analiză statistică, măsurarea traficului, optimizarea experienței utilizatorilor.</p>
                    <p><strong>Durată:</strong> între 1 zi și 24 luni, în funcție de serviciu.</p>
                  </div>
                </div>

                {/* Cookie-uri de marketing */}
                <div className="bg-gradient-to-br from-[#B7D662]/5 to-[#95b540]/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">c) Cookie-uri de marketing (opționale)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Aceste cookie-uri sunt folosite pentru a personaliza conținutul și pentru a afișa reclame relevante, 
                    inclusiv prin rețele terțe (de exemplu, Google Ads sau Facebook Ads). Pe site-ul nostru, ele sunt 
                    inactive în mod implicit și sunt activate doar dacă îți exprimi consimțământul.
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Scop:</strong> măsurarea performanței campaniilor publicitare, afișarea reclamelor relevante.</p>
                    <p><strong>Durată:</strong> variabilă, între 1 lună și 12 luni.</p>
                  </div>
                </div>

                {/* Cookie-uri terțe */}
                <div className="bg-gradient-to-br from-[#B7D662]/5 to-[#95b540]/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">d) Cookie-uri terțe (servicii externe)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Anumite pagini includ elemente terțe, cum ar fi hărțile integrate Google Maps. Aceste servicii pot 
                    utiliza cookie-uri proprii pentru funcționarea corectă și pentru analiza traficului.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Prin acceptarea acestor cookie-uri, accepți și politica de confidențialitate a furnizorului terț, cum ar fi:
                  </p>
                  <ul className="mt-2 text-gray-700">
                    <li>
                      Google Maps –{' '}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#B7D662] hover:underline">
                        Politica de confidențialitate Google
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cum poți gestiona cookie-urile</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La prima vizită, site-ul îți va afișa un banner de consimțământ pentru cookie-uri, care îți permite:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>să accepți toate cookie-urile;</li>
                <li>să refuzi cookie-urile opționale (păstrând doar cele necesare);</li>
                <li>să configurezi preferințele pentru fiecare categorie (analiză, marketing).</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                După exprimarea opțiunilor, acestea sunt stocate în local storage sub forma cookieConsent și pot fi 
                modificate oricând prin redeschiderea ferestrei „Setări cookies".
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Poți, de asemenea, să blochezi sau să ștergi cookie-urile direct din browserul tău, folosind setările 
                de confidențialitate disponibile.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Instrucțiuni detaliate pot fi consultate aici:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#B7D662] hover:underline">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/ro/kb/cookie-uri-informatii-stocate-site-uri-calculator" target="_blank" rel="noopener noreferrer" className="text-[#B7D662] hover:underline">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/ro-ro/microsoft-edge/ștergerea-cookie-urilor-în-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#B7D662] hover:underline">
                    Microsoft Edge
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#B7D662] hover:underline">
                    Safari
                  </a>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-semibold">
                Blocarea cookie-urilor necesare poate duce la funcționarea incorectă a site-ului.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Temeiul legal al prelucrării</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conform art. 6 alin. (1) lit. a) din Regulamentul (UE) 2016/679, prelucrarea datelor prin cookie-uri 
                opționale se bazează pe consimțământul utilizatorului.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Pentru cookie-urile strict necesare, temeiul legal este interesul legitim al operatorului, conform 
                art. 6 alin. (1) lit. f) din GDPR, întrucât acestea sunt esențiale pentru funcționarea site-ului.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Durata de stocare</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Preferințele privind consimțământul sunt păstrate pentru o perioadă de maximum 12 luni, după care 
                bannerul de consimțământ va fi afișat din nou.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Durata de viață a fiecărui cookie variază în funcție de scop, dar nu depășește perioada necesară 
                îndeplinirii acestuia.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Destinatarii datelor și transferurile internaționale</h2>
              <p className="text-gray-700 leading-relaxed">
                Datele colectate prin cookie-uri pot fi prelucrate de parteneri tehnici care asigură funcționarea 
                site-ului, analiza traficului sau furnizarea de servicii integrate (de exemplu, Google). În cazul 
                acestor parteneri, pot exista transferuri de date în afara Spațiului Economic European, protejate 
                prin mecanisme legale aprobate (Clauze Contractuale Standard).
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Drepturile tale</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                În calitate de persoană vizată, ai următoarele drepturi, conform GDPR:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>dreptul de acces la datele tale;</li>
                <li>dreptul la rectificare sau ștergere;</li>
                <li>dreptul la restricționarea prelucrării;</li>
                <li>dreptul de a te opune prelucrării;</li>
                <li>dreptul la portabilitatea datelor;</li>
                <li>dreptul de a retrage consimțământul, fără a afecta legalitatea prelucrării efectuate anterior retragerii.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pentru exercitarea acestor drepturi, ne poți contacta oricând la adresa office@perlainvest.ro.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dacă consideri că drepturile tale au fost încălcate, ai dreptul de a depune o plângere la Autoritatea 
                Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (
                <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-[#B7D662] hover:underline">
                  www.dataprotection.ro
                </a>
                ).
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Actualizări ale politicii</h2>
              <p className="text-gray-700 leading-relaxed">
                Această politică poate fi actualizată periodic pentru a reflecta modificări legislative, tehnice sau 
                operaționale. Versiunea actualizată va fi publicată pe această pagină, împreună cu data ultimei modificări. 
                Te încurajăm să verifici periodic conținutul acestei pagini.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pentru orice întrebări legate de politica de cookie-uri sau de protecția datelor, ne poți contacta la:
              </p>
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <p className="text-gray-900 font-bold mb-2">PERLA INVEST SRL</p>
                <p className="text-gray-700">Sediu: Piața Gării nr. 7, Piatra Neamț, cod poștal 610005</p>
                <p className="text-gray-700">
                  E-mail: <a href="mailto:office@perlainvest.ro" className="text-[#B7D662] hover:underline font-semibold">
                    office@perlainvest.ro
                  </a>
                </p>
                <p className="text-gray-700">Telefon: disponibil pe site în secțiunea Contact</p>
              </div>
            </div>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#B7D662] hover:bg-[#95b540] text-white font-bold py-4 px-8 rounded-full transition-all"
            >
              Înapoi la pagina principală
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}