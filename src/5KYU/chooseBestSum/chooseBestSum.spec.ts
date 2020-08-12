import { chooseBestSum } from './chooseBestSum';

test('Basic test', () => {
    expect(chooseBestSum(174, 3, [50, 55, 57, 58, 60])).toStrictEqual(173);
})