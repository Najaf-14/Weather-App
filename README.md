# 🌤️ Weather App

A clean, responsive weather dashboard built with React. Search any city to get live weather conditions, peek at the upcoming forecast, and bookmark your go-to cities — all in one place.

---

## ✨ What it does

- 🔍 **Search by city** — instantly pull up current weather conditions anywhere in the world
- 🌡️ **Weather details** — temperature, humidity, wind speed, and a condition summary
- 📅 **3-day forecast** — see what's coming so you can plan ahead
- ⭐ **Favorites** — save cities you check often so you don't have to retype them
- 🔀 **Client-side routing** — smooth navigation between pages with React Router

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── ForecastCard.jsx   # Single forecast day card
│   ├── Navbar.jsx         # Top navigation bar
│   └── weatherCard.jsx    # Current weather display card
├── context/
│   └── WeatherContext.jsx # Global state for weather, forecast & favorites
├── pages/
│   ├── Home.jsx           # Search + current weather
│   ├── Forecast.jsx       # 5-day forecast view
│   └── Favorites.jsx      # Saved cities list
├── services/
│   └── weatherApi.js      # API calls to WeatherAPI.com
├── App.css                # Global styles
├── App.js                 # Root component
├── index.js               # Entry point
└── routes.jsx             # Route definitions
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed before you begin:

- [Node.js](https://nodejs.org/) v16 or higher
- npm v10 or higher

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/weather-app.git
cd weather-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. That's it!

---

## 📜 Available Scripts

| Script | What it does |
|--------|-------------|
| `npm start` | Starts the dev server with hot reload |
| `npm test` | Runs the test suite |
| `npm run build` | Builds the app for production into the `build/` folder |
| `npm run eject` | Ejects CRA config — **irreversible, only if you need full control** |

---

## 🔑 API Setup

This project uses [WeatherAPI.com](https://www.weatherapi.com/) for live data. The API key is currently stored directly in `src/services/weatherApi.js`.

```bash
# .env (create this file in the project root)
REACT_APP_WEATHER_API_KEY=f099489b06dc472bab6160127260205
```

```js
// src/services/weatherApi.js
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
```

The app currently uses two endpoints:

- `fetchWeather(city)` — current conditions via `/current.json`
- `fetchForecast(city)` — 5-day forecast via `/forecast.json`

---

## 🛠️ Built With

- [React](https://reactjs.org/) — UI library
- [React Router](https://reactrouter.com/) — client-side routing
- [WeatherAPI.com](https://www.weatherapi.com/) — weather data
- [Create React App](https://create-react-app.dev/) — project scaffolding

---

## 🤝 Contributing

Pull requests are welcome! If you find a bug or have a feature idea, feel free to open an issue first so we can discuss it.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
