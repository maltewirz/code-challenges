import { maxProfit } from './maxProfit';

test('Basic Test', () => {
    expect(maxProfit([1,2,3,4,5])).toStrictEqual(4)
    expect(maxProfit([7,1,5,3,6,4])).toStrictEqual(7)
})