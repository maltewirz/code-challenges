import { min, max } from './minMax';

test('Basic Test min', () => {
    expect(min([-52, 56, 30, 29, -54, 0, -110])).toStrictEqual(-110);
});

test('Basic Test max', () => {
    expect(max([4, 6, 2, 1, 9, 63, -134, 566])).toStrictEqual(566);
});
