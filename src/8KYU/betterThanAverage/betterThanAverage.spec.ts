import { betterThanAverage } from './betterThanAverage';

test('basic test', () => {
    expect(betterThanAverage([2, 3],5)).toStrictEqual(true)
})