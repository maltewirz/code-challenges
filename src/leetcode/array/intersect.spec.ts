import { intersect } from './intersect';

test('Basic Test', () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toStrictEqual([2, 2]);
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toStrictEqual([4, 9]);
    expect(intersect([2, 1], [1, 1])).toStrictEqual([1]);
})