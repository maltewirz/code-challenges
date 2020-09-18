import { findLongest } from './findLongest';

test('Basic test', () => {
    expect(findLongest([8, 500, 900])).toStrictEqual(500);
})