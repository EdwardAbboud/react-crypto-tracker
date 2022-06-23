// React
import React, { useContext, useEffect, useState } from "react";

// Context
import { WatchListContext } from "../contexts/WatchListContext";

// Component
import Loading from "../components/Loading";
import InformationBar from "../components/InformationBar";
import WatchedCoin from "../components/WatchedCoin";
import PageSearch from "../components/PageSearch";

// Style
import "../css/Errors.css";

export default function Favorites() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const { watchList } = useContext(WatchListContext);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const data = await Promise.all(
          watchList.map(async (id) => {
            const response = await fetch(
              `https://api.coingecko.com/api/v3/coins/${id}`
            );
            const result = await response.json();
            return result;
          })
        );
        setCoins(data);
      } catch (error) {
        console.log(error);
        setErrorMessage(true);
      }
      setIsLoading(false);
    }

    loadData();
  }, [watchList]);

  // Event handlers
  const handlePageSearch = (e) => {
    setSearch(e.target.value);
  };

  // Filter for search
  let filteredCoins;
  if (coins == null) {
    filteredCoins = [];
  } else {
    filteredCoins = coins.filter(
      (coin) =>
        coin.name
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase()) ||
        coin.symbol
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
    );
  }

  return (
    <div>
      <div className="search-sort-container">
        <PageSearch handleChange={handlePageSearch} />
      </div>
      <InformationBar />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {watchList.length === 0 ? (
            <p className="watch-list-error">
              {" "}
              Your watch list is still empty, please add some coins!
            </p>
          ) : (
            <div>
              {filteredCoins.map((coin) => (
                <WatchedCoin key={coin.id} coin={coin} id={coin.id} />
              ))}
            </div>
          )}
        </div>
      )}
      {errorMessage && <p className="fetch-error">{errorMessage}</p>}
    </div>
  );
}
