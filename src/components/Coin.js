import { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrencyContext } from "../contexts/CurrencyContext";
import { WatchListContext } from "../contexts/WatchListContext";
import "../css/Coin.css";

// Icons for watch list
import outline from "../assets/star-outline.png";
import filled from "../assets/star-fill.png";

export default function Coin(props) {
  const { currency } = useContext(CurrencyContext);

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
        <div className="coin">
          <img src={props.coin.image} alt={`${props.coin.id}-coin`} />
          <Link to={`coins/${props.coin.id}`}>
            <h3>{props.coin.name}</h3>
          </Link>
          <p className="coin-symbol">{props.coin.symbol.slice(0, 6)}</p>
        </div>
        <div className="coin-data">
          <div className="coin-price">
            {props.coin.current_price ? (
              props.coin.current_price.toLocaleString(
                `${currency === "USD" ? "en-US" : "fr-FR"}`,
                {
                  style: "currency",
                  currency: currency,
                }
              )
            ) : (
              <p>N/A</p>
            )}
          </div>
          <div className="coin-volume">
            {props.coin.total_volume ? (
              props.coin.total_volume.toLocaleString(
                `${currency === "USD" ? "en-US" : "fr-FR"}`,
                {
                  style: "currency",
                  currency: currency,
                }
              )
            ) : (
              <p>N/A</p>
            )}
          </div>
          {props.coin.price_change_percentage_24h ? (
            props.coin.price_change_percentage_24h < 0 ? (
              <p className="coin-percent red">
                {props.coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            ) : (
              <p className="coin-percent green">
                {props.coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            )
          ) : (
            <p className="coin-percent">N/A</p>
          )}
          <div className="coin-marketCap">
            {props.coin.market_cap ? (
              props.coin.market_cap.toLocaleString(
                `${currency === "USD" ? "en-US" : "fr-FR"}`,
                {
                  style: "currency",
                  currency: currency,
                }
              )
            ) : (
              <p>N/A</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
