import useSWR from "swr";
import { fetcher } from ".";
import { PaginatedResponse } from "../types/api";

export const useGetStarships = () => useSWR<PaginatedResponse<Starship>>('https://swapi.dev/api/starships', fetcher)
