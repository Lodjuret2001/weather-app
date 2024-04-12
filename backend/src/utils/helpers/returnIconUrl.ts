import weatherIconCodes from "../../data/weatherIconCodes.js";

const returnIconUrl = (icon: string): string | Error => {
  if (weatherIconCodes.includes(icon)) {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  } else
    throw new Error(
      "Could not find a valid 'icon' property on the Weather Data..."
    );
};

export default returnIconUrl;
