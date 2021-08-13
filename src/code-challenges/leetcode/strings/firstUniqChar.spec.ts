import { firstUniqChar, firstUniqChar2 } from './firstUniqChar';

test('Basic Test', () => {
    expect(firstUniqChar('leet')).toStrictEqual(0);
    expect(firstUniqChar('loveleetcode')).toStrictEqual(2);
    expect(firstUniqChar('aabb')).toStrictEqual(-1);

    expect(firstUniqChar2('leet')).toStrictEqual(0);
    expect(firstUniqChar2('loveleetcode')).toStrictEqual(2);
    expect(firstUniqChar2('aabb')).toStrictEqual(-1);
});
