// React imports
import { useContext, useState } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";

// Custom hooks
import useFetch from "../hooks/useFetch";

// Component imports
import Coin from "../components/Coin";
import InformationBar from "../components/InformationBar";
import Loading from "../components/Loading";
import PaginationBar from "../components/PaginationBar";
import PageSearch from "../components/PageSearch";
import SortBy from "../components/SortBy";

// Style
import "../css/CoinView.css";

export default function CoinView() {
  const [search, setSearch] = useState([]);
  const [sortBy, setSortBy] = useState(`market_cap_desc`);
  const [currentPage, setCurrentPage] = useState(1);
  const { urlCurrency } = useContext(CurrencyContext);

  const urlEndpoint = `coins/markets?vs_currency=${urlCurrency}&order=${sortBy}&per_page=100&page=${currentPage}&sparkline=false`;

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

  // Pagination logic
  const loadPrev = () => {
    setCurrentPage((currentPage) => {
      return currentPage > 1 ? currentPage - 1 : 1;
    });
  };
  const loadNext = () => {
    setCurrentPage((currentPage) => {
      return currentPage < 135 ? currentPage + 1 : 135;
    });
  };

  return (
    <div>
      <div className="search-sort-container">
        <PaginationBar
          currentPage={currentPage}
          loadPrev={loadPrev}
          loadNext={loadNext}
        />
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
      <div className="bottom-pagination">
        <PaginationBar
          currentPage={currentPage}
          loadPrev={loadPrev}
          loadNext={loadNext}
        />
      </div>

      {errorMessage && <p className="fetch-error">{errorMessage}</p>}
    </div>
  );
}
