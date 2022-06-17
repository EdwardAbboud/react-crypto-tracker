// React imports
import { useState } from "react";
import InformationBarTopSeven from "../components/InformationBarTopSeven";

// Component imports
import Loading from "../components/Loading";
import PageSearch from "../components/PageSearch";
import TopSevenCoin from "../components/TopSevenCoin";

// Custom hooks
import useFetch from "../hooks/useFetch";

export default function TopSevenView() {
  const [search, setSearch] = useState([]);
  const urlEndpoint = `search/trending`;
  const { data: allCoins, errorMessage, isLoading } = useFetch(urlEndpoint);

  console.log(`This ALL top 7`, allCoins);

  // Event handlers
  const handlePageSearch = (e) => {
    setSearch(e.target.value);
  };

  // Filter for search
  let filteredCoins;
  if (allCoins == null) {
    filteredCoins = [];
  } else {
    filteredCoins = allCoins.coins.filter((coin) =>
      coin.item.name
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
    console.log(`This is filteredcoins`, filteredCoins);
  }

  return (
    <div>
      <div className="search-sort-container">
        <PageSearch handleChange={handlePageSearch} />
      </div>
      <InformationBarTopSeven />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {filteredCoins.map((coin) => (
            <div>
              {/* {filteredCoins.indexOf(coin)} */}
              <TopSevenCoin
                key={coin.item.id}
                coin={coin.item}
                index={filteredCoins.indexOf(coin)}
              />
            </div>
          ))}
        </div>
      )}
      {errorMessage}
    </div>
  );
}
