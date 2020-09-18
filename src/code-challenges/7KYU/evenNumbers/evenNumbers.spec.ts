import { evenNumbers } from './evenNumbers';

test('basic test', () => {
    expect(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toStrictEqual([4, 6, 8]);
    expect(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)).toStrictEqual([-8, 26]);
})