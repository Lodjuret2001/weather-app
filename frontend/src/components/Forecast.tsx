import { WeatherData } from "../../types/weatherDataType";

type Props = {
  weatherData: WeatherData[];
};

const Forecast = ({ weatherData }: Props) => {
  return (
    <div>
      {weatherData.map((day) => (
        <div>{`${day.description}, ${day.city}, ${day.date}`}</div>
      ))}
    </div>
  );
};

export default Forecast;
