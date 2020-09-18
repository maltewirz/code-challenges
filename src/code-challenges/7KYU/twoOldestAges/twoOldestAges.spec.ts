import { twoOldestAges } from './twoOldestAges';

test('basic test', () => {
    expect(twoOldestAges([1, 5, 87, 45, 8, 8])).toStrictEqual([45, 87]);
})