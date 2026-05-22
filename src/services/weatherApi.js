const API_KEY = 'f099489b06dc472bab6160127260205';

export const fetchWeather = async (city) => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error", error);
    }
};

export const fetchForecast = async (city) => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error", error);
    }
};