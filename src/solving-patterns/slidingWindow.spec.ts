import {
    maxSubarraySumON,
    minSubArrayLen,
    findLongestSubstring,
} from './slidingWindow';

test('maxSubarraySum test', () => {
    expect(maxSubarraySumON([1, 2, 5, 2, 8, 1, 5], 2)).toStrictEqual(10);
    expect(maxSubarraySumON([4, 2, 1, 6], 1)).toStrictEqual(6);
    expect(maxSubarraySumON([4, 2, 1, 6], 2)).toStrictEqual(7);
});

test('minSubArrayLen test', () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toStrictEqual(2); // 4,3 is smallest subarray
    // expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toStrictEqual(2); // 5,4 is smallest subarray
});

test('findLongestSubstring test', () => {
    expect(findLongestSubstring('rithmschool')).toStrictEqual(7);
    // expect(findLongestSubstring('bbbbb').toStrictEqual(1);
});
