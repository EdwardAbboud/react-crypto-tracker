import { FavoriteProvider } from "./contexts/CurrencyContext";
import "./css/App.css";
import CoinView from "./views/CoinView";

function App() {
  return (
    <div className="App">
      <FavoriteProvider>
        <div className="nav-bar">
          <h1>Crypto-tracker</h1>
        </div>
        <CoinView />
      </FavoriteProvider>
    </div>
  );
}

export default App;
