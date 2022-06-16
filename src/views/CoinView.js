// React imports
import { useContext, useState } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";

// Component imports
import Coin from "../components/Coin";
import CurrencySelect from "../components/CurrencySelect";
import InformationBar from "../components/InformationBar";
import Loading from "../components/Loading";
import Search from "../components/Search";
import SortBy from "../components/SortBy";

// Custom hooks
import useFetch from "../hooks/useFetch";

export default function CoinView() {
  const [search, setSearch] = useState([]);
  const [sortBy, setSortBy] = useState(`market_cap_desc`);
  const { urlCurrency, changeUrlCurrency, changeCurrency } =
    useContext(CurrencyContext);

  const urlEndpoint = `markets?vs_currency=${urlCurrency}&order=${sortBy}&per_page=100&page=1&sparkline=false`;

  const { data: coins, errorMessage, isLoading } = useFetch(urlEndpoint);

  // Event handlers
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSorting = (e) => {
    setSortBy(e.target.value);
  };
  const handleCurrency = (e) => {
    changeUrlCurrency(e.target.value);
    changeCurrency(e.target.value);
  };

  // Filter for search
  let filteredCoins;
  if (coins == null) {
    filteredCoins = [];
  } else {
    filteredCoins = coins.filter((coin) =>
      coin.name
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  }

  return (
    <div>
      <SortBy handleSorting={handleSorting} />
      <CurrencySelect handleCurrency={handleCurrency} />
      <Search handleChange={handleChange} />
      <InformationBar />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {filteredCoins.map((coin) => (
            <Coin key={coin.id} coin={coin} />
          ))}
        </div>
      )}
      {errorMessage}
    </div>
  );
}
