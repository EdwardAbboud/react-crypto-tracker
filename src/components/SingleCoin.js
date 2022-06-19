import "../css/SingleCoin.css";

import { useContext } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";

export default function SingleCoin(props) {
  const { currency } = useContext(CurrencyContext);

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
    <div>
      <div className="coin-page-container">
        <div className="coin-information">
          <div className="coin-main">
            <img src={props.coin.image.large} alt={`${props.coin.id}-coin`} />
            <h1>
              {props.coin.name} - {props.coin.symbol.toUpperCase()}
            </h1>
            <h2>
              {currencyChecker(
                props.coin.market_data.current_price.usd,
                props.coin.market_data.current_price.eur
              )}
            </h2>
            <h3 className="coin-rank">Rank #{props.coin.market_cap_rank}</h3>
          </div>
          <div className="coin-market-section">
            <div className="market-section-one">
              <p>Genesis Date: {props.coin.genesis_date}</p>
              <p>Liquidity Score: {props.coin.liquidity_score}</p>
              <p>
                24h Highest:{" "}
                {currencyChecker(
                  props.coin.market_data.high_24h.usd,
                  props.coin.market_data.high_24h.eur
                )}
              </p>
              <p>
                24h Lowest:{" "}
                {currencyChecker(
                  props.coin.market_data.low_24h.usd,
                  props.coin.market_data.low_24h.eur
                )}
              </p>
              <p>
                All Time High:{" "}
                {currencyChecker(
                  props.coin.market_data.ath.usd,
                  props.coin.market_data.ath.eur
                )}
              </p>
            </div>
            <div className="market-section-two">
              <p>
                Percentage change since ATH:{" "}
                {currency === "EUR"
                  ? props.coin.market_data.ath_change_percentage.eur.toFixed(2)
                  : props.coin.market_data.ath_change_percentage.usd.toFixed(2)}
                %
              </p>
              <p>
                Circulating Supply: {props.coin.market_data.circulating_supply}
                {props.coin.symbol.toUpperCase()}
              </p>
              <p>
                Market Cap Currency:{" "}
                {currencyChecker(
                  props.coin.market_data.market_cap.usd,
                  props.coin.market_data.market_cap.eur
                )}
              </p>
              <p>
                Total Supply: {props.coin.market_data.max_supply}
                {props.coin.symbol.toUpperCase()}
              </p>
              <p>
                Total Volume:{" "}
                {currencyChecker(
                  props.coin.market_data.total_volume.usd,
                  props.coin.market_data.total_volume.eur
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="coin-description-container">
          <p className="coin-description">Description:</p>
          <div
            dangerouslySetInnerHTML={{ __html: props.coin.description.en }}
          />
        </div>
      </div>
    </div>
  );
}
