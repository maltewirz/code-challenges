import { sumMix } from './sumMix';

test('Basic Test', () => {
    expect(sumMix([9, 3, '7', '3'])).toStrictEqual(22)
})