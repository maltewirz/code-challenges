import {swap, swapNew, bubbleSort} from './sort-algorithms';

test('swap test', () => {
    expect(swap([3,8,16,20], 1,2)).toStrictEqual([3,16,8,20]);
})

test('swapNew test', () => {
    expect(swapNew([3,8,16,20], 1,2)).toStrictEqual([3,16,8,20]);
})

test('bubbleSort test', () => {
    expect(bubbleSort([5,3,4,1,2])).toStrictEqual([1,2,3,4,5]);
    expect(bubbleSort([8,1,2,3,4,5,6,7])).toStrictEqual([1,2,3,4,5,6,7,8]);
})