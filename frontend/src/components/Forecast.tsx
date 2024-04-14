import useWeatherData from "../hooks/useWeatherData";
import { WeatherData } from "../../types/weatherDataType";
import modifyDate from "../utils/modifyDate";
import modifyTemp from "../utils/modifyTemp";
import "../index.css";

type Props = {
  weatherData: WeatherData[];
};

const Forecast = ({ weatherData }: Props) => {
  const { setError } = useWeatherData();
  const font: string = "text-white font-['cloudy']";
  const flexbox: string = "flex items-center justify-between";
  return (
    <div className="border-2 border-orange-300 rounded-lg w-[600px] h-auto flex flex-col p-3">
      {weatherData.map((day) => (
        <div key={day.date} className={flexbox + " w-full"}>
          <div className={flexbox + " w-4/6"}>
            <p className={font}>{modifyDate(day.date, setError)}</p>
            <div className={flexbox}>
              <img className="w-[70px]" src={day.icon} />
              <p className={font}>{modifyTemp(day.temperature, setError)}&deg;C</p>
            </div>
          </div>
          <p className={font + " w-auto underline underline-offset-4 text-sm"}>
            {day.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
