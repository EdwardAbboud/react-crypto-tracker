import { useEffect, useState } from "react";

export default function useFetch(endpoint) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${endpoint}`
        );

        const data = await response.json();
        setData(data);

        setErrorMessage(null);
      } catch (error) {
        setErrorMessage(`There was an error fetching your data: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, isLoading, errorMessage };
}
