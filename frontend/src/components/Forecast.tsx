import { WeatherData } from "../../types/weatherDataType";
import modifyDate from "../utils/modifyDate";
import modifyTemp from "../utils/modifyTemp";
import "../index.css";

type Props = {
  weatherData: WeatherData[];
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

const Forecast = ({ weatherData, setError }: Props) => {
  const font: string = "text-white font-['cloudy'] text-[0.55rem] sm:text-base";
  const flexbox: string = "flex items-center justify-between";
  return (
    <div className="border-2 border-orange-300 rounded-lg w-[350px] sm:w-[610px] h-auto flex flex-col p-3 m-3">
      {weatherData.map((day) => (
        <div key={day.date} className={flexbox + " w-full"}>
          <div className={flexbox + " w-2/3 mr-4"}>
            <p className={font}>{modifyDate(day.date, setError)}</p>
            <div className={flexbox}>
              <img className="w-[40px] sm:w-[70px]" src={day.icon} />
              <p className={font}>
                {modifyTemp(day.temperature, setError)}&deg;C
              </p>
            </div>
          </div>
          <p className={font + " w-1/3 underline underline-offset-4 text-right"}>
            {day.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
