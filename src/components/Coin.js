import "../css/Coin.css";
export default function Coin(props) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={props.coin.image} alt={`${props.coin.id}-coin`} />
          <h3>{props.coin.name}</h3>
          <p className="coin-symbol">{props.coin.symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${props.coin.current_price}</p>
          <p className="coin-volume">
            ${props.coin.total_volume.toLocaleString()}
          </p>
          {props.coin.price_change_percentage_24h < 0 ? (
            <p className="coin-percent red">
              {props.coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              {props.coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          )}
          <p className="coin-marketCap">
            Market Cap: ${props.coin.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
