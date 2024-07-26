import { render, screen } from '@testing-library/react';
import Home from './page';
import { useGetStarships } from '@/app/api/useGetStarships';
import { starshipResponse } from './tests/fixtures/starship';
import { ComponentProps } from 'react';
import StarshipListProduct from './components/StarshipListProduct/StarshipListProduct';

jest.mock('./api/useGetStarships');
jest.mock(
  './components/starshipListProduct/StarshipListProduct',
  // eslint-disable-next-line react/display-name
  () => (args: ComponentProps<typeof StarshipListProduct>) => (
    <div data-testid='StarshipListProduct' {...args} />
  )
);

describe('<Home />', () => {
  it('should display error notice upon fetching starships data', () => {
    jest.mocked(useGetStarships).mockReturnValue({
      data: undefined,
      isLoading: false,
      error: 'ups',
      mutate: jest.fn(),
      isValidating: false,
    });

    render(<Home />);

    expect(screen.getByText('Something went wrong')).toBeDefined();
  });

  it('should display loading indicator while fetching starships data', () => {
    jest.mocked(useGetStarships).mockReturnValue({
      data: undefined,
      isLoading: true,
      error: undefined,
      mutate: jest.fn(),
      isValidating: false,
    });

    render(<Home />);

    expect(screen.getByText('loading')).toBeDefined();
  });

  it('should render list of starships', () => {
    jest.mocked(useGetStarships).mockReturnValue({
      data: starshipResponse,
      isLoading: false,
      error: undefined,
      mutate: jest.fn(),
      isValidating: false,
    });

    render(<Home />);

    expect(screen.getAllByTestId('StarshipListProduct')).toHaveLength(
      starshipResponse.results.length
    );
  });

  it('should handle empty starships response', () => {
    jest.mocked(useGetStarships).mockReturnValue({
      data: { ...starshipResponse, results: [] },
      isLoading: false,
      error: undefined,
      mutate: jest.fn(),
      isValidating: false,
    });

    render(<Home />);

    expect(screen.getByText('No starships avaialble')).toBeDefined();
  });
});
