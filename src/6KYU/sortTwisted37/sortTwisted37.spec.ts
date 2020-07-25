import { sortTwisted37 } from './sortTwisted37';

test('Basic test', () => {
    expect(sortTwisted37([12,13,14])).toStrictEqual([12,14,13]);
    // expect(sortTwisted37([13, 14])).toStrictEqual([14, 13]);
})