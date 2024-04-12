import { Temp } from "../../types/tempType.js";

class WeatherData {
  constructor(
    public city: string,
    public date: string,
    public icon: string | undefined,
    public description: string,
    public temperature: Temp
  ) {}
}

export default WeatherData;
