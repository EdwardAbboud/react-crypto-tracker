import React, { useState, createContext, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListProvider = (props) => {
  const [watchList, setWatchList] = useState(() => {
    // getting stored value
    const saved = JSON.parse(localStorage.getItem("watchList"));
    return saved || [];
  });

  useEffect(() => {
    // Storing on every add or remove
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  const addToWatchList = (id) => {
    setWatchList([...watchList, id]);
  };

  const removeFromWatchList = (id) => {
    setWatchList(watchList.filter((coinId) => coinId !== id));
  };

  return (
    <WatchListContext.Provider
      value={{ watchList, addToWatchList, removeFromWatchList }}
    >
      {props.children}
    </WatchListContext.Provider>
  );
};
