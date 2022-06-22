// React imports
import { useEffect, useRef, useState } from "react";

// Custom hooks
import useFetch from "../hooks/useFetch";

// components
import currencies from "../data/TopCurrencies.js";
import Loading from "../components/Loading";
import "../css/Converter.css";

export default function ConverterView() {
  const [isConversionLoading, setIsConversionLoading] = useState(false);
  const [conversion, setConversion] = useState(null);
  const [errorConvertingMessage, setErrorConvertingMessage] = useState(null);
  const [convertedCurrency, setConvertedCurrency] = useState(null);
  const [convertedCoin, setConvertedCoin] = useState(null);

  const coinRef = useRef("bitcoin");
  const currencyRef = useRef("eur");

  const fetchNewData = async () => {
    try {
      setIsConversionLoading(true);
      const conversionEndpoint = `simple/price?ids=${coinRef.current}&vs_currencies=${currencyRef.current}`;
      const response = await fetch(
        `https://api.coingecko.com/api/v3/${conversionEndpoint}`
      );
      const data = await response.json();
      const converted = data[coinRef.current][currencyRef.current];
      setConversion(converted);
      setErrorConvertingMessage(null);
    } catch (error) {
      setErrorConvertingMessage(
        `There was an error converting your coins: ${error}`
      );
    } finally {
      setIsConversionLoading(false);
    }
  };

  useEffect(() => {
    // Grab initial data
    fetchNewData();
    setConvertedCurrency(1 * conversion);
    setConvertedCoin(1);
  }, [conversion]);

  // select handlers
  const changeCoin = (e) => {
    coinRef.current = e.target.value;
    fetchNewData();
  };
  const changeCurrency = (e) => {
    currencyRef.current = e.target.value;
    fetchNewData();
  };

  // coins fetch
  const top30Coins = `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false`;
  const {
    data: coins,
    errorMessage: fetchError,
    isLoading: loadingFetch,
  } = useFetch(top30Coins);

  // convert input
  const handleCurrencyConversion = (e) => {
    e.preventDefault();
    e.target.value
      ? setConvertedCurrency(e.target.value * conversion)
      : setConvertedCurrency(1 * conversion);
  };
  const handleCoinConversion = (e) => {
    e.preventDefault();
    e.target.value
      ? setConvertedCoin((1 / conversion) * e.target.value)
      : setConvertedCoin(1);
  };

  return (
    <div className="converter-container">
      {loadingFetch ? (
        <Loading />
      ) : (
        <div className="left-side-converter">
          <div className="coin-section">
            <h3>Coin</h3>
            <select defaultValue={"bitcoin"} onChange={changeCoin}>
              {coins?.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <form>
              <input
                type="number"
                className="coin-amount-input"
                onChange={handleCurrencyConversion}
                placeholder={convertedCoin}
              />
            </form>
          </div>
        </div>
      )}
      {fetchError && <p className="fetch-error">{fetchError}</p>}

      <div className="right-side-converter">
        <h3>Currency</h3>
        <select defaultValue={"eur"} onChange={changeCurrency}>
          {currencies.map((currency) => (
            <option key={currency.id} value={currency.id}>
              {currency.name}
            </option>
          ))}
        </select>
        <div>
          {isConversionLoading ? (
            <Loading />
          ) : (
            <form>
              <input
                type="number"
                className="coin-amount-input"
                onChange={handleCoinConversion}
                placeholder={convertedCurrency}
              />
            </form>
          )}
        </div>
      </div>

      {errorConvertingMessage && (
        <p className="fetch-error">{errorConvertingMessage}</p>
      )}
    </div>
  );
}
