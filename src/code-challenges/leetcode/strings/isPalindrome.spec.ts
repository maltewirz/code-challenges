import { isPalindrome } from './isPalindrome';

test('Basic Test', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toStrictEqual(true);
    expect(isPalindrome('race a car')).toStrictEqual(false);
    expect(isPalindrome('0P')).toStrictEqual(false);
});
