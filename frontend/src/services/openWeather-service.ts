import { backendBaseURL } from "./backendBaseURL";

class openWeatherRoutes {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>(cityName: string) {
    return backendBaseURL.get<T[]>(this.endpoint + `?cityName=${cityName}`);
  }
}

function openWeatherApi(endpoint: string) {
  return new openWeatherRoutes(endpoint);
}

export const openweatherApi = openWeatherApi("/api/openweather/forecast/data");
