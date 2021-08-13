import { bonusTime } from "./bonusTime";

test('Basic Test', () => {
  expect(bonusTime(10000, true)).toStrictEqual('£100000');
});

test("Basic test", () => {
    expect(bonusTime(10000, false)).toStrictEqual('£10000');
});