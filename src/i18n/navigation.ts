import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

/**
 * Link, useRouter și usePathname care păstrează limba curentă.
 * În română produc /pages/contact/, în germană /de/pages/contact/.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
