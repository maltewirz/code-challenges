import { growingPlant } from './growingPlant';

test('Basic Test', () => {
    expect(growingPlant(100, 10, 910)).toStrictEqual(10)
    expect(growingPlant(10, 9, 4)).toStrictEqual(1)
    expect(growingPlant(5,2,5)).toStrictEqual(1)
})