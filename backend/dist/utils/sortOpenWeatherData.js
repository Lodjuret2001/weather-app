import WeatherData from "./WeatherData.js";
import returnIconUrl from "./helpers/returnIconUrl.js";
import checkMinMaxTempsIn from "./helpers/checkMinMaxTempsIn.js";
function sortOpenWeatherData(weatherData) {
    const city = weatherData.city.name;
    let responseArray = [];
    weatherData.list.forEach((interval) => {
        const date = interval.dt_txt.split(" ")[0];
        if (date === undefined)
            throw new Error("Could not find a valid 'date' property in the weatherData");
        const dateIndex = responseArray.findIndex((interval) => interval.date === date);
        if (dateIndex !== -1) {
            const currentTempInWeatherData = responseArray[dateIndex].temperature;
            const newTempDataInInterval = {
                minTemp: interval.main.temp_min,
                maxTemp: interval.main.temp_max,
            };
            const newTempData = checkMinMaxTempsIn(currentTempInWeatherData, newTempDataInInterval);
            responseArray[dateIndex].temperature = newTempData;
        }
        else {
            responseArray.push(new WeatherData(city, date, returnIconUrl(interval.weather[0].icon), interval.weather[0].description, {
                minTemp: interval.main.temp_min,
                maxTemp: interval.main.temp_max,
            }));
        }
    });
    return responseArray;
}
export default sortOpenWeatherData;
