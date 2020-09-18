import { menFromBoys } from './menFromBoys';

test('Basic Test', () => {
    expect(menFromBoys([7, 3, 14, 17])).toStrictEqual([14, 17, 7, 3]);
});

test('Basic Test', () => {
    expect(menFromBoys([20, 33, 50, 34, 43, 46])).toStrictEqual([20, 34, 46, 50, 43, 33]);
});

test('Basic Test', () => {
    expect(menFromBoys([-32, -39, -35, -41])).toStrictEqual([-32, -35, -39, -41]);
});