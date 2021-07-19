import {romanToInt} from './romanToInt';

test('Basic Test', () => {
    expect(romanToInt('III')).toStrictEqual(3)
    expect(romanToInt('IV')).toStrictEqual(4)
    expect(romanToInt('IX')).toStrictEqual(9)
    expect(romanToInt('LVIII')).toStrictEqual(58)
})