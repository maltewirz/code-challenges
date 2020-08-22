import { maxSubarraySumON } from './slidingWindow';

test('maxSubarraySum test', () => {
    expect(maxSubarraySumON([1,2,5,2,8,1,5],2)).toStrictEqual(10)
    expect(maxSubarraySumON([4,2,1,6],1)).toStrictEqual(6)
    expect(maxSubarraySumON([4,2,1,6],2)).toStrictEqual(7)
})