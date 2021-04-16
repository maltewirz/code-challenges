import { firstUniqChar } from './firstUniqChar';

test('Basic Test', () => {
    expect(firstUniqChar('leet')).toStrictEqual(0)
    expect(firstUniqChar('loveleetcode')).toStrictEqual(2)
    expect(firstUniqChar('aabb')).toStrictEqual(-1)
})