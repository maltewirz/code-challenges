import { past } from './past';

test('Basic test', () => {
    expect(past(0, 1, 1)).toStrictEqual(61000);
    expect(past(0, 2, 9)).toStrictEqual(129000);
});