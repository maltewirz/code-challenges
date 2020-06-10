import { isNegativeZero } from './isNegativeZero';

test('basic test', () => {
    expect(isNegativeZero(-0)).toStrictEqual(true);
    expect(isNegativeZero(-5)).toStrictEqual(false);
    expect(isNegativeZero(5)).toStrictEqual(false);
})