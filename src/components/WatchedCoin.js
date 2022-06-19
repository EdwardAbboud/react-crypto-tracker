import { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrencyContext } from "../contexts/CurrencyContext";
import { WatchListContext } from "../contexts/WatchListContext";
import "../css/Coin.css";

// Icons for watch list
import outline from "../assets/star-outline.png";
import filled from "../assets/star-fill.png";

export default function WatchedCoin(props) {
  const { currency } = useContext(CurrencyContext);
  const { watchList, addToWatchList, removeFromWatchList } =
    useContext(WatchListContext);

  const watchCoin = watchList.find((coin) => coin === props.id);

  const watchListHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    watchCoin ? removeFromWatchList(props.id) : addToWatchList(props.id);
  };

  const currencyChecker = (valueUSD, valueEUR) => {
    if (currency === `EUR`) {
      return valueEUR.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR",
      });
    } else {
      return valueUSD.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    }
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
          <img src={props.coin.image.large} alt={`${props.coin.id}-coin`} />
          <Link to={`coins/${props.coin.id}`}>
            <h3>{props.coin.name}</h3>
          </Link>
          <p className="coin-symbol">{props.coin.symbol.slice(0, 6)}</p>
        </div>
        <div className="coin-data">
          <div className="coin-price">
            {props.coin.market_data.current_price ? (
              currencyChecker(
                props.coin.market_data.current_price.usd,
                props.coin.market_data.current_price.eur
              )
            ) : (
              <p>N/A</p>
            )}
          </div>
          <div className="coin-volume">
            {props.coin.market_data.total_volume ? (
              currencyChecker(
                props.coin.market_data.total_volume.usd,
                props.coin.market_data.total_volume.eur
              )
            ) : (
              <p>N/A</p>
            )}
          </div>
          {props.coin.market_data.price_change_percentage_24h ? (
            props.coin.market_data.price_change_percentage_24h < 0 ? (
              <p className="coin-percent red">
                {props.coin.market_data.price_change_percentage_24h.toFixed(2)}%
              </p>
            ) : (
              <p className="coin-percent green">
                {props.coin.market_data.price_change_percentage_24h.toFixed(2)}%
              </p>
            )
          ) : (
            <p className="coin-percent">N/A</p>
          )}
          <div className="coin-marketCap">
            {props.coin.market_data.market_cap ? (
              currencyChecker(
                props.coin.market_data.market_cap.usd,
                props.coin.market_data.market_cap.eur
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
