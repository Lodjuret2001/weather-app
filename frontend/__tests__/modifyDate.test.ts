import { describe, expect, it, jest } from "@jest/globals";
import modifyDate from "../src/utils/modifyDate";

describe("modifyDate function", () => {
  type MockSetError = (error: string) => void;
  const mockSetError: MockSetError = jest.fn();

  it("Should format date properly", () => {
    expect(() => modifyDate("2024-04-14", mockSetError)).not.toBe(undefined);
    expect(() => modifyDate("2023-07-14", mockSetError)).not.toBe(undefined);
    expect(() => modifyDate("2022-09-14", mockSetError)).not.toBe(undefined);
  });
  it("Should handle error when unable to format date", () => {
    expect(modifyDate("invalid-Date", mockSetError)).toBeUndefined();
    expect(modifyDate("20020111111", mockSetError)).toBeUndefined();
    expect(modifyDate("!!!!!!", mockSetError)).toBeUndefined();
    expect(modifyDate("undefined", mockSetError)).toBeUndefined();
  });
});
