
const BASE_WEATHER_KEY = process.env.EXPO_PUBLIC_BASE_WEATHER_KEY;

export const homeApiUrl = () => {
    const homeBaseUrl = "https://api.openweathermap.org/data/2.5/weather?"

    const homeBaseQuery = new URLSearchParams({q: "Dnepr", appid: BASE_WEATHER_KEY, units: "metric"}).toString();
    return `${homeBaseUrl}${homeBaseQuery}`;
}

export const baseGetWeatherWeekUrl = "https://api.openweathermap.org/data/3.0/onecall?"
export const defaultGetWeatherQuery = {units: "metric", exclude: "hourly,minutely,alerts", appid: BASE_WEATHER_KEY}

