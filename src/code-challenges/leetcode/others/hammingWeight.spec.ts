import { hammingWeight } from './hammingWeight';

test('Basic Test', () => {
    expect(hammingWeight('00000000000000000000000000001011')).toStrictEqual(3);
});
