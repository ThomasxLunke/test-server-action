"use client"

import React from 'react'
import { ModeToggle } from './theme-choser'
import { usePathname } from 'next/navigation'
import BreadCrumb from './breadcrumb'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="w-full flex  items-center p-4 border-b justify-between">
      <BreadCrumb />

      {
        pathname === "/form-action" && <h1 className='font-bold lg:inline-block'>Form action example</h1>
      }
      {
        pathname === "/form-hook-form" && <h1 className='font-bold lg:inline-block'>Form hook example</h1>
      }
      {
        pathname === "/cypress-example" && <h1 className='font-bold lg:inline-block'>Cypress example</h1>
      }
      {
        pathname === "/cypress-example/child" && <h1 className='font-bold lg:inline-block'>Cypress example child</h1>
      }
      {
        pathname === "/suspense" && <h1 className='font-bold lg:inline-block'>Suspense</h1>
      }
      {
        pathname === "/suspense/child" && <h1 className='font-bold lg:inline-block'>Suspense first child</h1>
      }
      {
        pathname === "/suspense/child/child-second" && <h1 className='font-bold lg:inline-block'>Suspense second child</h1>
      }

      <div className='flex items-center gap-4'>
        <ModeToggle />
      </div>

    </div>
  )
}
