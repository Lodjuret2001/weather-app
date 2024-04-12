import { OpenWeatherData } from "../../types/openWeatherTypes.js";
import WeatherData from "./WeatherData.js";
import returnIconUrl from "./helpers/returnIconUrl.js";
import returnModifiedDateString from "./helpers/returnModifiedDateString.js";
import checkMinMaxTempsIn from "./helpers/checkMinMaxTempsIn.js";

function sortOpenWeatherData(weatherData: OpenWeatherData) {
  //The "weatherData" contains a 5-day forecast with 3-hours intervals of weatherData for each day.

  const city: string = weatherData.city.name;
  let responseArray: WeatherData[] = [];

  //"interval" is every 3-hour object in the list array.
  weatherData.list.forEach((interval: any) => {
    const date: string = interval.dt_txt.split(" ")[0];
    const dateIndex: number = responseArray.findIndex(
      (interval) => interval.date === date
    );

    if (dateIndex !== -1) {
      const currentTempInWeatherData = responseArray[dateIndex].temperature;

      const newTempDataInInterval = {
        minTemp: interval.main.temp_min as number,
        maxTemp: interval.main.temp_max as number,
      };

      const newTempData = checkMinMaxTempsIn(
        currentTempInWeatherData,
        newTempDataInInterval
      );

      responseArray[dateIndex].temperature = newTempData;
    } else {
      responseArray.push(
        new WeatherData(
          city,
          date,
          returnModifiedDateString(date),
          returnIconUrl(interval.weather[0].icon),
          interval.weather[0].description as string,
          {
            minTemp: interval.main.temp_min as number,
            maxTemp: interval.main.temp_max as number,
          }
        )
      );
    }
  });
  return responseArray;
}

export default sortOpenWeatherData;
