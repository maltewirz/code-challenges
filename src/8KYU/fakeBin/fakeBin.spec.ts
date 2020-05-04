import { fakeBin } from "./fakeBin";

test('Basic Test', () => {
  expect(fakeBin('45385593107843568')).toStrictEqual('01011110001100111');
});

test("Basic test", () => {
    expect(fakeBin('509321967506747')).toStrictEqual('101000111101101');
});