import React, { Suspense } from 'react'
import SkeletonCard from './skeleton-card';
import BreedFirst from './breed-first';
import BreedSecond from './breed-second';
import ExampleClientComponent from './selected-layout-segment';


export default async function page() {
  return (
    <div className='flex flex-col gap-4'>
      <Suspense fallback={<SkeletonCard />}>
        <BreedFirst />
      </Suspense>
      <Suspense fallback={<SkeletonCard />}>
        <BreedSecond />
      </Suspense>
      <ExampleClientComponent />
    </div>
  );
}
