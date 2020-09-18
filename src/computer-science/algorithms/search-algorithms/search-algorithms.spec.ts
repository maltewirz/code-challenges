import {
    linearSearch,
    binarySearch,
    naiveStringSearch,
    naiveStringSearchRefactor,
} from './search-algorithms';

test('linearSearch test', () => {
    expect(linearSearch(['A', 'B', 'C', 'D', 'E'], 'B')).toStrictEqual(1);
});

test('binarySearch test', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toStrictEqual(1);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toStrictEqual(6);
});

test('naiveStringSearch test', () => {
    expect(naiveStringSearch('wowomgzomg', 'omg')).toStrictEqual(2);
});

test('naiveStringSearchRefactor test', () => {
    expect(naiveStringSearchRefactor('wowomgzomg', 'omg')).toStrictEqual(2);
});
