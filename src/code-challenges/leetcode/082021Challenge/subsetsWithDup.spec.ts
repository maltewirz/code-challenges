import { subsetsWithDup } from './subsetsWithDup';

test('Basic Test', () => {
    expect(subsetsWithDup([1, 2, 2])).toStrictEqual([
        [],
        [1],
        [1, 2],
        [1, 2, 2],
        [2],
        [2, 2],
    ]);
    expect(subsetsWithDup([0])).toStrictEqual([[], [0]]);
    expect(subsetsWithDup([1,2])).toStrictEqual([        [],
        [1],
        [1, 2],
        [2],
        ]);
    expect(subsetsWithDup([1, 2, 3])).toStrictEqual([
        [],
        [1],
        [1, 2],
        [1, 2, 3],
        [1, 3],
        [2],
        [2, 3],
        [3],
    ]);
});
