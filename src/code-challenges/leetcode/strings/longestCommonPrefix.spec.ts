import { longestCommonPrefix, longestCommonPrefix2 } from './longestCommonPrefix';

test('Basic Test', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toStrictEqual(
        'fl'
    );
    expect(longestCommonPrefix(['fl', 'fl', 'fl'])).toStrictEqual('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toStrictEqual('');
    expect(longestCommonPrefix(['cir', 'car'])).toStrictEqual('c');
    expect(longestCommonPrefix(['aa', 'aa'])).toStrictEqual('aa');

    expect(longestCommonPrefix2(['flower', 'flow', 'flight'])).toStrictEqual(
        'fl'
    );
    expect(longestCommonPrefix2(['fl', 'fl', 'fl'])).toStrictEqual('fl');
    expect(longestCommonPrefix2(['dog', 'racecar', 'car'])).toStrictEqual('');
    expect(longestCommonPrefix2(['cir', 'car'])).toStrictEqual('c');
    expect(longestCommonPrefix2(['aa', 'aa'])).toStrictEqual('aa');
});
