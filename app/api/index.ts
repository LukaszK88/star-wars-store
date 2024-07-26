export const fetcher = <T>(...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => {
    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }
    return res.json() as Promise<T>;
  });
