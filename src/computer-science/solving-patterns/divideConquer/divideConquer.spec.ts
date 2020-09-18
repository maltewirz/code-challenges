import { search } from './divideConquer';

test('Basic test', () => {
    expect(search([1,2,3,4,5,6],4)).toStrictEqual(3);
    expect(search([1,2,3,5,6],4)).toStrictEqual(-1);
})