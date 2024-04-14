import weatherIconCodes from "../../data/weatherIconCodes.js";

const returnIconUrl = (icon: string | undefined): string => {
  if (icon && weatherIconCodes.includes(icon)) {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  } else
    throw new Error(
      "Could not find a valid 'icon' property from the weatherData"
    );
};

export default returnIconUrl;
