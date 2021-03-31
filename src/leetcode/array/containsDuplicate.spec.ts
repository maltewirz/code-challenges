import { containsDuplicate1, containsDuplicate2, containsDuplicate3 } from './containsDuplicate';

test('Basic Test', () => {
    expect(containsDuplicate1([1, 2, 3, 1])).toStrictEqual(true);
})

test('Basic Test', () => {
    expect(containsDuplicate2([1, 2, 3, 1])).toStrictEqual(true);
})

test('Basic Test', () => {
    expect(containsDuplicate3([1, 2, 3, 1])).toStrictEqual(true);
})