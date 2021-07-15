import { isPowerOfThree } from './isPowerOfThree';

test('Basic Test', () => {
    expect(isPowerOfThree(9)).toStrictEqual(true);
    expect(isPowerOfThree(27)).toStrictEqual(true);
    // expect(isPowerOfThree(0)).toStrictEqual(false);
    expect(isPowerOfThree(45)).toStrictEqual(false);
});
