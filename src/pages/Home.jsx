import { useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { fetchWeather } from '../services/weatherApi';
import WeatherCard from '../components/weatherCard';

function Home() {
  const [city, setCity] = useState('');

  const {
    weather,
    setWeather,
    addFavorite,
  } = useContext(WeatherContext);

  const handleSearch = async () => {
    if (!city) return;

    const data = await fetchWeather(city);

    setWeather(data);
  };

  return (
    <div className="container">
      <h1>Weather App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={handleSearch}>
          Search
        </button>
      </div>

      {weather && (
        <button
          onClick={() =>
            addFavorite(weather.location.name)
          }
        >
          Add To Favorites
        </button>
      )}

      <WeatherCard weather={weather} />
    </div>
  );
}

export default Home;