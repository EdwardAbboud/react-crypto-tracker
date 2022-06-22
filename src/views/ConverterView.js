// React imports
import { useEffect, useState } from "react";

// Custom hooks
import useFetch from "../hooks/useFetch";

import currencies from "../data/TopCurrencies.js";
import Loading from "../components/Loading";

export default function ConverterView() {
  const [isConversionLoading, setIsConversionLoading] = useState(false);
  const [conversion, setConversion] = useState(null);
  const [errorConvertingMessage, setErrorConvertingMessage] = useState(null);
  const [coin, setCoin] = useState(`bitcoin`);
  const [currency, setCurrency] = useState(`eur`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsConversionLoading(true);
        const conversionEndpoint = `simple/price?ids=${coin}&vs_currencies=${currency}`;
        const response = await fetch(
          `https://api.coingecko.com/api/v3/${conversionEndpoint}`
        );
        const data = await response.json();
        setConversion(data);
        setErrorConvertingMessage(null);
      } catch (error) {
        setErrorConvertingMessage(
          `There was an error converting your coins: ${error}`
        );
      } finally {
        setIsConversionLoading(false);
      }
    };

    fetchData();
  }, [coin, currency]);

  console.log("COIN", coin);

  // select handlers
  const changeCoin = (e) => {
    setCoin(e.target.value);
  };
  const changeCurrency = (e) => {
    setCurrency(e.target.value);
  };

  console.log("COIN-2", coin);

  // coins fetch
  const top30Coins = `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false`;
  const {
    data: coinsData,
    errorMessage: fetchError,
    isLoading: loadingFetch,
  } = useFetch(top30Coins);

  console.log("COIN-3", coin);

  let coins;
  let converted;
  if (coinsData == null || conversion == null) {
    coins = [];
    converted = [];
  } else {
    coins = coinsData;
    converted = conversion[coin][currency];
  }

  console.log(`COIN-4`, coin);

  return (
    <div>
      <div className="top-converter">
        {loadingFetch ? (
          <Loading />
        ) : (
          <div className="left-side-converter">
            <h3>Coin</h3>
            <select defaultValue={"bitcoin"} onChange={changeCoin}>
              {coins.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name}
                </option>
              ))}
            </select>
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
        </div>
      </div>
      {isConversionLoading ? (
        <Loading />
      ) : (
        <div className="bottom-converter">
          <p>Result</p>
          <p>{converted}</p>
        </div>
      )}
      {errorConvertingMessage && (
        <p className="fetch-error">{errorConvertingMessage}</p>
      )}
    </div>
  );
}
