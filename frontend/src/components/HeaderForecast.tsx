import "../index.css";

type Props = {
  cityName: string;
};

const HeaderForecast = ({ cityName }: Props) => {
  const headerCSS: string = `font-['bubbly'] text-white text-[1.7rem] underline sm:text-5xl`
  return <h1 className={headerCSS}>Weather Forecast in {cityName}</h1>;
};

export default HeaderForecast;
