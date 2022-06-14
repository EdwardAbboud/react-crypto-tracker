import React, { useState, createContext } from "react";

export const CurrencyContext = createContext();

export const FavoriteProvider = (props) => {
  const [urlCurrency, setUrlCurrency] = useState(`eur`);
  const [currency, setCurrency] = useState(`EUR`);

  const changeUrlCurrency = (value) => {
    if (urlCurrency === value) return;
    setUrlCurrency(value);
    changeCurrency(value.toUpperCase());
  };

  const changeCurrency = (value) => {
    if (currency === value.toUpperCase()) return;
    setCurrency(value.toUpperCase());
  };

  return (
    <CurrencyContext.Provider
      value={{ urlCurrency, changeUrlCurrency, currency, changeCurrency }}
    >
      {props.children}
    </CurrencyContext.Provider>
  );
};
