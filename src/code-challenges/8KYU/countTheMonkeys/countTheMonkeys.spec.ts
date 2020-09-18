import { monkeyCount } from "./countTheMonkeys";

test("Takes any non-negative integer and returns it with its digits in order", () => {
  expect(monkeyCount(5)).toStrictEqual([1, 2, 3, 4, 5]);
});

test("Takes any non-negative integer and returns it with its digits in order", () => {
    expect(monkeyCount(10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});