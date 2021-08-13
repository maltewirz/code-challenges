import { maxSubArray, maxSubArray2 } from './maxSubArray';

test('Basic Test', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual(6);
    expect(maxSubArray([1])).toStrictEqual(1);
    expect(maxSubArray([5, 4, -1, 7, 8])).toStrictEqual(23);
    expect(maxSubArray([-2, 1])).toStrictEqual(1);
    expect(maxSubArray([-2, -1])).toStrictEqual(-1);

    expect(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual(6);
});
