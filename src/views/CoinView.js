import { useContext, useState } from "react";
import Coin from "../components/Coin";
import InformationBar from "../components/InformationBar";
import Loading from "../components/Loading";
import { CurrencyContext } from "../contexts/CurrencyContext";
import useFetch from "../hooks/useFetch";

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

  if (isLoading) <Loading />;

  return (
    <div>
      <select
        className="sort-by"
        defaultValue={`market_cap_desc`}
        onChange={handleSorting}
      >
        <option value={`market_cap_desc`}>Market Cap Descending</option>
        <option value={`market_cap_asc`}>Market Cap Ascending</option>
        <option value={`id_desc`}>Name Descending</option>
        <option value={`id_asc`}>Name Ascending</option>
        <option value={`volume_desc`}>Volume Descending</option>
        <option value={`volume_asc`}>Volume Ascending</option>
      </select>
      <select defaultValue={`eur`} onChange={handleCurrency}>
        <option value={`eur`}>EUR</option>
        <option value={`usd`}>USD</option>
      </select>
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
      <div>
        {filteredCoins.map((coin) => (
          <Coin key={coin.id} coin={coin} />
        ))}
      </div>
      {errorMessage}
    </div>
  );
}
