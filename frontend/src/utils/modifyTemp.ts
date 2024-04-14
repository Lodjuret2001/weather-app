type Temp = {
  minTemp: number;
  maxTemp: number;
};

const modifyTemp = (
  temperature: Temp,
  setError: (error: string) => void
): string | undefined => {
  const { minTemp, maxTemp } = temperature;
  if (!minTemp || !maxTemp) {
    setError("A temperature property was not a number...");
  }

  const min = String(Math.floor(minTemp));
  const max = String(Math.floor(maxTemp));
  return `${min} / ${max}`;
};

export default modifyTemp;
