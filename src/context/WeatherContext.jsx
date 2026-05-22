import { createContext, useState } from 'react';

export const WeatherContext =
  createContext();

export const WeatherProvider = ({
  children,
}) => {
  const [weather, setWeather] =
    useState(null);

  const [forecast, setForecast] =
    useState([]);

  const [favorites, setFavorites] =
    useState([]);

  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      setFavorites([...favorites, city]);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        forecast,
        setForecast,
        favorites,
        addFavorite,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};