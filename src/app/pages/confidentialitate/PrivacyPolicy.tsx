'use client'

import React from 'react'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Politica de confidențialitate
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

          {/* Privacy Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducere</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Această Politică de confidențialitate explică modul în care colectăm, utilizăm, stocăm și protejăm 
                datele tale cu caracter personal atunci când vizitezi site-ul www.telegondolapiatraneamt.ro („site-ul") 
                și când interacționezi cu serviciile noastre online.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ne angajăm să prelucrăm datele tale în mod legal, echitabil și transparent, în conformitate cu 
                Regulamentul (UE) 2016/679 (GDPR) și cu legislația națională privind protecția datelor.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cine suntem</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Site-ul www.telegondolapiatraneamt.ro este administrat de PERLA INVEST SRL, societate care operează 
                Telegondola Piatra-Neamț.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                PERLA INVEST SRL este operatorul de date pentru toate activitățile care implică prelucrarea datelor 
                în cadrul site-ului – cum ar fi funcționarea platformei, răspunsul la cereri de contact, publicarea 
                informațiilor și administrarea conținutului digital.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Pentru activitățile de vânzare online a biletelor, datele personale sunt colectate și prelucrate de 
                un furnizor terț, care acționează ca operator independent. Această entitate este responsabilă pentru 
                procesarea datelor introduse în formularul de achiziție a biletelor, plata online și emiterea biletului.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Categorii de date colectate</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                În funcție de modul în care utilizezi site-ul, putem colecta următoarele categorii de date:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">a) Date colectate automat</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>adresa IP, tipul de browser, sistemul de operare, rezoluția ecranului, limba browserului;</li>
                    <li>informații privind interacțiunea cu paginile (ex. durata vizitei, linkuri accesate);</li>
                    <li>date colectate prin cookie-uri și tehnologii similare, conform{' '}
                      <Link href="/pages/cookie-policy" className="text-[#B7D662] hover:underline font-semibold">
                        Politicii de cookie-uri
                      </Link>.
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">b) Date furnizate voluntar</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>nume, prenume și adresa de e-mail, dacă ne contactezi prin formularul de contact;</li>
                    <li>orice alte informații comunicate voluntar prin corespondență electronică.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">c) Date colectate de terți (pentru bilete online)</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Când alegi să achiziționezi bilete online, vei fi redirecționat către platforma partenerului nostru 
                    de ticketing. Pe acel site, partenerul colectează direct datele tale de identificare, contact și 
                    plată (nume, e-mail, număr de telefon, date card etc.), conform propriei politici de confidențialitate.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    PERLA INVEST SRL nu colectează, nu accesează și nu stochează aceste date.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Scopurile prelucrării datelor</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Datele tale sunt prelucrate pentru următoarele scopuri legitime:
              </p>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Asigurarea funcționării și securității site-ului;</li>
                <li>Gestionarea cererilor și comunicărilor trimise prin formularul de contact;</li>
                <li>Analiza utilizării site-ului și îmbunătățirea experienței utilizatorilor;</li>
                <li>Respectarea obligațiilor legale (de exemplu, cerințe contabile, arhivare, securitate IT);</li>
                <li>Promovarea serviciilor Telegondolei Piatra-Neamț și activităților PERLA INVEST SRL (în limita 
                consimțământului tău, dacă este cazul).</li>
              </ol>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Temeiul legal al prelucrării</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prelucrăm datele tale în baza următoarelor temeiuri:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Executarea unui contract sau a cererii tale</strong> (art. 6 alin. 1 lit. b GDPR), de exemplu 
                  atunci când ne soliciți informații;
                </li>
                <li>
                  <strong>Îndeplinirea unei obligații legale</strong> (art. 6 alin. 1 lit. c GDPR), cum ar fi obligațiile 
                  contabile sau fiscale;
                </li>
                <li>
                  <strong>Interesul legitim al operatorului</strong> (art. 6 alin. 1 lit. f GDPR) pentru administrarea 
                  site-ului și prevenirea fraudei;
                </li>
                <li>
                  <strong>Consimțământul tău</strong> (art. 6 alin. 1 lit. a GDPR) pentru cookie-uri opționale, analize 
                  statistice sau comunicări promoționale.
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Durata de stocare</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Datele tale sunt păstrate doar atât timp cât este necesar pentru îndeplinirea scopurilor pentru care 
                au fost colectate sau cât impun reglementările legale aplicabile.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">În general:</p>
              <ul className="space-y-2 text-gray-700">
                <li>datele din formularele de contact sunt păstrate maximum 12 luni;</li>
                <li>datele din cookie-uri sunt stocate între durata sesiunii și maximum 12 luni;</li>
                <li>consimțământul privind cookie-urile este reînnoit cel târziu după 12 luni.</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Destinatarii datelor și partenerii</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Datele pot fi accesate, în limite stricte, de următoarele categorii de destinatari:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>angajați autorizați ai PERLA INVEST SRL, implicați în administrarea site-ului;</li>
                <li>furnizori de servicii IT care asigură întreținerea și securitatea platformei (în calitate de împuterniciți);</li>
                <li>partenerul de ticketing online (operator independent), către care ești redirecționat pentru achiziția biletelor;</li>
                <li>autorități publice, dacă acest lucru este impus prin lege.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Lista actualizată a partenerilor poate fi solicitată oricând prin e-mail la office@perlainvest.ro.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Transferuri internaționale</h2>
              <p className="text-gray-700 leading-relaxed">
                Site-ul utilizează servicii terțe (ex. Google Maps, servicii de analiză), care pot implica transferuri 
                de date în afara Spațiului Economic European. Aceste transferuri sunt protejate prin clauze contractuale 
                standard aprobate de Comisia Europeană sau alte mecanisme conforme cu GDPR.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Securitatea datelor</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Adoptăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor personale împotriva pierderii, 
                accesului neautorizat, distrugerii sau modificării. Acestea includ criptarea conexiunii (HTTPS), limitarea 
                accesului doar la persoane autorizate și monitorizarea permanentă a serverelor.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Totuși, trebuie reținut că nicio transmisie de date prin internet nu este complet sigură. De aceea, 
                recomandăm să nu transmiți prin e-mail informații sensibile sau date de plată.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Drepturile persoanei vizate</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conform GDPR, ai următoarele drepturi privind datele tale personale:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>dreptul de acces la datele deținute despre tine;</li>
                <li>dreptul la rectificarea datelor inexacte;</li>
                <li>dreptul la ștergerea datelor („dreptul de a fi uitat");</li>
                <li>dreptul la restricționarea prelucrării;</li>
                <li>dreptul la portabilitatea datelor;</li>
                <li>dreptul de opoziție la prelucrare;</li>
                <li>dreptul de a retrage consimțământul, fără a afecta legalitatea prelucrării efectuate anterior.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                Pentru exercitarea acestor drepturi, ne poți contacta la office@perlainvest.ro.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dacă consideri că drepturile tale au fost încălcate, poți depune o plângere la Autoritatea Națională 
                de Supraveghere a Prelucrării Datelor cu Caracter Personal, disponibilă la{' '}
                <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-[#B7D662] hover:underline">
                  www.dataprotection.ro
                </a>.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Linkuri către site-uri terțe</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Site-ul poate conține linkuri către site-uri externe (ex. platforma de bilete, hărți Google Maps, 
                rețele sociale).
              </p>
              <p className="text-gray-700 leading-relaxed">
                PERLA INVEST SRL nu este responsabilă pentru conținutul, politica de confidențialitate sau practicile 
                acestor site-uri. Te încurajăm să citești politicile de confidențialitate ale fiecărui furnizor înainte 
                de a furniza date personale.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Actualizări ale politicii</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Această politică poate fi actualizată periodic pentru a reflecta modificări legislative, tehnologice 
                sau operaționale.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Orice modificare va fi publicată pe această pagină, împreună cu data ultimei actualizări. Continuarea 
                utilizării site-ului după modificări semnifică acceptarea noilor termeni.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pentru întrebări sau solicitări legate de protecția datelor, te rugăm să ne contactezi la:
              </p>
              <div className="bg-gradient-to-br from-[#B7D662]/10 to-[#95b540]/10 rounded-xl p-6">
                <p className="text-gray-900 font-bold mb-2">PERLA INVEST SRL</p>
                <p className="text-gray-700">Sediu: Piața Gării nr. 7, Piatra Neamț, cod poștal 610005, România</p>
                <p className="text-gray-700">
                  E-mail: <a href="mailto:office@perlainvest.ro" className="text-[#B7D662] hover:underline font-semibold">
                    office@perlainvest.ro
                  </a>
                </p>
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