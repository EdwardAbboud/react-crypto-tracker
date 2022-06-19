import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import { WatchListProvider } from "./contexts/WatchListContext";
import "./css/App.css";

// Routes
import CoinPage from "./routes/CoinPage";
import HomePage from "./routes/HomePage";
import TopSevenPage from "./routes/TopSevenPage";
import WatchListPage from "./routes/WatchListPage";

function App() {
  return (
    <Router>
      <div className="App">
        <CurrencyProvider>
          <Navbar />
          <WatchListProvider>
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/coins/:id" element={<CoinPage />} />
              <Route path="/watch-list" element={<WatchListPage />} />
              <Route path="/top-7" element={<TopSevenPage />} />
            </Routes>
          </WatchListProvider>
        </CurrencyProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
