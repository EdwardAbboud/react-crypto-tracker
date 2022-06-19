import React, { useState, createContext } from "react";

export const WatchListContext = createContext();

export const WatchListProvider = (props) => {
  const [watchList, setWatchList] = useState([]);

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
