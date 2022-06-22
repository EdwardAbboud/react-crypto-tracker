import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import { WatchListProvider } from "./contexts/WatchListContext";
import "./css/App.css";
import { keepTheme } from "./utils/Themes";

// Routes
import CoinPage from "./routes/CoinPage";
import HomePage from "./routes/HomePage";
import TopSevenPage from "./routes/TopSevenPage";
import WatchListPage from "./routes/WatchListPage";
import { useEffect } from "react";
import ConverterPage from "./routes/ConverterPage";

function App() {
  useEffect(() => {
    keepTheme();
  });

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
              <Route path="/trending" element={<TopSevenPage />} />
              <Route path="/converter" element={<ConverterPage />} />
            </Routes>
          </WatchListProvider>
        </CurrencyProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
