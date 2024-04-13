import useWeatherData from "./hooks/useWeatherData";
import WeatherBackground from "./components/WeatherBackground";
import HeaderForecast from "./components/HeaderForecast";
import Forecast from "./components/Forecast";
import CityInputForm from "./components/CityInputForm";
import Loading from "./components/Loading";
import ErrorHandler from "./components/ErrorHandler";

function App() {
  const { weatherData, error, isLoading, cityName, setCityName } =
    useWeatherData();

  return (
    <>
      <WeatherBackground>
        {isLoading ? (
          <Loading />
        ) : error === null ? (
          <>
            <HeaderForecast cityName={cityName} />
            <Forecast weatherData={weatherData} />
            <CityInputForm setCityName={setCityName} />
          </>
        ) : (
          <ErrorHandler error={error} />
        )}
      </WeatherBackground>
    </>
  );
}

export default App;
