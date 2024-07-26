import { renderHook, waitFor } from '@testing-library/react'
import { useGetStarships } from './useGetStarships'
import { starshipResponse } from '../tests/fixtures/starship';
import { SWRConfig } from 'swr';

global.fetch = jest.fn();

const wrapper = ({ children }: { children: React.ReactNode}) => (
  <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
)

describe('useGetStarships', () => {
  beforeEach(() => {
    jest.mocked(global.fetch).mockReset()
  })
  it('should make request to get starships', async () => {
    // @ts-expect-error
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve(starshipResponse),
      ok: true,
    })
    const { result } = renderHook(() => useGetStarships(), { wrapper });

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
    })

    expect(result.current.data).toEqual(starshipResponse)
  })

  it('should return error in case request fails', async () => {
    // @ts-expect-error
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.reject("ups"),
      ok: true,
    })
    const { result } = renderHook(() => useGetStarships(), { wrapper });

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
    })

    expect(result.current.error).toEqual('ups')
  })
})