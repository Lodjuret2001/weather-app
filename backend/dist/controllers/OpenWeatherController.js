import { openWeatherAxiosData, openWeatherAxiosGeoCoding, } from "../config/openWeatherAxios.js";
import sortOpenWeatherData from "../utils/sortOpenWeatherData.js";
import tryCatch from "../utils/tryCatch.js";
class OpenWeatherController {
    getWeatherData = tryCatch(async (req, res) => {
        let LATITUDE = 0;
        let LONGITUDE = 0;
        let query = "";
        let cityName = req.query.cityName;
        if (cityName) {
            cityName = cityName.toLowerCase();
            query = `/direct?q=${cityName}&limit=1&appid=${process.env.OPEN_WEATHER_APP_ID}`;
            const geoCodeData = (await openWeatherAxiosGeoCoding.get(query)).data[0];
            if (!geoCodeData)
                throw new Error(`Found no city with the city name: "${cityName}", make sure to check for any misspelling :)`);
            LATITUDE = geoCodeData.lat;
            LONGITUDE = geoCodeData.lon;
        }
        else {
            throw new Error(`"${cityName}" is not a valid city name...`);
        }
        query = `/forecast?lat=${LATITUDE}&lon=${LONGITUDE}&units=metric&appid=${process.env.OPEN_WEATHER_APP_ID}`;
        const weatherData = (await openWeatherAxiosData.get(query))
            .data;
        if (weatherData.city.name.toLowerCase() !== cityName)
            throw new Error(`Sorry we could not match the city name: "${cityName}" maybe you meant: "${weatherData.city.name.toLowerCase()}". 
        Enter a valid city and not a state/country, some cities may not be possible to retrive... :(`);
        const sortedWeatherData = sortOpenWeatherData(weatherData);
        res.send(sortedWeatherData);
    });
}
const openWeatherController = new OpenWeatherController();
export default openWeatherController;
