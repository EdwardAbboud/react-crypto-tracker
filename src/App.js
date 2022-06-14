import Navbar from "./components/Navbar";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import "./css/App.css";
import Home from "./routes/Home";

function App() {
  return (
    <div className="App">
      <CurrencyProvider>
        <Navbar />
        <Home />
      </CurrencyProvider>
    </div>
  );
}

export default App;
