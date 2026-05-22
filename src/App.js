import "./App.css";
import { WeatherProvider } from "./context/WeatherContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <WeatherProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </WeatherProvider>
  );
}

export default App;
