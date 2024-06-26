import { useEffect, useState } from "react";
import { openweatherApi } from "../services/openWeather-service";
import { WeatherData } from "../../types/weatherDataType";
import handleError from "../utils/handleError";

const useWeatherData = () => {
  const [cityName, setCityName] = useState<string>("London");
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherData = (await openweatherApi.getAll<WeatherData>(cityName))
          .data;
        setWeatherData(weatherData);
        setError(null);
      } catch (error: any) {
        console.log(error);
        
        const errorMessage = handleError(error);
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWeatherData();
  }, [cityName]);
  return {
    weatherData,
    cityName,
    error,
    isLoading,
    setCityName,
    setError,
  };
};

export default useWeatherData;
