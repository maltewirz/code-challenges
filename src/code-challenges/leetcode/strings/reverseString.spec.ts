import { reverseString, reverseStringTwoPointer, reverseStringTwoPointer2 } from './reverseString';

test('Basic Test', () => {
    expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toStrictEqual([
        'o',
        'l',
        'l',
        'e',
        'h',
    ]);
    expect(reverseStringTwoPointer(['h', 'e', 'l', 'l', 'o'])).toStrictEqual([
        'o',
        'l',
        'l',
        'e',
        'h',
    ]);
    expect(reverseStringTwoPointer(['h', 'e', 'l', 'l', 'o', '2'])).toStrictEqual([
        '2',
        'o',
        'l',
        'l',
        'e',
        'h',
    ]);
    expect(reverseStringTwoPointer2(['h', 'e', 'l', 'l', 'o'])).toStrictEqual([
        'o',
        'l',
        'l',
        'e',
        'h',
    ]);
    expect(reverseStringTwoPointer2(['h', 'e', 'l', 'l', 'o', '2'])).toStrictEqual([
        '2',
        'o',
        'l',
        'l',
        'e',
        'h',
    ]);
});
