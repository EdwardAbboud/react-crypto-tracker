import { useState } from "react";
import Coin from "./components/Coin";
import Loading from "./components/Loading";
import "./css/App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const [search, setSearch] = useState([]);
  const { data: coins, errorMessage, isLoading } = useFetch(`usd`);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toString().toLowerCase().includes(search.toString().toLowerCase())
  );

  if (isLoading) <Loading />;

  return (
    <div className="App">
      <div className="nav-bar">
        <h1>Crypto-tracker</h1>
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
      </div>
      {filteredCoins.map((coin) => (
        <Coin key={coin.id} coin={coin} />
      ))}
      {errorMessage}
    </div>
  );
}

export default App;
