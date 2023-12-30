import React, { createContext, useState, useEffect } from 'react';

export const favoritoContext = createContext();

export const FavoritoProvider = ({ children }) => {
  const storedFavorito = JSON.parse(localStorage.getItem('favorito')) || [];
  const [favorito, setfavorito] = useState(storedFavorito);

  useEffect(() => {
    localStorage.setItem('favorito', JSON.stringify(favorito));
  }, [favorito]);

  const addFavorite = (newFavorite) => {
    if (!favorito.includes(newFavorite)) {
      setfavorito([...favorito, newFavorite]);
    }
  };

  const removeFavorite = (removedFavorite) => {
    const updatedFavorites = favorito.filter((fav) => fav !== removedFavorite);
    setfavorito(updatedFavorites);
  };

  const resetFavorite = () => {
    setfavorito([]);
  };

  return (
    <favoritoContext.Provider
      value={{ favorito, addFavorite, removeFavorite, resetFavorite }}
    >
      {children}
    </favoritoContext.Provider>
  );
};
