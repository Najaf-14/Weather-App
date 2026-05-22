import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function Favorites() {
  const { favorites } = useContext(WeatherContext);

  return (
    <div className="container">
      <h1>Favorite Cities</h1>

      {favorites.length === 0 ? (
        <p>No favorites added</p>
      ) : (
        favorites.map((city, index) => (
          <div key={index} className="favorite-item">
            {city}
          </div>
        ))
      )}
    </div>
  );
}

export default Favorites;