import checkMinMaxTempsIn from "../src/utils/helpers/checkMinMaxTempsIn";
import { Temp } from "../types/temp";

const sucessCase: Temp = {
  minTemp: 10,
  maxTemp: 20,
};
const failCase: Temp = {
  minTemp: undefined,
  maxTemp: 20,
};

describe("checkMinMaxTempsIn function", () => {
  it("Should NOT throw error if all properties are numbers", () => {
    expect(() => checkMinMaxTempsIn(sucessCase, sucessCase)).not.toThrow();
  });
  it("Should throw error if any property is not a number", () => {
    expect(() => checkMinMaxTempsIn(sucessCase, failCase)).toThrow();
    expect(() => checkMinMaxTempsIn(failCase, sucessCase)).toThrow();
    expect(() => checkMinMaxTempsIn(failCase, failCase)).toThrow();
  });
});
