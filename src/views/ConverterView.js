// React imports
import { useEffect, useRef, useState } from "react";

// Custom hooks
import useFetch from "../hooks/useFetch";

// components
import currencies from "../data/TopCurrencies.js";
import Loading from "../components/Loading";
import ConverterCoinSide from "../components/ConverterCoinSide";
import ConverterCurrencySide from "../components/ConverterCurrencySide";

// style
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

    handleCurrencyReset();
    e.target.value
      ? setConvertedCurrency(e.target.value * conversion)
      : setConvertedCurrency(1 * conversion);
  };
  const handleCoinConversion = (e) => {
    e.preventDefault();
    handleCoinReset();
    e.target.value
      ? setConvertedCoin((1 / conversion) * e.target.value)
      : setConvertedCoin(1);
  };

  // reset values when another input is activated
  const handleCoinReset = () => {
    const coinInput = document.querySelector(".coin-amount-input");
    coinInput.value = "";
  };
  const handleCurrencyReset = () => {
    const coinInput = document.querySelector(".currency-input");
    coinInput.value = "";
  };

  return (
    <div className="converter-container">
      {loadingFetch ? (
        <Loading />
      ) : (
        <ConverterCoinSide
          changeCoin={changeCoin}
          coins={coins}
          handleCurrencyConversion={handleCurrencyConversion}
          convertedCoin={convertedCoin}
        />
      )}
      {fetchError && <p className="fetch-error">{fetchError}</p>}

      <ConverterCurrencySide
        changeCurrency={changeCurrency}
        currencies={currencies}
        isConversionLoading={isConversionLoading}
        handleCoinConversion={handleCoinConversion}
        convertedCurrency={convertedCurrency}
      />

      {errorConvertingMessage && (
        <p className="fetch-error">{errorConvertingMessage}</p>
      )}
    </div>
  );
}
