import openWeatherAxios from "../config/openWeatherAxios.js";
import tryCatch from "../utils/tryCatch.js";

class OpenWeatherController {
  getWeatherData = tryCatch(async (req, res) => {
    const query: string = `/forecast?lat=${process.env.LATITUDE}&lon=${process.env.LONGITUDE}&appid=${process.env.OPEN_WEATHER_APP_ID}`;

    const weatherData = await openWeatherAxios.get(query);
    res.send(weatherData.data);
  });
}

const openWeatherController = new OpenWeatherController();
export default openWeatherController;
