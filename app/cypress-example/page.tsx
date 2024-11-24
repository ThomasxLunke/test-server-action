import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'


export default async function page() {
  const data = await fetch("https://dogapi.dog/api/v2/breeds");
  const dogs: Breeds = await data.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {dogs.data.map((dog) => (
        <Card className="p-4" key={dog.id}>
          <CardHeader>
            <CardTitle>{dog.attributes.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{dog.attributes.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
