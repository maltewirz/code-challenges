import { rowWeights } from './rowWeights';

test('Basic test', () => {
    expect(rowWeights([13, 27, 49])).toStrictEqual([62, 27])
})