'use client'

import dynamic from 'next/dynamic'

// Fiecare atracție are fișierul ei de cod: browserul îl descarcă doar pe al
// paginii deschise. Conținutul e oricum generat la build, cu tot textul în HTML.
const ATRACTII: Record<string, React.ComponentType> = {
  'curtea-domneasca': dynamic(() => import('../components/CurteaDomneasca')),
  'biserica-nasterea-sf-ioan-botezatorul': dynamic(() => import('../components/BisericaSfIoan')),
  'sinagoga-baal-shem-tov': dynamic(() => import('../components/SinagogaBaalSemTov')),
  'casa-calistrat-hogas': dynamic(() => import('../components/MuzeulCalistratHogas')),
  'muzeul-istorie-arheologie': dynamic(() => import('../components/MuzeulIstorieArheologie')),
  'muzeul-cucuteni': dynamic(() => import('../components/MuzeulCucuteni')),
  'muzeul-arta': dynamic(() => import('../components/MuzeulDeArta')),
  'muzeul-etnografie': dynamic(() => import('../components/MuzeulDeEtnografie')),
  'teatrul-tineretului': dynamic(() => import('../components/TeatrulTineretului')),
  'telegondola': dynamic(() => import('../components/Telegondola')),
  'muntele-cozla': dynamic(() => import('../components/DealulCozla')),
  'muntele-pietricica': dynamic(() => import('../components/MuntelePietricica')),
  'muzeul-stiinte-naturale': dynamic(() => import('../components/MuzeulStiinte')),
  'lacul-batca-doamnei': dynamic(() => import('../components/LaculBatcaDoamnei')),
  'parcul-central': dynamic(() => import('../components/ParculCentral')),
  'gradina-nicu-albu': dynamic(() => import('../components/GradinNicuAlbu')),
  'strandul-tineretului': dynamic(() => import('../components/StrandulTineretului')),
  'stadionul-ceahlaul': dynamic(() => import('../components/StadionulCeahlau')),
  'manastirea-bistrita': dynamic(() => import('../components/ManastireaBistrita')),
  'manastirea-pangarati': dynamic(() => import('../components/ManastireaPangarati')),
  'manastirea-neamt': dynamic(() => import('../components/ManastireaNeamt')),
  'manastirea-agapia': dynamic(() => import('../components/ManastireaAgapia')),
  'manastirea-varatec': dynamic(() => import('../components/ManastireaVaratec')),
  'manastirea-secu': dynamic(() => import('../components/ManastireaSecu')),
  'manastirea-sihastria': dynamic(() => import('../components/ManastireaSihastria')),
  'manastirea-sihla': dynamic(() => import('../components/ManastireaSihla')),
  'cheile-bicazului': dynamic(() => import('../components/CheileBicazului')),
  'lacul-rosu': dynamic(() => import('../components/LaculRosu')),
  'masivul-ceahlau': dynamic(() => import('../components/MasivulCeahlau')),
  'lacul-izvorul-muntelui': dynamic(() => import('../components/LaculIzvorulMuntelui')),
  'rezervatia-dragos-voda': dynamic(() => import('../components/RezervatiaZimbri')),
  'cetatea-neamt': dynamic(() => import('../components/CetateaNeamt')),
  'muzeul-ion-creanga': dynamic(() => import('../components/CasaIonCreanga')),
}

export default function Atractie({ slug }: { slug: string }) {
  const Componenta = ATRACTII[slug]
  return Componenta ? <Componenta /> : null
}
