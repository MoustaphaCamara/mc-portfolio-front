import { useEffect, useState } from "react";
import { client } from "../client.ts";
import {SanityData} from "../constants/data.ts";
import {Queries} from "../constants/queries.ts";

export type ApiResponse = {
  data: SanityData;
  error: Error;
  loading: Boolean;
};

export default function useFetch (query: Queries | string ):ApiResponse[] {
  const [data, setData] = useState<SanityData|undefined>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    (async function ():Promise<void> {
      setLoading(true);
      try {
        const apiResponse = await client  .fetch(query);
        setData(apiResponse);
      } catch (err) {
        setError(err)
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [query]);
  return <ApiResponse[]>{data, error, loading};
}