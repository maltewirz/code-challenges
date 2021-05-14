import { merge, merge2 } from './merge';

test('Basic test', () => {
    expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toStrictEqual([
        1, 2, 2, 3, 5, 6,
    ]);
    expect(merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toStrictEqual([
        1, 2, 2, 3, 5, 6,
    ]);
});
