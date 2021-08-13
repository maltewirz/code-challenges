import { reverseInteger,reverseInteger2 } from './reverseInteger';

test('Basic Test', () => {
    expect(reverseInteger(123)).toStrictEqual(321);
    expect(reverseInteger(-123)).toStrictEqual(-321);
    expect(reverseInteger(120)).toStrictEqual(21);
    expect(reverseInteger(1534236469)).toStrictEqual(0);
    expect(reverseInteger2(1230)).toStrictEqual(321);
    expect(reverseInteger2(-123)).toStrictEqual(-321);

});
