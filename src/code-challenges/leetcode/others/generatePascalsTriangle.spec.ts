import {
    generatePascalsTriangle,
    generatePascalsTriangle2,
} from './generatePascalsTriangle';

test('Basic Test', () => {
    expect(generatePascalsTriangle(5)).toStrictEqual([
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
    ]);
    expect(generatePascalsTriangle(3)).toStrictEqual([[1], [1, 1], [1, 2, 1]]);
    expect(generatePascalsTriangle2(5)).toStrictEqual([
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
    ]);
});
