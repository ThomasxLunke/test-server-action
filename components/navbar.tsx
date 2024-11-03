"use client"

import React from 'react'
import { ModeToggle } from './theme-choser'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="absolute top-0  w-full flex justify-between items-center p-4 border-b">
      {
        pathname === "/form-action" && <h1 className='font-bold lg:inline-block'>Form action example</h1>
      }
      {
        pathname === "/form-hook-form" && <h1 className='font-bold lg:inline-block'>Form hook example</h1>
      }
      <ModeToggle />
    </div>
  )
}
