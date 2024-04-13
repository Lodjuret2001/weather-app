import "../index.css";

type Props = {
  cityName: string;
};

const HeaderForecast = ({ cityName }: Props) => {
  return (
    <h1
      style={{
        fontFamily: "bubbly",
        color: "white",
        fontSize: "3rem",
        textDecoration: "underline",
      }}
    >
      weather Forecast in {cityName}
    </h1>
  );
};

export default HeaderForecast;
