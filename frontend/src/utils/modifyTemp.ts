type Temp = {
  minTemp: number;
  maxTemp: number;
};

const modifyTemp = (temperature: Temp) => {
  const { minTemp, maxTemp } = temperature;
  const min = String(Math.floor(minTemp));
  const max = String(Math.floor(maxTemp));
  return `${min} / ${max}`;
};

export default modifyTemp;
