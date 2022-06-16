import "../css/NavBar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/coin-gecko-logo.webp";
import { CurrencyContext } from "../contexts/CurrencyContext";
import CurrencySelect from "./CurrencySelect";

export default function Navbar() {
  const { changeUrlCurrency, changeCurrency } = useContext(CurrencyContext);

  const handleCurrency = (e) => {
    changeUrlCurrency(e.target.value);
    changeCurrency(e.target.value);
  };

  return (
    <div className="nav-bar">
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="coin-gecko-logo" />
          <h1>Crypto-tracker</h1>
        </Link>
      </div>

      <ul className="nav-links">
        <Link to={`/`}>
          <li className="home-nav">Home</li>
        </Link>
        <Link to={`/watch-list`}>
          <li>Watch list</li>
        </Link>
        <Link to={`/top-10`}>
          <li>Top 10</li>
        </Link>
      </ul>
      <div className="selection-options">
        <CurrencySelect handleCurrency={handleCurrency} />
      </div>
    </div>
  );
}
