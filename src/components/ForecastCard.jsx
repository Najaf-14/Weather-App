function ForecastCard({ item }) {
  return (
    <div className="forecast-card">
      <h3>{item.date}</h3>

      <img
        src={item.day.condition.icon}
        alt="weather icon"
      />

      <h2>{item.day.avgtemp_c}°C</h2>

      <p>{item.day.condition.text}</p>

      <p>
        Max: {item.day.maxtemp_c}°C
      </p>

      <p>
        Min: {item.day.mintemp_c}°C
      </p>
    </div>
  );
}

export default ForecastCard;