import { numPrimorial } from './numPrimorial';

test('Basic test', () => {
    expect(numPrimorial(3)).toStrictEqual(30);
    expect(numPrimorial(4)).toStrictEqual(210);
    expect(numPrimorial(5)).toStrictEqual(2310);
})