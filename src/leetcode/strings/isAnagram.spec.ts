import { isAnagram, isAnagram2, isAnagram3, isAnagram4 } from './isAnagram';

test('Basic Test', () => {
    expect(isAnagram('anagram', 'nagaram')).toStrictEqual(true);
    expect(isAnagram('rat', 'car')).toStrictEqual(false);
    expect(isAnagram('ab', 'a')).toStrictEqual(false);

    expect(isAnagram2('anagram', 'nagaram')).toStrictEqual(true);
    expect(isAnagram2('rat', 'car')).toStrictEqual(false);
    expect(isAnagram2('ab', 'a')).toStrictEqual(false);

    expect(isAnagram3('anagram', 'nagaram')).toStrictEqual(true);
    expect(isAnagram3('rat', 'car')).toStrictEqual(false);
    expect(isAnagram3('ab', 'a')).toStrictEqual(false);

    expect(isAnagram4('anagram', 'nagaram')).toStrictEqual(true);
    expect(isAnagram4('rat', 'car')).toStrictEqual(false);
    expect(isAnagram4('ab', 'a')).toStrictEqual(false);
});
