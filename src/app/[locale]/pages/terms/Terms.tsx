'use client'

import React from 'react'
import { Link } from '@/src/i18n/navigation'
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
            Ultima actualizare: 18 septembrie 2026
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
              <p>Telefon: <a href="tel:+40724538928" className="text-[#B7D662] hover:underline">+40 724 538 928</a></p>
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
                („site-ul") și de achiziționare a biletelor prin magazinul online bilete.telegondolapiatraneamt.ro,
                ambele administrate de PERLA INVEST SRL, operatorul Telegondolei Piatra-Neamț. Prin accesarea sau
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
                  <strong>Operator</strong> – PERLA INVEST SRL, entitatea care deține și administrează site-ul și
                  magazinul online, și care prestează serviciul de transport cu telegondola.
                </li>
                <li>
                  <strong>Utilizator</strong> – orice persoană care accesează sau folosește site-ul, indiferent de scop.
                </li>
                <li>
                  <strong>Cumpărător</strong> – persoana care plasează o comandă de bilete prin magazinul online.
                </li>
                <li>
                  <strong>Conținut</strong> – orice informație publicată pe site, inclusiv texte, imagini, clipuri video,
                  materiale promoționale, hărți, elemente grafice și baze de date.
                </li>
                <li>
                  <strong>Magazin online</strong> – secțiunea bilete.telegondolapiatraneamt.ro, administrată de Operator,
                  prin care se pot achiziționa bilete pentru Telegondola Piatra-Neamț.
                </li>
                <li>
                  <strong>Bilet</strong> – documentul electronic, identificat printr-un cod unic, care dă dreptul la
                  serviciul de transport achiziționat, în condițiile prevăzute mai jos.
                </li>
                <li>
                  <strong>Procesator de plăți</strong> – furnizorul autorizat prin care se efectuează plata cu cardul,
                  respectiv Netopia Payments (mobilPay).
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Scopul site-ului</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Site-ul www.telegondolapiatraneamt.ro oferă informații despre Telegondola Piatra-Neamț: program de
                funcționare, tarife, atracții turistice, evenimente și modalități de achiziționare a biletelor.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Biletele se pot cumpăra de la casieria stației de plecare sau online, prin magazinul
                bilete.telegondolapiatraneamt.ro, administrat tot de PERLA INVEST SRL. Vânzarea online se face direct
                de către Operator, nu printr-un intermediar.
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
                Prețurile și programul afișate pe site sunt cele valabile la momentul afișării. Prețul aplicabil unei
                comenzi este cel confirmat în momentul plății. Pentru informații oficiale privind programul, tarifele sau
                condițiile de operare, te rugăm să consulți secțiunile dedicate sau să contactezi direct operatorul la
                office@perlainvest.ro.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Linkuri externe și conținut terț</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Site-ul include elemente furnizate de terți, cum ar fi hărțile Google Maps, și redirecționează către
                pagina securizată a procesatorului de plăți în momentul plății cu cardul.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aceste servicii sunt administrate de terți, iar PERLA INVEST SRL nu controlează conținutul, politica de
                confidențialitate sau măsurile de securitate ale acestora.
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
                Biletele se achiziționează din magazinul online bilete.telegondolapiatraneamt.ro. Vânzătorul este
                PERLA INVEST SRL, cu datele de identificare de la începutul acestei pagini.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cumpărătorul selectează tipul și numărul de bilete, completează datele necesare emiterii biletului și
                a documentului fiscal, și confirmă comanda. Contractul se consideră încheiat în momentul în care plata
                este confirmată, iar Operatorul transmite confirmarea comenzii pe adresa de e-mail indicată.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prețul afișat este exprimat în lei și include TVA. Nu se percep costuri suplimentare de procesare.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Plata cu cardul se efectuează prin Netopia Payments (mobilPay), procesator de plăți autorizat. Datele
                cardului se introduc exclusiv pe pagina securizată a procesatorului și nu sunt colectate, accesate sau
                stocate de PERLA INVEST SRL.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Datele de identificare ale cumpărătorului — nume, adresă de e-mail și, după caz, datele de facturare —
                sunt colectate și prelucrate de PERLA INVEST SRL, în condițiile descrise în Politica de confidențialitate.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Livrarea, valabilitatea și utilizarea biletului</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Biletul este electronic și se transmite pe adresa de e-mail indicată la comandă, imediat după confirmarea
                plății. Nu se emite bilet pe suport fizic și nu există costuri de livrare.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Accesul la telegondolă se face prin prezentarea biletului la stație, pe telefon sau tipărit. Fiecare bilet
                are un cod unic și poate fi folosit o singură dată, în limita numărului de călătorii pentru care a fost emis.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Termenul de valabilitate este cel afișat la momentul achiziției, pentru fiecare tip de bilet în parte.
                După expirarea acestui termen, biletul nefolosit nu mai poate fi utilizat și nu se rambursează.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Biletele cu tarif redus — pentru copii, pentru locuitorii municipiului Piatra-Neamț și ai localităților
                limitrofe, sau pentru alte categorii — se eliberează pe baza documentelor justificative prezentate la
                stație. Dacă la control nu se poate dovedi încadrarea în categoria respectivă, se achită diferența până
                la tariful întreg.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Dreptul de retragere, anulări și rambursări</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Serviciul de transport cu telegondola este un serviciu de agrement prestat la o dată sau într-o perioadă
                determinată. Conform art. 16 lit. l) din Ordonanța de urgență a Guvernului nr. 34/2014, dreptul de
                retragere în termen de 14 zile <strong>nu se aplică</strong> acestui tip de servicii.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prin urmare, biletele achiziționate online nu pot fi returnate și nu se rambursează pentru simplul motiv
                că nu au fost folosite în perioada de valabilitate.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fac excepție următoarele situații, în care cumpărătorul are dreptul la rambursarea integrală a sumei
                achitate sau, la alegerea sa, la reprogramarea biletului:
              </p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li>
                  telegondola nu a funcționat pe toată durata de valabilitate a biletului, din motive care țin de
                  Operator — oprire tehnică, mentenanță, condiții meteo nefavorabile;
                </li>
                <li>
                  suma a fost încasată de două ori pentru aceeași comandă, sau comanda a fost plătită fără ca biletul
                  să fie emis;
                </li>
                <li>
                  biletul a fost emis greșit din vina Operatorului.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Cererea se transmite la office@perlainvest.ro, împreună cu numărul comenzii. Rambursarea se face prin
                aceeași metodă de plată folosită la achiziție, în termen de maximum 14 zile de la confirmarea cererii.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Reguli de acces și siguranță</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Accesul în stație și în gondolă se face cu respectarea indicațiilor personalului și a regulilor afișate
                la stații. Operatorul poate refuza accesul persoanelor aflate sub influența alcoolului sau a substanțelor
                interzise, precum și în situațiile în care este pusă în pericol siguranța călătoriei.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Operatorul poate suspenda temporar activitatea, fără notificare prealabilă, în caz de vânt puternic,
                furtună, avarie tehnică sau alte situații care afectează siguranța pasagerilor. În aceste situații se
                aplică prevederile secțiunii 9.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Utilizarea corectă a site-ului</h2>
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
                  să nu multiplice, revândă sau distribuie bilete în scop comercial fără acordul scris al Operatorului;
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

            {/* Section 12 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Protecția datelor personale</h2>
              <p className="text-gray-700 leading-relaxed">
                Datele personale colectate prin intermediul site-ului și al magazinului online sunt prelucrate în
                conformitate cu Regulamentul (UE) 2016/679 (GDPR) și cu Politica de confidențialitate disponibilă{' '}
                <Link href="/pages/confidentialitate" className="text-[#B7D662] hover:underline font-semibold">
                  aici
                </Link>.
                {' '}Utilizarea site-ului implică acceptarea termenilor acelei politici.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Politica de cookie-uri</h2>
              <p className="text-gray-700 leading-relaxed">
                Site-ul utilizează fișiere cookie pentru funcționarea optimă și analiza traficului, conform{' '}
                <Link href="/pages/cookies" className="text-[#B7D662] hover:underline font-semibold">
                  Politicii de cookie-uri
                </Link>.
                {' '}Prin continuarea navigării, utilizatorul își exprimă consimțământul privind utilizarea cookie-urilor
                conform preferințelor selectate în bannerul dedicat.
              </p>
            </div>

            {/* Section 14 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Modificarea termenilor</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PERLA INVEST SRL își rezervă dreptul de a modifica sau actualiza în orice moment conținutul acestor termeni.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Versiunea actualizată va fi publicată pe site, împreună cu data ultimei modificări, și va produce efecte
                de la data afișării. Comenzilor deja plasate li se aplică termenii în vigoare la momentul comenzii.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Este responsabilitatea utilizatorului să verifice periodic conținutul paginii pentru a fi la curent cu
                eventualele modificări.
              </p>
            </div>

            {/* Section 15 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Reclamații și soluționarea litigiilor</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Orice reclamație legată de o comandă sau de serviciul prestat se transmite la office@perlainvest.ro sau
                telefonic la +40 724 538 928. Răspundem în cel mult 30 de zile de la primire.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dacă nu ajungem la o înțelegere, consumatorul se poate adresa Autorității Naționale pentru Protecția
                Consumatorilor,{' '}
                <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer" className="text-[#B7D662] hover:underline font-semibold">
                  anpc.ro
                </a>
                , inclusiv prin procedura de soluționare alternativă a litigiilor (SAL).
              </p>
              <p className="text-gray-700 leading-relaxed">
                În caz de litigiu, acesta va fi soluționat de instanțele competente din România.
              </p>
            </div>

            {/* Section 16 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Răspundere juridică</h2>
              <p className="text-gray-700 leading-relaxed">
                Orice tentativă de fraudă, acces neautorizat, copiere nepermisă a conținutului, multiplicare sau
                falsificare de bilete, precum și orice acțiune care afectează securitatea și funcționarea site-ului,
                va fi tratată în conformitate cu legislația română și europeană în vigoare.
              </p>
            </div>

            {/* Section 17 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Legislația aplicabilă</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Acești termeni și condiții sunt guvernați de legislația română, în special de:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>Codul civil român;</li>
                <li>Legea nr. 365/2002 privind comerțul electronic;</li>
                <li>Ordonanța de urgență a Guvernului nr. 34/2014 privind drepturile consumatorilor în cadrul contractelor încheiate cu profesioniștii;</li>
                <li>Ordonanța Guvernului nr. 21/1992 privind protecția consumatorilor;</li>
                <li>Legea nr. 506/2004 privind prelucrarea datelor în sectorul comunicațiilor electronice;</li>
                <li>Regulamentul (UE) 2016/679 (GDPR) privind protecția datelor cu caracter personal.</li>
              </ul>
            </div>

            {/* Section 18 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pentru orice întrebări sau sesizări legate de conținutul site-ului sau de o comandă, te rugăm să ne
                contactezi la:
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