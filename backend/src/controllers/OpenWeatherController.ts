import { OpenWeatherData } from "../../types/openWeatherTypes.js";
import {
  openWeatherAxiosData,
  openWeatherAxiosGeoCoding,
} from "../config/openWeatherAxios.js";
import sortOpenWeatherData from "../utils/sortOpenWeatherData.js";
import tryCatch from "../utils/tryCatch.js";

class OpenWeatherController {
  getWeatherData = tryCatch(async (req, res) => {
    let LATITUDE: number = 0;
    let LONGITUDE: number = 0;
    let query: string = "";
    const cityName: string = req.query.cityName as string;

    if (cityName) {
      query = `/direct?q=${cityName}&limit=1&appid=${process.env.OPEN_WEATHER_APP_ID}`;

      const geoCodeData = (await openWeatherAxiosGeoCoding.get(query)).data[0];

      LATITUDE = geoCodeData.lat;
      LONGITUDE = geoCodeData.lon;
    }

    query = `/forecast?lat=${LATITUDE}&lon=${LONGITUDE}&units=metric&appid=${process.env.OPEN_WEATHER_APP_ID}`;
    const weatherData: OpenWeatherData = (await openWeatherAxiosData.get(query))
      .data;
    const sortedWeatherData = sortOpenWeatherData(weatherData);
    res.send(sortedWeatherData);
  });
}

const openWeatherController = new OpenWeatherController();
export default openWeatherController;
