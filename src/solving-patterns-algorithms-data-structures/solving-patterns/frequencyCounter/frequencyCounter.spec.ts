import {
    sameOn,
    sameOn2,
    anagram,
    anagramSingleCounter,
    areThereDuplicatesSolutionA,
    areThereDuplicatesSolutionB,
    sameFrequency
} from './frequencyCounter';

test('sameOn test', () => {
    expect(sameOn([2, 2], [4, 4])).toStrictEqual(true);
    expect(sameOn([1, 2, 3, 2], [4, 1, 9, 4])).toStrictEqual(true);
    expect(sameOn([1, 2, 3, 3], [4, 1, 9, 4])).toStrictEqual(false);
});
test('sameOn2 test', () => {
    expect(sameOn2([1, 2, 3, 2], [4, 1, 9, 4])).toStrictEqual(true);
    expect(sameOn2([1, 2, 3, 3], [4, 1, 9, 4])).toStrictEqual(false);
});
test('anagram test', () => {
    expect(anagram('anagram', 'nagaram')).toStrictEqual(true);
    expect(anagram('anagram', 'nagaraa')).toStrictEqual(false);
    expect(anagram('', '')).toStrictEqual(true);
    expect(anagram('aaz', 'zza')).toStrictEqual(false);
    expect(anagram('anagram', 'nagaraa')).toStrictEqual(false);
    expect(anagram('anagram', 'nagara')).toStrictEqual(false);
    expect(anagram('abccc', 'abcd')).toStrictEqual(false);
});

test('anagramSingleCounter test', () => {
    expect(anagramSingleCounter('anagram', 'nagaram')).toStrictEqual(true);
    expect(anagramSingleCounter('anagram', 'nagaraa')).toStrictEqual(false);
    expect(anagramSingleCounter('', '')).toStrictEqual(true);
    expect(anagramSingleCounter('aaz', 'zza')).toStrictEqual(false);
    expect(anagramSingleCounter('anagram', 'nagaraa')).toStrictEqual(false);
    expect(anagramSingleCounter('anagram', 'nagara')).toStrictEqual(false);
    expect(anagramSingleCounter('abcc', 'abcd')).toStrictEqual(false);
});

test('areThereDuplicatesSolutionA test', () => {
    expect(areThereDuplicatesSolutionA(1, 2, 3)).toStrictEqual(false);
    expect(areThereDuplicatesSolutionA(1,2,2)).toStrictEqual(true);
    expect(areThereDuplicatesSolutionA('a', 'b', 'c', 'a')).toStrictEqual(true);
});

test('areThereDuplicatesSolutionB test', () => {
    expect(areThereDuplicatesSolutionB(1, 2, 3)).toStrictEqual(false);
    expect(areThereDuplicatesSolutionB(1,2,2)).toStrictEqual(true);
    expect(areThereDuplicatesSolutionB('a', 'b', 'c', 'a')).toStrictEqual(true);
});

test('sameFrequency test', () => {
    expect(sameFrequency(182, 281)).toStrictEqual(true);
    expect(sameFrequency(34, 14)).toStrictEqual(false);
})