// React imports
import { useContext, useState } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";

// Component imports
import Coin from "../components/Coin";
import InformationBar from "../components/InformationBar";
import Loading from "../components/Loading";
import PageSearch from "../components/PageSearch";
import SortBy from "../components/SortBy";
import "../css/CoinView.css";

// Custom hooks
import useFetch from "../hooks/useFetch";

export default function CoinView() {
  const [search, setSearch] = useState([]);
  const [sortBy, setSortBy] = useState(`market_cap_desc`);
  const { urlCurrency } = useContext(CurrencyContext);

  const urlEndpoint = `coins/markets?vs_currency=${urlCurrency}&order=${sortBy}&per_page=100&page=1&sparkline=false`;

  const { data: coins, errorMessage, isLoading } = useFetch(urlEndpoint);

  // Event handlers
  const handlePageSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSorting = (e) => {
    setSortBy(e.target.value);
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
        <SortBy handleSorting={handleSorting} />
        <PageSearch handleChange={handlePageSearch} />
      </div>
      <InformationBar />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div>
            {filteredCoins.map((coin) => (
              <Coin key={coin.id} coin={coin} id={coin.id} />
            ))}
          </div>
        </div>
      )}
      <p className="fetch-error">{errorMessage}</p>
    </div>
  );
}
