import { useEffect, useState } from "react";
import { openweatherApi } from "../services/openWeather-service";
import { WeatherData } from "../../types/weatherDataType";

const useWeatherData = () => {
  const [cityName, setCityName] = useState<string>("Motala");
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setIsLoading(true);
        const weatherData = (await openweatherApi.getAll<WeatherData>(cityName))
          .data;
        setIsLoading(false);
        setWeatherData(weatherData);
      } catch (error: any) {
        setError(error.message);
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
  };
};

export default useWeatherData;
