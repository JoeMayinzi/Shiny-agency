/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export function useFecth(url) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    setIsLoading(true);
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
