'use client';
import { useGetStarships } from '@/app/api/useGetStarships';
import StarshipListProduct from './components/starshipListProduct/StarshipListProduct';
import { Grid, Theme } from '@carbon/react';

export default function Home() {
  const { data, error, isLoading } = useGetStarships();

  const renderStarships = () => {
    return data?.results.map((starship) => (
      <StarshipListProduct key={starship.name} starship={starship} />
    ));
  };

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main className='flex min-h-screen flex-col justify-between p-24'>
      <div className='grid grid-cols-2 gap-4'>{renderStarships()}</div>
    </main>
  );
}
