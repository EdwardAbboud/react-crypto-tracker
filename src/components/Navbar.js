import "../css/NavBar.css";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/coin-gecko-logo.webp";
import { CurrencyContext } from "../contexts/CurrencyContext";
import CurrencySelect from "./CurrencySelect";
import ThemeToggle from "./ThemeToggle";
import filled from "../assets/star-fill.png";

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
        <NavLink
          to={`/`}
          className={({ isActive }) =>
            isActive ? "active home-nav" : "home-nav"
          }
        >
          <li>Cryptocurrencies</li>
        </NavLink>
        <NavLink
          to={`/watch-list`}
          className={({ isActive }) =>
            isActive ? "active watch-list-one" : "watch-list-one"
          }
        >
          <li>Watch list</li>
        </NavLink>
        <NavLink
          to={`/watch-list`}
          className={({ isActive }) =>
            isActive ? "active watch-list-two" : "watch-list-two"
          }
        >
          <img alt="Watch list icon" src={filled} />
        </NavLink>
        <NavLink
          to={`/trending`}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Trending</li>
        </NavLink>
        <NavLink
          to={`/converter`}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Converter</li>
        </NavLink>
      </ul>
      <div className="theme-switch">
        <ThemeToggle />
      </div>
      <div className="selection-options">
        <CurrencySelect handleCurrency={handleCurrency} />
      </div>
    </div>
  );
}
