"use client"
import { useGetStarships } from "@/src/api/useGetStarships";

export default function Home() {

  const { data, error, isLoading } = useGetStarships();

  const renderStarships = () => {
    return data?.results.map(starship => <div>{starship.name}</div>)
  }


  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {renderStarships()}
      </div>
    </main>
  );
}
