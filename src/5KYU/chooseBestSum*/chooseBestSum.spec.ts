import { chooseBestSum } from './chooseBestSum';

test('Basic test', () => {
    expect(chooseBestSum(174, 3, [50, 55, 57, 58, 60])).toStrictEqual(173);
    // expect(chooseBestSum(174, 2, [1, 2, 3])).toStrictEqual(5);
})