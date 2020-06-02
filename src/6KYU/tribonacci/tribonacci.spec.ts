import { tribonacci } from './tribonacci';


test('Basic test', () => {
    // expect(tribonacci([1, 1, 1], 10)).toStrictEqual([1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
    expect(tribonacci([1, 1, 1], 1)).toStrictEqual([1]);
})