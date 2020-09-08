import {
    swap,
    swapNew,
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeHelper,
    mergeSort,
    quickSort,
    getDigitHelper,
    digitCountHelper,
    mostDigitsHelper,
    radixSort
} from './sort-algorithms';

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
    expect(selectionSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
});

test('insertionSort test', () => {
    expect(insertionSort([2, 1, 9, 50, 4])).toStrictEqual([1, 2, 4, 9, 50]);
    expect(insertionSort([2, 1, 2, 9, 76, 0])).toStrictEqual([
        0,
        1,
        2,
        2,
        9,
        76,
    ]);
    expect(insertionSort([5, 3, 4, 1, 2])).toStrictEqual([1, 2, 3, 4, 5]);
    expect(insertionSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
});

test('mergeHelper test', () => {
    expect(mergeHelper([1, 10, 50], [2, 14, 99, 100])).toStrictEqual([
        1,
        2,
        10,
        14,
        50,
        99,
        100,
    ]);
    expect(mergeHelper([1, 1, 50], [1, 2, 3, 6])).toStrictEqual([
        1,
        1,
        1,
        2,
        3,
        6,
        50,
    ]);
    expect(mergeHelper([], [1, 2])).toStrictEqual([1, 2]);
});

test('mergeSort test', () => {
    expect(mergeSort([14, 2, 7, 3])).toStrictEqual([2, 3, 7, 14]);
});

test('quickSort test', () => {
    expect(quickSort([26, 23, 27, 44, 17, 47, 39, 42, 43, 1])).toStrictEqual([
        1,
        17,
        23,
        26,
        27,
        39,
        42,
        43,
        44,
        47,
    ]);
});

test('getDigitHelper test', () => {
    expect(getDigitHelper(12345, 1)).toStrictEqual(4);
    expect(getDigitHelper(7323, 2)).toStrictEqual(3);
    expect(getDigitHelper(7323, 12)).toStrictEqual(0);
});

test('digitCountHelper test', () => {
    expect(digitCountHelper(23)).toStrictEqual(2);
    expect(digitCountHelper(0)).toStrictEqual(1);
    expect(digitCountHelper(1234567)).toStrictEqual(7);
});

test('mostDigitsHelper test', () => {
    expect(mostDigitsHelper([1234,56,7])).toStrictEqual(4);
});

test('radixSort test', () => {
    expect(radixSort([23,345,5467,12,2345,9852])).toStrictEqual([12,23,345,2345,5467,9852]);
});

