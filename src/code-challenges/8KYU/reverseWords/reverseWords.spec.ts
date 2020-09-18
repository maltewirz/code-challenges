import { reverseWords } from './reverseWords';

test('Basic Test', () => {
    expect(reverseWords("hello world!")).toStrictEqual("world! hello");
})