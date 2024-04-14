import { describe, expect, it } from "@jest/globals";
import returnIconUrl from "../src/utils/helpers/returnIconUrl";

describe("returnIconUrl function", () => {
  it("Should return correct URL for valid icon code", () => {
    expect(returnIconUrl("04d")).toBe(
      "https://openweathermap.org/img/wn/04d@2x.png"
    );
    expect(returnIconUrl("13d")).toBe(
      "https://openweathermap.org/img/wn/13d@2x.png"
    );
    expect(returnIconUrl("50d")).toBe(
      "https://openweathermap.org/img/wn/50d@2x.png"
    );
  });
  it("Should throw Error if no valid icon was found", () => {
    expect(() => returnIconUrl("")).toThrow();
    expect(() => returnIconUrl("123")).toThrow();
    expect(() => returnIconUrl("abc")).toThrow();
    expect(() => returnIconUrl(undefined)).toThrow();
  });
});
