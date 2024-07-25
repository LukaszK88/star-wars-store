"use client"
import { useGetStarships } from "@/app/api/useGetStarships";
import { Button } from 'carbon-components-react';

export default function Home() {

  const { data, error, isLoading } = useGetStarships();

  const renderStarships = () => {
    return data?.results.map(starship => <div key={starship.MGLT} className="">{starship.name}</div>)
  }

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <Button>Example usage</Button>
      <div className="flex flex-row">
        {renderStarships()}
      </div>
    </main>
  );
}
