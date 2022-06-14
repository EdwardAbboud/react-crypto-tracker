import { useEffect, useState } from "react";

export default function useFetch(currency, sortBy) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [repeater, setRepeater] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${sortBy}&per_page=100&page=1&sparkline=false`
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
    // setTimeout(() => setRepeater((prevState) => prevState + 1), 10000);
  }, [currency, repeater, sortBy]);

  return { data, isLoading, errorMessage };
}
