'use client'

import React from 'react'
import { Link } from '@/src/i18n/navigation'
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
            Ultima actualizare: 18 septembrie 2026
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
              <p>Telefon: <a href="tel:+40724538928" className="text-[#B7D662] hover:underline">+40 724 538 928</a></p>
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
                datele tale cu caracter personal atunci când vizitezi site-ul www.telegondolapiatraneamt.ro („site-ul"),
                când cumperi bilete prin magazinul online bilete.telegondolapiatraneamt.ro și când interacționezi cu
                serviciile noastre.
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
                Site-ul și magazinul online sunt administrate de PERLA INVEST SRL, societate care operează Telegondola
                Piatra-Neamț.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                PERLA INVEST SRL este operatorul de date pentru toate activitățile care implică prelucrarea datelor
                prin site și prin magazinul online: funcționarea platformei, răspunsul la cereri de contact, preluarea
                și executarea comenzilor de bilete, emiterea documentelor fiscale și administrarea conținutului digital.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Plata cu cardul este procesată de Netopia Payments (mobilPay), procesator de plăți autorizat, care
                acționează ca operator independent pentru datele tranzacției. Datele cardului se introduc exclusiv pe
                pagina securizată a procesatorului și nu ne sunt transmise.
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
                      <Link href="/pages/cookies" className="text-[#B7D662] hover:underline font-semibold">
                        Politicii de cookie-uri
                      </Link>.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">b) Date furnizate voluntar</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>nume, prenume și adresa de e-mail, dacă ne contactezi prin e-mail sau telefonic;</li>
                    <li>orice alte informații comunicate voluntar prin corespondență electronică.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">c) Date colectate la cumpărarea biletelor online</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Când plasezi o comandă în magazinul online, colectăm datele necesare pentru emiterea biletului și
                    a documentului fiscal:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-3">
                    <li>nume și prenume;</li>
                    <li>adresa de e-mail, pe care îți transmitem biletul și confirmarea comenzii;</li>
                    <li>numărul de telefon, dacă îl completezi;</li>
                    <li>datele de facturare, dacă soliciți factură pe persoană juridică;</li>
                    <li>detaliile comenzii: tipul și numărul biletelor, suma achitată, data și ora comenzii, codul unic al biletului și starea acestuia (folosit sau nu).</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    Datele cardului bancar nu ajung la noi. Ele se introduc pe pagina securizată a procesatorului de
                    plăți, care ne comunică doar rezultatul tranzacției.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Scopurile prelucrării datelor</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Datele tale sunt prelucrate pentru următoarele scopuri:
              </p>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Asigurarea funcționării și securității site-ului;</li>
                <li>Preluarea și executarea comenzilor de bilete, emiterea și transmiterea biletului, validarea acestuia la stație;</li>
                <li>Emiterea documentelor fiscale și îndeplinirea obligațiilor contabile;</li>
                <li>Gestionarea cererilor, reclamațiilor și a eventualelor rambursări;</li>
                <li>Prevenirea fraudei și a utilizării abuzive a biletelor;</li>
                <li>Analiza utilizării site-ului și îmbunătățirea experienței utilizatorilor;</li>
                <li>Promovarea serviciilor Telegondolei Piatra-Neamț, doar dacă ți-ai dat consimțământul pentru acest lucru.</li>
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
                  <strong>Executarea unui contract</strong> (art. 6 alin. 1 lit. b GDPR) — pentru comenzile de bilete,
                  emiterea și transmiterea biletului, precum și pentru răspunsul la cererile tale;
                </li>
                <li>
                  <strong>Îndeplinirea unei obligații legale</strong> (art. 6 alin. 1 lit. c GDPR) — pentru facturare,
                  evidență contabilă și arhivare;
                </li>
                <li>
                  <strong>Interesul legitim al operatorului</strong> (art. 6 alin. 1 lit. f GDPR) — pentru administrarea
                  site-ului, securitatea platformei și prevenirea fraudei;
                </li>
                <li>
                  <strong>Consimțământul tău</strong> (art. 6 alin. 1 lit. a GDPR) — pentru cookie-uri opționale,
                  analize statistice sau comunicări promoționale.
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
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Comenzile și documentele fiscale</strong> — 10 ani, termenul impus de Legea contabilității
                  nr. 82/1991 pentru documentele financiar-contabile;
                </li>
                <li>
                  <strong>Datele biletului</strong> (cod, stare, valabilitate) — până la expirarea valabilității, apoi
                  în cadrul evidenței comenzii;
                </li>
                <li>
                  <strong>Corespondența pe e-mail</strong> — maximum 12 luni, dacă nu privește o comandă sau o reclamație;
                </li>
                <li>
                  <strong>Datele din cookie-uri</strong> — între durata sesiunii și maximum 12 luni;
                </li>
                <li>
                  <strong>Consimțământul privind cookie-urile</strong> — reînnoit cel târziu după 12 luni.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                După expirarea acestor termene, datele sunt șterse sau anonimizate.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Destinatarii datelor și partenerii</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Datele pot fi accesate, în limite stricte, de următoarele categorii de destinatari:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>angajați autorizați ai PERLA INVEST SRL, implicați în administrarea site-ului și în gestionarea comenzilor;</li>
                <li>procesatorul de plăți Netopia Payments (mobilPay), pentru efectuarea plății cu cardul;</li>
                <li>furnizorul serviciului de e-mail prin care îți transmitem biletul și confirmarea comenzii (în calitate de împuternicit);</li>
                <li>furnizorii de găzduire și servicii IT care asigură întreținerea și securitatea platformei (în calitate de împuterniciți);</li>
                <li>contabilul sau firma de contabilitate, pentru documentele fiscale;</li>
                <li>autorități publice, dacă acest lucru este impus prin lege.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Nu vindem și nu transmitem datele tale către terți în scopuri de marketing. Lista actualizată a
                partenerilor poate fi solicitată oricând prin e-mail la office@perlainvest.ro.
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
                recomandăm să nu transmiți prin e-mail informații sensibile sau date de plată. Nu îți vom cere niciodată
                datele cardului prin e-mail sau telefonic.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Decizii automate și profilare</h2>
              <p className="text-gray-700 leading-relaxed">
                Nu luăm decizii automate cu efecte juridice asupra ta și nu realizăm profilare pe baza datelor tale
                personale.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Drepturile persoanei vizate</h2>
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
                Pentru exercitarea acestor drepturi, ne poți contacta la office@perlainvest.ro. Răspundem în cel mult
                o lună de la primirea cererii.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Reține că dreptul la ștergere nu se aplică datelor pe care suntem obligați prin lege să le păstrăm,
                cum sunt facturile și documentele contabile.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dacă consideri că drepturile tale au fost încălcate, poți depune o plângere la Autoritatea Națională
                de Supraveghere a Prelucrării Datelor cu Caracter Personal, disponibilă la{' '}
                <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-[#B7D662] hover:underline">
                  www.dataprotection.ro
                </a>.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Linkuri către site-uri terțe</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Site-ul conține linkuri către site-uri externe (hărți Google Maps, rețele sociale) și redirecționează
                către pagina procesatorului de plăți în momentul plății cu cardul.
              </p>
              <p className="text-gray-700 leading-relaxed">
                PERLA INVEST SRL nu este responsabilă pentru conținutul, politica de confidențialitate sau practicile
                acestor site-uri. Te încurajăm să citești politicile de confidențialitate ale fiecărui furnizor înainte
                de a furniza date personale.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Actualizări ale politicii</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Această politică poate fi actualizată periodic pentru a reflecta modificări legislative, tehnologice
                sau operaționale.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Orice modificare va fi publicată pe această pagină, împreună cu data ultimei actualizări. Continuarea
                utilizării site-ului după modificări semnifică acceptarea noilor termeni.
              </p>
            </div>

            {/* Section 14 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact</h2>
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
                <p className="text-gray-700">
                  Telefon: <a href="tel:+40724538928" className="text-[#B7D662] hover:underline font-semibold">
                    +40 724 538 928
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