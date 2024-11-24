'use client';

import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from './ui/breadcrumb';
import Link from 'next/link';

export default function BreadCrumb() {
  const segments = useSelectedLayoutSegments();
  const pathname = usePathname()

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={"/"}>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathname !== "/" && <BreadcrumbSeparator />}
        {segments.map((url, index) => {
          const path = segments.slice(0, index + 1).join('/');

          return (
            <div className='flex items-center justify-center gap-1.5' key={url}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link className='capitalize' href={`/${path}`}>{url}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < segments.length - 1 && <BreadcrumbSeparator />}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
