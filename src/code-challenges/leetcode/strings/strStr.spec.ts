import { strStr, strStrManual } from './strStr';

test('Basic Test', () => {
    expect(strStr('hello', 'll')).toStrictEqual(2);
    expect(strStr('aaaaa', 'bba')).toStrictEqual(-1);
    expect(strStr('', '')).toStrictEqual(0);
    expect(strStr('mississippi', 'issip')).toStrictEqual(4);
});

test('Basic Test Manual', () => {
    expect(strStrManual('hello', 'll')).toStrictEqual(2);
    expect(strStrManual('aaaaa', 'bba')).toStrictEqual(-1);
    expect(strStrManual('', '')).toStrictEqual(0);
    expect(strStrManual('mississippi', 'issip')).toStrictEqual(4);
});
