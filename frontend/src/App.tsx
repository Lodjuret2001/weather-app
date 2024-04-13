import useWeatherData from "./hooks/useWeatherData";
import WeatherBackground from "./components/WeatherBackground";
import HeaderForecast from "./components/HeaderForecast";
import Forecast from "./components/Forecast";
import CityInputForm from "./components/CityInputForm";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const { weatherData, error, isLoading, cityName, setCityName } =
    useWeatherData();

  return (
    <>
      <WeatherBackground>
        {isLoading ? (
          <Loading />
        ) : error === null ? (
          <div className="flex flex-col items-center justify-between h-auto">
            <HeaderForecast cityName={cityName} />
            <Forecast weatherData={weatherData} />
            <CityInputForm setCityName={setCityName} />
          </div>
        ) : (
          <Error error={error} />
        )}
      </WeatherBackground>
    </>
  );
}

export default App;
