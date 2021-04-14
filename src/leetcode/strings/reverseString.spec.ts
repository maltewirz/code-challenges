import { reverseString, reverseStringTwoPointer } from './reverseString';


test('Basic Test', () => {
    expect(reverseString(["h", "e", "l", "l", "o"])).toStrictEqual(["o", "l", "l", "e", "h"]);
    expect(reverseStringTwoPointer(["h", "e", "l", "l", "o"])).toStrictEqual(["o", "l", "l", "e", "h"]);

})