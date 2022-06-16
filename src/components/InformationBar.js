import icon from "../assets/icon-icon.webp";
import "../css/Coin.css";
import "../css/InformationBar.css";

export default function InformationBar() {
  return (
    <div className="information-bar">
      <div className="coin-container">
        <div className="coin-row">
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
