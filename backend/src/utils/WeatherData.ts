class WeatherData {
  constructor(
    public city: string,
    public date: string,
    public modifiedDate: string | Error,
    public icon: string | Error,
    public description: string,
    public temperature: {
      minTemp: number;
      maxTemp: number;
    }
  ) {}
}

export default WeatherData;
