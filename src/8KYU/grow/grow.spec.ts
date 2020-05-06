import { grow } from './grow';


test('Basic test', () => {
    expect(grow([1, 2, 3])).toStrictEqual(6)
})