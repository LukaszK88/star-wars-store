'use client';
import { useGetStarships } from '@/app/api/useGetStarships';
import StarshipListProduct from '@/app/components/starshipListProduct/StarshipListProduct';
import { Loading } from 'carbon-components-react';
import { Error, ShoppingCartClear } from '@carbon/icons-react';

export default function Home() {
  const { data, error, isLoading } = useGetStarships();

  const renderStarships = () => {
    return data?.results.map((starship) => (
      <StarshipListProduct key={starship.name} starship={starship} />
    ));
  };

  if (error)
    return (
      <div className='flex flex-col h-screen justify-center items-center'>
        <Error size={40} />
        Something went wrong
      </div>
    );
  if (isLoading) return <Loading />;
  if (!data?.results.length)
    return (
      <div className='flex flex-col h-screen justify-center items-center'>
        <ShoppingCartClear size={40} />
        No starships avaialble
      </div>
    );

  return (
    <main className='flex min-h-screen flex-col justify-between p-6'>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-6'>
        {renderStarships()}
      </div>
    </main>
  );
}
