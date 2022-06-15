import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import "./css/App.css";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <CurrencyProvider>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </CurrencyProvider>
      </div>
    </Router>
  );
}

export default App;
