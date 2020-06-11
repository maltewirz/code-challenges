import { xo } from './xo';

test('basic test', () => {
    expect(xo('xo')).toStrictEqual(true);
    expect(xo('xxOo')).toStrictEqual(true);
    expect(xo('Oo')).toStrictEqual(false);
})