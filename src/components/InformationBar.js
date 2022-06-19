import icon from "../assets/icon-icon.webp";
import "../css/Coin.css";
import "../css/InformationBar.css";
import filled from "../assets/star-fill.png";

export default function InformationBar() {
  return (
    <div className="information-bar">
      <div className="coin-container">
        <div className="coin-row">
          <div className="watch-list-icon-info">
            <img alt="Watch list icon" src={filled} />
          </div>
          <div className="coin">
            <img src={icon} alt={`icon`} />
            <h3>Name</h3>
            <p className="coin-symbol">sym</p>
          </div>
          <div className="coin-data">
            <p className="coin-price">Price</p>
            <p className="coin-volume">Volume</p>

            <p className="coin-percent">%</p>

            <p className="coin-marketCap">Market Cap</p>
          </div>
        </div>
      </div>
    </div>
  );
}
