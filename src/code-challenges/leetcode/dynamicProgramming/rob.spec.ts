import { robRecursive, robIterative } from './rob';

test('Basic test', () => {
    expect(robRecursive([1, 2, 3, 1])).toStrictEqual(4);
    // expect(robIterative([1, 2, 3, 1])).toStrictEqual(4);
    expect(robIterative([2, 7, 9, 3, 1])).toStrictEqual(12);
});
