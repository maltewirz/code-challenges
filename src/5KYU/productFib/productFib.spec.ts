import { productFib } from './productFib';

test('Basic test', () => {
    // expect(productFib(714)).toStrictEqual([21, 34, true]);
    expect(productFib(4895)).toStrictEqual([55, 89, true]);
    expect(productFib(5895)).toStrictEqual([89, 144, false]);
})