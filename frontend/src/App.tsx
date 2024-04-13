import useWeatherData from "./hooks/useWeatherData";
import WeatherBackground from "./components/WeatherBackground";
import HeaderForecast from "./components/HeaderForecast";
import Forecast from "./components/Forecast";
import CityInputForm from "./components/CityInputForm";
import Loading from "./components/Loading";
import ErrorHandler from "./components/ErrorHandler";

function App() {
  const { weatherData, error, isLoading, cityName } =
    useWeatherData();

  return (
    <>
      <WeatherBackground>
        {isLoading ? (
          <Loading />
        ) : error === null ? (
          <div className="flex flex-col items-center justify-between h-[300px]">
            <HeaderForecast cityName={cityName} />
            <Forecast weatherData={weatherData} />
            <CityInputForm />
          </div>
        ) : (
          <ErrorHandler error={error} />
        )}
      </WeatherBackground>
    </>
  );
}

// setCityName={setCityName}

export default App;
