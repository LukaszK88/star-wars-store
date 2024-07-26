'use client';
import { useGetStarships } from '@/app/api/useGetStarships';
import StarshipListProduct from '@/app/components/StarshipListProduct/StarshipListProduct';
import { Column, Grid, Loading, Pagination } from 'carbon-components-react';
import { Error } from '@carbon/icons-react';
import { useState } from 'react';
import AppHeader from './components/AppHeader/AppHeader';

const ErrorMessage = ({ message }: { message: string }) => (
  <div className='flex flex-col h-screen justify-center items-center'>
    <Error size={40} />
    {message}
  </div>
);

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useGetStarships({ page: currentPage });

  const handleNextPage = ({ page }: { page: number; pageSize: number }) => {
    setCurrentPage(page);
  };

  const renderStarships = () => {
    return data?.results.map((starship) => (
      <Column
        key={starship.name}
        className='pb-8'
        lg={{ offset: 3, span: 16 }}
        md={8}
        sm={4}
      >
        <StarshipListProduct starship={starship} />
      </Column>
    ));
  };

  if (error) return <ErrorMessage message='Something went wrong' />;
  if (isLoading) return <Loading />;
  if (!data?.results.length)
    return <ErrorMessage message='No starships available' />;

  return (
    <>
      <AppHeader />
      <Grid className='mt-20'>
        {renderStarships()}
        <Column className='pb-8' lg={{ offset: 3, span: 16 }} md={8} sm={4}>
          <Pagination
            backwardText='Previous page'
            forwardText='Next page'
            itemsPerPageText='Items per page:'
            onChange={handleNextPage}
            page={currentPage}
            pageSize={10}
            pageSizes={[10]}
            size='md'
            totalItems={data.count}
          />
        </Column>
      </Grid>
    </>
  );
}
