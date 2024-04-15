import axios from "axios";
const openWeatherAxiosData = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
});
const openWeatherAxiosGeoCoding = axios.create({
    baseURL: "http://api.openweathermap.org/geo/1.0",
});
export { openWeatherAxiosData, openWeatherAxiosGeoCoding };
