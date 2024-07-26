'use client';
import { useGetStarships } from '@/app/api/useGetStarships';
import StarshipListProduct from '@/app/components/StarshipListProduct/StarshipListProduct';
import {
  Column,
  Grid,
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  Loading,
  SideNav,
  SideNavItems,
  SideNavLink,
  Pagination,
} from 'carbon-components-react';
import {
  Error,
  ShoppingCartClear,
  Rocket,
  Video,
  UserMultiple,
  Earth,
  Bat,
  Tank,
} from '@carbon/icons-react';
import { useState } from 'react';

export default function Home() {
  const [currentPage, setCurentPage] = useState(1);
  const { data, error, isLoading } = useGetStarships({ page: currentPage });

  const handleNextPage = ({ page }: { page: number; pageSize: number }) => {
    setCurentPage(page);
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
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header>
            <HeaderMenuButton
              aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
              aria-expanded={isSideNavExpanded}
            />
            <HeaderName href='#' prefix='Intergalatical'>
              Store
            </HeaderName>
            <SideNav aria-label='Side navigation' expanded={isSideNavExpanded}>
              <SideNavItems>
                <SideNavLink renderIcon={Rocket} href='/'>
                  Starships
                </SideNavLink>
                <SideNavLink renderIcon={Video} href='/'>
                  Films
                </SideNavLink>
                <SideNavLink renderIcon={UserMultiple} href='/'>
                  People
                </SideNavLink>
                <SideNavLink renderIcon={Earth} href='/'>
                  Planets
                </SideNavLink>
                <SideNavLink renderIcon={Bat} href='/'>
                  Species
                </SideNavLink>
                <SideNavLink renderIcon={Tank} href='/'>
                  Vehicles
                </SideNavLink>
              </SideNavItems>
            </SideNav>
          </Header>
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
      )}
    />
  );
}
