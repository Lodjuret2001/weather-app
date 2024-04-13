export type WeatherData = {
  city: string;
  date: string;
  icon: string;
  description: string;
  temperature: {
    minTemp: number;
    maxTekmp: number;
  };
};
