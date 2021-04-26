import { maxProfit, maxProfitBest } from './maxProfit';

test('Basic Test maxProfit', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toStrictEqual(4);
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toStrictEqual(7);
});

test('Basic Test maxProfitBest', () => {
    expect(maxProfitBest([1, 2, 3, 4, 5])).toStrictEqual(4);
    expect(maxProfitBest([7, 1, 5, 3, 6, 4])).toStrictEqual(7)
});
