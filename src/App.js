import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import "./css/App.css";

// Routes
import CoinPage from "./routes/CoinPage";
import HomePage from "./routes/HomePage";
import TopSevenPage from "./routes/TopSevenPage";

function App() {
  return (
    <Router>
      <div className="App">
        <CurrencyProvider>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/coins/:id" element={<CoinPage />} />
            <Route path="/top-7" element={<TopSevenPage />} />
          </Routes>
        </CurrencyProvider>
      </div>
    </Router>
  );
}

export default App;
