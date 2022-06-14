import { useContext } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";
import "../css/Coin.css";
export default function Coin(props) {
  const { currency } = useContext(CurrencyContext);

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={props.coin.image} alt={`${props.coin.id}-coin`} />
          <h3>{props.coin.name}</h3>
          <p className="coin-symbol">{props.coin.symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">
            {props.coin.current_price ? (
              props.coin.current_price.toLocaleString("en-US", {
                style: "currency",
                currency: currency,
              })
            ) : (
              <p>N/A</p>
            )}
          </p>
          <p className="coin-volume">
            {props.coin.total_volume ? (
              props.coin.total_volume.toLocaleString("en-US", {
                style: "currency",
                currency: currency,
              })
            ) : (
              <p>N/A</p>
            )}
          </p>
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
          <p className="coin-marketCap">
            {props.coin.market_cap ? (
              props.coin.market_cap.toLocaleString("en-US", {
                style: "currency",
                currency: currency,
              })
            ) : (
              <p>N/A</p>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
