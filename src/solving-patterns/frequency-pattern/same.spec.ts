import { sameOn, sameOn2 } from './same';

test('basic test', () => {
    expect(sameOn([1,2,3,2], [4,1,9,4])).toStrictEqual(true);
    expect(sameOn([1,2,3,3], [4,1,9,4])).toStrictEqual(false);
    expect(sameOn2([1,2,3,2], [4,1,9,4])).toStrictEqual(true);
    expect(sameOn2([1,2,3,3], [4,1,9,4])).toStrictEqual(false);
})