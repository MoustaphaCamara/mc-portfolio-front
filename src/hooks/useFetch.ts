import { useEffect, useState } from 'react';
import { client } from '../client.ts';
import { Queries } from '../constants/queries.ts';

export type ApiResponse<T> = {
  data: T[] | undefined;
  error: Error | undefined;
  loading: boolean;
};

export default function useFetch<T>(query: Queries): ApiResponse<T> {
  const [data, setData] = useState<T[] | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    (async function (): Promise<void> {
      setLoading(true);
      try {
        const apiResponse = await client.fetch(query);
        setData(apiResponse);
      } catch (err) {
        setError(err as Error);
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [query]);
  return { data, error, loading };
}
