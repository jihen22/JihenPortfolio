import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/layout/Container'
import { footerItems } from '@/config/siteConfig'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { name, email } from '@/config/infoConfig'
import SocialLinks from '@/components/home/SocialLinks'
import VisitData from '@/components/layout/VisitData'


function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-primary"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-muted pb-16 pt-10">
          <ContainerInner>
            {/* Top Section - Navigation and Copyright */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              {/* Left: Navigation Links */}
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium">
                {footerItems.map((item) => (
                  <NavLink key={item.name} href={item.href}>{item.name}</NavLink>
                ))}
              </div>

              {/* Right: Copyright Text */}
              <p className="text-sm text-muted-foreground whitespace-nowrap">
                &copy; {new Date().getFullYear()} {name}. All rights reserved.
              </p>
            </div>

            {/* Middle Section - Theme Toggle and Social Links */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              {/* Left: Theme Toggle */}
              <ThemeToggle />

              {/* Right: Social Links */}
              <SocialLinks className='mt-0'/>
            </div>

            {/* Bottom Section - Visit Counter and Respect Message */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pt-6 border-t border-muted/50">
              {/* Left: Visit Counter */}
              <VisitData />

              {/* Right: Respect Message */}
              <div className="text-sm text-muted-foreground space-y-2 lg:text-right">
                <p>You scrolled all the way down here. Respect! 🙌</p>
                <p>Made without coffee by Jihen • {email}</p>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
