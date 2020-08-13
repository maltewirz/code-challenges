import { listSquared } from './listSquared';

test('Basic test', () => {
    expect(listSquared(1, 250)).toStrictEqual([[1, 1], [42, 2500], [246, 84100]]);
})