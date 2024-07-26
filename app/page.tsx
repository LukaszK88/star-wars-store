'use client';
import { useGetStarships } from '@/app/api/useGetStarships';
import StarshipListProduct from './components/starshipListProduct/StarshipListProduct';

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
    <main className='flex min-h-screen flex-col justify-between p-6'>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-6'>
        {renderStarships()}
      </div>
    </main>
  );
}
