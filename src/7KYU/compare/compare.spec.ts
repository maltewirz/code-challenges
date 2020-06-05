import { compare } from './compare';

test('Basic test', () => {
    // expect(compare("AD", "BC")).toStrictEqual(true);
    // expect(compare("AD", "DD")).toStrictEqual(false);
    expect(compare("zz1", "")).toStrictEqual(true);
})