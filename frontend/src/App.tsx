import useWeatherData from "./hooks/useWeatherData";
import HeaderForecast from "./components/HeaderForecast";
import Forecast from "./components/Forecast";
import CityInputForm from "./components/CityInputForm";
import ErrorHandler from "./components/ErrorHandler";

function App() {
  const { weatherData, error, isLoading, cityName, setCityName } =
    useWeatherData();

  return (
    <>
      {error === null && isLoading === false ? (
        <div className="w-1/2 flex flex-col items-center justify-center">
          <HeaderForecast cityName={cityName} />
          <Forecast weatherData={weatherData} />
          <CityInputForm />
        </div>
      ) : (
        <ErrorHandler error={error} />
      )}
    </>
  );
}

export default App;
