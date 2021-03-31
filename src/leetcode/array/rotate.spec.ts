import { rotate1, rotate2 } from './rotate';

test('Basic Test 1', () => {
    expect(rotate1([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
})

test('Basic Test 2', () => {
    expect(rotate2([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
})