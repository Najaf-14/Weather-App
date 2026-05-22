import { useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { fetchForecast } from '../services/weatherApi';
import ForecastCard from '../components/ForecastCard';

function Forecast() {
  const [city, setCity] = useState('');

  const {
    forecast,
    setForecast,
  } = useContext(WeatherContext);

  const handleForecast = async () => {
    if (!city) return;

    const data = await fetchForecast(city);

    setForecast(data.forecast.forecastday);
  };

  return (
    <div className="container">
      <h1>3-Day Forecast</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={handleForecast}>
          Get Forecast
        </button>
      </div>

      <div className="forecast-grid">
        {forecast?.map((item, index) => (
          <ForecastCard
            key={index}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Forecast;