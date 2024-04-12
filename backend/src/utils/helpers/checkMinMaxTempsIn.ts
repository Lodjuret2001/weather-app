import { Temp } from "../../../types/temp.js";

const checkMinMaxTempsIn = (currentTemp: Temp, newTemp: Temp): Temp => {
  //This function checks each interval so that we get the lowest and highest temp for each WeatherData.
  if (
    currentTemp.minTemp &&
    currentTemp.maxTemp &&
    newTemp.maxTemp &&
    newTemp.minTemp
  ) {
    const newMinTemp =
      newTemp.minTemp < currentTemp.minTemp
        ? newTemp.minTemp
        : currentTemp.minTemp;
    const newMaxTemp =
      newTemp.maxTemp > currentTemp.maxTemp
        ? newTemp.maxTemp
        : currentTemp.maxTemp;
    return { minTemp: newMinTemp, maxTemp: newMaxTemp };
  } else {
    throw new Error(
      "One or more 'temperature' property in the weatherData was not a number..."
    );
  }
};

export default checkMinMaxTempsIn;
