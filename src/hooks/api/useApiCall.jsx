import { useEffect, useState } from 'react';

export function useApiCall(url, method) {
  const [data, setData] = useState([]);
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const apiKey = import.meta.env.VITE_XX;
        const fetchOptions = {
          headers: {
            'Content-type': 'application/json',
            'X-Api-Key': apiKey,
          },
        };

        const response = await fetch(url, fetchOptions);

        const json = await response.json();
        setData(json);
        setResponse(response);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, [url, method]);

  return { data, response, isLoading, isError };
}
