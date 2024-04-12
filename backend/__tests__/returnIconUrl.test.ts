import returnIconUrl from "../src/utils/helpers/returnIconUrl";

describe("returnIconUrl", () => {
  const testCases = [
    { input: "04d", output: "https://openweathermap.org/img/wn/04d@2x.png" },
    { input: "13d", output: "https://openweathermap.org/img/wn/13d@2x.png" },
    { input: "50d", output: "https://openweathermap.org/img/wn/50d@2x.png" },
    { input: "er3", output: "https://openweathermap.org/img/wn/er3@2x.png" },
    { input: "er3", output: "https://openweathermap.org/img/wn/er3@2x.png" },
    { input: "er3", output: "https://openweathermap.org/img/wn/er3@2x.png" },
    { input: "er3", output: "https://openweathermap.org/img/wn/er3@2x.png" },
    { input: "er3", output: "https://openweathermap.org/img/wn/er3@2x.png" },
  ];
});
