import { longestCommonPrefix } from './longestCommonPrefix';

test('Basic Test', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toStrictEqual(
        'fl'
    );
    expect(longestCommonPrefix(['fl', 'fl', 'fl'])).toStrictEqual('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toStrictEqual('');
    expect(longestCommonPrefix(['cir', 'car'])).toStrictEqual('c');
    expect(longestCommonPrefix(['aa', 'aa'])).toStrictEqual('aa');
});
