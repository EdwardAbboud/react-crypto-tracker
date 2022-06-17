import "../css/TopSevenCoin.css";
import icon from "../assets/icon-icon.webp";
import "../css/InformationBar.css";

export default function InformationBarTopSeven() {
  return (
    <div className="information-bar">
      <div className="coin-container">
        <div className="coin-row">
          <p className="coin-index-number">#</p>
          <div className="coin">
            <img src={icon} alt={`icon`} />
            <h3 className="top-seven-name">Name</h3>
            <p className="coin-symbol-btc">SYM</p>
          </div>
          <div className="coin-data">
            <div className="coin-price-btc">Price in BTC</div>

            <div className="coin-marketCap top-seven">Market Cap Rank</div>
          </div>
        </div>
      </div>
    </div>
  );
}
