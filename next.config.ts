import type { NextConfig } from 'next'
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

export default function config(phase: string): NextConfig {
  const nextConfig: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,

    // SECURITATE - Nu expune source maps în producție
    productionBrowserSourceMaps: false,

    eslint: {
      ignoreDuringBuilds: true,
    },

    typescript: {
      ignoreBuildErrors: true,
    },

    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },

    trailingSlash: true,

    compress: true,

    compiler: {
      removeConsole:
        process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
    },
  }

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // La „npm run dev": adresele fără prefix de limbă se servesc din română,
    // exact cum face build-ul pentru găzduire (vezi scripts/romana-la-radacina.mjs).
    nextConfig.rewrites = async () => [
      { source: '/', destination: '/ro/' },
      {
        source: '/:cale((?!(?:ro|en|fr|de|es)(?:/|$)|_next/|.*\\.[A-Za-z0-9]+$).+)',
        destination: '/ro/:cale',
      },
    ]
  } else {
    // La build: site static, pentru găzduirea RoMarg.
    nextConfig.output = 'export'
  }

  return withNextIntl(nextConfig)
}
