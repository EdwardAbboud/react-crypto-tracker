import React, { useState, createContext } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (id) => {
    setFavorites([...favorites, id]);
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((coinId) => coinId !== id));
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
};
