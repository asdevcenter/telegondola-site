'use client'

import React from 'react'
import Link from 'next/link'
import Navigation from '@/src/components/Navigation'
import Footer from '@/src/components/layout/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Termeni și condiții de utilizare
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Operator</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>PERLA INVEST SRL</strong></p>
              <p>CUI: 19101430</p>
              <p>Sediu: Piața Gării nr. 7, Piatra Neamț, cod poștal 610005, România</p>
              <p>E-mail: <a href="mailto:office@perlainvest.ro" className="text-[#B7D662] hover:underline">office@perlainvest.ro</a></p>
              <p>Website: <a href="/" className="text-[#B7D662] hover:underline">www.telegondolapiatraneamt.ro</a></p>
            </div>
          </div>

          {/* Terms Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Scopul documentului</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Acești Termeni și Condiții stabilesc regulile de utilizare a site-ului www.telegondolapiatraneamt.ro 
                („site-ul"), administrat de PERLA INVEST SRL, operatorul Telegondolei Piatra-Neamț. Prin accesarea sau 
                utilizarea site-ului, vizitatorul confirmă că a citit, înțeles și acceptat integral conținutul acestor termeni.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dacă nu ești de acord cu termenii prezentați, te rugăm să nu folosești site-ul.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definiții</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                În sensul acestor termeni:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Operator</strong> – PERLA INVEST SRL, entitatea care deține și administrează site-ul.
                </li>
                <li>
                  <strong>Utilizator</strong> – orice persoană care accesează sau folosește site-ul, indiferent de scop.
                </li>
                <li>
                  <strong>Conținut</strong> – orice informație publicată pe site, inclusiv texte, imagini, clipuri video, 
                  materiale promoționale, hărți, elemente grafice și baze de date.
                </li>
                <li>
                  <strong>Platformă de ticketing</strong> – serviciul terț prin intermediul căruia se pot achiziționa 
                  online bilete pentru Telegondola Piatra-Neamț.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Scopul site-ului</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Site-ul www.telegondolapiatraneamt.ro are scop informativ și de promovare turistică.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                El oferă vizitatorilor informații despre Telegondola Piatra-Neamț, program, tarife, atracții turistice, 
                evenimente și modalități de achiziționare a biletelor.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Site-ul nu procesează direct tranzacții comerciale. Achiziția biletelor se realizează exclusiv printr-o 
                platformă externă de ticketing, către care utilizatorul este redirecționat. Datele introduse acolo sunt 
                gestionate direct de acel furnizor, conform propriei politici de confidențialitate.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Drepturile de proprietate intelectuală</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Întreg conținutul site-ului, inclusiv elementele de design, textele, imaginile, logo-urile, grafica, 
                clipurile video, descrierile turistice, precum și structura generală a platformei, sunt proprietatea 
                PERLA INVEST SRL sau sunt utilizate în baza unor licențe legale.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Este interzisă reproducerea, distribuirea, modificarea, publicarea sau utilizarea conținutului în scop 
                comercial fără acordul prealabil scris al PERLA INVEST SRL.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Permisiunea de utilizare este acordată doar pentru scopuri personale și non-comerciale, în conformitate 
                cu legislația privind drepturile de autor (Legea nr. 8/1996).
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitarea răspunderii</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PERLA INVEST SRL depune toate eforturile pentru ca informațiile publicate pe site să fie corecte și actuale. 
                Totuși:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li>
                  nu garantează că toate informațiile sunt în permanență actualizate, fără erori sau complete;
                </li>
                <li>
                  nu poate fi făcută responsabilă pentru eventuale pierderi, daune sau neplăceri rezultate din utilizarea 
                  informațiilor de pe site;
                </li>
                <li>
                  nu răspunde pentru funcționarea defectuoasă a site-ului, erori de conexiune, incompatibilități tehnice 
                  sau viruși informatici care pot apărea independent de voința sa.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Conținutul are caracter informativ. Pentru informații oficiale privind programul, tarifele sau condițiile 
                de operare, te rugăm să consulți secțiunile dedicate sau să contactezi direct operatorul la office@perlainvest.ro.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Linkuri externe și conținut terț</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Site-ul poate conține linkuri către alte site-uri, inclusiv platforma de bilete și hărți Google Maps.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aceste site-uri externe sunt administrate de terți, iar PERLA INVEST SRL nu controlează conținutul, 
                politica de confidențialitate sau măsurile de securitate ale acestora.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Prin accesarea unui link extern, utilizatorul părăsește domeniul telegondolapiatraneamt.ro și este supus 
                termenilor și condițiilor furnizorului respectiv.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Achiziția biletelor online</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cumpărarea biletelor pentru Telegondola Piatra-Neamț se realizează printr-un partener extern de ticketing, 
                integrat printr-un link de redirecționare.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                În momentul în care selectezi un bilet, vei fi direcționat către platforma partenerului, unde procesul de 
                achiziție se desfășoară integral.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Datele personale introduse în acel formular sunt colectate și prelucrate de operatorul independent al 
                platformei de bilete, conform politicii proprii.
              </p>
              <p className="text-gray-700 leading-relaxed">
                PERLA INVEST SRL nu colectează, nu accesează și nu stochează datele de plată, datele de identificare sau 
                alte informații transmise în cadrul procesului de achiziție.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Utilizarea corectă a site-ului</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizatorii se angajează:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li>
                  să folosească site-ul doar în scopuri legale și rezonabile;
                </li>
                <li>
                  să nu încerce accesarea neautorizată a serverelor, secțiunilor restricționate sau bazelor de date;
                </li>
                <li>
                  să nu introducă conținut malițios (cod, scripturi, programe) care pot afecta funcționarea site-ului;
                </li>
                <li>
                  să nu utilizeze materialele din site în scopuri comerciale sau pentru promovarea altor servicii fără 
                  acordul scris al PERLA INVEST SRL.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Încălcarea acestor reguli poate atrage răspunderea civilă sau penală, conform legislației în vigoare.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Protecția datelor personale</h2>
              <p className="text-gray-700 leading-relaxed">
                Datele personale colectate prin intermediul site-ului sunt prelucrate în conformitate cu Regulamentul (UE) 
                2016/679 (GDPR) și cu Politica de confidențialitate disponibilă{' '}
                <Link href="/pages/privacy-policy" className="text-[#B7D662] hover:underline font-semibold">
                  aici
                </Link>.
                {' '}Utilizarea site-ului implică acceptarea termenilor acelei politici.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Politica de cookie-uri</h2>
              <p className="text-gray-700 leading-relaxed">
                Site-ul utilizează fișiere cookie pentru funcționarea optimă și analiza traficului, conform{' '}
                <Link href="/pages/cookie-policy" className="text-[#B7D662] hover:underline font-semibold">
                  Politicii de cookie-uri
                </Link>.
                {' '}Prin continuarea navigării, utilizatorul își exprimă consimțământul privind utilizarea cookie-urilor 
                conform preferințelor selectate în bannerul dedicat.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modificarea termenilor</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PERLA INVEST SRL își rezervă dreptul de a modifica sau actualiza în orice moment conținutul acestor termeni, 
                fără notificare prealabilă.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Versiunea actualizată va fi publicată pe site și va produce efecte de la data afișării.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Este responsabilitatea utilizatorului să verifice periodic conținutul paginii pentru a fi la curent cu 
                eventualele modificări.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Răspundere juridică</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Orice tentativă de fraudă, acces neautorizat, copiere nepermisă a conținutului sau acțiune care afectează 
                securitatea și funcționarea site-ului va fi tratată în conformitate cu legislația română și europeană în vigoare.
              </p>
              <p className="text-gray-700 leading-relaxed">
                În caz de litigiu, acesta va fi soluționat de instanțele competente din România, având sediul operatorului 
                drept jurisdicție principală.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Legislația aplicabilă</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Acești termeni și condiții sunt guvernați de legislația română, în special de:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Codul civil român;</li>
                <li>Legea nr. 365/2002 privind comerțul electronic;</li>
                <li>Legea nr. 506/2004 privind prelucrarea datelor în sectorul comunicațiilor electronice;</li>
                <li>Regulamentul (UE) 2016/679 (GDPR) privind protecția datelor cu caracter personal.</li>
              </ul>
            </div>

            {/* Section 14 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pentru orice întrebări sau sesizări legate de conținutul site-ului, te rugăm să ne contactezi la:
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