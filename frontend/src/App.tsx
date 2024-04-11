import HeaderForecast from "./components/HeaderForecast";
import Forecast from "./components/Forecast";
import CityInputForm from "./components/CityInputForm";

function App() {
  {
    /*Use the useWeatherData hook to retrive data on load*/
  }
  {
    /*Have a usestate for the city name*/
  }

  return (
    <>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <HeaderForecast /> {/*Pass the City name to Header*/}
        <Forecast /> {/*Pass the weather data down here*/}
        <CityInputForm />
      </div>
    </>
  );
}

export default App;
