export type OpenWeatherData = {
  cod: string;
  message: number;
  cnt: number;
  list: any[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};
