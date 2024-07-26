import useSWR from 'swr';
import { fetcher } from '.';
import { PaginatedResponse } from '../types/api';

export const useGetStarships = ({ page }: { page: number }) =>
  useSWR<PaginatedResponse<Starship>>(
    `https://swapi.dev/api/starships?page=${page}`,
    fetcher
  );
