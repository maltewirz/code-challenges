import { isAnagram, isAnagram2 } from './isAnagram';

test('Basic Test', () => {
    expect(isAnagram('anagram', 'nagaram')).toStrictEqual(true);
    expect(isAnagram('rat', 'car')).toStrictEqual(false);
    expect(isAnagram('ab', 'a')).toStrictEqual(false);
    expect(isAnagram2('anagram', 'nagaram')).toStrictEqual(true);
    expect(isAnagram2('rat', 'car')).toStrictEqual(false);
    expect(isAnagram2('ab', 'a')).toStrictEqual(false);
})