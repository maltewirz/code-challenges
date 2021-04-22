import { strStr } from './strStr';

test('Basic Test', () => {
    expect(strStr("hello", "ll")).toStrictEqual(2);
    expect(strStr("aaaaa", "bba")).toStrictEqual(-1);
    expect(strStr("", "")).toStrictEqual(0);
    expect(strStr("mississippi", "issip")).toStrictEqual(4);
})