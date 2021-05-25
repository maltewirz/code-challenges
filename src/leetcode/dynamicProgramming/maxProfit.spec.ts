import { maxProfit, maxProfitOnePass } from './maxProfit';

test('Basic Test', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toStrictEqual(5);
    expect(maxProfit([7, 6, 4, 3, 1])).toStrictEqual(0);
    expect(maxProfitOnePass([7, 1, 5, 3, 6, 4])).toStrictEqual(5);
});
