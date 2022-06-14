import { useContext, useState } from "react";
import Coin from "../components/Coin";
import CurrencySelect from "../components/CurrencySelect";
import InformationBar from "../components/InformationBar";
import Loading from "../components/Loading";
import SortBy from "../components/SortBy";
import { CurrencyContext } from "../contexts/CurrencyContext";
import useFetch from "../hooks/useMarketFetch";

export default function CoinView() {
  const [search, setSearch] = useState([]);
  const [sortBy, setSortBy] = useState(`market_cap_desc`);
  const { urlCurrency, changeUrlCurrency, changeCurrency } =
    useContext(CurrencyContext);
  const {
    data: coins,
    errorMessage,
    isLoading,
  } = useFetch(urlCurrency, sortBy);

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
  const filteredCoins = coins.filter((coin) =>
    coin.name.toString().toLowerCase().includes(search.toString().toLowerCase())
  );

  return (
    <div>
      <SortBy handleSorting={handleSorting} />
      <CurrencySelect handleCurrency={handleCurrency} />

      <div className="coin-search">
        <h2 className="coin-text">Search coins</h2>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
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
