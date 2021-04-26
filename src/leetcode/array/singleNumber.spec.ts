import { singleNumber } from './singleNumber';

test('Basic Test', () => {
    expect(singleNumber([2, 2, 1])).toStrictEqual(1);
    expect(singleNumber([4, 1, 2, 1, 2])).toStrictEqual(4);
});
