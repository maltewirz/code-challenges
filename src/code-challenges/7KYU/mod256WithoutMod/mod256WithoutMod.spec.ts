import { mod256WithoutMod } from './mod256WithoutMod';

test('Basic test', () => {
    expect(mod256WithoutMod(254)).toStrictEqual(254);
    expect(mod256WithoutMod(256)).toStrictEqual(0);
    expect(mod256WithoutMod(258)).toStrictEqual(2);
})