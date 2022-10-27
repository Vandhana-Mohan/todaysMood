const getTodaysFeeling = require("./getTodaysFeeling");

describe("getTodaysFeeling", () => {
  test("returns a correct calculation", () => {
    const day = {
      name: "tue",
      mood: 2,
    };

    const actual = getTodaysFeeling(day);
    const expected = 3;
    expect(actual).toBe(expected)
  });

  test("can handle negative numbers", () => {
    const day = {
      name: "fri",
      mood: -3,
    };

    const actual = getTodaysFeeling(day);
    const expected = 2
    expect(actual).toBe(expected)
  });
});
