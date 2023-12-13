import { useEffect, useState } from "react";
import { client } from "../client.ts";

export type ApiResponse = {
  status: Number;
  statusText: String;
  data: any;
  error: Error;
  loading: Boolean;
};

export default function useFetch (query: string):ApiResponse {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
    const getData = async ():Promise<void> => {
      setLoading(true);
      try {
        const apiResponse = await client  .fetch(query);
        console.log(apiResponse)
        // setStatus(apiResponse.status)
        // setData(apiResponse);
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false);
      }
    }

  useEffect(() => {
    getData();
  }, []);
  return {status, statusText, data, error,loading};
}
// export default function useFetch2(query):{data: null | object, error: null |  object, loading: null |  false} {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     (async function () {
//       try {
//         setLoading(true);
//         const response = await client.fetch(query);
//         setData(response);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     })();
//     //https://usefulangle.com/post/248/javascript-async-anonymous-function-iife
//   }, [query]);
//   return { data, error, loading };
// }
