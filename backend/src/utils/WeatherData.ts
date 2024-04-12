import { Temp } from "../../types/temp.js";

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
