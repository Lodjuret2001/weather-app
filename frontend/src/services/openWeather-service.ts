import { backendBaseURL } from "./backendBaseURL";

export type WeatherData = {};

class openWeatherRoutes {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getForecastIn<WeatherData>(cityName: string) {
    return backendBaseURL.get<WeatherData[]>(
      this.endpoint + `?cityName=${cityName}`
    );
  }
}

function openWeatherApi(endpoint: string) {
  return new openWeatherRoutes(endpoint);
}

export const openweatherApi = openWeatherApi("/api/openweather/forecast/data");
