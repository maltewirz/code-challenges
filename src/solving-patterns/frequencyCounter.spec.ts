import { sameOn, sameOn2, anagram, anagramSingleCounter } from './frequencyCounter';

test('sameOn test', () => {
    expect(sameOn([2,2], [4,4])).toStrictEqual(true);
    expect(sameOn([1,2,3,2], [4,1,9,4])).toStrictEqual(true);
    expect(sameOn([1,2,3,3], [4,1,9,4])).toStrictEqual(false);
})
test('sameOn2 test', () => {
    expect(sameOn2([1,2,3,2], [4,1,9,4])).toStrictEqual(true);
    expect(sameOn2([1,2,3,3], [4,1,9,4])).toStrictEqual(false);
})
test('anagram test', () => {
    expect(anagram('anagram', 'nagaram')).toStrictEqual(true);
    expect(anagram('anagram', 'nagaraa')).toStrictEqual(false);
    expect(anagram('', '')).toStrictEqual(true);
    expect(anagram('aaz', 'zza')).toStrictEqual(false);
    expect(anagram('anagram', 'nagaraa')).toStrictEqual(false);
    expect(anagram('anagram', 'nagara')).toStrictEqual(false);
    expect(anagram('abccc', 'abcd')).toStrictEqual(false);
})

test('anagramSingleCounter test', () => {
    expect(anagramSingleCounter('anagram', 'nagaram')).toStrictEqual(true);
    expect(anagramSingleCounter('anagram', 'nagaraa')).toStrictEqual(false);
    expect(anagramSingleCounter('', '')).toStrictEqual(true);
    expect(anagramSingleCounter('aaz', 'zza')).toStrictEqual(false);
    expect(anagramSingleCounter('anagram', 'nagaraa')).toStrictEqual(false);
    expect(anagramSingleCounter('anagram', 'nagara')).toStrictEqual(false);
    expect(anagramSingleCounter('abcc', 'abcd')).toStrictEqual(false);

})