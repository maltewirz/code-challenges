import { twoSum, twoSum2 } from './twoSum';

test('Basic Test', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);

    expect(twoSum2([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});
