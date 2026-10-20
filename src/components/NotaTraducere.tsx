'use client'

import { useLocale, useTranslations } from 'next-intl'

// Pe paginile juridice traduse: versiunea în română este cea care se aplică.
export default function NotaTraducere() {
  const limba = useLocale()
  const t = useTranslations('juridic')
  if (limba === 'ro') return null
  return (
    <div className="container mx-auto px-4 max-w-4xl pt-10">
      <p className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
        {t('nota')}
      </p>
    </div>
  )
}
