import { myAtoi } from './myAtoi';

test('Basic Test', () => {
    expect(myAtoi("42")).toStrictEqual(42);
    expect(myAtoi("   -42")).toStrictEqual(-42);
    expect(myAtoi("4193 with words")).toStrictEqual(4193);
    expect(myAtoi("words and 987")).toStrictEqual(0);
    expect(myAtoi("-91283472332")).toStrictEqual(-2147483648);
    expect(myAtoi("+-12")).toStrictEqual(0);
    expect(myAtoi("+")).toStrictEqual(0);
    
})