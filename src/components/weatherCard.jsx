function WeatherCard({ weather }) {
  if (!weather || !weather.location || !weather.current) {
    return null;
  }

  return (
    <div className="card">
      <h2>{weather.location.name}</h2>

      <img
        src={weather.current.condition.icon}
        alt="weather icon"
      />

      <h1>{weather.current.temp_c}°C</h1>

      <p>{weather.current.condition.text}</p>

      <p>
        Humidity: {weather.current.humidity}%
      </p>

      <p>
        Wind: {weather.current.wind_kph} kph
      </p>

      <p>
        Country: {weather.location.country}
      </p>
    </div>
  );
}

export default WeatherCard;