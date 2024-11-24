"use client"

import React from 'react'
import { ModeToggle } from './theme-choser'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import Link from 'next/link'
import clsx from 'clsx'

export default function Navbar() {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <div className={clsx("w-full flex  items-center p-4 border-b", pathname === "/" ? 'justify-end' : 'justify-between')}>
      {
        pathname === "/form-action" && <h1 className='font-bold lg:inline-block'>Form action example</h1>
      }
      {
        pathname === "/form-hook-form" && <h1 className='font-bold lg:inline-block'>Form hook example</h1>
      }
      {
        pathname === "/cypress-example" && <h1 className='font-bold lg:inline-block'>Cypress example</h1>
      }
      <div className='flex items-center gap-4'>
        <ModeToggle />{
          pathname !== "/" && <Button><Link href={'/'}>Menu</Link></Button>
        }
      </div>

    </div>
  )
}
