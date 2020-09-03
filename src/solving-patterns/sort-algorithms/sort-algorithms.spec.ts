import { swap, swapNew, bubbleSort, selectionSort, insertionSort } from './sort-algorithms';

test('swap test', () => {
    expect(swap([3, 8, 16, 20], 1, 2)).toStrictEqual([3, 16, 8, 20]);
});

test('swapNew test', () => {
    expect(swapNew([3, 8, 16, 20], 1, 2)).toStrictEqual([3, 16, 8, 20]);
});

test('bubbleSort test', () => {
    expect(bubbleSort([5, 3, 4, 1, 2])).toStrictEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])).toStrictEqual([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
    ]);
});

test('selectionSort test', () => {
    expect(selectionSort([5, 3, 4, 1, 2])).toStrictEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([3,2,1])).toStrictEqual([1, 2, 3]);
});

test('insertionSort test', () => {
    expect(insertionSort([2,1,9,50,4])).toStrictEqual([1,2,4,9,50]);
    // expect(insertionSort([2,1,2,9,76,0])).toStrictEqual([0,1,2,2,9,76]);
    // expect(insertionSort([5, 3, 4, 1, 2])).toStrictEqual([1, 2, 3, 4, 5]);
    // expect(insertionSort([3,2,1])).toStrictEqual([1, 2, 3]);
});