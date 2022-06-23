import { useContext } from "react";
import { Link } from "react-router-dom";
import { WatchListContext } from "../contexts/WatchListContext";
import "../css/TopSevenCoin.css";

// Icons for watch list
import outline from "../assets/star-outline.png";
import filled from "../assets/star-fill.png";

export default function TopSevenCoin(props) {
  const { watchList, addToWatchList, removeFromWatchList } =
    useContext(WatchListContext);

  const watchCoin = watchList.find((coin) => coin === props.id);

  const watchListHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    watchCoin ? removeFromWatchList(props.id) : addToWatchList(props.id);
  };

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="watch-list-icon">
          <img
            alt="Watch list icon"
            src={watchCoin ? filled : outline}
            onClick={watchListHandler}
          />
        </div>
        <p className="coin-index">#{props.index + 1}</p>
        <div id="btc-coin" className="coin">
          <img src={props.coin.large} alt={`${props.coin.id}-coin`} />
          <Link to={`../coins/${props.coin.id}`}>
            <h3 className="top-seven-name">{props.coin.name}</h3>
          </Link>
          <p className="coin-symbol-btc">{props.coin.symbol.slice(0, 6)}</p>
        </div>
        <div className="coin-data">
          <div className="coin-price-btc">BTC {props.coin.price_btc}</div>

          <div className="coin-marketCap top-seven">
            {props.coin.market_cap_rank}
          </div>
        </div>
      </div>
    </div>
  );
}
