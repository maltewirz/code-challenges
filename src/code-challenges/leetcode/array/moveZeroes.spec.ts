import { moveZeroes, moveZeroes2, moveZeroes3 } from './moveZeroes';

test('Basic Test', () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toStrictEqual([1, 3, 12, 0, 0]);
    expect(moveZeroes2([0, 1, 0, 3, 12])).toStrictEqual([1, 3, 12, 0, 0]);
    expect(moveZeroes3([0, 1, 0, 3, 12])).toStrictEqual([1, 3, 12, 0, 0]);
});
