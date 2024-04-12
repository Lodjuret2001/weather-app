type Temp = {
  minTemp: number;
  maxTemp: number;
};

const checkMinMaxTempsIn = (currentTemp: Temp, newTemp: Temp): Temp => {
  //This function checks each interval so that we get the lowest and highest temp for each WeatherData.

  const newMinTemp =
    newTemp.minTemp < currentTemp.minTemp
      ? newTemp.minTemp
      : currentTemp.minTemp;
  const newMaxTemp =
    newTemp.maxTemp > currentTemp.maxTemp
      ? newTemp.maxTemp
      : currentTemp.maxTemp;
  return { minTemp: newMinTemp, maxTemp: newMaxTemp };
};

export default checkMinMaxTempsIn;
