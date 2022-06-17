import { Link } from "react-router-dom";
import "../css/TopSevenCoin.css";

export default function TopSevenCoin(props) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <p className="coin-index">#{props.index + 1}</p>
        <div className="coin">
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
