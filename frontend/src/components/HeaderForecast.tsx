type Props = {
  cityName: string;
};

const HeaderForecast = ({ cityName }: Props) => {
  return <h1>5-day weather Forecast in {cityName}</h1>;
};

export default HeaderForecast;
