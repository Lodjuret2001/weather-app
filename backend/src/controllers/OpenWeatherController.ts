import {
  openWeatherAxiosData,
  openWeatherAxiosGeoCoding,
} from "../config/openWeatherAxios.js";
import tryCatch from "../utils/tryCatch.js";

class OpenWeatherController {
  getWeatherData = tryCatch(async (req, res) => {
    let COUNTRY: string = "";
    let CITYNAME: string = "";
    let LATITUDE: number = 0;
    let LONGITUDE: number = 0;
    let query: string = "";
    const cityName: string = req.query.cityName as string;

    if (cityName) {
      query = `/direct?q=${cityName}&limit=1&appid=${process.env.OPEN_WEATHER_APP_ID}`;

      const geoCodeData = (await openWeatherAxiosGeoCoding.get(query)).data[0];

      COUNTRY = geoCodeData.country;
      CITYNAME = geoCodeData.name;
      LATITUDE = geoCodeData.lat;
      LONGITUDE = geoCodeData.lon;
    }

    query = `/forecast?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${process.env.OPEN_WEATHER_APP_ID}`;
    const weatherData = await openWeatherAxiosData.get(query);

    res.send(weatherData.data);
  });
}

const openWeatherController = new OpenWeatherController();
export default openWeatherController;
